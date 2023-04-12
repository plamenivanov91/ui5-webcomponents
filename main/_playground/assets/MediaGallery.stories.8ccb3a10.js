import{x as i}from"./lit-html.7ac33e6b.js";import{o as U}from"./unsafe-html.ba9f7887.js";import{l as a}from"./if-defined.f53f1284.js";import{D as B}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const P={layout:{control:"select",options:["Auto","Horizontal","Vertical"]},menuHorizontalAlign:{control:"select",options:["Left","Right"]},menuVerticalAlign:{control:"select",options:["Bottom","Top"]},default:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the selected item."}]}}},k={package:"@ui5/webcomponents-fiori",since:"1.1.0"};var d=Object.freeze,O=Object.defineProperty,R=(e,I)=>d(O(e,"raw",{value:d(I||e.slice())})),o;const c="ui5-media-gallery",re={title:"Fiori/MediaGallery",component:c,subcomponents:{MediaGalleryItem:"ui5-media-gallery-item"},parameters:{docs:{page:B({...k,component:c})}},argTypes:P},F=e=>i`<ui5-media-gallery
        ?show-all-thumbnails="${a(e.showAllThumbnails)}"
        ?interactive-display-area="${a(e.interactiveDisplayArea)}"
        layout="${a(e.layout)}"
        menu-horizontal-align="${a(e.menuHorizontalAlign)}"
        menu-vertical-align="${a(e.menuVerticalAlign)}"
    >
        ${U(e.default)}
    </ui5-media-gallery>`,s=F.bind({});s.args={showAllThumbnails:!0,default:`
    ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const t=()=>i`
    <h3>MediaGallery with vertical layout</h3>
    <div class="snippet">
        <ui5-media-gallery show-all-thumbnails="" layout="Vertical">
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1022.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1030.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2002.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2026.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,m=()=>i`
    <h3>MediaGallery with thumbnails on the right</h3>
    <div class="snippet">
        <ui5-media-gallery
            show-all-thumbnails=""
            layout="Horizontal"
            menu-horizontal-align="Right"
        >
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1022.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1030.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2002.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2026.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,r=()=>i`
    <h3>MediaGallery item with separate image for its thumbnail</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
                <img
                    src="../assets/images/HT-1000-small.jpg"
                    slot="thumbnail"
                />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,n=()=>i`
    <h3>MediaGallery item with video content</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item layout="Wide">
                <iframe
                    src="https://www.youtube.com/embed/GxGZG2fv6Aw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                ></iframe>
                <img
                    src="../assets/images/sap-logo-square.svg"
                    slot="thumbnail"
                    alt="SAP Video"
                />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,g=()=>i`
    <h3>MediaGallery with disabled content</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item disabled="">
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,u=()=>i`
    <h3>MediaGallery with initially selected item</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item selected="">
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
`,l=()=>i(o||(o=R([`
    <h3>MediaGallery with thumbnails overflow</h3>
    <div class="snippet">
        <div class="container">
            <ui5-media-gallery id="mediaGallery" interactive-display-area="">
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1000.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1010.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1022.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1030.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2002.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2026.jpg" />
                </ui5-media-gallery-item>
            </ui5-media-gallery>
            <div class="details">
                <ui5-title level="H1">Item Details</ui5-title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quam lectus, tristique semper mi et, faucibus viverra metus.
                Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.
                Morbi congue diam id enim porttitor, sit amet placerat nunc
                pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam
                erat volutpat. Vestibulum et enim sit amet ipsum tincidunt
                aliquet nec in dui. Sed dui est, hendrerit non sollicitudin
                quis, venenatis vel libero. Suspendisse sit amet lorem posuere,
                egestas neque eget, sodales ipsum. Donec sollicitudin leo ut
                risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,
                viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.
                Aliquam fermentum nec felis sit amet tristique. Nunc luctus a
                lacus non semper. Curabitur euismod tellus id massa mattis, in
                consectetur mi luctus. Mauris dignissim efficitur lobortis.
                Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus
                nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
            </div>
        </div>
        <ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
            <ui5-bar design="Header" slot="header">
                <ui5-label>Item</ui5-label>
            </ui5-bar>
            <ui5-media-gallery show-all-thumbnails="">
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1000.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1010.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1022.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1030.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2002.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2026.jpg" />
                </ui5-media-gallery-item>
            </ui5-media-gallery>
            <div slot="footer" class="dialog-footer">
                <div style="flex: 1;"></div>
                <ui5-button id="closeDialogButton">Close</ui5-button>
            </div>
        </ui5-dialog>
        <style>
            @media (min-width: 1024px) {
                .container {
                    display: grid;
                    gap: 1rem;
                    grid-template-columns: 1fr 1fr;
                }
            }
        </style>
        <script>
            closeDialogButton.addEventListener("click", function () {
                mediaGalleryDialog.close();
            });
            mediaGallery.addEventListener("overflow-click", function (event) {
                mediaGalleryDialog.show();
            });
            mediaGallery.addEventListener(
                "display-area-click",
                function (event) {
                    mediaGalleryDialog.show();
                }
            );
        <\/script>
    </div>
`])));l.parameters={docs:{story:{inline:!1}}};var y,p,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-media-gallery\n        ?show-all-thumbnails="${ifDefined(args.showAllThumbnails)}"\n        ?interactive-display-area="${ifDefined(args.interactiveDisplayArea)}"\n        layout="${ifDefined(args.layout)}"\n        menu-horizontal-align="${ifDefined(args.menuHorizontalAlign)}"\n        menu-vertical-align="${ifDefined(args.menuVerticalAlign)}"\n    >\n        ${unsafeHTML(args.default)}\n    </ui5-media-gallery>`',...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,T,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery with vertical layout</h3>
    <div class="snippet">
        <ui5-media-gallery show-all-thumbnails="" layout="Vertical">
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1022.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1030.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2002.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2026.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var H,j,b;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery with thumbnails on the right</h3>
    <div class="snippet">
        <ui5-media-gallery
            show-all-thumbnails=""
            layout="Horizontal"
            menu-horizontal-align="Right"
        >
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1022.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1030.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2002.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-2026.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(b=(j=m.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,G,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery item with separate image for its thumbnail</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
                <img
                    src="../assets/images/HT-1000-small.jpg"
                    slot="thumbnail"
                />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(D=(G=r.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var M,q,A;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery item with video content</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item layout="Wide">
                <iframe
                    src="https://www.youtube.com/embed/GxGZG2fv6Aw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                ></iframe>
                <img
                    src="../assets/images/sap-logo-square.svg"
                    slot="thumbnail"
                    alt="SAP Video"
                />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(A=(q=n.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var S,x,z;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery with disabled content</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item disabled="">
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(z=(x=g.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var V,$,L;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery with initially selected item</h3>
    <div class="snippet">
        <ui5-media-gallery>
            <ui5-media-gallery-item>
                <img src="../assets/images/HT-1000.jpg" />
            </ui5-media-gallery-item>
            <ui5-media-gallery-item selected="">
                <img src="../assets/images/HT-1010.jpg" />
            </ui5-media-gallery-item>
        </ui5-media-gallery>
    </div>
\``,...(L=($=u.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var E,_,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => html\`
    <h3>MediaGallery with thumbnails overflow</h3>
    <div class="snippet">
        <div class="container">
            <ui5-media-gallery id="mediaGallery" interactive-display-area="">
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1000.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1010.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1022.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1030.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2002.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2026.jpg" />
                </ui5-media-gallery-item>
            </ui5-media-gallery>
            <div class="details">
                <ui5-title level="H1">Item Details</ui5-title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quam lectus, tristique semper mi et, faucibus viverra metus.
                Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.
                Morbi congue diam id enim porttitor, sit amet placerat nunc
                pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam
                erat volutpat. Vestibulum et enim sit amet ipsum tincidunt
                aliquet nec in dui. Sed dui est, hendrerit non sollicitudin
                quis, venenatis vel libero. Suspendisse sit amet lorem posuere,
                egestas neque eget, sodales ipsum. Donec sollicitudin leo ut
                risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,
                viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.
                Aliquam fermentum nec felis sit amet tristique. Nunc luctus a
                lacus non semper. Curabitur euismod tellus id massa mattis, in
                consectetur mi luctus. Mauris dignissim efficitur lobortis.
                Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus
                nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
            </div>
        </div>
        <ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
            <ui5-bar design="Header" slot="header">
                <ui5-label>Item</ui5-label>
            </ui5-bar>
            <ui5-media-gallery show-all-thumbnails="">
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1000.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1010.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1022.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-1030.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2002.jpg" />
                </ui5-media-gallery-item>
                <ui5-media-gallery-item>
                    <img src="../assets/images/HT-2026.jpg" />
                </ui5-media-gallery-item>
            </ui5-media-gallery>
            <div slot="footer" class="dialog-footer">
                <div style="flex: 1;"></div>
                <ui5-button id="closeDialogButton">Close</ui5-button>
            </div>
        </ui5-dialog>
        <style>
            @media (min-width: 1024px) {
                .container {
                    display: grid;
                    gap: 1rem;
                    grid-template-columns: 1fr 1fr;
                }
            }
        </style>
        <script>
            closeDialogButton.addEventListener("click", function () {
                mediaGalleryDialog.close();
            });
            mediaGallery.addEventListener("overflow-click", function (event) {
                mediaGalleryDialog.show();
            });
            mediaGallery.addEventListener(
                "display-area-click",
                function (event) {
                    mediaGalleryDialog.show();
                }
            );
        <\/script>
    </div>
\``,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const ne=["Basic","Template1","Template2","Template3","Template4","Template5","Template6","Template7"];export{s as Basic,t as Template1,m as Template2,r as Template3,n as Template4,g as Template5,u as Template6,l as Template7,ne as __namedExportsOrder,re as default};
//# sourceMappingURL=MediaGallery.stories.8ccb3a10.js.map
