import { setAnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";
import FlexibleColumnLayout from "../../src/FlexibleColumnLayout.js";
import AnimationMode from "@ui5/webcomponents-base/dist/types/AnimationMode.js";

describe("Columns resize", () => {
	beforeEach(() => {
		cy.wrap({ setAnimationMode })
			.invoke("setAnimationMode", AnimationMode.None);

		cy.mount(
			<FlexibleColumnLayout id="fcl" style={{ height: "300px" }} layout="TwoColumnsMidExpanded">
				<div class="column" id="startColumn" slot="startColumn">some content</div>
				<div class="column" id="midColumn" slot="midColumn">some content</div>
			</FlexibleColumnLayout>
		);
	});

	it("separator drag'n'drop", () => {
		let oldWidthFirstCol: number;
		let widthAfterMove: number;

		cy.get("[ui5-flexible-column-layout]")
			.as("fcl");

		cy.get("[ui5-flexible-column-layout]")
			.shadow()
			.find(".ui5-fcl-separator-start")
			.should("be.visible")
			.as("separator");

		cy.get("[ui5-flexible-column-layout]")
			.shadow()
			.find(".ui5-fcl-column--start")
			.then($el => {
				oldWidthFirstCol = $el.width()!;
			});

		// act: mock the user starting to drag the separator
		cy.get("@separator")
			.realMouseDown();

		// act: mock the user starting to drag the separator
		cy.get("@separator")
			.realMouseMove(200, 0);

		cy.get("[ui5-flexible-column-layout]")
			.shadow()
			.find(".ui5-fcl-column--start")
			.should($el => {
				widthAfterMove = $el.width()!;

				expect(oldWidthFirstCol).to.be.lt(widthAfterMove);
			});

		// act: mock the user releasing the mouse button; use "then" to ensure it happens after the above check has completed
		cy.get("@separator")
			.realMouseUp();

		cy.get("@separator")
			.realMouseMove(200, 0);

		cy.get("@separator")
			.realMouseMove(-100, 0);

		cy.get("[ui5-flexible-column-layout]")
			.shadow()
			.find(".ui5-fcl-column--start")
			.should($el => {
				expect(widthAfterMove).to.be.equal($el.width()!);
			});
	});

	it("sets dedicated class to hidden columns", () => {
		cy.get("[ui5-flexible-column-layout]")
			.shadow()
			.find(".ui5-fcl-column--end")
			.should($el => {
				expect($el).to.have.class("ui5-fcl-column--hidden");
			});
	});

	it.skip("keeps hidden class on columns after rerendering", () => {
		// Get a reference to the FCL first
		cy.get("[ui5-flexible-column-layout]")
			.as("fcl");
		
		// Verify initial state
		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-column--end")
			.should("have.class", "ui5-fcl-column--hidden");

		// Change animation mode to "full"
		cy.wrap({ setAnimationMode })
			.invoke("setAnimationMode", AnimationMode.Full);

		// Verify the end column has the animation class after changing animation mode
		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-column--end")
			.should("have.class", "ui5-fcl-column-animation");

		// Verify the end column still has the hidden class after rerendering
		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-column--end")
			.should("have.class", "ui5-fcl-column--hidden");

		// Change height by 10px
		cy.get("@fcl")
			.invoke("css", "height", "310px");

		// Verify the end column still has the hidden class after height change
		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-column--end")
			.should("have.class", "ui5-fcl-column--hidden");
	});
});

describe("ACC", () => {
	it("verifies that aria-hidden is not set in OneColumn layout", () => {
		cy.mount(
			<FlexibleColumnLayout id="fcl" layout="OneColumn">
				<div class="column" id="startColumn" slot="startColumn">some content</div>
			</FlexibleColumnLayout>
		);

		cy.get("[ui5-flexible-column-layout]")
			.as("fcl");

		cy.get("@fcl")
			.shadow()
			.find("slot[name=startColumn]")
			.should("not.have.attr", "aria-hidden");

		cy.get("@fcl")
			.shadow()
			.find("slot[name=midColumn]")
			.should("have.attr", "aria-hidden");

		cy.get("@fcl")
			.shadow()
			.find("slot[name=endColumn]")
			.should("have.attr", "aria-hidden");
	});
	
	it("verifies that aria-valuenow is set on separators", () => {
		cy.mount(
			<FlexibleColumnLayout id="fcl" style={{ height: "300px" }} layout="ThreeColumnsMidExpanded">
				<div class="column" id="startColumn" slot="startColumn">some content</div>
				<div class="column" id="midColumn" slot="midColumn">some content</div>
				<div class="column" id="endColumn" slot="endColumn">some content</div>
			</FlexibleColumnLayout>
		);

		cy.get("[ui5-flexible-column-layout]")
			.as("fcl");

		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-separator-start")
			.should("have.attr", "aria-valuenow");

		cy.get("@fcl")
			.shadow()
			.find(".ui5-fcl-separator-end")
			.should("have.attr", "aria-valuenow");
	});
});
