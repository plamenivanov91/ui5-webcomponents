import{x as t}from"./lit-element-c5a2b594.js";import{D as $}from"./docs-ae1b67f6.js";import{l as r}from"./if-defined-c29cffe1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-e27962f6.js";import"./iframe-13e96da1.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-a228e329.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const k={endValue:{control:{type:"number"}},startValue:{control:{type:"number"}},labelInterval:{control:{type:"number"}},max:{control:{type:"number"}},min:{control:{type:"number"}},step:{control:{type:"number"}}},D={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},b="ui5-range-slider",N={title:"Main/Range Slider",component:"RangeSlider",parameters:{docs:{page:$({...D,component:b})}},argTypes:k},n=e=>t`
<ui5-range-slider
    start-value="${r(e.startValue)}"
    end-value="${r(e.endValue)}"
    min="${r(e.min)}"
    max="${r(e.max)}"
    step="${r(e.step)}"
    ?show-tickmarks="${r(e.showTickmarks)}"
    label-interval="${r(e.labelInterval)}"
    ?show-tooltip="${r(e.showTooltip)}"
></ui5-range-slider>`,s=n.bind({});s.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];s.args={min:0,max:100,step:5,disabled:!1,showTooltip:!1,showTickmarks:!1,labelInterval:0,startValue:0,endValue:20};const i=n.bind({});i.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];i.args={startValue:3,endValue:13,showTooltip:!0};const a=n.bind({});a.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];a.args={min:0,max:112,step:2,startValue:4,endValue:12,labelInterval:2,showTickmarks:!0,showTooltip:!0};a.storyName="Tooltips, Tickmarks and Labels";var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var f,u,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const O=["Basic","Tooltips","RangeSliderTickmarksTooltipLabel"];export{s as Basic,a as RangeSliderTickmarksTooltipLabel,i as Tooltips,O as __namedExportsOrder,N as default};
//# sourceMappingURL=RangeSlider.stories-d2787956.js.map
