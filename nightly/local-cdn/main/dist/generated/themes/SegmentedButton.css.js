import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/SegmentedButton.css.ts", content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;min-width:calc(var(--_ui5-v2-4-0_segmented_btn_items_count) * var(--_ui5-v2-4-0_button_base_min_width))}.ui5-segmented-button-root{width:inherit;display:grid;grid-template-columns:repeat(var(--_ui5-v2-4-0_segmented_btn_items_count),minmax(var(--_ui5-v2-4-0_button_base_min_width),1fr));margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--sapButton_BorderCornerRadius);box-shadow:inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5-v2-4-0_segmented_btn_inner_border_radius);border-color:var(--_ui5-v2-4-0_segmented_btn_border_color);background-color:var(--_ui5-v2-4-0_segmented_btn_background_color);height:var(--_ui5-v2-4-0_button_base_height);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:initial}::slotted([ui5-segmented-button-item]:hover){z-index:2;box-shadow:var(--_ui5-v2-4-0_segmented_btn_hover_box_shadow);border-color:var(--sapButton_Hover_BorderColor);background-color:var(--sapButton_Hover_Background)}::slotted([ui5-segmented-button-item][selected]),::slotted([ui5-segmented-button-item][active]){border-color:var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][selected]:hover){border-color:var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--sapButton_BorderCornerRadius);border-end-end-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--sapButton_BorderCornerRadius);border-end-start-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:not(:first-child)){border-left-width:var(--_ui5-v2-4-0_segmented_btn_item_border_left);border-right-width:var(--_ui5-v2-4-0_segmented_btn_item_border_right)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}
` };
export default styleData;
//# sourceMappingURL=SegmentedButton.css.js.map