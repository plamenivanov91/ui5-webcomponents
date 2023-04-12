import{x as c}from"./lit-html.7ac33e6b.js";import{l as o}from"./if-defined.f53f1284.js";import{o as n}from"./unsafe-html.ba9f7887.js";import{D as m}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const f={horizontalAlign:{control:"select",options:["Center","Left","Right","Stretch"]},placementType:{control:"select",options:["Bottom","Left","Right","Top"]},verticalAlign:{control:"select",options:["Bottom","Center","Stretch","Top"]},footer:{control:{type:"text"}},header:{control:{type:"text"}},showAt:{description:"Shows the popover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],returnValue:{type:"Promise",description:"Resolved when the popover is open"}}},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},default:{control:{type:"text"}},applyFocus:{description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"}}},close:{description:"Closes the popup.",table:{category:"methods"}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"},UI5CustomData:{returnValue:{type:"boolean"}}},"before-close":{description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",table:{category:"events"},UI5CustomData:{parameters:[{name:"escPressed",type:"boolean",description:"Indicates that <code>ESC</code> key has triggered the event."}]}}},u={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,v=Object.defineProperty,h=(e,d)=>r(v(e,"raw",{value:r(d||e.slice())})),i;const a="ui5-popover",_={title:"Main/Popover",component:a,parameters:{docs:{page:m({...u,component:a}),story:{inline:!1,iframeHeight:"700px"}}},argTypes:f},b=e=>c`<ui5-popover
    initial-focus="${o(e.initialFocus)}"
    ?prevent-focus-restore="${o(e.preventFocusRestore)}"
    ?open="${o(e.open)}"
    accessible-name="${o(e.accessibleName)}"
    accessible-name-ref="${o(e.accessibleNameRef)}"
    accessible-role="${o(e.accessibleRole)}"
    header-text="${o(e.headerText)}"
    placement-type="${o(e.placementType)}"
    horizontal-align="${o(e.horizontalAlign)}"
    vertical-align="${o(e.verticalAlign)}"
    ?modal="${o(e.modal)}"
    ?hide-backdrop="${o(e.hideBackdrop)}"
    ?hire-arrow="${o(e.hideArrow)}"
    ?allow-target-overlap="${o(e.allowTargetOverlap)}"
    opener="${o(e.opener)}"
    >
    ${n(e.header)}
    ${n(e.default)}
    ${n(e.footer)}
</ui5-popover>`,t=b.bind({});t.args={headerText:"Newsletter subscription",default:`<div class="popover-content">
    <div class="flex-column">
        <ui5-label for="emailInput" required show-colon>Email</ui5-label>
        <ui5-input id="emailInput" style="min-width: 150px; margin-top: 1rem;" placeholder="Enter Email"></ui5-input>
    </div>
</div>`,footer:`<div slot="footer" class="popover-footer">
    <div style="flex: 1;"></div>
    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
</div>`};t.decorators=[e=>c(i||(i=h([`<style>
    .popover-content {
        margin: 0.5rem;
        height: 100px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .popover-footer {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
    }
</style>

<ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>
`,`

<script>
    var popoverOpener = document.getElementById("openPopoverButton");
    var popover = document.querySelector("ui5-popover");
    var popoverCloser = document.getElementById("closePopoverButton");
    popoverOpener.addEventListener("click", () => {
        popover.showAt(popoverOpener);
    });
    popoverCloser.addEventListener("click", () => {
        popover.close();
    });
<\/script>`])),e())];var p,s,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`<ui5-popover
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    placement-type="\${ifDefined(args.placementType)}"
    horizontal-align="\${ifDefined(args.horizontalAlign)}"
    vertical-align="\${ifDefined(args.verticalAlign)}"
    ?modal="\${ifDefined(args.modal)}"
    ?hide-backdrop="\${ifDefined(args.hideBackdrop)}"
    ?hire-arrow="\${ifDefined(args.hideArrow)}"
    ?allow-target-overlap="\${ifDefined(args.allowTargetOverlap)}"
    opener="\${ifDefined(args.opener)}"
    >
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-popover>\`;
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const z=["Basic"];export{t as Basic,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=Popover.stories.6eefbb51.js.map
