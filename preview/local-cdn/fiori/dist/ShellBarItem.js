var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
/**
 * Interface for components that may be slotted inside `ui5-shellbar` as items
 * @public
 */
/**
 * @class
 * The `ui5-shellbar-item` represents a custom item, that
 * might be added to the `ui5-shellbar`.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";`
 * @constructor
 * @extends UI5Element
 * @abstract
 * @public
 */
let ShellBarItem = class ShellBarItem extends UI5Element {
    get stableDomRef() {
        return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
    }
    fireClickEvent(e) {
        return this.fireEvent("click", {
            targetRef: e.target,
        }, true);
    }
};
__decorate([
    property()
], ShellBarItem.prototype, "icon", void 0);
__decorate([
    property()
], ShellBarItem.prototype, "text", void 0);
__decorate([
    property()
], ShellBarItem.prototype, "count", void 0);
ShellBarItem = __decorate([
    customElement("ui5-shellbar-item")
    /**
     * Fired, when the item is pressed.
     * @allowPreventDefault
     * @param {HTMLElement} targetRef DOM ref of the clicked element
     * @public
     */
    ,
    event("click", {
        detail: {
            targetRef: { type: HTMLElement },
        },
    })
], ShellBarItem);
ShellBarItem.define();
export default ShellBarItem;
//# sourceMappingURL=ShellBarItem.js.map