import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/DynamicPageTitle.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:flex;flex-direction:column;position:relative;width:100%;background-color:var(--_ui5-v2-3-0-rc-3_dynamic_page_header_background_color);min-height:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_min_height);word-wrap:break-word;padding-top:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_padding_top);padding-bottom:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_padding_bottom);border-bottom:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_border)}:host(:not([interactive])){box-shadow:var(--_ui5-v2-3-0-rc-3_dynamic_page_header-box-shadow)}:host .ui5-dynamic-page-title-root{display:inherit;flex-direction:inherit;width:inherit;height:inherit}:host:host([interactive]:hover),:host:host([interactive][hovered]){background-color:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_hover_background);cursor:pointer;border-bottom:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_hover_border)}:host([snapped]){box-shadow:var(--sapContent_HeaderShadow)}:host([has-snapped-title-on-mobile]){min-height:var(--_ui5-v2-3-0-rc-3_dynamic_page_snapped_title_on_mobile_min_height);line-height:var(--_ui5-v2-3-0-rc-3_dynamic_page_snapped_title_on_mobile_line_height)}::slotted([ui5-breadcrumbs][slot="breadcrumbs"]){padding:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_breadcrumbs_padding_top) 0 var(--_ui5-v2-3-0-rc-3_dynamic_page_title_breadcrumbs_padding_bottom) 0}::slotted([ui5-title][slot="heading"]),::slotted([ui5-title][slot="snappedHeading"]){font-family:var(--sapObjectHeader_Title_FontFamily);color:var(--sapObjectHeader_Title_TextColor);padding:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_heading_padding_top) 0 0 0;margin:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_heading_margin)}::slotted([ui5-title][slot="heading"]){font-size:var(--sapObjectHeader_Title_FontSize)}::slotted([ui5-title][slot="snappedHeading"]),:host([snapped]) ::slotted([ui5-title][slot="heading"]){font-size:var(--sapObjectHeader_Title_SnappedFontSize);text-overflow:ellipsis}::slotted([slot="content"]),::slotted([slot="snappedSubheading"]){color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);margin-top:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_subheading_margin_top);min-width:0}::slotted([ui5-tag]){max-width:100%}::slotted([ui5-toolbar][slot="actionsBar"]){padding:0 0 0 1rem}.ui5-dynamic-page-title--wrapper{display:flex;align-items:center}.ui5-dynamic-page-title--heading{flex-shrink:1;min-width:1px}.ui5-dynamic-page--snapped-title-on-mobile{display:flex;justify-content:space-between;align-items:center;pointer-events:none}.ui5-dynamic-page-title--content{padding:0 0 0 1rem;flex-shrink:1.6;min-width:3rem;flex-grow:1}.ui5-dynamic-page-title--actions{flex-shrink:1.6;min-width:3rem;flex-grow:1;display:flex;align-items:center}.ui5-dynamic-page-title--actions ::slotted([slot="actionsBar"]){border:none;flex:1}.ui5-dynamic-page-title--actions .ui5-dynamic-page-title--actions-separator{flex:0 1;&:before{content:"";display:inline-block;height:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_actions_separator_height);width:.0625rem;vertical-align:middle;background:var(--sapToolbar_SeparatorColor);margin:0 .5rem 0 .25rem}}::slotted([slot="navigationBar"]){border:none;margin-left:auto;flex:0 1;padding-left:0;padding-right:0}.ui5-dynamic-page-title--top-area{display:flex;justify-content:space-between;align-items:center}:host([desktop]:focus),.ui5-dynamic-page-title-focus-area:focus-visible{outline:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_focus_outline);outline-offset:var(--_ui5-v2-3-0-rc-3_dynamic_page_title_focus_outline_offset)}.ui5-dynamic-page-title-focus-area{outline:none;position:absolute;top:0;left:0;width:100%;height:100%}
` };
export default styleData;
//# sourceMappingURL=DynamicPageTitle.css.js.map