import{j as e}from"./jsx-runtime.a9d7dbe1.js";import{M as n}from"./index.7f1b0df5.js";import{u as r}from"./index.198224bd.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function g(t={}){const{wrapper:o}=Object.assign({},r(),t.components);return o?e.exports.jsx(o,Object.assign({},t,{children:e.exports.jsx(i,{})})):i();function i(){const s=Object.assign({h1:"h1",a:"a",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code"},r(),t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n,{title:"Docs/Changelog/1.5.0"}),`
`,e.exports.jsxs(s.h1,{children:[e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/compare/v1.4.0...v1.5.0",children:"1.5.0"})," (2022-07-03)"]}),`
`,e.exports.jsx(s.h3,{children:"Bug Fixes"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"framework:"})," fix F6Navigation on Windows OS (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5424",children:"#5424"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/a494f85",children:"a494f85"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"framework:"})," fix form support to respect ",e.exports.jsx(s.code,{children:"required"})," attribute (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5133",children:"#5133"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/ff044b0",children:"ff044b0"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/3498",children:"#3498"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"framework:"})," correct use of arrow keys for ItemNavigation in RTL (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5408",children:"#5408"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/cec8119",children:"cec8119"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5166",children:"#5166"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-avatar-group:"})," adapt width calculations in composite layouts (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5357",children:"#5357"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/d176800",children:"d176800"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5333",children:"#5333"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-badge:"})," correctly detect if default slot is provided (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5334",children:"#5334"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/0dceaf5",children:"0dceaf5"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5328",children:"#5328"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-button:"})," adjust icon role (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5355",children:"#5355"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/1aac3c5",children:"1aac3c5"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5288",children:"#5288"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-card:"})," refactor header to avoid nesting interactive elements (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5301",children:"#5301"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/9b33bad",children:"9b33bad"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-carousel:"})," correct navigation buttons behavior (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5302",children:"#5302"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/34027cd",children:"34027cd"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5125",children:"#5125"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-checkbox:"})," correct label color in Horizon (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5375",children:"#5375"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/659cd7f",children:"659cd7f"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5364",children:"#5364"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-combobox:"})," change event is now fired on Enter if value is cha\u2026 (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5284",children:"#5284"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/b8a4854",children:"b8a4854"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-combobox, ui5-multi-combobox:"})," adjust dropdown width according to the visual specification (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5371",children:"#5371"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/e585304",children:"e585304"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-dialog:"})," add height to footer and samples achieving fiori footer design (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5338",children:"#5338"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/03269f4",children:"03269f4"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-dialog:"})," improved shrinking dialog when resizing (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5291",children:"#5291"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/997f2a2",children:"997f2a2"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5265",children:"#5265"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-dialog:"})," make header text bold (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5266",children:"#5266"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/42c0cbe",children:"42c0cbe"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5230",children:"#5230"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-dialog:"})," reposition on screen resize (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5283",children:"#5283"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/c2341e8",children:"c2341e8"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-input:"})," fix typeahead on mobile devices (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5292",children:"#5292"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/edcdd24",children:"edcdd24"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-input:"})," refactor change event (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5296",children:"#5296"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/17465e3",children:"17465e3"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-li:"})," correct accessible-name mappings (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5280",children:"#5280"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/21ed1ee",children:"21ed1ee"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-link:"})," enable overstyling (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5366",children:"#5366"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/a359ebf",children:"a359ebf"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5267",children:"#5267"})," ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5218",children:"#5218"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-panel:"})," set pointer cursor only over the header (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5275",children:"#5275"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/04c23b9",children:"04c23b9"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-popover:"})," avoid dangling aria-labelledby attribute (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5428",children:"#5428"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/21d5457",children:"21d5457"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/3956",children:"#3956"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-rating-indicator:"})," apply correct styles for focus in HC themes (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5289",children:"#5289"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/4531582",children:"4531582"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-rating-indicator:"})," import ui5-icon as used in template (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5320",children:"#5320"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/885e359",children:"885e359"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5318",children:"#5318"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-shellbar:"})," correct accessibility DOM (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5395",children:"#5395"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/aba5fb5",children:"aba5fb5"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-shellbar:"})," document new accessibility property (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5425",children:"#5425"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/8d4db8b",children:"8d4db8b"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/4009",children:"#4009"})]}),`
`,e.exports.jsxs(s.li,{children:["cldr url (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5397",children:"#5397"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/a4df0bd",children:"a4df0bd"}),")"]}),`
`,e.exports.jsxs(s.li,{children:["document new accessibility properties (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5417",children:"#5417"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/40e80e4",children:"40e80e4"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/4500",children:"#4500"})," ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/3546",children:"#3546"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-slider, ui5-range-slider:"})," adjust padding to spec (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5343",children:"#5343"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/bfbd23f",children:"bfbd23f"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/4801",children:"#4801"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-tabcontainer:"})," make disabled tabs focusable in overflow (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5300",children:"#5300"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/c39917f",children:"c39917f"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-timeline-item:"})," align text in title link (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/51954b7",children:"51954b7"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5163",children:"#5163"})]}),`
`]}),`
`,e.exports.jsx(s.h3,{children:"Features"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-datetime-picker:"})," make ",e.exports.jsx(s.code,{children:"change"})," event preventable (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5286",children:"#5286"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/7395dc3",children:"7395dc3"}),"), closes ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/4684",children:"#4684"})," ",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5121",children:"#5121"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-illustrated-message:"})," implement `size`` property (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5405",children:"#5405"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/c58690d",children:"c58690d"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-link, ui5-breadcrumbs:"})," add modifiers detals to ",e.exports.jsx(s.code,{children:"click"})," event (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5228",children:"#5228"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/379cc7b",children:"379cc7b"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-multi-combobox:"})," implement type ahead (autocomplete) (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5358",children:"#5358"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/b8e46f4",children:"b8e46f4"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-multi-combobox:"})," introduce `grouping`` functionality (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5250",children:"#5250"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/597a6f2",children:"597a6f2"}),")"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"ui5-view-settings-dialog:"})," iplement behaviour for external setting of confirmed settings (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/5222",children:"#5222"}),") (",e.exports.jsx(s.a,{href:"https://github.com/SAP/ui5-webcomponents/commit/7fbb235",children:"7fbb235"}),")"]}),`
`]})]})}}export{g as default};
//# sourceMappingURL=9-1.5.0.65a2920c.js.map