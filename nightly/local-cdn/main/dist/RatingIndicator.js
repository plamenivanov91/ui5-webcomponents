var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RatingIndicator_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { isDown, isUp, isLeft, isRight, isSpace, isEnter, isHome, isEnd, } from "@ui5/webcomponents-base/dist/Keys.js";
import { getEffectiveAriaLabelText } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import Float from "@ui5/webcomponents-base/dist/types/Float.js";
import { RATING_INDICATOR_TEXT, RATING_INDICATOR_TOOLTIP_TEXT, RATING_INDICATOR_ARIA_DESCRIPTION, } from "./generated/i18n/i18n-defaults.js";
import RatingIndicatorTemplate from "./generated/templates/RatingIndicatorTemplate.lit.js";
import Icon from "./Icon.js";
import "@ui5/webcomponents-icons/dist/favorite.js";
import "@ui5/webcomponents-icons/dist/unfavorite.js";
// Styles
import RatingIndicatorCss from "./generated/themes/RatingIndicator.css.js";
/**
 * @class
 *
 * ### Overview
 * The Rating Indicator is used to display a specific number of icons that are used to rate an item.
 * Additionally, it is also used to display the average and overall ratings.
 *
 * ### Usage
 * The recommended number of icons is between 5 and 7.
 *
 * ### Responsive Behavior
 * You can change the size of the Rating Indicator by changing its `font-size` CSS property.
 *
 * Example: `<ui5-rating-indicator style="font-size: 3rem;"></ui5-rating-indicator>`
 *
 * ### Keyboard Handling
 * When the `ui5-rating-indicator` is focused, the user can change the rating
 * with the following keyboard shortcuts:
 *
 * - [RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing
 * - [LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
 * - [Home] - Sets the lowest value.
 * - [End] - Sets the highest value.
 * - [SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
 * - Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/RatingIndicator.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.8
 */
let RatingIndicator = RatingIndicator_1 = class RatingIndicator extends UI5Element {
    static async onDefine() {
        RatingIndicator_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
    constructor() {
        super();
    }
    onBeforeRendering() {
        this.calcState();
    }
    calcState() {
        this._stars = [];
        for (let i = 1; i < this.max + 1; i++) {
            const remainder = Math.round((this.value - Math.floor(this.value)) * 10);
            let halfStar = false, tempValue = this.value;
            if (Math.floor(this.value) + 1 === i && remainder > 2 && remainder < 8) {
                halfStar = true;
            }
            else if (remainder <= 2) {
                tempValue = Math.floor(this.value);
            }
            else if (remainder >= 8) {
                tempValue = Math.ceil(this.value);
            }
            this._stars.push({
                selected: i <= tempValue,
                index: i,
                halfStar,
            });
        }
    }
    _onclick(e) {
        const target = e.target;
        if (!(target instanceof HTMLElement) || this.disabled || this.readonly) {
            return;
        }
        const targetValue = target.getAttribute("data-ui5-value");
        if (targetValue !== null) {
            this.value = parseInt(targetValue);
            if (this.value === 1 && this._liveValue === 1) {
                this.value = 0;
            }
            if (this._liveValue !== this.value) {
                this.fireEvent("change");
                this._liveValue = this.value;
            }
        }
    }
    _onkeydown(e) {
        if (this.disabled || this.readonly) {
            return;
        }
        const isDecrease = isDown(e) || isLeft(e);
        const isIncrease = isRight(e) || isUp(e);
        const isIncreaseWithReset = isSpace(e) || isEnter(e);
        const isMin = isHome(e);
        const isMax = isEnd(e);
        const isNumber = (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
        if (isDecrease || isIncrease || isIncreaseWithReset || isMin || isMax || isNumber) {
            e.preventDefault();
            if (isDecrease && this.value > 0) {
                this.value = Math.round(this.value - 1);
            }
            else if (isIncrease && this.value < this.max) {
                this.value = Math.round(this.value + 1);
            }
            else if (isIncreaseWithReset) {
                const proposedValue = Math.round(this.value + 1);
                this.value = proposedValue > this.max ? 0 : proposedValue;
            }
            else if (isMin) {
                this.value = 0;
            }
            else if (isMax) {
                this.value = this.max;
            }
            else if (isNumber) {
                const pressedNumber = parseInt(e.key);
                this.value = pressedNumber > this.max ? this.max : pressedNumber;
            }
            this.fireEvent("change");
        }
    }
    _onfocusin() {
        if (this.disabled) {
            return;
        }
        this._focused = true;
        this._liveValue = this.value;
    }
    _onfocusout() {
        this._focused = false;
    }
    get effectiveTabIndex() {
        const tabindex = this.getAttribute("tabindex");
        return this.disabled ? "-1" : tabindex || "0";
    }
    get ratingTooltip() {
        return this.tooltip || this.defaultTooltip;
    }
    get defaultTooltip() {
        return RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_TOOLTIP_TEXT);
    }
    get _ariaRoleDescription() {
        return RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_TEXT);
    }
    get _ariaDisabled() {
        return this.disabled || undefined;
    }
    get _ariaLabel() {
        return getEffectiveAriaLabelText(this);
    }
    get _ariaDescription() {
        return this.required ? RatingIndicator_1.i18nBundle.getText(RATING_INDICATOR_ARIA_DESCRIPTION) : undefined;
    }
    get ariaReadonly() {
        return this.readonly ? "true" : undefined;
    }
};
__decorate([
    property({ validator: Float, defaultValue: 0 })
], RatingIndicator.prototype, "value", void 0);
__decorate([
    property({ validator: Integer, defaultValue: 5 })
], RatingIndicator.prototype, "max", void 0);
__decorate([
    property({ type: Boolean })
], RatingIndicator.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], RatingIndicator.prototype, "readonly", void 0);
__decorate([
    property()
], RatingIndicator.prototype, "accessibleName", void 0);
__decorate([
    property({ defaultValue: "" })
], RatingIndicator.prototype, "accessibleNameRef", void 0);
__decorate([
    property({ type: Boolean })
], RatingIndicator.prototype, "required", void 0);
__decorate([
    property()
], RatingIndicator.prototype, "tooltip", void 0);
__decorate([
    property({ type: Object, multiple: true })
], RatingIndicator.prototype, "_stars", void 0);
__decorate([
    property({ type: Boolean })
], RatingIndicator.prototype, "_focused", void 0);
RatingIndicator = RatingIndicator_1 = __decorate([
    customElement({
        tag: "ui5-rating-indicator",
        languageAware: true,
        renderer: litRender,
        styles: RatingIndicatorCss,
        template: RatingIndicatorTemplate,
        dependencies: [Icon],
    })
    /**
     * The event is fired when the value changes.
     * @public
     */
    ,
    event("change")
], RatingIndicator);
RatingIndicator.define();
export default RatingIndicator;
//# sourceMappingURL=RatingIndicator.js.map