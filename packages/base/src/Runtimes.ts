import { getAllRegisteredTags } from "./CustomElementsRegistry.js";
import { getCustomElementsScopingRules, getCustomElementsScopingSuffix } from "./CustomElementsScopeUtils.js";
import VersionInfo from "./generated/VersionInfo.js";
import getSharedResource from "./getSharedResource.js";

type RuntimeData = VersionInfo & {
	alias: string,
	description: string,
};

let currentRuntimeIndex: number;
let currentRuntimeAlias = "";

const compareCache = new Map<string, number>();

/**
 * Central registry where all runtimes register themselves by pushing an object.
 * The index in the registry servers as an ID for the runtime.
 * @type {*}
 */
const Runtimes = getSharedResource<Array<RuntimeData>>("Runtimes", []);

/**
 * Registers the current runtime in the shared runtimes resource registry
 */
const registerCurrentRuntime = () => {
	if (currentRuntimeIndex === undefined) {
		currentRuntimeIndex = Runtimes.length;
		const versionInfo = VersionInfo;

		Runtimes.push({
			...versionInfo,
			get scopingSuffix() {
				return getCustomElementsScopingSuffix();
			},
			get registeredTags() {
				return getAllRegisteredTags();
			},
			get scopingRules() {
				return getCustomElementsScopingRules();
			},
			alias: currentRuntimeAlias,
			description: `Runtime ${currentRuntimeIndex} - ver ${versionInfo.version}${currentRuntimeAlias ? ` (${currentRuntimeAlias})` : ""}`,
		});
	}
};

/**
 * Returns the index of the current runtime's object in the shared runtimes resource registry
 * @returns {*}
 */
const getCurrentRuntimeIndex = () => {
	return currentRuntimeIndex;
};

/**
 * Compares two runtimes and returns 1 if the first is of a bigger version, -1 if the second is of a bigger version, and 0 if equal
 * @param index1 The index of the first runtime to compare
 * @param index2 The index of the second runtime to compare
 * @returns {number}
 */
const compareRuntimes = (index1: number, index2: number) => {
	const cacheIndex = `${index1},${index2}`;
	if (compareCache.has(cacheIndex)) {
		return compareCache.get(cacheIndex)!;
	}

	const runtime1 = Runtimes[index1];
	const runtime2 = Runtimes[index2];

	if (!runtime1 || !runtime2) {
		throw new Error("Invalid runtime index supplied");
	}

	// If any of the two is a next version, bigger buildTime wins
	if (runtime1.isNext || runtime2.isNext) {
		return runtime1.buildTime - runtime2.buildTime;
	}

	// If major versions differ, bigger one wins
	const majorDiff = runtime1.major - runtime2.major;
	if (majorDiff) {
		return majorDiff;
	}

	// If minor versions differ, bigger one wins
	const minorDiff = runtime1.minor - runtime2.minor;
	if (minorDiff) {
		return minorDiff;
	}

	// If patch versions differ, bigger one wins
	const patchDiff = runtime1.patch - runtime2.patch;
	if (patchDiff) {
		return patchDiff;
	}

	// Bigger suffix wins, f.e. rc10 > rc9
	// Important: suffix is alphanumeric, must use natural compare
	const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
	const result = collator.compare(runtime1.suffix, runtime2.suffix);

	compareCache.set(cacheIndex, result);
	return result;
};

/**
 * Set an alias for the the current app/library/microfrontend which will appear in debug messages and console warnings
 * @param alias
 */
const setRuntimeAlias = (alias: string) => {
	currentRuntimeAlias = alias;
};

const getAllRuntimes = () => {
	return Runtimes;
};

export {
	getCurrentRuntimeIndex,
	registerCurrentRuntime,
	compareRuntimes,
	setRuntimeAlias,
	getAllRuntimes,
};
