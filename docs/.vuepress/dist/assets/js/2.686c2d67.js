(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function f(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r=1){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){},186:function(t,e,n){},187:function(t,e,n){},188:function(t,e,n){},189:function(t,e,n){},190:function(t,e,n){},191:function(t,e,n){},192:function(t,e,n){},193:function(t,e,n){},199:function(t,e,n){for(var i=n(110),r=n(105),s=n(24),a=n(1),o=n(4),l=n(25),c=n(0),u=c("iterator"),h=c("toStringTag"),f=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(p),g=0;g<d.length;g++){var v,m=d[g],b=p[m],_=a[m],k=_&&_.prototype;if(k&&(k[u]||o(k,u,f),k[h]||o(k,h,m),l[m]=f,b))for(v in i)k[v]||s(k,v,i[v],!0)}},200:function(t,e,n){var i=n(23),r=n(105);n(205)("keys",(function(){return function(t){return r(i(t))}}))},201:function(t,e,n){"use strict";var i=n(11),r=n(23),s=n(6),a=n(16),o=n(106),l=n(107),c=Math.max,u=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(108)("replace",2,(function(t,e,n,d){return[function(i,r){var s=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var h=i(t),f=String(this),p="function"==typeof e;p||(e=String(e));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var b=[];;){var _=l(h,f);if(null===_)break;if(b.push(_),!v)break;""===String(_[0])&&(h.lastIndex=o(f,s(h.lastIndex),m))}for(var k,x="",C=0,$=0;$<b.length;$++){_=b[$];for(var L=String(_[0]),y=c(u(a(_.index),f.length),0),S=[],w=1;w<_.length;w++)S.push(void 0===(k=_[w])?k:String(k));var O=_.groups;if(p){var j=[L].concat(S,y,f);void 0!==O&&j.push(O);var T=String(e.apply(void 0,j))}else T=g(L,f,y,S,O,e);y>=C&&(x+=f.slice(C,y)+T,C=y+L.length)}return x+f.slice(C)}];function g(t,e,i,s,a,o){var l=i+t.length,c=s.length,u=p;return void 0!==a&&(a=r(a),u=f),n.call(o,u,(function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>c){var f=h(u/10);return 0===f?n:f<=c?void 0===s[f-1]?r.charAt(1):s[f-1]+r.charAt(1):n}o=s[u-1]}return void 0===o?"":o}))}}))},202:function(t,e,n){var i=n(222).Symbol;t.exports=i},203:function(t,e,n){"use strict";n.r(e);var i=n(180),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(204).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(203).default},methods:{isActive:i.e}},s=(n(231),n(14)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(232);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,r,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,f=u.sidebarDepth,p=Object(i.e)(s,h.path),d="auto"===h.type?p||h.children.some((function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)})):p,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,d),v=[r.frontmatter.sidebarDepth,f,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,s,v)]:(d||m)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,s,v)]:g}};n(233);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var h={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},204:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(215),n(14)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},205:function(t,e,n){var i=n(22),r=n(31),s=n(15);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",a)}},206:function(t,e,n){"use strict";n(207)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},207:function(t,e,n){var i=n(22),r=n(15),s=n(30),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},208:function(t,e,n){"use strict";var i=n(181);n.n(i).a},209:function(t,e,n){"use strict";var i=n(22),r=n(69)(!0);i(i.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(68)("includes")},210:function(t,e,n){"use strict";var i=n(22),r=n(211);i(i.P+i.F*n(212)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},211:function(t,e,n){var i=n(112),r=n(30);t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},212:function(t,e,n){var i=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}},213:function(t,e,n){"use strict";var i=n(182);n.n(i).a},214:function(t,e,n){"use strict";var i=n(183);n.n(i).a},215:function(t,e,n){"use strict";var i=n(184);n.n(i).a},216:function(t,e,n){"use strict";var i=n(185);n.n(i).a},217:function(t,e,n){"use strict";var i=n(186);n.n(i).a},218:function(t,e,n){"use strict";var i=n(187);n.n(i).a},219:function(t,e,n){"use strict";var i=n(188);n.n(i).a},220:function(t,e,n){var i=n(221),r=n(226),s=n(227),a="[object String]";t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&i(t)==a}},221:function(t,e,n){var i=n(202),r=n(224),s=n(225),a="[object Null]",o="[object Undefined]",l=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?o:a:l&&l in Object(t)?r(t):s(t)}},222:function(t,e,n){var i=n(223),r="object"==typeof self&&self&&self.Object===Object&&self,s=i||r||Function("return this")();t.exports=s},223:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},224:function(t,e,n){var i=n(202),r=Object.prototype,s=r.hasOwnProperty,a=r.toString,o=i?i.toStringTag:void 0;t.exports=function(t){var e=s.call(t,o),n=t[o];try{t[o]=void 0;var i=!0}catch(t){}var r=a.call(t);return i&&(e?t[o]=n:delete t[o]),r}},225:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},226:function(t,e){var n=Array.isArray;t.exports=n},227:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},228:function(t,e){t.exports=function(t){return null==t}},229:function(t,e,n){"use strict";var i=n(189);n.n(i).a},230:function(t,e,n){"use strict";var i=n(190);n.n(i).a},231:function(t,e,n){"use strict";var i=n(191);n.n(i).a},232:function(t,e,n){"use strict";var i=n(22),r=n(109)(5),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(68)("find")},233:function(t,e,n){"use strict";var i=n(192);n.n(i).a},234:function(t,e,n){"use strict";var i=n(193);n.n(i).a},240:function(t,e,n){"use strict";n.r(e);n(199),n(200),n(206);var i=n(180),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(14),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,o={components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(208),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(209),n(210),n(104),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(r(o))s.push(o);else if(o.headers)for(var l=0;l<o.headers.length&&!(s.length>=n);l++){var c=o.headers[l];r(c)&&s.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),u=(n(213),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),h=(n(214),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),f=(n(111),n(98)),p=(n(201),{components:{NavLink:a,DropdownTransition:n(204).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),d=(n(216),{components:{NavLink:a,DropdownLink:Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var a,o=e[s],l=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:l,link:a}}))};return[].concat(Object(f.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),g=(n(217),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:g,SearchBox:u,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},b=(n(218),Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),_={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,r,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,s){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s}}},k=(n(219),Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),x=n(220),C=n.n(x),$=n(228),L=n.n($),y={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return w(S.PREV,this)},next:function(){return w(S.NEXT,this)}}};var S={NEXT:{resolveLink:function(t,e){return O(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return O(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function w(t,e){var n=e.$themeConfig,r=e.$page,s=e.$route,a=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),f=u(r),p=L()(f)?h:f;return!1===p?void 0:C()(p)?Object(i.k)(a.pages,p,s.path):l(r,o)}function O(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var j=y,T=(n(229),{components:{PageEdit:k,PageNav:Object(s.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),P=(n(230),Object(s.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),E={name:"Sidebar",components:{SidebarLinks:n(203).default,NavLinks:g},props:["items"]},I=(n(234),{components:{Home:l,Page:P,Sidebar:Object(s.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:b},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),N=Object(s.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=N.exports}}]);