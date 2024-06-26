import UI5Element from "../../dist/UI5Element.js";
import litRender, { html } from "../../dist/renderer/LitRenderer.js";

const metadata = {
	tag: "ui5-test-child",
	properties: {
		prop1: {
			type: String,
		},
		prop2: {
			type: String,
		},
		prop3: {
			type: String,
		},
	}
};

class Child extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return element => {
			return html`<div></div>`;
		};
	}
}

Child.define();
