"use strict";import{render as i,html as p,svg as s}from"lit-html";import{getFeature as o}from"../FeaturesRegistry.js";const m=(t,...n)=>{const e=o("LitStatic");return(e?e.html:p)(t,...n)},a=(t,...n)=>{const e=o("LitStatic");return(e?e.svg:s)(t,...n)},l=(t,n,e)=>{const r=o("OpenUI5Enablement");r&&(t=r.wrapTemplateResultInBusyMarkup(m,e.host,t)),i(t,n,e)},f=(t,n,e)=>{const r=o("LitStatic");if(r)return r.unsafeStatic((n||[]).includes(t)?`${t}-${e}`:t)};export{m as html,a as svg};export{f as scopeTag};export{repeat}from"lit-html/directives/repeat.js";export{classMap}from"lit-html/directives/class-map.js";export{styleMap}from"./directives/style-map.js";export{ifDefined}from"lit-html/directives/if-defined.js";export{unsafeHTML}from"lit-html/directives/unsafe-html.js";export default l;
//# sourceMappingURL=LitRenderer.js.map