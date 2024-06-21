var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PromptInput_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import "@ui5/webcomponents-icons/dist/paper-plane.js";
import Input from "@ui5/webcomponents/dist/Input.js";
import Label from "@ui5/webcomponents/dist/Label.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import { isEnter, } from "@ui5/webcomponents-base/dist/Keys.js";
import { PROMPT_INPUT_CHARACTERS_LEFT, PROMPT_INPUT_CHARACTERS_EXCEEDED, } from "./generated/i18n/i18n-defaults.js";
import PromptInputTemplate from "./generated/templates/PromptInputTemplate.lit.js";
// Styles
import PromptInputCss from "./generated/themes/PromptInput.css.js";
/**
 * @class
 * ### Overview
 *
 * The `ui5-ai-prompt-input` component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
 *
 * **Note:** The web component is in an experimental state
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-ai/dist/PromptInput.js
 * @class
 * @constructor
 * @public
 * @extends UI5Element
 */
let PromptInput = PromptInput_1 = class PromptInput extends UI5Element {
    static async onDefine() {
        PromptInput_1.i18nBundle = await getI18nBundle("@ui5/webcomponents-ai");
    }
    constructor() {
        super();
    }
    _onkeydown(e) {
        if (isEnter(e)) {
            this.fireEvent("submit");
        }
    }
    _onInnerInput(e) {
        this.value = e.target.value;
        this.fireEvent("input");
    }
    _onInnerChange() {
        this.fireEvent("change");
    }
    _onButtonClick() {
        this.fireEvent("submit");
    }
    get _exceededText() {
        if (this.showExceededText) {
            let leftCharactersCount;
            const maxLength = this.maxlength;
            if (maxLength !== undefined) {
                leftCharactersCount = maxLength - this.value.length;
                if (leftCharactersCount >= 0) {
                    return PromptInput_1.i18nBundle.getText(PROMPT_INPUT_CHARACTERS_LEFT, leftCharactersCount);
                }
                return PromptInput_1.i18nBundle.getText(PROMPT_INPUT_CHARACTERS_EXCEEDED, Math.abs(leftCharactersCount));
            }
        }
    }
    get _maxLenght() {
        return this.maxlength || undefined;
    }
    get _submitButtonDisabled() {
        return (this.value.length <= 0) || this.disabled || this.readonly;
    }
};
__decorate([
    property()
], PromptInput.prototype, "value", void 0);
__decorate([
    property()
], PromptInput.prototype, "placeholder", void 0);
__decorate([
    property()
], PromptInput.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], PromptInput.prototype, "showClearIcon", void 0);
__decorate([
    property({ type: Boolean })
], PromptInput.prototype, "showExceededText", void 0);
__decorate([
    property({ type: Boolean })
], PromptInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], PromptInput.prototype, "readonly", void 0);
__decorate([
    property({ validator: Integer })
], PromptInput.prototype, "maxlength", void 0);
__decorate([
    property({ type: ValueState, defaultValue: ValueState.None })
], PromptInput.prototype, "valueState", void 0);
__decorate([
    slot({
        type: HTMLElement,
        invalidateOnChildChange: true,
    })
], PromptInput.prototype, "valueStateMessage", void 0);
PromptInput = PromptInput_1 = __decorate([
    customElement({
        tag: "ui5-ai-prompt-input",
        renderer: litRender,
        styles: PromptInputCss,
        template: PromptInputTemplate,
        dependencies: [
            Input,
            Label,
            Button,
        ],
    })
    /**
     * Fired when the input operation has finished by pressing Enter
     * or AI button is clicked.
     *
     * @since 2.0.0
     * @public
     */
    ,
    event("submit")
    /**
     * Fired when the value of the component changes at each keystroke,
     * and when a suggestion item has been selected.
     *
     * @since 2.0.0
     * @public
     */
    ,
    event("input")
    /**
     * Fired when the input operation has finished by pressing Enter
     * or on focusout.
     *
     * @since 2.0.0
     * @public
     */
    ,
    event("change")
], PromptInput);
PromptInput.define();
export default PromptInput;
//# sourceMappingURL=PromptInput.js.map