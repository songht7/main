(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-activity"],{3876:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var e=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,i=this.timer.match(e);if(null==i)return console.log("时间格式错误"),!1;var a=parseInt(i[1]);if(a<1e3)return console.log("时间格式错误"),!1;var n=parseInt(i[2]),o=parseInt(i[3]),r=parseInt(i[4]);if(r<0||r>24)return console.log("时间格式错误"),!1;var s=parseInt(i[5]);if(s<0||s>60)return console.log("时间格式错误"),!1;var c=parseInt(i[6]);if(c<0||c>60)return console.log("时间格式错误"),!1;var l=new Date(a,n-1,o,r,s,c);this.leftTime=l,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval(function(){t.countDown(t)},1e3)},countDown:function(t){var e=t.leftTime-new Date;if(e>0)var i=parseInt(e/1e3/60/60,10),a=parseInt(e/1e3/60%60,10),n=parseInt(e/1e3%60,10);else i=0,a=0,n=0;i<10&&(i="0"+i),a<10&&(a="0"+a),n<10&&(n="0"+n),t.h=i,t.i=a,t.s=n}}};e.default=a},"40b0":function(t,e,i){"use strict";i.r(e);var a=i("cf40"),n=i("f070");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"4f45":function(t,e,i){"use strict";i.r(e);var a=i("ee79"),n=i("c58c");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("c70d");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"1cd579f5",null);e["default"]=s.exports},"52d8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("b344")),n=r(i("4f45")),o=r(i("40b0"));function r(t){return t&&t.__esModule?t:{default:t}}var s=a.default.module,c=a.default.Interface,l=c.apiurl,u={data:function(){return{userInfo:{},article_id:"",portrait:"",detail:[],firstImage:"",brand_id:"",lm_id:"",parent_openid:"",openid:"",lm:"",help_list:{},surplus:2,total:3,Countdown:this.getDate({format:!0})}},components:{uniCountdown:n.default,uniIcon:o.default},onLoad:function(t){this.lm_id=t.lm_id,this.parent_openid=t.uid},onShow:function(){this.getData()},methods:{setShare:function(t){var e=window.location.hash,i=a.default.Interface.domain+"/?type=activity&id="+t.id+e,n=t.name?t.name:"英语免费试听",o=t.image?l+t.image[0]["original_src"]:a.default.Interface.domain+"/static/share.jpg",r=t.overview?t.overview:"英语免费试听课，在这里找到你想要的";s.wxShare(i,n,o,r)},getData:function(){var t=this,e=function(e){e?(t.userInfo=e,t.portrait=e.headimgurl,t.openid=e.openid):s.getWXCode()},i=(s.getMyStorage("uWXInfo","",e),t.parent_openid),a={};""!=i&&(a={openid:i});var n=l+c.addr.getHelp+"?lm_id="+t.lm_id,o=function(e){var i=e.article.data;t.article_id=i.id;var a=e.lm;t.lm=a;var n=a.arrive_time+" 24:00:00",o=Date.parse(new Date),r=Date.parse(n);t.Countdown=r<=o?0:n;var s=t.total-a.help.total;t.surplus=s<=0?0:s,t.help_list=a.help.list,i&&(t.detail=i,t.firstImage=i.image[0]["original_src"],t.setShare(i),t.brand_id=i.brand_id,uni.setNavigationBarTitle({title:i.name}))};s.getData(n,o,"GET","",a)},toHelp:function(){var t=this,e=l+c.addr.saveHelp,i={lm_id:t.lm_id};c.wx.test_openid&&(i["help"]="self");var a=t.openid;if(a!=t.parent_openid||""!=c.wx.test_openid){var n={};""!=a&&(n={openid:a});var o=function(e,i){console.log("======toHelp========"),console.log(i),i.success?uni.showToast({title:"助力成功!",duration:2e3,complete:function(e){setTimeout(function(){uni.navigateTo({url:"/pages/detail/index?id="+t.article_id})},2500)}}):uni.showToast({title:"助力失败",icon:"none",duration:2e3})};s.getData(e,o,"POST",i,n)}else uni.showToast({title:"分享给好友完成助力",icon:"none",duration:2e3})},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n;var o="".concat(i,"-").concat(a,"-").concat(n," 24:00:00");return o}}};e.default=u},"7c41":function(t,e,i){"use strict";i.r(e);var a=i("52d8"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"7e31":function(t,e,i){var a=i("b943");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("724c858a",a,!0,{sourceMap:!1,shadowMode:!1})},"7fcf":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-page"},[t.lm?t._e():[i("v-uni-view",{staticClass:"page-loading"},[t._v("正在加载...")])],t.lm?[i("v-uni-view",{staticClass:"activity-block"},[i("img",{staticClass:"head-img",attrs:{src:t.sourceUrl+t.firstImage}})]),i("v-uni-view",{staticClass:"activity-main"},[i("v-uni-view",{staticClass:"activity-block article-info"},[i("v-uni-view",{staticClass:"article-title"},[t._v(t._s(t.detail.name))]),i("v-uni-view",{staticClass:"article-ov"},[i("v-uni-text",{staticClass:"txt"},[t._v("售价："+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元")]),i("v-uni-text",{staticClass:"txt"},[t._v("适合年龄："+t._s(t.detail.age_min)+"-"+t._s(t.detail.age_max)+"岁")])],1),i("v-uni-view",{staticClass:"article-overview"},[t._v(t._s(t.detail.overview))])],1),0!=t.Countdown?i("v-uni-view",{staticClass:"activity-block help-user",class:0==t.surplus?"help-user-succ":""},[t._l(t.help_list,function(t,e){return i("v-uni-view",{key:e,staticClass:"help-user-portrait portrait-block"},[i("img",{staticClass:"portrait-img",attrs:{src:t.headimgurl,alt:""}})])}),t._l(parseInt(t.surplus),function(e){return t.surplus>1?i("v-uni-view",{key:e,staticClass:"portrait-block"},[i("uni-icon",{attrs:{size:"55",type:"contact",color:"#FFF"}})],1):t._e()}),1==t.surplus?i("v-uni-view",{staticClass:"portrait-block"},[i("uni-icon",{attrs:{size:"55",type:"contact",color:"#FFF"}})],1):t._e()],2):t._e(),t.surplus>0&&0!=t.Countdown?i("v-uni-view",{staticClass:"activity-block share-info-block"},[i("v-uni-view",{staticClass:"share-info-txt"},[t._v("还差 "+t._s(t.surplus)+" 位好友助力即可免费申请")]),i("v-uni-view",{staticClass:"share-info-txt"},[t._v("赶快召唤小伙伴吧！")]),i("v-uni-view",{staticClass:"share-info-txt"},[t._v("剩余"),i("uni-countdown",{attrs:{timer:t.Countdown}}),t._v("时间助力结束")],1)],1):t._e(),0==t.Countdown||t.surplus<=0?i("v-uni-view",{staticClass:"activity-block share-info-block"},[i("v-uni-view",{staticClass:"share-info"},[t._v("恭喜您获得"),i("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),i("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?i("v-uni-view",{staticClass:"activity-block share-info-block"},[i("v-uni-view",{staticClass:"share-info"},[t._v("分享成功即可"),i("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),i("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?i("v-uni-view",{staticClass:"activity-block help-block"},[i("v-uni-view",{staticClass:"help-info",on:{click:function(e){e=t.$handleEvent(e),t.toHelp()}}},[t._v("帮我助力")])],1):t._e()],1)]:t._e()],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},9523:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page-loading[data-v-6ba3c67a]{padding:%?80?% 0;line-height:2;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;text-align:center;font-size:%?40?%}.activity-page[data-v-6ba3c67a]{background:#ffdda7;min-height:900px}.head-img[data-v-6ba3c67a]{display:block;width:100%}.activity-main[data-v-6ba3c67a]{width:90%;margin:0 auto;position:relative;top:%?-5?%;z-index:1;padding:0 0 %?100?%}.article-info[data-v-6ba3c67a]{background:#fff;padding:%?10?% %?15?%;-webkit-box-shadow:0 %?2?% %?10?% #a7a7a7;box-shadow:0 %?2?% %?10?% #a7a7a7}.article-title[data-v-6ba3c67a]{color:#fdbe5c;font-size:%?38?%;line-height:1.4}.txt[data-v-6ba3c67a]{padding-right:%?20?%}.article-overview[data-v-6ba3c67a]{padding:%?40?% 0 %?5?%}.share-info-block[data-v-6ba3c67a]{padding:%?20?% 0}.share-info[data-v-6ba3c67a],.share-info-txt[data-v-6ba3c67a]{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;font-size:%?32?%;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;letter-spacing:1px}.share-info-txt[data-v-6ba3c67a]{text-shadow:none;color:#333}.free[data-v-6ba3c67a]{font-size:%?40?%}.help-user[data-v-6ba3c67a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% 0 0}.help-user-succ[data-v-6ba3c67a]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.help-user-portrait[data-v-6ba3c67a]{width:45px;height:45px;border-radius:50%;overflow:hidden}.portrait-img[data-v-6ba3c67a]{width:100%}.help-info[data-v-6ba3c67a]{background:#fab951;color:#fff;text-align:center;padding:%?10?% 0;width:100%;border-radius:%?10?%;font-size:%?32?%}.portrait-block[data-v-6ba3c67a]{margin-right:%?5?%}",""])},a2b5:function(t,e,i){"use strict";var a=i("b7d7"),n=i.n(a);n.a},b7d7:function(t,e,i){var a=i("9523");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("35e0a33e",a,!0,{sourceMap:!1,shadowMode:!1})},b81e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},b943:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-countdown[data-v-1cd579f5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?2?% 0;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown-splitor[data-v-1cd579f5]{width:auto!important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-1cd579f5]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}",""])},c58c:function(t,e,i){"use strict";i.r(e);var a=i("3876"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c70d:function(t,e,i){"use strict";var a=i("7e31"),n=i.n(a);n.a},cf40:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d51c:function(t,e,i){"use strict";i.r(e);var a=i("7fcf"),n=i("7c41");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("a2b5");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"6ba3c67a",null);e["default"]=s.exports},ee79:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-countdown"},[i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.h))]),i("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.i))]),i("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.s))])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f070:function(t,e,i){"use strict";i.r(e);var a=i("b81e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);