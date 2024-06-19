import{x as e}from"./lit-html.7ac33e6b.js";import{D as _}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const j={previewItem:{control:{type:!1}},type:{control:"select",options:["Email","Number","Password","Tel","Text","URL"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"}},"suggestion-item-preview":{description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The previewed suggestion item."},{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the suggestion item."}]}},"suggestion-item-select":{description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The selected item."}]}}},N={package:"@ui5/webcomponents"};var c=Object.freeze,O=Object.defineProperty,u=(l,M)=>c(O(l,"raw",{value:c(M||l.slice())})),d,p,m;const g="ui5-input",ee={title:"Main/Input",component:g,subcomponents:{SuggestionItem:"ui5-suggestion-item",SuggestionGroupItem:"ui5-suggestion-group-item"},parameters:{docs:{page:_({...N,component:g})}},argTypes:j},a=()=>e`
<h3>Basic Input</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon="" value="Input"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" readonly="" value="readonly Input"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" disabled="" value="Disabled Input"></ui5-input>
    </div>
`,n=()=>e(d||(d=u([`
<h3>Input With Suggestions (note: the usage depends on the framework you are using)</h3>
    <div class="snippet">
        <ui5-input id="suggestions-input" placeholder="Start typing country name" show-suggestions="" show-clear-icon=""></ui5-input>
        <script>
            var input = document.getElementById("suggestions-input");
            var ui5_database_entries = ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
    "England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];
            input.addEventListener("input", function(event) {
                var value = input.value;
                var suggestionItems = [];
                if (value) {
                    suggestionItems = ui5_database_entries.filter(function (item) {
                        return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
                    });
                }
                [].slice.call(input.children).forEach(function(child) {
                    input.removeChild(child);
                });
                suggestionItems.forEach(function(item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.icon = "world";
                    li.additionalText = "explore";
                    li.additionalTextState = "Success";
                    li.description = "travel the world";
                    li.text = item;
                    input.appendChild(li);
                });
            });
        <\/script>
    </div>
`])));n.parameters={docs:{story:{inline:!1}}};const s=()=>e`
<h3>Input with Value State</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Success" value-state="Success"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Warning" value-state="Warning"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Error" value-state="Error"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
    </div>
`,t=()=>e(p||(p=u([`
<h3>Input with Suggestions and Value State message</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" id="value-state-suggestions" placeholder="Start typing country name" show-suggestions="" value-state="Warning">
        </ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" placeholder="Choose content density" show-suggestions="" value-state="Error">
            <div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>
            <ui5-li>Cozy</ui5-li>
            <ui5-li>Compact</ui5-li>
            <ui5-li>Condensed</ui5-li>
        </ui5-input>
        <script>
            var ui5_database_entries =  ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
"England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];
            var oInput = document.getElementById("value-state-suggestions");
            oInput.addEventListener("input", function(event) {
                var value = event.target.value;
                var suggestionItems = [];
                if (value) {
                    suggestionItems = ui5_database_entries.filter(function (item) {
                        return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
                    });
                }
                [].slice.call(oInput.children).forEach(function(child) {
                    oInput.removeChild(child);
                });
                suggestionItems.forEach(function(item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.icon = "world";
                    li.id = item;
                    li.text = item;
                    oInput.appendChild(li);
                });
            });
        <\/script>
    </div>
<section>
    <h3>Input as Search Field</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
                <ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
            </ui5-input>
        </div>
    </div>
</section>
<section>
    <h3>Input with Label</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
            <ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
        </div>
        <div class="flex-column">
            <ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
            <ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
        </div>
    </div>
</section>
<script>
    var searchCriteria = "PASTA";
    searchIcon.addEventListener("click", function(){
        alert("Look for: " + searchCriteria);
    });
    searchInput.addEventListener("input", function(e){
        searchCriteria = e.target.value;
    });
<\/script>
<section>
    <h3>Input With Value Help Dialog</h3>
    <div class="snippet">
        <ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
            <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
        </ui5-input>
        <ui5-dialog id="dialog" accessible-name="Products Value Help">
            <div slot="header" id="dialogHeader">
                <div id="titleBar">
                    <h2 id="headerTitle">Products</h2>
                    <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
                </div>
                <ui5-input id="dialogSearchInput" placeholder="Search">
                    <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
                </ui5-input>
            </div>
            <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
            <div slot="footer" id="footer">
                <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
            </div>
        </ui5-dialog>
        <script>
            valueHelpInput.addEventListener("input", loadSuggestions);
            valueHelpIcon.addEventListener("click", showDialog);
            dialogSearchInput.addEventListener("change", loadList);
            dialogSearchIcon.addEventListener("click", loadList);
            clearButton.addEventListener("click", clearQuery);
            cancelButton.addEventListener("click", closeDialog);
            itemsList.addEventListener("item-click", handleItemClick);
            async function loadSuggestions() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = valueHelpInput.value.toLowerCase();
                var suggestionItems = [];
                if (query) {
                    suggestionItems = products
                        .filter(function (product) {
                            return product.name.toLowerCase().indexOf(query) === 0;
                        })
                        .map(function (product) {
                            return product.name;
                        })
                        .sort(function (a, b) {
                            return a.localeCompare(b);
                        })
                        .slice(0, 10);
                }
                [].slice.call(valueHelpInput.children, 1).forEach(function (item) {
                    valueHelpInput.removeChild(item);
                });
                suggestionItems.forEach(function (item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.text = item;
                    valueHelpInput.appendChild(li);
                });
            }
            function showDialog() {
                dialogSearchInput.value = valueHelpInput.value;
                loadList();
                if (screen.width <= 768) {
                    dialog.setAttribute("stretch", "");
                }
                dialog.show();
                // Required by UX as the VH dialog's popup content has no padding in UI5.
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
            }
            function closeDialog() {
                dialog.close();
            }
            async function loadList() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = dialogSearchInput.value.toLowerCase();
                itemsList.innerHTML = "";
                products
                    .filter(function (product) {
                        return product.name.toLowerCase().indexOf(query) === 0;
                    })
                    .sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    })
                    .forEach(function (item) {
                        var li = document.createElement("ui5-li");
                        li.innerHTML = item.name;
                        li.image = item.productPicUrl;
                        li.description = item.productId;
                        itemsList.appendChild(li);
                    });
            }
            function handleItemClick(event) {
                var item = event.detail.item;
                valueHelpInput.setAttribute("value", item.innerHTML);
                dialog.close();
            }
            function clearQuery() {
                dialogSearchInput.setAttribute("value", "");
                loadList();
            }
        <\/script>
    </div>
</section>
<!-- JSDoc marker -->
`])));t.parameters={docs:{story:{inline:!1}}};const o=()=>e`
<h3>Input as Search Field</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
                <ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
            </ui5-input>
        </div>
    </div>
`,r=()=>e`
<h3>Input with Label</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
            <ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
        </div>
        <div class="flex-column">
            <ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
            <ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
        </div>
    </div>
`,i=()=>e(m||(m=u([`
<h3>Input With Value Help Dialog</h3>
    <div class="snippet">
        <ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
            <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
        </ui5-input>
        <ui5-dialog id="dialog" accessible-name="Products Value Help">
            <div slot="header" id="dialogHeader">
                <div id="titleBar">
                    <h2 id="headerTitle">Products</h2>
                    <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
                </div>
                <ui5-input id="dialogSearchInput" placeholder="Search">
                    <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
                </ui5-input>
            </div>
            <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
            <div slot="footer" id="footer">
                <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
            </div>
        </ui5-dialog>
        <script>
            valueHelpInput.addEventListener("input", loadSuggestions);
            valueHelpIcon.addEventListener("click", showDialog);
            dialogSearchInput.addEventListener("change", loadList);
            dialogSearchIcon.addEventListener("click", loadList);
            clearButton.addEventListener("click", clearQuery);
            cancelButton.addEventListener("click", closeDialog);
            itemsList.addEventListener("item-click", handleItemClick);
            async function loadSuggestions() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = valueHelpInput.value.toLowerCase();
                var suggestionItems = [];
                if (query) {
                    suggestionItems = products
                        .filter(function (product) {
                            return product.name.toLowerCase().indexOf(query) === 0;
                        })
                        .map(function (product) {
                            return product.name;
                        })
                        .sort(function (a, b) {
                            return a.localeCompare(b);
                        })
                        .slice(0, 10);
                }
                [].slice.call(valueHelpInput.children, 1).forEach(function (item) {
                    valueHelpInput.removeChild(item);
                });
                suggestionItems.forEach(function (item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.text = item;
                    valueHelpInput.appendChild(li);
                });
            }
            function showDialog() {
                dialogSearchInput.value = valueHelpInput.value;
                loadList();
                if (screen.width <= 768) {
                    dialog.setAttribute("stretch", "");
                }
                dialog.show();
                // Required by UX as the VH dialog's popup content has no padding in UI5.
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
            }
            function closeDialog() {
                dialog.close();
            }
            async function loadList() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = dialogSearchInput.value.toLowerCase();
                itemsList.innerHTML = "";
                products
                    .filter(function (product) {
                        return product.name.toLowerCase().indexOf(query) === 0;
                    })
                    .sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    })
                    .forEach(function (item) {
                        var li = document.createElement("ui5-li");
                        li.innerHTML = item.name;
                        li.image = item.productPicUrl;
                        li.description = item.productId;
                        itemsList.appendChild(li);
                    });
            }
            function handleItemClick(event) {
                var item = event.detail.item;
                valueHelpInput.setAttribute("value", item.innerHTML);
                dialog.close();
            }
            function clearQuery() {
                dialogSearchInput.setAttribute("value", "");
                loadList();
            }
        <\/script>
    </div>
`])));i.parameters={docs:{story:{inline:!1}}};var v,h,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
<h3>Basic Input</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon="" value="Input"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" readonly="" value="readonly Input"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" disabled="" value="Disabled Input"></ui5-input>
    </div>
\``,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,y,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => html\`
<h3>Input With Suggestions (note: the usage depends on the framework you are using)</h3>
    <div class="snippet">
        <ui5-input id="suggestions-input" placeholder="Start typing country name" show-suggestions="" show-clear-icon=""></ui5-input>
        <script>
            var input = document.getElementById("suggestions-input");
            var ui5_database_entries = ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
    "England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];
            input.addEventListener("input", function(event) {
                var value = input.value;
                var suggestionItems = [];
                if (value) {
                    suggestionItems = ui5_database_entries.filter(function (item) {
                        return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
                    });
                }
                [].slice.call(input.children).forEach(function(child) {
                    input.removeChild(child);
                });
                suggestionItems.forEach(function(item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.icon = "world";
                    li.additionalText = "explore";
                    li.additionalTextState = "Success";
                    li.description = "travel the world";
                    li.text = item;
                    input.appendChild(li);
                });
            });
        <\/script>
    </div>
\``,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,L,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => html\`
<h3>Input with Value State</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Success" value-state="Success"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Warning" value-state="Warning"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Error" value-state="Error"></ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
    </div>
\``,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var E,C,H;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`() => html\`
<h3>Input with Suggestions and Value State message</h3>
    <div class="snippet">
        <ui5-input class="samples-margin samples-responsive-margin-bottom" id="value-state-suggestions" placeholder="Start typing country name" show-suggestions="" value-state="Warning">
        </ui5-input>
        <ui5-input class="samples-margin samples-responsive-margin-bottom" placeholder="Choose content density" show-suggestions="" value-state="Error">
            <div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>
            <ui5-li>Cozy</ui5-li>
            <ui5-li>Compact</ui5-li>
            <ui5-li>Condensed</ui5-li>
        </ui5-input>
        <script>
            var ui5_database_entries =  ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
"England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];
            var oInput = document.getElementById("value-state-suggestions");
            oInput.addEventListener("input", function(event) {
                var value = event.target.value;
                var suggestionItems = [];
                if (value) {
                    suggestionItems = ui5_database_entries.filter(function (item) {
                        return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
                    });
                }
                [].slice.call(oInput.children).forEach(function(child) {
                    oInput.removeChild(child);
                });
                suggestionItems.forEach(function(item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.icon = "world";
                    li.id = item;
                    li.text = item;
                    oInput.appendChild(li);
                });
            });
        <\/script>
    </div>
<section>
    <h3>Input as Search Field</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
                <ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
            </ui5-input>
        </div>
    </div>
</section>
<section>
    <h3>Input with Label</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
            <ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
        </div>
        <div class="flex-column">
            <ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
            <ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
        </div>
    </div>
</section>
<script>
    var searchCriteria = "PASTA";
    searchIcon.addEventListener("click", function(){
        alert("Look for: " + searchCriteria);
    });
    searchInput.addEventListener("input", function(e){
        searchCriteria = e.target.value;
    });
<\/script>
<section>
    <h3>Input With Value Help Dialog</h3>
    <div class="snippet">
        <ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
            <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
        </ui5-input>
        <ui5-dialog id="dialog" accessible-name="Products Value Help">
            <div slot="header" id="dialogHeader">
                <div id="titleBar">
                    <h2 id="headerTitle">Products</h2>
                    <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
                </div>
                <ui5-input id="dialogSearchInput" placeholder="Search">
                    <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
                </ui5-input>
            </div>
            <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
            <div slot="footer" id="footer">
                <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
            </div>
        </ui5-dialog>
        <script>
            valueHelpInput.addEventListener("input", loadSuggestions);
            valueHelpIcon.addEventListener("click", showDialog);
            dialogSearchInput.addEventListener("change", loadList);
            dialogSearchIcon.addEventListener("click", loadList);
            clearButton.addEventListener("click", clearQuery);
            cancelButton.addEventListener("click", closeDialog);
            itemsList.addEventListener("item-click", handleItemClick);
            async function loadSuggestions() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = valueHelpInput.value.toLowerCase();
                var suggestionItems = [];
                if (query) {
                    suggestionItems = products
                        .filter(function (product) {
                            return product.name.toLowerCase().indexOf(query) === 0;
                        })
                        .map(function (product) {
                            return product.name;
                        })
                        .sort(function (a, b) {
                            return a.localeCompare(b);
                        })
                        .slice(0, 10);
                }
                [].slice.call(valueHelpInput.children, 1).forEach(function (item) {
                    valueHelpInput.removeChild(item);
                });
                suggestionItems.forEach(function (item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.text = item;
                    valueHelpInput.appendChild(li);
                });
            }
            function showDialog() {
                dialogSearchInput.value = valueHelpInput.value;
                loadList();
                if (screen.width <= 768) {
                    dialog.setAttribute("stretch", "");
                }
                dialog.show();
                // Required by UX as the VH dialog's popup content has no padding in UI5.
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
            }
            function closeDialog() {
                dialog.close();
            }
            async function loadList() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = dialogSearchInput.value.toLowerCase();
                itemsList.innerHTML = "";
                products
                    .filter(function (product) {
                        return product.name.toLowerCase().indexOf(query) === 0;
                    })
                    .sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    })
                    .forEach(function (item) {
                        var li = document.createElement("ui5-li");
                        li.innerHTML = item.name;
                        li.image = item.productPicUrl;
                        li.description = item.productId;
                        itemsList.appendChild(li);
                    });
            }
            function handleItemClick(event) {
                var item = event.detail.item;
                valueHelpInput.setAttribute("value", item.innerHTML);
                dialog.close();
            }
            function clearQuery() {
                dialogSearchInput.setAttribute("value", "");
                loadList();
            }
        <\/script>
    </div>
</section>
<!-- JSDoc marker -->
\``,...(H=(C=t.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var x,T,q;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => html\`
<h3>Input as Search Field</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
                <ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
            </ui5-input>
        </div>
    </div>
\``,...(q=(T=o.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var k,A,P;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => html\`
<h3>Input with Label</h3>
    <div class="snippet">
        <div class="flex-column samples-margin">
            <ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
            <ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
        </div>
        <div class="flex-column">
            <ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
            <ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
        </div>
    </div>
\``,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var D,U,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => html\`
<h3>Input With Value Help Dialog</h3>
    <div class="snippet">
        <ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
            <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
        </ui5-input>
        <ui5-dialog id="dialog" accessible-name="Products Value Help">
            <div slot="header" id="dialogHeader">
                <div id="titleBar">
                    <h2 id="headerTitle">Products</h2>
                    <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
                </div>
                <ui5-input id="dialogSearchInput" placeholder="Search">
                    <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
                </ui5-input>
            </div>
            <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
            <div slot="footer" id="footer">
                <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
            </div>
        </ui5-dialog>
        <script>
            valueHelpInput.addEventListener("input", loadSuggestions);
            valueHelpIcon.addEventListener("click", showDialog);
            dialogSearchInput.addEventListener("change", loadList);
            dialogSearchIcon.addEventListener("click", loadList);
            clearButton.addEventListener("click", clearQuery);
            cancelButton.addEventListener("click", closeDialog);
            itemsList.addEventListener("item-click", handleItemClick);
            async function loadSuggestions() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = valueHelpInput.value.toLowerCase();
                var suggestionItems = [];
                if (query) {
                    suggestionItems = products
                        .filter(function (product) {
                            return product.name.toLowerCase().indexOf(query) === 0;
                        })
                        .map(function (product) {
                            return product.name;
                        })
                        .sort(function (a, b) {
                            return a.localeCompare(b);
                        })
                        .slice(0, 10);
                }
                [].slice.call(valueHelpInput.children, 1).forEach(function (item) {
                    valueHelpInput.removeChild(item);
                });
                suggestionItems.forEach(function (item) {
                    var li = document.createElement("ui5-suggestion-item");
                    li.text = item;
                    valueHelpInput.appendChild(li);
                });
            }
            function showDialog() {
                dialogSearchInput.value = valueHelpInput.value;
                loadList();
                if (screen.width <= 768) {
                    dialog.setAttribute("stretch", "");
                }
                dialog.show();
                // Required by UX as the VH dialog's popup content has no padding in UI5.
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
                dialog.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
            }
            function closeDialog() {
                dialog.close();
            }
            async function loadList() {
                var response = await fetch("../assets/data/products.json");
                var products = await response.json();
                var query = dialogSearchInput.value.toLowerCase();
                itemsList.innerHTML = "";
                products
                    .filter(function (product) {
                        return product.name.toLowerCase().indexOf(query) === 0;
                    })
                    .sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    })
                    .forEach(function (item) {
                        var li = document.createElement("ui5-li");
                        li.innerHTML = item.name;
                        li.image = item.productPicUrl;
                        li.description = item.productId;
                        itemsList.appendChild(li);
                    });
            }
            function handleItemClick(event) {
                var item = event.detail.item;
                valueHelpInput.setAttribute("value", item.innerHTML);
                dialog.close();
            }
            function clearQuery() {
                dialogSearchInput.setAttribute("value", "");
                loadList();
            }
        <\/script>
    </div>
\``,...(B=(U=i.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const ne=["Template0","Template1","Template2","Template3","Template4","Template5","Template6"];export{a as Template0,n as Template1,s as Template2,t as Template3,o as Template4,r as Template5,i as Template6,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Input.stories.aa3741d7.js.map