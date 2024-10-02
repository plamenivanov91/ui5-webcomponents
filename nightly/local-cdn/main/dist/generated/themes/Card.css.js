import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Card.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-card-root{width:100%;height:100%;color:var(--sapGroup_TitleTextColor);background:var(--sapTile_Background);box-shadow:var(--_ui5-v2-3-0-rc-3_card_box_shadow);border-radius:var(--_ui5-v2-3-0-rc-3_card_border-radius);border:var(--_ui5-v2-3-0-rc-3_card_border);overflow:hidden;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-card-busy-indicator{width:100%;height:100%;border-radius:var(--_ui5-v2-3-0-rc-3_card_border-radius)}.ui5-card-inner{width:100%;height:100%}.ui5-card-root.ui5-card--interactive:hover{box-shadow:var(--_ui5-v2-3-0-rc-3_card_hover_box_shadow)}.ui5-card-root.ui5-card--interactive:active{box-shadow:var(--_ui5-v2-3-0-rc-3_card_box_shadow)}.ui5-card-root.ui5-card--nocontent{height:auto}.ui5-card-root.ui5-card--nocontent .ui5-card-header-root{border-bottom:none}.ui5-card--nocontent ::slotted([ui5-card-header]){--_ui5-v2-3-0-rc-3_card_header_focus_bottom_radius: var(--_ui5-v2-3-0-rc-3_card_header_focus_radius)}.ui5-card-root .ui5-card-header-root{border-bottom:var(--_ui5-v2-3-0-rc-3_card_header_border)}
` };
export default styleData;
//# sourceMappingURL=Card.css.js.map