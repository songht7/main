(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-activity"],{"02bd":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-countdown"},[i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.h))]),i("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.i))]),i("v-uni-view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor}},[t._v(":")]),i("v-uni-view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor}},[t._v(t._s(t.s))])],1)},r=[]},"0e3a":function(t,e,i){"use strict";i.r(e);var a=i("101b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"101b":function(t,e,i){"use strict";i("e25e"),i("ac1f"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var e=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,i=this.timer.match(e);if(null==i)return console.log("时间格式错误"),!1;var a=parseInt(i[1]);if(a<1e3)return console.log("时间格式错误"),!1;var n=parseInt(i[2]),r=parseInt(i[3]),o=parseInt(i[4]);if(o<0||o>24)return console.log("时间格式错误"),!1;var s=parseInt(i[5]);if(s<0||s>60)return console.log("时间格式错误"),!1;var l=parseInt(i[6]);if(l<0||l>60)return console.log("时间格式错误"),!1;var c=new Date(a,n-1,r,o,s,l);this.leftTime=c,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval((function(){t.countDown(t)}),1e3)},countDown:function(t){var e=t.leftTime-new Date;if(e>0)var i=parseInt(e/1e3/60/60,10),a=parseInt(e/1e3/60%60,10),n=parseInt(e/1e3%60,10);else i=0,a=0,n=0;i<10&&(i="0"+i),a<10&&(a="0"+a),n<10&&(n="0"+n),t.h=i,t.i=a,t.s=n}}};e.default=a},"1b3a":function(t,e,i){"use strict";var a=i("8238"),n=i.n(a);n.a},"1b63":function(t,e,i){"use strict";var a=i("a261"),n=i.n(a);n.a},"2d13":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("4ea1")),r=a(i("7856")),o=a(i("6b64")),s=n.default.module,l=n.default.Interface,c=l.apiurl,u={data:function(){return{userInfo:{},article_id:"",portrait:"",detail:[],firstImage:"",brand_id:"",lm_id:"",parent_openid:"",nickname:"",openid:"",lm:"",help_list:{},surplus:2,total:3,Countdown:this.getDate({format:!0}),shareTips:!1}},components:{uniCountdown:r.default,uniIcon:o.default},onLoad:function(t){this.lm_id=t.lm_id,this.parent_openid=t.uid},onShow:function(){this.getData()},methods:{setShare:function(t){var e=this,i=window.location.hash,a="仅差"+e.surplus+"人助力成功!"+e.nickname+"喊你来助力!",r=location.origin+"/?type=activity"+i,o=t.name?a+t.name:a,l=t.image?c+t.image[0]["original_src"]:n.default.Interface.domain+"/static/share.jpg",u="给好友助力，获得免费体验课 - "+t.overview;s.wxShare(r,o,l,u)},getData:function(){var t=this,e=function(e){if(e)t.userInfo=e,t.portrait=e.headimgurl,t.openid=e.openid;else{var i=window.location.hash,a=location.origin+"/?type=activity"+i;uni.setStorage({key:"temp",data:{parent_openid:t.parent_openid,lm_id:t.lm_id},success:function(){}}),s.getWXCode(a)}},i=(s.getMyStorage("uWXInfo","",e),t.parent_openid),a={};""!=i&&(a={openid:i});var n=c+l.addr.getHelp+"?lm_id="+t.lm_id,r=function(e){var i=e.article.data;t.article_id=i.id;var a=e.lm;t.lm=a;var n=a.add_time,r=Date.parse(new Date);n=n.split(" "),n=n[0]+" 24:00:00";var o=Date.parse(n);t.Countdown=o<=r?0:n;var s=t.total-a.help.total;t.surplus=s<=0?0:s,t.help_list=a.help.list,t.nickname=a.help.list[0].nickname,i&&(t.detail=i,t.firstImage=i.image[0]["original_src"],t.setShare(i),t.brand_id=i.brand_id,uni.setNavigationBarTitle({title:i.name}))};s.getData(n,r,"GET","",a)},toHelp:function(){var t=this,e=c+l.addr.saveHelp,i={lm_id:t.lm_id};l.wx.test_openid&&(i["help"]="self");var a=t.openid;if(a==t.parent_openid&&""==l.wx.test_openid)return t.shareTips=!0,void setTimeout((function(){t.shareTips=!1}),5e3);var n={};""!=a&&(n={openid:a});var r=function(e,i){console.log("======toHelp========"),console.log(i),i.success?uni.showToast({title:"助力成功!",duration:2e3,complete:function(e){setTimeout((function(){uni.navigateTo({url:"/pages/detail/index?id="+t.article_id})}),2500)}}):uni.showToast({title:"助力失败",icon:"none",duration:2e3})};s.getData(e,r,"POST",i,n)},closeShareTips:function(){this.shareTips=!1},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n;var r="".concat(i,"-").concat(a,"-").concat(n," 24:00:00");return r}}};e.default=u},"46a5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page-loading[data-v-5fa33247]{padding:%?80?% 0;line-height:2;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;text-align:center;font-size:%?40?%}.activity-page[data-v-5fa33247]{background:#ffdda7;min-height:900px}.head-img[data-v-5fa33247]{display:block;width:100%}.activity-main[data-v-5fa33247]{width:90%;margin:0 auto;position:relative;top:%?-5?%;z-index:1;padding:0 0 %?100?%}.article-info[data-v-5fa33247]{background:#fff;padding:%?10?% %?15?%;box-shadow:0 %?2?% %?10?% #a7a7a7}.article-title[data-v-5fa33247]{color:#fdbe5c;font-size:%?38?%;line-height:1.4}.txt[data-v-5fa33247]{padding-right:%?20?%}.article-overview[data-v-5fa33247]{padding:%?40?% 0 %?5?%}.share-info-block[data-v-5fa33247]{padding:%?20?% 0}.share-info[data-v-5fa33247],\n.share-info-txt[data-v-5fa33247]{text-align:center;display:flex;justify-content:center;align-items:flex-end;font-size:%?32?%;color:#fe9c01;text-shadow:-1px 0 5px #fff,0 1px 5px #fff,1px 0 5px #fff,0 -1px 5px #fff;letter-spacing:1px}.share-info-txt[data-v-5fa33247]{text-shadow:none;color:#333}.free[data-v-5fa33247]{font-size:%?40?%}.help-user[data-v-5fa33247]{display:flex;justify-content:flex-start;align-content:center;align-items:center;padding:%?30?% 0 0}.help-user-succ[data-v-5fa33247]{justify-content:center}.help-user-portrait[data-v-5fa33247]{width:45px;height:45px;border-radius:50%;overflow:hidden}.portrait-img[data-v-5fa33247]{width:100%}.help-info[data-v-5fa33247]{background:#fab951;color:#fff;text-align:center;padding:%?10?% 0;width:100%;border-radius:%?10?%;font-size:%?32?%}.portrait-block[data-v-5fa33247]{margin-right:%?10?%}",""]),t.exports=e},7856:function(t,e,i){"use strict";i.r(e);var a=i("02bd"),n=i("0e3a");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1b63");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"8eb265b8",null,!1,a["a"],o);e["default"]=l.exports},8238:function(t,e,i){var a=i("46a5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a089bb20",a,!0,{sourceMap:!1,shadowMode:!1})},"85ab":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniIcon:i("9ebe").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activity-page"},[t.lm?t._e():[a("v-uni-view",{staticClass:"page-loading"},[t._v("正在加载···")])],t.lm?[a("v-uni-view",{staticClass:"activity-block"},[a("img",{staticClass:"head-img",attrs:{src:t.sourceUrl+t.firstImage}})]),a("v-uni-view",{staticClass:"activity-main"},[a("v-uni-view",{staticClass:"activity-block article-info"},[a("v-uni-view",{staticClass:"article-title"},[t._v(t._s(t.detail.name))]),a("v-uni-view",{staticClass:"article-ov"},[a("v-uni-text",{staticClass:"txt"},[t._v("售价："+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元")]),a("v-uni-text",{staticClass:"txt"},[t._v("适合年龄："+t._s(t.detail.age_min)+"-"+t._s(t.detail.age_max)+"岁")])],1),a("v-uni-view",{staticClass:"article-overview"},[t._v(t._s(t.detail.overview))])],1),a("v-uni-view",{staticClass:"activity-block help-user",class:0==t.surplus||0==t.Countdown?"help-user-succ":""},[t._l(t.help_list,(function(t,e){return a("v-uni-view",{key:e,staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:t.headimgurl,alt:""}})])})),0!=t.Countdown&&0!=t.surplus?[t._l(parseInt(t.surplus),(function(e){return t.surplus>1?a("v-uni-view",{key:e,staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:i("da9a"),alt:""}})]):t._e()})),1==t.surplus?a("v-uni-view",{staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:i("da9a"),alt:""}})]):t._e()]:t._e(),0==t.Countdown&&0!=t.surplus?t._l(parseInt(t.surplus),(function(e){return t.surplus>0?a("v-uni-view",{key:"portrait"+e,staticClass:"help-user-portrait portrait-block"},[a("img",{staticClass:"portrait-img",attrs:{src:"../../static/portrait/p"+e+".jpg",alt:""}})]):t._e()})):t._e()],2),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info-txt"},[t._v("还差 "+t._s(t.surplus)+" 位好友助力即可免费申请")]),a("v-uni-view",{staticClass:"share-info-txt"},[t._v("赶快召唤小伙伴吧！")]),a("v-uni-view",{staticClass:"share-info-txt"},[t._v("剩余"),a("uni-countdown",{attrs:{timer:t.Countdown}}),t._v("时间助力结束")],1)],1):t._e(),0==t.Countdown||t.surplus<=0?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info"},[t._v("恭喜您获得"),a("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),a("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block share-info-block"},[a("v-uni-view",{staticClass:"share-info"},[t._v("分享成功即可"),a("v-uni-text",{staticClass:"free"},[t._v("免费体验")])],1),a("v-uni-view",{staticClass:"share-info"},[t._v("原价"+t._s("0.00"==t.detail.current_price?"0":t.detail.current_price)+"元"+t._s(t.detail.name))])],1):t._e(),t.surplus>0&&0!=t.Countdown?a("v-uni-view",{staticClass:"activity-block help-block"},[a("v-uni-view",{staticClass:"help-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHelp()}}},[t._v("帮我助力")])],1):t._e(),t.parent_openid!=t.openid?[0==t.Countdown||t.surplus<=0?a("v-uni-view",{staticClass:"activity-block help-block"},[a("v-uni-navigator",{staticClass:"help-info",attrs:{url:"/pages/detail/index?id="+t.article_id}},[t._v("我也要预约")])],1):t._e()]:t._e()],2)]:t._e(),t.shareTips?a("v-uni-view",{staticClass:"share-tips",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeShareTips.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"share-box"},[a("v-uni-view",{staticClass:"s-row"},[t._v('点击右上角"'),a("uni-icon",{attrs:{size:"45",type:"more-filled",color:"#FCFCFC"}}),t._v('"'),a("uni-icon",{staticClass:"undo",attrs:{size:"50",type:"undo",color:"#FCFCFC"}})],1),a("v-uni-view",{staticClass:"s-row"},[t._v("分享给好友完成助力")])],1)],1):t._e()],2)},r=[]},a261:function(t,e,i){var a=i("df37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cd5a8e1c",a,!0,{sourceMap:!1,shadowMode:!1})},aeef:function(t,e,i){"use strict";i.r(e);var a=i("2d13"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},d3b71:function(t,e,i){"use strict";i.r(e);var a=i("85ab"),n=i("aeef");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1b3a");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5fa33247",null,!1,a["a"],o);e["default"]=l.exports},da9a:function(t,e,i){t.exports=i.p+"static/img/contact.4eee8b0b.jpg"},df37:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-countdown[data-v-8eb265b8]{display:flex;padding:%?2?% 0;flex-wrap:nowrap;justify-content:center}.uni-countdown-splitor[data-v-8eb265b8]{width:auto!important;justify-content:center;line-height:%?44?%;padding:0 %?5?%}.uni-countdown-numbers[data-v-8eb265b8]{line-height:%?44?%;width:auto!important;padding:0 %?10?%;justify-content:center;height:%?44?%;border-radius:%?8?%;margin:0 %?5?%;border:1px solid #000;font-size:%?22?%}",""]),t.exports=e}}]);