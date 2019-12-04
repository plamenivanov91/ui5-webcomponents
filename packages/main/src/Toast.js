import Integer from "@ui5/webcomponents-base/src/types/Integer.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/src/renderer/LitRenderer.js";
import { getRTL } from "@ui5/webcomponents-base/src/config/RTL.js";
import ToastTemplate from "./generated/templates/ToastTemplate.lit.js";
import ToastPlacement from "./types/ToastPlacement.js";

// Styles
import ToastCss from "./generated/themes/Toast.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-toast",
	properties: /** @lends sap.ui.webcomponents.main.Toast.prototype */ {

		/**
		 * Defines the duration in milliseconds for which <code>ui5-toast</code>
		 * remains on the screen before it's automatically closed.
		 *
		 * @type {Integer}
		 * @defaultvalue 3000
		 * @public
		 */
		duration: {
			type: Integer,
			defaultValue: 3000,
		},

		/**
		 * Defines the placement of the <code>ui5-toast</code> web component.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>TopStart</code></li>
		 * <li><code>TopCenter</code></li>
		 * <li><code>TopEnd</code></li>
		 * <li><code>MiddleStart</code></li>
		 * <li><code>MiddleCenter</code></li>
		 * <li><code>MiddleEnd</code></li>
		 * <li><code>BottomStart</code></li>
		 * <li><code>BottomCenter</code></li>
		 * <li><code>BottomEnd</code></li>
		 * <ul>
		 *
		 * @type {string}
		 * @defaultvalue "BottomCenter"
		 * @public
		 */
		placement: {
			type: ToastPlacement,
			defaultValue: ToastPlacement.BottomCenter,
		},

		/**
		 * Indicates whether <code>ui5-toast</code> is open (visible).
		 * @type {boolean}
		 * @private
		 */
		open: {
			type: Boolean,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Toast.prototype */ {
		/**
		 * Defines the text of the <code>ui5-toast</code> web component.
		 * <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-toast</code> is a small, non-disruptive popup for success or information messages that
 * disappears automatically after a few seconds.
 *
 *
 * <h3>Usage</h3>
 *
 * <h4>When to use:</h4>
 * <ul>
 * <li>You want to display a short success or information message.</li>
 * <li>You do not want to interrupt users while they are performing an action.</li>
 * <li>You want to confirm a successful action.</li>
 * </ul>
 * <h4>When not to use:</h4>
 * <ul>
 * <li>You want to display error or warning message.</li>
 * <li>You want to interrupt users while they are performing an action.</li>
 * <li>You want to make sure that users read the message before they leave the page.</li>
 * <li>You want users to be able to copy some part of the message text.</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Toast";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Toast
 * @extends UI5Element
 * @tagname ui5-toast
 * @public
 * @since 1.0.0-rc.6
 */
class Toast extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return ToastCss;
	}

	static get template() {
		return ToastTemplate;
	}

	onAfterRendering() {
		if (this._reopen) {
			this._reopen = false;
			this._initiateOpening();
		}
	}

	/**
	 * Shows the <code>ui5-toast</code>.
	 * @public
	 */
	show() {
		if (this.open) {
			// If the Toast is already opened, we set the _reopen flag to true, in
			// order to trigger re-rendering after an animation frame
			// in the onAfterRendering hook.
			// This is needed for properly resetting the opacity transition.
			this._reopen = true;
			this.open = false;
		} else {
			this._initiateOpening();
		}
	}

	get rtl() {
		return getRTL() ? "rtl" : undefined;
	}

	get styles() {
		return {
			root: {
				// The transition should be a third of the duration
				"transition-duration": this.open ? `${this.duration / 3}ms` : "",
				// The delay should be two thirds of the duration
				"transition-delay": this.open ? `${(this.duration * 2) / 3}ms` : "",
				// We alter the opacity property, in order to trigger transition
				"opacity": this.open ? "0" : "",
			},
		};
	}

	_initiateOpening() {
		requestAnimationFrame(_ => {
			this.open = true;
		});
	}

	_ontransitionend() {
		this.open = false;
	}
}

Toast.define();

export default Toast;
