(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-s"],{"0010":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("487e")),o=a(n("e451")),r=o.default.module,c={data:function(){return{type:"s"}},onLoad:function(t){this.setShare()},onShow:function(){},onReady:function(){var t=uni.createVideoContext("myVideo");this.videoContext=t,t.play()},components:{safTemp:u.default},methods:{setShare:function(t){var e=this,n=o.default.Interface.domain+"/?type=".concat(e.type,"#/pages/activity/").concat(e.type),a="免费获得 SAF 专业择校评估",u=o.default.Interface.domain+"/static/h5/saf.png",c="带您叩开世界名校之门";r.wxShare(n,a,u,c)}}};e.default=c},2952:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("saf-temp",{attrs:{type:t.type}})},o=[]},"3f92":function(t,e,n){"use strict";n.r(e);var a=n("0010"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=u.a},6976:function(t,e,n){"use strict";n.r(e);var a=n("2952"),u=n("3f92");for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);var r,c=n("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"18c34e10",null,!1,a["a"],r);e["default"]=i.exports}}]);