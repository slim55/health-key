(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,10],{276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("616876a0",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var l=n(19)(!1);l.push([t.i,'.title{position:relative;text-align:center;font-size:1.75rem;font-weight:700}@media screen and (max-width:767px){.title{font-size:1.5rem}}.title.is-small{font-size:1.25rem}.title:after{content:"";position:absolute;top:calc(100% + 3px);left:50%;width:80px;height:3px;background-color:#000;transform:translateX(-50%)}',""]),t.exports=l},279:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"TitleBase",props:{tag:{type:String,default:"div"},size:{type:String,default:""}},computed:{className:function(){return"title".concat(this.size?" "+this.size:"")}}}),o=(n(277),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.className},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"LayoutContent",props:{title:{type:String}},computed:{titleProps:function(){return{tag:"h2"}}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[t.title?n("title-base",t._b({staticClass:"mb-4-5"},"title-base",t.titleProps,!1),[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBase:n(279).default})},286:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1a284b47",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n(286)},295:function(t,e,n){var l=n(19)(!1);l.push([t.i,".promo{background:linear-gradient(0deg,#f2f4f6,#f2f4f6)}@media screen and (min-width:1200px){.promo .content{font-size:1.2rem}}@media screen and (min-width:1200px){.promo .content h1{font-size:2.5em}}",""]),t.exports=l},301:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"PromoBase",props:{title:{type:String,required:!0},list:{type:Array,default:function(){return[]}},image:{type:String,required:!0}}}),o=(n(294),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-content",{staticClass:"promo pt-4-5 pb-4-5 pb-sm-0"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-12 col-sm-8"},[n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),t.list.length?n("ul",t._l(t.list,(function(e,l){return n("li",{key:l},[t._v(t._s(e))])})),0):t._e()])]),t._v(" "),n("div",{staticClass:"col-4 d-none d-sm-block"},[n("img",{staticClass:"d-block",attrs:{src:t.image,alt:t.title}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutContent:n(280).default})}}]);