import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.ui5-li-icon{color:var(--sapList_TextColor);min-width:var(--_ui5-v2-8-0_list_item_icon_size);min-height:var(--_ui5-v2-8-0_list_item_icon_size);padding-inline-end:var(--_ui5-v2-8-0_list_item_icon_padding-inline-end)}
`;
//# sourceMappingURL=ListItemIcon.css.js.map