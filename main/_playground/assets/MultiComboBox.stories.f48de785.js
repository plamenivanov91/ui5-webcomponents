import{x as t}from"./lit-html.7ac33e6b.js";import{D as M}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const f={open:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"items",type:"Array",description:"an array of the selected items."}]}}},B={package:"@ui5/webcomponents",since:"0.11.0"},o="ui5-multi-combobox",_={title:"Main/MultiComboBox",component:o,subcomponents:{MultiComboBoxItem:"ui5-mcb-item",MultiComboBoxGroupItem:"ui5-mcb-group-item"},parameters:{docs:{page:M({...B,component:o})}},argTypes:f},e=()=>t`
<h3>Basic MultiComboBox</h3>
    <div class="snippet" style="display: flex; flex-wrap: wrap;">
        <ui5-multi-combobox placeholder="Type your value">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox readonly="" value="Readonly combo">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox disabled="" value="Disabled combo">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
`,i=()=>t`
<h3>MultiComboBox with items</h3>
    <div class="snippet">
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">
            <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
            <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Denmark"></ui5-mcb-item>
            <ui5-mcb-item text="England"></ui5-mcb-item>
            <ui5-mcb-item text="Albania"></ui5-mcb-item>
            <ui5-mcb-item text="Morocco"></ui5-mcb-item>
            <ui5-mcb-item text="Portugal"></ui5-mcb-item>
            <ui5-mcb-item text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Philippines"></ui5-mcb-item>
            <ui5-mcb-item text="Paraguay"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
`,m=()=>t`
<h3>MultiComboBox with free text input</h3>
    <div class="snippet">
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values="">
            <ui5-mcb-item text="Argentina"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Denmark"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="England"></ui5-mcb-item>
            <ui5-mcb-item text="Albania"></ui5-mcb-item>
            <ui5-mcb-item text="Morocco"></ui5-mcb-item>
            <ui5-mcb-item text="Portugal"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Philippines"></ui5-mcb-item>
            <ui5-mcb-item text="Paraguay"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
`,u=()=>t`
<h3>MultiComboBox with Value State</h3>
    <div class="snippet" style="display: flex; flex-wrap: wrap;">
        <ui5-multi-combobox value-state="Success">
            <ui5-mcb-item text="Fortune"></ui5-mcb-item>
            <ui5-mcb-item text="Luck"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox value-state="Warning">
            <ui5-mcb-item text="Attention"></ui5-mcb-item>
            <ui5-mcb-item text="Caution"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Warning"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox value-state="Error">
            <ui5-mcb-item text="Fault"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Error"></ui5-mcb-item>
            <ui5-mcb-item text="Mistake"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
`,c=()=>t`
<h3>MultiComboBox with Grouping of Items</h3>
    <div class="snippet responsive-snippet">
        <ui5-multi-combobox placeholder="Select a country">
            <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
            <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
            <ui5-mcb-item text="China"></ui5-mcb-item>
            <ui5-mcb-item text="India"></ui5-mcb-item>
            <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
            <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
            <ui5-mcb-item text="Austria"></ui5-mcb-item>
            <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Italy"></ui5-mcb-item>
            <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
            <ui5-mcb-item text="Canada"></ui5-mcb-item>
            <ui5-mcb-item text="Granada"></ui5-mcb-item>
            <ui5-mcb-item text="Haiti"></ui5-mcb-item>
            <ui5-mcb-item text="United States"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
`;var b,a,n;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => html\`
<h3>Basic MultiComboBox</h3>
    <div class="snippet" style="display: flex; flex-wrap: wrap;">
        <ui5-multi-combobox placeholder="Type your value">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox readonly="" value="Readonly combo">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox disabled="" value="Disabled combo">
            <ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var r,l,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => html\`
<h3>MultiComboBox with items</h3>
    <div class="snippet">
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">
            <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
            <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Denmark"></ui5-mcb-item>
            <ui5-mcb-item text="England"></ui5-mcb-item>
            <ui5-mcb-item text="Albania"></ui5-mcb-item>
            <ui5-mcb-item text="Morocco"></ui5-mcb-item>
            <ui5-mcb-item text="Portugal"></ui5-mcb-item>
            <ui5-mcb-item text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Philippines"></ui5-mcb-item>
            <ui5-mcb-item text="Paraguay"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
\``,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var x,p,d;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => html\`
<h3>MultiComboBox with free text input</h3>
    <div class="snippet">
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values="">
            <ui5-mcb-item text="Argentina"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Denmark"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="England"></ui5-mcb-item>
            <ui5-mcb-item text="Albania"></ui5-mcb-item>
            <ui5-mcb-item text="Morocco"></ui5-mcb-item>
            <ui5-mcb-item text="Portugal"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Philippines"></ui5-mcb-item>
            <ui5-mcb-item text="Paraguay"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
\``,...(d=(p=m.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,y;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`() => html\`
<h3>MultiComboBox with Value State</h3>
    <div class="snippet" style="display: flex; flex-wrap: wrap;">
        <ui5-multi-combobox value-state="Success">
            <ui5-mcb-item text="Fortune"></ui5-mcb-item>
            <ui5-mcb-item text="Luck"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox value-state="Warning">
            <ui5-mcb-item text="Attention"></ui5-mcb-item>
            <ui5-mcb-item text="Caution"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Warning"></ui5-mcb-item>
        </ui5-multi-combobox>
        <ui5-multi-combobox value-state="Error">
            <ui5-mcb-item text="Fault"></ui5-mcb-item>
            <ui5-mcb-item selected="" text="Error"></ui5-mcb-item>
            <ui5-mcb-item text="Mistake"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
\``,...(y=(g=u.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,C,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
<h3>MultiComboBox with Grouping of Items</h3>
    <div class="snippet responsive-snippet">
        <ui5-multi-combobox placeholder="Select a country">
            <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
            <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
            <ui5-mcb-item text="China"></ui5-mcb-item>
            <ui5-mcb-item text="India"></ui5-mcb-item>
            <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
            <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
            <ui5-mcb-item text="Austria"></ui5-mcb-item>
            <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
            <ui5-mcb-item text="Germany"></ui5-mcb-item>
            <ui5-mcb-item text="Italy"></ui5-mcb-item>
            <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
            <ui5-mcb-item text="Canada"></ui5-mcb-item>
            <ui5-mcb-item text="Granada"></ui5-mcb-item>
            <ui5-mcb-item text="Haiti"></ui5-mcb-item>
            <ui5-mcb-item text="United States"></ui5-mcb-item>
        </ui5-multi-combobox>
    </div>
\``,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const H=["Template0","Template1","Template2","Template3","Template4"];export{e as Template0,i as Template1,m as Template2,u as Template3,c as Template4,H as __namedExportsOrder,_ as default};
//# sourceMappingURL=MultiComboBox.stories.f48de785.js.map