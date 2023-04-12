import{x as l}from"./lit-html.7ac33e6b.js";import{o as L}from"./unsafe-html.ba9f7887.js";import{l as p}from"./if-defined.f53f1284.js";import{D as S}from"./docs.7521d2a7.js";import{W}from"./WrappingType.16fc58a8.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const M={wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},v={package:"@ui5/webcomponents"},u="ui5-label",K={title:"Main/Label",component:u,parameters:{docs:{page:S({...v,component:u})}},argTypes:M},s=e=>l`
<ui5-label
    for="${p(e.for)}"
    ?required="${p(e.required)}"
    ?show-colon="${p(e.showColon)}"
    wrapping-type="${p(e.wrappingType)}"
>
    ${L(e.default)}
</ui5-label>`,n=s.bind({});n.args={default:"The quick brown fox jumps over the lazy dog"};const t=s.bind({});t.args={default:"Required label with colon",showColon:!0,required:!0};const k=e=>l`
<style>
    ui5-label {
        width: 200px;
    }
</style>

${e()}`,r=s.bind({});r.args={default:"Long labels are truncated by default."};r.decorators=[k];const o=s.bind({});o.args={default:`Long labels can wrap if the text is too long. Set 'wrapping-type="Normal"'. Long labels can wrap if the text is too long`,wrappingType:W.Normal};o.decorators=[k];const i=s.bind({});i.args={required:!0,showColon:!0};i.decorators=[(e,{args:a})=>l`
    ${e({args:{...a,for:"myInput",default:"First name"}})}
    <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

    ${e({args:{...a,for:"myDatePicker",default:"Date of birth"}})}
    <ui5-date-picker id="myDatePicker" required></ui5-date-picker>

    ${e({args:{...a,for:"mySelect",default:"Job"}})}
    <ui5-select id="mySelect" required>
        <ui5-option>Manager</ui5-option>
        <ui5-option>Sales</ui5-option>
        <ui5-option selected>Developer</ui5-option>
    </ui5-select>

    ${e({args:{...a,for:"myTextArea",default:"Description"}})}
    <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

    <div style="display: flex; align-items: center;">
        ${e({args:{...a,for:"myCheckBox",default:"Accept terms of use"}})}
        <ui5-checkbox id="myCheckBox" required></ui5-checkbox>
    </div>
`,e=>l`
<style>
    .f {
        display: flex;
        flex-direction: column;
    }
    .f > :nth-child(2n) {
        margin-bottom: 1.5rem;
    }
</style>

<div class="f">
    ${e()}
</div>`];var d,f,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.default)}
</ui5-label>\`;
}`,...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.default)}
</ui5-label>\`;
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var $,w,y;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.default)}
</ui5-label>\`;
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,D,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.default)}
</ui5-label>\`;
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var q,x,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
    \${unsafeHTML(args.default)}
</ui5-label>\`;
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Q=["Basic","RequiredWithColon","Truncating","WrappingText","UsageWithInputs"];export{n as Basic,t as RequiredWithColon,r as Truncating,i as UsageWithInputs,o as WrappingText,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Label.stories.cf40f65d.js.map
