(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,10],{276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("616876a0",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var l=n(19)(!1);l.push([t.i,'.title{position:relative;text-align:center;font-size:1.75rem;font-weight:700}@media screen and (max-width:767px){.title{font-size:1.5rem}}.title.is-small{font-size:1.25rem}.title:after{content:"";position:absolute;top:calc(100% + 3px);left:50%;width:80px;height:3px;background-color:#000;transform:translateX(-50%)}',""]),t.exports=l},279:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"TitleBase",props:{tag:{type:String,default:"div"},size:{type:String,default:""}},computed:{className:function(){return"title".concat(this.size?" "+this.size:"")}}}),o=(n(277),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.className},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"LayoutContent",props:{title:{type:String}},computed:{titleProps:function(){return{tag:"h2"}}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[t.title?n("title-base",t._b({staticClass:"mb-4-5"},"title-base",t.titleProps,!1),[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleBase:n(279).default})},302:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"ContentBase",props:{title:{type:String},content:{type:String,required:!0}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-content",{attrs:{title:t.title}},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutContent:n(280).default})}}]);