"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6678],{4027:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>j});var s=i(1085),n=i(1184);const r='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>\n\n    <ui5-view-settings-dialog id="vsd1" sort-descending>\n        <ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>\n        <ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>\n        <ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>\n        <ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>\n        <ui5-filter-item slot="filterItems" text="Position">\n            <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>\n        </ui5-filter-item>\n        <ui5-filter-item slot="filterItems" text="Department">\n            <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>\n        </ui5-filter-item>\n        <ui5-filter-item slot="filterItems" text="Location">\n            <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>\n        </ui5-filter-item>\n        <ui5-filter-item slot="filterItems" text="Reports to">\n            <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>\n            <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>\n        </ui5-filter-item>\n    </ui5-view-settings-dialog>\n    <br />\n    <br />\n    <div id="vsdResults"></div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js";\nimport "@ui5/webcomponents-fiori/dist/SortItem.js";\nimport "@ui5/webcomponents-fiori/dist/FilterItem.js";\nimport "@ui5/webcomponents-fiori/dist/FilterItemOption.js";\n\nvar vsdResults = document.getElementById("vsdResults");\n\nbtnOpenDialog1.addEventListener("click", function () {\n    vsdResults.innerHTML = "";\n    vsd1.show();\n});\n\nvsd1.addEventListener("confirm", function (evt) {\n    vsdResults.innerHTML = JSON.stringify(evt.detail);\n});';function d(e){const{Editor:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:r,js:o})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const c={},h=void 0,a={id:"components/fiori/ViewSettingsDialog/ViewSettingsDialog",title:"ViewSettingsDialog",description:"The ui5-view-settings-dialog component helps the user to sort data within a list or a table.",source:"@site/docs/components/fiori/ViewSettingsDialog/ViewSettingsDialog.mdx",sourceDirName:"components/fiori/ViewSettingsDialog",slug:"/components/fiori/ViewSettingsDialog/",permalink:"/ui5-webcomponents/nightly/components/fiori/ViewSettingsDialog/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"SortItem",permalink:"/ui5-webcomponents/nightly/components/fiori/ViewSettingsDialog/SortItem"},next:{title:"Wizard",permalink:"/ui5-webcomponents/nightly/components/fiori/Wizard/"}},x={},j=[{value:"Structure",id:"structure",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"sortDescending",id:"sortdescending",level:3},{value:"Slots",id:"slots",level:2},{value:"sortItems",id:"sortitems",level:3},{value:"filterItems",id:"filteritems",level:3},{value:"Events",id:"events",level:2},{value:"confirm",id:"confirm",level:3},{value:"cancel",id:"cancel",level:3},{value:"before-open",id:"before-open",level:3},{value:"Methods",id:"methods",level:2},{value:"show",id:"show",level:3},{value:"setConfirmedSettings",id:"setconfirmedsettings",level:3},{value:"CSS Parts",id:"css-parts",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," component helps the user to sort data within a list or a table.\nIt consists of several lists like ",(0,s.jsx)(t.code,{children:"Sort order"})," which is built-in and ",(0,s.jsx)(t.code,{children:"Sort By"})," and ",(0,s.jsx)(t.code,{children:"Filter By"})," lists,\nfor which you must be provide items(",(0,s.jsx)(t.code,{children:"ui5-sort-item"})," & ",(0,s.jsx)(t.code,{children:"ui5-filter-item"})," respectively)\nThese options can be used to create sorters for a table."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," interrupts the current application processing as it is the only focused UI element and\nthe main screen is dimmed/blocked.\nThe ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," is modal, which means that user action is required before returning to the parent window is possible."]}),"\n",(0,s.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," consists of a header, content, and a footer for action buttons.\nThe ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," is usually displayed at the center of the screen."]}),"\n",(0,s.jsx)(t.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"})," stretches on full screen on phones."]}),"\n",(0,s.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js";'})}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"sortdescending",children:"sortDescending"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines the initial sort order."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.h3,{id:"sortitems",children:"sortItems"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the list of items against which the user could sort data.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," If you want to use this slot, you need to import used item: ",(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/SortItem.js";'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<SortItem>"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"filteritems",children:"filterItems"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the ",(0,s.jsx)(t.code,{children:"filterItems"})," list.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," If you want to use this slot, you need to import used item: ",(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/FilterItem.js";'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<FilterItem>"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.h3,{id:"confirm",children:"confirm"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when confirmation button is activated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent<ViewSettingsDialogConfirmEventDetail>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parameters"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"sortOrder"}),": ",(0,s.jsx)(t.code,{children:"String"}),(0,s.jsx)("br",{}),"The current sort order selected.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortBy"}),": ",(0,s.jsx)(t.code,{children:"String"}),(0,s.jsx)("br",{}),"The currently selected ",(0,s.jsx)(t.code,{children:"ui5-sort-item"})," text attribute.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortByItem"}),": ",(0,s.jsx)(t.code,{children:"HTMLElement"}),(0,s.jsx)("br",{}),"The currently selected ",(0,s.jsx)(t.code,{children:"ui5-sort-item"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortDescending"}),": ",(0,s.jsx)(t.code,{children:"Boolean"}),(0,s.jsx)("br",{}),"The selected sort order (true = descending, false = ascending).",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"filters"}),": ",(0,s.jsx)(t.code,{children:"Array"}),(0,s.jsx)("br",{}),"The selected filters items."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"cancel",children:"cancel"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when cancel button is activated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent<ViewSettingsDialogCancelEventDetail>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parameters"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"sortOrder"}),": ",(0,s.jsx)(t.code,{children:"String"}),(0,s.jsx)("br",{}),"The current sort order selected.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortBy"}),": ",(0,s.jsx)(t.code,{children:"String"}),(0,s.jsx)("br",{}),"The currently selected ",(0,s.jsx)(t.code,{children:"ui5-sort-item"})," text attribute.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortByItem"}),": ",(0,s.jsx)(t.code,{children:"HTMLElement"}),(0,s.jsx)("br",{}),"The currently selected ",(0,s.jsx)(t.code,{children:"ui5-sort-item"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"sortDescending"}),": ",(0,s.jsx)(t.code,{children:"Boolean"}),(0,s.jsx)("br",{}),"The selected sort order (true = descending, false = ascending).",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"filters"}),": ",(0,s.jsx)(t.code,{children:"Array"}),(0,s.jsx)("br",{}),"The selected filters items."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"before-open",children:"before-open"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Fired before the component is opened. ",(0,s.jsx)(t.strong,{children:"This event does not bubble."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"show",children:"show"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Shows the dialog."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Return type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"void"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"setconfirmedsettings",children:"setConfirmedSettings"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Sets a JavaScript object, as settings to the ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"}),". This method can be used after the dialog is initially open, as the dialog needs to set its initial settings. The ",(0,s.jsx)(t.code,{children:"ui5-view-settings-dialog"}),' throws an event called "before-open", which can be used as a trigger point. The object should have the following format:']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Return type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"void"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parameters"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"settings"}),": ",(0,s.jsx)(t.code,{children:"VSDSettings"}),(0,s.jsx)("br",{}),"predefined settings."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsx)(t.p,{children:"No CSS parts available for this component."})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1184:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var s=i(4041);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);