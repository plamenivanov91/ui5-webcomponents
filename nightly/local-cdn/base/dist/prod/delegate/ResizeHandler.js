"use strict";import{instanceOfUI5Element as i}from"../UI5Element.js";let n;const l=new Map,a=()=>(n||(n=new window.ResizeObserver(r=>{window.requestAnimationFrame(()=>{r.forEach(t=>{const s=l.get(t.target);s&&Promise.all(s.map(e=>e()))})})})),n),c=(r,t)=>{const s=l.get(r)||[];s.length||a().observe(r),l.set(r,[...s,t])},b=(r,t)=>{const s=l.get(r)||[];if(s.length===0)return;const e=s.filter(o=>o!==t);e.length===0?(a().unobserve(r),l.delete(r)):l.set(r,e)};class f{static register(t,s){let e=t;i(e)&&(e=e.getDomRef()),e instanceof HTMLElement?c(e,s):console.warn("Cannot register ResizeHandler for element",t)}static deregister(t,s){let e=t;i(e)&&(e=e.getDomRef()),e instanceof HTMLElement?b(e,s):console.warn("Cannot deregister ResizeHandler for element",t)}}export default f;
//# sourceMappingURL=ResizeHandler.js.map