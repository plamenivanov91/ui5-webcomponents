import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-segmented-button";
export default {
    title: "Main/SegmentedButton",
    component,
    subcomponents: { 'SegmentedButtonItem': 'ui5-segmented-button-item' },
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-segmented-button
	accessible-name="${ifDefined(args.accessibleName)}"
>
	${unsafeHTML(args.default)}
</ui5-segmented-button>`;
export const Basic = Template.bind({});
Basic.args = {
    default: `<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,
    accessibleName: "Geographic location",
};
export const WithIcons = Template.bind({});
WithIcons.args = {
    default: `<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>`,
};
export const WithMoreItems = Template.bind({});
WithMoreItems.storyName = "More Segmented Button Items";
WithMoreItems.args = {
    default: `<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
<ui5-segmented-button-item>Press me</ui5-segmented-button-item>`,
};
//# sourceMappingURL=SegmentedButton.stories.js.map