import{x as f}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";const d={design:{control:"select",options:["Contrast","Critical","Default","Information","Negative","Neutral","NonInteractive","Positive"]}},b={package:"@ui5/webcomponents",tagName:"ui5-icon"},g={title:"Main/Icon",component:"Icon",argTypes:d},m=e=>f`<ui5-icon
    design="${i(e.design)}"
    ?interactive="${i(e.interactive)}"
    name="${i(e.name)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-role="${i(e.accessibleRole)}"
    ?show-tooltip="${i(e.showTooltip)}"
    style="${i(e.style)}"
></ui5-icon>`,n=m.bind({});n.args={name:"activities"};const s=m.bind({});s.args={name:"tnt/antenna",style:"width: 3rem; height: 3rem; font-size: 1.5rem; color: crimson; background-color: #fafafa"};var o,a,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-icon\n    design="${ifDefined(args.design)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    style="${ifDefined(args.style)}"\n></ui5-icon>`',...(t=(a=n.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var c,r,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-icon\n    design="${ifDefined(args.design)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    style="${ifDefined(args.style)}"\n></ui5-icon>`',...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const p=["Basic","Customized"],D=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Customized:s,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{D as C,b as c};