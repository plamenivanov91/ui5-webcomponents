import{x as v}from"./lit-html.7ac33e6b.js";import{D as h}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const f={default:{control:{type:"text"}},openPopover:{description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},showAt:{description:"Shows the ColorPalettePopover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"item-click":{description:"Fired when the user selects a color.",table:{category:"events"},UI5CustomData:{parameters:[{name:"color",type:"string",description:"the selected color"}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.16"};var l=Object.freeze,w=Object.defineProperty,d=(o,P)=>l(w(o,"raw",{value:l(P||o.slice())})),r,i;const a="ui5-color-palette-popover",I={title:"Main/ColorPalettePopover",component:a,parameters:{docs:{page:h({...b,component:a})}},argTypes:f},e=()=>v(r||(r=d([`
<h3>Color Palette Popover with recent colors, default color and more colors features</h3>
    <div class="snippet">
        <ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
        <ui5-color-palette-popover id="colorPalettePopover" show-recent-colors="" show-more-colors="" show-default-color="" default-color="green">
            <ui5-color-palette-item value="pink"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
            <ui5-color-palette-item value="#444444"></ui5-color-palette-item>
            <ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
            <ui5-color-palette-item value="green"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkred"></ui5-color-palette-item>
            <ui5-color-palette-item value="yellow"></ui5-color-palette-item>
            <ui5-color-palette-item value="blue"></ui5-color-palette-item>
            <ui5-color-palette-item value="cyan"></ui5-color-palette-item>
            <ui5-color-palette-item value="orange"></ui5-color-palette-item>
            <ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
            <ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
        </ui5-color-palette-popover>
    </div>
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>
`])));e.parameters={docs:{story:{inline:!1}}};const t=()=>v(i||(i=d([`
<h3>Color Palette Popover without any additional features</h3>
    <div class="snippet">
        <ui5-button id="colorPaletteBtn1">Open ColorPalettePopover</ui5-button>
        <ui5-color-palette-popover id="colorPalettePopover1">
            <ui5-color-palette-item value="pink"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
            <ui5-color-palette-item value="#444444"></ui5-color-palette-item>
            <ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
            <ui5-color-palette-item value="green"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkred"></ui5-color-palette-item>
            <ui5-color-palette-item value="yellow"></ui5-color-palette-item>
            <ui5-color-palette-item value="blue"></ui5-color-palette-item>
            <ui5-color-palette-item value="cyan"></ui5-color-palette-item>
            <ui5-color-palette-item value="orange"></ui5-color-palette-item>
            <ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
            <ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
        </ui5-color-palette-popover>
    </div>
    <script>
        colorPaletteBtn1.addEventListener("click", function (event) {
            colorPalettePopover1.showAt(this);
        });
    <\/script>
`])));t.parameters={docs:{story:{inline:!1}}};var p,n,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<h3>Color Palette Popover with recent colors, default color and more colors features</h3>
    <div class="snippet">
        <ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
        <ui5-color-palette-popover id="colorPalettePopover" show-recent-colors="" show-more-colors="" show-default-color="" default-color="green">
            <ui5-color-palette-item value="pink"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
            <ui5-color-palette-item value="#444444"></ui5-color-palette-item>
            <ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
            <ui5-color-palette-item value="green"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkred"></ui5-color-palette-item>
            <ui5-color-palette-item value="yellow"></ui5-color-palette-item>
            <ui5-color-palette-item value="blue"></ui5-color-palette-item>
            <ui5-color-palette-item value="cyan"></ui5-color-palette-item>
            <ui5-color-palette-item value="orange"></ui5-color-palette-item>
            <ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
            <ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
        </ui5-color-palette-popover>
    </div>
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>
\``,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,m,s;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
<h3>Color Palette Popover without any additional features</h3>
    <div class="snippet">
        <ui5-button id="colorPaletteBtn1">Open ColorPalettePopover</ui5-button>
        <ui5-color-palette-popover id="colorPalettePopover1">
            <ui5-color-palette-item value="pink"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
            <ui5-color-palette-item value="#444444"></ui5-color-palette-item>
            <ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
            <ui5-color-palette-item value="green"></ui5-color-palette-item>
            <ui5-color-palette-item value="darkred"></ui5-color-palette-item>
            <ui5-color-palette-item value="yellow"></ui5-color-palette-item>
            <ui5-color-palette-item value="blue"></ui5-color-palette-item>
            <ui5-color-palette-item value="cyan"></ui5-color-palette-item>
            <ui5-color-palette-item value="orange"></ui5-color-palette-item>
            <ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
            <ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
        </ui5-color-palette-popover>
    </div>
    <script>
        colorPaletteBtn1.addEventListener("click", function (event) {
            colorPalettePopover1.showAt(this);
        });
    <\/script>
\``,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const S=["Template0","Template1"];export{e as Template0,t as Template1,S as __namedExportsOrder,I as default};
//# sourceMappingURL=ColorPalettePopover.stories.51292e00.js.map
