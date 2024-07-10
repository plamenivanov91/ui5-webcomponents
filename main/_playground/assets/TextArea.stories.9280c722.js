import{x as r}from"./lit-html.7ac33e6b.js";import{D as x}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const u={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}}},T={package:"@ui5/webcomponents"},s="ui5-textarea",M={title:"Main/TextArea",component:s,parameters:{docs:{page:x({...T,component:s})}},argTypes:u},e=()=>r`
<h3>Basic TextArea</h3>
    <div class="snippet">
        <ui5-textarea class="textarea-width" placeholder="Type as much text as you wish"></ui5-textarea>
    </div>
`,t=()=>r`
<h3>TextArea with Maximum Length</h3>
    <div class="snippet">
        <ui5-textarea class="textarea-width" placeholder="Type no more than 10 symbols" maxlength="10" show-exceeded-text=""></ui5-textarea>
    </div>
`,a=()=>r`
<h3>TextArea with Label</h3>
    <div class="snippet">
        <ui5-label for="textAreaWithLabelID">Description</ui5-label>
        <ui5-textarea id="textAreaWithLabelID" class="textarea-width" placeholder="Enter description"></ui5-textarea>
    </div>
`;var i,o,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => html\`
<h3>Basic TextArea</h3>
    <div class="snippet">
        <ui5-textarea class="textarea-width" placeholder="Type as much text as you wish"></ui5-textarea>
    </div>
\``,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,n,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => html\`
<h3>TextArea with Maximum Length</h3>
    <div class="snippet">
        <ui5-textarea class="textarea-width" placeholder="Type no more than 10 symbols" maxlength="10" show-exceeded-text=""></ui5-textarea>
    </div>
\``,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,h,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
<h3>TextArea with Label</h3>
    <div class="snippet">
        <ui5-label for="textAreaWithLabelID">Description</ui5-label>
        <ui5-textarea id="textAreaWithLabelID" class="textarea-width" placeholder="Enter description"></ui5-textarea>
    </div>
\``,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const _=["Template0","Template1","Template2"];export{e as Template0,t as Template1,a as Template2,_ as __namedExportsOrder,M as default};
//# sourceMappingURL=TextArea.stories.9280c722.js.map