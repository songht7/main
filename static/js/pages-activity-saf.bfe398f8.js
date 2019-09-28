(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-saf"],{"17e0":function(t,e,i){"use strict";i("c5f6"),i("28a5"),i("3b2b"),i("7f7f"),t.exports={error:"",check:function(t,e){for(var i=0;i<e.length;i++){if(!e[i].checkType)return!0;if(!e[i].name)return!0;if(!e[i].errorMsg)return!0;if(!t[e[i].name])return this.error=e[i].errorMsg,!1;switch(e[i].checkType){case"string":var a=new RegExp("^.{"+e[i].checkRule+"}$");if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"int":a=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[i].checkRule+"}$");if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[i].name]))return this.error=e[i].errorMsg,!1;var n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"betweenD":a=/^-?[1-9][0-9]?$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"betweenF":a=/^-?[0-9][0-9]?.+[0-9]+$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;n=e[i].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),t[e[i].name]>n[1]||t[e[i].name]<n[0])return this.error=e[i].errorMsg,!1;break;case"same":if(t[e[i].name]!=e[i].checkRule)return this.error=e[i].errorMsg,!1;break;case"notsame":if(t[e[i].name]==e[i].checkRule)return this.error=e[i].errorMsg,!1;break;case"email":a=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"phoneno":a=/^1[0-9]{10,10}$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"zipcode":a=/^[0-9]{6}$/;if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"reg":a=new RegExp(e[i].checkRule);if(!a.test(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"in":if(-1==e[i].checkRule.indexOf(t[e[i].name]))return this.error=e[i].errorMsg,!1;break;case"notnull":if(null==t[e[i].name]||t[e[i].name].length<1)return this.error=e[i].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}},"2af3":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"saf-page-main"},[i("v-uni-view",{staticClass:"swiper-block"},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":"false",autoplay:"autoplay",circular:"circular",interval:"3000",duration:"500"}},t._l(t.swiperList,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"slide-info"},[i("v-uni-view",{staticClass:"s-inner"},[i("img",{staticClass:"saf-logo",attrs:{src:"/static/saf.png",alt:"saf"}}),i("img",{staticClass:"slide-info1",attrs:{src:"/static/slide_info1.png",alt:""}})])],1),i("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:t.original_src,mode:"aspectFill"}})],1)],1)}),1)],1),i("v-uni-view",{staticClass:"page-content page-inner"},[i("v-uni-view",{staticClass:"page-wrapper"},[i("v-uni-view",{staticClass:"page-block block-right"},[i("v-uni-view",{staticClass:"user-box"},[i("v-uni-view",{staticClass:"user-title"},[i("img",{staticClass:"title-img title-img-2",attrs:{src:"/static/title2.png",alt:""}})]),i("v-uni-view",{staticClass:"user-main"},[t.tipShow?i("v-uni-view",{staticClass:"tip-box"},[t._v(t._s(t.tips))]):t._e(),i("v-uni-view",{staticClass:"form-box"},[i("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[i("v-uni-view",{staticClass:"user-list"},[i("v-uni-view",{staticClass:"uni-list-row"},[t._v("姓名")]),i("v-uni-view",{staticClass:"uni-list-row"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"name",placeholder:"",value:""}})],1)],1),i("v-uni-view",{staticClass:"user-list"},[i("v-uni-view",{staticClass:"uni-list-row"},[t._v("手机")]),i("v-uni-view",{staticClass:"uni-list-row"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"phone",type:"number",placeholder:"",value:""}})],1)],1),i("v-uni-view",{staticClass:"uni-btn"},[i("v-uni-button",{staticClass:"saf-btn",class:t.loading?"btn-loading":"",attrs:{formType:"submit",loading:t.loading}},[t._v(t._s(t.sentRes))])],1),i("v-uni-view",{staticClass:"protect"},[i("img",{staticClass:"icon-saf icon-suo",attrs:{src:"/static/suo.png",alt:""}}),t._v("SAF 保护您的隐私")])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"page-block block-left"},[i("v-uni-view",{staticClass:"saf-title"},[i("img",{staticClass:"title-img title-img-1",attrs:{src:"/static/title1.png",alt:""}})]),i("v-uni-view",{staticClass:"saf-ov"},[t._v("往届学生分享参加 SAF 学习项目的实际价值和生活变化经历")]),i("v-uni-view",{staticClass:"video-box"},[i("img",{staticClass:"icon-saf icon-arw",attrs:{src:"/static/arw.png",alt:""}}),i("v-uni-view",{staticClass:"video-main"},[i("v-uni-video",{attrs:{id:"myVideo",src:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4","enable-danmu":"","danmu-btn":"",controls:""},on:{error:function(e){e=t.$handleEvent(e),t.videoErrorCallback(e)}}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"footer-main page-inner"},[i("img",{staticClass:"footer-logo",attrs:{src:"/static/saf.png",alt:"saf"}}),i("v-uni-view",{staticClass:"footer-left"},[t._v("海外学习体验助您脱颖而出")]),i("v-uni-view",{staticClass:"footer-right"},[i("v-uni-view",{staticClass:"r-list"},[t._v("入读知名大学")]),i("v-uni-view",{staticClass:"r-list"},[t._v("匹配适合的交流项目")]),i("v-uni-view",{staticClass:"r-list"},[t._v("转变人生的探险之旅")])],1)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"35b3":function(t,e,i){"use strict";i.r(e);var a=i("2af3"),n=i("5cf6");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("68de");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"4a93a2c9",null);e["default"]=r.exports},"5cf6":function(t,e,i){"use strict";i.r(e);var a=i("8df0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"68de":function(t,e,i){"use strict";var a=i("fde1"),n=i.n(a);n.a},"8df0":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var n=a(i("4ea1")),o=i("17e0"),s=n.default.module,r=n.default.Interface,c=(r.apiurl,{data:function(){return{loading:!1,swiperList:[{original_src:"/static/h5/slide1.jpg"}],api:"http://api_test.meetji.com/v2/ApiHome-saveSingle.htm",formData:{name:"",phone:"",channel_code:"saf"},sentRes:"立即行动",tipShow:!1,tips:"正在提交..."}},onLoad:function(t){this.setShare()},onShow:function(){},methods:{setShare:function(t){var e=n.default.Interface.domain+"/?type='saf'#/pages/activity/saf",i="免费获得 SAF 专业择校评估",a=n.default.Interface.domain+"/static/h5/saf.png",o="海外学习体验助您脱颖而出";s.wxShare(e,i,a,o)},formSubmit:function(t){var e=this;if(1!=e.loading){var i=t.detail.value,a=[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"请填写姓名"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],n=o.check(i,a);if(n){var r={name:i.name,phone:i.phone},c={channel_code:"saf",openid:""},l=e.api;console.log(r),e.loading=!0,e.tipShow=!0,e.tips="正在提交...";var d=function(t,i){console.log(i);var a="提交成功！！";i.success||(a="行动失败,请重试"),e.tips=a,setTimeout(function(){e.tipShow=!1,e.tips="正在提交...",e.loading=!1},2e3)};s.getData(l,d,"POST",r,c)}else e.tipShow=!0,e.tips=o.error,this.loading=!1,setTimeout(function(){e.tipShow=!1,e.tips="正在提交..."},1e3)}}}});e.default=c},c07f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.page-content[data-v-4a93a2c9]{width:100%;line-height:1.4;padding-bottom:%?60?%}#myVideo[data-v-4a93a2c9]{width:100%;height:%?400?%}.video-box[data-v-4a93a2c9]{position:relative}.icon-arw[data-v-4a93a2c9]{display:none;position:absolute;z-index:2;left:80%;top:-20px}.video-main[data-v-4a93a2c9]{position:relative;z-index:1}\n\n/*swiper-slide*/.swiper-box[data-v-4a93a2c9]{width:100%;height:%?600?%}.swiper-item[data-v-4a93a2c9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end;height:100%;background:#eee;color:#fff;position:relative}.slide-info[data-v-4a93a2c9]{position:absolute;z-index:1;width:100%;padding-bottom:%?108?%}.s-inner[data-v-4a93a2c9]{width:96%;margin:0 auto;padding:%?10?% 2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.saf-logo[data-v-4a93a2c9]{width:15%;margin-bottom:%?15?%}.slide-info1[data-v-4a93a2c9]{max-width:50%}.slideImg[data-v-4a93a2c9]{width:100%;height:100%;display:inline-block}.page-inner[data-v-4a93a2c9]{width:96%;padding:%?10?% 2%}.page-wrapper[data-v-4a93a2c9]{position:relative;z-index:1;top:%?-108?%}.block-left[data-v-4a93a2c9]{position:relative;top:%?50?%}.title-img[data-v-4a93a2c9]{width:80%}.title-img-1[data-v-4a93a2c9]{width:40%}.saf-title[data-v-4a93a2c9]{margin-bottom:%?15?%}.saf-t[data-v-4a93a2c9]{font-size:%?34?%;font-weight:500;color:#000;line-height:2;display:inline;padding-bottom:%?10?%;border-bottom:%?5?% solid #f08422}.saf-ov[data-v-4a93a2c9]{font-size:%?30?%;color:#000;line-height:1.6;padding-bottom:%?15?%}.user-title[data-v-4a93a2c9]{font-size:%?36?%;color:#fff;background:#008ba9;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user-main[data-v-4a93a2c9]{min-height:%?422?%;background:#0e3b5f;position:relative}.tip-box[data-v-4a93a2c9]{position:absolute;width:100%;height:100%;left:0;top:0;z-index:1;background:rgba(54,54,54,.1);color:#e9831f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:top;-ms-flex-line-pack:top;align-content:top;-webkit-box-align:top;-webkit-align-items:top;-ms-flex-align:top;align-items:top;font-size:%?38?%}.form-box[data-v-4a93a2c9]{padding:%?35?% %?35?% 0;color:#fff;font-size:%?18?%}.user-list[data-v-4a93a2c9]{padding-bottom:%?10?%}.uni-input[data-v-4a93a2c9]{color:#333;height:%?53?%}.uni-btn[data-v-4a93a2c9]{padding:%?20?% 0}.saf-btn[data-v-4a93a2c9]{background:#f08422;color:#fff;border-radius:0;font-size:%?34?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.btn-loading[data-v-4a93a2c9]{background:#333;color:#fff}.protect[data-v-4a93a2c9]{color:#fff;font-size:%?16?%;padding-bottom:%?30?%;text-align:right}.icon-suo[data-v-4a93a2c9]{margin-right:%?10?%}.footer[data-v-4a93a2c9]{background:#3b3838}.footer-main[data-v-4a93a2c9]{min-height:%?130?%;color:#ccc;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;padding:%?20?% %?10?% %?30?%;position:relative}.footer-logo[data-v-4a93a2c9]{position:absolute;width:%?100?%;right:%?10?%;bottom:%?45?%;opacity:.8}.footer-left[data-v-4a93a2c9]{font-size:%?36?%}.footer-right[data-v-4a93a2c9]{font-size:%?34?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.r-list[data-v-4a93a2c9]{padding-left:%?40?%;position:relative;margin-left:%?20?%}.r-list[data-v-4a93a2c9]:before{position:absolute;left:0;top:30%;height:%?10?%;width:%?10?%;content:"";background:#e9831f}\n\n/* @media screen and (min-device-width: 1025px) { */@media screen and (min-width:768px){.page-inner[data-v-4a93a2c9]{width:750px;margin:0 auto;padding:0}.slide-info[data-v-4a93a2c9]{padding-bottom:65px}.saf-logo[data-v-4a93a2c9]{width:10%;margin-bottom:10px}.slide-info1[data-v-4a93a2c9]{max-width:25%}.icon-arw[data-v-4a93a2c9]{display:block;left:-20px;top:20%}.page-content[data-v-4a93a2c9]{font-size:14px;color:#333;line-height:18px}.swiper-block[data-v-4a93a2c9]{margin-bottom:30px}.swiper-box[data-v-4a93a2c9]{height:320px}.page-wrapper[data-v-4a93a2c9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;z-index:1;top:-95px;right:0}.page-block[data-v-4a93a2c9]{width:48%;padding:0}.title-img[data-v-4a93a2c9]{width:auto}.title-img-1[data-v-4a93a2c9]{width:auto}.block-left[data-v-4a93a2c9]{top:0;padding-top:95px}.saf-title[data-v-4a93a2c9]{margin-bottom:15px}.saf-t[data-v-4a93a2c9]{font-size:28px;line-height:2;display:inline;padding-bottom:8px;border-bottom:5px solid #f08422}.saf-ov[data-v-4a93a2c9]{font-size:16px;line-height:1.6;padding-bottom:15px}#myVideo[data-v-4a93a2c9]{height:245px}.user-title[data-v-4a93a2c9]{font-size:26px;height:65px}.user-main[data-v-4a93a2c9]{min-height:416px}.form-box[data-v-4a93a2c9]{padding:35px 35px 0;font-size:18px}.tip-box[data-v-4a93a2c9]{font-size:26px}.user-list[data-v-4a93a2c9]{padding-bottom:10px\n\t\t/* margin-left: 20px; */}.uni-input[data-v-4a93a2c9]{height:38px}.uni-btn[data-v-4a93a2c9]{padding:20px 0}.saf-btn[data-v-4a93a2c9]{font-size:22px;height:55px}.protect[data-v-4a93a2c9]{font-size:16px;padding-bottom:15px}.icon-suo[data-v-4a93a2c9]{margin-right:10px}.footer-main[data-v-4a93a2c9]{min-height:100px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0}.footer-logo[data-v-4a93a2c9]{display:none}.footer-left[data-v-4a93a2c9]{font-size:18px}.footer-right[data-v-4a93a2c9]{font-size:16px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.r-list[data-v-4a93a2c9]{padding-left:15px;margin-left:15px}.r-list[data-v-4a93a2c9]:before{height:10px;width:10px}}@media screen and (min-width:1004px){.page-inner[data-v-4a93a2c9]{width:1004px}.s-inner[data-v-4a93a2c9]{width:1004px;padding:0}.saf-logo[data-v-4a93a2c9]{width:auto;margin-bottom:15px}.slide-info1[data-v-4a93a2c9]{max-width:auto}.slide-info[data-v-4a93a2c9]{padding-bottom:100px}#myVideo[data-v-4a93a2c9]{height:270px}.swiper-box[data-v-4a93a2c9]{height:620px}.user-title[data-v-4a93a2c9]{font-size:28px}.footer-main[data-v-4a93a2c9]{min-height:130px}.footer-left[data-v-4a93a2c9]{font-size:24px}.footer-right[data-v-4a93a2c9]{font-size:18px}.r-list[data-v-4a93a2c9]{padding-left:20px;margin-left:20px}}',""])},fde1:function(t,e,i){var a=i("c07f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("370333de",a,!0,{sourceMap:!1,shadowMode:!1})}}]);