import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-search-popover{width:var(--search_width);margin-top:.25rem;box-sizing:border-box}.ui5-search-popup-searching-header{display:flex;gap:.5rem;width:100%;align-items:center}.ui5-search-popover::part(header){padding:.5rem 1rem;box-shadow:none;box-sizing:border-box}.ui5-search-popover::part(header):before{display:none}.ui5-search-popover::part(content){padding:0;box-shadow:none}:host([loading]) .ui5-search-popover main{min-height:2rem}.ui5-search-popover-search-field{flex:1;height:2.25rem;border-radius:var(--_ui5-v2-9-0-rc-3_search_input_border_radius)}.ui5-search-popover-search-field::part(root):after{border-radius:var(--_ui5-v2-9-0-rc-3_search_input_border_radius)}.ui5-search-popover-search-field::part(input){padding-inline-start:.875rem}.ui5-search-popover-search-field::part(clear-icon-wrapper){margin-inline-end:.5rem}.ui5-search-popover-loading-bi{width:100%;height:100%}::slotted([slot="action"]){width:100%;margin-top:.5rem;margin-bottom:.5rem}.search-popover-busy-wrapper{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:42;width:100%;height:100%;display:none;justify-content:center;align-items:center;pointer-events:all}:host([loading]) .search-popover-busy-wrapper{display:flex;width:100%;height:100%}.search-popover-busy-wrapper:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:var(--_ui5-v2-9-0-rc-3-search-loading-overlay-background);opacity:var(--_ui5-v2-9-0-rc-3-search-loading-overlay-transparency);border-radius:var(--_ui5-v2-9-0-rc-3_popup_border_radius)}.ui5-search-list{margin:.25rem;width:calc(100% - .5rem)}.ui5-search-popover-phone .ui5-search-popover-content{position:relative;width:100%;height:100%;display:flex;flex-direction:column}.ui5-search-popover-phone .search-popover-busy-wrapper:after{border-radius:0}
`;
//# sourceMappingURL=Search.css.js.map