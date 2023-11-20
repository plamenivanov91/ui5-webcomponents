import{x as l}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as M}from"./unsafe-html-0ddd83da.js";import{D as N}from"./docs-eddcd656.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-a71cf7a0.js";import"./iframe-8a460855.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-67e97cc6.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const w={max:{control:{type:"number"}},min:{control:{type:"number"}},step:{control:{type:"number"}},value:{control:{type:"number"}},valuePrecision:{control:{type:"number"}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}}},q={package:"@ui5/webcomponents",since:"1.0.0-rc.13"},P="ui5-step-input",F={title:"Main/StepInput",component:"StepInput",parameters:{docs:{page:N({...q,component:P})}},argTypes:w},d=e=>l`
<div style="max-width: 13rem">
    <ui5-step-input
        value="${i(e.value)}"
        value-state="${i(e.valueState)}"
        value-precision="${i(e.valuePrecision)}"
        min="${i(e.min)}"
        max="${i(e.max)}"
        step="${i(e.step)}"
        ?required="${i(e.required)}"
        ?readonly="${i(e.readonly)}"
        ?disabled="${i(e.disabled)}"
        placeholder="${i(e.placeholder)}"
        name="${i(e.name)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
        id="${i(e.id)}"
        style="${i(e.style)}"
    >
        ${M(e.valueStateMessage)}
    </ui5-step-input>
</div>`,s=d.bind({});s.args={value:5};const t=()=>l`
    <div style="max-width: 13rem"> <ui5-step-input value-state="Success" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Warning" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Error" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Information" value="5"></ui5-step-input> </div> <br>
`,n=d.bind({});n.storyName="Min/Max and Step Values";n.args={value:0,min:-50,max:50,step:10};const r=d.bind({});r.args={value:5,min:0,max:10,step:.5,valuePrecision:1};const a=d.bind({});a.storyName="With Text Alignment";a.args={id:"myStepInput",style:"text-align: left",placeholder:"Enter your Number",required:!0};a.decorators=[e=>l`<ui5-label class="samples-big-margin-right" for="myStepInput">Number is left-aligned</ui5-label>
    ${e()}`];var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,o,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
    <div style="max-width: 13rem"> <ui5-step-input value-state="Success" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Warning" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Error" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Information" value="5"></ui5-step-input> </div> <br>
\``,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var v,g,$;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...($=(g=n.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var D,b,y;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,h,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const G=["Basic","DifferentValueStates","MinMax","ValuePrecision","Label"];export{s as Basic,t as DifferentValueStates,a as Label,n as MinMax,r as ValuePrecision,G as __namedExportsOrder,F as default};
//# sourceMappingURL=StepInput.stories-9195fdc5.js.map
