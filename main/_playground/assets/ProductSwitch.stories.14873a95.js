import{x as m}from"./lit-html.7ac33e6b.js";import{D as h}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const w={default:{control:{type:"text"}}},x={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.5"};var c=Object.freeze,b=Object.defineProperty,v=(e,d)=>c(b(e,"raw",{value:c(d||e.slice())})),o;const s="ui5-product-switch",M={title:"Fiori/ProductSwitch",component:s,subcomponents:{ProductSwitchItem:"ui5-product-switch-item"},parameters:{docs:{page:h({...x,component:s})}},argTypes:w},i=()=>m`
<h3>Basic sample</h3>
    <div class="snippet">
        <ui5-product-switch style="display:flex;">
            <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
        </ui5-product-switch>
    </div>
`,t=()=>m(o||(o=v([`
<h3>ProductSwitch within ShellBar</h3>
    <div class="snippet">
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="home" logo="../assets/images/sap-logo-svg.svg" show-product-switch="" show-co-pilot="">
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            <ui5-product-switch>
                <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Guided Buying" icon="credit-card"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Strategic Procurement" icon="cart-3"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Vendor Management" subtitle-text="Fieldglass" icon="shipping-status"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Human Capital Management" icon="customer"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Sales Cloud" subtitle-text="Sales Cloud" icon="sales-notification"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Commerce Cloud" subtitle-text="Commerce Cloud" icon="retail-store"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Marketing Cloud" subtitle-text="Marketing Cloud" icon="marketing-campaign"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Service Cloud" icon="family-care"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Customer Data Cloud" icon="customer-briefing"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="S/4HANA" icon="batch-payments"></ui5-product-switch-item>
            </ui5-product-switch>
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", function(event) {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    </div>
`])));t.parameters={docs:{story:{inline:!1}}};var u,r,n;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
<h3>Basic sample</h3>
    <div class="snippet">
        <ui5-product-switch style="display:flex;">
            <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
            <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
        </ui5-product-switch>
    </div>
\``,...(n=(r=i.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var p,l,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<h3>ProductSwitch within ShellBar</h3>
    <div class="snippet">
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="home" logo="../assets/images/sap-logo-svg.svg" show-product-switch="" show-co-pilot="">
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            <ui5-product-switch>
                <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Guided Buying" icon="credit-card"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Strategic Procurement" icon="cart-3"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Vendor Management" subtitle-text="Fieldglass" icon="shipping-status"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Human Capital Management" icon="customer"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Sales Cloud" subtitle-text="Sales Cloud" icon="sales-notification"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Commerce Cloud" subtitle-text="Commerce Cloud" icon="retail-store"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Marketing Cloud" subtitle-text="Marketing Cloud" icon="marketing-campaign"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Service Cloud" icon="family-care"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="Customer Data Cloud" icon="customer-briefing"></ui5-product-switch-item>
                <ui5-product-switch-item title-text="S/4HANA" icon="batch-payments"></ui5-product-switch-item>
            </ui5-product-switch>
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", function(event) {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    </div>
\``,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const j=["Template0","Template1"];export{i as Template0,t as Template1,j as __namedExportsOrder,M as default};
//# sourceMappingURL=ProductSwitch.stories.14873a95.js.map
