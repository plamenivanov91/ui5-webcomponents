import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getRTL } from "@ui5/webcomponents-base/dist/config/RTL.js";
import myControlType from "./types/myControlType.js";
import myControlTemplate from "./generated/templates/myControlTemplate.lit.js";
import Button from "./Button.js";
import Label from "./Label.js";

import { MYCONTROL_TEXT } from "./generated/i18n/i18n-defaults.js";

// Styles
import myControlCss from "./generated/themes/myControl.css.js";

const metadata = {
	tag: "ui5-mycontrol",
	properties: {

		type: {
			type: myControlType,
			defaultValue: myControlType.Positive,
		},

		active: {
			type: Boolean,
			noAttribute: true,
		},
	},
	slots: {
		"default": {
			type: Node,
		},

		buttons: {
			type: Node,
			individualSlots: true,
			listenFor: { exclude: ["active"] },
		},
	},
	events: {
		typeChanged: {},
	},
};

class myControl extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return myControlCss;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return myControlTemplate;
	}

	constructor() {
		super();
	}

	onBeforeRendering() {
		console.log("onBeforeRendering"); // eslint-disable-line
	}

	onAfterRendering() {
		console.log("onAfterRendering"); // eslint-disable-line
	}

	onEnterDOM() {
		console.log("onEnterDOM"); // eslint-disable-line
	}

	onExitDOM() {
		console.log("onExitDOM"); // eslint-disable-line
	}

	toggleType() {
		this.type = this.type === myControlType.Positive ? myControlType.Negative : myControlType.Positive;
		this.fireEvent("typeChanged", { type: this.type });
	}

	toggleActive() {
		this.active = !this.active;
	}

	get rtl() {
		return getRTL() ? "rtl" : undefined;
	}

	get classes() {
		return {
			"ui5-mycontrol-active": this.active,
			"ui5-mycontrol-active-positive": this.active && this.type === myControlType.Positive,
		};
	}

	get mycontrolText() {
		return MYCONTROL_TEXT.defaultText;
	}

	static async define(...params) {
		await Promise.all([
			Button.define(),
			Label.define(),
		]);

		super.define(...params);
	}
}

myControl.define();

export default myControl;
