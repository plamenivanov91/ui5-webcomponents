import{x as r}from"./lit-html.7ac33e6b.js";import{D as f}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const y={dateValue:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}},closePicker:{description:"Closes the picker",table:{category:"methods"}},formatValue:{description:"Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance",table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],returnValue:{type:"string"}}},isOpen:{description:"Checks if the picker is open",table:{category:"methods"},UI5CustomData:{returnValue:{type:"boolean"}}},isValid:{description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br> <b>Note:</b> an empty string is considered as valid value.`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:"string",optional:!1,description:"The value to be tested against the current date format"}],returnValue:{type:"boolean"}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:"Promise",description:"Resolves when the picker is open"}}},change:{description:'Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.',table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The submitted value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",table:{category:"events"},UI5CustomData:{parameters:[{name:"value",type:"string",description:"The current value."},{name:"valid",type:"boolean",description:"Indicator if the value is in correct format pattern and in valid range."}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},s="ui5-time-picker",F={title:"Main/TimePicker",component:s,parameters:{docs:{page:f({...b,component:s})}},argTypes:y},e=()=>r`
<h3>Basic TimePicker</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1"></ui5-time-picker>
    </div>
`,t=()=>r`
<h3>TimePicker in twelve hours format</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>
    </div>
`,i=()=>r`
<h3>TimePicker with only minutes and seconds</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>
    </div>
`,a=()=>r`
<h3>TimePicker with value-state and valueStateMessage</h3>
    <div class="snippet">
        <ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Error">
            <div slot="valueStateMessage">Please provide valid value</div>
        </ui5-time-picker>
    </div>
`;var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => html\`
<h3>Basic TimePicker</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1"></ui5-time-picker>
    </div>
\``,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<h3>TimePicker in twelve hours format</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>
    </div>
\``,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => html\`
<h3>TimePicker with only minutes and seconds</h3>
    <div class="snippet">
            <ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>
    </div>
\``,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,k,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
<h3>TimePicker with value-state and valueStateMessage</h3>
    <div class="snippet">
        <ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Error">
            <div slot="valueStateMessage">Please provide valid value</div>
        </ui5-time-picker>
    </div>
\``,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const _=["Template0","Template1","Template2","Template3"];export{e as Template0,t as Template1,i as Template2,a as Template3,_ as __namedExportsOrder,F as default};
//# sourceMappingURL=TimePicker.stories.e917e78a.js.map
