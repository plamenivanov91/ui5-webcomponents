var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isSpace, isF2 } from "@ui5/webcomponents-base/dist/Keys.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ListItemBase from "@ui5/webcomponents/dist/ListItemBase.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getFirstFocusableElement } from "@ui5/webcomponents-base/dist/util/FocusableElements.js";
/**
 * @class
 *
 * The base class of the `NotificationListItem` and `NotificationListGroupItem`.
 * @constructor
 * @extends ListItemBase
 * @since 1.0.0-rc.8
 * @public
 */
class NotificationListItemBase extends ListItemBase {
    get hasTitleText() {
        return !!this.titleText.length;
    }
    /**
     * Event handlers
     */
    async _onkeydown(e) {
        super._onkeydown(e);
        if (isSpace(e)) {
            e.preventDefault();
        }
        if (isF2(e)) {
            e.stopImmediatePropagation();
            const focusDomRef = this.getHeaderDomRef();
            if (this.focused) {
                (await getFirstFocusableElement(focusDomRef))?.focus(); // start content editing
            }
            else {
                focusDomRef.focus(); // stop content editing
            }
        }
    }
    getHeaderDomRef() {
        return this.getFocusDomRef();
    }
    static async onDefine() {
        NotificationListItemBase.i18nFioriBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
}
__decorate([
    property()
], NotificationListItemBase.prototype, "titleText", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItemBase.prototype, "read", void 0);
__decorate([
    property({ type: Boolean })
], NotificationListItemBase.prototype, "loading", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 1000 })
], NotificationListItemBase.prototype, "loadingDelay", void 0);
export default NotificationListItemBase;
//# sourceMappingURL=NotificationListItemBase.js.map