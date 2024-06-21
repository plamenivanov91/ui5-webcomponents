var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { isEnter } from "@ui5/webcomponents-base/dist/Keys.js";
import { isIOS, isSafari } from "@ui5/webcomponents-base/dist/Device.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
import TableRowTemplate from "./generated/templates/TableRowTemplate.lit.js";
import TableRowBase from "./TableRowBase.js";
import TableRowCss from "./generated/themes/TableRow.css.js";
import TableCell from "./TableCell.js";
import RadioButton from "./RadioButton.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-row` component represents a row in the `ui5-table`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableRow.js";`
 *
 * @constructor
 * @extends TableRowBase
 * @since 2.0
 * @public
 */
let TableRow = class TableRow extends TableRowBase {
    static async onDefine() {
        await super.onDefine();
        if (isSafari() && isIOS()) {
            // Safari on iOS does not use the :active state unless there is a touchstart event handler on the <body> element
            document.body.addEventListener("touchstart", () => { });
        }
    }
    onBeforeRendering() {
        super.onBeforeRendering();
        this.toggleAttribute("_interactive", this._isInteractive);
    }
    async focus(focusOptions) {
        this.setAttribute("tabindex", "-1");
        HTMLElement.prototype.focus.call(this, focusOptions);
        return Promise.resolve();
    }
    _onkeydown(e, eventOrigin) {
        super._onkeydown(e, eventOrigin);
        if (e.defaultPrevented) {
            return;
        }
        if (eventOrigin === this && this._isInteractive && isEnter(e)) {
            this.toggleAttribute("_active", true);
            this._table?._onRowPress(this);
        }
    }
    _onclick() {
        if (this._isInteractive && this === getActiveElement()) {
            this._table?._onRowPress(this);
        }
    }
    _onkeyup() {
        this.removeAttribute("_active");
    }
    _onfocusout() {
        this.removeAttribute("_active");
    }
    get _isInteractive() {
        return this.interactive;
    }
};
__decorate([
    slot({
        type: HTMLElement,
        "default": true,
        individualSlots: true,
        invalidateOnChildChange: {
            properties: ["_popin"],
            slots: false,
        },
    })
], TableRow.prototype, "cells", void 0);
__decorate([
    property()
], TableRow.prototype, "key", void 0);
__decorate([
    property({ type: Boolean })
], TableRow.prototype, "interactive", void 0);
TableRow = __decorate([
    customElement({
        tag: "ui5-table-row",
        styles: [TableRowBase.styles, TableRowCss],
        template: TableRowTemplate,
        dependencies: [...TableRowBase.dependencies, RadioButton, TableCell],
    })
], TableRow);
TableRow.define();
export default TableRow;
//# sourceMappingURL=TableRow.js.map