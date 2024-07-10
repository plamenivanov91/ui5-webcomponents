"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6734],{61863:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=t(31085),n=t(71184);const d={slug:"../NotificationListItem"},r=void 0,l={id:"components/fiori/NotificationList/NotificationListItem",title:"NotificationListItem",description:"The ui5-li-notification is a type of list item, meant to display notifications.",source:"@site/docs/components/fiori/NotificationList/NotificationListItem.mdx",sourceDirName:"components/fiori/NotificationList",slug:"/components/fiori/NotificationListItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../NotificationListItem"},sidebar:"componentsSidebar",previous:{title:"NotificationListGroupItem",permalink:"/ui5-webcomponents/nightly/components/fiori/NotificationListGroupItem"},next:{title:"Page",permalink:"/ui5-webcomponents/nightly/components/fiori/Page"}},c={},o=[{value:"Usage",id:"usage",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"wrappingType",id:"wrappingtype",level:3},{value:"state",id:"state",level:3},{value:"showClose",id:"showclose",level:3},{value:"importance",id:"importance",level:3},{value:"titleText",id:"titletext",level:3},{value:"read",id:"read",level:3},{value:"loading",id:"loading",level:3},{value:"loadingDelay",id:"loadingdelay",level:3},{value:"Slots",id:"slots",level:2},{value:"avatar",id:"avatar",level:3},{value:"menu",id:"menu",level:3},{value:"footnotes",id:"footnotes",level:3},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function h(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"ui5-li-notification"})," is a type of list item, meant to display notifications."]}),"\n",(0,s.jsxs)(i.p,{children:["The component has a rich set of various properties that allows the user to set ",(0,s.jsx)(i.code,{children:"avatar"}),", ",(0,s.jsx)(i.code,{children:"menu"}),", ",(0,s.jsx)(i.code,{children:"titleText"}),", descriptive ",(0,s.jsx)(i.code,{children:"content"}),"\nand ",(0,s.jsx)(i.code,{children:"footnotes"})," to fully describe a notification."]}),"\n",(0,s.jsx)(i.p,{children:"The user can:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["display a ",(0,s.jsx)(i.code,{children:"Close"})," button"]}),"\n",(0,s.jsxs)(i.li,{children:["can control whether the ",(0,s.jsx)(i.code,{children:"titleText"})," and ",(0,s.jsx)(i.code,{children:"description"})," should wrap or truncate\nand display a ",(0,s.jsx)(i.code,{children:"ShowMore"})," button to switch between less and more information"]}),"\n",(0,s.jsxs)(i.li,{children:["add actions by using the ",(0,s.jsx)(i.code,{children:"ui5-menu"})," component"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Adding custom actions by using the ",(0,s.jsx)(i.code,{children:"ui5-notification-action"})," component is deprecated as of version 2.0!"]}),"\n",(0,s.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:["The component can be used in a standard ",(0,s.jsx)(i.code,{children:"ui5-list"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,s.jsx)(i.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,s.jsx)(i.p,{children:"The user can use the following keyboard shortcuts to perform actions (such as select, delete):"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'[Enter] - select an item (trigger "item-click" event)'}),"\n",(0,s.jsx)(i.li,{children:'[Delete] - close an item (trigger "item-close" event)'}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,s.jsx)(i.p,{children:"This component provides a fast navigation using the following keyboard shortcuts:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"[Shift] + [Enter] - 'More'/'Less' link will be triggered"}),"\n",(0,s.jsx)(i.li,{children:"[Shift] + [F10] - 'Menu' (Actions) button will be triggered (clicked)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/NotificationListItem.js";'})}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"wrappingtype",children:"wrappingType"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines if the ",(0,s.jsx)(i.code,{children:"titleText"})," and ",(0,s.jsx)(i.code,{children:"description"})," should wrap, they truncate by default.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," by default the ",(0,s.jsx)(i.code,{children:"titleText"})," and ",(0,s.jsx)(i.code,{children:"description"}),", and a ",(0,s.jsx)(i.code,{children:"ShowMore/Less"})," button would be displayed."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"None" | "Normal"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:'"None"'})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Since"}),(0,s.jsx)(i.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"state",children:"state"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsx)(i.td,{children:"Defines the status indicator of the item."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:'"None"'})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"showclose",children:"showClose"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines if the ",(0,s.jsx)(i.code,{children:"Close"})," button would be displayed."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"importance",children:"importance"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines the ",(0,s.jsx)(i.code,{children:"Important"})," label of the item."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"Standard" | "Important"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:'"Standard"'})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"titletext",children:"titleText"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines the ",(0,s.jsx)(i.code,{children:"titleText"})," of the item."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"string | undefined"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:"undefined"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"read",children:"read"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines if the ",(0,s.jsx)(i.code,{children:"notification"})," is new or has been already read.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," if set to ",(0,s.jsx)(i.code,{children:"false"})," the ",(0,s.jsx)(i.code,{children:"titleText"})," has bold font, if set to true - it has a normal font."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"loading",children:"loading"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsx)(i.td,{children:"Defines if a busy indicator would be displayed over the item."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"boolean"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:"false"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Since"}),(0,s.jsx)(i.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"loadingdelay",children:"loadingDelay"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsx)(i.td,{children:"Defines the delay in milliseconds, after which the busy indicator will show up for this component."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"number"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Default"}),(0,s.jsx)(i.td,{children:"1000"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(i.h3,{id:"avatar",children:"avatar"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines the avatar, displayed in the ",(0,s.jsx)(i.code,{children:"ui5-li-notification"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Consider using the ",(0,s.jsx)(i.code,{children:"ui5-avatar"})," to display icons, initials or images.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the ",(0,s.jsx)(i.code,{children:"ui5-avatar"})," you can set its ",(0,s.jsx)(i.code,{children:"size"})," property to ",(0,s.jsx)(i.code,{children:"XS"})," to get the required size - ",(0,s.jsx)(i.code,{children:'<ui5-avatar size="XS"></ui5-avatar>'}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"menu",children:"menu"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines the menu, displayed in the ",(0,s.jsx)(i.code,{children:"ui5-li-notification"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Use this for implementing actions.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Should be used instead ",(0,s.jsx)(i.code,{children:"u5-notification-action"}),", which is deprecated as of version 2.0."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"footnotes",children:"footnotes"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsx)(i.td,{children:"Defines the elements, displayed in the footer of the of the component."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Defines the content of the ",(0,s.jsx)(i.code,{children:"ui5-li-notification"}),", usually a description of the notification.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(i.h3,{id:"close",children:"close"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsxs)(i.td,{children:["Fired when the ",(0,s.jsx)(i.code,{children:"Close"})," button is pressed."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Type"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"CustomEvent<NotificationListItemCloseEventDetail>"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Parameters"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"item"}),": ",(0,s.jsx)(i.code,{children:"HTMLElement"}),(0,s.jsx)("br",{}),"the closed item."]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(i.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"title-text"}),(0,s.jsx)(i.td,{children:"Used to style the titleText of the notification list item"})]})})]})]})}function a(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71184:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var s=t(14041);const n={},d=s.createContext(n);function r(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);