import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TabInOverflow.css.ts", content: `.ui5-tab-semantic-icon{display:var(--_ui5-v1-23-1_tc_headerItemSemanticIcon_display);height:var(--_ui5-v1-23-1_tc_headerItemSemanticIcon_size);width:var(--_ui5-v1-23-1_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveElementColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeElementColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalElementColor)}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-tab-overflow-item{color:var(--_ui5-v1-23-1_tc_overflowItem_default_color)}.ui5-tab-overflow-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}.ui5-tab-overflow-item[hidden]{display:none}.ui5-tab-semantic-icon{position:absolute;inset-inline-start:-.25rem}.ui5-tab-overflow-item--positive:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v1-23-1_tc_overflowItem_positive_color)}.ui5-tab-overflow-item--negative:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v1-23-1_tc_overflowItem_negative_color)}.ui5-tab-overflow-item--critical:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v1-23-1_tc_overflowItem_critical_color)}.ui5-tab-overflow-item[active] .ui5-tab-overflow-itemContent{color:var(--sapList_Active_TextColor)}.ui5-tab-overflow-itemContent{display:flex;align-items:center;position:relative;height:var(--_ui5-v1-23-1_tc_item_text);pointer-events:none;font-size:.875rem}.ui5-tab-overflow-itemContent-wrapper{padding-inline-start:calc(var(--_ui5-v1-23-1-tab-indentation-level) * .5rem + var(--_ui5-v1-23-1-tab-extra-indent, 0) * var(--_ui5-v1-23-1_tc_overflowItem_extraIndent))}.ui5-tab-overflow-item--selectedSubTab{background-color:var(--sapList_SelectionBackgroundColor)}.ui5-tab-overflow-item [ui5-icon]:not(.ui5-tab-semantic-icon){width:1.375rem;height:1.375rem;padding-inline-end:.75rem;color:var(--_ui5-v1-23-1_tc_overflowItem_current_color)}.ui5-tab-container-responsive-popover [ui5-li-custom][focused]::part(native-li):after{inset:var(--_ui5-v1-23-1_tc_overflowItem_focus_offset)}.ui5-tab-container-responsive-popover::part(content){padding:0}
` };
export default styleData;
//# sourceMappingURL=TabInOverflow.css.js.map