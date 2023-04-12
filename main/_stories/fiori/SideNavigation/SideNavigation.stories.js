import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-side-navigation";
export default {
    title: "Fiori/SideNavigation",
    component,
    subcomponents: {
        SideNavigationItem: "ui5-side-navigation-item",
        SideNavigationSubItem: "ui5-side-navigation-sub-item"
    },
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => {
    return html `
<ui5-side-navigation ?collapsed="${ifDefined(args.collapsed)}">
	${args.header ? unsafeHTML(args.header) : null}
	${unsafeHTML(args.default)}
	${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>`;
};
export const Basic = Template.bind({});
Basic.args = {
    default: `<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
	<ui5-side-navigation-item text="People" expanded="" icon="group">
		<ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
		<ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
	</ui5-side-navigation-item>
	<ui5-side-navigation-item text="Locations" icon="locate-me" selected=""></ui5-side-navigation-item>
	<ui5-side-navigation-item text="Events" icon="calendar">
		<ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
		<ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
	</ui5-side-navigation-item>`,
    fixedItems: `<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
	<ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`
};
Basic.decorators = [
    (story) => {
        return html `<style>
	ui5-side-navigation {
		height: 600px;
	}

	ui5-shellbar::part(root) {
		padding-inline-start: 0.5rem;
	}
</style>

<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" show-co-pilot>
	<ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
</ui5-shellbar>

${story()}

<script>
	const sidenav = document.querySelector("ui5-side-navigation");
	document.getElementById("toggle").addEventListener("click", () => {
		sidenav.toggleAttribute("collapsed");
	});
</script>`;
    }
];
Basic.parameters = {
    docs: {
        story: {
            iframeHeight: "700px",
            // Opt-out of inline rendering in Docs page
            inline: false,
        },
    }
};
//# sourceMappingURL=SideNavigation.stories.js.map