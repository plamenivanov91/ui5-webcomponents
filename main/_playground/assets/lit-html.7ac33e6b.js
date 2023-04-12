/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var E;const S=window,f=S.trustedTypes,R=f?f.createPolicy("lit-html",{createHTML:h=>h}):void 0,I="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,P="?"+_,X=`<${P}>`,m=document,x=()=>m.createComment(""),N=h=>h===null||typeof h!="object"&&typeof h!="function",W=Array.isArray,O=h=>W(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",B=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,L=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,Z=h=>(t,...e)=>({_$litType$:h,strings:t,values:e}),tt=Z(1),et=Z(2),C=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),V=new WeakMap,g=m.createTreeWalker(m,129,null,!1),F=(h,t)=>{const e=h.length-1,i=[];let s,o=t===2?"<svg>":"",n=H;for(let l=0;l<e;l++){const r=h[l];let u,$,d=-1,c=0;for(;c<r.length&&(n.lastIndex=c,$=n.exec(r),$!==null);)c=n.lastIndex,n===H?$[1]==="!--"?n=U:$[1]!==void 0?n=L:$[2]!==void 0?(z.test($[2])&&(s=RegExp("</"+$[2],"g")),n=v):$[3]!==void 0&&(n=v):n===v?$[0]===">"?(n=s!=null?s:H,d=-1):$[1]===void 0?d=-2:(d=n.lastIndex-$[2].length,u=$[1],n=$[3]===void 0?v:$[3]==='"'?j:k):n===j||n===k?n=v:n===U||n===L?n=H:(n=v,s=void 0);const T=n===v&&h[l+1].startsWith("/>")?" ":"";o+=n===H?r+X:d>=0?(i.push(u),r.slice(0,d)+I+r.slice(d)+_+T):r+_+(d===-2?(i.push(void 0),l):T)}const a=o+(h[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return[R!==void 0?R.createHTML(a):a,i]};class b{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[r,u]=F(t,e);if(this.el=b.createElement(r,i),g.currentNode=this.el.content,e===2){const $=this.el.content,d=$.firstChild;d.remove(),$.append(...d.childNodes)}for(;(s=g.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const $=[];for(const d of s.getAttributeNames())if(d.endsWith(I)||d.startsWith(_)){const c=u[n++];if($.push(d),c!==void 0){const T=s.getAttribute(c.toLowerCase()+I).split(_),M=/([.?@])?(.*)/.exec(c);l.push({type:1,index:o,name:M[2],strings:T,ctor:M[1]==="."?G:M[1]==="?"?J:M[1]==="@"?K:w})}else l.push({type:6,index:o})}for(const d of $)s.removeAttribute(d)}if(z.test(s.tagName)){const $=s.textContent.split(_),d=$.length-1;if(d>0){s.textContent=f?f.emptyScript:"";for(let c=0;c<d;c++)s.append($[c],x()),g.nextNode(),l.push({type:2,index:++o});s.append($[d],x())}}}else if(s.nodeType===8)if(s.data===P)l.push({type:2,index:o});else{let $=-1;for(;($=s.data.indexOf(_,$+1))!==-1;)l.push({type:7,index:o}),$+=_.length-1}o++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function p(h,t,e=h,i){var s,o,n,a;if(t===C)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const r=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==r&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),r===void 0?l=void 0:(l=new r(h),l._$AT(h,e,i)),i!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=p(h,l._$AS(h,t.values),l,i)),t}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(i,!0);g.currentNode=o;let n=g.nextNode(),a=0,l=0,r=s[0];for(;r!==void 0;){if(a===r.index){let u;r.type===2?u=new y(n,n.nextSibling,this,t):r.type===1?u=new r.ctor(n,r.name,r.strings,this,t):r.type===6&&(u=new Q(n,this,t)),this._$AV.push(u),r=s[++l]}a!==(r==null?void 0:r.index)&&(n=g.nextNode(),a++)}return o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class y{constructor(t,e,i,s){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=p(this,t,e),N(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):O(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=b.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new q(o,this),a=n.u(this.options);n.v(i),this.$(a),this._$AH=n}}_$AC(t){let e=V.get(t.strings);return e===void 0&&V.set(t.strings,e=new b(t)),e}T(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new y(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class w{constructor(t,e,i,s,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=p(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const a=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=p(this,a[i+l],e,l),r===C&&(r=this._$AH[l]),n||(n=!N(r)||r!==this._$AH[l]),r===A?t=A:t!==A&&(t+=(r!=null?r:"")+o[l+1]),this._$AH[l]=r}n&&!s&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class G extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const Y=f?f.emptyScript:"";class J extends w{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class K extends w{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=p(this,t,e,0))!==null&&i!==void 0?i:A)===C)return;const s=this._$AH,o=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==A&&(s===A||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){p(this,t)}}const it={O:I,P:_,A:P,C:1,M:F,L:q,D:O,R:p,I:y,V:w,H:J,N:K,U:G,F:Q},D=S.litHtmlPolyfillSupport;D==null||D(b,y),((E=S.litHtmlVersions)!==null&&E!==void 0?E:S.litHtmlVersions=[]).push("2.7.1");const st=(h,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new y(t.insertBefore(x(),a),a,void 0,e!=null?e:{})}return n._$AI(h),n};export{A,st as B,C as T,it as Z,et as b,tt as x};
//# sourceMappingURL=lit-html.7ac33e6b.js.map
