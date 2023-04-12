import{x as b}from"./lit-html.7ac33e6b.js";import{o}from"./unsafe-html.ba9f7887.js";import{D as T}from"./docs.7521d2a7.js";import{l as t}from"./if-defined.f53f1284.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const D={mode:{control:"select",options:["Delete","MultiSelect","None","SingleSelect","SingleSelectAuto","SingleSelectBegin","SingleSelectEnd"]},default:{control:{type:"text"}},header:{control:{type:"text"}},walk:{description:"Perform Depth-First-Search walk on the tree and run a callback on each node",table:{category:"methods"},UI5CustomData:{parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}]}},"item-click":{description:"Fired when a tree item is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The clicked item."}]}},"item-delete":{description:"Fired when the Delete button of any tree item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the deleted item."}]}},"item-mouseout":{description:"Fired when the mouse cursor leaves the tree item borders.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the hovered item."}]}},"item-mouseover":{description:"Fired when the mouse cursor enters the tree item borders.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the hovered item."}]}},"item-toggle":{description:"Fired when a tree item is expanded or collapsed. <i>Note:</i> You can call <code>preventDefault()</code> on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call <code>toggle()</code> on a tree item.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the toggled item."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItems",type:"Array",description:"An array of the selected items."},{name:"previouslySelectedItems",type:"Array",description:"An array of the previously selected items."},{name:"targetItem",type:"HTMLElement",description:"The item triggering the event."}]}}},w={package:"@ui5/webcomponents",since:"1.0.0-rc.8"};var a=Object.freeze,I=Object.defineProperty,$=(e,v)=>a(I(e,"raw",{value:a(v||e.slice())})),m;const s="ui5-tree",j={title:"Main/Tree",component:s,subcomponents:{TreeItem:"ui5-tree-item"},parameters:{docs:{page:T({...w,component:s})}},argTypes:D},x=e=>b`<ui5-tree
    mode="${t(e.mode)}"
    no-data-text="${t(e.noDataText)}"
    header-text="${t(e.headerText)}"
    footer-text="${t(e.footerText)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
>
    ${o(e.header)} ${o(e.default)}
</ui5-tree>`,i=x.bind({});i.args={default:`
    <ui5-tree-item expanded="" text="Tree 1" icon="paste" selected="">
        <ui5-tree-item expanded="" text="Tree 1.1" selected="">
            <ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
            <ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
        </ui5-tree-item>
    </ui5-tree-item>
    <ui5-tree-item text="Tree 2" icon="copy">
        <ui5-tree-item text="Tree 2.1">
            <ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
            <ui5-tree-item text="Tree 2.1.2">
                <ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
            </ui5-tree-item>
        </ui5-tree-item>
        <ui5-tree-item text="Tree 2.2"></ui5-tree-item>
    </ui5-tree-item>
    <ui5-tree-item expanded="" text="Tree 3 (no icon)"> </ui5-tree-item>`};const r=()=>b(m||(m=$([`
    <ui5-busy-indicator id="busy" class="full-width">
        <ui5-tree id="treeDynamic" mode="None" class="full-width">
            <ui5-tree-item text="Has pre-loaded children">
                <ui5-tree-item text="Child 1"></ui5-tree-item>
                <ui5-tree-item text="Child 2"></ui5-tree-item>
            </ui5-tree-item>
            <ui5-tree-item text="Has no children at all"></ui5-tree-item>
            <ui5-tree-item
                id="dynamicNode"
                text="Has children, but not yet loaded"
                has-children=""
            ></ui5-tree-item>
        </ui5-tree>
    </ui5-busy-indicator>
    <script>
        const busyIndicator = document.getElementById("busy");
        const dynamicTree = document.getElementById("treeDynamic");
        dynamicTree.addEventListener("item-toggle", function (event) {
            const item = event.detail.item; // get the node that is toggled
            // Only for the dynamic node, and only when it's empty
            if (item.id === "dynamicNode" && item.children.length === 0) {
                busyIndicator.active = true; // block the tree from the user
                event.preventDefault(); // do not let the toggle button switch yet
                setTimeout(function () {
                    const newItem = document.createElement("ui5-tree-item"); // Fetching from db....
                    newItem.text = "Node fetched from DB after 2 sec";
                    item.appendChild(newItem); // add the newly fetched node to the tree
                    item.toggle(); // now manually switch the toggle button
                    busyIndicator.active = false; // unblock the tree
                }, 2000);
            }
        });
    <\/script>
`]))),n=x.bind({});n.args={header:`
    <div slot="header">
        <ui5-title>Tree with custom items</ui5-title>
    </div>`,default:`
    <ui5-tree-item-custom
        expanded="true"
        show-toggle-button=""
        hide-selection-element=""
        type="Active"
        level="1"
    >
        <ui5-button slot="content">Level 1</ui5-button>
        <ui5-tree-item-custom
            type="Active"
            show-toggle-button=""
            level="2"
            expanded="true"
        >
            <ui5-select slot="content">
                <ui5-option>Level 2</ui5-option>
                <ui5-option>Option 2.1</ui5-option>
                <ui5-option>Option 2.3</ui5-option>
            </ui5-select>
            <ui5-tree-item-custom
                hide-selection-element=""
                type="Active"
                level="3"
            >
                <ui5-button slot="content">Level 3</ui5-button>
            </ui5-tree-item-custom>
        </ui5-tree-item-custom>
    </ui5-tree-item-custom>`};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-tree\n    mode="${ifDefined(args.mode)}"\n    no-data-text="${ifDefined(args.noDataText)}"\n    header-text="${ifDefined(args.headerText)}"\n    footer-text="${ifDefined(args.footerText)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.header)} ${unsafeHTML(args.default)}\n</ui5-tree>`',...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
    <ui5-busy-indicator id="busy" class="full-width">
        <ui5-tree id="treeDynamic" mode="None" class="full-width">
            <ui5-tree-item text="Has pre-loaded children">
                <ui5-tree-item text="Child 1"></ui5-tree-item>
                <ui5-tree-item text="Child 2"></ui5-tree-item>
            </ui5-tree-item>
            <ui5-tree-item text="Has no children at all"></ui5-tree-item>
            <ui5-tree-item
                id="dynamicNode"
                text="Has children, but not yet loaded"
                has-children=""
            ></ui5-tree-item>
        </ui5-tree>
    </ui5-busy-indicator>
    <script>
        const busyIndicator = document.getElementById("busy");
        const dynamicTree = document.getElementById("treeDynamic");
        dynamicTree.addEventListener("item-toggle", function (event) {
            const item = event.detail.item; // get the node that is toggled
            // Only for the dynamic node, and only when it's empty
            if (item.id === "dynamicNode" && item.children.length === 0) {
                busyIndicator.active = true; // block the tree from the user
                event.preventDefault(); // do not let the toggle button switch yet
                setTimeout(function () {
                    const newItem = document.createElement("ui5-tree-item"); // Fetching from db....
                    newItem.text = "Node fetched from DB after 2 sec";
                    item.appendChild(newItem); // add the newly fetched node to the tree
                    item.toggle(); // now manually switch the toggle button
                    busyIndicator.active = false; // unblock the tree
                }, 2000);
            }
        });
    <\/script>
\``,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,y,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-tree\n    mode="${ifDefined(args.mode)}"\n    no-data-text="${ifDefined(args.noDataText)}"\n    header-text="${ifDefined(args.headerText)}"\n    footer-text="${ifDefined(args.footerText)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.header)} ${unsafeHTML(args.default)}\n</ui5-tree>`',...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const R=["Basic","DynamicContent","TreeWithCustomItems"];export{i as Basic,r as DynamicContent,n as TreeWithCustomItems,R as __namedExportsOrder,j as default};
//# sourceMappingURL=Tree.stories.24bb4f4f.js.map
