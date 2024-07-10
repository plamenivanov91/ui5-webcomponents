import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "addresses";
const pathData = "M32 256l96-96 96 96v192H32V256zm256 192V256l96-96 96 96v192H288zM0 240v-42L128 64l128 128L384 64l64 61V64h32v91l32 30v55L384 121 256 240 128 121zm320 29v147h32v-96h64v96h32V269l-64-64zM96 416v-96h64v96h32V269l-64-64-64 64v147h32z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/addresses";
export { pathData, ltr, accData };