import { registerThemePropertiesLoader } from "../../dist/asset-registries/Themes.js";

const defaultTheme = {
	content: `:root{ --var1: grey; }`,
	packageName: "",
	fileName: "",
};

const fiori3 = {
	content: `:root{ --var1: red; }`,
	packageName: "",
	fileName: "",
};

const fiori3Dark = {
	content: `:root{ --var1: green; }`,
	packageName: "",
	fileName: "",
};

const fiori3Hcb = {
	content: `:root{ --var1: yellow; }`,
	packageName: "",
	fileName: "",
};

const fiori3Hcw = {
	content: `:root{ --var1: yellow; }`,
	packageName: "",
	fileName: "",
};

registerThemePropertiesLoader("@ui5/webcomponents-base-test", "sap_horizon", () => defaultTheme);
registerThemePropertiesLoader("@ui5/webcomponents-base-test", "sap_fiori_3", () => fiori3);
registerThemePropertiesLoader("@ui5/webcomponents-base-test", "sap_fiori_3_dark", () => fiori3Dark);
registerThemePropertiesLoader("@ui5/webcomponents-base-test", "sap_fiori_3_hcb", () => fiori3Hcb);
registerThemePropertiesLoader("@ui5/webcomponents-base-test", "sap_fiori_3_hcw", () => fiori3Hcw);
