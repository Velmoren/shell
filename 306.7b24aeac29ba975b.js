(self.webpackChunkshell=self.webpackChunkshell||[]).push([[306],{306:(pe,X,y)=>{y.r(X);var d=y(481),i=y(423);function B(s,l,u,p,f,S,R){try{var N=s[S](R),v=N.value}catch(ne){return void u(ne)}N.done?l(v):Promise.resolve(v).then(p,f)}function E(s){return function(){var l=this,u=arguments;return new Promise(function(p,f){var S=s.apply(l,u);function R(v){B(S,p,f,R,N,"next",v)}function N(v){B(S,p,f,R,N,"throw",v)}R(void 0)})}}let h={};const D={},C={};let U=!1;function V(s,l){return H.apply(this,arguments)}function H(){return(H=E(function*(s,l){return(yield D[s].get(l))()})).apply(this,arguments)}function $(s,l){return x.apply(this,arguments)}function x(){return(x=E(function*(s,l){return C[l]||(U||(yield y.I("default"),U=!0),yield s.init(y.S.default),C[l]=!0),s})).apply(this,arguments)}function L(s,l){return w.apply(this,arguments)}function w(){return(w=E(function*(s,l){if("string"==typeof s)return yield j(s,l);if("script"===s.type){const u=s;return yield j(u.remoteEntry,u.remoteName)}"module"===s.type&&(yield I(s.remoteEntry))})).apply(this,arguments)}function I(s){return P.apply(this,arguments)}function P(){return(P=E(function*(s){return D[s]?Promise.resolve():yield import(s).then(l=>{$(l,s),D[s]=l})})).apply(this,arguments)}function j(s,l){return M.apply(this,arguments)}function M(){return(M=E(function*(s,l){return new Promise((u,p)=>{if(D[l])return void u();const f=document.createElement("script");f.src=s,f.onerror=p,f.onload=()=>{const S=window[l];$(S,l),D[l]=S,u()},document.body.appendChild(f)})})).apply(this,arguments)}function O(s){return A.apply(this,arguments)}function A(){return(A=E(function*(s){let l,u,p;if(s.type||(s.type="script"),"manifest"===s.type){const f=h[s.remoteName];if(!f)throw new Error("Manifest does not contain "+s.remoteName);s={type:f.type,exposedModule:s.exposedModule,remoteEntry:f.remoteEntry,remoteName:"script"===f.type?s.remoteName:void 0},p=f.remoteEntry}else p=s.remoteEntry;return"script"===s.type?(l={type:"script",remoteEntry:s.remoteEntry,remoteName:s.remoteName},u=s.remoteName):"module"===s.type&&(l={type:"module",remoteEntry:s.remoteEntry},u=s.remoteEntry),p&&(yield L(l)),yield V(u,s.exposedModule)})).apply(this,arguments)}var b=y(730);const te=[{path:"public",loadChildren:()=>O({remoteEntry:"https://velmoren.github.io/public/remoteEntry.js",type:"module",exposedModule:"./Module"}).then(s=>(console.log(s),s.PublicModule))},{path:"templates",loadChildren:()=>O({remoteEntry:"https://velmoren.github.io/templates/remoteEntry.js",type:"module",exposedModule:"./Module"}).then(s=>s.TemplatesModule)},{path:"applications",loadChildren:()=>O({remoteEntry:"https://velmoren.github.io/applications/remoteEntry.js",type:"module",exposedModule:"./Module"}).then(s=>s.AppModule)}];let G=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({imports:[b.RouterModule.forRoot(te),b.RouterModule]}),s})(),z=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275cmp=i.\u0275\u0275defineComponent({type:s,selectors:[["app-root"]],decls:7,vars:0,consts:[["routerLink","/public"],["routerLink","/templates"],["routerLink","/applications"]],template:function(u,p){1&u&&(i.\u0275\u0275elementStart(0,"a",0),i.\u0275\u0275text(1,"Public"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(2,"a",1),i.\u0275\u0275text(3,"Templates"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(4,"a",2),i.\u0275\u0275text(5,"Applications"),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(6,"router-outlet"))},dependencies:[b.RouterOutlet,b.RouterLinkWithHref],encapsulation:2}),s})(),J=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s,bootstrap:[z]}),s.\u0275inj=i.\u0275\u0275defineInjector({imports:[d.b2,G]}),s})();(0,i.enableProdMode)(),d.q6().bootstrapModule(J).catch(s=>console.error(s))},481:(pe,X,y)=>{y.d(X,{Dx:()=>le,b2:()=>Ee,q6:()=>ye});var d=y(327),i=y(423);class B extends d.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends B{static makeCurrent(){(0,d.\u0275setRootDomAdapter)(new E)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=function D(){return h=h||document.querySelector("base"),h?h.getAttribute("href"):null}();return null==e?null:function U(n){C=C||document.createElement("a"),C.setAttribute("href",n);const t=C.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){h=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,d.\u0275parseCookieValue)(document.cookie,t)}}let C,h=null;const V=new i.InjectionToken("TRANSITION_ID"),$=[{provide:i.APP_INITIALIZER,useFactory:function H(n,t,e){return()=>{e.get(i.ApplicationInitStatus).donePromise.then(()=>{const r=(0,d.\u0275getDOM)(),o=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let a=0;a<o.length;a++)r.remove(o[a])})}},deps:[V,d.DOCUMENT,i.Injector],multi:!0}];let L=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const w=new i.InjectionToken("EventManagerPlugins");let I=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(o=>o.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,o){return this._findPluginFor(r).addEventListener(e,r,o)}addGlobalEventListener(e,r,o){return this._findPluginFor(r).addGlobalEventListener(e,r,o)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const o=this._plugins;for(let a=0;a<o.length;a++){const c=o[a];if(c.supports(e))return this._eventNameToPlugin.set(e,c),c}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(w),i.\u0275\u0275inject(i.NgZone))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class P{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const o=(0,d.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${e}`);return this.addEventListener(o,e,r)}}let j=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),M=(()=>{class n extends j{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,o){e.forEach(a=>{const c=this._doc.createElement("style");c.textContent=a,o.push(r.appendChild(c))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(O),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(e,o,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(O))}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(d.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function O(n){(0,d.\u0275getDOM)().remove(n)}const A={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},K=/%COMP%/g,Y="%COMP%",ee=`_nghost-${Y}`,F=`_ngcontent-${Y}`;function T(n,t,e){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?T(n,o,e):(o=o.replace(K,n),e.push(o))}return e}function b(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let G=(()=>{class n{constructor(e,r,o){this.eventManager=e,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new z(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case i.ViewEncapsulation.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new l(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(e),o}case 1:case i.ViewEncapsulation.ShadowDom:return new u(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const o=T(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(I),i.\u0275\u0275inject(M),i.\u0275\u0275inject(i.APP_ID))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class z{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,e){return e?document.createElementNS(A[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){(s(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(s(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,o){if(o){e=o+":"+e;const a=A[o];a?t.setAttributeNS(a,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const o=A[r];o?t.removeAttributeNS(o,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,o){o&(i.RendererStyleFlags2.DashCase|i.RendererStyleFlags2.Important)?t.style.setProperty(e,r,o&i.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&i.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,b(r)):this.eventManager.addEventListener(t,e,b(r))}}function s(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class l extends z{constructor(t,e,r,o){super(t),this.component=r;const a=T(o+"-"+r.id,r.styles,[]);e.addStyles(a),this.contentAttr=function W(n){return F.replace(K,n)}(o+"-"+r.id),this.hostAttr=function Z(n){return ee.replace(K,n)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class u extends z{constructor(t,e,r,o){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const a=T(o.id,o.styles,[]);for(let c=0;c<a.length;c++){const m=document.createElement("style");m.textContent=a[c],this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let p=(()=>{class n extends P{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,o){return e.addEventListener(r,o,!1),()=>this.removeEventListener(e,r,o)}removeEventListener(e,r,o){return e.removeEventListener(r,o)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(d.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const f=["alt","control","meta","shift"],S={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},R={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let N=(()=>{class n extends P{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,o){const a=n.parseEventName(r),c=n.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,d.\u0275getDOM)().onAndCancel(e,a.domEventName,c))}static parseEventName(e){const r=e.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const a=n._normalizeKey(r.pop());let c="",m=r.indexOf("code");if(m>-1&&(r.splice(m,1),c="code."),f.forEach(de=>{const fe=r.indexOf(de);fe>-1&&(r.splice(fe,1),c+=de+".")}),c+=a,0!=r.length||0===a.length)return null;const g={};return g.domEventName=o,g.fullKey=c,g}static matchEventFullKeyCode(e,r){let o=S[e.key]||e.key,a="";return r.indexOf("code.")>-1&&(o=e.code,a="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),f.forEach(c=>{c!==o&&(0,R[c])(e)&&(a+=c+".")}),a+=o,a===r)}static eventCallback(e,r,o){return a=>{n.matchEventFullKeyCode(a,e)&&o.runGuarded(()=>r(a))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(d.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const ye=(0,i.createPlatformFactory)(i.platformCore,"browser",[{provide:i.PLATFORM_ID,useValue:d.\u0275PLATFORM_BROWSER_ID},{provide:i.PLATFORM_INITIALIZER,useValue:function me(){E.makeCurrent()},multi:!0},{provide:d.DOCUMENT,useFactory:function ge(){return(0,i.\u0275setDocument)(document),document},deps:[]}]),se=new i.InjectionToken(""),ie=[{provide:i.\u0275TESTABILITY_GETTER,useClass:class x{addToWindow(t){i.\u0275global.getAngularTestability=(r,o=!0)=>{const a=t.findTestabilityInTree(r,o);if(null==a)throw new Error("Could not find testability for element.");return a},i.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),i.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),i.\u0275global.frameworkStabilizers||(i.\u0275global.frameworkStabilizers=[]),i.\u0275global.frameworkStabilizers.push(r=>{const o=i.\u0275global.getAllAngularTestabilities();let a=o.length,c=!1;const m=function(g){c=c||g,a--,0==a&&r(c)};o.forEach(function(g){g.whenStable(m)})})}findTestabilityInTree(t,e,r){return null==e?null:t.getTestability(e)??(r?(0,d.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}},deps:[]},{provide:i.\u0275TESTABILITY,useClass:i.Testability,deps:[i.NgZone,i.TestabilityRegistry,i.\u0275TESTABILITY_GETTER]},{provide:i.Testability,useClass:i.Testability,deps:[i.NgZone,i.TestabilityRegistry,i.\u0275TESTABILITY_GETTER]}],ae=[{provide:i.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:i.ErrorHandler,useFactory:function he(){return new i.ErrorHandler},deps:[]},{provide:w,useClass:p,multi:!0,deps:[d.DOCUMENT,i.NgZone,i.PLATFORM_ID]},{provide:w,useClass:N,multi:!0,deps:[d.DOCUMENT]},{provide:G,useClass:G,deps:[I,M,i.APP_ID]},{provide:i.RendererFactory2,useExisting:G},{provide:j,useExisting:M},{provide:M,useClass:M,deps:[d.DOCUMENT]},{provide:I,useClass:I,deps:[w,i.NgZone]},{provide:d.XhrFactory,useClass:L,deps:[]},[]];let Ee=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:i.APP_ID,useValue:e.appId},{provide:V,useExisting:i.APP_ID},$]}}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(se,12))},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[...ae,...ie],imports:[d.CommonModule,i.ApplicationModule]}),n})(),le=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(d.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function Me(){return new le((0,i.\u0275\u0275inject)(d.DOCUMENT))}(),r},providedIn:"root"}),n})();typeof window<"u"&&window}}]);