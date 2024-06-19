import{x as s}from"./lit-html.7ac33e6b.js";import{D as T}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const S={placement:{control:"select",options:["BottomCenter","BottomEnd","BottomStart","MiddleCenter","MiddleEnd","MiddleStart","TopCenter","TopEnd","TopStart"]},default:{control:{type:"text"}},show:{description:"Shows the component.",table:{category:"methods"}}},B={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},n="ui5-toast",P={title:"Main/Toast",component:n,parameters:{docs:{page:T({...B,component:n})}},argTypes:S},t=()=>s`
<h3>Basic Toast</h3>
    <div class="snippet">
        <!--Basic Toast-->
        <ui5-button id="wcBtnShowToastBasic" class="samples-margin">Basic Toast</ui5-button>
        <ui5-toast id="wcToastBasic">Basic Toast</ui5-toast>
    </div>
`,o=()=>s`
<h3>Toast Duration</h3>
    <div class="snippet">
        <!--Short Toast-->
        <ui5-button id="wcBtnShowToastShort" class="samples-margin">Short Toast</ui5-button>
        <ui5-toast id="wcToastShort" duration="1500" placement="BottomStart">Short Toast</ui5-toast>
        <!--Long Toast-->
        <ui5-button id="wcBtnShowToastLong" class="samples-margin">Long Toast</ui5-button>
        <ui5-toast id="wcToastLong" duration="4500" placement="BottomEnd">Long Toast</ui5-toast>
    </div>
`,a=()=>s`
<h3>Toast Placements</h3>
    <div class="snippet">
        <!--TopStart-->
        <ui5-button id="wcBtnShowToastTS" class="samples-margin">TopStart</ui5-button>
        <ui5-toast id="wcToastTS" placement="TopStart">TopStart</ui5-toast>
        <!--TopCenter-->
        <ui5-button id="wcBtnShowToastTC" class="samples-margin">TopCenter</ui5-button>
        <ui5-toast id="wcToastTC" placement="TopCenter">TopCenter</ui5-toast>
        <!--TopEnd-->
        <ui5-button id="wcBtnShowToastTE" class="samples-margin">TopEnd</ui5-button>
        <ui5-toast id="wcToastTE" placement="TopEnd">TopEnd</ui5-toast>
        <!--MiddleStart-->
        <ui5-button id="wcBtnShowToastMS" class="samples-margin">MiddleStart</ui5-button>
        <ui5-toast id="wcToastMS" placement="MiddleStart">MiddleStart</ui5-toast>
        <!--MiddleCenter-->
        <ui5-button id="wcBtnShowToastMC" class="samples-margin">MiddleCenter</ui5-button>
        <ui5-toast id="wcToastMC" placement="MiddleCenter">MiddleCenter</ui5-toast>
        <!--MiddleEnd-->
        <ui5-button id="wcBtnShowToastME" class="samples-margin">MiddleEnd</ui5-button>
        <ui5-toast id="wcToastME" placement="MiddleEnd">MiddleEnd</ui5-toast>
        <!--BottomStart-->
        <ui5-button id="wcBtnShowToastBS" class="samples-margin">BottomStart</ui5-button>
        <ui5-toast id="wcToastBS" placement="BottomStart">BottomStart</ui5-toast>
        <!--BottomCenter-->
        <ui5-button id="wcBtnShowToastBC" class="samples-margin">BottomCenter</ui5-button>
        <ui5-toast id="wcToastBC">BottomCenter</ui5-toast>
        <!--BottomEnd-->
        <ui5-button id="wcBtnShowToastBE" class="samples-margin">BottomEnd</ui5-button>
        <ui5-toast id="wcToastBE" placement="BottomEnd">BottomEnd</ui5-toast>
    </div>
`;var i,e,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => html\`
<h3>Basic Toast</h3>
    <div class="snippet">
        <!--Basic Toast-->
        <ui5-button id="wcBtnShowToastBasic" class="samples-margin">Basic Toast</ui5-button>
        <ui5-toast id="wcToastBasic">Basic Toast</ui5-toast>
    </div>
\``,...(d=(e=t.parameters)==null?void 0:e.docs)==null?void 0:d.source}}};var u,r,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
<h3>Toast Duration</h3>
    <div class="snippet">
        <!--Short Toast-->
        <ui5-button id="wcBtnShowToastShort" class="samples-margin">Short Toast</ui5-button>
        <ui5-toast id="wcToastShort" duration="1500" placement="BottomStart">Short Toast</ui5-toast>
        <!--Long Toast-->
        <ui5-button id="wcBtnShowToastLong" class="samples-margin">Long Toast</ui5-button>
        <ui5-toast id="wcToastLong" duration="4500" placement="BottomEnd">Long Toast</ui5-toast>
    </div>
\``,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
<h3>Toast Placements</h3>
    <div class="snippet">
        <!--TopStart-->
        <ui5-button id="wcBtnShowToastTS" class="samples-margin">TopStart</ui5-button>
        <ui5-toast id="wcToastTS" placement="TopStart">TopStart</ui5-toast>
        <!--TopCenter-->
        <ui5-button id="wcBtnShowToastTC" class="samples-margin">TopCenter</ui5-button>
        <ui5-toast id="wcToastTC" placement="TopCenter">TopCenter</ui5-toast>
        <!--TopEnd-->
        <ui5-button id="wcBtnShowToastTE" class="samples-margin">TopEnd</ui5-button>
        <ui5-toast id="wcToastTE" placement="TopEnd">TopEnd</ui5-toast>
        <!--MiddleStart-->
        <ui5-button id="wcBtnShowToastMS" class="samples-margin">MiddleStart</ui5-button>
        <ui5-toast id="wcToastMS" placement="MiddleStart">MiddleStart</ui5-toast>
        <!--MiddleCenter-->
        <ui5-button id="wcBtnShowToastMC" class="samples-margin">MiddleCenter</ui5-button>
        <ui5-toast id="wcToastMC" placement="MiddleCenter">MiddleCenter</ui5-toast>
        <!--MiddleEnd-->
        <ui5-button id="wcBtnShowToastME" class="samples-margin">MiddleEnd</ui5-button>
        <ui5-toast id="wcToastME" placement="MiddleEnd">MiddleEnd</ui5-toast>
        <!--BottomStart-->
        <ui5-button id="wcBtnShowToastBS" class="samples-margin">BottomStart</ui5-button>
        <ui5-toast id="wcToastBS" placement="BottomStart">BottomStart</ui5-toast>
        <!--BottomCenter-->
        <ui5-button id="wcBtnShowToastBC" class="samples-margin">BottomCenter</ui5-button>
        <ui5-toast id="wcToastBC">BottomCenter</ui5-toast>
        <!--BottomEnd-->
        <ui5-button id="wcBtnShowToastBE" class="samples-margin">BottomEnd</ui5-button>
        <ui5-toast id="wcToastBE" placement="BottomEnd">BottomEnd</ui5-toast>
    </div>
\``,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const _=["Template0","Template1","Template2"];export{t as Template0,o as Template1,a as Template2,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=Toast.stories.e4cef317.js.map