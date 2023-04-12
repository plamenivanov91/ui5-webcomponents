import{x as O}from"./lit-html.7ac33e6b.js";import{l as t}from"./if-defined.f53f1284.js";import{o as M}from"./unsafe-html.ba9f7887.js";import{D as S}from"./docs.7521d2a7.js";import{T as P}from"./TabLayout.94ac13df.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const q={allItems:{control:{type:!1}},contentBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},headerBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},tabLayout:{control:"select",options:["Inline","Standard"]},tabsOverflowMode:{control:"select",options:["End","StartAndEnd"]},default:{control:{type:"text"}},overflowButton:{control:{type:"text"}},startOverflowButton:{control:{type:"text"}},"tab-select":{description:"Fired when a tab is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"tab",type:"HTMLElement",description:"The selected <code>tab</code>."},{name:"tabIndex",type:"Integer",description:"The selected <code>tab</code> index in the flattened array of all tabs and their subTabs, provided by the <code>allItems</code> getter."}]}}},I={package:"@ui5/webcomponents"},b="ui5-tabcontainer",V={title:"Main/TabContainer",component:b,subcomponents:{Tab:"ui5-tab",TabSeparator:"ui5-tab-separator"},parameters:{docs:{page:S({...I,component:b})}},argTypes:q},a=e=>O`<ui5-tabcontainer
    ?fixed="${t(e.fixed)}"
    ?collapsed="${t(e.collapsed)}"
    tab-layout="${t(e.tabLayout)}"
    tabs-overflow-mode="${t(e.tabsOverflowMode)}"
    header-background-design="${t(e.headerBackgroundDesign)}"
    content-background-design="${t(e.contentBackgroundDesign)}"
    tabs-placement="${t(e.tabsPlacement)}"
>
    ${M(e.default)}
</ui5-tabcontainer>`,i=a.bind({});i.args={default:`<ui5-tab icon="menu" text="Tab 1">
    <ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
</ui5-tab>
<ui5-tab icon="activities" text="Tab 2" selected>
    <ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
</ui5-tab>
<ui5-tab icon="add" text="Tab 3">
    <ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
</ui5-tab>
<ui5-tab icon="calendar" text="Tab 4">
    <ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
</ui5-tab>
<ui5-tab-separator></ui5-tab-separator>
<ui5-tab icon="action-settings" text="Tab 5">
    <ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
</ui5-tab>`};const n=a.bind({});n.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Home"></ui5-tab>
<ui5-tab text="What's new" selected></ui5-tab>
<ui5-tab text="Who are we"></ui5-tab>
<ui5-tab text="About"></ui5-tab>
<ui5-tab text="Contacts"></ui5-tab>`};const o=a.bind({});o.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Tab 1"></ui5-tab>
<ui5-tab text="Tab 2"></ui5-tab>
<ui5-tab text="Tab 3"></ui5-tab>
<ui5-tab text="Tab 4"></ui5-tab>
<ui5-tab text="Tab 5"></ui5-tab>
<ui5-tab text="Tab 6"></ui5-tab>
<ui5-tab text="Tab 7"></ui5-tab>
<ui5-tab text="Tab 8"></ui5-tab>
<ui5-tab text="Tab 9"></ui5-tab>
<ui5-tab text="Tab 10"></ui5-tab>
<ui5-tab text="Tab 11"></ui5-tab>
<ui5-tab text="Tab 12"></ui5-tab>
<ui5-tab text="Tab 13" selected></ui5-tab>
<ui5-tab text="Tab 14"></ui5-tab>
<ui5-tab text="Tab 15"></ui5-tab>
<ui5-tab text="Tab 16"></ui5-tab>
<ui5-tab text="Tab 17"></ui5-tab>
<ui5-tab text="Tab 18"></ui5-tab>
<ui5-tab text="Tab 19"></ui5-tab>
<ui5-tab text="Tab 20"></ui5-tab>
<ui5-tab text="Tab 21"></ui5-tab>
<ui5-tab text="Tab 22"></ui5-tab>
<ui5-tab text="Tab 23"></ui5-tab>`};const s=a.bind({});s.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Info" additional-text="3"></ui5-tab>
<ui5-tab text="Attachments" additional-text="24" selected></ui5-tab>
<ui5-tab text="Notes" additional-text="16"></ui5-tab>
<ui5-tab text="People" additional-text="34"></ui5-tab>`};const r=a.bind({});r.args={tabLayout:P.Inline,collapsed:!0,fixed:!0,default:`<ui5-tab icon="laptop" text="Monitors" additional-text="10"></ui5-tab>
<ui5-tab icon="video" text="Cameras" additional-text="2" selected></ui5-tab>
<ui5-tab icon="home" text="Rooms" additional-text="16"></ui5-tab>`};const u=a.bind({});u.args={default:`<ui5-tab text="Notes">
    Notes go here ...
</ui5-tab>
<ui5-tab text="Products">
    Products go here ...
    <ui5-tab slot="subTabs" text="Computers">
        Computers go here ...
        <ui5-tab slot="subTabs" text="Laptops" selected>
            Laptops go here ...
        </ui5-tab>
        <ui5-tab slot="subTabs" text="Desktops">
            <ui5-tab slot="subTabs" text="Work Stations">
                Work Stations go here ...
            </ui5-tab>
            <ui5-tab slot="subTabs" text="Game Stations">
                Game Stations go here ...
            </ui5-tab>
            Desktops go here ...
        </ui5-tab>
    </ui5-tab>
    <ui5-tab text="Phones" slot="subTabs">
        <ui5-tab text="Smartphones" slot="subTabs">
            Smartphones go here ...
        </ui5-tab>
        <ui5-tab text="Tablets" slot="subTabs">
            Tablets go here ...
        </ui5-tab>
        Phones go here ...
    </ui5-tab>
</ui5-tab>
<ui5-tab text="Orders">
    Orders go here ...
    <ui5-tab slot="subTabs" text="Attachments">
        Order attachments go here ...
    </ui5-tab>
</ui5-tab>`};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var f,m,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,x,T;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var D,$,h;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(h=($=s.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var k,v,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,L,B;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(B=(L=u.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const X=["Basic","TextOnlyTabs","TextOnlyEndOverflow","WithAdditionalText","InlineTabLayout","NestedTabs"];export{i as Basic,r as InlineTabLayout,u as NestedTabs,o as TextOnlyEndOverflow,n as TextOnlyTabs,s as WithAdditionalText,X as __namedExportsOrder,V as default};
//# sourceMappingURL=TabContainer.stories.e3674c4f.js.map
