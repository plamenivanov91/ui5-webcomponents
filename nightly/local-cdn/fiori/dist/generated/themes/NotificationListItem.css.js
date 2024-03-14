import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/NotificationListItem.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%;min-height:var(--_ui5-v1-24-0-rc-0_list_item_base_height);background:var(--ui5-v1-24-0-rc-0-listitem-background-color);cursor:pointer}:host([has-border]){border-bottom:var(--ui5-v1-24-0-rc-0-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-inline-end:.5rem}.ui5-nli-overflow-btn{margin-inline-end:.5rem}.ui5-prio-icon{min-width:1rem;min-height:1rem;padding-inline-end:.625rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}:host([wrapping-type="None"]) .ui5-nli-title-text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host(:not([wrapping-type="Normal"])) .ui5-nli-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host([_show-more-pressed]) .ui5-nli-title-text{-webkit-line-clamp:unset}:host([_show-more-pressed]) .ui5-nli-description{-webkit-line-clamp:unset}:host([read]) .ui5-nli-title-text{font-weight:400}:host(:first-of-type){border-top-left-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius);border-top-right-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius)}:host(:last-of-type){border-bottom-left-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius);border-bottom-right-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius)}:host(:first-of-type) .ui5-nli-focusable:after{border-top-left-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius);border-top-right-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius)}:host(:last-of-type) .ui5-nli-focusable:after{border-bottom-left-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius);border-bottom-right-radius:var(--_ui5-v1-24-0-rc-0-notification_item-border-raius)}.ui5-nli-root{display:flex;flex-direction:row-reverse;position:relative;width:100%;padding-inline:1rem .5rem;padding-block:1rem;box-sizing:border-box;cursor:pointer}.ui5-nli-content{display:flex;flex-direction:column;flex:1;min-width:0;width:100%;padding-inline:.75rem 1rem;font-family:"72override",var(--sapFontFamily);box-sizing:border-box}.ui5-nli-title-text-wrapper{display:flex;flex-direction:row}.ui5-nli-title-text{display:flex;margin-bottom:.25rem;box-sizing:border-box}.ui5-nli-title-text{color:var(--sapGroup_TitleTextColor);font-weight:700;font-size:var(--sapFontHeader6Size)}.ui5-nli-description{display:flex;margin-top:.5rem;color:var(--sapTextColor);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-nli-footer{display:flex;color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);padding-top:.5rem;box-sizing:border-box;flex-wrap:wrap;align-items:center}.ui5-nli-footer-divider{position:relative;align-items:center;margin-inline:.5rem}.ui5-nli-footer-showMore{margin-inline-start:1rem}::slotted([slot^="footnotes"]){color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui5-nli-actions{display:flex;box-sizing:border-box}
` };
export default styleData;
//# sourceMappingURL=NotificationListItem.css.js.map