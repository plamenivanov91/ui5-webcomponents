declare const _default: ":host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{width:100%;min-width:6rem;color:var(--sapField_TextColor);min-height:var(--_ui5-v2-8-0_textarea_min_height);font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);font-style:normal;box-sizing:border-box;line-height:var(--_ui5-v2-8-0_textarea_line_height);margin:var(--_ui5-v2-8-0_textarea_margin)}:host([value-state][disabled]) .ui5-textarea-wrapper,:host(:not([value-state]):not([readonly]):not([focused])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper,:host([value-state=\"None\"]:not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper{background:var(--sapField_BackgroundStyle);background-color:var(--sapField_Background)}:host(:not([value-state]):not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper,:host([value-state=\"None\"]:not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper{background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background);border:var(--_ui5-v2-8-0_textarea_hover_border)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper,:host([value-state=\"None\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{box-shadow:var(--sapField_Hover_Shadow)}.ui5-textarea-root{width:100%;height:inherit;min-height:var(--_ui5-v2-8-0_textarea_min_height);display:inline-flex;vertical-align:top;outline:none;box-sizing:border-box;border-radius:inherit;border-color:inherit;position:relative}.ui5-textarea-wrapper{position:relative;box-sizing:border-box;width:100%;border-bottom:none;display:flex;height:100%;background-color:var(--sapField_Background);border-color:var(--sapField_BorderColor);border-radius:var(--sapField_BorderCornerRadius);border-width:var(--sapField_BorderWidth);border-style:var(--sapField_BorderStyle);padding:var(--_ui5-v2-8-0_textarea_wrapper_padding);outline:none}:host([disabled]) .ui5-textarea-wrapper{opacity:var(--_ui5-v2-8-0_textarea_disabled_opacity);cursor:default;pointer-events:none}:host(:not([readonly])) .ui5-textarea-wrapper,:host([readonly][disabled]) .ui5-textarea-wrapper{box-shadow:var(--sapField_Shadow)}:host([value-state]) .ui5-textarea-wrapper{border-color:inherit}:host([focused]) .ui5-textarea-wrapper{background-color:var(--sapField_Focus_Background);background-image:none;box-shadow:none}:host([focused]) .ui5-textarea-wrapper:after{content:var(--_ui5-v2-8-0_textarea_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-8-0_textarea_focus_outline_color);border-radius:var(--_ui5-v2-8-0_textarea_focus_border_radius);top:var(--_ui5-v2-8-0_textarea_focus_offset);bottom:var(--_ui5-v2-8-0_textarea_focus_offset);left:var(--_ui5-v2-8-0_textarea_focus_offset);right:var(--_ui5-v2-8-0_textarea_focus_offset)}:host([focused][readonly]) .ui5-textarea-wrapper:after{top:var(--_ui5-v2-8-0_textarea_readonly_focus_offset);bottom:var(--_ui5-v2-8-0_textarea_readonly_focus_offset);left:var(--_ui5-v2-8-0_textarea_readonly_focus_offset);right:var(--_ui5-v2-8-0_textarea_readonly_focus_offset)}:host([focused][value-state=\"Negative\"]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=\"Critical\"]:not([disabled])) .ui5-textarea-wrapper:after,:host([focused][value-state=\"Information\"]:not([disabled])) .ui5-textarea-wrapper:after{top:var(--_ui5-v2-8-0_textarea_value_state_focus_offset);bottom:var(--_ui5-v2-8-0_textarea_value_state_focus_offset);left:var(--_ui5-v2-8-0_textarea_value_state_focus_offset);right:var(--_ui5-v2-8-0_textarea_value_state_focus_offset)}.ui5-textarea-inner{border:none;box-sizing:border-box;width:100%;margin:0;padding:var(--_ui5-v2-8-0_textarea_padding_top) var(--_ui5-v2-8-0_textarea_padding_right_and_left) var(--_ui5-v2-8-0_textarea_padding_bottom);color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;overflow:auto;resize:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;background:transparent;outline:none}:host([growing]) .ui5-textarea-inner{box-sizing:border-box;height:100%;position:absolute;top:0;left:0}.ui5-textarea-mirror{box-sizing:border-box;line-height:var(--_ui5-v2-8-0_textarea_line_height);visibility:hidden;width:100%;max-height:94vh;min-height:calc((var(--_textarea_rows) * var(--_ui5-v2-8-0_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom));word-break:break-all;padding-top:var(--_ui5-v2-8-0_textarea_padding_top);padding-bottom:var(--_ui5-v2-8-0_textarea_padding_bottom);font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);white-space:pre-wrap;overflow-y:auto}:host([style*=\"height\"]) .ui5-textarea-root,:host([growing][style*=\"height\"]) .ui5-textarea-wrapper{height:inherit;min-height:var(--_ui5-v2-8-0_textarea_min_height)}:host([rows]) .ui5-textarea-inner,:host([rows]) .ui5-textarea-mirror{min-height:calc((var(--_textarea_rows) * var(--_ui5-v2-8-0_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host:not([rows]) .ui5-textarea-inner{min-height:calc(2 * var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host([growing]):not([growing-max-rows=\"0\"]) .ui5-textarea-inner{max-height:100%}:host([growing-max-rows]:not([growing-max-rows=\"0\"])) .ui5-textarea-mirror{max-height:calc((var(--_textarea_growing_max_rows) * var(--_ui5-v2-8-0_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host([rows=\"1\"]) .ui5-textarea-inner{min-height:calc(var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host([growing-max-rows=\"1\"]) .ui5-textarea-inner,:host([growing-max-rows=\"1\"]) .ui5-textarea-mirror{max-height:calc(var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom));min-height:calc(var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host([rows=\"1\"][growing-max-rows]) .ui5-textarea-inner,:host([rows=\"1\"][growing-max-rows]) .ui5-textarea-mirror{min-height:calc(var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom));max-height:calc((var(--_textarea_growing_max_rows) * var(--_ui5-v2-8-0_textarea_line_height)) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top) + var(--_ui5-v2-8-0_textarea_padding_bottom))}:host([value-state=\"Negative\"]) .ui5-textarea-mirror,:host([value-state=\"Critical\"]) .ui5-textarea-mirror{padding-top:var(--_ui5-v2-8-0_textarea_padding_top_error_warning);padding-bottom:var(--_ui5-v2-8-0_textarea_padding_bottom_error_warning);min-height:calc(var(--_textarea_rows) * var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top_error_warning) + var(--_ui5-v2-8-0_textarea_padding_bottom_error_warning))}:host([growing-max-rows=\"1\"][value-state=\"Negative\"]) .ui5-textarea-inner,:host([growing-max-rows=\"1\"][value-state=\"Negative\"]) .ui5-textarea-mirror :host([growing-max-rows=\"1\"][value-state=\"Critical\"]) .ui5-textarea-inner,:host([growing-max-rows=\"1\"][value-state=\"Critical\"]) .ui5-textarea-mirror{max-height:var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top_error_warning) + var(--_ui5-v2-8-0_textarea_padding_bottom_error_warning);min-height:var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top_error_warning) + var(--_ui5-v2-8-0_textarea_padding_bottom_error_warning)}:host([value-state=\"Information\"]) .ui5-textarea-mirror{padding-top:var(--_ui5-v2-8-0_textarea_padding_top_information);padding-bottom:var(--_ui5-v2-8-0_textarea_padding_bottom_information);min-height:calc(var(--_textarea_rows) * var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top_information) + var(--_ui5-v2-8-0_textarea_padding_bottom_information))}:host([growing-max-rows=\"1\"][value-state=\"Information\"]) .ui5-textarea-inner,:host([growing-max-rows=\"1\"][value-state=\"Information\"]) .ui5-textarea-mirror{max-height:var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top__ui5_textarea_padding_top_information) + var(--_ui5-v2-8-0_textarea_padding_bottom__ui5_textarea_padding_top_information);min-height:var(--_ui5-v2-8-0_textarea_line_height) * var(--sapFontSize) + var(--_ui5-v2-8-0_textarea_padding_top_error_warning) + var(--_ui5-v2-8-0_textarea_padding_bottom_information)}:host([readonly]:not([disabled])){border-color:var(--sapField_ReadOnly_BorderColor)}:host([readonly]:not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v2-8-0_textarea_padding_top_readonly) var(--_ui5-v2-8-0_textarea_padding_right_and_left_readonly) var(--_ui5-v2-8-0_textarea_padding_bottom_readonly)}:host([readonly]:not([disabled])) .ui5-textarea-root .ui5-textarea-wrapper{background-color:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor);border-style:var(--_ui5-v2-8-0_textarea_readonly_border_style)}:host([show-exceeded-text]) .ui5-textarea-root{flex-direction:column}.ui5-textarea-inner::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-8-0_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-8-0_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}.ui5-textarea-inner:-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-8-0_textarea_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=\"Negative\"]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5-v2-8-0_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v2-8-0_textarea_error_placeholder_font_style);color:var(--_ui5-v2-8-0_textarea_error_placeholder_color)}:host([value-state=\"Negative\"]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5-v2-8-0_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v2-8-0_textarea_error_placeholder_font_style);color:var(--_ui5-v2-8-0_textarea_error_placeholder_color)}:host([value-state=\"Critical\"]) .ui5-textarea-inner::-moz-placeholder{font-weight:var(--_ui5-v2-8-0_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v2-8-0_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=\"Critical\"]) .ui5-textarea-inner::-webkit-input-placeholder{font-weight:var(--_ui5-v2-8-0_textarea_value_state_error_warning_placeholder_font_weight);font-style:var(--_ui5-v2-8-0_textarea_error_placeholder_font_style);color:var(--sapField_PlaceholderTextColor)}:host([value-state=\"Negative\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--sapField_InvalidColor);box-shadow:var(--sapField_InvalidShadow)}:host([value-state=\"Negative\"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background-color:var(--_ui5-v2-8-0_textarea_focused_value_state_error_background);border-color:var(--sapField_InvalidColor)}:host([value-state=\"Negative\"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v2-8-0_textarea_focused_value_state_error_focus_outline_color)}:host([value-state=\"Negative\"]:not([readonly]):not([focused]):not([disabled]):hover) .ui5-textarea-wrapper{background-color:var(--_ui5-v2-8-0_textarea_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state=\"Negative\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=\"Critical\"]:not([readonly]):not([disabled])) .ui5-textarea-inner{font-style:var(--_ui5-v2-8-0_textarea_error_warning_font_style);font-weight:var(--_ui5-v2-8-0_textarea_error_warning_font_weight);padding:var(--_ui5-v2-8-0_textarea_padding_top_error_warning) var(--_ui5-v2-8-0_textarea_padding_right_and_left_error_warning) var(--_ui5-v2-8-0_textarea_padding_bottom_error_warning)}:host([value-state=\"Negative\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper,:host([value-state=\"Critical\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{border-style:var(--_ui5-v2-8-0_textarea_error_warning_border_style);border-width:var(--_ui5-v2-8-0_textarea_state_border_width);padding:var(--_ui5-v2-8-0_textarea_warning_error_wrapper_padding)}:host([value-state=\"Negative\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=\"Critical\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-inner{border-style:none}:host([value-state=\"Critical\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--sapField_WarningColor);box-shadow:var(--sapField_WarningShadow)}:host([value-state=\"Critical\"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v2-8-0_textarea_focused_value_state_warning_background);border-color:var(--sapField_WarningColor)}:host([value-state=\"Critical\"][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v2-8-0_textarea_focused_value_state_warning_focus_outline_color)}:host([value-state=\"Critical\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state=\"Positive\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--sapField_SuccessColor);border-width:var(--sapField_BorderWidth);box-shadow:var(--sapField_SuccessShadow);padding:var(--_ui5-v2-8-0_textarea_success_wrapper_padding)}:host([value-state=\"Positive\"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v2-8-0_textarea_focused_value_state_success_background);border-color:var(--sapField_SuccessColor)}:host([value-state=\"Positive\"][focused]:not([readonly])) .ui5-textarea-wrapper:after{border-color:var(--_ui5-v2-8-0_textarea_focused_value_state_success_focus_outline_color)}:host([value-state=\"Positive\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state][value-state=\"Positive\"]) .ui5-textarea-inner{border-radius:var(--sapField_BorderCornerRadius)}:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-inner{padding:var(--_ui5-v2-8-0_textarea_padding_top_information) var(--_ui5-v2-8-0_textarea_padding_right_and_left_information) var(--_ui5-v2-8-0_textarea_padding_bottom_information)}:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper{background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--sapField_InformationColor);box-shadow:var(--sapField_InformationShadow);padding:var(--_ui5-v2-8-0_textarea_information_wrapper_padding);border-width:var(--_ui5-v2-8-0_textarea_information_border_width);border-style:var(--_ui5-v2-8-0_textarea_error_warning_border_style)}:host([value-state=\"Information\"][focused]:not([readonly])) .ui5-textarea-wrapper{background-color:var(--_ui5-v2-8-0_textarea_focused_value_state_information_background);border-color:var(--sapField_InformationColor)}:host([value-state=\"Information\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-textarea-exceeded-text{align-self:flex-end;padding:.125rem .125rem .5rem;color:var(--sapContent_LabelColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSmallSize)}:host([readonly]) .ui5-textarea-exceeded-text,:host([disabled]) .ui5-textarea-exceeded-text{display:none}:host .ui5-content-custom-scrollbars ::-webkit-scrollbar{border-top-right-radius:var(--sapField_BorderCornerRadius);border-bottom-right-radius:var(--sapField_BorderCornerRadius)}:host([value-state=\"Negative\"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state=\"Critical\"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state=\"Information\"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([value-state=\"Positive\"]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}:host([focused]) .ui5-content-custom-scrollbars ::-webkit-scrollbar{background-image:none}\n";
export default _default;
