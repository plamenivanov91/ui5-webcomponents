import{x as e}from"./lit-html.7ac33e6b.js";import{D as P}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const w={dateValue:{control:{type:!1}},dateValueUTC:{control:{type:!1}},endDateValue:{control:{type:!1}},startDateValue:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}},closePicker:{description:"Closes the picker.",table:{category:"methods"}},formatValue:{description:"Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance",table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],returnValue:{type:"string",description:"The date as string"}}},isInValidRange:{description:"Checks if a date is between the minimum and maximum date.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be checked"}],returnValue:{type:"boolean"}}},isOpen:{description:"Checks if the picker is open.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"boolean",description:"true if the picker is open, false otherwise"}}},isValid:{description:"Checks if a value is valid against the current date format of the DatePicker.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be tested against the current date format"}],returnValue:{type:"boolean"}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Resolves when the picker is open"}}},change:{description:"Fired when the input operation has finished by pressing Enter or on focusout.",table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The submitted value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the component is changed at each key stroke.",table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The submitted value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}},primaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]},secondaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]}},M={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},s="ui5-daterange-picker",O={title:"Main/DateRangePicker",component:s,parameters:{docs:{page:P({...M,component:s})}},argTypes:w},a=()=>e`
<h3>Basic DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
        </div>
    </div>
`,t=()=>e`
<h3>DateRangePicker with Minimum and Maximum Date - 1/1/2020 - 4/5/2020 format-pattern="dd/MM/yyyy"</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>
        </div>
    </div>
`,r=()=>e`
<h3>DateRangePicker with format-pattern='long'</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>
        </div>
    </div>
`,i=()=>e`
<h3>Disabled DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker disabled="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
        </div>
    </div>
`,n=()=>e`
<h3>readonly DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker readonly="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
        </div>
    </div>
`;var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => html\`
<h3>Basic DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
        </div>
    </div>
\``,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<h3>DateRangePicker with Minimum and Maximum Date - 1/1/2020 - 4/5/2020 format-pattern="dd/MM/yyyy"</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>
        </div>
    </div>
\``,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
<h3>DateRangePicker with format-pattern='long'</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>
        </div>
    </div>
\``,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,k,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
<h3>Disabled DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker disabled="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
        </div>
    </div>
\``,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,D,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
<h3>readonly DateRangePicker</h3>
    <div class="snippet">
        <div class="daterange-picker-width">
            <ui5-daterange-picker readonly="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
        </div>
    </div>
\``,...(b=(D=n.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const _=["Template0","Template1","Template2","Template3","Template4"];export{a as Template0,t as Template1,r as Template2,i as Template3,n as Template4,_ as __namedExportsOrder,O as default};
//# sourceMappingURL=DateRangePicker.stories.947f0479.js.map
