import{j as e}from"./jsx-runtime.a9d7dbe1.js";import{M as i}from"./index.7f1b0df5.js";import{u as r}from"./index.198224bd.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function b(o={}){const{wrapper:t}=Object.assign({},r(),o.components);return t?e.exports.jsx(t,Object.assign({},o,{children:e.exports.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",em:"em",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},r(),o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Advanced/OpenUI5 integration"}),`
`,e.exports.jsx(n.h1,{children:"OpenUI5 Integration"}),`
`,e.exports.jsx(n.p,{children:e.exports.jsxs(n.em,{children:[e.exports.jsx(n.a,{href:"https://openui5.org/",children:"OpenUI5"})," is an open-source framework in the same product family as UI5 Web Components."]})}),`
`,e.exports.jsx(n.p,{children:"To enable OpenUI5 support:"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-js",children:`import "@ui5/webcomponents-base/dist/features/OpenUI5Support.js";
`})}),`
`,e.exports.jsx(n.p,{children:`If your app uses both OpenUI5 and UI5 Web Components, UI5 Web Components can benefit
from OpenUI5 configuration and resources.`}),`
`,e.exports.jsx(n.p,{children:"When you import the above module:"}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:`OpenUI5 configuration takes precedence over UI5 Web Components configuration
for all common entities (theme, language, etc.). In addition, changing the theme
in OpenUI5 will also change the theme in UI5 Web Components.`}),`
`,e.exports.jsx(n.li,{children:"Fonts will not be loaded twice (just once by OpenUI5, and reused)."}),`
`,e.exports.jsx(n.li,{children:"Locale data assets will not be fetched twice (just once by OpenUI5, and reused)."}),`
`]}),`
`,e.exports.jsx(n.p,{children:`Therefore, if you intend to run both frameworks in the same browser window,
it is highly recommended to enable OpenUI5 support and benefit from these optimizations.`}),`
`,e.exports.jsxs(n.p,{children:["Next: ",e.exports.jsx(n.a,{href:"./?path=/docs/docs-advanced-other-framework-level-apis--docs",children:"Using the Framework"})]})]})}}export{b as default};
//# sourceMappingURL=04-OpenUI5-integration.16462ab3.js.map
