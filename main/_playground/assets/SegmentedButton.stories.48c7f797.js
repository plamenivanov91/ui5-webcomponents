import{x as l}from"./lit-html.7ac33e6b.js";import{o as f}from"./unsafe-html.ba9f7887.js";import{l as h}from"./if-defined.f53f1284.js";import{D as I}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const S={selectedItem:{control:{type:!1}},default:{control:{type:"text"}},"selection-change":{description:"Fired when the selected item changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItem",type:"HTMLElement",description:"the pressed item."}]}}},B={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},o="ui5-segmented-button",v={title:"Main/SegmentedButton",component:o,subcomponents:{SegmentedButtonItem:"ui5-segmented-button-item"},parameters:{docs:{page:I({...B,component:o})}},argTypes:S},s=m=>l`<ui5-segmented-button
    accessible-name="${h(m.accessibleName)}"
>
    ${f(m.default)}
</ui5-segmented-button>`,t=s.bind({});t.args={default:`<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,accessibleName:"Geographic location"};const n=s.bind({});n.args={default:`<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>`};const e=s.bind({});e.storyName="More Segmented Button Items";e.args={default:`<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
<ui5-segmented-button-item>Press me</ui5-segmented-button-item>`};var i,a,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,p,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const C=["Basic","WithIcons","WithMoreItems"];export{t as Basic,n as WithIcons,e as WithMoreItems,C as __namedExportsOrder,v as default};
//# sourceMappingURL=SegmentedButton.stories.48c7f797.js.map
