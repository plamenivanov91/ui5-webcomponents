import{x as p}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as b}from"./docs-2e183821.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-786285a4.js";import"./iframe-0abe9b39.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-d6ec095f.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const D={},x={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},q="ui5-rating-indicator";let $=0;const E={title:"Main/Rating Indicator",component:"RatingIndicator",parameters:{docs:{page:b({...x,component:q})}},argTypes:D},s=e=>p`
<ui5-rating-indicator
    id="rating-indicator-${++$}"
    value="${i(e.value)}"
    max="${i(e.max)}"
    ?disabled="${i(e.disabled)}"
    ?readonly="${i(e.readonly)}"
    ?required="${i(e.required)}"
    tooltip="${i(e.tooltip)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
></ui5-rating-indicator>`,r=s.bind({});r.args={value:4};const n=s.bind({});n.args={value:5,max:10};const a=s.bind({});a.args={value:5,max:7,accessibleNameRef:"label-acc-name-ref",required:!0};a.decorators=[e=>p`
    <ui5-label id="label-acc-name-ref" required="true" for="rating-indicator-${$+1}">Rate us</ui5-label>
    ${e()}`];var t,o,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var f,u,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-rating-indicator\n    id="rating-indicator-${++index}"\n    value="${ifDefined(args.value)}"\n    max="${ifDefined(args.max)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-rating-indicator>`',...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const O=["Basic","MaxValue","RequiredLabel"];export{r as Basic,n as MaxValue,a as RequiredLabel,O as __namedExportsOrder,E as default};
//# sourceMappingURL=RatingIndicator.stories-8a57327a.js.map
