import{j as e}from"./jsx-runtime-5fc188ad.js";import{M as r}from"./index-7bd4487d.js";import{u as s}from"./index-cf712c1b.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-6df52ef3.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function t(n){const o=Object.assign({h1:"h1",p:"p",em:"em",pre:"pre",code:"code",a:"a"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Advanced/Other framework level APIs"}),`
`,e.jsx(o.h1,{id:"using-the-framework",children:"Using the Framework"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"This section mentions framework-level APIs that do not have a dedicated section."})}),`
`,e.jsx(o.p,{children:`Most of the time you'll be using the UI5 Web Components' APIs to do your job. However, there are also certain framework-level
APIs you should be aware of.`}),`
`,e.jsx(o.h1,{id:"executing-code-on-boot",children:"Executing Code on Boot"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { attachBoot } from "@ui5/webcomponents-base/dist/Boot.js";
`})}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"attachBoot"})," function allows you to execute custom code when the framework has finished booting."]}),`
`,e.jsx(o.p,{children:"Example:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`attachBoot(() => {
	console.log("Framework booted");
});
`})}),`
`,e.jsxs(o.p,{children:["Next: ",e.jsx(o.a,{href:"./?path=/docs/docs-advanced-using-i18n-for-apps--docs",children:"UI5 Web Components i18n for Apps"})]})]})}function f(n={}){const{wrapper:o}=Object.assign({},s(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{f as default};
//# sourceMappingURL=05-other-framework-level-APIs-452364be.js.map