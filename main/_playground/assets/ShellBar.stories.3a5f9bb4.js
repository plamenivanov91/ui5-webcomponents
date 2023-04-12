import{x as A}from"./lit-html.7ac33e6b.js";import{l as t}from"./if-defined.f53f1284.js";import{o as i}from"./unsafe-html.ba9f7887.js";import{D as I}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const L={copilotDomRef:{control:{type:!1}},logoDomRef:{control:{type:!1}},notificationsDomRef:{control:{type:!1}},overflowDomRef:{control:{type:!1}},productSwitchDomRef:{control:{type:!1}},profileDomRef:{control:{type:!1}},default:{control:{type:"text"}},logo:{control:{type:"text"}},menuItems:{control:{type:"text"}},profile:{control:{type:"text"}},searchField:{control:{type:"text"}},startButton:{control:{type:"text"}},closeOverflow:{description:"Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event",table:{category:"methods"}},"co-pilot-click":{description:"Fired, when the co pilot is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"dom ref of the activated element"}]}},"logo-click":{description:"Fired, when the logo is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"dom ref of the activated element"}]}},"menu-item-click":{description:"Fired, when a menu item is activated <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"DOM ref of the activated list item"}]}},"notifications-click":{description:"Fired, when the notification icon is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"dom ref of the activated element"}]}},"product-switch-click":{description:"Fired, when the product switch icon is activated. <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"dom ref of the activated element"}]}},"profile-click":{description:"Fired, when the profile slot is present.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"dom ref of the activated element"}]}}},M={package:"@ui5/webcomponents-fiori",since:"0.8.0"};var c=Object.freeze,P=Object.defineProperty,C=(e,H)=>c(P(e,"raw",{value:c(H||e.slice())})),p;const u="ui5-shellbar",Y={title:"Fiori/ShellBar",component:u,subcomponents:{ShellBarItem:"ui5-shellbar-item"},parameters:{docs:{page:I({...M,component:u})}},argTypes:L},l=e=>A`<ui5-shellbar
    primary-title="${t(e.primaryTitle)}"
    secondary-title="${t(e.secondaryTitle)}"
    notifications-count="${t(e.notificationsCount)}"
    ?show-notifications="${t(e.showNotifications)}"
    ?show-product-switch="${t(e.showProductSwitch)}"
    ?show-co-pilot="${t(e.showCoPilot)}"
    ?show-search-field="${t(e.showSearchField)}"
    .accessibilityRoles="${t(e.accessibilityRoles)}"
    .accessibilityTexts="${t(e.accessibilityTexts)}"
    .accessibilityAttributes="${t(e.accessibilityAttributes)}"
>
    ${i(e.default)} 
    ${i(e.profile)}
    ${i(e.logo)} 
    ${i(e.menuItems)}
    ${i(e.searchField)} 
    ${i(e.startButton)}
</ui5-shellbar>`,s=l.bind({});s.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",profile:'<ui5-avatar slot="profile" icon="customer"></ui5-avatar>',logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',startButton:'<ui5-button icon="nav-back" slot="startButton"></ui5-button>'};const n=l.bind({});n.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showNotifications:!0,notificationsCount:"99+",profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',searchField:'<ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>'};const a=l.bind({});a.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showCoPilot:!0,profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />'};let o=0;const r=()=>(o++,A(p||(p=C([`
        <ui5-shellbar
            id="shellbar-`,`"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-`,`" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-`,`");
                const actionPopover = document.getElementById(
                    "action-popover-`,`"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    `])),o,o,o,o));var d,f,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var $,D,T;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  index++;
  return html\`
        <ui5-shellbar
            id="shellbar-\${index}"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-\${index}" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-\${index}");
                const actionPopover = document.getElementById(
                    "action-popover-\${index}"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    \`;
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const q=["Basic","SearchAndNotifications","WithCoPilot","Advanced"];export{r as Advanced,s as Basic,n as SearchAndNotifications,a as WithCoPilot,q as __namedExportsOrder,Y as default};
//# sourceMappingURL=ShellBar.stories.3a5f9bb4.js.map
