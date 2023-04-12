import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
const component = "ui5-label";
export default {
    title: "Main/Label",
    component,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => {
    return html `
<ui5-label
	for="${ifDefined(args.for)}"
	?required="${ifDefined(args.required)}"
	?show-colon="${ifDefined(args.showColon)}"
	wrapping-type="${ifDefined(args.wrappingType)}"
>
	${unsafeHTML(args.default)}
</ui5-label>`;
};
export const Basic = Template.bind({});
Basic.args = {
    default: "The quick brown fox jumps over the lazy dog"
};
export const RequiredWithColon = Template.bind({});
RequiredWithColon.args = {
    default: "Required label with colon",
    showColon: true,
    required: true,
};
const SetWidth200Px = (story) => html `
<style>
	ui5-label {
		width: 200px;
	}
</style>

${story()}`;
export const Truncating = Template.bind({});
Truncating.args = {
    default: "Long labels are truncated by default.",
};
Truncating.decorators = [SetWidth200Px];
export const WrappingText = Template.bind({});
WrappingText.args = {
    default: `Long labels can wrap if the text is too long. Set 'wrapping-type="Normal"'. Long labels can wrap if the text is too long`,
    wrappingType: WrappingType.Normal,
};
WrappingText.decorators = [SetWidth200Px];
export const UsageWithInputs = Template.bind({});
UsageWithInputs.args = {
    required: true,
    showColon: true,
};
UsageWithInputs.decorators = [
    (story, { args }) => {
        return html `
	${story({ args: { ...args, for: "myInput", default: "First name" } })}
	<ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

	${story({ args: { ...args, for: "myDatePicker", default: "Date of birth" } })}
	<ui5-date-picker id="myDatePicker" required></ui5-date-picker>

	${story({ args: { ...args, for: "mySelect", default: "Job" } })}
	<ui5-select id="mySelect" required>
		<ui5-option>Manager</ui5-option>
		<ui5-option>Sales</ui5-option>
		<ui5-option selected>Developer</ui5-option>
	</ui5-select>

	${story({ args: { ...args, for: "myTextArea", default: "Description" } })}
	<ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

	<div style="display: flex; align-items: center;">
		${story({ args: { ...args, for: "myCheckBox", default: "Accept terms of use" } })}
		<ui5-checkbox id="myCheckBox" required></ui5-checkbox>
	</div>
`;
    },
    (story) => {
        return html `
<style>
	.f {
		display: flex;
		flex-direction: column;
	}
	.f > :nth-child(2n) {
		margin-bottom: 1.5rem;
	}
</style>

<div class="f">
	${story()}
</div>`;
    }
];
//# sourceMappingURL=Label.stories.js.map