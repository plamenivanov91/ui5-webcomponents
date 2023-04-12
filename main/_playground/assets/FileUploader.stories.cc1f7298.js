import{x as i}from"./lit-html.7ac33e6b.js";import{D as _}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const w={files:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"files",type:"FileList",description:"The current files."}]}}},I={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,R=Object.defineProperty,C=(a,D)=>r(R(a,"raw",{value:r(D||a.slice())})),u;const p="ui5-file-uploader",K={title:"Main/FileUploader",component:p,parameters:{docs:{page:_({...I,component:p})}},argTypes:w},e=()=>i(u||(u=C([`
<h3>Upload multiple images</h3>
    <div class="snippet">
        <ui5-file-uploader id="fileuploader1" accept="image/*" multiple="true">
            <ui5-button icon="upload">Upload Images</ui5-button>
        </ui5-file-uploader>
        <div id="result"></div>
        <script>
            var fileUploader = document.querySelector("#fileuploader1"),
                resultDiv = document.querySelector("#result");
            fileUploader.addEventListener("change", function(event) {
                var files = event.target.files;
                if (!files.length) {
                    resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
                } else {
                    resultDiv.innerHTML = "";
                    resultDiv.style.marginTop = "1rem";
                    for (var i = 0; i < files.length; i++) {
                        var img = document.createElement("img");
                        img.src = URL.createObjectURL(files[i]);
                        img.width = 100;
                        img.height = 100;
                        img.onload = function() {
                            URL.revokeObjectURL(img.src);
                        }
                        resultDiv.appendChild(img);
                    }
                }
            })
        <\/script>
    </div>
`])));e.parameters={docs:{story:{inline:!1}}};const t=()=>i`
<h3>Upload Single File</h3>
    <div class="snippet">
        <ui5-file-uploader>
            <ui5-button>Upload Single File</ui5-button>
        </ui5-file-uploader>
    </div>
`,n=()=>i`
<h3>File Uploader With No Input</h3>
    <div class="snippet">
        <ui5-file-uploader hide-input="">
            <ui5-button>Upload File</ui5-button>
        </ui5-file-uploader>
    </div>
`,l=()=>i`
<h3>Custom File Uploaders</h3>
    <div class="snippet">
        <ui5-file-uploader hide-input="">
            <ui5-avatar icon="upload"></ui5-avatar>
        </ui5-file-uploader>
        <ui5-file-uploader hide-input="">
            <ui5-badge>Upload File</ui5-badge>
        </ui5-file-uploader>
    </div>
`,o=()=>i`
<h3>Button With Icon File Uploader</h3>
    <div class="snippet">
        <ui5-file-uploader>
            <ui5-button icon="upload">Upload</ui5-button>
        </ui5-file-uploader>
        <ui5-file-uploader>
            <ui5-button icon="upload" icon-end="">Upload</ui5-button>
        </ui5-file-uploader>
        <ui5-file-uploader>
            <ui5-button icon="upload" icon-only=""></ui5-button>
        </ui5-file-uploader>
    </div>
`;var s,d,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => html\`
<h3>Upload multiple images</h3>
    <div class="snippet">
        <ui5-file-uploader id="fileuploader1" accept="image/*" multiple="true">
            <ui5-button icon="upload">Upload Images</ui5-button>
        </ui5-file-uploader>
        <div id="result"></div>
        <script>
            var fileUploader = document.querySelector("#fileuploader1"),
                resultDiv = document.querySelector("#result");
            fileUploader.addEventListener("change", function(event) {
                var files = event.target.files;
                if (!files.length) {
                    resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
                } else {
                    resultDiv.innerHTML = "";
                    resultDiv.style.marginTop = "1rem";
                    for (var i = 0; i < files.length; i++) {
                        var img = document.createElement("img");
                        img.src = URL.createObjectURL(files[i]);
                        img.width = 100;
                        img.height = 100;
                        img.onload = function() {
                            URL.revokeObjectURL(img.src);
                        }
                        resultDiv.appendChild(img);
                    }
                }
            })
        <\/script>
    </div>
\``,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,f,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
<h3>Upload Single File</h3>
    <div class="snippet">
        <ui5-file-uploader>
            <ui5-button>Upload Single File</ui5-button>
        </ui5-file-uploader>
    </div>
\``,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => html\`
<h3>File Uploader With No Input</h3>
    <div class="snippet">
        <ui5-file-uploader hide-input="">
            <ui5-button>Upload File</ui5-button>
        </ui5-file-uploader>
    </div>
\``,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var U,F,T;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`() => html\`
<h3>Custom File Uploaders</h3>
    <div class="snippet">
        <ui5-file-uploader hide-input="">
            <ui5-avatar icon="upload"></ui5-avatar>
        </ui5-file-uploader>
        <ui5-file-uploader hide-input="">
            <ui5-badge>Upload File</ui5-badge>
        </ui5-file-uploader>
    </div>
\``,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var S,y,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => html\`
<h3>Button With Icon File Uploader</h3>
    <div class="snippet">
        <ui5-file-uploader>
            <ui5-button icon="upload">Upload</ui5-button>
        </ui5-file-uploader>
        <ui5-file-uploader>
            <ui5-button icon="upload" icon-end="">Upload</ui5-button>
        </ui5-file-uploader>
        <ui5-file-uploader>
            <ui5-button icon="upload" icon-only=""></ui5-button>
        </ui5-file-uploader>
    </div>
\``,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const A=["Template0","Template1","Template2","Template3","Template4"];export{e as Template0,t as Template1,n as Template2,l as Template3,o as Template4,A as __namedExportsOrder,K as default};
//# sourceMappingURL=FileUploader.stories.cc1f7298.js.map
