import{x as S}from"./lit-html.7ac33e6b.js";import{l as a}from"./if-defined.f53f1284.js";import{D as h}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const V={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},n="ui5-progress-indicator",O={title:"Main/ProgressIndicator",component:n,parameters:{docs:{page:h({...b,component:n})}},argTypes:V},t=e=>S`<ui5-progress-indicator
        ?disabled="${a(e.disabled)}"
        ?hide-value="${a(e.hideValue)}"
        value="${a(e.value)}"
        display-value="${a(e.displayValue)}"
        value-state="${a(e.valueState)}"
        style="${a(e.style)}"
    ></ui5-progress-indicator>`,r=t.bind({});r.args={value:25};const i=t.bind({});i.args={value:25,displayValue:"Custom Display Value"};const s=t.bind({});s.args={value:25,style:"height: 50px; width: 200px;"};const o=()=>S`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
`;var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,v,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var $,D,y;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`() => html\`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
\``,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const j=["Basic","DisplayValue","CustomSize","ValueStates"];export{r as Basic,s as CustomSize,i as DisplayValue,o as ValueStates,j as __namedExportsOrder,O as default};
//# sourceMappingURL=ProgressIndicator.stories.cf795d94.js.map
