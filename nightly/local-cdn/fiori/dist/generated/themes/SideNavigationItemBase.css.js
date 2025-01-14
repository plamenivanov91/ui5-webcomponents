import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-sn-item-ul{margin:0;padding:0;list-style:none}.ui5-sn-item{display:flex;align-items:center;width:100%;box-sizing:border-box;text-decoration:none;position:relative;height:var(--_ui5-v2-6-2_side_navigation_item_height);min-height:var(--_ui5-v2-6-2_side_navigation_item_height);cursor:pointer;color:inherit;background-color:var(--sapList_Background);border-radius:var(--_ui5-v2-6-2_side_navigation_item_border_radius);transition:var(--_ui5-v2-6-2_side_navigation_item_transition);margin-block-end:var(--_ui5-v2-6-2_side_navigation_item_bottom_margin)}:host(.ui5-sn-item-hidden[side-nav-collapsed]),:host([side-nav-collapsed]) .ui5-sn-item-hidden{display:none}.ui5-sn-item:focus{outline:none}:host([desktop]) .ui5-sn-item:focus:after,.ui5-sn-item:focus-visible:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;content:"";inset:var(--_ui5-v2-6-2_side_navigation_item_focus_border_offset);z-index:2;pointer-events:none;border-radius:var(--_ui5-v2-6-2_side_navigation_item_focus_border_radius)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:focus:before{border:var(--_ui5-v2-6-2_side_navigation_selected_and_focused_border_style_color)}.ui5-sn-item.ui5-sn-item-group:before,.ui5-sn-item.ui5-sn-item-level1:before{border:var(--_ui5-v2-6-2_side_navigation_group_border_style_color);border-width:var(--_ui5-v2-6-2_side_navigation_group_border_width)}.ui5-sn-item-group[aria-expanded=true]:before,.ui5-sn-item-level1[aria-expanded=true]:before{border-width:var(--_ui5-v2-6-2_side_navigation_group_expanded_border_width)}.ui5-sn-item:before{content:"";position:absolute;inset:0;pointer-events:none}.ui5-sn-item.ui5-sn-item-disabled{opacity:var(--sapContent_DisabledOpacity);cursor:default}.ui5-sn-item:not(.ui5-sn-item-disabled):hover{background:var(--sapList_Hover_Background)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--sapList_SelectionBackgroundColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active .ui5-sn-item-text,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active .ui5-sn-item-text{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active [ui5-icon],.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active [ui5-icon]{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:hover{background:var(--sapList_Hover_SelectionBackground)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active,.ui5-sn-item:not(.ui5-sn-item-disabled):active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active{background:var(--sapList_Active_Background)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--_ui5-v2-6-2_side_navigation_collapsed_selected_item_background)}.ui5-sn-item:before{border:var(--_ui5-v2-6-2_side_navigation_item_border_style_color);border-width:var(--_ui5-v2-6-2_side_navigation_item_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:before{border-width:var(--_ui5-v2-6-2_side_navigation_item_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border:var(--_ui5-v2-6-2_side_navigation_selected_border_style_color);border-width:var(--_ui5-v2-6-2_side_navigation_selected_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled):not(.ui5-sn-item-selected):hover:before{border:var(--_ui5-v2-6-2_side_navigation_hover_border_style_color);border-width:var(--_ui5-v2-6-2_side_navigation_hover_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border-radius:var(--_ui5-v2-6-2_side_navigation_item_border_radius)}:host([in-popover]:last-of-type) .ui5-sn-item:not(:hover):not(:active):before{border:var(--_ui5-v2-6-2_side_navigation_last_item_border_style)}.ui5-sn-item-icon{color:var(--_ui5-v2-6-2_side_navigation_icon_color);height:var(--_ui5-v2-6-2_side_navigation_icon_font_size);min-width:var(--_ui5-v2-6-2_side_navigation_group_icon_width)}.ui5-sn-item-toggle-icon,.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-6-2_side_navigation_expand_icon_color);min-width:2rem;height:.875rem}.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-6-2_side_navigation_external_link_icon_color)}.ui5-sn-item-fixed .ui5-sn-item-toggle-icon,.ui5-sn-item-fixed .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item{justify-content:center}:host([side-nav-collapsed]) .ui5-sn-item-icon{padding:var(--_ui5-v2-6-2_side_navigation_item_collapsed_icon_padding)}:host([side-nav-collapsed]) .ui5-sn-item-text{display:none}:host([side-nav-collapsed]) .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus{width:var(--_ui5-v2-6-2_side_navigation_item_collapsed_hover_focus_width);box-shadow:var(--_ui5-v2-6-2_side_navigation_box_shadow);z-index:1}:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:hover,:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:focus{background:var(--sapList_SelectionBackgroundColor)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander){padding-inline-end:var(--_ui5-v2-6-2_side_navigation_item_collapsed_hover_focus_padding_right)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-external-link-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-external-link-icon{display:var(--_ui5-v2-6-2_side_navigation_item_collapsed_hover_focus_display)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon{display:var(--_ui5-v2-6-2_side_navigation_item_collapsed_hover_focus_display)}.ui5-sn-item[aria-expanded=false]+.ui5-sn-item-ul{display:none}.ui5-sn-item-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-sn-item-with-expander .ui5-sn-item-icon:after{display:var(--_ui5-v2-6-2_side_navigation_triangle_display);content:"";width:0;height:0;border-left:.375rem solid transparent;border-bottom:.375rem solid var(--_ui5-v2-6-2_side_navigation_triangle_color);position:absolute;right:.1875rem;bottom:.125rem}.ui5-sn-item-selection-icon{display:none;height:.5rem;width:.5rem;margin-inline:.5rem;color:var(--sapList_SelectionBorderColor)}.ui5-sn-item[aria-expanded] .ui5-sn-item-selection-icon{margin-inline:.5rem 0}.ui5-sn-item-selected .ui5-sn-item-selection-icon{display:var(--_ui5-v2-6-2_side_navigation_selection_indicator_display)}:host([in-popover]) .ui5-sn-item{padding:var(--_ui5-v2-6-2_side_navigation_popup_item_padding);width:auto}.ui5-sn-item-separator{min-height:.75rem}
`;
//# sourceMappingURL=SideNavigationItemBase.css.js.map