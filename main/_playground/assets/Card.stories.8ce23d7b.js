import{x as u}from"./lit-html.7ac33e6b.js";import{D as L}from"./docs.7521d2a7.js";import{o as p}from"./unsafe-html.ba9f7887.js";import{l as g}from"./if-defined.f53f1284.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const W={default:{control:{type:"text"}},header:{control:{type:"text"}}},U={package:"@ui5/webcomponents"},f="ui5-card",Z={title:"Main/Card",component:f,subcomponents:{CardHeader:"ui5-card-header"},parameters:{docs:{page:L({...U,component:f})}},argTypes:W},o=e=>u`
<ui5-card
    accessible-name="${g(e.accessibleName)}"
    accessible-name-ref="${g(e.accessibleNameRef)}"
>
    ${p(e.header)}
    ${p(e.default)}
</ui5-card>
    `,a=(e,s,c,m,b,A)=>`<ui5-card-header
    slot="header"
    title-text="${e}"
    subtitle-text="${s}"
    ${c?`status="${c}"`:""}
    ${A?"interactive":""}
>
    ${b||""}
    ${m==null?void 0:m.map(C=>`<ui5-button design="Transparent" slot="action">${C}</ui5-button>`)}
</ui5-card-header>`,d=e=>{const s=u`
        <style>
            ui5-card {
                width: ${e};
            }
        </style>`;return c=>u`
        ${s}
        ${c()}`},i=o.bind({});i.args={header:a("This header is interactive","Click, press Enter or Space","3 of 6",[],'<ui5-icon name="group" slot="avatar"></ui5-icon>',!0),default:`<ui5-list separators="None" stye="margin-block-end: 0.75rem;">
    <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
    <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
</ui5-list>`};i.decorators=[d("22rem")];const t=o.bind({});t.args={header:a("Team Space","Direct Reports","3 of 10",["View All"],'<ui5-icon name="group" slot="avatar"></ui5-icon>'),default:`<ui5-list separators="None" style="margin-block-end: 0.75rem;">
    <ui5-li image="../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Isabella Adams</ui5-li>
</ui5-list>`};t.decorators=[d("22rem")];const l=o.bind({});l.args={header:a("New Purchase Orders","Today","3 of 15"),default:`<style>
    .status-error { color: #b00; }
    .status-warning { color: #e9730c; }
    .status-success { color: #107e3e; }
</style>

<ui5-table style="margin-block-end: .75rem">
    <ui5-table-column slot="columns">
        <ui5-label>Sales Order</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns">
        <ui5-label>Customer</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns">
        <ui5-label>Net Amount</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>
        <ui5-label>Status</ui5-label>
    </ui5-table-column>

    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010050</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Entertainment Argentina</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>6k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-success">Approved</span>
        </ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010051</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Brazil Technologies</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>2k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-error">Rejected</span>
        </ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010052</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Robert Brown Ent.</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>17k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-warning">Pending</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>`};l.decorators=[d("40rem")];const r=o.bind({});r.args={header:a("Upcoming Activities","Today"),default:`<ui5-timeline>
    <ui5-timeline-item title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
    <ui5-timeline-item title-text="Weekly Sync - BTP Design" timestamp="1517349600000" icon="calendar">
        MR SOF02 2.43
    </ui5-timeline-item>
    <ui5-timeline-item title-text="Video Conference Call - UI5" timestamp="1485813600000" icon="calendar">
        Online meeting
    </ui5-timeline-item>
</ui5-timeline>`};r.decorators=[d("22rem")];const n=o.bind({}),E=[{header:a("David Williams","Sales Manager"),default:`<ui5-list separators="Inner">
    <ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
    <ui5-li icon="wallet" icon-end>Finance</ui5-li>
    <ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
</ui5-list>`},{header:a("Project Cloud Transformation","Revenue per Product | EUR","3 of 3"),default:`<ui5-list separators="None">
    <ui5-li description="ID234522566-D44" additional-text="27.25K EUR" additional-text-state="Success">Avantel</ui5-li>
    <ui5-li description="ID7125852785-A51" additional-text="22.89K EUR" additional-text-state="Warning">Telecomunicaciones Star</ui5-li>
    <ui5-li description="ID123555587-I05" additional-text="7.85K EUR" additional-text-state="Error">Talpa</ui5-li>
</ui5-list>`},{header:a("Donna Maria Moore","Senior Sales Executive",void 0,void 0,'<img src="../assets/images/avatars/man_avatar_1.png" slot="avatar">'),default:`<style>
    .content,
    .content-group {
        display: flex;
        flex-direction: column;
        padding-block-end: 1rem;
    }
    .content-padding {
        padding: 0.5rem 1rem 0 1rem;
        box-sizing: border-box;
    }
</style>
<div class="content content-padding">
    <ui5-title level="H5" style="padding-block-end: 1rem;">Contact details</ui5-title>
    <div class="content-group">
        <ui5-label>Company Name</ui5-label>
        <ui5-title level="H6">Company A</ui5-title>
    </div>
    <div class="content-group">
        <ui5-label>Address</ui5-label>
        <ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>
    </div>
    <div class="content-group">
        <ui5-label>Website</ui5-label>
        <ui5-link target="_blank">www.company_a.example.com</ui5-link>
    </div>
</div>`}];n.decorators=[e=>u`
            <style>
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, 22rem);
                    grid-auto-rows: 1fr;
                    gap: 1rem;
                }
            </style>
            <div class="grid-container">
                ${E.map(s=>e({args:{...s}}))}
            </div>`];var h,v,$;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...($=(v=i.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var y,S,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var D,w,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,_,N;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(N=(_=r.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var R,k,H;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(H=(k=n.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const ee=["InteractiveHeader","WithList","WithTable","WithTimeline","More"];export{i as InteractiveHeader,n as More,t as WithList,l as WithTable,r as WithTimeline,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Card.stories.8ce23d7b.js.map
