import{x as a}from"./lit-element-c5a2b594.js";import{l as s}from"./if-defined-c29cffe1.js";import{o as e}from"./unsafe-html-0ddd83da.js";import{D as p}from"./docs-eddcd656.js";import{B as m}from"./BarDesign-1c43fd5d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-a71cf7a0.js";import"./iframe-8a460855.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-67e97cc6.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const c={design:{control:"select",options:["FloatingFooter","Footer","Header","Subheader"]},default:{control:{type:"text"}},endContent:{control:{type:"text"}},startContent:{control:{type:"text"}}},d={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.11"},u="ui5-bar",S={title:"Fiori/Bar",component:"Bar",parameters:{docs:{page:p({...d,component:u})}},argTypes:c},l=o=>a`<ui5-bar
    design="${s(o.design)}"
>
    ${e(o.default)}
    ${e(o.startContent)}
    ${e(o.endContent)}
</ui5-bar>`,t=l.bind({});t.storyName="Basic";t.args={design:m.Header,startContent:'<ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>',default:'<ui5-label id="basic-label">Content</ui5-label>',endContent:'<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>'};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-bar\n    design="${ifDefined(args.design)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.startContent)}\n    ${unsafeHTML(args.endContent)}\n</ui5-bar>`',...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,S as default};
//# sourceMappingURL=Bar.stories-4cd7a44e.js.map
