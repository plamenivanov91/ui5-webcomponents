import ShellBar from "../../src/ShellBar.js";
import ShellBarItem from "../../src/ShellBarItem.js";
import ShellBarSpacer from "../../src/ShellBarSpacer.js";
import activities from "@ui5/webcomponents-icons/dist/activities.js";
import navBack from "@ui5/webcomponents-icons/dist/nav-back.js";
import sysHelp from "@ui5/webcomponents-icons/dist/sys-help.js";
import da from "@ui5/webcomponents-icons/dist/da.js";
import Input from "@ui5/webcomponents/dist/Input.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import ToggleButton from "@ui5/webcomponents/dist/ToggleButton.js";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";
import Avatar from "@ui5/webcomponents/dist/Avatar.js";
import Switch from "@ui5/webcomponents/dist/Switch.js";
import ShellBarBranding from "@ui5/webcomponents-fiori/dist/ShellBarBranding.js"
import ShellBarSearch from "../../src/ShellBarSearch.js";

const RESIZE_THROTTLE_RATE = 300; // ms

describe("Responsiveness", () => {
	function basicTemplate() {
		return <ShellBar
			id="shellbar"
			primaryTitle="Product Title"
			secondaryTitle="Solution name"
			notificationsCount="99+"
			showNotifications={true}
			showProductSwitch={true}
		>
			{/* <ToggleButton id="assistant" icon={da} slot="assistant" text="Button3"></ToggleButton> */}
			<ToggleButton id="assistant" icon={da} slot="assistant">Button3</ToggleButton>

			<Avatar slot="profile">
				<img src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png" />
			</Avatar>

			<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />

			<Button icon={navBack} slot="startButton" id="start-button"></Button>

			<ShellBarItem id="disc" icon={activities} text="Disconnect"></ShellBarItem>
			<ShellBarItem id="call" icon={sysHelp} text="Incoming Calls" stable-dom-ref="call"></ShellBarItem>

			<Input placeholder="Instructions" slot="searchField" showSuggestions={true} valueState="Information">
				<div slot="valueStateMessage">Instructions</div>
			</Input>

			<Switch design="Textual" textOn="PR0" textOff="PR0" slot="startContent"></Switch>
			{/* <ToggleButton slot="endContent" text="PR2" data-hide-order="2">PR2</ToggleButton> */}
			<ToggleButton slot="endContent" data-hide-order="2">PR2</ToggleButton>
		</ShellBar>;
	}

	function templateWithMenuItems() {
		return <ShellBar
			id="shellbar"
			primaryTitle="Product Title"
			secondaryTitle="Solution name"
			notificationsCount="99+"
			showNotifications={true}
			showProductSwitch={true}
		>
			<ToggleButton icon={da} slot="assistant"></ToggleButton>
			<ListItemStandard id="menu-item-1" slot="menuItems" data-key="key1">Application 1</ListItemStandard>
			<ListItemStandard id="menu-item-2" slot="menuItems" data-key="key2">Application 2</ListItemStandard>
			<ListItemStandard slot="menuItems" data-key="key3">Application 3</ListItemStandard>
			<ListItemStandard slot="menuItems" data-key="key4">Application 4</ListItemStandard>
			<ListItemStandard slot="menuItems" data-key="key5">Application 5</ListItemStandard>
			<Avatar slot="profile">
				<img src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png" />
			</Avatar>

			<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />

			<Button icon={navBack} slot="startButton" id="start-button"></Button>

			<ShellBarItem id="disc" icon={activities} text="Disconnect"></ShellBarItem>
			<ShellBarItem id="call" icon={sysHelp} text="Incoming Calls"></ShellBarItem>

			<Input placeholder="Instructions" slot="searchField" showSuggestions={true} valueState="Information">
				<div slot="valueStateMessage">Instructions</div>
			</Input>
		</ShellBar>;
	}

	function templateWithOnlyOneAction() {
		return <ShellBar
			id="shellbar"
			primaryTitle="Product Title"
			secondaryTitle="Solution name"
			notificationsCount="99+"
			showNotifications={true}
			showProductSwitch={true}
		>
			<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
		</ShellBar>;
	}
	beforeEach(() => {
		cy.mount(basicTemplate()).as("html");

		// breakpoints are set on resize event
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(RESIZE_THROTTLE_RATE);

		cy.get("#shellbar")
			.as("shellbar");
	});
	afterEach(() => {
		cy.viewport(1920, 1080);
	});

	it("tests XL Breakpoint 1920px", () => {
		cy.viewport(1920, 1080);

		cy.get("@shellbar").should("have.prop", "breakpointSize", "XL");

		cy.get("@shellbar").find("ui5-toggle-button[slot='assistant']").as("assistant");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-overflow-button").as("overflowButton");
		cy.get("@shellbar").find("ui5-button[slot='startButton']").as("backButton");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-title").as("primaryTitle");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-secondary-title").as("secondaryTitle");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-custom-item").as("customActionIcon1");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-bell-button").as("notificationsIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-image-button").as("profileIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-button-product-switch").as("productSwitchIcon");

		cy.get("@assistant").should("be.visible");
		cy.get("@overflowButton").should("not.be.visible");
		cy.get("@backButton").should("be.visible");
		cy.get("@primaryTitle").should("be.visible");
		cy.get("@secondaryTitle").should("be.visible");
		cy.get("@customActionIcon1").should("be.visible");
		cy.get("@notificationsIcon").should("be.visible");
		cy.get("@profileIcon").should("be.visible");
		cy.get("@productSwitchIcon").should("be.visible");
	});

	it("tests M Breakpoint and overflow 500px", () => {
		cy.viewport(500, 1680);

		cy.get("@shellbar").shadow().find(".ui5-shellbar-overflow-button").as("overflowButton");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-search-button").as("searchIcon");

		cy.get("@searchIcon").should("be.visible");
		cy.get("@overflowButton").should("be.visible");
	});

	it("tests XL Breakpoint 1820px", () => {
		cy.viewport(1820, 1680);

		cy.get("@shellbar").should("have.prop", "breakpointSize", "L");
	});

	it("tests L Breakpoint 1400px", () => {
		cy.viewport(1400, 1680);

		cy.get("@shellbar").should("have.prop", "breakpointSize", "L");

		cy.get("@shellbar").find("ui5-toggle-button[slot='assistant']").as("assistant");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-overflow-button").as("overflowButton");
		cy.get("@shellbar").find("ui5-button[slot='startButton']").as("backButton");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-title").as("primaryTitle");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-secondary-title").as("secondaryTitle");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-search-button").as("searchIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-custom-item").as("customActionIcon1");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-bell-button").as("notificationsIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-image-button").as("profileIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-button-product-switch").as("productSwitchIcon");

		cy.get("@assistant").should("be.visible");
		cy.get("@overflowButton").should("not.be.visible");
		cy.get("@backButton").should("be.visible");
		cy.get("@primaryTitle").should("be.visible");
		cy.get("@secondaryTitle").should("be.visible");
		cy.get("@searchIcon").should("be.visible");
		cy.get("@customActionIcon1").should("be.visible");
		cy.get("@notificationsIcon").should("be.visible");
		cy.get("@profileIcon").should("be.visible");
		cy.get("@productSwitchIcon").should("be.visible");
	});

	it("tests M Breakpoint 870px", () => {
		cy.viewport(870, 1680);

		cy.get("@shellbar").should("have.prop", "breakpointSize", "M");

		cy.get("@shellbar").find("ui5-toggle-button[slot='assistant']").as("assistant");
		cy.get("@shellbar").find("ui5-button[slot='startButton']").as("backButton");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-title").as("primaryTitle");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-search-button").as("searchIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-bell-button").as("notificationsIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-image-button").as("profileIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-button-product-switch").as("productSwitchIcon");

		cy.get("@assistant").should("be.visible");
		cy.get("@backButton").should("be.visible");
		cy.get("@primaryTitle").should("be.visible");
		cy.get("@searchIcon").should("be.visible");
		cy.get("@notificationsIcon").should("be.visible");
		cy.get("@profileIcon").should("be.visible");
		cy.get("@productSwitchIcon").should("be.visible");
	});

	it("tests S Breakpoint and overflow 510px", () => {
		cy.viewport(510, 1680);

		cy.get("@shellbar").should("have.prop", "breakpointSize", "S");

		cy.get("@shellbar").find("[slot='assistant']").as("assistant");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-overflow-button").as("overflowButton");
		cy.get("@shellbar").find("ui5-button[slot='startButton']").as("backButton");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-search-button").as("searchIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-bell-button").as("notificationsIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-image-button").as("profileIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-button-product-switch").as("productSwitchIcon");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-overflow-popover").as("overflowPopover");

		cy.get("@assistant").should("be.visible");
		cy.get("@overflowButton").should("be.visible");
		cy.get("@backButton").should("be.visible");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-title").should("not.exist");
		cy.get("@shellbar").shadow().find(".ui5-shellbar-secondary-title").should("not.exist");
		cy.get("@searchIcon").should("be.visible");
		cy.get("@notificationsIcon").should("be.visible");
		cy.get("@profileIcon").should("be.visible");
		cy.get("@productSwitchIcon").should("be.visible");

		cy.get("@overflowPopover").find("ui5-li").should("have.length", 2);
	});

	it("tests S Breakpoint 320px", () => {
		cy.get("html").viewport("iphone-x");
		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-overflow-button")
			.should("exist");
		cy.get("@shellbar")
			.shadow()
			.get("ui5-switch")
			.should("be.hidden");
	});

	it("tests items visibility in Lean mode", () => {
		cy.get("@shellbar")
			.find("ui5-button[slot='startButton']")
			.as("backButton");

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-search-button")
			.as("searchButton");

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-bell-button")
			.as("notificationsIcon");

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-image-button")
			.as("profileIcon");

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-button-product-switch")
			.as("productSwitchIcon");
	});

	it("tests logo and Primary title when no menuItems are presented", () => {
		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-logo-area")
			.as("logoLink");

		cy.get("@logoLink").should("exist");
	});

	it("tests Primary title when menuItems are presented", () => {
		cy.mount(templateWithMenuItems()).as("html1");

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-menu-button")
			.as("menuButton");

		cy.get("@menuButton").should("be.visible");
	});

	it("tests XXL Breakpoint Search bar", () => {
		cy.get("@shellbar").invoke("attr", "show-open-search-field", "true");
		cy.viewport(2560, 1080);
		cy.get("[slot='searchField']")
			.should("exist");
	});

	it("Test overflow button not showing, when only one action is presented", () => {
		cy.mount(templateWithOnlyOneAction()).as("html1");

		cy.get("html").viewport("iphone-6");
		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-overflow-button")
			.should("be.hidden");
	});

	it("Test accessibility attributes on custom action buttons", () => {
		cy.mount(basicTemplate()).as("html");

		cy.get("@shellbar")
			.shadow()
			.find<Button>(`[data-ui5-stable="call"]`)
			.as("call-button")
			.then($el => {
				$el.get(0).accessibilityAttributes = { "hasPopup": "dialog", "expanded": "true" };
			});
		cy.get("@call-button")
			.shadow()
			.find("button")
			.should("have.attr", "aria-expanded", "true")
			.should("have.attr", "aria-hasPopup", "dialog");
	});
});

describe("Slots", () => {
	describe("Content slot", () => {
		it("Test separators visibility", () => {
			function assertStartSeparatorVisibility(expectedExist: boolean) {
				cy.get("#shellbar")
					.shadow()
					.find(".ui5-shellbar-content-items > .ui5-shellbar-separator-start")
					.should(expectedExist ? "exist" : "not.exist");
			}
			function assertEndSeparatorVisibility(expectedExist: boolean) {
				cy.get("#shellbar")
					.shadow()
					.find(".ui5-shellbar-content-items > .ui5-shellbar-separator-end")
					.should(expectedExist ? "exist" : "not.exist");
			}

			cy.mount(
				<ShellBar id="shellbar" primaryTitle="Product Title" showNotifications={true} showProductSwitch={true}>
					<Button icon={navBack} slot="startButton"></Button>
					<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
					<Button slot="content">Start Button 1</Button>
					<Button slot="content" data-hide-order="1">Start Button 2</Button>
					<Button slot="content">Start Button 3</Button>
					<ShellBarSpacer slot="content" />
					<Button slot="content">End Button 1</Button>
					<Button slot="content" data-hide-order="1">End Button 2</Button>
					<Button slot="content">End Button 3</Button>
				</ShellBar>
			);

			// both separators should be visible
			assertStartSeparatorVisibility(true);
			assertEndSeparatorVisibility(true);

			cy.viewport(420, 1080);
			// only end separator should be hidden
			assertStartSeparatorVisibility(true);
			assertEndSeparatorVisibility(false);

			cy.viewport(320, 1080);
			// both separators should be hidden
			assertStartSeparatorVisibility(false);
			assertEndSeparatorVisibility(false);

			// once items are hidden, both separators should be rendered with the last visible item
			cy.get("#shellbar")
				.shadow()
				.find("div[id='content-2'] > .ui5-shellbar-separator-start")
				.should("exist");

			cy.get("#shellbar")
				.shadow()
				.find("div[id='content-6'] > .ui5-shellbar-separator-end")
				.should("exist");

			cy.viewport(1920, 1080);
			// both separators should be visible
			assertStartSeparatorVisibility(true);
			assertEndSeparatorVisibility(true);

			// once items are shown, both separators shouldn't be rendered with the last visible item
			cy.get("#shellbar")
				.shadow()
				.find("div[id='content-2'] > .ui5-shellbar-separator-start")
				.should("not.exist");

			cy.get("#shellbar")
				.shadow()
				.find("div[id='content-6'] > .ui5-shellbar-separator-end")
				.should("not.exist");
		});
	});

	describe("Search field slot", () => {
		it("Test search button is not visible when the search field slot is empty", () => {
			cy.mount(
				<ShellBar id="shellbar"></ShellBar>
			);
			cy.get("#shellbar")
				.shadow()
				.find(".ui5-shellbar-search-button")
				.should("not.exist");
		});

		it("Test search button is visible when the search field slot is not empty", () => {
			cy.mount(
				<ShellBar id="shellbar">
					<Input slot="searchField"></Input>
				</ShellBar>
			);
			cy.get("#shellbar")
				.shadow()
				.find(".ui5-shellbar-search-button")
				.should("exist");
		});

		it("Test search button is not visible when the hide-search-button property is set to true", () => {
			cy.mount(
				<ShellBar id="shellbar" hideSearchButton={true}>
					<Input slot="searchField"></Input>
				</ShellBar>
			);
			cy.get("#shellbar")
				.shadow()
				.find(".ui5-shellbar-search-button")
				.should("not.exist");
		});

		it("Test search field is collapsed by default and expanded on click", () => {
			cy.mount(
				<ShellBar id="shellbar">
					<Input slot="searchField"></Input>
				</ShellBar>
			);
			cy.get("#shellbar").shadow().as("shellbar");
			cy.get("@shellbar").find(".ui5-shellbar-search-field").should("not.exist");
			cy.get("@shellbar").find(".ui5-shellbar-search-button").click();
			cy.get("@shellbar").find(".ui5-shellbar-search-field").should("exist");
		});

		it("Test search field is expanded by default when show-search-field is set to true", () => {
			cy.mount(
				<ShellBar id="shellbar" showSearchField={true}>
					<Input slot="searchField"></Input>
				</ShellBar>
			);
			cy.get("#shellbar")
				.shadow()
				.find(".ui5-shellbar-search-field")
				.should("exist");
		});

		it("Test search button is not visible when a self-collapsible search field slot is empty", () => {
			cy.mount(
				<ShellBar id="shellbar">
					<ShellBarSearch slot="searchField"></ShellBarSearch>
				</ShellBar>
			);
			cy.get("#shellbar")
				.shadow()
				.find(".ui5-shellbar-search-button")
				.should("not.exist");
		});

		it("Test self-collapsible search is expanded and collapsed by the show-search-field property", () => {
			cy.mount(
				<ShellBar id="shellbar" showSearchField={true}>
					<ShellBarSearch id="search" slot="searchField"></ShellBarSearch>
				</ShellBar>
			);
			cy.get("#search").should("have.prop", "collapsed", false);
			cy.get("#shellbar").invoke("prop", "showSearchField", false);
			cy.get("#search").should("have.prop", "collapsed", true);
		});

		it("Test showSearchField property is false when using collapsed search field", () => {
			cy.mount(
				<ShellBar id="shellbar">
					<ShellBarSearch id="search" slot="searchField" collapsed></ShellBarSearch>
				</ShellBar>
			);
			cy.get("#search").should("have.prop", "collapsed", true);
			cy.get("#shellbar").invoke("prop", "showSearchField").should("equal", false);
		});

		it("Test search field is collapsed initially instead of being displayed in full width mode", () => {
			cy.viewport(500, 1080);
			cy.mount(
				// needs some content to trigger the full width mode
				<ShellBar id="shellbar" showSearchField={true} showNotifications={true} showProductSwitch={true}>
					<Button icon={navBack} slot="startButton"></Button>
					<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
					<Button slot="content">Start Button 1</Button>

					<Input id="search" slot="searchField"></Input>
				</ShellBar>
			);
			cy.get("#shellbar").invoke("prop", "showSearchField").should("equal", false);
		});

		it("Test search field added after delay still works with events", () => {
			cy.mount(
				<ShellBar id="shellbar" primaryTitle="Product Title" showNotifications={true}></ShellBar>
			);

			cy.get("#shellbar").as("shellbar");

			// Add search field after a timeout (simulating real-world scenario)
			cy.get("@shellbar").then(shellbar => {
				setTimeout(() => {
					const searchField = document.createElement("ui5-shellbar-search");
					searchField.setAttribute("slot", "searchField");
					searchField.setAttribute("id", "delayed-search");
					shellbar.get(0).appendChild(searchField);
				}, 100);
			});

			// Wait for the search field to be added
			cy.get("#delayed-search", { timeout: 1000 }).should("exist");

			// Search should now be visible and collapsed
			cy.get("#shellbar [slot='searchField']")
				.should("exist")
				.should("have.prop", "collapsed", true);

			// click the searchField to expand it
			cy.get("#shellbar [slot='searchField']")
				.click()
				.should("have.prop", "collapsed", false);
			// check shellbar's showSearchField property is also updated
			cy.get("@shellbar").invoke("prop", "showSearchField").should("equal", true);
		});
	});
});

describe("Events", () => {
	it("Test click on the search button fires search-button-click event", () => {
		cy.mount(
			<ShellBar>
				<Input slot="searchField"></Input>
			</ShellBar>
		);
		cy.get("[ui5-shellbar")
			.as("shellbar");

		cy.get("@shellbar")
			.then(shellbar => {
				shellbar.get(0).addEventListener("ui5-search-button-click", cy.stub().as("searchButtonClick"));
			});

		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-search-button")
			.as("searchButton");

		cy.get("@searchButton")
			.click();

		cy.get("@searchButtonClick")
			.should("have.been.calledOnce");
	});

	it("Test logo click fires logo-click event only once", () => {
		cy.mount(
			<ShellBar primaryTitle="Product Title" secondaryTitle="Secondary Title">
				<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
			</ShellBar>
		);

		cy.get("[ui5-shellbar]")
			.as("shellbar");

		cy.get("@shellbar")
			.then(shellbar => {
				shellbar.get(0).addEventListener("ui5-logo-click", cy.stub().as("logoClick"));
			});

		// Test clicking on the logo area in large screens (combined logo layout)
		cy.viewport(1920, 1080);
		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-logo-area")
			.as("logoArea")
			.should("exist");

		cy.get("@logoArea")
			.click();

		cy.get("@logoClick")
			.should("have.been.calledOnce");

		// Reset the stub for the next test
		cy.get("@shellbar")
			.then(shellbar => {
				shellbar.get(0).addEventListener("ui5-logo-click", cy.stub().as("logoClickSmall"));
			});

		// Test clicking on the logo in small screens (single logo layout)
		cy.viewport(500, 1080);
		cy.get("@shellbar")
			.shadow()
			.find(".ui5-shellbar-logo")
			.as("logo")
			.should("exist");

		cy.get("@logo")
			.click();

		cy.get("@logoClickSmall")
			.should("have.been.calledOnce");
	});
});

describe("ButtonBadge in ShellBar", () => {
	it("Test if ShellBarItem count appears in ButtonBadge", () => {
		cy.mount(
			<ShellBar id="shellbarwithitems">
				<ShellBarItem id="test-item" icon="accept" text="Item" count="42" />
			</ShellBar>
		);

		cy.get("#shellbarwithitems")
			.shadow()
			.find(".ui5-shellbar-custom-item ui5-button-badge[slot='badge']")
			.should("exist")
			.should("have.attr", "text", "42");
	});

	it("Test count updates propagate to ButtonBadge", () => {
		cy.mount(
			<ShellBar id="test-invalidation">
				<ShellBarItem id="test-invalidation-item" icon="accept" text="Item" count="1" />
			</ShellBar>
		);

		cy.get("#test-invalidation-item").invoke("attr", "count", "3");

		cy.get("#test-invalidation")
			.shadow()
			.find(".ui5-shellbar-custom-item ui5-button-badge[slot='badge']")
			.should("have.attr", "text", "3");
	});

	it("Test if overflow button shows appropriate badge when items are overflowed", () => {
		cy.mount(
			<ShellBar id="shellbar-with-overflow"
				primaryTitle="Product Title"
				secondaryTitle="Secondary Title"
				showNotifications={true}
				showProductSwitch={true}
				notificationsCount="10">
				<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
				<Button icon="nav-back" slot="startButton"></Button>
				<ShellBarItem id="item1" icon="accept" text="Item 1" count="42" />
				<ShellBarItem id="item2" icon="alert" text="Item 2" count="5" />
				<ShellBarItem id="item3" icon="attachment" text="Item 3" />
				<ShellBarItem id="item4" icon="bell" text="Item 4" />
				<Avatar slot="profile">
					<img src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png" />
				</Avatar>
				<Input placeholder="Search" slot="searchField" />
			</ShellBar>
		);

		cy.viewport(320, 800);

		cy.get("#shellbar-with-overflow")
			.shadow()
			.find(".ui5-shellbar-overflow-button")
			.should("be.visible");

		cy.get("#shellbar-with-overflow")
			.shadow()
			.find(".ui5-shellbar-overflow-button ui5-button-badge[slot='badge']")
			.should("exist")
			.should("have.attr", "design", "AttentionDot");

		cy.mount(
			<ShellBar id="shellbar-with-single-overflow"
				primaryTitle="Product Title"
				secondaryTitle="Secondary Title"
				showProductSwitch={true}>
				<img slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />
				<Button icon="nav-back" slot="startButton"></Button>
				<ShellBarItem id="single-item" icon="accept" text="Item" count="42" />
				<ShellBarItem id="item3" icon="attachment" text="Item 3" />
				<ShellBarItem id="item4" icon="bell" text="Item 4" />
				<Avatar slot="profile">
					<img src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png" />
				</Avatar>
			</ShellBar>
		);

		cy.viewport(320, 800);

		cy.get("#shellbar-with-single-overflow")
			.shadow()
			.find(".ui5-shellbar-overflow-button")
			.should("be.visible");

		cy.get("#shellbar-with-single-overflow")
			.shadow()
			.find(".ui5-shellbar-overflow-button ui5-button-badge[slot='badge']")
			.should("exist")
			.should("have.attr", "text", "42");
	});
});

describe("Keyboard Navigation", () => {
	it("Test logo area elements are not rendered when no logo and primaryTitle are provided", () => {
		cy.mount(<ShellBar></ShellBar>);
		cy.wait(RESIZE_THROTTLE_RATE);

		cy.get("[ui5-shellbar]")
			.shadow()
			.find(".ui5-shellbar-logo-area")
			.should("not.exist");
	});

	it("Test arrow navigation within search input respects cursor position", () => {
		cy.mount(
			<ShellBar showSearchField={true}>
				<Button id="button" slot="content">Test Button</Button>
				<ShellBarSearch slot="searchField" value="test value"></ShellBarSearch>
				<ShellBarItem icon={activities} text="Action 1"></ShellBarItem>
			</ShellBar>
		);
		cy.wait(RESIZE_THROTTLE_RATE);

		function placeAtStartOfInput() {
			cy.get("[ui5-shellbar] [slot='searchField']")
				.shadow()
				.find("input")
				.then($input => {
					$input[0].setSelectionRange(0, 0);
				});
		}
		function placeAtEndOfInput() {
			cy.get("[ui5-shellbar] [slot='searchField']")
				.shadow()
				.find("input")
				.then($input => {
					const inputLength = $input.val().toString().length;
					$input[0].setSelectionRange(inputLength, inputLength);
				});
		}
		function placeInMiddleOfInput() {
			cy.get("[ui5-shellbar] [slot='searchField']")
				.shadow()
				.find("input")
				.then($input => {
					const inputLength = $input.val().toString().length;
					const middlePosition = Math.floor(inputLength / 2);
					$input[0].setSelectionRange(middlePosition, middlePosition);
				});
		}

		// Focus the search input
		cy.get("[ui5-shellbar] [slot='searchField']")
			.realClick()
			.shadow()
			.find("input")
			.as("nativeInput");

		placeAtStartOfInput();
		// Press left arrow - should move focus away from input since cursor is at start
		cy.get("@nativeInput").type("{leftArrow}");
		// Verify focus is now on the button
		cy.get("[ui5-shellbar] [ui5-button]").should("be.focused");


		placeAtEndOfInput();
		// Press right arrow - should move focus away from input since cursor is at end
		cy.get("@nativeInput").type("{rightArrow}");
		// Verify focus is now on the ShellBarItem
		cy.get("[ui5-shellbar]")
			.shadow()
			.find(".ui5-shellbar-custom-item")
			.should("be.focused");

		placeInMiddleOfInput();
		// Press left arrow - should stay focused on input since cursor is in the middle
		cy.get("@nativeInput").type("{leftArrow}");
		cy.get("@nativeInput").should("be.focused");
		// Press right arrow - should stay focused on input since cursor is in the middle
		cy.get("@nativeInput").type("{rightArrow}");
		cy.get("@nativeInput").should("be.focused");
	});

	it("Should focus the last ShellBar item on End key press", () => {
		cy.mount(
			<ShellBar id="shellbar" showSearchField={true}>
				<Button slot="content">Test Button 1</Button>
				<Button id="button" slot="content">Test Button 2</Button>
				<ShellBarSearch id="sbSearch" slot="searchField" value="test value"></ShellBarSearch>
			</ShellBar>
		);
		cy.get("#button").shadow().find("button").focus().type('{end}');
		cy.get("#sbSearch").should("be.focused");
	});

	it("Should focus the first ShellBar item on Home key press", () => {
		cy.mount(
			<ShellBar id="shellbar" showSearchField={true}>
				<Button id="button1" slot="content">Test Button 1</Button>
				<Button id="button2" slot="content">Test Button 2</Button>
				<ShellBarSearch slot="searchField" value="test value"></ShellBarSearch>
			</ShellBar>
		);
		cy.get("#button2").shadow().find("button").focus().type('{home}');
		cy.get("#button1").shadow().find("button").should("be.focused");
	});
});

describe("Branding slot", () => {
	it("Test branding slot priority over logo", () => {
		cy.mount(
			<ShellBar id="shellbar" primaryTitle="Primary Title">
				<img id="mainLogo" slot="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" />

				<ShellBarBranding href="https://www.w3schools.com" target="_blank" slot="branding">
					Branding Comp
					<img id="brandingLogo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" slot="logo" />
				</ShellBarBranding>
			</ShellBar>
		)

		cy.get("#shellbar")
			.find("#mainLogo")
			.should('exist')
			.should('not.be.visible');

		cy.get("#shellbar")
			.find("#brandingLogo")
			.should('exist')
			.should('be.visible');

	});
});
