import{s as l}from"./index.5ca63ce8.js";import{d as A}from"./index.b38f6aa4.js";import{Z as m,B as O}from"./lit-html.7ac33e6b.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:$}=m,S=(e,r)=>r===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===r,f=()=>document.createComment(""),C=(e,r,t)=>{var i;const d=e._$AA.parentNode,s=r===void 0?e._$AB:r._$AA;if(t===void 0){const n=d.insertBefore(f(),s),o=d.insertBefore(f(),s);t=new $(n,o,e,e.options)}else{const n=t._$AB.nextSibling,o=t._$AM,a=o!==e;if(a){let _;(i=t._$AQ)===null||i===void 0||i.call(t,e),t._$AM=e,t._$AP!==void 0&&(_=e._$AU)!==o._$AU&&t._$AP(_)}if(n!==s||a){let _=t._$AA;for(;_!==n;){const p=_.nextSibling;d.insertBefore(_,s),_=p}}}return t},P=(e,r,t=e)=>(e._$AI(r,t),e),T={},R=(e,r=T)=>e._$AH=r,U=e=>e._$AH,I=e=>{var r;(r=e._$AP)===null||r===void 0||r.call(e,!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const d=t.nextSibling;t.remove(),t=d}};var{window:M}=l;M.STORYBOOK_ENV="web-components";const{start:g}=__STORYBOOK_MODULE_PREVIEW_API__,{simulatePageLoad:u,simulateDOMContentLoaded:h}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:y}=l,N=(e,r)=>{let{id:t,component:i}=r;if(!i)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(e).forEach(([s,n])=>{d[s]=n}),d};function w({storyFn:e,kind:r,name:t,showMain:i,showError:d,forceRemount:s},n){let o=e();if(i(),S(o)){(s||!n.querySelector('[id="root-inner"]'))&&(n.innerHTML='<div id="root-inner"></div>');let a=n.querySelector('[id="root-inner"]');O(o,a),u(n)}else if(typeof o=="string")n.innerHTML=o,u(n);else if(o instanceof y){if(n.firstChild===o&&!s)return;n.innerHTML="",n.appendChild(o),h()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${t}" of "${r}".`,description:A`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c=g(w);c.forceReRender;c.clientApi.raw;function x(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function H(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function Y(e){l.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__=e}function D(){return l.__STORYBOOK_CUSTOM_ELEMENTS__||l.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:v,EventSource:E}=l;module&&module.hot&&module.hot.decline&&(module.hot.decline(),new E("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&v.location.reload()}catch{}}));export{H as a,w as b,C as c,Y as d,D as g,x as i,U as m,I as p,N as r,R as s,P as u};
//# sourceMappingURL=chunk-KDRLDMCT.d7c1b748.js.map
