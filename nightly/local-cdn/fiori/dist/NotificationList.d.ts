import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ListItemBase from "@ui5/webcomponents/dist/ListItemBase.js";
import List from "@ui5/webcomponents/dist/List.js";
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
declare class NotificationList extends List {
    constructor();
    static i18nFioriBundle: I18nBundle;
    getEnabledItems(): Array<ListItemBase>;
    static onDefine(): Promise<void>;
}
export default NotificationList;
