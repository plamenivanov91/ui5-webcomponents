(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const $={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},F=$.themes.default,pt=$.themes.all,v=$.languages.default,l=$.locales.default,he=$.locales.all,gt=typeof document>"u",mt=()=>{if(gt)return v;const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||v};var Me={},Fe=Me.hasOwnProperty,Ut=Me.toString,ke=Fe.toString,wt=ke.call(Object),pe=function(e){var t,n;return!e||Ut.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=Fe.call(t,"constructor")&&t.constructor,typeof n=="function"&&ke.call(n)===wt):!0)},yt=Object.create(null),Be=function(e,t,n,s){var o,r,a,i,d,m,h=arguments[2]||{},H=3,dt=arguments.length,de=arguments[0]||!1,ht=arguments[1]?void 0:yt;for(typeof h!="object"&&typeof h!="function"&&(h={});H<dt;H++)if((d=arguments[H])!=null)for(i in d)o=h[i],a=d[i],!(i==="__proto__"||h===a)&&(de&&a&&(pe(a)||(r=Array.isArray(a)))?(r?(r=!1,m=o&&Array.isArray(o)?o:[]):m=o&&pe(o)?o:{},h[i]=Be(de,arguments[1],m,a)):a!==ht&&(h[i]=a));return h};const ze=function(e,t){return Be(!0,!1,...arguments)};class E{constructor(){this._eventRegistry=new Map}attachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!Array.isArray(o)){s.set(t,[n]);return}o.includes(n)||o.push(n)}detachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!o)return;const r=o.indexOf(n);r!==-1&&o.splice(r,1),o.length===0&&s.delete(t)}fireEvent(t,n){const o=this._eventRegistry.get(t);return o?o.map(r=>r.call(this,n)):[]}fireEventAsync(t,n){return Promise.all(this.fireEvent(t,n))}isHandlerAttached(t,n){const o=this._eventRegistry.get(t);return o?o.includes(n):!1}hasListeners(t){return!!this._eventRegistry.get(t)}}const xe=new Map,ge=new Map,St="componentFeatureLoad",_t=new E,At=e=>`${St}_${e}`,cs=(e,t)=>{xe.set(e,t)},S=e=>xe.get(e),us=(e,t,n)=>{const s=ge.get(t);s!=null&&s.includes(e)||(s?s.push(e):ge.set(t,[e]),_t.attachEvent(At(e),n))},Et=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},bt=e=>{const t=Et("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},Tt=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},je=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),s=n.origin;s&&bt(s)?t=n.toString():t=Tt(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var se;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(se||(se={}));const Ct=se;let me=!1,c={animationMode:Ct.Full,theme:F,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1,defaultFontLoading:!0};const ls=()=>(f(),c.animationMode),vt=()=>(f(),c.theme),Lt=()=>(f(),c.themeRoot),Pt=()=>(f(),c.language),$t=()=>(f(),c.fetchDefaultLanguage),fs=()=>(f(),c.noConflict),Rt=()=>(f(),c.defaultFontLoading),ds=()=>(f(),c.calendarType),hs=()=>(f(),c.formatSettings),k=new Map;k.set("true",!0);k.set("false",!1);const Dt=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(c=ze(c,t))}},It=()=>{const e=new URLSearchParams(window.location.search);e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||Ue(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&Ue(n,t,"sap-ui")})},Ot=e=>{const t=e.split("@")[1];return je(t)},Mt=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,Ue=(e,t,n)=>{const s=t.toLowerCase(),o=e.split(`${n}-`)[1];k.has(t)&&(t=k.get(s)),o==="theme"?(c.theme=Mt(o,t),t&&t.includes("@")&&(c.themeRoot=Ot(t))):c[o]=t},Ft=()=>{const e=S("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();c=ze(c,t)},f=()=>{typeof document>"u"||me||(Dt(),It(),Ft(),me=!0)},Ve=new E,Ne="languageChange",We=e=>{Ve.attachEvent(Ne,e)},kt=e=>Ve.fireEventAsync(Ne,e),we=10;class Bt{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const o=s.get(n)||0;if(o>we)throw new Error(`Web component processed too many times this task, max allowed is: ${we}`);t(n),s.set(n,o+1),n=this.shift()}}}const zt=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},xt=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},jt=()=>typeof document>"u"?null:zt('meta[name="ui5-shared-resources"]',document.head,xt),j=(e,t)=>{const n=e.split(".");let s=jt();if(!s)return t;for(let o=0;o<n.length;o++){const r=n[o],a=o===n.length-1;Object.prototype.hasOwnProperty.call(s,r)||(s[r]=a?t:{}),s=s[r]}return s},Vt={version:"2.1.0-rc.2",major:2,minor:1,patch:0,suffix:"-rc.2",isNext:!1,buildTime:1722042052};let I,Nt="";const G=new Map,L=j("Runtimes",[]),Wt=()=>{if(I===void 0){I=L.length;const e=Vt;L.push({...e,alias:Nt,description:`Runtime ${I} - ver ${e.version}`})}},b=()=>I,Ze=(e,t)=>{const n=`${e},${t}`;if(G.has(n))return G.get(n);const s=L[e],o=L[t];if(!s||!o)throw new Error("Invalid runtime index supplied");if(s.isNext||o.isNext)return s.buildTime-o.buildTime;const r=s.major-o.major;if(r)return r;const a=s.minor-o.minor;if(a)return a;const i=s.patch-o.patch;if(i)return i;const m=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,o.suffix);return G.set(n,m),m},Zt=()=>L,He=j("Tags",new Map),ae=new Set;let g=new Map,q;const Ge=-1,ps=e=>{ae.add(e),He.set(e,b())},gs=e=>ae.has(e),Ht=()=>[...ae.values()],ms=e=>{let t=He.get(e);t===void 0&&(t=Ge),g.has(t)||g.set(t,new Set),g.get(t).add(e),q||(q=setTimeout(()=>{Gt(),g=new Map,q=void 0},1e3))},Gt=()=>{const e=Zt(),t=b(),n=e[t];let s="Multiple UI5 Web Components instances detected.";e.length>1&&(s=`${s}
Loading order (versions before 1.1.0 not listed): ${e.map(o=>`
${o.description}`).join("")}`),[...g.keys()].forEach(o=>{let r,a;o===Ge?(r=1,a={description:"Older unknown runtime"}):(r=Ze(t,o),a=e[o]);let i;r>0?i="an older":r<0?i="a newer":i="the same",s=`${s}

"${n.description}" failed to define ${g.get(o).size} tag(s) as they were defined by a runtime of ${i} version "${a.description}": ${[...g.get(o)].sort().join(", ")}.`,r>0?s=`${s}
WARNING! If your code uses features of the above web components, unavailable in ${a.description}, it might not work as expected!`:s=`${s}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),s=`${s}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(s)},qe=new Set,Us=e=>{qe.add(e)},qt=e=>qe.has(e),ie=new Set,Kt=new E,_=new Bt;let U,O,K,R;const Jt=async e=>{_.add(e),await Yt()},Xt=e=>{Kt.fireEvent("beforeComponentRender",e),ie.add(e),e._render()},ws=e=>{_.remove(e),ie.delete(e)},Yt=async()=>{R||(R=new Promise(e=>{window.requestAnimationFrame(()=>{_.process(Xt),R=null,e(),K||(K=setTimeout(()=>{K=void 0,_.isEmpty()&&nn()},200))})})),await R},Qt=()=>U||(U=new Promise(e=>{O=e,window.requestAnimationFrame(()=>{_.isEmpty()&&(U=void 0,e())})}),U),en=()=>{const e=Ht().map(t=>customElements.whenDefined(t));return Promise.all(e)},tn=async()=>{await en(),await Qt()},nn=()=>{_.isEmpty()&&O&&(O(),O=void 0,U=void 0)},Ke=async e=>{ie.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),o=qt(n),r=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&o||e.languageAware&&r||e.themeAware&&a)&&Jt(t)}),await tn()},sn=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),on=typeof document>"u",V=(e,t)=>t?`${e}|${t}`:e,rn=e=>e===void 0?!0:Ze(b(),parseInt(e))===1,N=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=b(),a=new CSSStyleSheet;a.replaceSync(o),a._ui5StyleId=V(t,n),s&&(a._ui5RuntimeIndex=r,a._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]},an=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=b(),a=document.adoptedStyleSheets.find(i=>i._ui5StyleId===V(t,n));if(a)if(!s)a.replaceSync(o||"");else{const i=a._ui5RuntimeIndex;(a._ui5Theme!==s||rn(i))&&(a.replaceSync(o||""),a._ui5RuntimeIndex=String(r),a._ui5Theme=s)}},W=(e,t="")=>on?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===V(e,t)),cn=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==V(e,t))},Je=(e,t,n="",s)=>{W(t,n)?an(e,t,n,s):N(e,t,n,s)},un=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},ln={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},fn={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"};let J;const dn=()=>(J===void 0&&(J=Rt()),J),hn=()=>{const e=S("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&pn(),gn()},pn=()=>{const e=document.querySelector("head>style[data-ui5-font-face]");!dn()||e||W("data-ui5-font-face")||N(ln,"data-ui5-font-face")},gn=()=>{W("data-ui5-font-face-override")||N(fn,"data-ui5-font-face-override")},mn={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},Un=()=>{W("data-ui5-system-css-vars")||N(mn,"data-ui5-system-css-vars")},Xe=new E,Ye="themeRegistered",wn=e=>{Xe.attachEvent(Ye,e)},yn=e=>Xe.fireEvent(Ye,e),ye=new Map,Qe=new Map,Sn=new Map,et=new Set,B=new Set,ys=(e,t,n)=>{Qe.set(`${e}/${t}`,n),et.add(e),B.add(t),yn(t)},tt=async(e,t,n)=>{const s=`${e}_${t}_${n||""}`,o=ye.get(s);if(o!==void 0)return o;if(!B.has(t)){const d=[...B.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${F}. Registered themes are: ${d}`),X(e,F)}const[r,a]=await Promise.all([X(e,t),n?X(e,n,!0):void 0]),i=un(r,a);return i&&ye.set(s,i),i},X=async(e,t,n=!1)=>{const o=(n?Sn:Qe).get(`${e}/${t}`);if(!o){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let r;try{r=await o(t)}catch(i){console.error(e,i.message);return}return r._||r},nt=()=>et,_n=e=>B.has(e),w=new Set,An=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},En=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{w.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),w.add("decode"));return}try{return JSON.parse(n)}catch{w.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),w.add("parse"))}}},bn=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{w.has("object")||(console.warn("Malformed theme metadata Object",e),w.add("object"));return}return{themeName:t,baseThemeName:n}},oe=()=>{const e=An();if(!e||e==="none")return;const t=En(e);if(t)return bn(t)},Tn=new E,Cn="themeLoaded",vn=e=>Tn.fireEvent(Cn,e),Ln=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.href=e,document.head.appendChild(n),new Promise(s=>{n.addEventListener("load",s),n.addEventListener("error",s)})};let T;const st=()=>(T===void 0&&(T=Lt()),T),Ss=e=>{if(T!==e){if(T=e,!je(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return ot(A())}},Pn=e=>`${st()}Base/baseLib/${e}/css_variables.css`,ot=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await Ln(Pn(e),{"sap-ui-webcomponents-theme":e})},P="@ui5/webcomponents-theming",$n=()=>nt().has(P),Rn=async e=>{if(!$n())return;const t=await tt(P,e);t&&Je(t,"data-ui5-theme-properties",P,e)},Dn=()=>{cn("data-ui5-theme-properties",P)},In=async(e,t)=>{const s=[...nt()].map(async o=>{if(o===P)return;const r=await tt(o,e,t);r&&Je(r,`data-ui5-component-properties-${b()}`,o)});return Promise.all(s)},On=async e=>{var s;const t=oe();if(t)return t;const n=S("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(s=n.getConfigurationSettingsObject())==null?void 0:s.theme,baseThemeName:""}}else if(st())return await ot(e),oe()},ce=async e=>{const t=await On(e);!t||e!==t.themeName?await Rn(e):Dn();const n=_n(e)?e:t&&t.baseThemeName;await In(n||F,t&&t.themeName===e?e:void 0),vn(e)};let y;const A=()=>(y===void 0&&(y=vt()),y),_s=async e=>{y!==e&&(y=e,at()&&(await ce(y),await Ke({themeAware:!0})))},Mn=()=>{var t,n;const e=A();return Fn(e)?!e.startsWith("sap_horizon"):!((n=(t=oe())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},Fn=e=>pt.includes(e);let Z=!1,D;const rt=new E,at=()=>Z,As=e=>{if(!Z){rt.attachEvent("boot",e);return}e()},Es=async()=>{if(D!==void 0)return D;const e=async t=>{if(Wt(),typeof document>"u"){t();return}wn(kn);const n=S("OpenUI5Support"),s=n?n.isOpenUI5Detected():!1,o=S("F6Navigation");n&&await n.init(),o&&!s&&o.init(),await sn(),await ce(A()),n&&n.attachListeners(),hn(),Un(),t(),Z=!0,await rt.fireEventAsync("boot")};return D=new Promise(e),D},kn=e=>{Z&&e===A()&&ce(A())};let C,re;const Bn=()=>(C===void 0&&(C=Pt()),C),bs=async e=>{C!==e&&(C=e,at()&&(await kt(e),await Ke({languageAware:!0})))},zn=e=>{re=e},xn=()=>(re===void 0&&zn($t()),re),jn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class it{constructor(t){const n=jn.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||v,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const Y=new Map,ct=e=>(Y.has(e)||Y.set(e,new it(e)),Y.get(e)),Se=e=>{try{if(e&&typeof e=="string")return ct(e)}catch{}return new it(l)},M=e=>{if(e)return Se(e);const t=Bn();return t?ct(t):Se(mt())},Vn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,_e=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,Nn={he:"iw",yi:"ji",nb:"no",sr:"sh"},Wn=e=>{let t;if(!e)return l;if(typeof e=="string"&&(t=Vn.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const o=t[2]?t[2].toLowerCase():void 0,r=t[4]?t[4].slice(1):void 0,a=t[6];return n=Nn[n]||n,a&&(t=_e.exec(a))||r&&(t=_e.exec(r))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(o==="hans"?s="CN":o==="hant"&&(s="TW")),n+(s?"_"+s+(r?"_"+r.replace("-","_"):""):""))}return l},Zn=e=>{if(!e)return l;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==l?l:""},Ae=new Set,Ee=new Set,ue=new Map,Q=new Map,le=new Map,Ts=(e,t,n)=>{const s=`${e}/${t}`;le.set(s,n)},be=(e,t)=>{ue.set(e,t)},Cs=e=>ue.get(e),ut=(e,t)=>{const n=`${e}/${t}`;return le.has(n)},Hn=(e,t)=>{const n=`${e}/${t}`,s=le.get(n);return s&&!Q.get(n)&&Q.set(n,s(t)),Q.get(n)},Gn=e=>{Ae.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),Ae.add(e))},Te=(e,t)=>t!==v&&!ut(e,t),qn=async e=>{const t=M().getLanguage(),n=M().getRegion(),s=M().getVariant();let o=t+(n?`-${n}`:"")+(s?`-${s}`:"");if(Te(e,o))for(o=Wn(o);Te(e,o);)o=Zn(o);const r=xn();if(o===v&&!r){be(e,null);return}if(!ut(e,o)){Gn(e);return}try{const a=await Hn(e,o);be(e,a)}catch(a){const i=a;Ee.has(i.message)||(Ee.add(i.message),console.error(i.message))}};We(e=>{const t=[...ue.keys()];return Promise.all(t.map(qn))});const Kn=new Map,z=new Map,ee=new Map,Ce=new Set;let ve=!1;const Jn={iw:"he",ji:"yi",in:"id"},Le=e=>{ve||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),ve=!0)},Xn=(e,t,n)=>{e=e&&Jn[e]||e,e==="no"&&(e="nb"),e==="zh"&&!t&&(n==="Hans"?t="CN":n==="Hant"&&(t="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",t="Latn");let s=`${e}_${t}`;return he.includes(s)||(s=e,he.includes(s))?z.has(s)?s:(Le(s),l):l},Pe=(e,t)=>{Kn.set(e,t)},Yn=e=>{if(!ee.get(e)){const t=z.get(e);if(!t)throw new Error(`CLDR data for locale ${e} is not loaded!`);ee.set(e,t(e))}return ee.get(e)},Qn=async(e,t,n)=>{const s=Xn(e,t,n),o=S("OpenUI5Support");if(o){const r=o.getLocaleDataObject();if(r){Pe(s,r);return}}try{const r=await Yn(s);Pe(s,r)}catch(r){const a=r;Ce.has(a.message)||(Ce.add(a.message),console.error(a.message))}},es=(e,t)=>{z.set(e,t)};es("en",async()=>(await fetch("https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json")).json());We(()=>{const e=M();return Qn(e.getLanguage(),e.getRegion(),e.getScript())});var x;(function(e){e["SAP-icons"]="SAP-icons-v4",e.horizon="SAP-icons-v5",e["SAP-icons-TNT"]="tnt",e.BusinessSuiteInAppSymbols="business-suite"})(x||(x={}));const lt=e=>x[e]?x[e]:e;var p;(function(e){e.SAPIconsV4="SAP-icons-v4",e.SAPIconsV5="SAP-icons-v5",e.SAPIconsTNTV2="tnt-v2",e.SAPIconsTNTV3="tnt-v3",e.SAPBSIconsV1="business-suite-v1",e.SAPBSIconsV2="business-suite-v2"})(p||(p={}));const u=new Map;u.set("SAP-icons",{legacy:p.SAPIconsV4,sap_horizon:p.SAPIconsV5});u.set("tnt",{legacy:p.SAPIconsTNTV2,sap_horizon:p.SAPIconsTNTV3});u.set("business-suite",{legacy:p.SAPBSIconsV1,sap_horizon:p.SAPBSIconsV2});const ts=(e,t)=>{if(u.has(e)){u.set(e,{...t,...u.get(e)});return}u.set(e,t)},$e=e=>{const t=Mn()?"legacy":"sap_horizon";return u.has(e)?u.get(e)[t]:e},ns=new Map,ss=e=>ns.get(e),ft=e=>{const t=ss(A());return!e&&t?lt(t):$e(e||"SAP-icons")},os="legacy",Re=new Map,fe=j("SVGIcons.registry",new Map),te=j("SVGIcons.promises",new Map),De="ICON_NOT_FOUND",rs=async e=>{if(!te.has(e)){if(!Re.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=Re.get(e);te.set(e,t(e))}return te.get(e)},Ie=e=>{Object.keys(e.data).forEach(t=>{const n=e.data[t];as(t,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:e.collection,packageName:e.packageName})})},as=(e,t)=>{const n=`${t.collection}/${e}`;fe.set(n,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},is=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=lt(t)),{name:e,collection:t}},ne=async e=>{const{name:t,collection:n}=is(e);let s=De;try{s=await rs(ft(n))}catch(r){console.error(r.message)}if(s===De)return s;const o=Oe(n,t);return o||(Array.isArray(s)?s.forEach(r=>{Ie(r),ts(n,{[r.themeFamily||os]:r.collection})}):Ie(s),Oe(n,t))},Oe=(e,t)=>{const n=`${ft(e)}/${t}`;return fe.get(n)},vs=async()=>(await ne("edit"),await ne("tnt/arrow"),await ne("business-suite/3d"),Array.from(fe.keys()));export{A,st as B,Ss as C,dn as D,E,b as F,Ts as G,tn as H,vs as _,As as a,Es as b,cs as c,Ke as d,j as e,qn as f,Cs as g,W as h,S as i,fs as j,Xt as k,ws as l,Us as m,us as n,gs as o,ms as p,ps as q,ys as r,_s as s,ze as t,Jt as u,ls as v,ds as w,hs as x,Bn as y,bs as z};