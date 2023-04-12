import{x as n}from"./lit-html.7ac33e6b.js";import{l as e}from"./if-defined.f53f1284.js";import{o as s}from"./unsafe-html.ba9f7887.js";import{D as T}from"./docs.7521d2a7.js";import{P as D}from"./Priority.1b56a19e.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const q={avatar:{control:{type:"text"}},default:{control:{type:"text"}},footnotes:{control:{type:"text"}},actions:{control:{type:"text"}},close:{description:"Fired when the <code>Close</code> button is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the closed item."}]}}},P={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var c=Object.freeze,A=Object.defineProperty,b=(t,x)=>c(A(t,"raw",{value:c(x||t.slice())})),u,p;const d="ui5-li-notification",k={title:"Fiori/NotificationListItem",component:d,subcomponents:{NotificationAction:"ui5-notification-action"},parameters:{docs:{page:T({...P,component:d}),story:{iframeHeight:"470px",inline:!1}}},argTypes:q},r=t=>n(u||(u=b([`<ui5-list header-text="Notifications">
    `,`
</ui5-list>

<script>
    var notificationList = document.querySelector("ui5-list");
    notificationList.addEventListener("item-close", e => {
        e.detail.item.hidden = true;
    });
<\/script>`])),t()),l=t=>n`<ui5-li-notification
    title-text="${e(t.titleText)}"
    priority="${e(t.priority)}"
    ?show-close="${e(t.showClose)}"
    ?read="${e(t.read)}"
    ?busy="${e(t.busy)}"
    busy-delay="${e(t.busyDelay)}"
    wrappingType="${e(t.wrappingType)}"
>
    ${s(t.actions)}
    ${s(t.avatar)}
    ${s(t.footnotes)}
    ${s(t.default)}
</ui5-li-notification>`;l.decorators=[r];const o=l.bind({});o.args={titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",showClose:!0,priority:D.High,avatar:`<ui5-avatar size="XS" slot="avatar">
    <img src="../assets/images/avatars/woman_avatar_1.png">
</ui5-avatar>`,footnotes:`<span slot="footnotes">Monique Legrand</span>
<span slot="footnotes">2 Days</span>`};o.decorators=[t=>n`${t()}

<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar size="XS" slot="avatar">
        <img src="../assets/images/avatars/man_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes">Alain Chevalier</span>
    <span slot="footnotes">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification show-close title-text="New order (#2525) With a short title" priority="High" read>
    <ui5-avatar size="XS" slot="avatar">
        <img src="../assets/images/avatars/man_avatar_2.png">
    </ui5-avatar>
    <span slot="footnotes">John Doe</span>
    <span slot="footnotes">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,r];const a=l.bind({});a.args={titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",showClose:!0,priority:D.Low,actions:`<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>`,avatar:`<ui5-avatar size="XS" slot="avatar">
    <img src="../assets/images/avatars/woman_avatar_1.png">
</ui5-avatar>`,footnotes:`<span slot="footnotes">Monique Legrand</span>
<span slot="footnotes">2 Days</span>`};a.decorators=[t=>n`${t()}

<ui5-li-notification priority="Low" show-close title-text="And with a very long description and only one action - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-avatar size="XS" icon="employee" slot="avatar">
        <img src="../assets/images/avatars/woman_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes-1">Monique Legrand</span>
    <span slot="footnotes-2">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification read show-close priority="Low" title-text="New order (#2525) With a short title">
    <ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-avatar size="XS" icon="employee" slot="avatar">
        <img src="../assets/images/avatars/woman_avatar_1.png">
    </ui5-avatar>
    <span slot="footnotes-1">Monique Legrand</span>
    <span slot="footnotes-2">2 Days</span>
    And with a very long description and long labels of the actions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,r];const i=l.bind({});i.args={showClose:!0,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",default:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:'<ui5-avatar initials="JD" size="XS" slot="avatar"></ui5-avatar>',footnotes:`<span slot="footnotes">John Doe</span>
<span slot="footnotes">2 Days</span>`,actions:`<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>`};i.decorators=[t=>n`${t()}
<ui5-li-notification
    show-close
    title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    priority="High"
>
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification
    title-text="New order (#2565) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    priority="Medium"
>
    <ui5-avatar initials="JS" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Patricia Clark</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
    Short description
</ui5-li-notification>

<ui5-li-notification title-text="New order (#2523)">
    <span slot="footnotes">John Smith</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    With a very long description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,t=>n(p||(p=b([`<ui5-shellbar
    primary-title="Corporate Portal"
    logo="../assets/images/sap-logo-svg.svg"
    show-notifications
    notifications-count="4"
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
<\/script>`])),r(t))];i.parameters={docs:{story:{iframeHeight:"700px"}}};var f,m,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,$,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    wrappingType="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.actions)}
    \${unsafeHTML(args.avatar)}
    \${unsafeHTML(args.footnotes)}
    \${unsafeHTML(args.default)}
</ui5-li-notification>\`;
}`,...(L=($=i.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const F=["Basic","Actions","InShellBar"];export{a as Actions,o as Basic,i as InShellBar,F as __namedExportsOrder,k as default};
//# sourceMappingURL=NotificationListItem.stories.ae4dd56d.js.map
