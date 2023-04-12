import{x as e}from"./lit-html.7ac33e6b.js";import{D as F}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const k={sideContentFallDown:{control:"select",options:["BelowL","BelowM","BelowXL","OnMinimumWidth"]},sideContentPosition:{control:"select",options:["End","Start"]},sideContentVisibility:{control:"select",options:["AlwaysShow","NeverShow","ShowAboveL","ShowAboveM","ShowAboveS"]},default:{control:{type:"text"}},sideContent:{control:{type:"text"}},toggleContents:{description:"Toggles visibility of main and side contents on S screen size (mobile device).",table:{category:"methods"}},"layout-change":{description:"Fires when the current breakpoint has been changed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"currentBreakpoint",type:"string",description:"the current breakpoint."},{name:"previousBreakpoint",type:"string",description:"the breakpoint that was active before change to current breakpoint."},{name:"mainContentVisible",type:"boolean",description:"visibility of the main content."},{name:"sideContentVisible",type:"boolean",description:"visibility of the side content."}]}}},z={package:"@ui5/webcomponents-fiori",since:"1.1.0"};var m=Object.freeze,X=Object.defineProperty,O=(l,_)=>m(X(l,"raw",{value:m(_||l.slice())})),c;const d="ui5-dynamic-side-content",te={title:"Fiori/DynamicSideContent",component:d,parameters:{docs:{page:F({...z,component:d})}},argTypes:k},t=()=>e`
<h3>Dynamic Side Content with default properties</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,n=()=>e`
<h3>Dynamic Side Content with hideMainContent set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content hide-main-content="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,a=()=>e`
<h3>Dynamic Side Content with hideSideContent set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content hide-side-content="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,s=()=>e`
<h3>Dynamic Side Content with equalSplit set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content equal-split="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,u=()=>e`
<h3>Dynamic Side Content with sideContentPosition="Start"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-position="Start" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,r=()=>e`
<h3>Dynamic Side Content with sideContentFallDown="BelowXL"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-fall-down="BelowXL" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,o=()=>e`
<h3>Dynamic Side Content with sideContentVisibility="ShowAboveM"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-visibility="ShowAboveM" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
`,i=()=>e(c||(c=O([`
<h3>Dynamic Side Content - toggle contents on mobile device (S size)</h3>
    <div class="snippet">
        <div class="wrapperM">
            <ui5-page floating-footer="" show-footer="">
                <ui5-dynamic-side-content id="dynamicSideContent" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
                <div slot="footer">
                    <ui5-bar design="FloatingFooter">
                        <ui5-button id="toggleButton" design="Positive" slot="endContent">Toggle</ui5-button>
                    </ui5-bar>
                </div>
            </ui5-page>
        </div>
    </div>
    <script>
        toggleButton.addEventListener("click", function() {
            dynamicSideContent.toggleContents();
        });
    <\/script>
`])));i.parameters={docs:{story:{inline:!1}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with default properties</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,q,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with hideMainContent set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content hide-main-content="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(h=(q=n.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var f,S,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with hideSideContent set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content hide-side-content="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,M,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with equalSplit set</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content equal-split="" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(N=(M=s.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var w,x,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with sideContentPosition="Start"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-position="Start" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(D=(x=u.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var P,I,L;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with sideContentFallDown="BelowXL"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-fall-down="BelowXL" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var A,V,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content with sideContentVisibility="ShowAboveM"</h3>
    <div class="snippet">
        <div class="wrapper100">
            <ui5-page>
                <ui5-dynamic-side-content side-content-visibility="ShowAboveM" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
            </ui5-page>
        </div>
    </div>
\``,...(E=(V=o.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var T,Q,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => html\`
<h3>Dynamic Side Content - toggle contents on mobile device (S size)</h3>
    <div class="snippet">
        <div class="wrapperM">
            <ui5-page floating-footer="" show-footer="">
                <ui5-dynamic-side-content id="dynamicSideContent" class="content-padding">
                    <div>
                        <h1>Main Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
                    </div>
                    <div slot="sideContent">
                        <h1>Side Content</h1>
                        <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
                    </div>
                </ui5-dynamic-side-content>
                <div slot="footer">
                    <ui5-bar design="FloatingFooter">
                        <ui5-button id="toggleButton" design="Positive" slot="endContent">Toggle</ui5-button>
                    </ui5-bar>
                </div>
            </ui5-page>
        </div>
    </div>
    <script>
        toggleButton.addEventListener("click", function() {
            dynamicSideContent.toggleContents();
        });
    <\/script>
\``,...(B=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};const ne=["Template0","Template1","Template2","Template3","Template4","Template5","Template6","Template7"];export{t as Template0,n as Template1,a as Template2,s as Template3,u as Template4,r as Template5,o as Template6,i as Template7,ne as __namedExportsOrder,te as default};
//# sourceMappingURL=DynamicSideContent.stories.4b320d31.js.map
