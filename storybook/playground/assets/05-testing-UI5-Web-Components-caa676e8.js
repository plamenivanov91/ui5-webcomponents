import{j as e}from"./jsx-runtime-670e1be8.js";import{M as t}from"./index-a584648d.js";import{F as i}from"./Footer-33373cd2.js";import{u as o}from"./index-bd2d4f36.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-3809b771.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function r(s){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h2:"h2",h4:"h4",ul:"ul",li:"li",em:"em",pre:"pre",ol:"ol",h3:"h3"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Development/Testing UI5 Web Components"}),`
`,e.jsx(n.h1,{id:"testing-ui5-web-components",children:"Testing UI5 Web Components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," All examples in this tutorial are taken from the demo UI5 Web Component (",e.jsx(n.code,{children:"ui5-demo"}),`), generated by the package initialization script.
For more information on creating a new package with a demo web component inside, click `,e.jsx(n.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components-packages--docs",children:"here"}),"."]}),`
`,e.jsx(n.h2,{id:"1-prerequisites",children:"1. Prerequisites"}),`
`,e.jsxs(n.p,{children:["The test framework of choice for UI5 Web Components is ",e.jsx(n.a,{href:"https://webdriver.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebdriverIO"}),` or WDIO for short.
It has a straightforward API - `,e.jsx(n.a,{href:"https://webdriver.io/docs/api.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api.html"}),", and has excellent support for Web Components."]}),`
`,e.jsxs(n.p,{children:["The browser of choice for test execution is ",e.jsx(n.a,{href:"https://www.google.com/chrome/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Google Chrome"}),", respectively the WebDriver used is ",e.jsx(n.a,{href:"https://chromedriver.chromium.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ChromeDriver"}),"."]}),`
`,e.jsx(n.h4,{id:"managing-chromedriver",children:"Managing ChromeDriver"}),`
`,e.jsxs(n.p,{children:["ChromeDriver is a peer dependency of ",e.jsx(n.code,{children:"@ui5/webcomponents-tools"}),". Therefore, you are expected to install and upgrade it manually."]}),`
`,e.jsxs(n.p,{children:["You can install it with ",e.jsx(n.code,{children:"npm"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm i --save-dev chromedriver"})}),`
`]}),`
`,e.jsxs(n.p,{children:["or with ",e.jsx(n.code,{children:"yarn"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"yarn add -D chromedriver"})}),`
`]}),`
`,e.jsx(n.p,{children:`Google Chrome and ChromeDriver need to be the same version to work together. Whenever you update Google Chrome on
your system (or it updates automatically, if allowed), you are expected to also update ChromeDriver to the respective version.`}),`
`,e.jsx(n.h2,{id:"2-running-the-tests",children:"2. Running the tests"}),`
`,e.jsx(n.h2,{id:"21-test-configuration",children:"2.1 Test configuration"}),`
`,e.jsxs(n.p,{children:["The configuration for WDIO can be found in the ",e.jsx(n.code,{children:"config/"})," directory under ",e.jsx(n.code,{children:"wdio.conf.js"}),"."]}),`
`,e.jsxs(n.p,{children:["As explained ",e.jsx(n.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components-packages--docs",children:"here"})," in the section about the ",e.jsx(n.code,{children:"config/"}),` directory, you can
customize, or even completely replace the default configuration.`]}),`
`,e.jsx(n.p,{children:"However, before doing so, please note the following two benefits of working with the default configuration, provided by UI5 Web Components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Hooks, synchronizing the execution of all relevant WDIO commands (e.g. ",e.jsx(n.code,{children:"click"}),", ",e.jsx(n.code,{children:"url"}),", ",e.jsx(n.code,{children:"$"}),", ",e.jsx(n.code,{children:"$$"}),`) with the rendering of the framework to
ensure consistency when reading or changing the state of the components.`]}),`
`,e.jsxs(n.li,{children:["Additional API methods: ",e.jsx(n.code,{children:"setProperty"}),", ",e.jsx(n.code,{children:"setAttribute"}),", ",e.jsx(n.code,{children:"removeAttribute"}),", ",e.jsx(n.code,{children:"hasClass"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"So our recommendation would be to modify it, if necessary, but not completely replace it."}),`
`,e.jsx(n.h2,{id:"22-running-all-tests",children:"2.2 Running all tests"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npm run test"})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn test"})}),`
`,e.jsxs(n.p,{children:["This will ",e.jsx(n.em,{children:"launch a static server"})," and execute all tests found in the ",e.jsx(n.code,{children:"test/specs/"})," directory of your package."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Before running the tests for the first time, make sure you've built the project, or at least the dev server is running (",e.jsx(n.code,{children:"build"})," or ",e.jsx(n.code,{children:"start"})," commands)."]}),`
`,e.jsx(n.h2,{id:"23-running-a-single-test-spec",children:"2.3 Running a single test spec"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npm run test test/specs/Demo.spec.js"})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn test test/specs/Demo.spec.js"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Executing a single test spec only makes sense for debugging purposes, therefore no test server is launched for it.
Make sure you're running the `,e.jsx(n.code,{children:"start"}),` command while running single test specs, as it provides a server and the ability to change
files, and test the changes on the fly.`]}),`
`,e.jsx(n.h2,{id:"3-writing-tests",children:"3. Writing tests"}),`
`,e.jsx(n.p,{children:"The simplest test would look something like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe("ui5-demo rendering", async () => {
	await browser.url("test/pages/index.html");

	it("tests if web component is correctly rendered", async () => {
		const innerContent = await browser.$("#myFirstComponent").shadow$("div");
		assert.ok(innerContent, "content rendered");
	});
});
`})}),`
`,e.jsx(n.p,{children:"Key points:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Load the test page with the ",e.jsx(n.code,{children:"browser.url"})," command. You can do this once for each test suite or for each individual test."]}),`
`,e.jsxs(n.li,{children:["You can access the web components with ",e.jsx(n.code,{children:"$"})," or ",e.jsx(n.code,{children:"$$"}),"."]}),`
`,e.jsxs(n.li,{children:["You can access the shadow roots with ",e.jsx(n.code,{children:"shadow$"})," or ",e.jsx(n.code,{children:"shadow$$"}),"."]}),`
`,e.jsxs(n.li,{children:["Simulate mouse interaction with the web components by calling the ",e.jsx(n.code,{children:"click"})," command on the web component itself or certain parts of its shadow root."]}),`
`,e.jsxs(n.li,{children:["Simulate keyboard with the ",e.jsx(n.code,{children:"keys"})," command."]}),`
`,e.jsxs(n.li,{children:["You can read the DOM with commands such as ",e.jsx(n.code,{children:"getHTML"}),", ",e.jsx(n.code,{children:"getProperty"}),", ",e.jsx(n.code,{children:"getAttribute"}),", etc."]}),`
`,e.jsxs(n.li,{children:["You can modify the DOM with commands such as ",e.jsx(n.code,{children:"setProperty"}),", ",e.jsx(n.code,{children:"setAttribute"})," etc."]}),`
`]}),`
`,e.jsx(n.p,{children:"For WDIO capabilities, see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Official API: ",e.jsx(n.a,{href:"https://webdriver.io/docs/api.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api.html"}),"."]}),`
`,e.jsxs(n.li,{children:["Additional commands provided in our standard WDIO configuration: ",e.jsx(n.code,{children:"setProperty"}),", ",e.jsx(n.code,{children:"setAttribute"}),", ",e.jsx(n.code,{children:"removeAttribute"}),", ",e.jsx(n.code,{children:"hasClass"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` The standard WDIO configuration we provide automatically synchronizes all test commands' execution with the framework rendering cycle.
Therefore, in the example above, the `,e.jsx(n.code,{children:"shadow$"}),` command will internally wait for all rendering to be over before being executed. The
same holds true for commands that modify the DOM such as `,e.jsx(n.code,{children:"setAttribute"})," or ",e.jsx(n.code,{children:"click"}),"."]}),`
`,e.jsx(n.h2,{id:"4-debugging-tests",children:"4. Debugging tests"}),`
`,e.jsx(n.p,{children:"Debugging with WDIO is really simple. Just follow these 3 steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Change the WDIO configuration file ",e.jsx(n.code,{children:"config/wdio.conf.js"})," to disable ",e.jsx(n.code,{children:"headless"})," mode for Google Chrome as follows:"]}),`
`,e.jsx(n.p,{children:"From:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`module.exports = require("@ui5/webcomponents-tools/components-package/wdio.js");
`})}),`
`,e.jsx(n.p,{children:"to:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const result = require("@ui5/webcomponents-tools/components-package/wdio.js");
result.config.capabilities[0]["goog:chromeOptions"].args = ['--disable-gpu']; // From: ['--disable-gpu', '--headless']
module.exports = result;
`})}),`
`,e.jsx(n.p,{children:"If you happen to debug often, it's recommended to keep the file in this format and just comment out the middle line when you're done debugging."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Set a breakpoint with ",e.jsx(n.code,{children:"browser.debug"})," somewhere in your test:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`it("tests if web component is correctly rendered", async () => {
    const innerContent = await browser.$("#myFirstComponent").shadow$("div");
    await browser.debug();
    assert.ok(innerContent, "content rendered");
});
`})}),`
`,e.jsxs(n.p,{children:["For more on ",e.jsx(n.code,{children:"debug"}),", see ",e.jsx(n.a,{href:"https://webdriver.io/docs/api/browser/debug.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api/browser/debug.html"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run the single test spec and wait for the browser to open and pause on your breakpoint:"}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run the dev server, if you haven't already:"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn start"})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npm run start"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run the single test spec:"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn test test/specs/Demo.spec.js"})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npm run test test/specs/Demo.spec.js"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:`Google Chrome will then open in a new window, controlled by WDIO via the ChromeDriver, and your test will pause on your
breakpoint of choice. Proceed to debug normally.`}),`
`,e.jsx(n.h2,{id:"5-best-practices-for-writing-tests",children:"5. Best practices for writing tests"}),`
`,e.jsxs(n.h3,{id:"51-do-not-overuse-assertok",children:["5.1 Do not overuse ",e.jsx(n.code,{children:"assert.ok"})]}),`
`,e.jsxs(n.p,{children:["When an ",e.jsx(n.code,{children:"assert.ok"}),` fails, the error you get is "Expected something to be true, but it was false". This is fine when you're passing a Boolean, but not ok when there is an expression inside `,e.jsx(n.code,{children:"assert.ok"})," and you'd like to know which part of the expression is not as expected."]}),`
`,e.jsxs(n.p,{children:["For example, when ",e.jsx(n.code,{children:'assert.ok(a === b, "They match")'})," fails, the error just says that an expression that was expected to be true was false. However, if you use ",e.jsx(n.code,{children:'assert.strictEqual(a, b, "They match")'}),", and it fails, the error will say that ",e.jsx(n.code,{children:"a"})," was expected to be a certain value, but it was another value, which makes it much easier to debug."]}),`
`,e.jsx(n.p,{children:"Prefer one of the following, when applicable:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.notOk(a)"})," instead of ",e.jsx(n.code,{children:"assert.ok(!a)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.strictEqual(a, b)"})," instead of ",e.jsx(n.code,{children:"assert.ok(a === b)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.isBelow(a, b)"})," instead of ",e.jsx(n.code,{children:"assert.ok(a < b)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.isAbove(a, b)"})," instead of ",e.jsx(n.code,{children:"assert.ok(a > b)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.exists"})," / ",e.jsx(n.code,{children:"assert.notExists"})," when checking for ",e.jsx(n.code,{children:"null"})," or ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"52-do-not-overuse-assertstrictequal",children:["5.2 Do not overuse ",e.jsx(n.code,{children:"assert.strictEqual"})]}),`
`,e.jsx(n.p,{children:"Use:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.ok"})," instead of ",e.jsx(n.code,{children:"assert.strictEqual(a, true)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assert.notOk"})," instead of ",e.jsx(n.code,{children:"assert.strictEqual(a, false)"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"53-use-isexisting-to-check-the-dom",children:["5.3 Use ",e.jsx(n.code,{children:"isExisting"})," to check the DOM"]}),`
`,e.jsx(n.p,{children:"Preferred:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`assert.ok(await browser.$(<SELECTOR>).isExisting())
`})}),`
`,e.jsx(n.p,{children:"instead of:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`assert.ok((await browser.$$(<SELECTOR>)).length)
`})}),`
`,e.jsxs(n.h3,{id:"54-do-not-use-browserexecuteasync-for-properties",children:["5.4 Do not use ",e.jsx(n.code,{children:"browser.executeAsync"})," for properties"]}),`
`,e.jsxs(n.p,{children:["We have custom commands such as ",e.jsx(n.code,{children:"getProperty"})," and ",e.jsx(n.code,{children:"setProperty"})," to fill in gaps in the WDIO standard command set. Use them instead of manually setting properties with ",e.jsx(n.code,{children:"executeAsync"}),"."]}),`
`,e.jsxs(n.h3,{id:"55-use-assertinclude-instead-of-string-functions",children:["5.5 Use ",e.jsx(n.code,{children:"assert.include"})," instead of string functions"]}),`
`,e.jsx(n.p,{children:"Use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`assert.include(text, EXPECTED_TEXT, "Text found")
assert.notInclude(text, NOT_EXPECTED_TEXT, "Text not found")
`})}),`
`,e.jsx(n.p,{children:"instead of:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`assert.ok(text.indexOf(EXPECTED_TEXT) > -1, "Text found")
assert.ok(text.includes(EXPECTED_TEXT), "Text found")
assert.notOk(text.includes(NOT_EXPECTED_TEXT), "Text not found")
`})}),`
`,e.jsx(n.h3,{id:"56-extract-variables-before-asserting",children:"5.6 Extract variables before asserting"}),`
`,e.jsxs(n.p,{children:["Avoid complex expressions inside ",e.jsx(n.code,{children:"assert"}),"s by extracting parts of them to variables and only asserting the variables."]}),`
`,e.jsx(n.h2,{id:"6-using-the-synchronous-syntax-for-writing-tests",children:"6. Using the synchronous syntax for writing tests"}),`
`,e.jsxs(n.p,{children:["WebdriverIO still supports (although now deprecated) the ",e.jsx(n.em,{children:"synchronous"})," syntax for writing tests. Click ",e.jsx(n.a,{href:"https://webdriver.io/docs/sync-vs-async/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),' for more information on "sync vs async".']}),`
`,e.jsxs(n.p,{children:["UI5 Web Components versions up to, including, ",e.jsx(n.code,{children:"1.0.0-rc.15"}),", used to recommend the ",e.jsx(n.em,{children:"synchronous"})," syntax, as it is easier to use."]}),`
`,e.jsxs(n.p,{children:["If you have already written tests for your custom UI5 Web Components using the ",e.jsx(n.em,{children:"synchronous"})," syntax, and you update to a later version than ",e.jsx(n.code,{children:"1.0.0-rc.15"}),`, your tests will no longer run.
You have 2 options:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rewrite all tests to use the ",e.jsx(n.em,{children:"asynchronous"})," syntax. Click the link above to see some examples. This is the ",e.jsx(n.strong,{children:"recommended"})," approach, because the ",e.jsx(n.em,{children:"synchronous"})," syntax will no longer work with future ",e.jsx(n.code,{children:"nodejs"})," versions."]}),`
`,e.jsxs(n.li,{children:["For the time being, adapt your WebdriverIO configuration to continue supporting the ",e.jsx(n.em,{children:"synchronous"})," syntax."]}),`
`]}),`
`,e.jsx(i,{})]})}function f(s={}){const{wrapper:n}=Object.assign({},o(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{f as default};