/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.items)}" role="${ifDefined(this.accInfo.root.role)}" aria-label="${ifDefined(this.accInfo.root.accessibleName)}">${repeat(this.standardItems, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}<${scopeTag("ui5-button", tags, suffix)} aria-hidden="${ifDefined(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${classMap(this.classes.overflowButton)}" tooltip="${ifDefined(this.accInfo.overflowButton.tooltip)}" accessible-name="${ifDefined(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfo.overflowButton.accessibilityAttributes)}></${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div class="${classMap(this.classes.items)}" role="${ifDefined(this.accInfo.root.role)}" aria-label="${ifDefined(this.accInfo.root.accessibleName)}">${repeat(this.standardItems, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}<ui5-button aria-hidden="${ifDefined(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${classMap(this.classes.overflowButton)}" tooltip="${ifDefined(this.accInfo.overflowButton.tooltip)}" accessible-name="${ifDefined(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfo.overflowButton.accessibilityAttributes)}></ui5-button></div>`; }
function block1(context, tags, suffix, item, index) { return html `${ifDefined(item.toolbarTemplate)}`; }
export default block0;
//# sourceMappingURL=ToolbarTemplate.lit.js.map