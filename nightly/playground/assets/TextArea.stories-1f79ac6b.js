import{x as t}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as w}from"./unsafe-html-0ddd83da.js";import{D as b}from"./docs-a231d5bc.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-24068b63.js";import"./iframe-a50b5b16.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-a812d969.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const v={growingMaxLines:{control:{type:"number"}},maxlength:{control:{type:"number"}},rows:{control:{type:"number"}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}}},M={package:"@ui5/webcomponents"};var d=Object.freeze,L=Object.defineProperty,S=(e,h)=>d(L(e,"raw",{value:d(h||e.slice())})),l;const y="ui5-textarea";let s=0;const C={title:"Main/Text Area",component:"TextArea",parameters:{docs:{page:b({...M,component:y})}},argTypes:v},o=e=>t`
<ui5-textarea
    id="textArea-${s++}"
    value="${a(e.value)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    ?required="${a(e.required)}"
    placeholder="${a(e.placeholder)}"
    value-state="${a(e.valueState)}"
    rows="${a(e.rows)}"
    maxlength="${a(e.maxlength)}"
    ?show-exceeded-text="${a(e.showExceededText)}"
    ?growing="${a(e.growing)}"
    growing-max-lines="${a(e.growingMaxLines)}"
    name="${a(e.name)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
>
    ${w(e.valueStateMessage)}
</ui5-textarea>`,i=o.bind({});i.args={placeholder:"Enter text"};const n=o.bind({});n.decorators=[e=>t(l||(l=S([`
        `,`
        <script>
        (() => {
            const textAreaMaxLength = document.getElementById("textArea-`,`");

            textAreaMaxLength.addEventListener("input", function (event) {
                const { value, maxlength} = textAreaMaxLength;
                textAreaMaxLength.valueState = value.length > maxlength ? "Warning" : "None";	
            });
        })()
        <\/script>`])),e(),s-1)];n.args={placeholder:"Enter text",maxlength:10,showExceededText:!0,valueStateMessage:'<div id="warningMessage" slot="valueStateMessage">The characters limit is exceeded</div>'};const r=o.bind({});r.decorators=[e=>t`
        <ui5-label for="textArea-${s}">Description</ui5-label>
        ${e()}
        `];r.args={placeholder:"Enter description",required:!0};var c,g,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var m,x,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var $,p,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-textarea
    id="textArea-\${index++}"
    value="\${ifDefined(args.value)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    placeholder="\${ifDefined(args.placeholder)}"
    value-state="\${ifDefined(args.valueState)}"
    rows="\${ifDefined(args.rows)}"
    maxlength="\${ifDefined(args.maxlength)}"
    ?show-exceeded-text="\${ifDefined(args.showExceededText)}"
    ?growing="\${ifDefined(args.growing)}"
    growing-max-lines="\${ifDefined(args.growingMaxLines)}"
    name="\${ifDefined(args.name)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.valueStateMessage)}
</ui5-textarea>\``,...(D=(p=r.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const F=["Basic","MaxLength","Label"];export{i as Basic,r as Label,n as MaxLength,F as __namedExportsOrder,C as default};
//# sourceMappingURL=TextArea.stories-1f79ac6b.js.map
