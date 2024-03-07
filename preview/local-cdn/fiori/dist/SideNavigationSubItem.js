var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import SideNavigationItemBase from "./SideNavigationItemBase.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-side-navigation-sub-item` is intended to be used inside a `ui5-side-navigation-item` only.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";`
 * @constructor
 * @extends SideNavigationItemBase
 * @public
 * @abstract
 * @since 1.0.0-rc.8
 */
let SideNavigationSubItem = class SideNavigationSubItem extends SideNavigationItemBase {
    constructor() {
        super(...arguments);
        this._onkeydown = (e) => {
            super._onkeydown(e);
        };
        this._onkeyup = (e) => {
            super._onkeyup(e);
        };
        this._onfocusin = (e) => {
            super._onfocusin(e);
        };
        this._onclick = (e) => {
            super._onclick(e);
        };
    }
    get isFixedItem() {
        return this.parentElement?.slot === "fixedItems";
    }
};
SideNavigationSubItem = __decorate([
    customElement("ui5-side-navigation-sub-item")
], SideNavigationSubItem);
SideNavigationSubItem.define();
export default SideNavigationSubItem;
//# sourceMappingURL=SideNavigationSubItem.js.map