import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/CardHeader.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-card-header{position:relative;display:flex;align-items:center;padding:var(--_ui5-v2-3-0-rc-1_card_header_padding);outline:none}:host([subtitleText]) .ui5-card-header{align-items:flex-start}:host([desktop]) .ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before,.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-visible:before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-3-0-rc-1_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);left:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);right:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);bottom:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_bottom_radius)}:host([desktop]) .ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus):before,.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-3-0-rc-1_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);left:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);right:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);bottom:var(--_ui5-v2-3-0-rc-1_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-3-0-rc-1_card_header_focus_bottom_radius)}.ui5-card-header-focusable-element{outline:none}.ui5-card-header-focusable-element{display:inherit;align-items:inherit;flex:1;min-width:0}.ui5-card-header.ui5-card-header--interactive:hover{cursor:pointer;background:var(--_ui5-v2-3-0-rc-1_card_header_hover_bg)}.ui5-card-header.ui5-card-header--active,.ui5-card-header.ui5-card-header--interactive:active{background:var(--_ui5-v2-3-0-rc-1_card_header_active_bg)}.ui5-card-header .ui5-card-header-text{flex:1;min-width:0;pointer-events:none}.ui5-card-header-first-line{display:flex;flex-flow:row;justify-content:space-between}.ui5-card-header-additionalText{flex:none}.ui5-card-header .ui5-card-header-avatar{height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;margin-inline-end:.75rem;pointer-events:none;align-self:flex-start}::slotted([ui5-icon]){width:1.5rem;height:1.5rem;color:var(--sapTile_IconColor)}::slotted(img[slot="avatar"]){width:100%;height:100%;border-radius:50%}.ui5-card-header .ui5-card-header-additionalText{display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapTile_TextColor);text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;margin-inline-start:1rem;margin-block-start:.125rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{font-family:var(--_ui5-v2-3-0-rc-1_card_header_title_font_family);font-size:var(--_ui5-v2-3-0-rc-1_card_header_title_font_size);font-weight:var(--_ui5-v2-3-0-rc-1_card_header_title_font_weight);color:var(--sapTile_TitleTextColor);max-height:3.5rem;align-self:flex-end}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapTile_TextColor);margin-top:var(--_ui5-v2-3-0-rc-1_card_header_subtitle_margin_top);max-height:2.1rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title,.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{text-align:start;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;max-width:100%}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{-webkit-line-clamp:3}.ui5-card-header-action{display:flex;padding-inline-start:1rem;align-self:flex-start}
` };
export default styleData;
//# sourceMappingURL=CardHeader.css.js.map