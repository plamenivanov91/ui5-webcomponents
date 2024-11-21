"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2115],{32444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>T,default:()=>B,frontMatter:()=>D,metadata:()=>E,toc:()=>k});var i=t(31085),s=t(71184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" header-text="Register Form">\n        <section class="login-form">\n            <div>\n                <ui5-label for="username" required show-colon>Username</ui5-label>\n                <ui5-input id="username"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="password" required show-colon>Password</ui5-label>\n                <ui5-input id="password" type="Password" value-state="Negative"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="email" type="Email" required show-colon>Email</ui5-label>\n                <ui5-input id="email"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="address" show-colon>Address</ui5-label>\n                <ui5-input id="address"></ui5-input>\n            </div>\n        </section>\n        <ui5-toolbar slot="footer">\n            <ui5-toolbar-button\n                class="dialogCloser"\n                design="Emphasized"\n                text="Submit"\n            >\n            </ui5-toolbar-button>\n            <ui5-toolbar-button\n                class="dialogCloser"\n                design="Transparent"\n                text="Cancel"\n            >\n            </ui5-toolbar-button>\n        </ui5-toolbar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/Link.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Toolbar.js"\nimport "@ui5/webcomponents/dist/ToolbarButton.js"\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})',l=".login-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    margin: 3rem 6rem;\n}\n\n.login-form > div {\n    display: grid;\n    width: 15rem;\n    margin-bottom: .5rem;\n}\n\n@media(max-width: 600px) {\n    .login-form {\n        margin: 3rem 1rem;\n    }\n}";function o(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:d,js:r,css:l})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" header-text="Draggable/Resizable dialog" draggable resizable>\n        <p>Move this dialog around the screen by dragging it by its header.</p>\n        <p>Resize this dialog by dragging it by its resize handle.</p>\n        <p>These features are available only on Desktop.</p>\n        <ui5-toolbar slot="footer">\n            <ui5-toolbar-button class="dialogCloser" design="Emphasized" text="OK"></ui5-toolbar-button>\n        </ui5-toolbar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Toolbar.js";\nimport "@ui5/webcomponents/dist/ToolbarButton.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})';function x(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:a,js:h})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}const p='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog">\n        <ui5-bar slot="header" design="Header">\n            <ui5-title level="H5" slot="startContent">Bar used in Header and Footer</ui5-title>\n            <ui5-button class="dialogCloser" design="Transparent" id="closeDialogButton" slot="endContent"\n                icon="decline"></ui5-button>\n        </ui5-bar>\n        <p>Adding styles for the parts to remove the default Dialog\'s paddings when ui5-bar is used inside Header and\n            Footer</p>\n        <ui5-bar slot="footer" design="Footer">\n            <ui5-button class="dialogCloser" design="Emphasized" slot="endContent"\n                style="min-width: 4rem;">OK</ui5-button>\n        </ui5-bar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',u='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents/dist/Bar.js";\nimport "@ui5/webcomponents-icons/dist/decline.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})',g="#dialog::part(header),\n#dialog::part(footer) {\n    padding-inline: 0;\n}";function b(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:p,js:u,css:g})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}const f='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" state="Negative" header-text="State :: Negative">\n        <ui5-text>Dialog with state</ui5-text>\n        <ui5-toolbar slot="footer">\n            <ui5-toolbar-button class="dialogCloser" text="Close"></ui5-toolbar-button>\n        </ui5-toolbar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',v='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Text.js";\nimport "@ui5/webcomponents/dist/Toolbar.js";\nimport "@ui5/webcomponents/dist/ToolbarButton.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog"); \nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})';function y(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:f,js:v})}function w(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}const D={slug:"../Dialog",ui5_tag_name:"ui5-dialog"},T=void 0,E={id:"components/main/Dialog",title:"Dialog",description:"The ui5-dialog component is used to temporarily display some information in a",source:"@site/docs/components/main/Dialog.mdx",sourceDirName:"components/main",slug:"/components/Dialog",permalink:"/ui5-webcomponents/nightly/components/Dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Dialog",ui5_tag_name:"ui5-dialog"},sidebar:"componentsSidebar",previous:{title:"DateTimePicker",permalink:"/ui5-webcomponents/nightly/components/DateTimePicker"},next:{title:"FileUploader",permalink:"/ui5-webcomponents/nightly/components/FileUploader"}},C={},k=[{value:"Structure",id:"structure",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Resizing",id:"resizing",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"headerText",id:"headertext",level:3},{value:"stretch",id:"stretch",level:3},{value:"draggable",id:"draggable",level:3},{value:"resizable",id:"resizable",level:3},{value:"state",id:"state",level:3},{value:"initialFocus",id:"initialfocus",level:3},{value:"preventFocusRestore",id:"preventfocusrestore",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"accessibleRole",id:"accessiblerole",level:3},{value:"preventInitialFocus",id:"preventinitialfocus",level:3},{value:"open",id:"open",level:3},{value:"Slots",id:"slots",level:2},{value:"header",id:"header",level:3},{value:"footer",id:"footer",level:3},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"before-open",id:"before-open",level:3},{value:"open",id:"open-1",level:3},{value:"before-close",id:"before-close",level:3},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"applyFocus",id:"applyfocus",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Draggable and Resizable",id:"draggable-and-resizable",level:3},{value:"Usage of Bar as header/footer",id:"usage-of-bar-as-headerfooter",level:3},{value:"States",id:"states",level:3}];function S(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," component is used to temporarily display some information in a\nsize-limited window in front of the regular app screen.\nIt is used to prompt the user for an action or a confirmation.\nThe ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," interrupts the current app processing as it is the only focused UI element and\nthe main screen is dimmed/blocked.\nThe dialog combines concepts known from other technologies where the windows have\nnames such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is modal, which means that a user action is required before it is possible to return to the parent window.\nTo open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.\nThe content of the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is fully customizable."]}),"\n",(0,i.jsx)(n.h3,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," consists of a header, content, and a footer for action buttons.\nThe ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is usually displayed at the center of the screen.\nIts position can be changed by the user. To enable this, you need to set the property ",(0,i.jsx)(n.code,{children:"draggable"})," accordingly."]}),"\n",(0,i.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"stretch"})," property can be used to stretch the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," to full screen. For better usability, it's recommended to stretch the dialog to full screen on phone devices."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the header or in the footer, you should remove the default dialog's paddings."]}),"\n",(0,i.jsx)(n.p,{children:'For more information see the sample "Bar in Header/Footer".'}),"\n",(0,i.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsx)(n.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," has the ",(0,i.jsx)(n.code,{children:"draggable"})," property set to ",(0,i.jsx)(n.code,{children:"true"})," and the header is focused, the user can move the dialog\nwith the following keyboard shortcuts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Up] or [Down] arrow keys - Move the dialog up/down."}),"\n",(0,i.jsx)(n.li,{children:"[Left] or [Right] arrow keys - Move the dialog left/right."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"resizing",children:"Resizing"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," has the ",(0,i.jsx)(n.code,{children:"resizable"})," property set to ",(0,i.jsx)(n.code,{children:"true"})," and the header is focused, the user can change the size of the dialog\nwith the following keyboard shortcuts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog."}),"\n",(0,i.jsx)(n.li,{children:"[Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Dialog";'})}),"\n",(0,i.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"headertext",children:"headerText"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the header text.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:"header"})," slot is provided, the ",(0,i.jsx)(n.code,{children:"headerText"})," is ignored."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"stretch",children:"stretch"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Determines if the dialog will be stretched to full screen on mobile. On desktop, the dialog will be stretched to approximately 90% of the viewport.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"}),' For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"draggable",children:"draggable"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The component can be draggable only in desktop mode.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"}),' This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.9"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"resizable",children:"resizable"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The component can be resizable only in desktop mode.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Upon resizing, externally defined height and width styling will be ignored."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.10"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"state",children:"state"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the state of the ",(0,i.jsx)(n.code,{children:"Dialog"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:'"Negative"'})," and ",(0,i.jsx)(n.code,{children:'"Critical"'}),' states is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to ',(0,i.jsx)(n.code,{children:'"Dialog"'}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'"None"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"initialfocus",children:"initialFocus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the ID of the HTML Element, which will get the initial focus.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If an element with ",(0,i.jsx)(n.code,{children:"autofocus"})," attribute is added inside the component, ",(0,i.jsx)(n.code,{children:"initialFocus"})," won't take effect."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"preventfocusrestore",children:"preventFocusRestore"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines if the focus should be returned to the previously focused element, when the popup closes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the accessible name of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the IDs of the elements that label the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.1.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblerole",children:"accessibleRole"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Allows setting a custom role."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"None" | "Dialog" | "AlertDialog"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'"Dialog"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"preventinitialfocus",children:"preventInitialFocus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Indicates whether initial focus should be prevented."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Indicates if the element is open"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.2.0"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the header HTML Element.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the header, you should remove the default dialog's paddings.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:"header"})," slot is provided, the labelling of the dialog is a responsibility of the application developer. ",(0,i.jsx)(n.code,{children:"accessibleName"})," should be used."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"footer",children:"footer"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the footer HTML Element.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the footer, you should remove the default dialog's paddings."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the content of the Popup."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"before-open",children:"before-open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bubbles"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cancelable"}),(0,i.jsxs)(n.td,{children:["Yes - via ",(0,i.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"open-1",children:"open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired after the component is opened."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bubbles"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cancelable"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"before-close",children:"before-close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<PopupBeforeCloseEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"escPressed"}),": ",(0,i.jsx)(n.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicates that ",(0,i.jsx)(n.code,{children:"ESC"})," key has triggered the event."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bubbles"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cancelable"}),(0,i.jsxs)(n.td,{children:["Yes - via ",(0,i.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired after the component is closed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bubbles"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cancelable"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"applyfocus",children:"applyFocus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Focuses the element denoted by ",(0,i.jsx)(n.code,{children:"initialFocus"}),", if provided, or the first focusable element otherwise."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Promise<void>"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"Used to style the header of the component"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"Used to style the content of the component"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"footer"}),(0,i.jsx)(n.td,{children:"Used to style the footer of the component"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(n.h3,{id:"draggable-and-resizable",children:"Draggable and Resizable"}),"\n",(0,i.jsx)(j,{}),"\n",(0,i.jsx)(n.h3,{id:"usage-of-bar-as-headerfooter",children:"Usage of Bar as header/footer"}),"\n",(0,i.jsx)(n.p,{children:"The Bar component can be used as header and/or footer of the Dialog"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,i.jsx)(n.p,{children:'The Dialog supports "Positive", "Critical", "Negative" and "None" states via the "state" property.'}),"\n",(0,i.jsx)(w,{})]})}function B(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(14041);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);