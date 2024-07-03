/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, unsafeHTML } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" draggable="${ifDefined(this.movable)}" @click="${this._onclick}"><div part="content" id="content" class="ui5-li-content"><div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title">${unsafeHTML(this.markupText)}</span>${this.additionalText ? block1.call(this, context, tags, suffix) : undefined}</div></div></li>`; }
function block1(context, tags, suffix) { return html `<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`; }
export default block0;
//# sourceMappingURL=SuggestionItemTemplate.lit.js.map