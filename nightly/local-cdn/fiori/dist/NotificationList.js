var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationList_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import "@ui5/webcomponents/dist/ListItemBase.js";
import List from "@ui5/webcomponents/dist/List.js";
import NotificationListGroupItem from "./NotificationListGroupItem.js";
// Texts
import { NOTIFICATION_LIST_ACCESSIBLE_NAME, } from "./generated/i18n/i18n-defaults.js";
/**
 * @class
 *
 * The `ui5-notification-list` web component represents
 * a container for `ui5-li-notification-group` and `ui5-li-notification`.
 *
 * @constructor
 * @extends List
 * @since 2.0
 * @public
 */
let NotificationList = NotificationList_1 = class NotificationList extends List {
    constructor() {
        super();
        this.accessibleName = NotificationList_1.i18nFioriBundle.getText(NOTIFICATION_LIST_ACCESSIBLE_NAME);
    }
    getEnabledItems() {
        const items = new Array();
        this.getItems().forEach(item => {
            items.push(item);
            if (item instanceof NotificationListGroupItem && !item.collapsed) {
                item.items.forEach(subItem => {
                    items.push(subItem);
                });
            }
        });
        return items;
    }
    static async onDefine() {
        NotificationList_1.i18nFioriBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
};
NotificationList = NotificationList_1 = __decorate([
    customElement("ui5-notification-list")
], NotificationList);
NotificationList.define();
export default NotificationList;
//# sourceMappingURL=NotificationList.js.map