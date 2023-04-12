import{x as C}from"./lit-html.7ac33e6b.js";import{l as i}from"./if-defined.f53f1284.js";import{o as l}from"./unsafe-html.ba9f7887.js";import{D as T}from"./docs.7521d2a7.js";import{V as x}from"./ValueState.7d8e1d89.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const R={state:{control:"select",options:["Error","Information","None","Success","Warning"]},footer:{control:{type:"text"}},header:{control:{type:"text"}},show:{description:"Shows the dialog.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"Prevents applying the focus inside the popup"}],returnValue:{type:"Promise",description:"Resolves when the dialog is open"}}},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},default:{control:{type:"text"}},applyFocus:{description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"}}},close:{description:"Closes the popup.",table:{category:"methods"}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"},UI5CustomData:{returnValue:{type:"boolean"}}},"before-close":{description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",table:{category:"events"},UI5CustomData:{parameters:[{name:"escPressed",type:"boolean",description:"Indicates that <code>ESC</code> key has triggered the event."}]}}},L={package:"@ui5/webcomponents"};var d=Object.freeze,w=Object.defineProperty,z=(e,r)=>d(w(e,"raw",{value:d(r||e.slice())})),c;const g="ui5-dialog",K={title:"Main/Dialog",component:g,argTypes:R,parameters:{docs:{story:{iframeHeight:"800px",inline:!1},page:T({...L,component:g})}}},s=e=>C(c||(c=z([`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="`,`"
    ?stretch="`,`"
    ?draggable="`,`"
    ?resizable="`,`"
    state="`,`"
    initial-focus="`,`"
    ?prevent-focus-restore="`,`"
    ?open="`,`"
    accessible-name="`,`"
    accessible-name-ref="`,`"
    accessible-role="`,`"
>
    `,`
    `,`
    `,`
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>`])),i(e.headerText),i(e.stretch),i(e.draggable),i(e.resizable),i(e.state),i(e.initialFocus),i(e.preventFocusRestore),i(e.open),i(e.accessibleName),i(e.accessibleNameRef),i(e.accessibleRole),l(e.header),l(e.default),l(e.footer)),t=s.bind({});t.args={headerText:"Register Form",default:`<section class="login-form">
    <div>
        <ui5-label for="username" required show-colon>Username</ui5-label>
        <ui5-input id="username"></ui5-input>
    </div>
    <div>
        <ui5-label for="password" required show-colon>Password</ui5-label>
        <ui5-input id="password" type="Password" value-state="Error"></ui5-input>
    </div>
    <div>
        <ui5-label for="email" type="Email" required show-colon>Email</ui5-label>
        <ui5-input id="email"></ui5-input>
    </div>
    <div>
        <ui5-label for="address" show-colon>Address</ui5-label>
        <ui5-input id="address"></ui5-input>
    </div>
</section>`,footer:`<div slot="footer" style="display: flex; align-items: center; padding: 0.5rem">
    <div style="flex: 1;"></div>
    <ui5-button class="dialogCloser" design="Emphasized">Register</ui5-button>
</div>`};const o=s.bind({});o.args={resizable:!0,draggable:!0,headerText:"Draggable/Resizable dialog",default:`<p>Move this dialog around the screen by dragging it by its header.</p>
<p>Resize this dialog by dragging it by its resize handle.</p>
<p>These features are available only on Desktop.</p>`,footer:`<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
    <ui5-button class="dialogCloser" design="Emphasized">OK</ui5-button>
</div>`};const n=s.bind({});n.storyName="Bar in Header/Footer";n.args={header:`<ui5-bar slot="header" design="Header">
    <ui5-title level="H5" slot="startContent">Bar used in Header and Footer</ui5-title>
    <ui5-button class="dialogCloser" design="Transparent" id="closeDialogButton" slot="endContent" icon="decline"></ui5-button>
</ui5-bar>`,default:"<p>Adding styles for the parts to remove the default Dialog's paddings when ui5-bar is used inside Header and Footer</p>",footer:`<ui5-bar slot="footer" design="Footer">
    <ui5-button class="dialogCloser" design="Emphasized" slot="endContent" style="min-width: 4rem;">OK</ui5-button>
</ui5-bar>`};n.decorators=[e=>C`<style>
    #dialog::part(header),
    #dialog::part(footer) {
        padding-inline: 0;
    }
</style>
${e()}`];const a=s.bind({});a.args={state:x.Error,default:"<p>Dialog with state</p>",footer:`<div slot="footer" style="display: flex; justify-content: flex-end; align-items: center;">
    <ui5-button class="dialogCloser">Close</ui5-button>
</div>`};a.decorators=[(e,{args:r})=>e({args:{...r,headerText:r.state}})];var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,m,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,D,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(y=(D=n.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var $,O,E;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(E=(O=a.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const G=["Basic","DraggableAndResizable","BarInDialog","WithState"];export{n as BarInDialog,t as Basic,o as DraggableAndResizable,a as WithState,G as __namedExportsOrder,K as default};
//# sourceMappingURL=Dialog.stories.0e1f80c8.js.map
