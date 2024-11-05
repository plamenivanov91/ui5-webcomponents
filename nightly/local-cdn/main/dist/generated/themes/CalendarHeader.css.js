import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/CalendarHeader.css.ts", content: `:host{display:block;width:100%;height:100%}.ui5-calheader-root{display:flex;height:100%;padding:var(--_ui5-v2-4-0_calendar_header_padding);box-sizing:border-box}.ui5-calheader-arrowbtn{display:flex;justify-content:center;align-items:center;width:var(--_ui5-v2-4-0_calendar_header_arrow_button_width);background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);cursor:pointer;overflow:hidden;white-space:nowrap;padding:0;font-size:var(--sapFontSize);user-select:none}.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:hover,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:active,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:focus,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled{opacity:.4;cursor:default;outline:none;background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor)}[hidden].ui5-calheader-arrowbtn.ui5-calheader-middlebtn{display:none}.ui5-calheader-arrowbtn:focus{outline:none}.ui5-calheader-arrowbtn:hover{background-color:var(--sapButton_Hover_Background);color:var(--sapButton_Lite_TextColor);box-shadow:var(--_ui5-v2-4-0_calendar_header_arrow_button_box_shadow)}.ui5-calheader-arrowbtn:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-calheader-arrowbtn,.ui5-calheader-middlebtn{border:var(--_ui5-v2-4-0_calendar_header_arrow_button_border);border-radius:var(--_ui5-v2-4-0_calendar_header_arrow_button_border_radius);display:flex;background-color:var(--sapButton_Lite_Background);border-color:var(--sapButton_Lite_BorderColor)}.ui5-calheader-middlebtn{flex-direction:column;align-items:center;justify-content:center}.ui5-calheader-arrowbtn:not(:active) .ui5-calheader-btn-sectext{color:var(--sapNeutralElementColor);font-size:var(--sapFontSmallSize)}.ui5-calheader-arrowicon{color:currentColor;pointer-events:none}.ui5-calheader-midcontainer{display:flex;justify-content:space-around;flex:1 1 auto;padding:0 .5rem}.ui5-calheader-midcontainer .ui5-calheader-middlebtn:first-child{margin-inline-end:.5rem}.ui5-calheader-middlebtn{font-family:var(--_ui5-v2-4-0_button_fontFamily);width:var(--_ui5-v2-4-0_calendar_header_middle_button_width);flex:var(--_ui5-v2-4-0_calendar_header_middle_button_flex);position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ui5-calheader-middlebtn:focus{border:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_border);border-radius:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_border_radius);outline:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_outline);outline-offset:-.125rem;background:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_background)}.ui5-calheader-middlebtn:focus:active{outline:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_active_outline);outline-offset:-.0625rem;background:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_active_background)}.ui5-calheader-middlebtn:focus:after{content:"";display:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_display);width:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_width);height:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_height);border:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_border);position:absolute;top:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_top_offset);left:var(--_ui5-v2-4-0_calendar_header_middle_button_focus_after_left_offset)}.ui5-calheader-middlebtn:focus:active:after{border-color:var(--sapContent_ContrastFocusColor)}
` };
export default styleData;
//# sourceMappingURL=CalendarHeader.css.js.map