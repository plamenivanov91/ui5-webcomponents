import{x as i}from"./lit-html.7ac33e6b.js";import{D as S}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const y={default:{control:{type:"text"}},close:{description:"Closes the Menu.",table:{category:"methods"}},showAt:{description:"Shows the Menu near the opener element.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"before-close":{description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",table:{category:"events"},UI5CustomData:{parameters:[{name:"escPressed",type:"boolean",description:"Indicates that <code>ESC</code> key has triggered the event."}]}},"item-click":{description:"Fired when an item is being clicked.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"object",description:"The currently clicked menu item."},{name:"text",type:"string",description:"The text of the currently clicked menu item."}]}}},g={package:"@ui5/webcomponents",since:"1.3.0"};var o=Object.freeze,C=Object.defineProperty,u=(m,w)=>o(C(m,"raw",{value:o(w||m.slice())})),s,a,r;const c="ui5-menu",I={title:"Main/Menu",component:c,subcomponents:{MenuItem:"ui5-menu-item"},parameters:{docs:{page:S({...g,component:c})}},argTypes:y},e=()=>i(s||(s=u([`
<h3>Basic Menu</h3>
    <div class="snippet">
        <ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuBasic">
            <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenBasic.addEventListener("click", function(event) {
                menuBasic.showAt(btnOpenBasic);
            });
        <\/script>
    </div>
`])));e.parameters={docs:{story:{inline:!1}}};const n=()=>i(a||(a=u([`
<h3>Menu with Sub-menu items</h3>
    <div class="snippet">
        <ui5-button id="btnOpenSubs">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuSubs">
            <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section="">
                <ui5-menu-item text="Open Locally" icon="open-folder">
                    <ui5-menu-item text="Open from C"></ui5-menu-item>
                    <ui5-menu-item text="Open from D"></ui5-menu-item>
                    <ui5-menu-item text="Open from E"></ui5-menu-item>
                </ui5-menu-item>
                <ui5-menu-item text="Open from Cloud"></ui5-menu-item>
            </ui5-menu-item>
            <ui5-menu-item text="Save" icon="save">
                <ui5-menu-item text="Save Locally" icon="save">
                    <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
                    <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
                    <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
                </ui5-menu-item>
                <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
            </ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenSubs.addEventListener("click", function(event) {
                menuSubs.showAt(btnOpenSubs);
            });
        <\/script>
    </div>
`])));n.parameters={docs:{story:{inline:!1}}};const t=()=>i(r||(r=u([`
<h3>Menu with additional text on menu items</h3>
    <div class="snippet">
        <ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuAdditionalText">
            <ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenAdditionalText.addEventListener("click", function(event) {
                menuAdditionalText.showAt(btnOpenAdditionalText);
            });
        <\/script>
    </div>
`])));t.parameters={docs:{story:{inline:!1}}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => html\`
<h3>Basic Menu</h3>
    <div class="snippet">
        <ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuBasic">
            <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenBasic.addEventListener("click", function(event) {
                menuBasic.showAt(btnOpenBasic);
            });
        <\/script>
    </div>
\``,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,b,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => html\`
<h3>Menu with Sub-menu items</h3>
    <div class="snippet">
        <ui5-button id="btnOpenSubs">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuSubs">
            <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section="">
                <ui5-menu-item text="Open Locally" icon="open-folder">
                    <ui5-menu-item text="Open from C"></ui5-menu-item>
                    <ui5-menu-item text="Open from D"></ui5-menu-item>
                    <ui5-menu-item text="Open from E"></ui5-menu-item>
                </ui5-menu-item>
                <ui5-menu-item text="Open from Cloud"></ui5-menu-item>
            </ui5-menu-item>
            <ui5-menu-item text="Save" icon="save">
                <ui5-menu-item text="Save Locally" icon="save">
                    <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
                    <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
                    <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
                </ui5-menu-item>
                <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
            </ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenSubs.addEventListener("click", function(event) {
                menuSubs.showAt(btnOpenSubs);
            });
        <\/script>
    </div>
\``,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,h,O;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
<h3>Menu with additional text on menu items</h3>
    <div class="snippet">
        <ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br/>
        <ui5-menu id="menuAdditionalText">
            <ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
            <ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
            <ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Close"></ui5-menu-item>
            <ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
            <ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>
        </ui5-menu>
        <script>
            btnOpenAdditionalText.addEventListener("click", function(event) {
                menuAdditionalText.showAt(btnOpenAdditionalText);
            });
        <\/script>
    </div>
\``,...(O=(h=t.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const U=["Template0","Template1","Template2"];export{e as Template0,n as Template1,t as Template2,U as __namedExportsOrder,I as default};
//# sourceMappingURL=Menu.stories.47a18c3d.js.map
