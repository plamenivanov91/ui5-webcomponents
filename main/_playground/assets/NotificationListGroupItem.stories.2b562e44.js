import{x as n}from"./lit-html.7ac33e6b.js";import{l as i}from"./if-defined.f53f1284.js";import{o as s}from"./unsafe-html.ba9f7887.js";import{D as $}from"./docs.7521d2a7.js";import{P as x}from"./Priority.1b56a19e.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const P={default:{control:{type:"text"}},actions:{control:{type:"text"}},close:{description:"Fired when the <code>Close</code> button is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the closed item."}]}}},N={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var r=Object.freeze,q=Object.defineProperty,b=(t,A)=>r(q(t,"raw",{value:r(A||t.slice())})),c,l;const u="ui5-li-notification-group",F={title:"Fiori/NotificationListGroupItem",component:u,subcomponents:{NotificationAction:"ui5-notification-action"},parameters:{docs:{page:$({...N,component:u}),story:{inline:!1}}},argTypes:P},D=t=>n`<ui5-li-notification-group
    ?collapsed="${i(t.collapsed)}"
    ?show-counter="${i(t.showCounter)}"
    title-text="${i(t.titleText)}"
    priority="${i(t.priority)}"
    ?show-close="${i(t.showClose)}"
    ?read="${i(t.read)}"
    ?busy="${i(t.busy)}"
    busy-delay="${i(t.busyDelay)}"
>
    ${s(t.default)}
    ${s(t.actions)}
</ui5-li-notification-group>`,o=D.bind({});o.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:x.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>
<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};const L=t=>n(c||(c=b([`<ui5-list header-text="Notifications Grouped">
    `,`
</ui5-list>

<script>
    var notificationList = document.querySelector("ui5-list");
    notificationList.addEventListener("item-close", e => {
        e.detail.item.hidden = true;
    });
<\/script>`])),t());o.decorators=[t=>n`${t()}
<ui5-li-notification-group
    show-close
    show-counter
    title-text="Deliveries"
    priority="Medium"
    collapsed
>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group
    show-close
    show-counter
    priority="Low"
    collapsed
    title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
>
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,L];const e=D.bind({});e.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:x.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};const a=()=>n`

`;e.decorators=[t=>n`${t()}
<ui5-li-notification-group show-close show-counter title-text="Deliveries" priority="Medium" collapsed>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group show-close show-counter priority="High" collapsed title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,t=>n(l||(l=b([`<ui5-shellbar
    primary-title="Corporate Portal"
    logo="../assets/images/sap-logo-svg.svg"
    show-notifications
    notifications-count="6"
></ui5-shellbar>
<ui5-popover
    placement-type="Bottom"
    horizontal-align="Right"
    style="max-width: 400px"
>
    `,`
</ui5-popover>

<script>
    var shellbar = document.querySelector("ui5-shellbar");
    var notificationsPopover = document.querySelector("ui5-popover");

    shellbar.addEventListener("notifications-click", e => {
        event.preventDefault();
        notificationsPopover.showAt(e.detail.targetRef);
    });
<\/script>`])),L(t))];e.parameters={docs:{story:{iframeHeight:"700px"}}};var p,f,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(d=(f=o.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var m,g,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,y,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"() => html`\n\n`",...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const k=["Basic","InShellBar","InShellBars"];export{o as Basic,e as InShellBar,a as InShellBars,k as __namedExportsOrder,F as default};
//# sourceMappingURL=NotificationListGroupItem.stories.2b562e44.js.map
