import { assert } from "chai";

const isMacOS = process.platform === 'darwin';
const keyCtrlToPress = isMacOS ? 'Command' : 'Control';

describe("Toast general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/Toast.html`);
	});

	it("tests open attribute before show", async () => {
		const toast = await browser.$("#wcToastME");

		assert.strictEqual(await toast.getAttribute("open"), null,
			"Open attribute shouldn't be present before Toast is shown");
	});

	it("tests open attribute after show", async () => {
		const button = await browser.$("#wcBtnShowToastMC");
		const toast = await browser.$("#wcToastMC");
		const toastShadowContent = await toast.shadow$(".ui5-toast-root");

		await button.click();

		assert.strictEqual(await toast.getAttribute("open"), "true",
			"Open attribute should be present after Toast is shown");
		assert.ok(await toastShadowContent.isDisplayedInViewport(),
			"Toast's content div should be displayed in the viewport after its opening.")
	});

	it("tests open property", async () => {
		const button = await browser.$("#wcBtnShowToastBS");
		const toast = await browser.$("#wcToastBS");
		const toastShadowContent = await toast.shadow$(".ui5-toast-root");

		assert.notOk(await toastShadowContent.isDisplayedInViewport(),
			"Toast's content div should be displayed in the viewport after its opening.");
		assert.notOk(await toast.getProperty("open"),
			"open property value should be false before Toast is shown");

		await button.click();

		assert.strictEqual(await toast.getProperty("open"), true,
			"open property value should be true when Toast is shown");

		assert.ok(await toastShadowContent.isDisplayedInViewport(),
			"Toast's content div should be displayed in the viewport after its opening.")
	});

	it("tests duration property", async () => {
		const button = await browser.$("#wcBtnShowToastTC");
		const toast = await browser.$("#wcToastTC");

		await button.click();

		assert.strictEqual(await toast.getProperty("duration"), 3000,
			"Duration property should be the default 3000ms");
	});

	it("tests placement property", async () => {
		const button = await browser.$("#wcBtnShowToastBC");
		const toast = await browser.$("#wcToastBC");

		await button.click();

		assert.strictEqual(await toast.getProperty("placement"), "BottomCenter",
			"Placement should be the default BottomCenter");
	});

	it("tests shadow content div role", async () => {
		const button = await browser.$("#wcBtnShowToastBE");
		const toastShadowContent = await browser.$("#wcToastBE").shadow$(".ui5-toast-root");

		await button.click();

		assert.strictEqual(await toastShadowContent.getAttribute("role"), "alert",
			"The role of the shadow ui5-toast-root div should be alert");
	});

	it("tests shadow content div inline styles with default duration", async () => {
		const button = await browser.$("#wcBtnShowToastBE");
		const toast = await browser.$("#wcToastBE");
		const EXPECTED_STYLES = "transition-duration: 1000ms; transition-delay: 2000ms; opacity: 0;";

		await button.click();

		const styleValue = await toast.getAttribute("style");
		assert.include(styleValue, EXPECTED_STYLES,
			"The correct default inline styles are applied to the shadow ui5-toast-root");
	});

	it("tests shadow content div inline styles with long duration", async () => {
		const button = await browser.$("#wcBtnShowToastBS");
		const toast = await browser.$("#wcToastBS");
		const maximumAllowedTransition = 1000;
		const durationProperty = await toast.getProperty("duration");
		let calculatedDelay;

		await button.click();

		calculatedDelay = `${durationProperty - maximumAllowedTransition}ms`;

		const EXPECTED_STYLES = `transition-duration: ${maximumAllowedTransition}ms; transition-delay: ${calculatedDelay}; opacity: 0;`;

		const styleValue = await toast.getAttribute("style");
		assert.include(styleValue, EXPECTED_STYLES,
				"The correct custom inline styles are applied to the shadow ui5-toast-root," +
				"when the duration is longer than default. Transition is not longer than allowed (1000ms).");
	});

	it("tests shadow content div inline styles with short duration", async () => {
		const button = await browser.$("#wcBtnShowToastME");
		const toast = await browser.$("#wcToastME");
		const durationProperty = await toast.getProperty("duration");
		let calculatedTransition, calculatedDelay;

		await button.click();

		calculatedTransition = durationProperty / 3;
		calculatedDelay = `${durationProperty - calculatedTransition}ms`;

		const EXPECTED_STYLES = `transition-duration: ${calculatedTransition}ms; transition-delay: ${calculatedDelay}; opacity: 0;`;

		const styleValue = await toast.getAttribute("style");
		assert.include(styleValue, EXPECTED_STYLES,
				"The correct custom inline styles are applied to the shadow ui5-toast-root," +
				"when the duration is shorter than default. Transition is a third of the duration.");
	});

	it("tests closing of toast", async () => {
		const button = await browser.$("#wcBtnShowToastMS");
		const toast = await browser.$("#wcToastMS");

		await button.click();

		await browser.waitUntil(async () => {
			const open = await toast.getProperty("open");
			const openAttribute = await toast.getAttribute("open");
			return !open && !openAttribute;
		}, {
			timeout: 2000,
			timeoutMsg: "After 2000ms the toast should be closed and open should be removed"
		});
	});

	it("tests minimum allowed duration", async () => {
		const toast = await browser.$("#wcToastTE");

		assert.strictEqual(await toast.getProperty("effectiveDuration"), 500,
				"Duration property is forced to be 500, when -1 is passed for duration attribute.");
	});
});

describe("Keyboard handling", () => {
	beforeEach(async () => {
		await browser.url(`test/pages/Toast.html`);
	});

	it("focus should be correct toggling keyboard combination ctrl/command + shift + m and return the focus to the opener", async () => {
		const button = await browser.$("#wcBtnShowToastTC");

		await button.click();
		await browser.keys([keyCtrlToPress, "Shift", "m"]);

		let activeElementId = await browser.$(await browser.getActiveElement()).getAttribute("id");
		assert.strictEqual(activeElementId, "wcToastTC", "Focus is on toast");

		await browser.keys([keyCtrlToPress, "Shift", "m"]);
		activeElementId = await browser.$(await browser.getActiveElement()).getAttribute("id");
		assert.strictEqual(activeElementId, "wcBtnShowToastTC", "Focus is return on button");
	});

	it("toast should be closed on pressing esc key", async () => {
		const button = await browser.$("#wcBtnShowToastTC");
		const toast = await browser.$("#wcToastTC");

		await button.click();
		await browser.pause(1000);
		await browser.keys([keyCtrlToPress, "Shift", "m"]);
		await browser.pause(3000);
		assert.ok(await toast.getProperty("open"), "Toast should stay open");

		await toast.keys("Escape");
		await browser.pause(5000);
		assert.notOk(await toast.getProperty("open"), "Toast should be closed");
	});

	it("Opens two toasts in a row and focuses the last open", async () => {
		const firstOpener = await browser.$("#wcBtnShowToastTS");
		const secondOpener = await browser.$("#wcBtnShowToastTC");
		const toast = await browser.$("#wcToastTC");

		await firstOpener.click();
		await secondOpener.click();

		await browser.keys([keyCtrlToPress, "Shift", "m"]);
		await browser.pause(3000);

		assert.ok(await toast.getProperty("open"), "second Toast should stay open");
	});
});

describe("Customisation", async () => {
	beforeEach(async () => {
		await browser.url(`test/pages/Toast.html`);
	});

	it("should check sizes to the toast", async () => {
		const btn = await $("#wcBtnShowToastStyled");
		const styledToast = await $("#wcToastStyled")

		await btn.click();

		const width = await styledToast.getSize("width");
		const height = await styledToast.getSize("height");

		assert.strictEqual(width, 300, "width is custom");
		assert.strictEqual(height, 64, "height is custom");
	});
});
