(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7,14],{228:function(t,e,n){},230:function(t,e,n){"use strict";n(228)},231:function(t,e,n){"use strict";n.r(e);var l=n(1),c=n.n(l).a.extend({name:"TitleBase",props:{tag:{type:String,default:"div"},size:{type:String,default:""}},computed:{className:function(){return"title".concat(this.size?" "+this.size:"")}}}),r=(n(230),n(69)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.className},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var l=n(1),c=n.n(l).a.extend({name:"LayoutContent",props:{title:{type:String}},computed:{titleProps:function(){return{tag:"h2"}}}}),r=n(69),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[t.title?n("title-base",t._b({staticClass:"mb-4-5"},"title-base",t.titleProps,!1),[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBase:n(231).default})},240:function(t,e,n){},253:function(t,e,n){"use strict";n(240)},259:function(t,e,n){"use strict";n.r(e);var l=n(1),c=n.n(l).a.extend({name:"PromoBase",props:{title:{type:String,required:!0},list:{type:Array,default:function(){return[]}},image:{type:String,required:!0}}}),r=(n(253),n(69)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-content",{staticClass:"promo pt-4-5 pb-4-5 pb-sm-0"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-12 col-sm-8"},[n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),t.list.length?n("ul",t._l(t.list,(function(e,l){return n("li",{key:l},[t._v(t._s(e))])})),0):t._e()])]),t._v(" "),n("div",{staticClass:"col-4 d-none d-sm-block"},[n("img",{staticClass:"d-block",attrs:{src:t.image,alt:t.title}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutContent:n(232).default})}}]);