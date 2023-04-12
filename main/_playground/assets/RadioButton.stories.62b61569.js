import{x as o}from"./lit-html.7ac33e6b.js";import{D}from"./docs.7521d2a7.js";import{l as t}from"./if-defined.f53f1284.js";import{W as v}from"./WrappingType.16fc58a8.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const O={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},wrappingType:{control:"select",options:["None","Normal"]}},y={package:"@ui5/webcomponents"},u="ui5-radio-button",_={title:"Main/RadioButton",component:u,parameters:{docs:{page:D({...y,component:u})}},argTypes:O},$=e=>o`
<ui5-radio-button
    name="${t(e.name)}"
    text="${t(e.text)}"
    ?required="${t(e.required)}"
    ?checked="${t(e.checked)}"
    ?disabled="${t(e.disabled)}"
    ?readonly="${t(e.readonly)}"
    value-state="${t(e.valueState)}"
    value="${t(e.value)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
    wrapping-type="${t(e.wrappingType)}"
>
<ui5-radio-button>`,a=$.bind({});a.args={name:"GroupA"};a.decorators=[(e,{args:x})=>{let r=0;return o`
            ${e({args:{text:`Option ${++r}`,checked:!0,...x}})}
            ${e({args:{text:`Option ${++r}`,...a.args}})}
            ${e({args:{text:`Option ${r++}`,...a.args}})}
        `}];const n=()=>o`
<ui5-radio-button text="Option A" checked="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Success" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option E" disabled="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option F" readonly="" name="GroupA"></ui5-radio-button>
`,i=$.bind({});i.args={wrappingType:v.Normal,text:"ui5-radio-button with 'wrapping-type=Normal' set and some long text"};i.decorators=[e=>o`
<style>
    ui5-radio-button {
        width: 200px;
    }
</style>
${e()}`];var s,d,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-radio-button
    name="\${ifDefined(args.name)}"
    text="\${ifDefined(args.text)}"
    ?required="\${ifDefined(args.required)}"
    ?checked="\${ifDefined(args.checked)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    value-state="\${ifDefined(args.valueState)}"
    value="\${ifDefined(args.value)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
<ui5-radio-button>\`;
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => html\`
<ui5-radio-button text="Option A" checked="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Success" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option E" disabled="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option F" readonly="" name="GroupA"></ui5-radio-button>
\``,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var b,f,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`
<ui5-radio-button
    name="\${ifDefined(args.name)}"
    text="\${ifDefined(args.text)}"
    ?required="\${ifDefined(args.required)}"
    ?checked="\${ifDefined(args.checked)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    value-state="\${ifDefined(args.valueState)}"
    value="\${ifDefined(args.value)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
<ui5-radio-button>\`;
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const F=["Basic","Variations","Wrapping"];export{a as Basic,n as Variations,i as Wrapping,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=RadioButton.stories.62b61569.js.map
