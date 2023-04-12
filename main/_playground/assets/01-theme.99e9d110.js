import{j as e}from"./jsx-runtime.a9d7dbe1.js";import{M as i}from"./index.7f1b0df5.js";import{u as n}from"./index.198224bd.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function f(t={}){const{wrapper:o}=Object.assign({},n(),t.components);return o?e.exports.jsx(o,Object.assign({},t,{children:e.exports.jsx(r,{})})):r();function r(){const s=Object.assign({h1:"h1",code:"code",p:"p",ol:"ol",li:"li",strong:"strong",a:"a",ul:"ul",em:"em",pre:"pre",h2:"h2"},n(),t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Customizing/Theme"}),`
`,e.exports.jsxs(s.h1,{children:["Custom Theming with ",e.exports.jsx(s.code,{children:"UI Theme Designer"})]}),`
`,e.exports.jsxs(s.p,{children:["UI5 Web Components are fully compatible with ",e.exports.jsx(s.code,{children:"UI Theme Designer"}),", a tool for building a custom theme. You can create your own theme and effortlessly integrate it in your UI5 Web Components project on HTML level. On top, this does not prevent you from switching to and from officially supported themes, while having your own."]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx("b",{children:"Note:"})," ",e.exports.jsx(s.code,{children:"UI Theme Designer"})," is available for SAP customers only. We are currently working on a new tool, that will be publicly available."]}),`
`,e.exports.jsx(s.p,{children:"Follow this simple tutorial to build a custom theme running with UI5 Web Components in 5 minutes:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Open ",e.exports.jsx(s.strong,{children:"UI Theme Designer"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["Go to the ",e.exports.jsx(s.a,{href:"https://help.sap.com/viewer/09f6818d8e064537973102d6289e2aca/Cloud/en-US/935325fb130d41449362181fb6020dd0.html",children:"official docs"})," and set up the Theme Designer."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Create your ",e.exports.jsx(s.strong,{children:"custom theme"})," in ",e.exports.jsx(s.code,{children:"UI Theme Designer"}),"."]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Click the ",e.exports.jsx(s.strong,{children:"Create a New Theme"})," button."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Choose which SAP stock theme will serve as the base of your custom theme and click the ",e.exports.jsx(s.strong,{children:"Create Theme"})," button in the footer of the dialog."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Proceed to change as many parameters as you wish."}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Once you are done customizing, choose ",e.exports.jsx(s.strong,{children:"Theme"})," -> ",e.exports.jsx(s.strong,{children:"Export"}),` from the main menu on top. A dialog will appear,
asking for `,e.exports.jsx(s.strong,{children:"Theme ID"})," (technical name of your new theme) and a title."]}),`
`,e.exports.jsxs(s.p,{children:["The Theme ID you choose at this point will be the one you'll use in order to switch to your custom theme, for example if you choose ",e.exports.jsx(s.code,{children:"mytheme"}),":"]}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"index.html?sap-ui-theme=mytheme"})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Important:"})," Before clicking the ",e.exports.jsx(s.strong,{children:"Export"}),` button, thus dismissing the dialog and finishing theme creation,
it is `,e.exports.jsx(s.em,{children:"mandatory"})," that you expand the ",e.exports.jsx(s.strong,{children:"Optional Settings (for Experts)"})," panel, and select the ",e.exports.jsx(s.strong,{children:"Source Files + CSS Resources"}),` option.
Otherwise, no CSS Variables will be generated.`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Download the custom theme ",e.exports.jsx(s.code,{children:".zip"})," file:"]}),`
`,e.exports.jsxs(s.p,{children:["Your browser will then download a ",e.exports.jsx(s.code,{children:".zip"})," file with the name of your new theme, e.g. ",e.exports.jsx(s.code,{children:"mytheme.zip"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Copy the ",e.exports.jsx(s.code,{children:"css_variables.css"})," file with all CSS Variables for your custom theme to your project."]}),`
`,e.exports.jsxs(s.p,{children:["You can find this file inside the ",e.exports.jsx(s.code,{children:".zip"})," in the ",e.exports.jsx(s.code,{children:"\\Base\\baseLib\\<your theme name>\\"})," directory."]}),`
`,e.exports.jsxs(s.p,{children:["For example: ",e.exports.jsx(s.code,{children:"mytheme.zip\\Base\\baseLib\\mytheme\\css_variables.css"}),"."]}),`
`,e.exports.jsx(s.p,{children:"Just copy this file to a directory in your project where it can be statically served."}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Include the file in your project ",e.exports.jsx(s.code,{children:".html"})," page:"]}),`
`,e.exports.jsxs(s.p,{children:["The simplest option would be to use a ",e.exports.jsx(s.code,{children:"<link>"})," tag and point to where you copied the file:"]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`<link rel="stylesheet" type="text/css" href="<path-to-your-css-file>/css_variables.css">
`})}),`
`,e.exports.jsxs(s.p,{children:["but you could as well use a ",e.exports.jsx(s.code,{children:"<style>"})," tag and paste the content of ",e.exports.jsx(s.code,{children:"css_variables.css"}),` inside,
if that's what you prefer:`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`<style>
       /* Here goes the content of css_variables.css */
</style>
`})}),`
`]}),`
`]}),`
`,e.exports.jsx(s.p,{children:`And that's it! Now you can use your custom theme by setting it either in the URL of your page,
or in your configuration script:`}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"index.html?sap-ui-theme=mytheme"})}),`
`,e.exports.jsx(s.p,{children:"or"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`<script data-ui5-config type="application/json">
{
	"theme": "mytheme"
}
<\/script>
`})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," Using a custom theme does not prevent you from using the official themes. You can freely switch to and from them."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_fiori_3");
...
setTheme("mytheme");
...
setTheme("sap_fiori_3_dark");
`})}),`
`,e.exports.jsxs(s.p,{children:["For more on configuring themes, see ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-advanced-configuration--docs",children:"Configuration"}),"."]}),`
`,e.exports.jsx(s.h2,{children:"Load external theme"}),`
`,e.exports.jsx(s.p,{children:"To load an external theme, you have to specify where the theme resources are located in the theme URL parameter. For example:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{children:`index.html?sap-ui-theme=mytheme@https://my-example-host.com/
`})}),`
`,e.exports.jsxs(s.p,{children:['In this example, "mytheme" theme will be applied and its resources (CSS variables specific to the theme) will be loaded from ',e.exports.jsx(s.a,{href:"https://my-example-host.com/UI5/Base/baseLib/mytheme/css_variables.css",children:"https://my-example-host.com/UI5/Base/baseLib/mytheme/css_variables.css"}),"."]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," When an external theme is loaded some security restrictions will apply. Absolute URLs to a different origin than the current page will return the current page as an origin. To allow certain origins, you have to use ",e.exports.jsx(s.code,{children:'<meta name="sap-allowedThemeOrigins" content="https://my-example-host.com/">'})," tag inside the head of the page."]}),`
`,e.exports.jsxs(s.p,{children:["Next: ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-customizing-fonts--docs",children:"Custom Fonts"})]})]})}}export{f as default};
//# sourceMappingURL=01-theme.99e9d110.js.map
