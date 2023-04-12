import{x as a}from"./lit-html.7ac33e6b.js";import{D as u}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const p={filterItems:{control:{type:"text"}},sortItems:{control:{type:"text"}},setConfirmedSettings:{description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>',table:{category:"methods"},UI5CustomData:{parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}]}},show:{description:"Shows the dialog.",table:{category:"methods"}},cancel:{description:"Fired when cancel button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filterItems",type:"Array",description:"The selected filters items."}]}},confirm:{description:"Fired when confirmation button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filterItems",type:"Array",description:"The selected filters items."}]}}},d={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var i=Object.freeze,c=Object.defineProperty,f=(e,m)=>i(c(e,"raw",{value:i(m||e.slice())})),o;const s="ui5-view-settings-dialog",C={title:"Fiori/ViewSettingsDialog",component:s,subcomponents:{SortItem:"ui5-sort-item",FilterItem:"ui5-filter-item",FilterItemOption:"ui5-filter-item-option"},parameters:{docs:{page:u({...d,component:s})}},argTypes:p},t=()=>a(o||(o=f([`
<h3>Usage</h3>
    <div class="snippet">
        <ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
        <ui5-view-settings-dialog id="vsd1">
                <ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>
                <ui5-filter-item slot="filterItems" text="Position">
                    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Department">
                    <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Location">
                    <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Reports to">
                    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
                </ui5-filter-item>
            </ui5-view-settings-dialog>
        <br/>
        <br/>
        <div id="vsdResults"></div>
    </div>
    <script>
        var vsdResults = document.getElementById("vsdResults");
        btnOpenDialog1.addEventListener("click", function () {
            vsdResults.innerHTML = "";
            vsd1.show();
        });
        vsd1.addEventListener("confirm", function(evt) {
            vsdResults.innerHTML = JSON.stringify(evt.detail);
        });
    <\/script>
`])));t.parameters={docs:{story:{inline:!1}}};var n,r,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => html\`
<h3>Usage</h3>
    <div class="snippet">
        <ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
        <ui5-view-settings-dialog id="vsd1">
                <ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
                <ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>
                <ui5-filter-item slot="filterItems" text="Position">
                    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Department">
                    <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Location">
                    <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
                </ui5-filter-item>
                <ui5-filter-item slot="filterItems" text="Reports to">
                    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
                    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
                </ui5-filter-item>
            </ui5-view-settings-dialog>
        <br/>
        <br/>
        <div id="vsdResults"></div>
    </div>
    <script>
        var vsdResults = document.getElementById("vsdResults");
        btnOpenDialog1.addEventListener("click", function () {
            vsdResults.innerHTML = "";
            vsd1.show();
        });
        vsd1.addEventListener("confirm", function(evt) {
            vsdResults.innerHTML = JSON.stringify(evt.detail);
        });
    <\/script>
\``,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const L=["Template0"];export{t as Template0,L as __namedExportsOrder,C as default};
//# sourceMappingURL=ViewSettingsDialog.stories.60b2500d.js.map
