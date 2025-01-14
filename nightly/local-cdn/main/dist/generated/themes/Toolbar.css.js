import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host(:not([hidden])){width:100%;height:var(--_ui5-v2-6-2-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-6-2-toolbar-padding-left) 0 var(--_ui5-v2-6-2-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit;gap:var(--_ui5-v2-6-2-toolbar-items-gap)}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-separator{height:var(--_ui5-v2-6-2-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
`;
//# sourceMappingURL=Toolbar.css.js.map