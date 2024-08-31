import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/CheckBox.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}:host{overflow:hidden;max-width:100%;outline:none;border-radius:var(--_ui5-v2-2-0-rc-3_checkbox_border_radius);transition:var(--_ui5-v2-2-0-rc-3_checkbox_transition);cursor:pointer;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host([disabled]){cursor:default}:host([disabled]) .ui5-checkbox-root{opacity:var(--_ui5-v2-2-0-rc-3_checkbox_disabled_opacity)}:host([disabled]) .ui5-checkbox-inner{border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_disabled_border_color)}:host([disabled]) .ui5-checkbox-label{color:var(--_ui5-v2-2-0-rc-3_checkbox_disabled_label_color)}:host([readonly]:not([value-state="Critical"]):not([value-state="Negative"])) .ui5-checkbox-inner{background:var(--sapField_ReadOnly_Background);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_readonly_border);color:var(--sapField_TextColor)}:host(:not([wrapping-type="None"])[text]) .ui5-checkbox-root{min-height:auto;box-sizing:border-box;align-items:flex-start;padding-top:var(--_ui5-v2-2-0-rc-3_checkbox_root_side_padding);padding-bottom:var(--_ui5-v2-2-0-rc-3_checkbox_root_side_padding)}:host(:not([wrapping-type="None"])[text]) .ui5-checkbox-root .ui5-checkbox-label{overflow-wrap:break-word;align-self:center}:host([desktop][text]:not([wrapping-type="None"])) .ui5-checkbox-root:focus:before,.ui5-checkbox-root[text]:focus-visible:before{inset-block:var(--_ui5-v2-2-0-rc-3_checkbox_wrapped_focus_inset_block)}:host([value-state="Negative"]) .ui5-checkbox-inner,:host([value-state="Negative"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--sapField_InvalidBackground);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_error_border);color:var(--sapField_InvalidColor)}:host([value-state="Negative"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_inner_error_background_hover)}:host([value-state="Critical"]) .ui5-checkbox-inner,:host([value-state="Critical"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--sapField_WarningBackground);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_warning_border);color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_warning_color)}:host([value-state="Critical"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_inner_warning_background_hover)}:host([value-state="Information"]) .ui5-checkbox-inner,:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--sapField_InformationBackground);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_information_border);color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_information_color)}:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_inner_information_background_hover)}:host([value-state="Positive"]) .ui5-checkbox-inner,:host([value-state="Positive"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--sapField_SuccessBackground);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_success_border);color:var(--sapField_SuccessColor)}:host([value-state="Positive"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_inner_success_background_hover)}:host([value-state="Critical"]) .ui5-checkbox-icon,:host([value-state="Critical"][indeterminate]) .ui5-checkbox-inner:after{color:var(--_ui5-v2-2-0-rc-3_checkbox_checkmark_warning_color)}.ui5-checkbox-root{position:relative;display:inline-flex;align-items:center;width:100%;min-height:var(--_ui5-v2-2-0-rc-3_checkbox_width_height);min-width:var(--_ui5-v2-2-0-rc-3_checkbox_width_height);padding:0 var(--_ui5-v2-2-0-rc-3_checkbox_wrapper_padding);outline:none;transition:var(--_ui5-v2-2-0-rc-3_checkbox_transition);border:var(--_ui5-v2-2-0-rc-3_checkbox_default_focus_border);border-radius:var(--_ui5-v2-2-0-rc-3_checkbox_border_radius);box-sizing:border-box}:host([desktop]) .ui5-checkbox-root:focus:before,.ui5-checkbox-root:focus-visible:before{display:var(--_ui5-v2-2-0-rc-3_checkbox_focus_outline_display);content:"";position:absolute;inset-inline:var(--_ui5-v2-2-0-rc-3_checkbox_focus_position);inset-block:var(--_ui5-v2-2-0-rc-3_checkbox_focus_position);border:var(--_ui5-v2-2-0-rc-3_checkbox_focus_outline);border-radius:var(--_ui5-v2-2-0-rc-3_checkbox_focus_border_radius)}:host([text]) .ui5-checkbox-root{padding-inline-end:var(--_ui5-v2-2-0-rc-3_checkbox_right_focus_distance)}:host([text]) .ui5-checkbox-root:focus:before,:host([text]) .ui5-checkbox-root:focus-visible:before{inset-inline-end:0}:host(:hover:not([disabled])){background:var(--_ui5-v2-2-0-rc-3_checkbox_outer_hover_background)}.ui5-checkbox--hoverable .ui5-checkbox-label:hover{color:var(--_ui5-v2-2-0-rc-3_checkbox_label_color)}:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active]):not([checked])[value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_hover_background);border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_hover_border_color)}:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active])[checked][value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v2-2-0-rc-3_checkbox_hover_background);border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_hover_checked_border_color)}:host([checked]:not([value-state])) .ui5-checkbox-inner,:host([checked][value-state="None"]) .ui5-checkbox-inner{border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_selected_border_color)}:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active]:not([checked])[value-state="None"]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_active_border_color);background-color:var(--_ui5-v2-2-0-rc-3_checkbox_active_background)}:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active][checked][value-state="None"]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5-v2-2-0-rc-3_checkbox_inner_selected_border_color);background-color:var(--_ui5-v2-2-0-rc-3_checkbox_active_background)}.ui5-checkbox-inner{min-width:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);max-width:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);height:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);max-height:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);border:var(--_ui5-v2-2-0-rc-3_checkbox_inner_border);border-radius:var(--_ui5-v2-2-0-rc-3_checkbox_inner_border_radius);background:var(--_ui5-v2-2-0-rc-3_checkbox_inner_background);color:var(--_ui5-v2-2-0-rc-3_checkbox_checkmark_color);box-sizing:border-box;position:relative;cursor:inherit}:host([indeterminate][checked]) .ui5-checkbox-inner:after{content:"";background-color:currentColor;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:var(--_ui5-v2-2-0-rc-3_checkbox_partially_icon_size);height:var(--_ui5-v2-2-0-rc-3_checkbox_partially_icon_size)}:host input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit}.ui5-checkbox-root .ui5-checkbox-label{margin-inline-start:var(--_ui5-v2-2-0-rc-3_checkbox_label_offset);cursor:inherit;text-overflow:ellipsis;overflow:hidden;pointer-events:none;color:var(--_ui5-v2-2-0-rc-3_checkbox_label_color)}.ui5-checkbox-icon{width:var(--_ui5-v2-2-0-rc-3_checkbox_icon_size);height:var(--_ui5-v2-2-0-rc-3_checkbox_icon_size);color:currentColor;cursor:inherit;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}:host([display-only]){cursor:default}:host([display-only]) .ui5-checkbox-display-only-icon-inner [ui5-icon]{color:var(--sapTextColor)}:host([display-only]) .ui5-checkbox-display-only-icon-inner{min-width:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);max-width:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);height:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);max-height:var(--_ui5-v2-2-0-rc-3_checkbox_inner_width_height);display:flex;align-items:center;justify-content:center}
` };
export default styleData;
//# sourceMappingURL=CheckBox.css.js.map