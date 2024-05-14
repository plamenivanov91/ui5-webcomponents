import{j as e}from"./jsx-runtime-670e1be8.js";import{M as o}from"./index-a1fa0a25.js";import{F as i}from"./Footer-7fca8cff.js";import{u as r}from"./index-bd2d4f36.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-b04f1417.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function s(n){const t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",li:"li",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Development/Custom UI5 Web Components"}),`
`,e.jsx(t.h1,{id:"developing-custom-ui5-web-components",children:"Developing Custom UI5 Web Components"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," All examples in this tutorial are taken from the Demo UI5 Web Component (",e.jsx(t.code,{children:"ui5-demo"}),`), generated by the package initialization script.
For more information on creating a new package with a demo web component inside, click `,e.jsx(t.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components-packages--docs",children:"here"}),"."]}),`
`,e.jsx(t.h3,{id:"the-class-definition",children:"The Class Definition"}),`
`,e.jsx("a",{name:"classdef"}),`
`,e.jsxs(t.p,{children:["The main file representing the web component is ",e.jsx(t.code,{children:"Demo.js"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";


const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}


	static get dependencies() {
		return []; // array of components used internally
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.jsx(t.h3,{id:"the-ui5element-base-class",children:"The UI5Element Base Class"}),`
`,e.jsxs(t.p,{children:["Every UI5 Web Component must extend the base class ",e.jsx(t.code,{children:"UI5Element"}),", provided by the ",e.jsx(t.code,{children:"@ui5/webcomponents-base"})," package:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

class Demo extends UI5Element {

}

export default Demo;
`})}),`
`,e.jsx(t.h3,{id:"the-metadata-object",children:"The Metadata Object"}),`
`,e.jsx(t.p,{children:"Metadata is a JavaScript object, containing information about the public interface of a UI5 Web Component (tag name, properties, slots, events, etc.)."}),`
`,e.jsxs(t.p,{children:["Metadata is passed via the ",e.jsx(t.code,{children:"metadata"})," static getter:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}
}

export default Demo;
`})}),`
`,e.jsxs(t.p,{children:["So far, we've defined a ",e.jsx(t.code,{children:"ui5-demo"})," web component with no properties, slots or events."]}),`
`,e.jsxs(t.p,{children:["For a complete reference to all metadata entities, click ",e.jsx(t.a,{href:"./?path=/docs/docs-development-understanding-components-metadata--docs",children:"here"}),"."]}),`
`,e.jsx(t.h3,{id:"the-render-engine",children:"The Render Engine"}),`
`,e.jsxs(t.p,{children:["UI5 Web Components are agnostic of the DOM render engine used. However, all standard UI5 Web Components (",e.jsx(t.code,{children:"@ui5/webcomponents"}),", ",e.jsx(t.code,{children:"@ui5/webcomponents-fiori"}),`, etc.)
use `,e.jsx(t.a,{href:"https://github.com/Polymer/lit-html",target:"_blank",rel:"nofollow noopener noreferrer",children:"lit-html"})," as the rendering technology of choice."]}),`
`,e.jsxs(t.p,{children:["The render engine is defined via the ",e.jsx(t.code,{children:"renderer"})," static getter:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}
}

export default Demo;
`})}),`
`,e.jsxs(t.p,{children:["Here we import ",e.jsx(t.code,{children:"LitRenderer.js"})," from the ",e.jsx(t.code,{children:"@ui5/webcomponents-base"})," package which is a very tiny wrapper around ",e.jsx(t.code,{children:"lit-html"}),"."]}),`
`,e.jsx(t.h3,{id:"the-template",children:"The Template"}),`
`,e.jsx(t.p,{children:"Now that we've defined the rendering technology of choice, we can pass a template in that technology's syntax."}),`
`,e.jsxs(t.p,{children:["This is done via the ",e.jsx(t.code,{children:"template"})," static getter:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}
}

export default Demo;
`})}),`
`,e.jsxs(t.p,{children:["The standard UI5 Web Components use ",e.jsx(t.a,{href:"https://github.com/wycats/handlebars.js/",target:"_blank",rel:"nofollow noopener noreferrer",children:"handlebars"}),` templates that are automatically converted
to `,e.jsx(t.code,{children:"lit-html"})," syntax by the build script."]}),`
`,e.jsxs(t.p,{children:["If you have a ",e.jsx(t.code,{children:"Demo.hbs"})," file along with the ",e.jsx(t.code,{children:"Demo.js"})," file, the build script is going to create for you ",e.jsx(t.code,{children:"generated/templates/DemoTemplate.lit.js"}),` file.
Therefore, we pass the content of this file to the `,e.jsx(t.code,{children:"template"})," static getter."]}),`
`,e.jsxs(t.p,{children:["For more information, see the ",e.jsx(t.a,{href:"#hbs",children:"next chapter"})," of this tutorial."]}),`
`,e.jsx(t.h3,{id:"the-css-definitions",children:"The CSS Definitions"}),`
`,e.jsxs(t.p,{children:["You can pass CSS to be inserted in the shadow root of the UI5 Web Component by using the ",e.jsx(t.code,{children:"styles"})," static getter:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}
}

export default Demo;
`})}),`
`,e.jsxs(t.p,{children:["If you have a ",e.jsx(t.code,{children:"themes/Demo.css"})," file, the build script will automatically generate for you a ",e.jsx(t.code,{children:"generated/themes/Demo.css.js"}),` file, which
in addition to your component's CSS, also contains definitions for all CSS variables for the default theme. You can define your own CSS
variables for each theme in the respective theme directory in `,e.jsx(t.code,{children:"themes/"}),":"]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"File"}),e.jsx(t.th,{children:"Descriptions"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_horizon/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_horizon"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_horizon_hcb/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_horizon_hcb"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_fiori_3"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),`
`,e.jsxs(t.p,{children:["For more information, see the ",e.jsx(t.a,{href:"#css",children:"CSS"})," chapter of this tutorial."]}),`
`,e.jsx(t.h3,{id:"the-dependencies",children:"The Dependencies"}),`
`,e.jsxs(t.p,{children:["You must import all other web components, used inside the ",e.jsx(t.code,{children:".hbs"})," template file. Otherwise, the internally used web components won't be defined."]}),`
`,e.jsxs(t.p,{children:["Furthermore, in order to make use of the ",e.jsx(t.a,{href:"./?path=/docs/docs-advanced-scoping--docs",children:"Scoping"})," feature, you must list all the internally used web components in the ",e.jsx(t.code,{children:"dependencies"}),` static getter,
as the framework reads the dependencies and scopes the tag names of the listed web components.`]}),`
`,e.jsxs(t.p,{children:[e.jsx("b",{children:"For example:"})," If the ",e.jsx(t.code,{children:"ui5-icon"})," tag (or any other standard or custom UI5 Web Component) is used inside the template, you must import the ",e.jsx(t.code,{children:"Icon"})," web component and add it to the ",e.jsx(t.code,{children:"dependencies"})," static getter as shown below."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";
// Styles
import DemoCss from "./generated/themes/Demo.css.js";

import Icon from "@ui5/webcomponents/dist/Icon.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return [Icon]; // array of components used internally
	}
}

export default Demo;
`})}),`
`,e.jsx(t.h3,{id:"defining-the-web-component",children:"Defining the Web Component"}),`
`,e.jsx(t.p,{children:"Defining a web component is necessary in order to register it in the browser."}),`
`,e.jsxs(t.p,{children:["This is done by calling the ",e.jsx(t.code,{children:"UI5Element.define"})," static method:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.jsx(t.h3,{id:"adding-i18n-support",children:"Adding i18n Support"}),`
`,e.jsx(t.p,{children:"To do that, follow these steps:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Get and assign an i18n bundle during component definition"}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`await Demo.i18nBundle = getI18nBundle("my-ui5-web-components");
`})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"getI18nBundle"})," method is provided by the ",e.jsx(t.code,{children:"i18nBundle.js"})," module from the ",e.jsx(t.code,{children:"@ui5/webcomponents-base"})," package."]}),`
`,e.jsxs(t.ol,{start:"2",children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:['Get texts from the bundle (in this case for the "Count" word), according to the currently ',e.jsx(t.a,{href:"./?path=/docs/docs-advanced-configuration--docs",children:"configured"}),` language
`,e.jsx(t.code,{children:"return Demo.i18nBundle.getText(COUNT);"})]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Create a simple getter ",e.jsx(t.code,{children:"get countText()"})," to use it in the template later-on."]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"So the final source code is:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

import { COUNT } from "./generated/i18n/i18n-defaults.js";


const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}

	static async onDefine() {
		Demo.i18nBundle = await getI18nBundle("my-ui5-web-components");
	}

	get counterText() {
		return Demo.i18nBundle.getText(COUNT);
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.jsxs(t.p,{children:["Please, note that here we use the ",e.jsx(t.code,{children:"onDefine"})," method of ",e.jsx(t.code,{children:"UI5Element"}),` in order to ensure that i18n resources have been fetched
before the web component has been defined. The used namespace for resource registration (in this example `,e.jsx(t.code,{children:"my-ui5-web-components"}),`)
is the `,e.jsx(t.code,{children:"name"})," property of your ",e.jsx(t.code,{children:"package.json"})," file."]}),`
`,e.jsx(t.h2,{id:"adding-a-property",children:"Adding a Property"}),`
`,e.jsxs(t.p,{children:["To add a property, you need to change the metadata object. In this example, new ",e.jsx(t.code,{children:"count"})," property has been added with default value ",e.jsx(t.code,{children:"0"}),". Also, we use a custom type ",e.jsx(t.code,{children:"Integer"})," as validator for the property."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
		counter: {
			validator: Integer,
			defaultValue: 0,
		}
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get renderer() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}

	static async onDefine() {
		Demo.i18nBundle = await getI18nBundle("my-ui5-web-components");
	}

	get countText() {
		return Demo.i18nBundle.getText(COUNT);
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.jsx(t.h2,{id:"the-template-file",children:"The Template File"}),`
`,e.jsx("a",{name:"hbs"}),`
`,e.jsxs(t.p,{children:["The template of the web component is in the ",e.jsx(t.code,{children:"Demo.hbs"}),` file.
In this particular example, it looks like this:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-handlebars",children:`<div>{{countText}} :: {{count}}</div>
`})}),`
`,e.jsxs(t.p,{children:["The context in the template is the ",e.jsx(t.strong,{children:"Web Component instance"}),`, therefore you can directly use any properties/getters on the object.
Here, we see the `,e.jsx(t.code,{children:"countText"}),` getter that will return the "Count" word, translated into the currently configured language
and the `,e.jsx(t.code,{children:"count"}),' property, defined in the previous step (for example, in English we will get "Count :: 0").']}),`
`,e.jsxs(t.p,{children:["As explained above, the ",e.jsx(t.code,{children:".hbs"})," file is transformed by the build script to a ",e.jsx(t.code,{children:".js"})," file in the ",e.jsx(t.code,{children:"lit-html"}),` syntax. More specifically, this file
is provided to the Web Component class.`]}),`
`,e.jsxs(t.p,{children:["For a full description of the ",e.jsx(t.code,{children:".hbs"})," template features and syntax, see ",e.jsxs(t.a,{href:"./?path=/docs/docs-development-understanding-hbs-templates--docs",children:["Understanding the Handlebars (",e.jsx(t.code,{children:".hbs"}),") templates"]}),"."]}),`
`,e.jsx(t.h2,{id:"the-css",children:"The CSS"}),`
`,e.jsx("a",{name:"css"}),`
`,e.jsx(t.p,{children:"Let's inspect the following files (one with CSS declarations, the others with the values of the CSS variables for the themes)."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"File"}),e.jsx(t.th,{children:"Purpose"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/Demo.css"})}),e.jsx(t.td,{children:"All CSS rules for the Web Component, same for all themes; will be inserted in the shadow root."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_horizon/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_horizon"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_horizon_hcb/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_horizon_hcb"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_fiori_3"})," theme."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),e.jsxs(t.td,{children:["Values for the component-specific CSS variables for the ",e.jsx(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"Demo.css"})," file, in addition to other selectors, we have:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`:host {
    border: 2px solid var(--ui5-demo-border-color);
    background-color: var(--sapBackgroundColor);
    color: var(--sapTextColor);
}
`})}),`
`,e.jsxs(t.p,{children:["The CSS variables starting with ",e.jsx(t.code,{children:"--sap"}),` are standard and provided by the framework.
All the rest are custom for the specific web component.`]}),`
`,e.jsxs(t.p,{children:["Respectively, the definitions file for, let's say ",e.jsx(t.code,{children:"sap_fiori_3"}),", contains:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`:root {
    --ui5-demo-border-color: green;
}
`})}),`
`,e.jsxs(t.p,{children:["What's important to understand here is that you author all the ",e.jsx(t.code,{children:".css"}),` files listed in the table above, but the build script
generates from them a single `,e.jsx(t.code,{children:".js"})," file for you, and this is namely the file you pass to the Web Component class: ",e.jsx(t.code,{children:"generated/themes/Demo.css.js"}),"."]}),`
`,e.jsx(i,{})]})}function g(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{g as default};
