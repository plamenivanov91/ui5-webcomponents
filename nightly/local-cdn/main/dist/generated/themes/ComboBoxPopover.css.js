import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.ui5-combobox-busy{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:42;display:flex;justify-content:center;align-items:center;pointer-events:all;width:100%}.ui5-combobox-busy:not([active]){display:none}
`;
//# sourceMappingURL=ComboBoxPopover.css.js.map