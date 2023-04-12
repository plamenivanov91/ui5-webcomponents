import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
import SwitchDesign from "@ui5/webcomponents/dist/types/SwitchDesign.js";
const component = "ui5-switch";
export default {
    title: "Main/Switch",
    component,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-switch
	design="${ifDefined(args.design)}"
	?checked="${ifDefined(args.checked)}"
	?disabled="${ifDefined(args.disabled)}"
	text-on="${ifDefined(args.textOn)}"
	text-off="${ifDefined(args.textOff)}"
	accessible-name="${ifDefined(args.accessibleName)}"
	accessible-name-ref="${ifDefined(args.accessibleNameRef)}"
	tooltip="${ifDefined(args.tooltip)}"
></ui5-switch>`;
export const Basic = Template.bind({});
export const WithText = Template.bind({});
WithText.args = {
    textOn: "On",
    textOff: "Off",
};
export const Checked = Template.bind({});
Checked.args = {
    textOn: "Yes",
    textOff: "No",
    checked: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    checked: true,
};
export const Design = Template.bind({});
Design.args = {
    design: SwitchDesign.Graphical,
    accessibleName: "graphical",
};
//# sourceMappingURL=Switch.stories.js.map