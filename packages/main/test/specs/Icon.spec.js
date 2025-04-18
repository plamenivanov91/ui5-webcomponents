import { assert } from "chai";

describe("Icon general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/Icon.html`);
	});

	it("Tests icon rendering", async () => {
		const iconRoot = await browser.$("#interactive-icon").shadow$("ui5-icon-root");
		const iconWithTooltip = await browser.$("#iconWithTooltip");
		const iconTooltip = await iconWithTooltip.shadow$(`#${await iconWithTooltip.getProperty("_id")}-tooltip`);
		const ICON_TOOLTIP_TEXT = "Save";

		assert.ok(iconRoot, "Icon is rendered");
		assert.include(await iconTooltip.getHTML(false), ICON_TOOLTIP_TEXT,
			"Built-in tooltip is correct");
	});

	it("Tests events 'click' and 'ui5-click' events", async () => {
		// (1) on mouse click (no matter the noConflict mode), the icon fires the native "click" event
		// (2) on SPACE and ENTER
		// - noConflict: false - the icon fires "click" (custom event)
		// - noConflict: true - the icon fires "click" and "ui5-click" (custom events)

		// Interactive icon
		const interactiveIcon = await browser.$("#interactive-icon");
		const inpClickRes = await browser.$("#click-event");
		const inpUI5ClickRes = await browser.$("#ui5-click-event");

		await interactiveIcon.click();
		assert.strictEqual(await inpClickRes.getAttribute("value"), "1", "The 'click' event is fired.");
		assert.strictEqual(await inpUI5ClickRes.getAttribute("value"), "0", "The 'ui5-click' event is not fired on mouse click.");

		await interactiveIcon.keys("Enter");
		assert.strictEqual(await inpClickRes.getAttribute("value"), "2", "Enter fires 'click'");
		assert.strictEqual(await inpUI5ClickRes.getAttribute("value"), "1", "Enter fires 'ui5-click'");

		await interactiveIcon.keys("Space");
		assert.strictEqual(await inpClickRes.getAttribute("value"), "3", "Space fires 'click'");
		assert.strictEqual(await inpUI5ClickRes.getAttribute("value"), "2", "Space fires 'ui5-click'");

		// Non-interactive icon
		const nonInteractiveIcon = await browser.$("#non-interactive-icon");
		const inpClickRes2 = await browser.$("#click-event-2");
		const inpUI5ClickRes2 = await browser.$("#ui5-click-event-2");

		await nonInteractiveIcon.click();
		assert.strictEqual(await inpClickRes2.getAttribute("value"), "1", "The 'click' event is fired.");
		assert.strictEqual(await inpUI5ClickRes2.getAttribute("value"), "0", "The 'ui5-click' event is not fired on mouse click..");
	});

	it("Tests switch to sap_horizon", async () => {
		// assert - initial SVG path
		const iconPath = await browser.$("#myIcon").shadow$(".ui5-icon-root path");
		const pathValue = await iconPath.getAttribute("d");

		// act - switch theme
		await browser.executeAsync( async (newTheme, done) => {
			const config = window['sap-ui-webcomponents-bundle'].configuration;
			await config.setTheme(newTheme);
			done();
		}, "sap_fiori_3");

		// assert - SVG path changed
		const iconPathAfter = await browser.$("#myIcon").shadow$(".ui5-icon-root path");
		const iconPathValueAfter = await iconPathAfter.getAttribute("d");
		assert.notEqual(iconPathValueAfter, pathValue, "Icon's path is changed in sap_fiori_3.");
	});

	it("Tests icon modules' exported values", async () => {
		const expectedExportedValues = "accept|SAP-icons-v4/accept|SAP-icons-v5/accept|tnt/actor|tnt-v2/actor|tnt-v3/actor|business-suite/3d|business-suite-v1/3d|business-suite-v2/3d";
		const actualExportedValues = await browser.executeAsync(done => {
			const exportedIconValues = window["sap-ui-webcomponents-bundle"].getExportedIconsValues();
			done(exportedIconValues.join("|"));
		});
		assert.strictEqual(actualExportedValues, expectedExportedValues, "Exported values are correct.");
	});

	it("Icon svg aria-label cleaned after name change", async () => {
		// assert - initial SVG aria-label
		let iconEl = await browser.$("#iconError");
		let iconSVG = await browser.$("#iconError").shadow$(".ui5-icon-root");
		assert.equal(await iconSVG.getAttribute("aria-label"), "Error");

		// act
		iconEl.setAttribute("name", "sap-icon://add");

		// assert - new aria-label is added to SVG element
		iconEl = await browser.$("#iconError");
		iconSVG = await browser.$("#iconError").shadow$(".ui5-icon-root");
		assert.equal(await iconSVG.getAttribute("aria-label"), "Add");

		// act
		iconEl.setAttribute("name", "sap-icon://less");

		// assert - new aria-label is added to SVG element
		iconEl = await browser.$("#iconError");
		iconSVG = await browser.$("#iconError").shadow$(".ui5-icon-root");
		assert.equal(await iconSVG.getAttribute("aria-label"), null);
	});

	it("Tests getIconAccessibleName", async () => {
		const expectedAccNames = ["Add", "Back to Top", "Collapse", "Download"];
		const actualAccNames = await browser.executeAsync(async done => {
			const values = await Promise.all(["add", "back-to-top", "collapse", "download"].map(iconName => {
				return window["sap-ui-webcomponents-bundle"].getIconAccessibleName(iconName);
			}));
			done(values);
		});

		assert.strictEqual(actualAccNames.join(), expectedAccNames.join(),
			"getIconAccessibleName returns the correct icon a11y names.");
	});

	it("Tests mode property", async () => {
		let icon = await browser.$("#imageIcon");
		let iconSVG = await browser.$("#imageIcon").shadow$(".ui5-icon-root");
		let mode = icon.getProperty("mode");
		const intercativeMode = "Interactive";
		const imageMode = "Image";
		const decorativeMode = "Decorative";

		assert.equal(await mode, decorativeMode, "Decorative mode is correctly set by default.");
		assert.equal(await iconSVG.getAttribute("role"), "presentation", "The SVG for the decorative icon has the correct role.");
		assert.equal(await iconSVG.getAttribute("aria-hidden"), "true", "The SVG for the decorative icon includes aria-hidden=true as expected");

		await icon.setProperty("mode", intercativeMode)
		mode = await icon.getProperty("mode");

		assert.equal(await mode, intercativeMode, "Interactive mode is correctly set.");
		assert.equal(await iconSVG.getAttribute("role"), "button", "The SVG for the interactive icon has the correct role.");

		await icon.setProperty("mode", imageMode)
		mode = await icon.getProperty("mode");

		assert.equal(await iconSVG.getAttribute("role"), "img", "The SVG for the image icon has the correct role.");
	});
});
