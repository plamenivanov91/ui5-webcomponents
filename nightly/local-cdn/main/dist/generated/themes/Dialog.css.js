import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Dialog.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-3-0-rc-3_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0-rc-3_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0-rc-3_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0-rc-3_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-3-0-rc-3_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-3-0-rc-3_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-3-0-rc-3_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-3-0-rc-3_dialog_header_focus_right_offset);top:var(--_ui5-v2-3-0-rc-3_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-3-0-rc-3_dialog_header_border_radius) var(--_ui5-v2-3-0-rc-3_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-3-0-rc-3_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:-.5rem;inset-inline-end:-.5rem;cursor:var(--_ui5-v2-3-0-rc-3_dialog_resize_cursor);width:1.5rem;height:1.5rem;border-radius:50%}.ui5-popup-resize-handle [ui5-icon]{color:var(--sapButton_Lite_TextColor)}::slotted([slot="footer"]){height:var(--_ui5-v2-3-0-rc-3_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}::slotted([slot="footer"][ui5-toolbar]){border:0}:host::backdrop{background-color:var(--_ui5-v2-3-0-rc-3_popup_block_layer_background);opacity:var(--_ui5-v2-3-0-rc-3_popup_block_layer_opacity)}.ui5-block-layer{display:block}
` };
export default styleData;
//# sourceMappingURL=Dialog.css.js.map