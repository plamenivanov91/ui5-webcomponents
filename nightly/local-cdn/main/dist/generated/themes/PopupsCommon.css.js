import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/PopupsCommon.css.ts", content: `:host{position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v2-3-0-rc-3_popup_border_radius);min-height:2rem;box-sizing:border-box}:host([open]){display:flex}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v2-3-0-rc-3_popup_header_shadow);border-bottom:var(--_ui5-v2-3-0-rc-3_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v2-3-0-rc-3_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{min-height:var(--_ui5-v2-3-0-rc-3_popup_default_header_height);max-height:var(--_ui5-v2-3-0-rc-3_popup_default_header_height);line-height:var(--_ui5-v2-3-0-rc-3_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-flex;justify-content:var(--_ui5-v2-3-0-rc-3_popup_header_prop_header_text_alignment)}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v2-3-0-rc-3_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([no-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0-rc-3_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0-rc-3_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-3-0-rc-3_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v2-3-0-rc-3_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_s);padding-right:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_xl);padding-right:var(--_ui5-v2-3-0-rc-3_popup_header_footer_padding_xl)}
` };
export default styleData;
//# sourceMappingURL=PopupsCommon.css.js.map