import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host([ui5-cb-item]){height:auto;min-height:var(--_ui5-v2-8-0-rc-2_list_item_base_height)}:host([ui5-cb-item]) .ui5-li-root{min-height:var(--_ui5-v2-8-0-rc-2_list_item_base_height)}:host([ui5-cb-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}:host([ui5-cb-item][text][additional-text]) .ui5-li-text-wrapper{gap:1rem}
`;
//# sourceMappingURL=ComboBoxItem.css.js.map