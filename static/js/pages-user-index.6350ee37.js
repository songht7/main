(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"086b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"center-page"},[i("v-uni-view",{staticClass:"vbox"},[i("v-uni-view",{staticClass:"c-top"},[i("v-uni-view",{staticClass:"c-top-main"},[i("v-uni-view",{staticClass:"uni-card"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"uni-card-content-inner"},[i("v-uni-view",{staticClass:"c-user-info"},[i("v-uni-view",{staticClass:"circle"},[e.userInfo.headimgur?i("v-uni-image",{staticClass:"head",attrs:{src:e.userInfo.headimgurl,mode:"widthFix"}}):i("uni-icon",{attrs:{size:"60",type:"contact",color:"#DDDDDF"}})],1),i("v-uni-view",{staticClass:"top-texts"},[i("v-uni-text",{staticClass:"top-txt name"},[e._v(e._s(e.userInfo.nickname?e.userInfo.nickname:"游客"))]),e.userInfo.phone?i("v-uni-view",{staticClass:"top-txt"},[i("v-uni-text",[e._v("手机 ")]),i("v-uni-text",[e._v(e._s(e.userInfo.phone))])],1):e._e()],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"center-main",staticStyle:{display:"none"}},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)},reset:function(t){t=e.$handleEvent(t),e.formReset(t)}}},[i("v-uni-view",{staticClass:"cell",class:e.isHide},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("用户名")])],1),i("v-uni-view",{staticClass:"cell-right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"Nickname",type:"text",placeholder:"您的称呼",value:e.userInfo.nickname,disabled:e.isDisabled}})],1)],1),i("v-uni-view",{staticClass:"cell",class:e.isHide},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("手机号")])],1),i("v-uni-view",{staticClass:"cell-right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"UserPhone",type:"number",placeholder:"",disabled:e.isDisabled}})],1)],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("生日")])],1),i("v-uni-view",{staticClass:"cell-right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"Birthday",type:"text",placeholder:"",disabled:e.isDisabled}})],1)],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("性别")])],1),i("v-uni-view",{staticClass:"cell-right"},[e.isDisabled?e._e():i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{name:"Gender",value:e.genderIndex,range:e.gender},on:{change:function(t){t=e.$handleEvent(t),e.bindPickerChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.gender[e.genderIndex]))])],1)],1),e.isDisabled?i("v-uni-view",{staticClass:"uni-list-cell-db"},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.gender[e.genderIndex])+"\n\t\t\t\t\t\t")]):e._e()],1)],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("邮箱")])],1),i("v-uni-view",{staticClass:"cell-right"},[i("v-uni-text",{staticClass:"cell-text-right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{name:"Email",type:"text",value:"",placeholder:"",disabled:e.isDisabled}})],1)],1)],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-text",{staticClass:"cell-text"},[e._v("联系我们")])],1),i("v-uni-view",{staticClass:"cell-right"},[i("v-uni-text",{staticClass:"cell-text-right"})],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-view",{staticClass:"toEdit",class:e.isHide?"":"isHide",on:{click:function(t){t=e.$handleEvent(t),e.toEdit(t)}}},[e._v("编辑")]),i("v-uni-button",{staticClass:"apply-btn",class:e.isHide,attrs:{formType:"submit",loading:e.loading}},[e._v("保存")])],1)],1)],1)],1)],1)},s=[],a=i("46a3"),r=i("91f8"),c=a["a"].module,l=a["a"].Interface,o=l.apiurl,d=i("5e86"),u={data:function(){return{userInfo:{},gender:["男","女"],genderIndex:0,loading:!1,isHide:"isHide",isDisabled:!0}},onLoad:function(){var e=this,t=function(t){e.userInfo=t,1==t.sex?e.genderIndex=0:e.genderIndex=1};c.getMyStorage("uWXInfo","",t)},components:{uniIcon:r["a"]},methods:{bindPickerChange:function(e){this.genderIndex=e.target.value},toEdit:function(){var e=this;e.isHide="",e.isDisabled=!1},formSubmit:function(e){var t=this;if(1!=this.loading){var i=e.detail.value;this.loading=!0;var n=[{name:"UserPhone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],s=d.check(i,n);if(s){var a={nickname:i.nickname,phone:i.UserPhone,birthday:i.Birthday,sex:0==i.Gender?"男":"女",email:i.Email};console.log(a),t.isHide="isHide",t.isDisabled=!0;var r=o+l.addr.saveSingle;console.log(r);t.userInfo.openid&&t.userInfo.openid}else uni.showToast({title:d.error,icon:"none"}),this.loading=!1}}}},v=u,f=(i("c64a"),i("2877")),p=Object(f["a"])(v,n,s,!1,null,"9cdd850c",null);p.options.__file="index.vue";t["default"]=p.exports},"0c62":function(e,t,i){var n=i("e9dd");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("10c15ebf",n,!0,{sourceMap:!1,shadowMode:!1})},"5e86":function(e,t){e.exports={error:"",check:function(e,t){for(var i=0;i<t.length;i++){if(!t[i].checkType)return!0;if(!t[i].name)return!0;if(!t[i].errorMsg)return!0;if(!e[t[i].name])return this.error=t[i].errorMsg,!1;switch(t[i].checkType){case"string":var n=new RegExp("^.{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[i].name]))return this.error=t[i].errorMsg,!1;var s=t[i].checkRule.split(",");if(s[0]=Number(s[0]),s[1]=Number(s[1]),e[t[i].name]>s[1]||e[t[i].name]<s[0])return this.error=t[i].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;s=t[i].checkRule.split(",");if(s[0]=Number(s[0]),s[1]=Number(s[1]),e[t[i].name]>s[1]||e[t[i].name]<s[0])return this.error=t[i].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;s=t[i].checkRule.split(",");if(s[0]=Number(s[0]),s[1]=Number(s[1]),e[t[i].name]>s[1]||e[t[i].name]<s[0])return this.error=t[i].errorMsg,!1;break;case"same":if(e[t[i].name]!=t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"notsame":if(e[t[i].name]==t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"reg":n=new RegExp(t[i].checkRule);if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"in":if(-1==t[i].checkRule.indexOf(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"notnull":if(null==e[t[i].name]||e[t[i].name].length<1)return this.error=t[i].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},6404:function(e,t,i){e.exports=i.p+"static/img/set-top-bg.ec36a79c.png"},"91f8":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},s=[],a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}},r=a,c=i("2877"),l=Object(c["a"])(r,n,s,!1,null,null,null);l.options.__file="uni-icon.vue";t["a"]=l.exports},b041:function(e,t){e.exports=function(e){return"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},c64a:function(e,t,i){"use strict";var n=i("0c62"),s=i.n(n);s.a},e9dd:function(e,t,i){var n=i("b041");t=e.exports=i("2350")(!1),t.push([e.i,"\n.c-top[data-v-9cdd850c]{background:url("+n(i("6404"))+") no-repeat 50% 0;background-size:100% 90%;width:100%\n}\n.c-top-main[data-v-9cdd850c]{width:90%;margin:0 auto;padding-top:%?160?%\n}\n.c-user-info[data-v-9cdd850c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center\n}\n.circle[data-v-9cdd850c]{width:%?120?%;height:%?120?%;border-radius:%?150?%;overflow:hidden\n}\n.head[data-v-9cdd850c]{width:100%;height:100%;border-radius:%?150?%\n}\n.top-texts[data-v-9cdd850c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?30?%\n}\n.top-txt[data-v-9cdd850c]{font-size:%?34?%\n}\n.center-main[data-v-9cdd850c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:80%;margin:0 auto\n}\n.cell[data-v-9cdd850c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;border-bottom:1px solid #d3d3d3;height:%?80?%;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?20?% 0 0\n}\n.isHide[data-v-9cdd850c]{display:none\n}\n.cell-left[data-v-9cdd850c]{width:40%;padding-left:%?5?%\n}\n.cell-right[data-v-9cdd850c]{width:60%;color:#a7a7a7;text-align:right;padding-right:%?5?%;line-height:2\n}\n.cell-text[data-v-9cdd850c]{color:#5c5c5c;font-size:%?32?%\n}\n.cell-text-right[data-v-9cdd850c]{color:#a7a7a7;font-size:%?32?%\n}\n.uni-input[data-v-9cdd850c]{background:rgba(0,0,0,0)\n}\n.uni-btn-v[data-v-9cdd850c]{padding:%?40?% 0 %?10?%\n}\n.apply-btn[data-v-9cdd850c],.toEdit[data-v-9cdd850c]{width:100%;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#f9d744),to(#fca526));background:-o-linear-gradient(left,#f9d744,#fca526);background:linear-gradient(90deg,#f9d744,#fca526);-webkit-box-shadow:3px 5px 10px -1px rgba(249,215,68,.8);box-shadow:3px 5px 10px -1px rgba(249,215,68,.8);text-align:center;line-height:2;border-radius:%?10?%;font-size:%?30?%;letter-spacing:2px;padding:%?15?% 0;border-color:none\n}\n.toEdit[data-v-9cdd850c]{background:#ccc;-webkit-box-shadow:none;box-shadow:none\n}",""])}}]);