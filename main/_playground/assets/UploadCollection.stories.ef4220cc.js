import{x as o}from"./lit-html.7ac33e6b.js";import{D as B}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const E={default:{control:{type:"text"}},header:{control:{type:"text"}},drop:{description:"Fired when an element is dropped inside the drag and drop overlay. <br><br> <b>Note:</b> The <code>drop</code> event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the <code>ui5-upload-collection</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"dataTransfer",type:"DataTransfer",description:"The <code>drop</code> event operation data."}]}},"item-delete":{description:"Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the <code>ui5-upload-collection</code> <code>mode</code> property is set to <code>Delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The <code>ui5-upload-collection-item</code> which was renamed."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItems",type:"Array",description:"An array of the selected items."}]}}},L={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.7"};var d=Object.freeze,H=Object.defineProperty,l=(a,x)=>d(H(a,"raw",{value:d(x||a.slice())})),c,p,s,r;const u="ui5-upload-collection",k={title:"Fiori/UploadCollection",component:u,subcomponents:{UploadCollectionItem:"ui5-upload-collection-item"},parameters:{docs:{page:B({...L,component:u})}},argTypes:E},e=()=>o(c||(c=l([`
<h3>UploadCollection</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollection" mode="Delete" accessible-name="Uploaded (2)">
            <div slot="header" class="header">
                <ui5-title>Uploaded (2)</ui5-title>
                <ui5-label>Add new files and press to start uploading pending files:</ui5-label>
                <ui5-button id="startUploading">Start</ui5-button>
                <div class="spacer"></div>
                <ui5-file-uploader id="fileUploader" hide-input="" multiple="">
                    <ui5-button icon="add" design="Transparent"></ui5-button>
                </ui5-file-uploader>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt" upload-state="Complete">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB \xB7
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            function createThumbnail(fileName) {
                var icon = document.createElement("ui5-icon");
                icon.name = "document";
                icon.slot = "thumbnail";
                return icon;
            }
            function createUCI(file) {
                var uci = document.createElement("ui5-upload-collection-item");
                    description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);
                uci.appendChild(createThumbnail(file.name));
                uci.appendChild(description);
                uci.file = file;
                uci.fileName = file.name;
                return uci;
            }
            fileUploader.addEventListener("change", function(event) {
                var files = event.detail.files;
                for (var i = 0; i < files.length; i++) {
                    uploadCollection.appendChild(createUCI(files[i]));
                }
            });
            startUploading.addEventListener("click", function(event) {
                uploadCollection.items.forEach(function(item) {
                    // if there is a file ready to be uploaded send request
                    if (item.uploadState === "Ready" && item.file) {
                        var oXHR = new XMLHttpRequest();
                        oXHR.open("POST", "/upload", true);
                        oXHR.onreadystatechange = function () {
                            if (this.status !== 200) {
                                item.uploadState = "Error";
                            }
                        };
                        oXHR.send(item.file);
                        item.uploadState="Uploading";
                    }
                });
            });
            uploadCollection.addEventListener("ui5-item-delete", function (event) {
                    uploadCollection.removeChild(event.detail.item)
            });
        <\/script>
    </div>
`])));e.parameters={docs:{story:{inline:!1}}};const t=()=>o(p||(p=l([`
<h3>UploadCollection With File Renaming Enabled</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionWithRenaming">
            <div slot="header" class="header">
                <ui5-title>Attachments(2)</ui5-title>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" type="Detail" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt" type="Detail" upload-state="Complete">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB \xB7
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            uploadCollectionWithRenaming.addEventListener("rename", function(event) {
                alert("Rename event:" + event.target.fileName)
            });
        <\/script>
    </div>
`])));t.parameters={docs:{story:{inline:!1}}};const n=()=>o(s||(s=l([`
<h3>UploadCollection With Different Uploading States of Items</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionStates">
            <div class="header" slot="header">
                <ui5-title>Upload States</ui5-title>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                uploadState="Complete"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Laptop.jpg" upload-state="Uploading" progress="37">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                uploadState="Uploading"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="latest.reports.pdf" upload-state="Error" progress="59">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                uploadState="Error"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                uploadState="Ready" (default)
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            uploadCollectionStates.addEventListener("retry", function(event) {
                alert("Retry uploading: " + event.target.fileName);
            });
            uploadCollectionStates.addEventListener("terminate", function(event) {
                alert("Terminate uploading of: " + event.target.fileName);
            });
        <\/script>
    </div>
`])));n.parameters={docs:{story:{inline:!1}}};const i=()=>o(r||(r=l([`
<h3>UploadCollection With Drag and Drop and No Initial Data</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionDnD" style="height: 30rem;">
            <div class="header" slot="header">
                <ui5-title>Attachments</ui5-title>
            </div>
        </ui5-upload-collection>
        <script>
            uploadCollectionDnD.addEventListener("drop", function(event) {
                event.preventDefault();
                var files = event.dataTransfer.files;
                // Take the files from the drop event and create <ui5-upload-collection-item> from them
                for (var i = 0; i < files.length; i++) {
                    uci = createUCI(files[i]);
                    uploadCollectionDnD.appendChild(uci)
                }
            });
        <\/script>
    </div>
`])));i.parameters={docs:{story:{inline:!1}}};var m,f,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
<h3>UploadCollection</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollection" mode="Delete" accessible-name="Uploaded (2)">
            <div slot="header" class="header">
                <ui5-title>Uploaded (2)</ui5-title>
                <ui5-label>Add new files and press to start uploading pending files:</ui5-label>
                <ui5-button id="startUploading">Start</ui5-button>
                <div class="spacer"></div>
                <ui5-file-uploader id="fileUploader" hide-input="" multiple="">
                    <ui5-button icon="add" design="Transparent"></ui5-button>
                </ui5-file-uploader>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt" upload-state="Complete">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB \xB7
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            function createThumbnail(fileName) {
                var icon = document.createElement("ui5-icon");
                icon.name = "document";
                icon.slot = "thumbnail";
                return icon;
            }
            function createUCI(file) {
                var uci = document.createElement("ui5-upload-collection-item");
                    description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);
                uci.appendChild(createThumbnail(file.name));
                uci.appendChild(description);
                uci.file = file;
                uci.fileName = file.name;
                return uci;
            }
            fileUploader.addEventListener("change", function(event) {
                var files = event.detail.files;
                for (var i = 0; i < files.length; i++) {
                    uploadCollection.appendChild(createUCI(files[i]));
                }
            });
            startUploading.addEventListener("click", function(event) {
                uploadCollection.items.forEach(function(item) {
                    // if there is a file ready to be uploaded send request
                    if (item.uploadState === "Ready" && item.file) {
                        var oXHR = new XMLHttpRequest();
                        oXHR.open("POST", "/upload", true);
                        oXHR.onreadystatechange = function () {
                            if (this.status !== 200) {
                                item.uploadState = "Error";
                            }
                        };
                        oXHR.send(item.file);
                        item.uploadState="Uploading";
                    }
                });
            });
            uploadCollection.addEventListener("ui5-item-delete", function (event) {
                    uploadCollection.removeChild(event.detail.item)
            });
        <\/script>
    </div>
\``,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,g,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
<h3>UploadCollection With File Renaming Enabled</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionWithRenaming">
            <div slot="header" class="header">
                <ui5-title>Attachments(2)</ui5-title>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" type="Detail" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                Uploaded By: David Keane \xB7 Uploaded On: 2014-07-26 \xB7 File Size: 35 KB
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt" type="Detail" upload-state="Complete">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                Uploaded By: John Smith \xB7 Uploaded On: 2014-09-02 \xB7 File Size: 226.6 KB \xB7
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            uploadCollectionWithRenaming.addEventListener("rename", function(event) {
                alert("Rename event:" + event.target.fileName)
            });
        <\/script>
    </div>
\``,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,U,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => html\`
<h3>UploadCollection With Different Uploading States of Items</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionStates">
            <div class="header" slot="header">
                <ui5-title>Upload States</ui5-title>
            </div>
            <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" upload-state="Complete">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                uploadState="Complete"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Laptop.jpg" upload-state="Uploading" progress="37">
                <img src="../assets/images/HT-1000.jpg" slot="thumbnail">
                uploadState="Uploading"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="latest.reports.pdf" upload-state="Error" progress="59">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                uploadState="Error"
            </ui5-upload-collection-item>
            <ui5-upload-collection-item file-name="Notes.txt">
                <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
                uploadState="Ready" (default)
            </ui5-upload-collection-item>
        </ui5-upload-collection>
        <script>
            uploadCollectionStates.addEventListener("retry", function(event) {
                alert("Retry uploading: " + event.target.fileName);
            });
            uploadCollectionStates.addEventListener("terminate", function(event) {
                alert("Terminate uploading of: " + event.target.fileName);
            });
        <\/script>
    </div>
\``,...(y=(U=n.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};var S,T,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => html\`
<h3>UploadCollection With Drag and Drop and No Initial Data</h3>
    <div class="snippet">
        <ui5-upload-collection id="uploadCollectionDnD" style="height: 30rem;">
            <div class="header" slot="header">
                <ui5-title>Attachments</ui5-title>
            </div>
        </ui5-upload-collection>
        <script>
            uploadCollectionDnD.addEventListener("drop", function(event) {
                event.preventDefault();
                var files = event.dataTransfer.files;
                // Take the files from the drop event and create <ui5-upload-collection-item> from them
                for (var i = 0; i < files.length; i++) {
                    uci = createUCI(files[i]);
                    uploadCollectionDnD.appendChild(uci)
                }
            });
        <\/script>
    </div>
\``,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const M=["Template0","Template1","Template2","Template3"];export{e as Template0,t as Template1,n as Template2,i as Template3,M as __namedExportsOrder,k as default};
//# sourceMappingURL=UploadCollection.stories.ef4220cc.js.map
