(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-ef9"],{"0893":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e451")),o=a(i("5862")),s=a(i("0a8a")),l=a(i("1e73")),c=a(i("bb0c")),d=n.default.module,r=n.default.Interface,u=r.apiurl,p=i("654b"),f=(i("ddc8"),n.default.Interface),g={data:function(){return{model:"",platform:"",article_id:35,brand:"",key:"",date:"",gender:["男","女"],index:0,age:["18-22岁","23-26岁","27-35岁","36-40岁","41-50岁","51岁","18岁以下"],age_index:-1,loading:!1,scrollTop:0,btnShow:!1,old:{scrollTop:0},cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",pickerText:"",mulLinkageTwoPicker:c.default,mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],swiperList:[{original_src:"http://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/1611237150.png",host:"local",link:""},{original_src:"http://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/1611237177.png",host:"local",link:""},{original_src:"http://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/1611237193.png",host:"local",link:""}],swiperList2:[{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-1.png",host:"local",link:""},{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-2.png",host:"local",link:""},{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-3.png",host:"local",link:""},{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-4.png",host:"local",link:""},{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-5.png",host:"local",link:""},{original_src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-6.png",host:"local",link:""}]}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},components:{uniIcon:o.default,mpvuePicker:s.default,mpvueCityPicker:l.default},onLoad:function(t){sigmob.track(sigmob_event.pageview);var e=t.key||2,i=n.default.getList(e);i.title;this.date=t.date||this.getDate({format:!0}),this.brand=i.title,this.key=e,uni.setNavigationBarTitle({title:"英孚教育 英语培训中心"})},onReady:function(){},onShow:function(){var t=this,e=window.location.hash,i=n.default.Interface.domain+"/?type=ef9&id=35"+e,a="英孚教育 英语培训中心",o=n.default.Interface.domain+"/static/ef/p2-banner.jpg",s="专业认证培训师，教你地道英语";d.wxShare(i,a,o,s),uni.getSystemInfo({success:function(e){console.log(e),t.model=e.model,t.platform=e.platform}})},methods:{goHomePage:function(){uni.switchTab({url:"/pages/index/index"})},upper:function(t){},lower:function(t){},scroll:function(t){t.detail.scrollTop>600?this.btnShow=!0:this.btnShow=!1,this.old.scrollTop=t.detail.scrollTop},goTop:function(t){},bindChangeAge:function(t){this.age_index=t.target.value},bindPickerChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},onCancel:function(t){},onConfirm:function(t){this.pickerText=t.label},showMulLinkageTwoPicker:function(t){this.pickerValueArray=this.mulLinkageTwoPicker,this.mode="multiLinkageSelector",this.deepLength=2,this.pickerValueDefault=[0,0],this.$refs.mpvuePicker.show()},onBackPress:function(t){return this.$refs.mpvuePicker.showPicker?(this.$refs.mpvuePicker.pickerCancel(),!0):this.$refs.mpvueCityPicker.showPicker?(this.$refs.mpvueCityPicker.pickerCancel(),!0):void 0},onUnload:function(t){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel(),this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:"",success:function(){console.log("成功拨打电话")}})},formSubmit:function(t){var e=this;if(1!=this.loading){var i=t.detail.value;this.loading=!0,uni.showLoading({title:"订阅中..."}),i["Age"]=e.age[i.Age]?e.age[i.Age]:"";var a=[{name:"UserName",checkType:"notnull",checkRule:"",errorMsg:"请填写姓名"},{name:"Age",checkType:"notnull",checkRule:"",errorMsg:"请选择年龄"},{name:"UserPhone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},{name:"City",checkType:"notnull",checkRule:"",errorMsg:"请选择城市"}];if(!e.model);var n=p.check(i,a);if(n){i.UserName,i.Age,i.UserPhone,i.City;var o=f.SendMail.email;f.SendMail.url;o.forEach((function(t,e,i){0}));window.location.href;var s={name:i.UserName+" - ef9《每日e课》",age_range:i.Age,sex:i.Email,phone:i.UserPhone,city:i.City,school:"",article_id:e.article_id,arrive_time:i.ApplyDate?i.ApplyDate:""},l=function(t){t?(sigmob.active(sigmob_event.form),uni.showToast({title:"预约成功！",icon:"success",duration:2e3}),setTimeout((function(){e.loading=!1,uni.hideLoading(),uni.navigateTo({url:"/pages/detail/thx?key="+e.key})}),3e3)):(e.loading=!1,uni.hideLoading(),uni.showModal({content:"预约失败",showCancel:!1}))},c=u+r.addr.saveSingle;console.log(s);d.getData(c,l,"POST",s,{});var g=i.City;i.UserName,i.UserName,i.UserPhone,i.UserPhone,e.age[i.Age],e.gender[i.Gender],g.split("-")[0],g.split("-")[1],g.split("-")[1]}else uni.showToast({title:p.error,icon:"none"}),this.loading=!1}},formReset:function(t){},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)}}};e.default=g},1920:function(t,e,i){"use strict";i.r(e);var a=i("3a2e"),n=i("1d63");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("eea8");var s,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"d7fb260c",null,!1,a["a"],s);e["default"]=c.exports},"1d63":function(t,e,i){"use strict";i.r(e);var a=i("0893"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"3a2e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniIcon:i("7344").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page detail-page detail-page-mx detail-page-ef-2"},[i("v-uni-view",{staticClass:"scroll-view-item detail-block"},[i("v-uni-view",{staticClass:"ef-imgs ef-imgs-center"},[i("img",{staticClass:"ef-img ef-img-logo",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/ef/p2-logo-icon.png",alt:""}})]),i("v-uni-view",{staticClass:"ef-imgs ef-imgs-center"},[i("img",{staticClass:"ef-img",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/ef/hg.jpg",alt:""}})]),i("v-uni-view",{staticClass:"ef-top-box"},[i("v-uni-view",{staticClass:"uni-card-box"},[i("v-uni-view",{staticClass:"uni-cards"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"uni-card-content-inner ApplyFormBox"},[i("v-uni-view",{staticClass:"ef-title"},[t._v("《每日e课》每刻进步")]),i("v-uni-view",{staticClass:"ef-title-s"},[t._v("学英语，就现在！")]),i("v-uni-form",{attrs:{id:"ApplyForm"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"form-box"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{class:t.model?"uni-input":"",attrs:{name:"UserName",placeholder:"姓名"}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[t.model?[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{name:"Age",value:t.age_index,range:t.age,placeholder:"年龄"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindChangeAge.apply(void 0,arguments)}}},[i("v-uni-view",{class:["uni-input",t.age_index<0?"age-select":""]},[t._v(t._s(t.age_index>=0?t.age[t.age_index]:"年龄"))])],1)],1),i("uni-icon",{attrs:{size:"20",type:"arrowdown",color:"#DDDDDF"}})]:[i("v-uni-input",{attrs:{name:"Age",placeholder:""}})]],2)],1),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{class:t.model?"uni-input":"",attrs:{name:"UserPhone",type:"number",placeholder:"电话"}})],1)],1)],1),t._e(),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[t.model?[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"City",disabled:!0,value:t.pickerText,placeholder:"城市"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMulLinkageTwoPicker.apply(void 0,arguments)}}})],1)]:[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{attrs:{name:"City",placeholder:"城市"}})],1)]],2)],1),i("v-uni-view",{staticClass:"uni-list apply-date"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("可约时间")]),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",name:"ApplyDate",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"apply-btn",attrs:{formType:"submit",loading:t.loading}},[t._v("立即订阅")]),i("v-uni-button",{staticClass:"hide",attrs:{type:"default",formType:"reset"}},[t._v("Reset")])],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"apply-btn go-top goTopEF GoTo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop.apply(void 0,arguments)}}},[t._v("立即订阅《每日e课》")]),i("v-uni-view",{staticClass:"ef-imgs ef-imgs-center"},[i("img",{staticClass:"ef-img",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s1-title.png",alt:""}}),i("swiper-block",{attrs:{swiperList:t.swiperList,swiperHeight:"1100upx",autoplay:!1,circular:!1}})],1),i("v-uni-view",{staticClass:"ef-imgs ef-imgs-center"},[i("img",{staticClass:"ef-img",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/s2-title.png",alt:""}}),i("swiper-block",{attrs:{swiperList:t.swiperList2,swiperHeight:"400upx",autoplay:!1,circular:!1}})],1),i("v-uni-view",{staticClass:"ef-imgs ef-imgs-center"},[i("img",{staticClass:"ef-img",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/p1.png",alt:""}}),i("img",{staticClass:"ef-img",attrs:{src:"https://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/p2.png",alt:""}}),i("v-uni-view",{staticStyle:{"padding-bottom":"80upx","background-color":"#000000"}},[i("copyright")],1)],1)],1),i("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:t.themeColor,mode:t.mode,deepLength:t.deepLength,pickerValueDefault:t.pickerValueDefault,pickerValueArray:t.pickerValueArray},on:{onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancel.apply(void 0,arguments)}}}),i("mpvue-city-picker",{ref:"mpvueCityPicker",attrs:{themeColor:t.themeColor,pickerValueDefault:t.cityPickerValueDefault},on:{onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancel.apply(void 0,arguments)},onConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}})],1)},o=[]},6007:function(t,e,i){var a=i("b085");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ae8d599e",a,!0,{sourceMap:!1,shadowMode:!1})},b085:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".goHomePage[data-v-d7fb260c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;top:%?20?%;right:%?20?%;z-index:5;background:hsla(0,0%,47.1%,.5);-webkit-border-radius:50%;border-radius:50%;width:%?60?%;height:%?60?%;line-height:2}.age-select[data-v-d7fb260c],\n.uni-input-placeholder[data-v-d7fb260c]{color:grey}.scroll-Y[data-v-d7fb260c]{height:%?1800?%}.makePhoneCall[data-v-d7fb260c]{position:absolute;top:%?30?%;right:%?40?%}.uni-list[data-v-d7fb260c]{margin-bottom:%?25?%;border:%?2?% solid #8c8c8c;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden}.form-box>.uni-list[data-v-d7fb260c]:last-child{margin-bottom:0}.form-box[data-v-d7fb260c]{border-bottom:0}.uni-list[data-v-d7fb260c]:before,\n.uni-list[data-v-d7fb260c]::after{background:none}.half-box[data-v-d7fb260c]:after{background:none}.radio-block[data-v-d7fb260c]{padding-left:%?20?%}.uni-input[data-v-d7fb260c]{background:#fff;padding:%?15?% %?20?%}.half[data-v-d7fb260c]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-list.half[data-v-d7fb260c]{margin-bottom:0}.apply-btn[data-v-d7fb260c]{width:100%;margin:%?20?% auto;color:#fff;background:#ff329b;text-align:center;line-height:2.4;-webkit-border-radius:%?10?%;border-radius:%?10?%;letter-spacing:%?3?%;font-size:%?32?%;padding:%?5?% 0}.go-top[data-v-d7fb260c]{background-color:#009eeb;display:none;width:86%;position:fixed;bottom:0;left:7%;z-index:2;font-size:%?32?%;line-height:2.4}.apply-date[data-v-d7fb260c]{display:none}.ef-title[data-v-d7fb260c]{font-size:%?50?%;color:#000;line-height:1.3;font-weight:600;padding-bottom:%?20?%}.ef-title-s[data-v-d7fb260c]{font-size:%?40?%;font-weight:600;padding:0 %?20?% %?20?%}.ef-title-sub[data-v-d7fb260c]{font-size:%?30?%;line-height:1.3;padding-bottom:%?40?%}.clr-red[data-v-d7fb260c]{color:#f40}.ef-imgs[data-v-d7fb260c]{width:95%;padding-bottom:%?30?%;line-height:0}.ef-imgs[data-v-d7fb260c]:last-child{padding-bottom:0}.ef-img[data-v-d7fb260c]{max-width:100%;display:block}.ef-img-logo[data-v-d7fb260c]{max-width:45%;margin:%?20?% %?20?% 0 %?20?%}.ef-imgs-right[data-v-d7fb260c]{margin-left:5%}.img-info[data-v-d7fb260c]{width:90%;border:%?10?% solid #f2f2f2;border-width:0 %?10?% %?10?% 0;padding:%?20?% 0;text-align:right}.img-right-bg[data-v-d7fb260c]{text-align:left;border-width:0 0 %?10?% %?10?%;margin-left:10%}.pro-txt[data-v-d7fb260c],\n.pro-desc[data-v-d7fb260c]{color:#231f20;font-size:%?44?%;line-height:1.4;padding:%?6?% %?40?%;letter-spacing:%?4?%}.pro-desc[data-v-d7fb260c]{font-size:%?24?%}.ef-imgs-center[data-v-d7fb260c]{width:100%;text-align:center}@media screen and (min-device-width:1025px){.uni-list[data-v-d7fb260c]{margin-bottom:5px}uni-input uni-input[data-v-d7fb260c]{height:25px;min-height:25px}.uni-input[data-v-d7fb260c]{height:25px}.uni-card-content-inner[data-v-d7fb260c]{padding:15px}.uni-input[data-v-d7fb260c]{padding:10px;line-height:1.4}.detail-page-mx[data-v-d7fb260c]{max-width:640px;margin:0 auto}.ef-title-s[data-v-d7fb260c]{font-size:18px}.ef-title-sub[data-v-d7fb260c]{font-size:16px;line-height:2;padding-bottom:15px}.ef-imgs[data-v-d7fb260c]{margin-bottom:10px;padding-bottom:10px}.ef-img[data-v-d7fb260c]{width:100%}.uni-picker-item[data-v-d7fb260c]{font-size:14px!important;line-height:1.4!important}.uni-btn-v[data-v-d7fb260c]{padding:5px 0}.apply-btn[data-v-d7fb260c]{margin:5px auto;font-size:16px;line-height:1.4}.go-top[data-v-d7fb260c]{font-size:16px;line-height:1.4}}",""]),t.exports=e},ddc8:function(t,e){t.exports={scrollTop:function(t,e){$("#"+t).click((function(){var t=$("#"+e).offset().top;$("html,body").animate({scrollTop:t},800)}))},sendMail:function(t,e,i){var a={};$.post({type:"POST",url:t,data:e,dataType:"json",success:function(t){a=t,fireCustomEvent("meetji_submit"),t.success},error:function(t){a=t},complete:function(){new i(a)}})}}},eea8:function(t,e,i){"use strict";var a=i("6007"),n=i.n(a);n.a}}]);