import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/NavigationMenuItem.css.ts", content: `:host::part(native-li){padding-left:.5rem;width:auto}:host::part(native-li):after{border-radius:.375rem;inset:0}:host{display:flex;align-items:center;width:100%;box-sizing:border-box;position:relative;height:var(--_ui5-v2-3-0-rc-3_side_navigation_item_height);min-height:var(--_ui5-v2-3-0-rc-3_side_navigation_item_height);border-radius:.375rem;transition:var(--_ui5-v2-3-0-rc-3_side_navigation_item_transition);color:var(--sapList_TextColor);font-weight:700;font-size:var(--sapFontSize);border-bottom:none}:host .ui5-navmenu-item-link{text-decoration:none;color:var(--sapList_TextColor)}.ui5-navigation-menu-item-root .ui5-menu-item-icon-end{position:relative;inset-inline-end:auto;width:.75rem;height:.75rem;color:var(--sapList_TextColor)}.ui5-navigation-menu-item-root .ui5-sn-item-external-link-icon{color:var(--_ui5-v2-3-0-rc-3_side_navigation_external_link_icon_color);min-width:2rem;height:.875rem}:host::part(icon){color:var(--sapList_TextColor);min-width:1rem;min-height:1rem}:host([focused]):not([active]){background:none}
` };
export default styleData;
//# sourceMappingURL=NavigationMenuItem.css.js.map