import{x as d}from"./lit-html.7ac33e6b.js";import{D as l}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const p={close:{description:"Closes the dialog and the scan session.",table:{category:"methods"}},show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"}},"scan-error":{description:"Fires when the scan fails with error.",table:{category:"events"},UI5CustomData:{parameters:[{name:"message",type:"string",description:"the error message"}]}},"scan-success":{description:"Fires when the scan is completed successfuuly.",table:{category:"events"},UI5CustomData:{parameters:[{name:"text",type:"string",description:"the scan result as string"},{name:"rawBytes",type:"Object",description:"the scan result as a Uint8Array"}]}}},m={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var a=Object.freeze,u=Object.defineProperty,g=(n,o)=>a(u(n,"raw",{value:a(o||n.slice())})),t;const s="ui5-barcode-scanner-dialog",C={title:"Fiori/BarcodeScannerDialog",component:s,parameters:{docs:{page:l({...m,component:s})}},argTypes:p},e=()=>d(t||(t=g([`
<h3>Usage</h3>
    <div class="snippet">
        <ui5-barcode-scanner-dialog id="dlgScan"></ui5-barcode-scanner-dialog>
        <ui5-button id="btnScan" icon="camera" tooltip="Start Camera">Scan</ui5-button>
        <div>
            <ui5-label id="scanResult"></ui5-label>
            <ui5-label id="scanError"></ui5-label>
        </div>
        <script>
            btnScan.addEventListener("click", function(event) {
                dlgScan.show();
            });
            dlgScan.addEventListener("scan-success", function(event) {
                scanResult.innerHTML = event.detail.text;
                dlgScan.close();
            });
            dlgScan.addEventListener("scan-error", function(event) {
                scanError.innerHTML = event.detail.message;
                dlgScan.close();
            });
        <\/script>
    </div>
`])));e.parameters={docs:{story:{inline:!1}}};var r,i,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => html\`
<h3>Usage</h3>
    <div class="snippet">
        <ui5-barcode-scanner-dialog id="dlgScan"></ui5-barcode-scanner-dialog>
        <ui5-button id="btnScan" icon="camera" tooltip="Start Camera">Scan</ui5-button>
        <div>
            <ui5-label id="scanResult"></ui5-label>
            <ui5-label id="scanError"></ui5-label>
        </div>
        <script>
            btnScan.addEventListener("click", function(event) {
                dlgScan.show();
            });
            dlgScan.addEventListener("scan-success", function(event) {
                scanResult.innerHTML = event.detail.text;
                dlgScan.close();
            });
            dlgScan.addEventListener("scan-error", function(event) {
                scanError.innerHTML = event.detail.message;
                dlgScan.close();
            });
        <\/script>
    </div>
\``,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const U=["Template0"];export{e as Template0,U as __namedExportsOrder,C as default};
//# sourceMappingURL=BarcodeScannerDialog.stories.5b580f12.js.map
