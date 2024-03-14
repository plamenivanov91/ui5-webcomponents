"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6374],{9316:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=t(1085),r=t(1184),s=t(2316),i=t(3695);const c={},d=void 0,l={id:"play",title:"play",description:"<Editor",source:"@site/docs/play.md",sourceDirName:".",slug:"/play",permalink:"/ui5-webcomponents/nightly/play",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},a=[];function p(n){const{Editor:e}={...(0,r.R)(),...n.components};return e||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(e,{html:s.A,js:i.A,mainFile:"main.ts",canShare:!0,mainFileSelected:!0,standalone:!0})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},3695:(n,e,t)=>{t.d(e,{A:()=>o});const o='import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender, { html } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\nimport Integer from "@ui5/webcomponents-base/dist/types/Integer.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\nconst styles = `\n    button {\n        padding: 1rem;\n        border-radius: 1rem;\n    }\n`;\n\n@customElement({\n    tag: "my-element",\n    styles,\n    renderer: litRender,\n})\nexport class MyElement extends UI5Element {\n    @property({ type: Integer, defaultValue: 0})\n    count!: number;\n\n    render() {\n        return html `\n            <slot></slot>\n            <div class="card">\n                <button @click=${this._onClick} part="button">\n                Count is ${this.count}\n                </button>\n            </div>`\n    }\n\n    _onClick() {\n        this.count += 2;\n    }\n}\n\nMyElement.define();'},2316:(n,e,t)=>{t.d(e,{A:()=>o});const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<head>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n  \x3c!-- playground-fold-end --\x3e\n\n  <my-element>\n    <h1>UI5 Web Components</h1>\n  </my-element>\n  \x3c!-- playground-fold --\x3e\n  <script type="module" src="main.js"><\/script>\n</body>\n\n\x3c!-- playground-fold-end --\x3e\n'},1184:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var o=t(4041);const r={},s=o.createContext(r);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);