"use strict";import p from"./thirdparty/merge.js";import{getFeature as g}from"./FeaturesRegistry.js";import{DEFAULT_THEME as u}from"./generated/AssetParameters.js";import m from"./validateThemeRoot.js";import d from"./types/AnimationMode.js";let f=!1,t={animationMode:d.Full,theme:u,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const l=()=>(o(),t.animationMode),h=()=>(o(),t.theme),y=()=>(o(),t.themeRoot),C=()=>(o(),t.language),S=()=>(o(),t.fetchDefaultLanguage),T=()=>(o(),t.noConflict),U=()=>(o(),t.calendarType),I=()=>(o(),t.secondaryCalendarType),L=()=>(o(),t.timezone),O=()=>(o(),t.formatSettings),i=new Map;i.set("true",!0),i.set("false",!1);const R=()=>{const n=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let e;if(n){try{e=JSON.parse(n.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}e&&(t=p(t,e))}},M=()=>{const n=new URLSearchParams(window.location.search);n.forEach((e,r)=>{const a=r.split("sap-").length;a===0||a===r.split("sap-ui-").length||c(r,e,"sap")}),n.forEach((e,r)=>{r.startsWith("sap-ui")&&c(r,e,"sap-ui")})},F=n=>{const e=n.split("@")[1];return m(e)},w=(n,e)=>n==="theme"&&e.includes("@")?e.split("@")[0]:e,c=(n,e,r)=>{const a=e.toLowerCase(),s=n.split(`${r}-`)[1];i.has(e)&&(e=i.get(a)),s==="theme"?(t.theme=w(s,e),e&&e.includes("@")&&(t.themeRoot=F(e))):t[s]=e},z=()=>{const n=g("OpenUI5Support");if(!n||!n.isOpenUI5Detected())return;const e=n.getConfigurationSettingsObject();t=p(t,e)},o=()=>{typeof document>"u"||f||(R(),M(),z(),f=!0)};export{l as getAnimationMode,h as getTheme,y as getThemeRoot,C as getLanguage,S as getFetchDefaultLanguage,T as getNoConflict,U as getCalendarType,I as getSecondaryCalendarType,L as getTimezone,O as getFormatSettings};
//# sourceMappingURL=InitialConfiguration.js.map