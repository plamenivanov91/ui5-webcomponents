import{x as e}from"./lit-html.7ac33e6b.js";import{D as H}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const U={selectionMode:{control:"select",options:["Multiple","Range","Single"]},default:{control:{type:"text"}},"selected-dates-change":{description:"Fired when the selected dates change. <b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.",table:{category:"events"},UI5CustomData:{parameters:[{name:"values",type:"Array",description:"The selected dates"},{name:"dates",type:"Array",description:"The selected dates as UTC timestamps"}]}},primaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]},secondaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]}},W={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},p="ui5-calendar",ee={title:"Main/Calendar",component:p,subcomponents:{CalendarDate:"ui5-date"},parameters:{docs:{page:H({...W,component:p})}},argTypes:U},a=()=>e`
<h3>Basic Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar></ui5-calendar>
        </div>
    </div>
`,i=()=>e`
<h3>Calendar with Minimum and Maximum Date &amp; Format Pattern</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>
        </div>
    </div>
`,r=()=>e`
<h3>Calendar with Hidden Week Numbers</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar hide-week-numbers=""></ui5-calendar>
        </div>
    </div>
`,d=()=>e`
<h3>Calendar with Selection Mode Multiple</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar selection-mode="Multiple"></ui5-calendar>
        </div>
    </div>
`,s=()=>e`
<h3>Calendar with Selection Mode Range</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar selection-mode="Range"></ui5-calendar>
        </div>
    </div>
`,t=()=>e`
<h3>Japanese Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>
        </div>
    </div>
`,n=()=>e`
<h3>Islamic Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>
        </div>
    </div>
`,c=()=>e`
<h3>Buddhist Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>
        </div>
    </div>
`,l=()=>e`
<h3>Persian Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Persian"></ui5-calendar>
        </div>
    </div>
`;var o,m,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => html\`
<h3>Basic Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar></ui5-calendar>
        </div>
    </div>
\``,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => html\`
<h3>Calendar with Minimum and Maximum Date &amp; Format Pattern</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>
        </div>
    </div>
\``,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,C,g;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => html\`
<h3>Calendar with Hidden Week Numbers</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar hide-week-numbers=""></ui5-calendar>
        </div>
    </div>
\``,...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,k,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => html\`
<h3>Calendar with Selection Mode Multiple</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar selection-mode="Multiple"></ui5-calendar>
        </div>
    </div>
\``,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var S,f,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => html\`
<h3>Calendar with Selection Mode Range</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar selection-mode="Range"></ui5-calendar>
        </div>
    </div>
\``,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var b,P,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => html\`
<h3>Japanese Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>
        </div>
    </div>
\``,...(x=(P=t.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var B,D,J;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`() => html\`
<h3>Islamic Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>
        </div>
    </div>
\``,...(J=(D=n.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var R,F,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => html\`
<h3>Buddhist Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>
        </div>
    </div>
\``,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var _,A,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => html\`
<h3>Persian Calendar</h3>
    <div class="snippet">
        <div class="datepicker-width">
            <ui5-calendar primary-calendar-type="Persian"></ui5-calendar>
        </div>
    </div>
\``,...(G=(A=l.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ae=["Template0","Template1","Template2","Template3","Template4","Template5","Template6","Template7","Template8"];export{a as Template0,i as Template1,r as Template2,d as Template3,s as Template4,t as Template5,n as Template6,c as Template7,l as Template8,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Calendar.stories.2c72ee8f.js.map
