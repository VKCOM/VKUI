try{
(()=>{var br=Object.defineProperty;var w=(o,e)=>()=>(o&&(e=o(o=0)),e);var Ct=(o,e)=>{for(var t in e)br(o,t,{get:e[t],enumerable:!0})};var d=w(()=>{});var v,h=w(()=>{v={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var p=w(()=>{});var be={};Ct(be,{Children:()=>wr,Component:()=>Ye,Fragment:()=>E,Profiler:()=>_r,PureComponent:()=>$r,StrictMode:()=>Ir,Suspense:()=>Ge,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Sr,act:()=>Er,cloneElement:()=>Ar,createContext:()=>Cr,createElement:()=>Pr,createFactory:()=>Tr,createRef:()=>Mr,default:()=>z,forwardRef:()=>kr,isValidElement:()=>Rr,lazy:()=>We,memo:()=>Br,startTransition:()=>Nr,unstable_act:()=>Or,useCallback:()=>O,useContext:()=>Lr,useDebugValue:()=>Hr,useDeferredValue:()=>Dr,useEffect:()=>B,useId:()=>Fr,useImperativeHandle:()=>Ur,useInsertionEffect:()=>Vr,useLayoutEffect:()=>jr,useMemo:()=>Z,useReducer:()=>zr,useRef:()=>Yr,useState:()=>k,useSyncExternalStore:()=>Gr,useTransition:()=>Wr,version:()=>Zr});var z,wr,Ye,E,_r,$r,Ir,Ge,Sr,Er,Ar,Cr,Pr,Tr,Mr,kr,Rr,We,Br,Nr,Or,O,Lr,Hr,Dr,B,Fr,Ur,Vr,jr,Z,zr,Yr,k,Gr,Wr,Zr,ne=w(()=>{d();h();p();z=__REACT__,{Children:wr,Component:Ye,Fragment:E,Profiler:_r,PureComponent:$r,StrictMode:Ir,Suspense:Ge,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Sr,act:Er,cloneElement:Ar,createContext:Cr,createElement:Pr,createFactory:Tr,createRef:Mr,forwardRef:kr,isValidElement:Rr,lazy:We,memo:Br,startTransition:Nr,unstable_act:Or,useCallback:O,useContext:Lr,useDebugValue:Hr,useDeferredValue:Dr,useEffect:B,useId:Fr,useImperativeHandle:Ur,useInsertionEffect:Vr,useLayoutEffect:jr,useMemo:Z,useReducer:zr,useRef:Yr,useState:k,useSyncExternalStore:Gr,useTransition:Wr,version:Zr}=__REACT__});var tn,on,rn,nn,sn,an,ln,cn,dn,hn,pn,un,R,fn,mn,gn,vn,m,yn,bn,xn,wn,_n,$n,In,xe=w(()=>{d();h();p();tn=__STORYBOOK_THEMING__,{CacheProvider:on,ClassNames:rn,Global:nn,ThemeProvider:sn,background:an,color:ln,convert:cn,create:dn,createCache:hn,createGlobal:pn,createReset:un,css:R,darken:fn,ensure:mn,ignoreSsrWarning:gn,isPropValid:vn,jsx:m,keyframes:yn,lighten:bn,styled:xn,themes:wn,typography:_n,useTheme:$n,withTheme:In}=__STORYBOOK_THEMING__});var Pn,Tn,Mn,Pt,kn,Rn,Bn,Nn,On,Ln,Hn,Dn,Fn,Un,Vn,Tt,jn,zn,Yn,Gn,Wn,Zn,qn,Kn,we,Xn,Jn,se,Qn,es,ts,os,rs,L,is,ns,ss,as,Mt,ls,cs,ds,hs,ps,us,fs,ms,gs,vs,kt,ys,bs,xs,ws,_s,$s,Is,Ss,Es,As,Cs,Ps,Ts,Ms,ks,Rs,_e=w(()=>{d();h();p();Pn=__STORYBOOK_COMPONENTS__,{A:Tn,ActionBar:Mn,AddonPanel:Pt,Badge:kn,Bar:Rn,Blockquote:Bn,Button:Nn,ClipboardCode:On,Code:Ln,DL:Hn,Div:Dn,DocumentWrapper:Fn,EmptyTabContent:Un,ErrorFormatter:Vn,FlexBar:Tt,Form:jn,H1:zn,H2:Yn,H3:Gn,H4:Wn,H5:Zn,H6:qn,HR:Kn,IconButton:we,Img:Xn,LI:Jn,Link:se,ListItem:Qn,Loader:es,Modal:ts,OL:os,P:rs,Placeholder:L,Pre:is,ProgressSpinner:ns,ResetWrapper:ss,ScrollArea:as,Separator:Mt,Spaced:ls,Span:cs,StorybookIcon:ds,StorybookLogo:hs,SyntaxHighlighter:ps,TT:us,TabBar:fs,TabButton:ms,TabWrapper:gs,Table:vs,Tabs:kt,TabsState:ys,TooltipLinkList:bs,TooltipMessage:xs,TooltipNote:ws,UL:_s,WithTooltip:$s,WithTooltipPure:Is,Zoom:Ss,codeCommon:Es,components:As,createCopyToClipboardFunction:Cs,getStoryHref:Ps,interleaveSeparators:Ts,nameSpaceClassNames:Ms,resetComponents:ks,withReset:Rs}=__STORYBOOK_COMPONENTS__});function Qr(o,e){let t=new URL(o);t.hostname=t.hostname.replace(/^www\./,"embed."),t.searchParams.delete("embed_origin"),t.searchParams.set("embed-host",e);for(let[r,i]of t.searchParams)t.searchParams.delete(r),t.searchParams.set(r.replace(/_/g,"-"),i);return t.href}var $e,qr,Kr,Xr,Ze,Jr,Rt,Ie=w(()=>{d();h();p();ne();xe();_e();$e=({config:o,defer:e=!1})=>{let[t,r]=k(e?void 0:o.url),[i,n]=k(!1);return B(()=>{if(!e)return;let s=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(s)},[e,o.url]),B(()=>{n(!1)},[t]),m("div",{css:qr},!i&&m(L,{css:Kr},"Loading..."),m("iframe",{css:Xr,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>n(!0)}))},qr=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,Kr=R`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,Xr=R`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`,Ze=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,Jr=o=>Ze.test(o),Rt=({config:o})=>{let e=Z(()=>Jr(o.url)?{url:Qr(o.url,o.embedHost||location.hostname),allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return m($e,{defer:!0,config:e})}});var Ee,Ae,Xe,Ht,ae,Dt,T,Je,Ce,Qe=w(()=>{d();h();p();Ee=window,Ae=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),Ht=new WeakMap,ae=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ae&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ht.set(t,e))}return e}toString(){return this.cssText}},Dt=o=>new ae(typeof o=="string"?o:o+"",void 0,Xe),T=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ae(t,o,Xe)},Je=(o,e)=>{Ae?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=Ee.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},Ce=Ae?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Dt(t)})(o):o});var et,Pe,Ft,ei,Ut,ot,Vt,tt,rt,U,Te=w(()=>{d();h();p();Qe();Qe();Pe=window,Ft=Pe.trustedTypes,ei=Ft?Ft.emptyScript:"",Ut=Pe.reactiveElementPolyfillSupport,ot={toAttribute(o,e){switch(e){case Boolean:o=o?ei:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Vt=(o,e)=>e!==o&&(e==e||o==o),tt={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Vt},rt="finalized",U=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||tt}static finalize(){if(this.hasOwnProperty(rt))return!1;this[rt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(Ce(i))}else e!==void 0&&t.push(Ce(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Je(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=tt){var i;let n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){let s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ot).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){let s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ot;this._$El=n,this[n]=c.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Vt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};U[rt]=!0,U.elementProperties=new Map,U.elementStyles=[],U.shadowRootOptions={mode:"open"},Ut?.({ReactiveElement:U}),((et=Pe.reactiveElementVersions)!==null&&et!==void 0?et:Pe.reactiveElementVersions=[]).push("1.6.3")});function eo(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(e):e}function te(o,e,t=o,r){var i,n,s,c;if(e===V)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,u=de(e)?void 0:e._$litDirective$;return a?.constructor!==u&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),u===void 0?a=void 0:(a=new u(o),a._$AT(o,t,r)),r!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=te(o,a._$AS(o,e.values),a,r)),e}var it,Me,ee,jt,st,Y,Kt,ti,X,ce,de,Xt,oi,nt,le,zt,Yt,q,Gt,Wt,Jt,Qt,$,M,V,A,Zt,K,ri,he,at,pe,oe,lt,ii,ct,dt,ht,qt,to,ue=w(()=>{d();h();p();Me=window,ee=Me.trustedTypes,jt=ee?ee.createPolicy("lit-html",{createHTML:o=>o}):void 0,st="$lit$",Y=`lit$${(Math.random()+"").slice(9)}$`,Kt="?"+Y,ti=`<${Kt}>`,X=document,ce=()=>X.createComment(""),de=o=>o===null||typeof o!="object"&&typeof o!="function",Xt=Array.isArray,oi=o=>Xt(o)||typeof o?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Yt=/>/g,q=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gt=/'/g,Wt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Qt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),$=Qt(1),M=Qt(2),V=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Zt=new WeakMap,K=X.createTreeWalker(X,129,null,!1);ri=(o,e)=>{let t=o.length-1,r=[],i,n=e===2?"<svg>":"",s=le;for(let c=0;c<t;c++){let a=o[c],u,l,f=-1,g=0;for(;g<a.length&&(s.lastIndex=g,l=s.exec(a),l!==null);)g=s.lastIndex,s===le?l[1]==="!--"?s=zt:l[1]!==void 0?s=Yt:l[2]!==void 0?(Jt.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=q):l[3]!==void 0&&(s=q):s===q?l[0]===">"?(s=i??le,f=-1):l[1]===void 0?f=-2:(f=s.lastIndex-l[2].length,u=l[1],s=l[3]===void 0?q:l[3]==='"'?Wt:Gt):s===Wt||s===Gt?s=q:s===zt||s===Yt?s=le:(s=q,i=void 0);let x=s===q&&o[c+1].startsWith("/>")?" ":"";n+=s===le?a+ti:f>=0?(r.push(u),a.slice(0,f)+st+a.slice(f)+Y+x):a+Y+(f===-2?(r.push(void 0),c):x)}return[eo(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},he=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0,c=e.length-1,a=this.parts,[u,l]=ri(e,t);if(this.el=o.createElement(u,r),K.currentNode=this.el.content,t===2){let f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(i=K.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let f=[];for(let g of i.getAttributeNames())if(g.endsWith(st)||g.startsWith(Y)){let x=l[s++];if(f.push(g),x!==void 0){let _=i.getAttribute(x.toLowerCase()+st).split(Y),I=/([.?@])?(.*)/.exec(x);a.push({type:1,index:n,name:I[2],strings:_,ctor:I[1]==="."?lt:I[1]==="?"?ct:I[1]==="@"?dt:oe})}else a.push({type:6,index:n})}for(let g of f)i.removeAttribute(g)}if(Jt.test(i.tagName)){let f=i.textContent.split(Y),g=f.length-1;if(g>0){i.textContent=ee?ee.emptyScript:"";for(let x=0;x<g;x++)i.append(f[x],ce()),K.nextNode(),a.push({type:2,index:++n});i.append(f[g],ce())}}}else if(i.nodeType===8)if(i.data===Kt)a.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(Y,f+1))!==-1;)a.push({type:7,index:n}),f+=Y.length-1}n++}}static createElement(e,t){let r=X.createElement("template");return r.innerHTML=e,r}};at=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:X).importNode(r,!0);K.currentNode=n;let s=K.nextNode(),c=0,a=0,u=i[0];for(;u!==void 0;){if(c===u.index){let l;u.type===2?l=new pe(s,s.nextSibling,this,e):u.type===1?l=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(l=new ht(s,this,e)),this._$AV.push(l),u=i[++a]}c!==u?.index&&(s=K.nextNode(),c++)}return K.currentNode=X,n}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},pe=class o{constructor(e,t,r,i){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),de(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):oi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&de(this._$AH)?this._$AA.nextSibling.data=e:this.$(X.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=he.createElement(eo(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(r);else{let s=new at(n,this),c=s.u(this.options);s.v(r),this.$(c),this._$AH=s}}_$AC(e){let t=Zt.get(e.strings);return t===void 0&&Zt.set(e.strings,t=new he(e)),t}T(e){Xt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new o(this.k(ce()),this.k(ce()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},oe=class{constructor(e,t,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let n=this.strings,s=!1;if(n===void 0)e=te(this,e,t,0),s=!de(e)||e!==this._$AH&&e!==V,s&&(this._$AH=e);else{let c=e,a,u;for(e=n[0],a=0;a<n.length-1;a++)u=te(this,c[r+a],t,a),u===V&&(u=this._$AH[a]),s||(s=!de(u)||u!==this._$AH[a]),u===A?e=A:e!==A&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},lt=class extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},ii=ee?ee.emptyScript:"",ct=class extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,ii):this.element.removeAttribute(this.name)}},dt=class extends oe{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=te(this,e,t,0))!==null&&r!==void 0?r:A)===V)return;let i=this._$AH,n=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ht=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}},qt=Me.litHtmlPolyfillSupport;qt?.(he,pe),((it=Me.litHtmlVersions)!==null&&it!==void 0?it:Me.litHtmlVersions=[]).push("2.8.0");to=(o,e,t)=>{var r,i;let n=(r=t?.renderBefore)!==null&&r!==void 0?r:e,s=n._$litPart$;if(s===void 0){let c=(i=t?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new pe(e.insertBefore(ce(),c),c,void 0,t??{})}return s._$AI(o),s}});var pt,ut,H,oo,ro=w(()=>{d();h();p();Te();Te();ue();ue();H=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=to(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return V}};H.finalized=!0,H._$litElement$=!0,(pt=globalThis.litElementHydrateSupport)===null||pt===void 0||pt.call(globalThis,{LitElement:H});oo=globalThis.litElementPolyfillSupport;oo?.({LitElement:H});((ut=globalThis.litElementVersions)!==null&&ut!==void 0?ut:globalThis.litElementVersions=[]).push("3.3.3")});var io=w(()=>{d();h();p();});var D=w(()=>{d();h();p();Te();ue();ro();io()});var no=w(()=>{d();h();p();});function C(o){return(e,t)=>t!==void 0?si(o,e,t):ni(o,e)}var ni,si,ft=w(()=>{d();h();p();ni=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},si=(o,e,t)=>{e.constructor.createProperty(t,o)}});var so=w(()=>{d();h();p();ft();});var J=w(()=>{d();h();p();});var ao=w(()=>{d();h();p();J();});var lo=w(()=>{d();h();p();J();});var co=w(()=>{d();h();p();J();});var ho=w(()=>{d();h();p();J();});var mt,Lu,gt=w(()=>{d();h();p();J();Lu=((mt=window.HTMLSlotElement)===null||mt===void 0?void 0:mt.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var po=w(()=>{d();h();p();J();gt();});var re=w(()=>{d();h();p();no();ft();so();ao();lo();co();ho();gt();po()});var j,uo,ke=w(()=>{d();h();p();D();j=({title:o,children:e})=>$`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,uo=T`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var fo,mo,Re,go=w(()=>{d();h();p();fo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mo=o=>(...e)=>({_$litDirective$:o,values:e}),Re=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var vo,ai,Q,yo=w(()=>{d();h();p();ue();go();vo="important",ai=" !"+vo,Q=mo(class extends Re{constructor(o){var e;if(super(o),o.type!==fo.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];if(i!=null){this.ht.add(r);let n=typeof i=="string"&&i.endsWith(ai);r.includes("-")||n?t.setProperty(r,n?i.slice(0,-11):i,n?vo:""):t[r]=i}}return V}})});var Be=w(()=>{d();h();p();yo()});function bo(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function wo(o,e){let t=bo(o),r=bo(e),i=!(t.top>r.bottom||t.bottom<r.top),n=!(t.left>r.right||t.right<r.left);if(n&&i){let l={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:r.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:r.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:r.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:r.bottom,x:l.x}]}]}let s=t.left>r.right,c=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[n?null:{points:[{x:s?t.left:t.right,y:a.y},{x:s?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:s?r.right:r.left,y:a.y},{x:s?r.right:r.left,y:c?r.bottom:r.top}]},i?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?r.bottom:r.top,x:a.x}],bisector:n?void 0:[{y:c?r.bottom:r.top,x:a.x},{y:c?r.bottom:r.top,x:s?r.right:r.left}]}].filter(l=>!!l)}function me(o){return Math.round(o*100)/100}function Ne(o,e){return[...xo(o),...xo(e)]}function xo(o){return o?o instanceof Array?o:[o]:[]}var ge=w(()=>{d();h();p()});var li,_o,$o=w(()=>{d();h();p();re();li=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},_o=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return li([C({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function Oe(o){return o.touches.length===0||o.touches.length>2}function ci(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Io,So=w(()=>{d();h();p();Io=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{Oe(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{Oe(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{Oe(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(Oe(r))return;let i=Array.from(this.previousTouches||[]),n=Array.from(r.touches);if(this.previousTouches=r.touches,!(n.length!==i.length||!n.every(s=>i.some(c=>c.identifier===s.identifier)))){if(n.length===1){this.onTouchPan({x:n[0].pageX-i[0].pageX,y:n[0].pageY-i[0].pageY});return}this.onTouchPinch(ci({x:n[0].pageX,y:n[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var ve,F,Eo,Ao,Co=w(()=>{d();h();p();re();So();ve=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},F=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},Eo=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},Ao=o=>{var e,t,r,i,n;class s extends Io(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,f)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=f/this.scale/window.devicePixelRatio}),r.set(this,l=>{l.code==="Space"&&!F(this,e,"f")&&(Eo(this,e,!0,"f"),document.body.style.cursor="grab")}),i.set(this,l=>{l.code==="Space"&&F(this,e,"f")&&(Eo(this,e,!1,"f"),document.body.style.cursor="auto")}),n.set(this,()=>{document.addEventListener("keyup",F(this,i,"f")),document.addEventListener("keydown",F(this,r,"f"))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:f}=l;l.deltaMode===1&&(f*=15);let g=this.scale;this.scale*=1-f/((1e3-this.zoomSpeed)*.5);let x=l.offsetX-this.offsetWidth/2,_=l.offsetY-this.offsetHeight/2;this.panX+=x/this.scale-x/g,this.panY+=_/this.scale-_/g}else{let f=this.panSpeed*.002;this.panX-=l.deltaX*f/this.scale,this.panY-=l.deltaY*f/this.scale}},{passive:!1});let u=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),u=this.scale}),this.addEventListener("gesturechange",l=>{let f=l;f.preventDefault(),this.scale=u*f.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),F(this,t,"f").call(this,l.movementX,l.movementY))}),F(this,n,"f").call(this),this.onmousedown=()=>{F(this,e,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:f})=>{F(this,t,"f").call(this,l,f)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",F(this,i,"f")),document.removeEventListener("keydown",F(this,r,"f")),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,n=new WeakMap,ve([C({attribute:!1})],s.prototype,"panX",void 0),ve([C({attribute:!1})],s.prototype,"panY",void 0),ve([C({attribute:!1})],s.prototype,"scale",void 0),ve([C({type:Number,attribute:"zoom-speed"})],s.prototype,"zoomSpeed",void 0),ve([C({type:Number,attribute:"pan-speed"})],s.prototype,"panSpeed",void 0),s}});var di,hi,Po,To,Mo,ko=w(()=>{d();h();p();D();Be();ge();di=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:M`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&M`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${Q({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},hi=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let n=me(Math.max(r,i)).toString(10),s=n.length*t*.5,c=t*.25,a=t*.25,u=t*.5,l=r>i?(o.points[0].x+o.points[1].x)/2-s/2:o.points[0].x,f=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,g=[`scale(${e})`,r>i?`translate(0, ${c+a})`:`translate(${c+u}, 0)`].join(" "),x=l+s/2,_=f+t/2,I=r>i?`${x} ${f}`:`${l} ${_}`;return M`
    <g class="distance-tooltip">
      <rect
        x=${l-u}
        y=${f-a}
        rx="2"
        width=${s+u*2}
        height=${t+a*2}
        transform=${g}
        transform-origin=${I}
        stroke="none"
      />

      <text
        x=${x}
        y=${f+t-a/2}
        text-anchor="middle"
        transform=${g}
        transform-origin=${I}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${n}
      </text>
    </g>
  `},Po=new Map,To=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,n=Po.get(i);return n||(n=wo(o.absoluteBoundingBox,e.absoluteBoundingBox),Po.set(i,n)),[...n.map(s=>di({guide:s,reverseScale:t})),...n.map(s=>hi({guide:s,reverseScale:t,fontSize:r}))]},Mo=T`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var Ro,yt,Bo,No,Oo,bt=w(()=>{d();h();p();D();Ro=({onClick:o=()=>{}})=>M`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,yt=({onClick:o=()=>{}})=>M`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,Bo=()=>M`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,No=()=>M`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Oo=()=>M`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var ie,ui,xt,Le,Lo,fi,wt,Ho=w(()=>{d();h();p();ie=o=>o.a===0?"transparent":o.a<1?`rgba(${Lo(o).join(", ")}, ${o.a.toFixed(2)})`:fi(o),ui=o=>new xt(o).cssColor,xt=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>ie(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Le=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=ie(s)}let n=(i=e.fills)===null||i===void 0?void 0:i[0];if(n&&n.visible!==!1&&(e.type==="TEXT"?this.color=ie(n.color):n.type.includes("GRADIENT")?this.backgroundImage=ui(n):n.type==="SOLID"&&(this.background=ie(n.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=ie(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:c,color:a}=e.effects[0];this.boxShadowColor=ie(a),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(wt).join(`
`)}},Lo=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],fi=o=>{let[e,t,r]=Lo(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},wt=({property:o,value:e})=>`${o}: ${e};`});var mi,_t,Do,gi,vi,Fo,Uo=w(()=>{d();h();p();D();bt();Ho();mi=function(o,e,t,r){function i(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function c(l){try{u(r.next(l))}catch(f){s(f)}}function a(l){try{u(r.throw(l))}catch(f){s(f)}}function u(l){l.done?n(l.value):i(l.value).then(c,a)}u((r=r.apply(o,e||[])).next())})},_t=o=>mi(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),Do=({node:o,onClose:e})=>{if(!o)return null;let t=new Le(o),r=i=>i.stopPropagation();return $`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Ro({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?$`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?$`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&$`<p class="inspector-property">
              ${Bo()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&$`<p class="inspector-property">
              ${No()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?$`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${yt({onClick:()=>_t(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${gi(t)}
    </div>
  `},gi=o=>{let e=()=>_t(o.getStyleSheet()),t=o.getStyles();return $`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${yt({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(vi)}
    </div>
  </div>`},vi=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=$`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=$`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return $`<div class="css-property" @click=${()=>_t(wt(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},Fo=T`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var $t,Vo,jo,zo=w(()=>{d();h();p();D();Be();ge();$t=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:n,width:s,height:c}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},u=t/2,l=(_,I)=>`M${_},${I}`,f=(_,I)=>`L${_},${I}`,g=(_,I,P)=>`A${_},${_} 0 0 1 ${I},${P}`,x=[l(a.topLeft+u,u),f(s-a.topRight,u),g(a.topRight-u,s-u,a.topRight),f(s-u,c-a.bottomRight),g(a.bottomRight-u,s-a.bottomRight,c-u),f(a.bottomLeft,c-u),g(a.bottomLeft-u,u,c-a.bottomLeft),f(u,a.topLeft),g(a.topLeft-u,a.topLeft,u),"Z"].join(" ");return M`
    <path
      class="guide"
      d=${x}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${n})"
      ?data-selected=${e}
      @click=${r}
    />
  `},Vo=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:n,reverseScale:s})=>{let c={top:`${n+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${s}) translateY(0.25em)`};return $`
    <div class="tooltip" style="${Q(c)}">
      ${me(t)} x ${me(r)}
    </div>
  `},jo=T`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var xi,Yo,Go,Wo=w(()=>{d();h();p();xi=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Yo=o=>(typeof o=="object"?o:new Date(o)).getTime(),Go=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=Yo(e)-Yo(o),n=Math.abs(i);for(let s of xi)if(n>=s.gte){let c=Math.round(Math.abs(i)/s.divisor),a=i<0,u=s.unit;return u?t.format(a?c:-c,u):s.text}}});var Zo,qo,Ko=w(()=>{d();h();p();D();bt();Wo();Zo=T`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,qo=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return $`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Oo()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Go(t)}
    </span>
  </a>`}});function _i(o){let e=[],t=[],r=[],i=[];for(let c of o.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;let{x:a,y:u,width:l,height:f}=c.absoluteBoundingBox;e.push(a),t.push(a+l),r.push(u),i.push(u+f)}let n=Math.min(...e),s=Math.min(...r);return{x:n,y:s,width:Math.abs(Math.max(...t)-n),height:Math.abs(Math.min(...i)-s)}}function $i(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let n=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),s=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...n,...s.map(a=>a.top)),right:Math.max(0,...n,...s.map(a=>a.right)),bottom:Math.max(0,...n,...s.map(a=>a.bottom)),left:Math.max(0,...n,...s.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-c.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+c.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+c.bottom,left:i.absoluteBoundingBox.x-c.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function He(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>He(t,e+1)).flat()]:o.children.map(t=>He(t,e+1)).flat()}var Xo,N,It,De,St=w(()=>{d();h();p();D();re();Be();ge();$o();Co();ko();Uo();ke();zo();Ko();Xo=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},N=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},It=function(o,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t},De=o=>{var e,t,r,i,n;class s extends _o(Ao(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,u=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=u}),n.set(this,u=>{var l,f;return(f=(l=N(this,r,"f"))===null||l===void 0?void 0:l.find(g=>g.id===u))!==null&&f!==void 0?f:null})}static get styles(){let a=super.styles;return Ne(a,[T`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,jo,uo,Mo,Fo,Zo])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!N(this,e,"f")||!N(this,r,"f")?j({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?j({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?j({title:"Error",children:this.error}):this.error;let a=N(this,e,"f"),u=1/this.scale,l=`calc(var(--guide-thickness) * ${u})`,f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),g=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return $`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([x,_])=>{var I;let P=N(this,n,"f").call(this,x);if(!P||!("absoluteBoundingBox"in P)||!(!((I=N(this,t,"f"))===null||I===void 0)&&I[P.id]))return null;let S=N(this,t,"f")[P.id];return $`
                <img
                  class="rendered-image"
                  src="${_}"
                  style=${Q({top:`${P.absoluteBoundingBox.y-a.y}px`,left:`${P.absoluteBoundingBox.x-a.x}px`,marginTop:`${-S.top}px`,marginLeft:`${-S.left}px`,width:P.absoluteBoundingBox.width+S.left+S.right+"px",height:P.absoluteBoundingBox.height+S.top+S.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&Vo({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:u})}
            ${M`
            <svg
              class="guides"
              viewBox="0 0 ${a.width} ${a.height}"
              width=${a.width}
              height=${a.height}
              style=${Q({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&$t({node:this.selectedNode,selected:!0,computedThickness:f*u})}

              ${N(this,r,"f").map(x=>{var _;return x.id===((_=this.selectedNode)===null||_===void 0?void 0:_.id)?null:M`
                  <g>
                    ${$t({node:x,computedThickness:f*u,onClick:N(this,i,"f").call(this,x)})}
                    ${this.selectedNode&&To({node:x,distanceTo:this.selectedNode,reverseScale:u,fontSize:g})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Do({node:this.selectedNode,onClose:this.deselectNode})}
          ${qo(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");It(this,e,a.type==="CANVAS"?_i(a):a.absoluteBoundingBox,"f"),It(this,r,He(a),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(N(this,n,"f")).filter(u=>!!u);It(this,t,a.reduce((u,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},u),{[l.id]:$i(l,He(l))}):u,{}),"f"),this.requestUpdate()}resetZoom(){if(N(this,e,"f")){let{width:a,height:u}=N(this,e,"f"),{width:l,height:f}=this.getBoundingClientRect(),g=l/(a+this.zoomMargin*2),x=f/(u+this.zoomMargin*2);this.scale=Math.min(g,x,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,n=new WeakMap,Xo([C({type:Number,attribute:"zoom-margin"})],s.prototype,"zoomMargin",void 0),Xo([C({type:String,attribute:"link"})],s.prototype,"link",void 0),s}});var Jo,G,Qo=w(()=>{d();h();p();D();re();ke();St();Jo=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},G=class extends De(H){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return j({title:"Parameter error",children:$`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return j({title:"Parameter Error",children:$`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};Jo([C({type:Object})],G.prototype,"nodes",void 0);Jo([C({type:String,attribute:"rendered-image"})],G.prototype,"renderedImage",void 0)});var er,Et,Fe,At,W,tr=w(()=>{d();h();p();D();re();ke();St();ge();er=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},Et=function(o,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(o):r?r.value:e.get(o)},W=class extends De(H){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Fe.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),At.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(n=>n.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return j({title:"Parameter error",children:$`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Ne(super.styles,[T`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return $`
      <div class="controls">
        <select @change=${Et(this,At,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>$`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Et(this,Fe,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Et(this,Fe,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};Fe=new WeakMap,At=new WeakMap;er([C({type:Object,attribute:"document-node"})],W.prototype,"documentNode",void 0);er([C({type:Object,attribute:"rendered-images"})],W.prototype,"renderedImages",void 0)});var or=w(()=>{d();h();p();Qo();tr();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",W);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",G)});function Ue(o=window.React,e,t,r,i){let n,s,c;if(e===void 0){let x=o;({tagName:s,elementClass:c,events:r,displayName:i}=x),n=x.react}else n=o,c=t,s=e;let a=n.Component,u=n.createElement,l=new Set(Object.keys(r??{}));class f extends a{constructor(){super(...arguments),this.o=null}t(_){if(this.o!==null)for(let I in this.i)Si(this.o,I,this.props[I],_?_[I]:void 0,r)}componentDidMount(){var _;this.t(),(_=this.o)===null||_===void 0||_.removeAttribute("defer-hydration")}componentDidUpdate(_){this.t(_)}render(){let{_$Gl:_,...I}=this.props;this.h!==_&&(this.u=S=>{_!==null&&Ei(_,S),this.o=S,this.h=_}),this.i={};let P={ref:this.u};for(let[S,ze]of Object.entries(I))Ii.has(S)?P[S==="className"?"class":S]=ze:l.has(S)||S in c.prototype?this.i[S]=ze:P[S]=ze;return P.suppressHydrationWarning=!0,u(s,P)}}f.displayName=i??c.name;let g=n.forwardRef((x,_)=>u(f,{...x,_$Gl:_},x?.children));return g.displayName=f.displayName,g}var Ii,rr,Si,Ei,ir=w(()=>{d();h();p();Ii=new Set(["children","localName","ref","style","className"]),rr=new WeakMap,Si=(o,e,t,r,i)=>{let n=i?.[e];n===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((s,c,a)=>{let u=rr.get(s);u===void 0&&rr.set(s,u=new Map);let l=u.get(c);a!==void 0?l===void 0?(u.set(c,l={handleEvent:a}),s.addEventListener(c,l)):l.handleEvent=a:l!==void 0&&(u.delete(c),s.removeEventListener(c,l))})(o,n,t)},Ei=(o,e)=>{typeof o=="function"?o(e):o.current=e}});var nr=w(()=>{d();h();p();ir()});var sr,ar,lr=w(()=>{d();h();p();or();nr();ne();sr=Ue(be,"figspec-frame-viewer",G,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),ar=Ue(be,"figspec-file-viewer",W,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})});var pr={};Ct(pr,{Figspec:()=>dr,default:()=>Ci});function Ve(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Ai(o){if(o.accessToken)return o.accessToken;try{return v.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function hr(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(hr).reduce((e,t)=>e.concat(t),[])}var cr,dr,Ci,ur=w(()=>{d();h();p();Ie();ne();lr();_e();xe();cr=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;dr=({config:o})=>{let[e,t]=k({state:"loading"}),r=async i=>{t({state:"loading"});try{let n=o.url.match(Ze);if(!n)throw new Error(o.url+" is not a valid Figma URL.");let[,,s]=n,c=new URL(o.url).searchParams.get("node-id"),a=Ai(o);if(!a)throw new Error("Personal Access Token is required.");let u={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${s}`),f=new URL(`https://api.figma.com/v1/images/${s}`);if(f.searchParams.set("format","svg"),!c){let _=await fetch(l.href,{headers:u,signal:i}).then(S=>Ve(S)),I=hr(_.document);f.searchParams.set("ids",I.map(S=>S.id).join(","));let P=await fetch(f.href,{headers:u,signal:i}).then(S=>Ve(S));t({state:"fetched",value:{type:"file",props:{documentNode:_,renderedImages:P.images,link:o.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",c),f.searchParams.set("ids",c);let[g,x]=await Promise.all([fetch(l.href,{headers:u,signal:i}).then(_=>Ve(_)),fetch(f.href,{headers:u,signal:i}).then(_=>Ve(_))]);t({state:"fetched",value:{type:"frame",props:{nodes:g,renderedImage:Object.values(x.images)[0],link:o.url}}})}catch(n){if(n instanceof DOMException&&n.code===DOMException.ABORT_ERR)return;console.error(n),t({state:"failed",error:n instanceof Error?n.message:String(n)})}};switch(B(()=>{let i=!1,n=()=>{i=!0},s=new AbortController;return r(s.signal).then(n,n),()=>{i||s.abort()}},[o.url]),e.state){case"loading":return m(L,null,m(E,null,"Loading Figma file..."));case"failed":return m(L,null,m(E,null,"Failed to load Figma file"),m(E,null,e.error));case"fetched":return e.value.type==="file"?m(ar,{css:cr,...e.value.props}):m(sr,{css:cr,...e.value.props})}},Ci=dr});d();h();p();d();h();p();d();h();p();Ie();ne();d();h();p();var Ys=__STORYBOOK_API__,{ActiveTabs:Gs,Consumer:Ws,ManagerContext:Zs,Provider:qs,RequestResponseError:Ks,addons:Se,combineParameters:Xs,controlOrMetaKey:Js,controlOrMetaSymbol:Qs,eventMatchesShortcut:ea,eventToShortcut:ta,experimental_MockUniversalStore:oa,experimental_UniversalStore:ra,experimental_getStatusStore:ia,experimental_getTestProviderStore:na,experimental_requestResponse:sa,experimental_useStatusStore:aa,experimental_useTestProviderStore:la,experimental_useUniversalStore:ca,internal_fullStatusStore:da,internal_fullTestProviderStore:ha,internal_universalStatusStore:pa,internal_universalTestProviderStore:ua,isMacLike:fa,isShortcutTaken:ma,keyToSymbol:ga,merge:va,mockChannel:ya,optionOrAltSymbol:ba,shortcutMatchesShortcut:xa,shortcutToHumanString:wa,types:qe,useAddonState:_a,useArgTypes:$a,useArgs:Ia,useChannel:Sa,useGlobalTypes:Ea,useGlobals:Aa,useParameter:Ke,useSharedState:Ca,useStoryPrepared:Pa,useStorybookApi:Ta,useStorybookState:Bt}=__STORYBOOK_API__;_e();xe();d();h();p();var Na=__STORYBOOK_ICONS__,{AccessibilityAltIcon:Oa,AccessibilityIcon:La,AccessibilityIgnoredIcon:Ha,AddIcon:Da,AdminIcon:Fa,AlertAltIcon:Ua,AlertIcon:Va,AlignLeftIcon:ja,AlignRightIcon:za,AppleIcon:Ya,ArrowBottomLeftIcon:Ga,ArrowBottomRightIcon:Wa,ArrowDownIcon:Za,ArrowLeftIcon:qa,ArrowRightIcon:Ka,ArrowSolidDownIcon:Xa,ArrowSolidLeftIcon:Ja,ArrowSolidRightIcon:Qa,ArrowSolidUpIcon:el,ArrowTopLeftIcon:tl,ArrowTopRightIcon:ol,ArrowUpIcon:rl,AzureDevOpsIcon:il,BackIcon:nl,BasketIcon:sl,BatchAcceptIcon:al,BatchDenyIcon:ll,BeakerIcon:cl,BellIcon:dl,BitbucketIcon:hl,BoldIcon:pl,BookIcon:ul,BookmarkHollowIcon:fl,BookmarkIcon:ml,BottomBarIcon:gl,BottomBarToggleIcon:vl,BoxIcon:yl,BranchIcon:bl,BrowserIcon:xl,BugIcon:wl,ButtonIcon:_l,CPUIcon:$l,CalendarIcon:Il,CameraIcon:Sl,CameraStabilizeIcon:El,CategoryIcon:Al,CertificateIcon:Cl,ChangedIcon:Pl,ChatIcon:Tl,CheckIcon:Ml,ChevronDownIcon:kl,ChevronLeftIcon:Rl,ChevronRightIcon:Bl,ChevronSmallDownIcon:Nl,ChevronSmallLeftIcon:Ol,ChevronSmallRightIcon:Ll,ChevronSmallUpIcon:Hl,ChevronUpIcon:Dl,ChromaticIcon:Fl,ChromeIcon:Ul,CircleHollowIcon:Vl,CircleIcon:jl,ClearIcon:zl,CloseAltIcon:Yl,CloseIcon:Gl,CloudHollowIcon:Wl,CloudIcon:Zl,CogIcon:ql,CollapseIcon:Kl,CommandIcon:Xl,CommentAddIcon:Jl,CommentIcon:Ql,CommentsIcon:ec,CommitIcon:tc,CompassIcon:oc,ComponentDrivenIcon:rc,ComponentIcon:ic,ContrastIcon:nc,ContrastIgnoredIcon:sc,ControlsIcon:ac,CopyIcon:lc,CreditIcon:cc,CrossIcon:dc,DashboardIcon:hc,DatabaseIcon:pc,DeleteIcon:uc,DiamondIcon:fc,DirectionIcon:mc,DiscordIcon:gc,DocChartIcon:vc,DocListIcon:yc,DocumentIcon:bc,DownloadIcon:xc,DragIcon:wc,EditIcon:_c,EditorIcon:$c,EllipsisIcon:Ic,EmailIcon:Sc,ExpandAltIcon:Ec,ExpandIcon:Ac,EyeCloseIcon:Cc,EyeIcon:Pc,FaceHappyIcon:Tc,FaceNeutralIcon:Mc,FaceSadIcon:kc,FacebookIcon:Rc,FailedIcon:Bc,FastForwardIcon:Nc,FigmaIcon:Oc,FilterIcon:Lc,FlagIcon:Hc,FolderIcon:Dc,FormIcon:Fc,GDriveIcon:Uc,GiftIcon:Vc,GithubIcon:jc,GitlabIcon:zc,GlobeIcon:Yc,GoogleIcon:Gc,GraphBarIcon:Wc,GraphLineIcon:Zc,GraphqlIcon:qc,GridAltIcon:Kc,GridIcon:Xc,GrowIcon:Jc,HeartHollowIcon:Qc,HeartIcon:ed,HomeIcon:td,HourglassIcon:od,InfoIcon:rd,ItalicIcon:id,JumpToIcon:nd,KeyIcon:sd,LightningIcon:ad,LightningOffIcon:ld,LinkBrokenIcon:cd,LinkIcon:dd,LinkedinIcon:hd,LinuxIcon:pd,ListOrderedIcon:ud,ListUnorderedIcon:fd,LocationIcon:md,LockIcon:gd,MarkdownIcon:vd,MarkupIcon:yd,MediumIcon:bd,MemoryIcon:xd,MenuIcon:wd,MergeIcon:_d,MirrorIcon:$d,MobileIcon:Id,MoonIcon:Sd,NutIcon:Ed,OutboxIcon:Ad,OutlineIcon:Cd,PaintBrushAltIcon:Pd,PaintBrushIcon:Td,PaperClipIcon:Md,ParagraphIcon:kd,PassedIcon:Rd,PhoneIcon:Bd,PhotoDragIcon:Nd,PhotoIcon:Od,PhotoStabilizeIcon:Ld,PinAltIcon:Hd,PinIcon:Dd,PlayAllHollowIcon:Fd,PlayBackIcon:Ud,PlayHollowIcon:Vd,PlayIcon:jd,PlayNextIcon:zd,PlusIcon:Yd,PointerDefaultIcon:Gd,PointerHandIcon:Wd,PowerIcon:Zd,PrintIcon:qd,ProceedIcon:Kd,ProfileIcon:Xd,PullRequestIcon:Jd,QuestionIcon:Qd,RSSIcon:eh,RedirectIcon:th,ReduxIcon:oh,RefreshIcon:rh,ReplyIcon:ih,RepoIcon:nh,RequestChangeIcon:sh,RewindIcon:ah,RulerIcon:lh,SaveIcon:ch,SearchIcon:dh,ShareAltIcon:hh,ShareIcon:ph,ShieldIcon:uh,SideBySideIcon:fh,SidebarAltIcon:mh,SidebarAltToggleIcon:gh,SidebarIcon:vh,SidebarToggleIcon:yh,SortDownIcon:bh,SortUpIcon:xh,SpeakerIcon:wh,StackedIcon:_h,StarHollowIcon:$h,StarIcon:Ih,StatusFailIcon:Sh,StatusIcon:Eh,StatusPassIcon:Ah,StatusWarnIcon:Ch,StickerIcon:Ph,StopAltHollowIcon:Th,StopAltIcon:Mh,StopIcon:kh,StorybookIcon:Rh,StructureIcon:Bh,SubtractIcon:Nh,SunIcon:Oh,SupportIcon:Lh,SweepIcon:Hh,SwitchAltIcon:Dh,SyncIcon:Fh,TabletIcon:Uh,ThumbsUpIcon:Vh,TimeIcon:jh,TimerIcon:zh,TransferIcon:Yh,TrashIcon:Gh,TwitterIcon:Wh,TypeIcon:Zh,UbuntuIcon:qh,UndoIcon:Kh,UnfoldIcon:Xh,UnlockIcon:Jh,UnpinIcon:Qh,UploadIcon:ep,UserAddIcon:tp,UserAltIcon:op,UserIcon:rp,UsersIcon:ip,VSCodeIcon:np,VerifiedIcon:sp,VideoIcon:ap,WandIcon:lp,WatchIcon:cp,WindowsIcon:dp,WrenchIcon:hp,XIcon:pp,YoutubeIcon:up,ZoomIcon:Nt,ZoomOutIcon:Ot,ZoomResetIcon:Lt,iconList:fp}=__STORYBOOK_ICONS__;var vr="STORYBOOK_ADDON_DESIGNS",fr=vr+"/panel",je="design",mr=class extends Ye{state={hasError:!1};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?m(L,null,m(E,null,"Failed to render addon UI"),m(E,null,m("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),m("pre",null,String(this.state.error)),m("p",null,"See console log for more details. To clear the error state, please reload the page."," ",m(se,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}},Pi=(o,e)=>{let[t,r]=k([0,0]),[i,n]=k(!1),s=O(g=>{g.button===0&&(r([g.screenX,g.screenY]),n(!0))},[n,r]),c=O(g=>{let x=g.touches[0];r([x.screenX,x.screenY]),n(!0)},[n,r]),a=O(g=>{i&&r(x=>(o([g[0]-x[0],g[1]-x[1]]),g))},[r,i,...e]),u=O(g=>{let{screenX:x,screenY:_}=g;a([x,_])},[a]),l=O(g=>{let{screenX:x,screenY:_}=g.touches[0];a([x,_])},[r,i,...e]),f=O(()=>{r([0,0]),n(!1)},[n,r]);return{onMouseDown:s,onMouseMove:u,onMouseUp:f,onMouseLeave:f,onTouchStart:c,onTouchMove:l,onTouchCancel:f,onTouchEnd:f}},Ti=({children:o,className:e,style:t,defaultValue:r,value:i,onChange:n})=>{let[s,c]=k([0,0]);B(()=>{c(r||i||[0,0])},[r]);let a=Pi(l=>{n&&n(l),c(f=>[f[0]+l[0],f[1]+l[1]])},[c,n]),u=Z(()=>{let l=i||s;return{transform:`translate(${l[0]}px, ${l[1]}px)`}},[i,s]);return m("div",{css:Mi,className:e,style:t,...a},m("div",{css:ki,style:u},o))},Mi=R`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,ki=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Ri=({onZoomIn:o,onZoomOut:e,onReset:t})=>m(E,null,m(we,{onClick:o},m(Nt,null)),m(we,{onClick:e},m(Ot,null)),m(we,{onClick:t},m(Lt,null))),Bi=(o,e)=>{let[t,r]=k(1);B(()=>{r(o)},e);let i=O(()=>{r(c=>c+.1)},[r]),n=O(()=>{r(c=>Math.max(c-.1,.1))},[r]),s=O(()=>{r(1)},[r]);return{scale:t,zoomIn:i,zoomOut:n,resetZoom:s}},Ni=({config:o})=>{let e=Bi(o.scale||1,[o.scale]),t=Z(()=>({transform:`scale(${e.scale})`}),[e.scale]);return m("div",{css:Oi},m(Tt,{border:!0},m("div",{style:{display:"grid",gridAutoFlow:"column",gap:"4px",alignItems:"center"}},m(E,{key:"left"},m("p",null,m("b",null,"Image")),m(Mt,null),m(Ri,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut})))),m(Ti,{css:Li,defaultValue:o.offset},m("img",{css:Hi,src:o.url,style:t})))},Oi=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Li=R`
  flex-grow: 1;
`,Hi=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Di=({config:o})=>m("div",{css:Fi},m(se,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),Fi=R`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ui=o=>{if(o.protocol!=="https:")return{valid:!1,error:m(E,null,"Expected HTTPS link, received ",m("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:m(E,null,"Expected a hostname ",m("code",null,"www.sketch.com"),", received"," ",m("code",null,o.hostname))};let e=m(E,null,"Expected pathname ",m("code",null,"/s/<string>/a/<string>"),", received"," ",m("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,i,n,s]=t;return r!=="s"||!i||n!=="a"||!s?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${i}/a/${s}`,offscreen:!1}}},Vi=({config:o})=>{let e=Z(()=>{let t=Ui(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?m($e,{defer:!0,config:e.data}):m(L,null,m(E,null,"Invalid Sketch URL"),m(E,null,e.error))},ji=({tabs:o,deps:e=[]})=>{let[t,r]=k(o[0].id);return B(()=>{r(o[0].id)},e),m(kt,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(i=>m("div",{key:i.id,id:i.id,title:i.name},i.offscreen||t===i.id?i.content:null)))},zi=We(()=>Promise.resolve().then(()=>(ur(),pr))),Yi=({config:o})=>{if(!o||"length"in o&&o.length===0)return m(L,null,m(E,null,"No designs found"),m(E,null,"Learn how to"," ",m(se,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:m($e,{config:t})};case"figma":return{...r,content:m(Rt,{config:t}),offscreen:!1};case"sketch":return{...r,content:m(Vi,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:m(Ge,{fallback:"Preparing Figspec viewer..."},m(zi,{config:t})),offscreen:!1};case"image":return{...r,content:m(Ni,{config:t})};case"link":return{...r,content:m(Di,{config:t})}}return{...r,content:m(L,null,m(E,null,"Invalid config type"),m(E,null,"Config type you set is not supported. Please choose one from"," ",m(se,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?m("div",null,e[0].content):m(ji,{tabs:e,deps:[o]})},gr=({active:o})=>{let e=Bt(),t=Ke(je),[r,i]=k(o);return B(()=>{i(o)},[t]),B(()=>{o&&i(!0)},[o]),r?m(Yi,{key:e.storyId,config:t}):null},ye="Design";function yr(o){Se.register(vr,e=>{let t=function(){let r=Ke(je);return r?Array.isArray(r)?r.length>0?`${ye} (${r.length})`:ye:(r.name||ye)+" (1)":ye};o==="tab"?Se.add(fr,{title:ye,render({active:r}){return r?z.createElement(mr,null,z.createElement(gr,{active:!0})):z.createElement("noscript",null)},type:qe.TAB,paramKey:je}):Se.add(fr,{type:qe.PANEL,title:t,paramKey:je,render({active:r}){return z.createElement(Pt,{active:!!r},z.createElement(mr,null,z.createElement(gr,{active:!!r})))}})})}Ie();yr("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
