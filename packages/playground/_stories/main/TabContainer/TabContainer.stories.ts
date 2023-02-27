import { html } from "lit-html";
import type { Meta, StoryFn } from "@storybook/web-components";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { UI5StoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs";

// @ts-ignore
import type TabContainer from "@ui5/webcomponents/dist/TabContainer.js";

const component = "ui5-tabcontainer";

export default {
    title: "Main/TabContainer",
    component,
    subcomponents: {'Tab' : 'ui5-tab', 'TabSeparator' : 'ui5-tab-separator'},
    parameters: {
        docs: {
          page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
} as Meta<TabContainer>;

const Template: UI5StoryArgs<TabContainer, StoryArgsSlots> = (args) => html`<div></div>`;


export const Template0: StoryFn = () => html`
<!-- Workaround for IE issue -->
	<style>
		ui5-tabcontainer {
			width: calc(100% + 2 * .0625rem) !important;
		}
	</style>
	<h3>Basic TabContainer</h3>
	<div class="snippet">
		<ui5-tabcontainer class="full-width">
			<ui5-tab icon="menu" text="Tab 1">
				<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="activities" text="Tab 2" selected="">
				<ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="add" text="Tab 3">
				<ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="calendar" text="Tab 4">
				<ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
			</ui5-tab>
			<ui5-tab-separator></ui5-tab-separator>
			<ui5-tab icon="action-settings" text="Tab 5">
				<ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
			</ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template1: StoryFn = () => html`
<h3>TabContainer with text only tabs</h3>
	<div class="snippet">
		<ui5-tabcontainer class="full-width" collapsed="" fixed="">
			<ui5-tab text="Home"></ui5-tab>
			<ui5-tab text="What's new" selected=""></ui5-tab>
			<ui5-tab text="Who are we"></ui5-tab>
			<ui5-tab text="About"></ui5-tab>
			<ui5-tab text="Contacts"></ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template2: StoryFn = () => html`
<h3>Text only End Overflow</h3>
	<div class="snippet">
		<ui5-tabcontainer collapsed="" fixed="">
			<ui5-tab text="Tab 1">
			</ui5-tab>
			<ui5-tab text="Tab 2">
			</ui5-tab>
			<ui5-tab text="Tab 3">
			</ui5-tab>
			<ui5-tab text="Tab 4">
			</ui5-tab>
			<ui5-tab text="Tab 5">
			</ui5-tab>
			<ui5-tab text="Tab 6">
			</ui5-tab>
			<ui5-tab text="Tab 7">
			</ui5-tab>
			<ui5-tab text="Tab 8">
			</ui5-tab>
			<ui5-tab text="Tab 9">
			</ui5-tab>
			<ui5-tab text="Tab 10">
			</ui5-tab>
			<ui5-tab text="Tab 11">
			</ui5-tab>
			<ui5-tab text="Tab 12">
			</ui5-tab>
			<ui5-tab text="Tab 13" selected="">
			</ui5-tab>
			<ui5-tab text="Tab 14">
			</ui5-tab>
			<ui5-tab text="Tab 15">
			</ui5-tab>
			<ui5-tab text="Tab 16">
			</ui5-tab>
			<ui5-tab text="Tab 17">
			</ui5-tab>
			<ui5-tab text="Tab 18">
			</ui5-tab>
			<ui5-tab text="Tab 19">
			</ui5-tab>
			<ui5-tab text="Tab 20">
			</ui5-tab>
			<ui5-tab text="Tab 21">
			</ui5-tab>
			<ui5-tab text="Tab 22">
			</ui5-tab>
			<ui5-tab text="Tab 23">
			</ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template3: StoryFn = () => html`
<h3>TabContainer with text and additional-text</h3>
	<div class="snippet">
		<ui5-tabcontainer collapsed="" fixed="">
			<ui5-tab text="Info" additional-text="3">
			</ui5-tab>
			<ui5-tab text="Attachments" additional-text="24" selected="">
			</ui5-tab>
			<ui5-tab text="Notes" additional-text="16">
			</ui5-tab>
			<ui5-tab text="People" additional-text="34">
			</ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template4: StoryFn = () => html`
<h3>TabContainer with tabLayout="Inline"</h3>
	<div class="snippet">
		<ui5-tabcontainer tab-layout="Inline" collapsed="" fixed="">
			<ui5-tab text="Monitors" additional-text="10">
			</ui5-tab>
			<ui5-tab text="Cameras" additional-text="2" selected="">
			</ui5-tab>
			<ui5-tab text="Rooms" additional-text="16">
			</ui5-tab>
		</ui5-tabcontainer>
		<ui5-tabcontainer tab-layout="Inline" collapsed="" fixed="">
			<ui5-tab icon="laptop" text="Monitors" additional-text="10">
			</ui5-tab>
			<ui5-tab icon="video" text="Cameras" additional-text="2" selected="">
			</ui5-tab>
			<ui5-tab icon="home" text="Rooms" additional-text="16">
			</ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template5: StoryFn = () => html`
<h3>TabContainer with nested tabs</h3>
	<div class="snippet">
		<ui5-tabcontainer collapsed="">
			<ui5-tab text="Notes">
				Notes go here ...
			</ui5-tab>
			<ui5-tab text="Products">
				Products go here ...
				<ui5-tab slot="subTabs" text="Computers">
					Computers go here ...
					<ui5-tab slot="subTabs" text="Laptops">
						Laptops go here ...
					</ui5-tab>
					<ui5-tab slot="subTabs" text="Desktops">
						<ui5-tab slot="subTabs" text="Work Stations">
							Work Stations go here ...
						</ui5-tab>
						<ui5-tab slot="subTabs" text="Game Stations">
							Game Stations go here ...
						</ui5-tab>
						Desktops go here ...
					</ui5-tab>
				</ui5-tab>
				<ui5-tab text="Phones" slot="subTabs">
					<ui5-tab text="Smartphones" slot="subTabs">
						Smartphones go here ...
					</ui5-tab>
					<ui5-tab text="Tablets" slot="subTabs">
						Tablets go here ...
					</ui5-tab>
					Phones go here ...
				</ui5-tab>
			</ui5-tab>
			<ui5-tab text="Orders">
				Orders go here ...
				<ui5-tab slot="subTabs" text="Attachments">
					Order attachments go here ...
				</ui5-tab>
			</ui5-tab>
		</ui5-tabcontainer>
	</div>
`;


export const Template6: StoryFn = () => html`
<style>
		.radio-button-group {
			display: flex;
			flex-direction: column;
		}
		.design-options {
			display: flex;
			gap: 2rem;
		}
	</style>
	<h3>TabContainer Design Background</h3>
	<div class="snippet">
		<div class="design-options">
			<div role="radiogroup" id="radioGroup-headerDesign" class="radio-button-group">
				<ui5-label>Header Background</ui5-label>
				<ui5-radio-button text="Solid" checked="" name="Group1"></ui5-radio-button>
				<ui5-radio-button text="Transparent" name="Group1"></ui5-radio-button>
				<ui5-radio-button text="Translucent" name="Group1"></ui5-radio-button>
			</div>
			<div role="radiogroup2" id="radioGroup-contentDesign" class="radio-button-group">
				<ui5-label>Content Background</ui5-label>
				<ui5-radio-button text="Solid" name="Group2"></ui5-radio-button>
				<ui5-radio-button text="Transparent" checked="" name="Group2"></ui5-radio-button>
				<ui5-radio-button text="Translucent" name="Group2"></ui5-radio-button>
			</div>
		</div>
		<ui5-tabcontainer id="tabContainerBackgroundDesign" header-background-design="Solid" content-background-design="Transparent">
			<ui5-tab text="Tab 1" selected="">
				<ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates accusamus est quibusdam inventore ipsam?</ui5-label>
			</ui5-tab>
			<ui5-tab text="Tab 2">
				<ui5-label>Accusamus minus aperiam sunt ipsam eos quos et maxime facilis tempora neque ratione nemo laborum expedita aliquid officiis nisi, necessitatibus quasi distinctio?</ui5-label>
			</ui5-tab>
			<ui5-tab text="Tab 3">
				<ui5-label>Dolores totam perferendis numquam incidunt obcaecati, id quo at alias rem deserunt praesentium repellat ipsum commodi consequuntur veniam et ducimus animi qui nobis accusantium tenetur eveniet culpa non!</ui5-label>
			</ui5-tab>
		</ui5-tabcontainer>
		<script>
			const radioGroupHeaderDesign = document.getElementById("radioGroup-headerDesign");
			const radioGroupContentDesign = document.getElementById("radioGroup-contentDesign");
			const tabContainerBackgroundDesign = document.getElementById("tabContainerBackgroundDesign");
			radioGroupHeaderDesign.addEventListener("change", function (e) {
				tabContainerBackgroundDesign.headerBackgroundDesign = e.target.text;
			});
			radioGroupContentDesign.addEventListener("change", function (e) {
				tabContainerBackgroundDesign.contentBackgroundDesign = e.target.text;
			});
		</script>
	</div>
`;
Template6.parameters = {
	docs: {
		story: {
			// Opt-out of inline rendering
			inline: false,
		},
	}
};