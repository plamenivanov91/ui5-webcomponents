/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<section class="ui5-carousel-root ui5-carousel-background-${ifDefined(this._backgroundDesign)}" tabindex="0" role="listbox" aria-activedescendant="${ifDefined(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${classMap(this.classes.viewport)}" part="content"><div class="${classMap(this.classes.content)}" style="${styleMap(this.styles.content)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div>${this.showArrows.content ? block2.call(this, context, tags, suffix) : undefined}</div>${this.renderNavigation ? block3.call(this, context, tags, suffix) : undefined}</div></section> `; }
function block1(context, tags, suffix, item, index) { return html `<div id="${ifDefined(item.id)}" class="ui5-carousel-item ${ifDefined(item.classes)}" style="${styleMap(item.styles)}" role="option" aria-posinset="${ifDefined(item.posinset)}" aria-setsize="${ifDefined(item.setsize)}" part="item"><slot name="${ifDefined(item.item._individualSlot)}" tabindex="${ifDefined(item.tabIndex)}"></slot></div>`; }
function block2(context, tags, suffix) { return suffix ? html `<div class="ui5-carousel-navigation-arrows"><${scopeTag("ui5-button", tags, suffix)} arrow-back tooltip="${ifDefined(this.previousPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} arrow-forward tooltip="${ifDefined(this.nextPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${ifDefined(this.previousPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${ifDefined(this.nextPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`; }
function block3(context, tags, suffix) { return html `<div class="${classMap(this.classes.navigation)}">${this.showArrows.navigation ? block4.call(this, context, tags, suffix) : undefined}<div class="ui5-carousel-navigation">${!this.hidePageIndicator ? block5.call(this, context, tags, suffix) : undefined}</div>${this.showArrows.navigation ? block9.call(this, context, tags, suffix) : undefined}</div>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} arrow-back tooltip="${ifDefined(this.previousPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button arrow-back tooltip="${ifDefined(this.previousPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`; }
function block5(context, tags, suffix) { return html `${this.isPageTypeDots ? block6.call(this, context, tags, suffix) : block8.call(this, context, tags, suffix)}`; }
function block6(context, tags, suffix) { return html `${repeat(this.dots, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}`; }
function block7(context, tags, suffix, item, index) { return html `<div role="img" aria-label="${ifDefined(item.ariaLabel)}" ?active="${item.active}" class="ui5-carousel-navigation-dot"></div>`; }
function block8(context, tags, suffix) { return html `<div class="ui5-carousel-navigation-text">${ifDefined(this.selectedIndexToShow)}&nbsp;${ifDefined(this.ofText)}&nbsp;${ifDefined(this.pagesCount)}</div>`; }
function block9(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} arrow-forward tooltip="${ifDefined(this.nextPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button arrow-forward tooltip="${ifDefined(this.nextPageText)}" class="ui5-carousel-navigation-button ${classMap(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`; }
export default block0;
//# sourceMappingURL=CarouselTemplate.lit.js.map