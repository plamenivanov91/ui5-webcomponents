var n,l,u,t,i,o,r,e,f,c,s,a,h,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function w(n,l){for(var u in l)n[u]=l[u];return n}function _(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function g(l,u,t){var i,o,r,e={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=u[r];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===e[r]&&(e[r]=l.defaultProps[r]);return m(l,e,i,o,null)}function m(n,t,i,o,r){var e={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(e),e}function b(){return{current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l}function C(n,l){if(null==l)return n.__?C(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?C(n):null}function S(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return S(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!P.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(P)}function P(){var n,u,t,o,r,f,c,s;for(i.sort(e);n=i.shift();)n.__d&&(u=i.length,o=void 0,f=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=w({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),F(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[f]:null,c,null==f?C(r):f,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,z(c,o,s),o.__e!=f&&S(o)),i.length>u&&i.sort(e));P.__r=0}function $(n,l,u,t,i,o,r,e,f,c,s){var a,h,y,d,w,_,g=t&&t.__k||v,m=l.length;for(f=I(u,l,g,f),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1===y.__i?p:g[y.__i]||p,y.__i=a,_=F(n,y,h,i,o,r,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&V(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=H(y,f,n):"function"==typeof y.type&&void 0!==_?f=_:d&&(f=d.nextSibling),y.__u&=-7);return u.__e=w,f}function I(n,l,u,t){var i,o,r,e,f,c=l.length,s=u.length,a=s,h=0;for(n.__k=[],i=0;i<c;i++)null!=(o=l[i])&&"boolean"!=typeof o&&"function"!=typeof o?(e=i+h,(o=n.__k[i]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):d(o)?m(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,r=null,-1!==(f=o.__i=O(o,u,e,a))&&(a--,(r=u[f])&&(r.__u|=2)),null==r||null===r.__v?(-1==f&&h--,"function"!=typeof o.type&&(o.__u|=4)):f!==e&&(f==e-1?h--:f==e+1?h++:(f>e?h--:h++,o.__u|=4))):o=n.__k[i]=null;if(a)for(i=0;i<s;i++)null!=(r=u[i])&&0==(2&r.__u)&&(r.__e==t&&(t=C(r)),q(r,r));return t}function H(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=H(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=C(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function L(n,l){return l=l||[],null==n||"boolean"==typeof n||(d(n)?n.some(function(n){L(n,l)}):l.push(n)),l}function O(n,l,u,t){var i=n.key,o=n.type,r=u-1,e=u+1,f=l[u];if(null===f||f&&i==f.key&&o===f.type&&0==(2&f.__u))return u;if(("function"!=typeof o||o===k||i)&&t>(null!=f&&0==(2&f.__u)?1:0))for(;r>=0||e<l.length;){if(r>=0){if((f=l[r])&&0==(2&f.__u)&&i==f.key&&o===f.type)return r;r--}if(e<l.length){if((f=l[e])&&0==(2&f.__u)&&i==f.key&&o===f.type)return e;e++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px"}function j(n,l,u,t,i){var o,r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(f,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=c,n.addEventListener(l,o?a:s,o)):n.removeEventListener(l,o?a:s,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{r=n.tagName&&n.tagName.includes("-"),u!==t&&(n[l]=null!=u||r?u:"");break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function A(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function F(n,u,t,i,o,r,e,f,c,s){var a,h,p,v,y,g,m,b,C,S,M,P,I,H,L,O,T,j=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[f=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,C="prototype"in j&&j.prototype.render,S=(a=j.contextType)&&i[a.__c],M=a?S?S.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(C?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=B),S&&S.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),C&&null==h.__s&&(h.__s=h.state),C&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=w({},h.__s)),w(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)C&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),C&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(C&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),C&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,g)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,I=l.__r,H=0,C){for(h.state=h.__s,h.__d=!1,I&&I(u),a=h.render(h.props,h.state,h.context),L=0;L<h._sb.length;L++)h.__h.push(h._sb[L]);h._sb=[]}else do{h.__d=!1,I&&I(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++H<25);h.state=h.__s,null!=h.getChildContext&&(i=w(w({},i),h.getChildContext())),C&&!p&&null!=h.getSnapshotBeforeUpdate&&(g=h.getSnapshotBeforeUpdate(v,y)),f=$(n,d(O=null!=a&&a.type===k&&null==a.key?a.props.children:a)?O:[O],u,t,i,o,r,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r)if(n.then){for(u.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;r[r.indexOf(f)]=null,u.__e=f}else for(T=r.length;T--;)_(r[T]);else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=N(t.__e,u,t,i,o,r,e,c,s);return(a=l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)V(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(u,t,i,o,r,e,f,c,s){var a,h,v,y,w,g,m,b,k=i.props,x=t.props,S=t.type;if("svg"===S?r="http://www.w3.org/2000/svg":"math"===S?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!S&&(S?w.localName===S:3===w.nodeType)){u=w,e[a]=null;break}if(null==u){if(null===S)return document.createTextNode(x);u=document.createElementNS(r,S,x.is&&x),c&&(l.__m&&l.__m(t,e),c=!1),e=null}if(null===S)k===x||c&&u.data===x||(u.data=x);else{if(e=e&&n.call(u.childNodes),k=i.props||p,!c&&null!=e)for(k={},a=0;a<u.attributes.length;a++)k[(w=u.attributes[a]).name]=w.value;for(a in k)if(w=k[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in x)){if("value"==a&&"defaultValue"in x||"checked"==a&&"defaultChecked"in x)continue;j(u,a,null,w,r)}for(a in x)w=x[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?g=w:"checked"==a?m=w:c&&"function"!=typeof w||k[a]===w||(a.startsWith("on")&&(b=o[Object.keys(o)[0]].props.value,w=w.bind(b)),j(u,a,w,k[a],r));if(h)c||v&&(h.__html===v.__html||h.__html===u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),$(u,d(y)?y:[y],t,i,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":r,e,f,e?e[0]:i.__k&&C(i,0),c,s),null!=e)for(a=e.length;a--;)_(e[a]);c||(a="value","progress"===S&&null==g?u.removeAttribute("value"):void 0!==g&&(g!==u[a]||"progress"===S&&!g||"option"===S&&g!==k[a])&&j(u,a,g,k[a],r),a="checked",void 0!==m&&m!==u[a]&&j(u,a,m,k[a],r))}return u}function V(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function q(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],u,t||"function"!=typeof n.type);t||_(n.__e),n.__c=n.__=n.__e=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,t,i){var o,r,e,f;t===document&&(t=document.documentElement),l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],F(t,u=(!o&&i||t).__k=g(k,null,[u]),r||p,p,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,e,!o&&i?i:r?r.__e:t.firstChild,o,f),z(e,u,f)}function E(n,l){D(n,l,E)}function G(l,u,t){var i,o,r,e,f=w({},l.props);for(r in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=void 0===u[r]&&void 0!==e?e[r]:u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),m(l.type,f,i||l.key,o||l.ref,null)}function J(n,l){var u={__c:l="__cC"+h++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=v.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w({},this.state),"function"==typeof n&&(n=n(w({},u),this.props)),n&&w(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},x.prototype.render=k,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,f=/(PointerCapture)$|Capture$/i,c=0,s=A(!1),a=A(!0),h=0;export{x as Component,k as Fragment,G as cloneElement,J as createContext,g as createElement,b as createRef,g as h,E as hydrate,t as isValidElement,l as options,D as render,L as toChildArray};
