import{x as n}from"./lit-html.7ac33e6b.js";import{l as s}from"./if-defined.f53f1284.js";import{o as v}from"./unsafe-html.ba9f7887.js";import{A as z}from"./AvatarGroupType.3fe1e7d5.js";import{D as A}from"./docs.7521d2a7.js";import"./index.047c658d.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-MA2MUXQN.725416eb.js";import"./iframe.3fb85d1a.js";import"../sb-preview/runtime.mjs";import"./index.7f1b0df5.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const w={colorScheme:{control:{type:!1}},hiddenItems:{control:{type:!1}},type:{control:"select",options:["Group","Individual"]},default:{control:{type:"text"}},overflowButton:{control:{type:"text"}},click:{description:"Fired when the component is activated either with a click/tap or by using the Enter or Space key.",table:{category:"events"},UI5CustomData:{parameters:[{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the clicked item."},{name:"overflowButtonClicked",type:"boolean",description:"indicates if the overflow button is clicked"}]}}},x={package:"@ui5/webcomponents",since:"1.0.0-rc.11"};var l=Object.freeze,G=Object.defineProperty,P=(a,r)=>l(G(a,"raw",{value:l(r||a.slice())})),p;let i=0;const S=()=>(i++,n(p||(p=P(['<div class="group-',`">
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider min="1" max="100" value="60"></ui5-slider>
        <ui5-avatar-group type="Group">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".group-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                function onAvatarGroupClick(targetRef) {
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    let html = "";
                    avatarGroup.items.forEach((avatar, index) => {
                        const avatarColor = avatarGroup.colorScheme[index];
                        html += \`<div class="avatar-slot" style="padding: 5px">
        <ui5-avatar interactive icon="\${avatar.icon}" initials="\${avatar.initials}" color-scheme="\${avatarColor}">\`;
                        if (avatar.image.length > 0) {
                            html += \`<img src="\${avatar.image[0].src}">\`;
                        }
                        html += \`</ui5-avatar></div>\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    onAvatarGroupClick(event.detail.targetRef);
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `],['<div class="group-',`">
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider min="1" max="100" value="60"></ui5-slider>
        <ui5-avatar-group type="Group">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".group-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                function onAvatarGroupClick(targetRef) {
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    let html = "";
                    avatarGroup.items.forEach((avatar, index) => {
                        const avatarColor = avatarGroup.colorScheme[index];
                        html += \\\`<div class="avatar-slot" style="padding: 5px">
        <ui5-avatar interactive icon="\\\${avatar.icon}" initials="\\\${avatar.initials}" color-scheme="\\\${avatarColor}">\\\`;
                        if (avatar.image.length > 0) {
                            html += \\\`<img src="\\\${avatar.image[0].src}">\\\`;
                        }
                        html += \\\`</ui5-avatar></div>\\\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    onAvatarGroupClick(event.detail.targetRef);
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `])),i,i));var u=Object.freeze,$=Object.defineProperty,I=(a,r)=>u($(a,"raw",{value:u(r||a.slice())})),c;let o=0;const C=()=>(o++,n(c||(c=I(['<div class="individual-',`">
        <ui5-popover
            header-text="Person Card"
            class="personPopover"
            style="width: 300px"
            placement-type="Bottom"
            prevent-focus-restore=""
        >
            <div class="avatar-slot" style="display: inline-block;">
                <ui5-avatar id="popAvatar"></ui5-avatar>
            </div>
            <div class="title-slot" style="display: inline-block;">
                <ui5-title level="H5">John Doe</ui5-title>
                <ui5-title level="H5">Software Developer</ui5-title>
            </div>
        </ui5-popover>
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider
            id="sliderIndividual"
            min="1"
            max="100"
            value="60"
        ></ui5-slider>
        <ui5-avatar-group type="Individual">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".individual-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                const personPopover = section.querySelector(".personPopover");
                const popAvatar = personPopover.querySelector("ui5-avatar");
                function onAvatarClicked(avatarRef) {
                    const avatarIndex = avatarGroup.items.indexOf(avatarRef);
                    popAvatar.colorScheme =
                        avatarGroup.colorScheme[avatarIndex];
                    popAvatar.initials = avatarRef.initials;
                    while (popAvatar.firstChild) {
                        popAvatar.removeChild(popAvatar.firstChild);
                    }
                    for (let i = 0; i < avatarRef.image.length; i++) {
                        popAvatar.appendChild(avatarRef.image[i].cloneNode());
                    }
                    popAvatar.icon = avatarRef.icon;
                    personPopover.showAt(avatarRef);
                }
                function onButtonClicked(targetRef) {
                    const hiddenItems = avatarGroup.hiddenItems;
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    const firstHiddenIndex =
                        avatarGroup.items.length - hiddenItems.length;
                    let html = "";
                    hiddenItems.forEach((avatar, index) => {
                        const color =
                            avatarGroup.colorScheme[firstHiddenIndex + index];
                        html += \`<div class="avatar-slot" style="padding: 5px">
                <ui5-avatar interactive icon="\${avatar.icon}" initials="\${avatar.initials}" color-scheme="\${color}">\`;
                        if (avatar.image.length > 0) {
                            html += \`<img src="\${avatar.image[0].src}">\`;
                        }
                        html += \`</ui5-avatar></div>\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    if (event.detail.overflowButtonClicked) {
                        onButtonClicked(event.detail.targetRef);
                    } else {
                        onAvatarClicked(event.detail.targetRef);
                    }
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `],['<div class="individual-',`">
        <ui5-popover
            header-text="Person Card"
            class="personPopover"
            style="width: 300px"
            placement-type="Bottom"
            prevent-focus-restore=""
        >
            <div class="avatar-slot" style="display: inline-block;">
                <ui5-avatar id="popAvatar"></ui5-avatar>
            </div>
            <div class="title-slot" style="display: inline-block;">
                <ui5-title level="H5">John Doe</ui5-title>
                <ui5-title level="H5">Software Developer</ui5-title>
            </div>
        </ui5-popover>
        <ui5-popover
            header-text="My people"
            class="peoplePopover"
            style="width: 400px"
            placement-type="Bottom"
        >
            <div
                class="placeholder"
                style="display: flex; flex-wrap: wrap;"
            ></div>
        </ui5-popover>
        <ui5-slider
            id="sliderIndividual"
            min="1"
            max="100"
            value="60"
        ></ui5-slider>
        <ui5-avatar-group type="Individual">
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" icon="employee"></ui5-avatar>
            <ui5-avatar size="M" initials="JD"></ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/woman_avatar_5.png"
                    alt="Woman Avatar 5"
                />
            </ui5-avatar>
            <ui5-avatar size="M">
                <img
                    src="../assets/images/avatars/man_avatar_3.png"
                    alt="Man Avatar 3"
                />
            </ui5-avatar>
        </ui5-avatar-group>
        <script>
            (function () {
                const section = document.querySelector(".individual-`,`");
                const slider = section.querySelector("ui5-slider");
                const avatarGroup = section.querySelector("ui5-avatar-group");
                const peoplePopover = section.querySelector(".peoplePopover");
                const personPopover = section.querySelector(".personPopover");
                const popAvatar = personPopover.querySelector("ui5-avatar");
                function onAvatarClicked(avatarRef) {
                    const avatarIndex = avatarGroup.items.indexOf(avatarRef);
                    popAvatar.colorScheme =
                        avatarGroup.colorScheme[avatarIndex];
                    popAvatar.initials = avatarRef.initials;
                    while (popAvatar.firstChild) {
                        popAvatar.removeChild(popAvatar.firstChild);
                    }
                    for (let i = 0; i < avatarRef.image.length; i++) {
                        popAvatar.appendChild(avatarRef.image[i].cloneNode());
                    }
                    popAvatar.icon = avatarRef.icon;
                    personPopover.showAt(avatarRef);
                }
                function onButtonClicked(targetRef) {
                    const hiddenItems = avatarGroup.hiddenItems;
                    const placeholder =
                        peoplePopover.querySelector(".placeholder");
                    const firstHiddenIndex =
                        avatarGroup.items.length - hiddenItems.length;
                    let html = "";
                    hiddenItems.forEach((avatar, index) => {
                        const color =
                            avatarGroup.colorScheme[firstHiddenIndex + index];
                        html += \\\`<div class="avatar-slot" style="padding: 5px">
                <ui5-avatar interactive icon="\\\${avatar.icon}" initials="\\\${avatar.initials}" color-scheme="\\\${color}">\\\`;
                        if (avatar.image.length > 0) {
                            html += \\\`<img src="\\\${avatar.image[0].src}">\\\`;
                        }
                        html += \\\`</ui5-avatar></div>\\\`;
                    });
                    placeholder.innerHTML = html;
                    peoplePopover.close();
                    peoplePopover.showAt(targetRef);
                }
                avatarGroup.addEventListener("click", function (event) {
                    if (event.detail.overflowButtonClicked) {
                        onButtonClicked(event.detail.targetRef);
                    } else {
                        onAvatarClicked(event.detail.targetRef);
                    }
                });
                avatarGroup.style.width = slider.getAttribute("value") + "%";
                slider.addEventListener("input", function (event) {
                    avatarGroup.style.width = event.target.value + "%";
                });
            })();
        <\/script>
    </div> `])),o,o)),D=()=>n` <ui5-avatar-group type="Individual">
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="S" initials="JD"></ui5-avatar>
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="S">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>
    <br />
    <ui5-avatar-group type="Individual">
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="M" initials="JD"></ui5-avatar>
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="M">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>
    <br />
    <ui5-avatar-group type="Group">
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/man_avatar_1.png"
                alt="Man Avatar 1"
            />
        </ui5-avatar>
        <ui5-avatar size="L" initials="JD"></ui5-avatar>
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/woman_avatar_5.png"
                alt="Woman Avatar 5"
            />
        </ui5-avatar>
        <ui5-avatar size="L">
            <img
                src="../assets/images/avatars/man_avatar_3.png"
                alt="Man Avatar 3"
            />
        </ui5-avatar>
    </ui5-avatar-group>`,m="ui5-avatar-group",K={title:"Main/AvatarGroup",component:m,argTypes:w,parameters:{docs:{page:A({...x,component:m})}}},_=a=>n`<ui5-avatar-group
    .type="${s(a.type)}"
    .aria-haspopup="${s(a.ariaHaspopup)}"
  >
    ${v(a.default)}
    ${v(a.overflowButton)}
  </ui5-avatar-group> `,e=_.bind({});e.args={default:`
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`};const t=_.bind({});t.args={type:z.Individual,default:`
  <ui5-avatar size="M" icon="employee"></ui5-avatar>
  <ui5-avatar size="M" initials="JD"></ui5-avatar>
  <ui5-avatar size="M">
    <img
      src="../assets/images/avatars/woman_avatar_5.png"
      alt="Woman Avatar 5"
    />
  </ui5-avatar>`};const Q=C.bind({}),V=S.bind({}),X=D.bind({});var d,g,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-avatar-group\n    .type="${ifDefined(args.type)}"\n    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.overflowButton)}\n  </ui5-avatar-group> `',...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,M;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:'args => html`<ui5-avatar-group\n    .type="${ifDefined(args.type)}"\n    .aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.overflowButton)}\n  </ui5-avatar-group> `',...(M=(f=t.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};const Y=["TypeGroup","TypeIndividual","TypeIndividualWithPopover","TypeGroupWithPopover","Sizes"];export{X as Sizes,e as TypeGroup,V as TypeGroupWithPopover,t as TypeIndividual,Q as TypeIndividualWithPopover,Y as __namedExportsOrder,K as default};
//# sourceMappingURL=AvatarGroup.stories.c2793fa9.js.map
