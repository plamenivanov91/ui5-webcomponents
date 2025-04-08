import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.inputIcon{color:var(--_ui5-v2-9-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-9-0_input_icon_padding);border-inline-start:var(--_ui5-v2-9-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-9-0_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-9-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-9-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-9-0_select_hover_icon_left_border);color:var(--_ui5-v2-9-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-9-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-9-0_select_hover_icon_left_border);color:var(--_ui5-v2-9-0_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-9-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-9-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-9-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-9-0_input_icon_box_shadow)}
`;
//# sourceMappingURL=InputIcon.css.js.map