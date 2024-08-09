import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TabContainer.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%}.ui5-tc-root{display:flex;flex-direction:column;width:100%;height:100%;font-family:"72override",var(--sapFontFamily);font-size:1rem}.ui5-tc__header{position:relative;display:flex;align-items:center;background-color:var(--_ui5-v2-2-0-rc-0_tc_header_background);--ui5-v2-2-0-rc-0_tc_header_active_background_color: var(--_ui5-v2-2-0-rc-0_tc_header_background);height:var(--_ui5-v2-2-0-rc-0_tc_header_height);box-shadow:var(--_ui5-v2-2-0-rc-0_tc_header_box_shadow);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__header{border-top:var(--_ui5-v2-2-0-rc-0_tc_header_border_bottom)}:host([header-background-design="Transparent"]) .ui5-tc__header{background-color:transparent;--ui5-v2-2-0-rc-0_tc_header_active_background_color: transparent}:host([header-background-design="Translucent"]) .ui5-tc__header{background-color:var(--_ui5-v2-2-0-rc-0_tc_header_background_translucent);--ui5-v2-2-0-rc-0_tc_header_active_background_color: var(--_ui5-v2-2-0-rc-0_tc_header_background_translucent)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__header{height:var(--_ui5-v2-2-0-rc-0_tc_header_height_text_only)}.ui5-tc-root.ui5-tc--textOnly.ui5-tc--withAdditionalText.ui5-tc--standardTabLayout .ui5-tc__header{height:var(--_ui5-v2-2-0-rc-0_tc_header_height_text_with_additional_text)}.ui5-tc__tabStrip{flex:1;display:flex;overflow:hidden;box-sizing:border-box;position:relative;white-space:nowrap}.ui5-tc__separator:focus{outline:none}.ui5-tc__overflow{flex:0 0 0}.ui5-tc__overflow.ui5-tc__overflow--end{padding-inline-start:.188rem;margin-inline-end:1rem}.ui5-tc__overflow.ui5-tc__overflow--start{margin-inline-start:1rem}.ui5-tc__overflow[hidden]{display:none}.ui5-tc__overflow>[ui5-button]{border-radius:.75rem;height:1.5rem;--_ui5-v2-2-0-rc-0_button_focused_border_radius: .75rem}.ui5-tc__overflow>[ui5-button]:not([active]){color:var(--_ui5-v2-2-0-rc-0_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button]:not([active]):hover{color:var(--_ui5-v2-2-0-rc-0_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button][focused]{outline-offset:.125rem;--_ui5-v2-2-0-rc-0_button_focused_border: none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__content{height:calc(100% - var(--_ui5-v2-2-0-rc-0_tc_header_height_text_only))}.ui5-tc__content{position:relative;display:flex;height:calc(100% - var(--_ui5-v2-2-0-rc-0_tc_header_height));background-color:var(--_ui5-v2-2-0-rc-0_tc_content_background);border-bottom:var(--_ui5-v2-2-0-rc-0_tc_content_border_bottom);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__content{border-top:var(--_ui5-v2-2-0-rc-0_tc_content_border_bottom)}:host([content-background-design="Transparent"]) .ui5-tc__content{background-color:transparent}:host([content-background-design="Translucent"]) .ui5-tc__content{background-color:var(--_ui5-v2-2-0-rc-0_tc_content_background_translucent)}.ui5-tc__content--collapsed{display:none}.ui5-tc--transparent .ui5-tc__content{background-color:transparent}.ui5-tc__contentItem{max-height:100%;display:flex;flex-grow:1;overflow:auto}.ui5-tc__contentItem[hidden]{display:none}.ui5-tc__header{padding:0}.ui5-tc__content{padding:1rem}:host([media-range="M"]) .ui5-tc__header,:host([media-range="L"]) .ui5-tc__header{padding:0 1rem}:host([media-range="M"]) .ui5-tc__content,:host([media-range="L"]) .ui5-tc__content{padding:1rem 2rem}:host([media-range="XL"]) .ui5-tc__header{padding:0 2rem}:host([media-range="XL"]) .ui5-tc__content{padding:1rem 3rem}
` };
export default styleData;
//# sourceMappingURL=TabContainer.css.js.map