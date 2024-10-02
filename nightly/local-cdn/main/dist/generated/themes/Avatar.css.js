import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Avatar.css.ts", content: `:host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative;font-family:"72override",var(--sapFontFamily)}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([interactive]:not([disabled])){cursor:pointer}:host([interactive]:not([hidden]):active){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([interactive]:not([hidden]):not([disabled]):not(:active):hover){box-shadow:var(--ui5-v2-3-0-rc-3-avatar-hover-box-shadow-offset)}:host([interactive][desktop]:not([hidden])) .ui5-avatar-root:focus,:host([interactive]:not([hidden])) .ui5-avatar-root:focus-visible{outline:var(--_ui5-v2-3-0-rc-3_avatar_outline);outline-offset:var(--_ui5-v2-3-0-rc-3_avatar_focus_offset)}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-v2-3-0-rc-3-avatar-initials-border);outline:none;color:var(--ui5-v2-3-0-rc-3-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%;border-radius:inherit}:host([_size="XS"]),:host([size="XS"]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_XS)}:host(:not([size])),:host([_size="S"]),:host([size="S"]){min-height:3rem;min-width:3rem;font-size:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_S)}:host([_size="M"]),:host([size="M"]){min-height:4rem;min-width:4rem;font-size:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_M)}:host([_size="L"]),:host([size="L"]){min-height:5rem;min-width:5rem;font-size:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_L)}:host([_size="XL"]),:host([size="XL"]){min-height:7rem;min-width:7rem;font-size:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_S);width:var(--_ui5-v2-3-0-rc-3_avatar_fontsize_S);color:inherit}:host([_size="XS"]) .ui5-avatar-icon,:host([size="XS"]) .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_icon_XS);width:var(--_ui5-v2-3-0-rc-3_avatar_icon_XS)}:host([_size="S"]) .ui5-avatar-icon,:host([size="S"]) .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_icon_S);width:var(--_ui5-v2-3-0-rc-3_avatar_icon_S)}:host([_size="M"]) .ui5-avatar-icon,:host([size="M"]) .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_icon_M);width:var(--_ui5-v2-3-0-rc-3_avatar_icon_M)}:host([_size="L"]) .ui5-avatar-icon,:host([size="L"]) .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_icon_L);width:var(--_ui5-v2-3-0-rc-3_avatar_icon_L)}:host([_size="XL"]) .ui5-avatar-icon,:host([size="XL"]) .ui5-avatar-icon{height:var(--_ui5-v2-3-0-rc-3_avatar_icon_XL);width:var(--_ui5-v2-3-0-rc-3_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape="Square"]){border-radius:var(--ui5-v2-3-0-rc-3-avatar-border-radius)}:host([shape="Square"]) ::slotted(*){border-radius:calc(var(--ui5-v2-3-0-rc-3-avatar-border-radius) - var(--ui5-v2-3-0-rc-3-avatar-border-radius-img-deduction))}:host(:not([color-scheme])),:host(:not([_has-image])),:host([_color-scheme="Accent6"]),:host([ui5-avatar][color-scheme="Accent6"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent6);color:var(--ui5-v2-3-0-rc-3-avatar-accent6-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent6-border-color)}:host([_color-scheme="Accent1"]),:host([ui5-avatar][color-scheme="Accent1"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent1);color:var(--ui5-v2-3-0-rc-3-avatar-accent1-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent1-border-color)}:host([_color-scheme="Accent2"]),:host([ui5-avatar][color-scheme="Accent2"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent2);color:var(--ui5-v2-3-0-rc-3-avatar-accent2-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent2-border-color)}:host([_color-scheme="Accent3"]),:host([ui5-avatar][color-scheme="Accent3"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent3);color:var(--ui5-v2-3-0-rc-3-avatar-accent3-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent3-border-color)}:host([_color-scheme="Accent4"]),:host([ui5-avatar][color-scheme="Accent4"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent4);color:var(--ui5-v2-3-0-rc-3-avatar-accent4-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent4-border-color)}:host([_color-scheme="Accent5"]),:host([ui5-avatar][color-scheme="Accent5"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent5);color:var(--ui5-v2-3-0-rc-3-avatar-accent5-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent5-border-color)}:host([_color-scheme="Accent7"]),:host([ui5-avatar][color-scheme="Accent7"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent7);color:var(--ui5-v2-3-0-rc-3-avatar-accent7-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent7-border-color)}:host([_color-scheme="Accent8"]),:host([ui5-avatar][color-scheme="Accent8"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent8);color:var(--ui5-v2-3-0-rc-3-avatar-accent8-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent8-border-color)}:host([_color-scheme="Accent9"]),:host([ui5-avatar][color-scheme="Accent9"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent9);color:var(--ui5-v2-3-0-rc-3-avatar-accent9-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent9-border-color)}:host([_color-scheme="Accent10"]),:host([ui5-avatar][color-scheme="Accent10"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-accent10);color:var(--ui5-v2-3-0-rc-3-avatar-accent10-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-accent10-border-color)}:host([_color-scheme="Placeholder"]),:host([ui5-avatar][color-scheme="Placeholder"]){background-color:var(--ui5-v2-3-0-rc-3-avatar-placeholder);color:var(--ui5-v2-3-0-rc-3-avatar-placeholder-color);border-color:var(--ui5-v2-3-0-rc-3-avatar-placeholder-border-color)}:host([_has-image]){color:var(--ui5-v2-3-0-rc-3-avatar-accent10-color);background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-initials,.ui5-avatar-icon~.ui5-avatar-icon-fallback{display:none}.ui5-avatar-fallback-icon-hidden{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot="badge"]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapBackgroundColor);--_ui5-v2-3-0-rc-3-tag-height: 1.125rem;--_ui5-v2-3-0-rc-3-tag-border-radius: 50%}:host([_size="L"]) ::slotted([slot="badge"]),:host([size="L"]) ::slotted([slot="badge"]){width:1.25rem;height:1.25rem;--_ui5-v2-3-0-rc-3-tag-height: 1.25rem;--_ui5-v2-3-0-rc-3-tag-icon-width: .875rem}:host([_size="XL"]) ::slotted([slot="badge"]),:host([size="XL"]) ::slotted([slot="badge"]){width:1.75rem;height:1.75rem;--_ui5-v2-3-0-rc-3-tag-height: 1.75rem;--_ui5-v2-3-0-rc-3-tag-icon-width: 1rem}:host([shape="Square"]) ::slotted([slot="badge"]){bottom:-.125rem;right:-.125rem}:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),:host([size="L"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.1875rem;right:-.1875rem}:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.25rem;right:-.25rem}
` };
export default styleData;
//# sourceMappingURL=Avatar.css.js.map