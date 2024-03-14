/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-uc-root" role="region" aria-roledescription="${ifDefined(this._roleDescription)}" @drop="${this._ondrop}" @ui5-_uci-delete="${ifDefined(this._onItemDelete)}"><div class="${classMap(this.classes.content)}"><${scopeTag("ui5-list", tags, suffix)} accessible-name="${ifDefined(this.accessibleName)}" mode="${ifDefined(this.mode)}" @ui5-selection-change="${ifDefined(this._onSelectionChange)}"><slot slot="header" name="header"></slot><slot></slot></${scopeTag("ui5-list", tags, suffix)}>${this._showNoData ? block1.call(this, context, tags, suffix) : undefined}${this._showDndOverlay ? block2.call(this, context, tags, suffix) : undefined}</div></div>` : html `<div class="ui5-uc-root" role="region" aria-roledescription="${ifDefined(this._roleDescription)}" @drop="${this._ondrop}" @ui5-_uci-delete="${ifDefined(this._onItemDelete)}"><div class="${classMap(this.classes.content)}"><ui5-list accessible-name="${ifDefined(this.accessibleName)}" mode="${ifDefined(this.mode)}" @ui5-selection-change="${ifDefined(this._onSelectionChange)}"><slot slot="header" name="header"></slot><slot></slot></ui5-list>${this._showNoData ? block1.call(this, context, tags, suffix) : undefined}${this._showDndOverlay ? block2.call(this, context, tags, suffix) : undefined}</div></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.noFiles)}"><${scopeTag("ui5-illustrated-message", tags, suffix)} name="Tent"><${scopeTag("ui5-title", tags, suffix)} slot="title" class="title" level="H2">${ifDefined(this._noDataText)}</${scopeTag("ui5-title", tags, suffix)}><span slot="subtitle" class="subtitle">${ifDefined(this._noDataDescription)}</span></${scopeTag("ui5-illustrated-message", tags, suffix)}></div>` : html `<div class="${classMap(this.classes.noFiles)}"><ui5-illustrated-message name="Tent"><ui5-title slot="title" class="title" level="H2">${ifDefined(this._noDataText)}</ui5-title><span slot="subtitle" class="subtitle">${ifDefined(this._noDataDescription)}</span></ui5-illustrated-message></div>`; }
function block2(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.dndOverlay)}" @dragenter="${this._ondragenter}" @dragleave="${this._ondragleave}" @dragover="${this._ondragover}"><${scopeTag("ui5-icon", tags, suffix)} name="upload-to-cloud"></${scopeTag("ui5-icon", tags, suffix)}><span class="dnd-overlay-text">${ifDefined(this._dndOverlayText)}</span></div>` : html `<div class="${classMap(this.classes.dndOverlay)}" @dragenter="${this._ondragenter}" @dragleave="${this._ondragleave}" @dragover="${this._ondragover}"><ui5-icon name="upload-to-cloud"></ui5-icon><span class="dnd-overlay-text">${ifDefined(this._dndOverlayText)}</span></div>`; }
export default block0;
//# sourceMappingURL=UploadCollectionTemplate.lit.js.map