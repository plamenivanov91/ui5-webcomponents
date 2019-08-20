import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import WrapperTemplate from "./generated/templates/WrapperTemplate.lit.js";

// styles
import wrapperCss from "./generated/themes/Wrapper.css.js";
import WrapperDesign from "./types/WrapperDesign.js";
import Button from "./Button.js";
import Label from "./Label.js";
import { isIE } from "@ui5/webcomponents-core/dist/sap/ui/Device";

import { ITWORKS } from "./generated/i18n/i18n-defaults.js";

const metadata = {
	tag: "ui5-wrapper",
	properties: {
		design: {
			type: WrapperDesign,
			defaultValue: WrapperDesign.Positive,
		},
		active: {
			type: Boolean,
		},
	},
	slots: {
        "default": {
            type: Node,
        },
        buttons: {
            type: Node,
            individualSlots: true,
            listenFor: {include: ["*"]},
        },
	},
	events: {
        designChanged: {

        }
	},
};

class Wrapper extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return wrapperCss;
	}

	static get template() {
		return WrapperTemplate;
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

	get classes() {
		return {
            "ui5-wrapper-positive-active": this.active && this.design === WrapperDesign.Positive,
            "ui5-wrapper-ie": isIE(),
		};
    }

    toggleDesign() {
        this.design = this.design === WrapperDesign.Positive ?
        WrapperDesign.Negative :
        WrapperDesign.Positive;
        this.fireEvent("designChanged", {
            design: this.design,
        });
    }

    get itworks() {
        return ITWORKS.defaultText;
    }

	static async define(...params) {
        await Promise.all([
            Button.define(),
            Label.define(),
        ]);

		super.define(...params);
	}
}

Wrapper.define();

export default Wrapper;
