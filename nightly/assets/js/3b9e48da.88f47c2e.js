"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[223],{92:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>v,metadata:()=>y,toc:()=>f});var r=n(1085),i=n(1184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n<body style="background-color: var(--sapBackgroundColor);">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-tree>\n    <ui5-tree-item expanded text="Tree 1" icon="paste" selected>\n\t\t<ui5-tree-item expanded text="Tree 1.1" selected>\n\t\t\t<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>\n\t\t\t<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>\n\t\t</ui5-tree-item>\n\t</ui5-tree-item>\n\n\t<ui5-tree-item text="Tree 2" icon="copy">\n\t\t<ui5-tree-item text="Tree 2.1">\n\t\t\t<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>\n\n\t\t\t<ui5-tree-item text="Tree 2.1.2">\n\t\t\t\t<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>\n\t\t\t\t<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>\n\t\t\t\t<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>\n\t\t\t\t<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>\n\t\t\t</ui5-tree-item>\n\t\t</ui5-tree-item>\n\n\t\t<ui5-tree-item text="Tree 2.2"></ui5-tree-item>\n    </ui5-tree-item>\n\n\t<ui5-tree-item expanded text="Tree 3 (no icon)"></ui5-tree-item>\n</ui5-tree>\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n</html>\n\x3c!-- playground-fold-end --\x3e\n\n',d='import "@ui5/webcomponents/dist/Tree.js";\nimport "@ui5/webcomponents/dist/TreeItem.js";';function l(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,r.jsx)(t,{html:s,js:d})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n<body style="background-color: var(--sapBackgroundColor);">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-tree>\n\n    <div slot="header">\n\t\t<ui5-title level="H5">Tree with custom items</ui5-title>\n\t</div>\n\n    <ui5-tree-item-custom\n        expanded="true"\n        show-toggle-button\n        hide-selection-element\n        type="Active"\n        level="1"\n    >\n    <ui5-button slot="content">Level 1</ui5-button>\n\n    <ui5-tree-item-custom\n        type="Active"\n        show-toggle-button\n        level="2"\n        expanded="true"\n    >\n        <ui5-select slot="content">\n            <ui5-option>Level 2</ui5-option>\n            <ui5-option>Option 2.1</ui5-option>\n            <ui5-option>Option 2.3</ui5-option>\n        </ui5-select>\n        <ui5-tree-item-custom\n            hide-selection-element\n            type="Active"\n            level="3"\n        >\n            <ui5-button slot="content">Level 3</ui5-button>\n        </ui5-tree-item-custom>\n    </ui5-tree-item-custom>\n</ui5-tree-item-custom>\n\n</ui5-tree>\n\x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n</html>\n\x3c!-- playground-fold-end --\x3e\n\n',h='import "@ui5/webcomponents/dist/Tree.js";\nimport "@ui5/webcomponents/dist/TreeItem.js";\nimport "@ui5/webcomponents/dist/TreeItemCustom.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Select.js";\nimport "@ui5/webcomponents/dist/Option.js";';function a(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,r.jsx)(t,{html:c,js:h})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const m='\x3c!-- playground-fold --\x3e\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>Sample</title>\r\n</head>\r\n\r\n<body style="background-color: var(--sapBackgroundColor)">\r\n    \x3c!-- playground-fold-end --\x3e\r\n    <ui5-tree id="tree" no-data-text="No data" mode="MultiSelect" accessible-name="Tree with accessibleName">\r\n\r\n        <ui5-tree-item movable text="Tree 1" icon="paste" additional-text="Available" indeterminate selected additional-text-state="Information" accessible-name="Tree item with accessibleName">\r\n            <ui5-title slot="content">\r\n                <ui5-label>Tree 1</ui5-label>\r\n                <ui5-label>Tree 1</ui5-label>\r\n            </ui5-title>\r\n\r\n            <ui5-tree-item movable expanded text="Tree 1.1" additional-text="Re-stock" additional-text-state="Negative" indeterminate selected>\r\n                <ui5-tree-item movable text="Tree 1.1.1" additional-text="Required" additional-text-state="Critical" selected></ui5-tree-item>\r\n                <ui5-tree-item movable text="Tree 1.1.2" additional-text="Available" additional-text-state="Positive"></ui5-tree-item>\r\n            </ui5-tree-item>\r\n        </ui5-tree-item>\r\n\r\n        <ui5-tree-item movable data-allows-nesting text="Tree 2(Allows Nesting)" icon="copy">\r\n            <ui5-tree-item movable id="firstCollapsedItem" text="Tree 2.1">\r\n                <ui5-tree-item movable text="Tree 2.1.1"></ui5-tree-item>\r\n                <ui5-tree-item movable text="Tree 2.1.2">\r\n                    <ui5-tree-item movable text="Tree 2.1.2.1"></ui5-tree-item>\r\n                    <ui5-tree-item movable text="Tree 2.1.2.2"></ui5-tree-item>\r\n                    <ui5-tree-item movable text="Tree 2.1.2.3"></ui5-tree-item>\r\n                    <ui5-tree-item movable text="Tree 2.1.2.5"></ui5-tree-item>\r\n                </ui5-tree-item>\r\n            </ui5-tree-item>\r\n            <ui5-tree-item movable text="Tree 2.2"></ui5-tree-item>\r\n            <ui5-tree-item movable text="Tree 2.3"></ui5-tree-item>\r\n        </ui5-tree-item>\r\n\r\n        <ui5-tree-item movable text="Tree 3 (no icon)">\r\n        </ui5-tree-item>\r\n\r\n    </ui5-tree>\r\n\r\n    \x3c!-- playground-fold --\x3e\r\n    <script type="module" src="main.js"><\/script>\r\n</body>\r\n\r\n</html>\r\n\x3c!-- playground-fold-end --\x3e\r\n',j='import "@ui5/webcomponents/dist/Tree.js";\r\nimport "@ui5/webcomponents/dist/TreeItem.js";\r\nimport "@ui5/webcomponents/dist/Title.js";\r\nimport "@ui5/webcomponents/dist/Label.js";\r\n\r\n\r\nconst tree = document.getElementById("tree");\r\nconst handleBeforeItemMove = (e) => {\r\n    const { destination, source } = e.detail;\r\n\r\n    if (destination.placement === "Before" || destination.placement === "After") {\r\n        e.preventDefault();\r\n    }\r\n\r\n    if (destination.placement === "On" && "allowsNesting" in destination.element.dataset) {\r\n        e.preventDefault();\r\n    }\r\n\r\n    console.log(`Moving "${source.element.text}" ${destination.placement.toLowerCase()} "${destination.element.text}"`);\r\n};\r\n\r\nconst handleMoveOver = (e) => {\r\n    const { destination, source } = e.detail;\r\n\r\n    if (!tree.contains(source.element)) {\r\n        return;\r\n    }\r\n\r\n    handleBeforeItemMove(e);\r\n};\r\n\r\nconst handleMove = (e) => {\r\n    const { destination, source } = e.detail;\r\n    const parent = destination.element.parentNode.closest("[ui5-tree-item]") ||\r\n        destination.element.closest("[ui5-tree]");\r\n\r\n    if (destination.placement === "Before") {\r\n        parent.insertBefore(\r\n            source.element,\r\n            destination.element\r\n        );\r\n    } else if (destination.placement === "After") {\r\n        const nextElement = Array.from(parent.children).at(Array.from(parent.children).indexOf(destination.element) + 1);\r\n\r\n        parent.insertBefore(\r\n            source.element,\r\n            nextElement,\r\n        );\r\n    } else if (destination.placement === "On") {\r\n        destination.element.prepend(source.element);\r\n    }\r\n};\r\n\r\ntree.addEventListener("move-over", handleMoveOver);\r\ntree.addEventListener("move", handleMove);';function u(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,r.jsx)(t,{html:m,js:j})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}const v={slug:"../../Tree"},b=void 0,y={id:"components/main/Tree/Tree",title:"Tree",description:"The ui5-tree component provides a tree structure for displaying data in a hierarchy.",source:"@site/docs/components/main/Tree/Tree.mdx",sourceDirName:"components/main/Tree",slug:"/components/Tree",permalink:"/ui5-webcomponents/nightly/components/Tree",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../Tree"},sidebar:"componentsSidebar",previous:{title:"ToolbarSpacer",permalink:"/ui5-webcomponents/nightly/components/ToolbarSpacer"},next:{title:"TreeItem",permalink:"/ui5-webcomponents/nightly/components/TreeItem"}},g={},f=[{value:"Usage",id:"usage",level:3},{value:"When to use:",id:"when-to-use",level:4},{value:"When not to use:",id:"when-not-to-use",level:4},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"selectionMode",id:"selectionmode",level:3},{value:"noDataText",id:"nodatatext",level:3},{value:"headerText",id:"headertext",level:3},{value:"footerText",id:"footertext",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"header",id:"header",level:3},{value:"Events",id:"events",level:2},{value:"item-toggle",id:"item-toggle",level:3},{value:"item-mouseover",id:"item-mouseover",level:3},{value:"item-mouseout",id:"item-mouseout",level:3},{value:"item-click",id:"item-click",level:3},{value:"item-delete",id:"item-delete",level:3},{value:"selection-change",id:"selection-change",level:3},{value:"Methods",id:"methods",level:2},{value:"walk",id:"walk",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Custom Tree Items",id:"custom-tree-items",level:3},{value:"Drag And Drop",id:"drag-and-drop",level:3}];function T(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ui5-tree"})," component provides a tree structure for displaying data in a hierarchy."]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h4,{id:"when-to-use",children:"When to use:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"To display hierarchically structured items."}),"\n",(0,r.jsx)(t.li,{children:"To select one or more items out of a set of hierarchically structured items."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"when-not-to-use",children:"When not to use:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"To display items not hierarchically structured. In this case, use the List component."}),"\n",(0,r.jsx)(t.li,{children:"To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate."}),"\n",(0,r.jsx)(t.li,{children:"The hierarchy turns out to have only two levels. In this case, use List with group items."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ui5-tree"})," provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"[Up] or [Down] - Navigates up and down the tree items that are currently visible."}),"\n",(0,r.jsx)(t.li,{children:"[Right] - Drills down the tree by expanding the tree nodes."}),"\n",(0,r.jsx)(t.li,{children:"[Left] - Goes up the tree and collapses the tree nodes."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The user can use the following keyboard shortcuts to perform selection,\nwhen the ",(0,r.jsx)(t.code,{children:"selectionMode"})," property is in use:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"[Space] - Selects the currently focused item upon keyup."}),"\n",(0,r.jsx)(t.li,{children:"[Enter]  - Selects the currently focused item upon keydown."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/Tree.js";'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TreeItem.js";'})}),"\n",(0,r.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"selectionmode",children:"selectionMode"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the selection mode of the component. Since the tree uses a ",(0,r.jsx)(t.code,{children:"ui5-list"})," to display its structure, the tree modes are exactly the same as the list modes, and are all applicable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"None" | "Single" | "SingleStart" | "SingleEnd" | "SingleAuto" | "Multiple" | "Delete"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'"None"'})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"nodatatext",children:"noDataText"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Defines the text that is displayed when the component contains no items."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"headertext",children:"headerText"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the component header text.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," If the ",(0,r.jsx)(t.code,{children:"header"})," slot is set, this property is ignored."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"footertext",children:"footerText"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Defines the component footer text."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Defines the accessible name of the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Since"}),(0,r.jsx)(t.td,{children:"1.8.0"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Defines the IDs of the elements that label the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Since"}),(0,r.jsx)(t.td,{children:"1.8.0"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,r.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the items of the component. Tree items may have other tree items as children.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," Use ",(0,r.jsx)(t.code,{children:"ui5-tree-item"})," for the intended design."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Array<TreeItemBase>"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"header",children:"header"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the component header.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," When the ",(0,r.jsx)(t.code,{children:"header"})," slot is set, the ",(0,r.jsx)(t.code,{children:"headerText"})," property is ignored."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.h3,{id:"item-toggle",children:"item-toggle"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Fired when a tree item is expanded or collapsed.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," You can call ",(0,r.jsx)(t.code,{children:"preventDefault()"})," on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call ",(0,r.jsx)(t.code,{children:"toggle()"})," on a tree item."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeItemToggleEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"item"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"the toggled item."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"item-mouseover",children:"item-mouseover"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Fired when the mouse cursor enters the tree item borders."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeItemMouseoverEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"item"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"the hovered item."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Since"}),(0,r.jsx)(t.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"item-mouseout",children:"item-mouseout"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Fired when the mouse cursor leaves the tree item borders."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeItemMouseoutEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"item"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"the hovered item."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Since"}),(0,r.jsx)(t.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"item-click",children:"item-click"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Fired when a tree item is activated."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeItemClickEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"item"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"The clicked item."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"item-delete",children:"item-delete"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Fired when the Delete button of any tree item is pressed.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," A Delete button is displayed on each item, when the component ",(0,r.jsx)(t.code,{children:"selectionMode"})," property is set to ",(0,r.jsx)(t.code,{children:"Delete"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeItemDeleteEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"item"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"the deleted item."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"selection-change",children:"selection-change"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Fired when selection is changed by user interaction in ",(0,r.jsx)(t.code,{children:"Single"}),", ",(0,r.jsx)(t.code,{children:"SingleStart"}),", ",(0,r.jsx)(t.code,{children:"SingleEnd"})," and ",(0,r.jsx)(t.code,{children:"Multiple"})," modes."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<TreeSelectionChangeEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"selectedItems"}),": ",(0,r.jsx)(t.code,{children:"Array"}),(0,r.jsx)("br",{}),"An array of the selected items.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"previouslySelectedItems"}),": ",(0,r.jsx)(t.code,{children:"Array"}),(0,r.jsx)("br",{}),"An array of the previously selected items.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"targetItem"}),": ",(0,r.jsx)(t.code,{children:"HTMLElement"}),(0,r.jsx)("br",{}),"The item triggering the event."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"walk",children:"walk"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Perform Depth-First-Search walk on the tree and run a callback on each node"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"callback"}),": ",(0,r.jsx)(t.code,{children:"WalkCallback"}),(0,r.jsx)("br",{}),"function to execute on each node of the tree with 3 arguments: the node, the level and the index"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,r.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,r.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,r.jsx)(t.h3,{id:"custom-tree-items",children:"Custom Tree Items"}),"\n",(0,r.jsx)(x,{}),"\n",(0,r.jsx)(t.h3,{id:"drag-and-drop",children:"Drag And Drop"}),"\n",(0,r.jsxs)(t.p,{children:["The tree items are draggable through the use of the ",(0,r.jsx)("b",{children:"movable"})," property on ",(0,r.jsx)("b",{children:"TreeItem"}),"."]}),"\n",(0,r.jsx)(p,{})]})}function w(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(T,{...e})}):T(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(4041);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);