import{x as p}from"./lit-html.7ac33e6b.js";import{l as i}from"./if-defined.f53f1284.js";import{o as G}from"./unsafe-html.ba9f7887.js";import{L as u,a as U}from"./ListSeparators.d80d2a3e.js";import{D as W}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const j={growing:{control:"select",options:["Button","None","Scroll"]},mode:{control:"select",options:["Delete","MultiSelect","None","SingleSelect","SingleSelectAuto","SingleSelectBegin","SingleSelectEnd"]},separators:{control:"select",options:["All","Inner","None"]},default:{control:{type:"text"}},header:{control:{type:"text"}},"item-click":{description:"Fired when an item is activated, unless the item's <code>type</code> property is set to <code>Inactive</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The clicked item."}]}},"item-close":{description:"Fired when the <code>Close</code> button of any item is clicked <br><br> <b>Note:</b> This event is only applicable to list items that can be closed (such as notification list items), not to be confused with <code>item-delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the item about to be closed."}]}},"item-delete":{description:"Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the deleted item."}]}},"item-toggle":{description:"Fired when the <code>Toggle</code> button of any item is clicked. <br><br> <b>Note:</b> This event is only applicable to list items that can be toggled (such as notification group list items).",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the toggled item."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItems",type:"Array",description:"An array of the selected items."},{name:"previouslySelectedItems",type:"Array",description:"An array of the previously selected items."}]}}},z={package:"@ui5/webcomponents"};var m=Object.freeze,J=Object.defineProperty,q=(e,F)=>m(J(e,"raw",{value:m(F||e.slice())})),g;const f="ui5-list",ce={title:"Main/List",component:f,subcomponents:{StandardListItem:"ui5-li",CustomListItem:"ui5-li-custom",GroupHeaderListItem:"ui5-li-groupheader"},parameters:{docs:{page:W({...z,component:f})}},argTypes:j},d=e=>p` <ui5-list
    mode="${i(e.mode)}"
    ?busy="${i(e.busy)}"
    ?indent="${i(e.indent)}"
    ?growing="${i(e.growing)}"
    busy-delay="${i(e.busyDelay)}"
    separators="${i(e.separators)}"
    header-text="${i(e.headerText)}"
    footer-text="${i(e.footerText)}"
    no-data-text="${i(e.noDataText)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-role="${i(e.accessibleRole)}"
  >
    ${G(e.default)}
  </ui5-list>`,t=d.bind({});t.storyName="Basic";t.args={default:`<ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Information"
        >Blueberry</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="The tropical stone fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Mango</ui5-li>`};const n=()=>p(g||(g=q([`<ui5-list id="infiniteScrollEx" style="height: 200px" growing="Scroll">
      <ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Banana</ui5-li
      >
    </ui5-list>
    <script>
      function template(i) {
        var li = document.createElement("ui5-li");
        li.textContent = "Fruit name";
        li.description = "the description goes here " + i;
        li.additionalText = "Available";
        li.additionalTextState = "Success";
        li.icon = "nutrition-activity";
        return li;
      }
      function insertItems(el, num) {
        for (var i = 0; i < num; i++) {
          el.appendChild(template(i));
        }
      }
      infiniteScrollEx.addEventListener("load-more", (e) => {
        var el = infiniteScrollEx;
        el.busy = true;
        setTimeout(() => {
          insertItems(el, 5);
          el.busy = false;
        }, 200);
      });
    <\/script>`])));n.storyName="Growing";n.parameters={docs:{story:{inline:!1}}};const a=d.bind({});a.storyName="Single Selection";a.args={mode:u.SingleSelect,headerText:"Select a country:",default:`
    <ui5-li selected icon="map" icon-end>Argentina</ui5-li>
    <ui5-li icon="map" icon-end>Bulgaria</ui5-li>
    <ui5-li icon="map" icon-end>China</ui5-li>
    <ui5-li type="Inactive" icon="map" icon-end>Denmark (ui5-li type='Inactive')</ui5-li>`};const s=d.bind({});s.storyName="Multi Selection";s.args={mode:u.MultiSelect,headerText:"Multiple selection is possible",default:`
    <ui5-li>Pineapple</ui5-li>
    <ui5-li selected="">Orange</ui5-li>
    <ui5-li>Banana</ui5-li>
    <ui5-li>Mango</ui5-li>`};const r=d.bind({});r.storyName="Group Headers";r.args={mode:u.MultiSelect,default:`<ui5-li-groupheader
    >Front End Developers</ui5-li-groupheader
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_3.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Jennifer</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_4.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Lora</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_5.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Carlotta</ui5-li
    >
    <ui5-li-groupheader>Back End Developers</ui5-li-groupheader>
    <ui5-li
        image="../assets/images/avatars/man_avatar_1.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Clark</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_1.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Ellen</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/man_avatar_2.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Adam</ui5-li
    >`};const o=d.bind({});o.storyName="Delete Mode";o.args={mode:u.Delete,headerText:"Note: The list items removal is up to application developers",default:`
    <ui5-li>Argentina</ui5-li>
    <ui5-li>Bulgaria</ui5-li>
    <ui5-li>China</ui5-li>`};const l=d.bind({});l.storyName="No Data";l.args={headerText:"Products",noDataText:"No Data Available",separators:U.None};const c=()=>p` <ui5-list
      header-text="No separators"
      separators="None"
      class="full-width"
    >
      <ui5-li icon="product">Item #1</ui5-li>
      <ui5-li icon="product">Item #2</ui5-li>
      <ui5-li icon="product">Item #3</ui5-li>
    </ui5-list>
    <ui5-list
      header-text="Inner separators"
      separators="Inner"
      class="full-width"
    >
      <ui5-li icon="shipping-status">Devilered</ui5-li>
      <ui5-li icon="shipping-status">Pending</ui5-li>
      <ui5-li icon="shipping-status">Declined</ui5-li>
    </ui5-list>`;var y,b,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(D=(b=t.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var h,x,$;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => html\`<ui5-list id="infiniteScrollEx" style="height: 200px" growing="Scroll">
      <ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Banana</ui5-li
      >
    </ui5-list>
    <script>
      function template(i) {
        var li = document.createElement("ui5-li");
        li.textContent = "Fruit name";
        li.description = "the description goes here " + i;
        li.additionalText = "Available";
        li.additionalTextState = "Success";
        li.icon = "nutrition-activity";
        return li;
      }
      function insertItems(el, num) {
        for (var i = 0; i < num; i++) {
          el.appendChild(template(i));
        }
      }
      infiniteScrollEx.addEventListener("load-more", (e) => {
        var el = infiniteScrollEx;
        el.busy = true;
        setTimeout(() => {
          insertItems(el, 5);
          el.busy = false;
        }, 200);
      });
    <\/script>\``,...($=(x=n.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var v,S,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,I,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var E,M,_;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(_=(M=r.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var L,C,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var H,A,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,O,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => html\` <ui5-list
      header-text="No separators"
      separators="None"
      class="full-width"
    >
      <ui5-li icon="product">Item #1</ui5-li>
      <ui5-li icon="product">Item #2</ui5-li>
      <ui5-li icon="product">Item #3</ui5-li>
    </ui5-list>
    <ui5-list
      header-text="Inner separators"
      separators="Inner"
      class="full-width"
    >
      <ui5-li icon="shipping-status">Devilered</ui5-li>
      <ui5-li icon="shipping-status">Pending</ui5-li>
      <ui5-li icon="shipping-status">Declined</ui5-li>
    </ui5-list>\``,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ue=["Basic","Growing","SingleSelection","MultiSelection","GroupHeaders","Delete","NoData","SeparationTypes"];export{t as Basic,o as Delete,r as GroupHeaders,n as Growing,s as MultiSelection,l as NoData,c as SeparationTypes,a as SingleSelection,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=List.stories.06b6e34f.js.map
