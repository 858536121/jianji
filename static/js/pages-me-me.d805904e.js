(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"04cf":function(t,a,e){t.exports=e.p+"static/img/zhuti.98195f38.png"},"0afe":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"drag",class:{transition:t.isDock&&!t.isMove},style:"left: "+t.left+"px; top:"+t.top+"px;",attrs:{id:"_drag_button"},on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.touchstart.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.touchmove.apply(void 0,arguments)},touchend:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.touchend.apply(void 0,arguments)},click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[e("v-uni-text",[t._v(t._s(t.textTitle))])],1)],1)},o=[]},"1bcd":function(t,a,e){"use strict";e.r(a);var i=e("3352"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2b70":function(t,a,e){var i=e("842f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0564eff0",i,!0,{sourceMap:!1,shadowMode:!1})},3352:function(t,a,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("9e34")),o={components:{dragButton:n.default},data:function(){return{CustomBar:null,spaceShow:!0,modalName:null,picName:"流星之夜",pic:[{link:"https://cdn.zhoukaiwen.com/zjx_me_bg1.jpeg",name:"春天"},{link:"https://cdn.zhoukaiwen.com/zjx_me_bg2.jpeg",name:"夏天"},{link:"https://cdn.zhoukaiwen.com/zjx_me_bg3.jpeg",name:"秋天"},{link:"https://cdn.zhoukaiwen.com/zjx_me_bg4.jpeg",name:"冬天"},{link:"https://cdn.zhoukaiwen.com/zjx_me_bg5.jpeg",name:"幽静"},{link:"https://cdn.zhoukaiwen.com/zjx_me_bg6.jpg",name:"天空"}],topBackGroupImageIndex:5,inter:[{title:"mimicry",name:"活力春天",color:""},{title:"theme",name:"清爽夏日",color:""},{title:"theme",name:"金秋之韵",color:""},{title:"theme",name:"冬日之阳",color:""},{title:"theme",name:"幽兰星空",color:""},{title:"theme",name:"流星之夜",color:""}]}},onShareAppMessage:function(t){return{title:"看看这个小程序多好玩～"}},watch:{topBackGroupImageIndex:function(a){t.log(a),this.spaceShow=4==a||5==a}},mounted:function(){},methods:{moYu:function(){uni.navigateTo({url:"moyu/moyu"})},logout:function(){uni.showModal({title:"提示",content:"你确定要退出登录吗？",cancelColor:"#898989",confirmColor:"#dd153a",success:function(t){t.confirm?(uni.clearStorageSync(),uni.redirectTo({url:"../login/login?backpage=../index/index&backtype=2"})):t.cancel}})},getGitee:function(){uni.setClipboardData({data:"https://gitee.com/kevin_chou",success:function(){t.log("success")}})},switchImage:function(t,a){this.topBackGroupImageIndex=t,this.modalName=null,this.picName=a},showModal:function(t){this.modalName=t.currentTarget.dataset.target},showGitee:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},mentalTest:function(){uni.navigateTo({url:"../me/mentalTest/list"})},goNetwork:function(){uni.navigateTo({url:"../me/network/network"})},callPhoneNumber:function(){uni.makePhoneCall({phoneNumber:"18629591093"})},goMedal:function(){uni.navigateTo({url:"../../tn_components/medal"})},goAboutMe:function(){uni.navigateTo({url:"../me/aboutMe"})},goSalary:function(){uni.navigateTo({url:"../me/salary"})},goCourse:function(){uni.navigateTo({url:"../me/timeline"})},checkPage:function(){uni.navigateTo({url:"clock"})}}};a.default=o}).call(this,e("5a52")["default"])},"3ae6":function(t,a,e){"use strict";e.r(a);var i=e("7fcc"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"4eeb":function(t,a,e){"use strict";e.r(a);var i=e("d19f"),n=e("1bcd");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("6183");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"bfc8c5b0",null,!1,i["a"],s);a["default"]=c.exports},6183:function(t,a,e){"use strict";var i=e("2b70"),n=e.n(i);n.a},"689f":function(t,a,e){var i=e("84a5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("49ca0c69",i,!0,{sourceMap:!1,shadowMode:!1})},7741:function(t,a,e){t.exports=e.p+"static/img/NyU04x.b18935fc.png"},7973:function(t,a,e){t.exports=e.p+"static/img/jisuanqi.27045f21.png"},"7fcc":function(t,a,e){"use strict";(function(t){e("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"drag-button",props:{isDock:{type:Boolean,default:!1},existTabBar:{type:Boolean,default:!1},textTitle:{type:String,default:"签到"},topProp:{type:String,default:"0"}},data:function(){return{top:0,left:0,width:0,height:0,offsetWidth:0,offsetHeight:0,windowWidth:0,windowHeight:0,isMove:!0,edge:10,text:""}},mounted:function(){var t=this;this.top=this.topProp;var a=uni.getSystemInfoSync();this.windowWidth=a.windowWidth,this.windowHeight=a.windowHeight,a.windowTop&&(this.windowHeight+=a.windowTop);var e=uni.createSelectorQuery().in(this);e.select("#_drag_button").boundingClientRect((function(a){t.width=a.width,t.height=a.height,t.offsetWidth=a.width/2,t.offsetHeight=a.height/2,t.left=t.windowWidth-t.width-t.edge,t.top=3*(t.windowHeight-t.height-t.edge)/4})).exec()},methods:{click:function(){t.log(1),this.$emit("btnClick")},touchstart:function(t){this.$emit("btnTouchstart")},touchmove:function(t){if(1!==t.touches.length)return!1;this.isMove=!0,this.left=t.touches[0].clientX-this.offsetWidth;var a=t.touches[0].clientY-this.offsetHeight;a+=this.height;var e=this.windowHeight-this.height-this.edge;a<this.edge?this.top=this.edge:this.top=a>e?e:a},touchend:function(t){if(this.isDock){var a=this.windowWidth-this.width-this.edge;this.left<this.windowWidth/2-this.offsetWidth?this.left=this.edge:this.left=a}this.isMove=!1,this.$emit("btnTouchend")}}};a.default=i}).call(this,e("5a52")["default"])},82946:function(t,a,e){t.exports=e.p+"static/img/lvhang.cb36ae54.png"},"842f":function(t,a,e){var i=e("24fb"),n=e("1de5"),o=e("7741");a=i(!1);var s=n(o);a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.UCenter-bg[data-v-bfc8c5b0]{background:#fff;background-size:100% 100%;\r\n  /* background-size: cover; */height:%?550?%;display:flex;justify-content:center;padding-top:%?40?%;overflow:hidden;position:relative;flex-direction:column;align-items:center;color:#fff;font-weight:300;text-shadow:0 0 3px rgba(0,0,0,.3)}.UCenter-bg uni-text[data-v-bfc8c5b0]{opacity:.8}.UCenter-bg uni-image[data-v-bfc8c5b0]{width:%?200?%;height:%?200?%}.UCenter-bg .gif-wave[data-v-bfc8c5b0]{position:absolute;width:100%;bottom:0;left:0;z-index:99;mix-blend-mode:screen;height:%?100?%}.cu-avatar2[data-v-bfc8c5b0]{font-variant:small-caps;margin:0;padding:0;display:inline-flex;text-align:center;justify-content:center;align-items:center;background:#ccc;color:#fff;white-space:nowrap;position:relative;width:%?150?%;height:%?150?%;background-size:cover;background-position:50%;vertical-align:middle;font-size:1.5em;z-index:99}.name[data-v-bfc8c5b0]{text-shadow:2px 2px 1px #2f9bfe}.dialog2[data-v-bfc8c5b0]{background:none}.saicode[data-v-bfc8c5b0]{background-size:100% 100%;-moz-background-size:100% 100%}.img-big uni-image[data-v-bfc8c5b0]{top:-40px;width:%?280?%;height:%?280?%}.shadow-me[data-v-bfc8c5b0]{box-shadow:%?0?% %?0?% %?100?% %?0?% rgba(0,0,0,.1)}.tn-footerfixed[data-v-bfc8c5b0]{position:fixed;width:100%;bottom:0;z-index:1024;box-shadow:0 %?1?% %?6?% rgba(0,0,0,.35)}.my_logo[data-v-bfc8c5b0]{background:none;padding:%?50?% 0 %?30?% 0}.my-radius[data-v-bfc8c5b0]{border-radius:%?12?%;overflow:hidden}.my-icon uni-image[data-v-bfc8c5b0]{width:%?100?%;height:%?100?%;display:inline-block;margin:0 auto}.my-iconcolor[data-v-bfc8c5b0]{background:hsla(0,0%,100%,.96)}.shadow-shop[data-v-bfc8c5b0]{box-shadow:%?0?% %?0?% %?90?% %?0?% rgba(0,0,0,.1)}.qrcode-img[data-v-bfc8c5b0]{position:fixed;width:%?80?%;height:%?80?%;bottom:%?350?%;right:%?30?%;z-index:1024;opacity:.8;box-shadow:%?0?% %?8?% %?30?% %?0?% rgba(0,0,0,.3);border:none}\r\n/* 数字背景 */.shadow-warp-my[data-v-bfc8c5b0]{position:relative;box-shadow:0 %?10?% %?10?% rgba(0,0,0,.1)}.shadow-warp-my[data-v-bfc8c5b0]:before,\r\n.shadow-warp-my[data-v-bfc8c5b0]:after{position:absolute;content:"";top:%?20?%;bottom:%?30?%;left:%?20?%;width:50%;box-shadow:0 %?30?% %?20?% rgba(0,0,0,.16);-webkit-transform:rotate(-6deg);transform:rotate(-6deg);z-index:-1}.shadow-warp-my[data-v-bfc8c5b0]:after{right:%?20?%;left:auto;-webkit-transform:rotate(6deg);transform:rotate(6deg)}.bg-product[data-v-bfc8c5b0]{background-image:linear-gradient(rgba(0,0,0,.06),transparent);color:#fff}.margin-bottom-my[data-v-bfc8c5b0]{margin-bottom:%?150?%}.giteeClass[data-v-bfc8c5b0]{margin-top:%?30?%;font-size:%?34?%;color:#2440b3;text-decoration:underline}.cu-dialog[data-v-bfc8c5b0]{background:#fff;overflow:visible}.modal_bg[data-v-bfc8c5b0]{width:100%;height:%?400?%;position:absolute;top:%?-100?%;background-image:url(https://zhoukaiwen.com/img/qdpz/modal_bg.png);background-size:100%;background-repeat:no-repeat}.modal_main[data-v-bfc8c5b0]{background-color:#fff}\r\n/* 主题色 */.bg-zt1[data-v-bfc8c5b0]{color:#fff;background:#81d949}.bg-zt2[data-v-bfc8c5b0]{color:#fff;background:#b2e6ff}.bg-zt3[data-v-bfc8c5b0]{color:#fff;background:#f3cd41}.bg-zt4[data-v-bfc8c5b0]{color:#fff;background:#ddecf7}.bg-zt5[data-v-bfc8c5b0]{color:#fff;background:#152e9d}.bg-zt6[data-v-bfc8c5b0]{color:#fff;background:#0f1358}.nav-list[data-v-bfc8c5b0]{display:flex;flex-wrap:wrap;padding:0 %?40?% 0;justify-content:space-between}.nav-li[data-v-bfc8c5b0]{padding:%?22?%;border-radius:%?12?%;width:45%;margin:0 2.5% %?40?%;background-image:url('+s+');background-size:cover;background-position:50%;position:relative;z-index:1}.nav-li[data-v-bfc8c5b0]::after{content:"";position:absolute;z-index:-1;background-color:inherit;width:100%;height:100%;left:0;bottom:-10%;border-radius:%?10?%;opacity:.2;-webkit-transform:scale(.9);transform:scale(.9)}.nav-li.cur[data-v-bfc8c5b0]{color:#fff;background:#5eb95e;box-shadow:%?4?% %?4?% %?6?% rgba(94,185,94,.4)}.nav-name[data-v-bfc8c5b0]{font-size:%?28?%;text-transform:Capitalize;position:relative}.nav-name[data-v-bfc8c5b0]::before{content:"";position:absolute;display:block;width:%?40?%;height:%?6?%;background:#fff;bottom:0;right:0;opacity:.5}.nav-name[data-v-bfc8c5b0]::after{content:"";position:absolute;display:block;width:%?100?%;height:1px;background:#fff;bottom:0;right:%?40?%;opacity:.3}.nav-name[data-v-bfc8c5b0]::first-letter{font-weight:700;font-size:%?36?%;margin-right:1px}.nav-li uni-text[data-v-bfc8c5b0]{position:absolute;right:%?30?%;top:%?30?%;font-size:%?52?%;width:%?60?%;height:%?60?%;text-align:center;line-height:%?60?%}.dong[data-v-bfc8c5b0]{z-index:9999;position:fixed;top:-40px;right:-80px;transform:scale(.24);-webkit-transform:scale(.24);-moz-transform:scale(.24)}.monster[data-v-bfc8c5b0]{transform:rotate(-50deg);-ms-transform:rotate(-50deg);\r\n  /* IE 9 */-moz-transform:rotate(-50deg);\r\n  /* Firefox */-webkit-transform:rotate(-50deg);\r\n  /* Safari 和 Chrome */-o-transform:rotate(-50deg);\r\n  /* Opera */display:flex;justify-content:center;position:relative;width:170px;height:400px;border-top-left-radius:200px;border-top-right-radius:200px;background-color:#3c47d7;box-shadow:20px 20px 60px #4650e5}.monster__face[data-v-bfc8c5b0]{display:flex;justify-content:center;align-items:center;flex-direction:column;position:absolute;top:14%;width:75%;height:160px}.monster__noses[data-v-bfc8c5b0]{top:50%;display:flex;justify-content:space-between;width:28%;height:auto;margin-bottom:10px}.monster__nose[data-v-bfc8c5b0]{width:8px;height:12px;border-radius:20px;background:rgba(0,0,0,.5);box-shadow:4px 8px 5px rgba(0,0,0,.1)}.monster__mouth[data-v-bfc8c5b0]{display:flex;justify-content:center;align-items:center;position:relative;width:100%;height:0%;overflow:hidden;border:25px solid #ffc333;border-radius:100px;background-color:#810332;-webkit-animation:mouth-data-v-bfc8c5b0 1.75s infinite;animation:mouth-data-v-bfc8c5b0 1.75s infinite;box-shadow:4px 8px 5px rgba(0,0,0,.2);box-sizing:border-box}.monster__mouth[data-v-bfc8c5b0]::before{content:"";position:absolute;width:150px;height:80px;border-radius:100px;background-color:#400018}.monster__mouth[data-v-bfc8c5b0]::after{content:"";position:absolute;bottom:-80px;width:160px;height:80px;border-top-left-radius:50%;border-top-right-radius:50%;background-color:#dc1b50;-webkit-animation:tongue-data-v-bfc8c5b0 1.75s infinite;animation:tongue-data-v-bfc8c5b0 1.75s infinite}.monster__top[data-v-bfc8c5b0]{position:absolute;top:-30px;width:170px;height:30px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background-color:#fff;z-index:100;-webkit-animation:t-data-v-bfc8c5b0 1.75s infinite;animation:t-data-v-bfc8c5b0 1.75s infinite}.monster__bottom[data-v-bfc8c5b0]{position:absolute;bottom:0;width:100px;height:30px;border-top-left-radius:10px;border-top-right-radius:10px;background-color:#fff;z-index:100;-webkit-animation:b-data-v-bfc8c5b0 1.75s infinite;animation:b-data-v-bfc8c5b0 1.75s infinite}.avatar-eye[data-v-bfc8c5b0]{position:absolute;top:-10%;width:65px;height:65px;background:linear-gradient(105deg,#fff,#cb87f4);border-radius:100%;box-shadow:4px 8px 5px rgba(0,0,0,.2);margin:3px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.avatar-eye--green[data-v-bfc8c5b0]{background:linear-gradient(180deg,#fdfdfd,#c3efea)}.avatar-eye--violet[data-v-bfc8c5b0]{background:linear-gradient(180deg,#fdfdfd,#e6d6f6)}.eye--left[data-v-bfc8c5b0]{left:10%}.eye--right[data-v-bfc8c5b0]{left:85%}.eye--center[data-v-bfc8c5b0]{left:45%;top:10%}.avatar-eye-pupil[data-v-bfc8c5b0]{position:absolute;width:55%;height:55%;left:50%;top:25%;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:100;border-radius:100%}.pupil--green[data-v-bfc8c5b0]{background:linear-gradient(135deg,rgba(188,248,177,.7),#2fa38c 75%)}.pupil--pink[data-v-bfc8c5b0]{background:linear-gradient(135deg,#f1a183,#8535cd)}.avatar-eye-pupil-blackThing[data-v-bfc8c5b0]{position:absolute;width:55%;height:55%;left:50%;top:25%;background:#2c2f32;-webkit-transform:translate(-50%);transform:translate(-50%);border-radius:100%;box-shadow:0 0 10px rgba(0,0,0,.2)}.avatar-eye-pupil-lightReflection[data-v-bfc8c5b0]{position:absolute;width:7px;height:7px;left:25%;top:10%;background:#ebebeb;-webkit-transform:translate(-50%);transform:translate(-50%);border-radius:100%;box-shadow:10px 10px 10px hsla(0,0%,100%,.2)}\r\n/**/@-webkit-keyframes t-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  80%,\r\n  100%{top:-30px}20%{top:0}30%{top:-20px}40%{top:0}50%{top:-25px}70%{top:0}}@keyframes t-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  80%,\r\n  100%{top:-30px}20%{top:0}30%{top:-20px}40%{top:0}50%{top:-25px}70%{top:0}}@-webkit-keyframes b-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  80%,\r\n  100%{bottom:-30px}20%{bottom:0}30%{bottom:-20px}40%{bottom:0}50%{bottom:-25px}70%{bottom:0}}@keyframes b-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  80%,\r\n  100%{bottom:-30px}20%{bottom:0}30%{bottom:-20px}40%{bottom:0}50%{bottom:-25px}70%{bottom:0}}@-webkit-keyframes mouth-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  100%{width:100%;height:0%}15%{width:90%;height:30%}20%{width:50%;height:70%}25%{width:70%;height:70%}30%{width:80%;height:60%}35%{width:60%;height:70%}40%{width:55%;height:75%}45%{width:50%;height:90%}50%{width:40%;height:70%}55%{width:70%;height:95%}60%{width:40%;height:50%}65%{width:100%;height:60%}70%{width:100%;height:70%}75%{width:90%;height:70%}80%{width:50%;height:70%}85%{width:90%;height:50%}85%{width:40%;height:70%}90%{width:90%;height:30%}95%{width:100%;height:10%}}@keyframes mouth-data-v-bfc8c5b0{0%,\r\n  10%,\r\n  100%{width:100%;height:0%}15%{width:90%;height:30%}20%{width:50%;height:70%}25%{width:70%;height:70%}30%{width:80%;height:60%}35%{width:60%;height:70%}40%{width:55%;height:75%}45%{width:50%;height:90%}50%{width:40%;height:70%}55%{width:70%;height:95%}60%{width:40%;height:50%}65%{width:100%;height:60%}70%{width:100%;height:70%}75%{width:90%;height:70%}80%{width:50%;height:70%}85%{width:90%;height:50%}85%{width:40%;height:70%}90%{width:90%;height:30%}95%{width:100%;height:10%}}@-webkit-keyframes tongue-data-v-bfc8c5b0{0%,\r\n  20%,\r\n  100%{bottom:-80px}30%,\r\n  90%{bottom:-40px}40%{bottom:-45px}50%{bottom:-50px}70%{bottom:-80px}90%{bottom:-40px}}@keyframes tongue-data-v-bfc8c5b0{0%,\r\n  20%,\r\n  100%{bottom:-80px}30%,\r\n  90%{bottom:-40px}40%{bottom:-45px}50%{bottom:-50px}70%{bottom:-80px}90%{bottom:-40px}}.space[data-v-bfc8c5b0]{position:absolute;top:0;left:0}.planet[data-v-bfc8c5b0]{width:%?150?%;height:%?150?%;border-radius:50%;background:#333;position:absolute;left:50%;top:50%;margin:%?-75?% 0 0 %?-75?%;overflow:hidden;z-index:2}.planet_shadow[data-v-bfc8c5b0]{position:absolute;border-radius:50%;height:100%;width:100%;top:-40%;right:-10%;border:%?35?% solid rgba(0,0,0,.15)}.star[data-v-bfc8c5b0]{display:block;width:%?5?%;height:%?5?%;border-radius:50%;background:#fff;top:%?100?%;left:%?400?%;position:relative;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-animation:star-ani-data-v-bfc8c5b0 6s infinite ease-out;animation:star-ani-data-v-bfc8c5b0 6s infinite ease-out;box-shadow:0 0 %?5?% %?5?% hsla(0,0%,100%,.3);opacity:0;z-index:2}.star[data-v-bfc8c5b0]:after{content:"";display:block;top:%?0?%;left:%?4?%;border:%?0?% solid #fff;border-width:%?0?% %?90?% %?2?% %?90?%;border-color:transparent transparent transparent hsla(0,0%,100%,.3);-webkit-transform:rotate(-45deg) translate3d(%?1?%,%?3?%,0);transform:rotate(-45deg) translate3d(%?1?%,%?3?%,0);box-shadow:0 0 %?1?% 0 hsla(0,0%,100%,.1);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-animation:shooting-ani 3s infinite ease-out;animation:shooting-ani 3s infinite ease-out}.pink[data-v-bfc8c5b0]{top:%?30?%;left:%?395?%;background:#ff5a99;animation-delay:5s;-webkit-animation-delay:5s;-moz-animation-delay:5s}.pink[data-v-bfc8c5b0]:after{border-color:transparent transparent transparent #ff5a99;animation-delay:5s;-webkit-animation-delay:5s;-moz-animation-delay:5s}.blue[data-v-bfc8c5b0]{top:%?35?%;left:%?432?%;background:#0ff;animation-delay:7s;-webkit-animation-delay:7s;-moz-animation-delay:7s}.blue[data-v-bfc8c5b0]:after{\r\n  /* border-color: transpareanimation-delay: 12s; */-webkit-animation-delay:7s;-moz-animation-delay:7s;animation-delay:7s}.yellow[data-v-bfc8c5b0]{top:%?50?%;left:%?600?%;background:#ffcd5c;-webkit-animation-delay:5.8s;animation-delay:5.8s}.yellow[data-v-bfc8c5b0]:after{border-color:transparent transparent transparent #ffcd5c;-webkit-animation-delay:5.8s;animation-delay:5.8s}@-webkit-keyframes star-ani-data-v-bfc8c5b0{0%{opacity:0;transform:scale(0) rotate(0) translateZ(0);-webkit-transform:scale(0) rotate(0) translateZ(0);-moz-transform:scale(0) rotate(0) translateZ(0)}50%{opacity:1;transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0);-webkit-transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0);-moz-transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0)}100%{opacity:0;transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0);-webkit-transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0);-moz-transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0)}}@keyframes star-ani-data-v-bfc8c5b0{0%{opacity:0;transform:scale(0) rotate(0) translateZ(0);-webkit-transform:scale(0) rotate(0) translateZ(0);-moz-transform:scale(0) rotate(0) translateZ(0)}50%{opacity:1;transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0);-webkit-transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0);-moz-transform:scale(1) rotate(0) translate3d(%?-200?%,%?200?%,0)}100%{opacity:0;transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0);-webkit-transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0);-moz-transform:scale(1) rotate(0) translate3d(%?-300?%,%?300?%,0)}}',""]),t.exports=a},"84a5":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.drag[data-v-22028f69]{display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.5);box-shadow:0 0 %?6?% rgba(0,0,0,.4);color:#fff;width:%?80?%;height:%?80?%;border-radius:50%;font-size:%?24?%;position:fixed;z-index:99}.drag.transition[data-v-22028f69]{transition:left .3s ease,top .3s ease}',""]),t.exports=a},"9e34":function(t,a,e){"use strict";e.r(a);var i=e("0afe"),n=e("3ae6");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("e3bb");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"22028f69",null,!1,i["a"],s);a["default"]=c.exports},cedd:function(t,a,e){t.exports=e.p+"static/img/youjian.a64c4bdd.png"},d19f:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uButton:e("b537").default,dragButton:e("9e34").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"components-theme"},[i("v-uni-navigator",{attrs:{target:"miniProgram","app-id":"wx307a52ca028d3c07",version:"release","hover-class":"none"}},[i("v-uni-view",{staticClass:"dong"},[i("v-uni-view",{staticClass:"monster"},[i("v-uni-view",{staticClass:"monster__face"},[i("v-uni-view",{staticClass:"monster__eye avatar-eye avatar-eye--green eye--left"},[i("v-uni-view",{staticClass:"avatar-eye-pupil pupil--green"},[i("span",{staticClass:"avatar-eye-pupil-blackThing"},[i("span",{staticClass:"avatar-eye-pupil-lightReflection"})])])],1),i("v-uni-view",{staticClass:"monster__eye avatar-eye avatar-eye--violet eye--right"},[i("v-uni-view",{staticClass:"avatar-eye-pupil pupil--pink"},[i("span",{staticClass:"avatar-eye-pupil-blackThing"},[i("span",{staticClass:"avatar-eye-pupil-lightReflection"})])])],1),i("v-uni-view",{staticClass:"monster__noses"},[i("v-uni-view",{staticClass:"monster__nose"}),i("v-uni-view",{staticClass:"monster__nose"})],1),i("v-uni-view",{staticClass:"monster__mouth"},[i("v-uni-view",{staticClass:"monster__top"}),i("v-uni-view",{staticClass:"monster__bottom"})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"Modal"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog",staticStyle:{padding:"300rpx 0 70rpx"}},[i("v-uni-view",{staticClass:"modal_bg"}),i("v-uni-view",{staticClass:"modal_main"},[i("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.inter,(function(a,e){return i("v-uni-view",{key:e,class:"nav-li bg-zt"+(e+1),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchImage(e,a.name)}}},[i("v-uni-view",{staticClass:"nav-name"},[t._v(t._s(a.name))])],1)})),1)],1)],1)],1),i("v-uni-view",{staticClass:"UCenter-bg",style:"background-image: url("+t.pic[t.topBackGroupImageIndex].link+");margin-top:"+t.CustomBar+"px;"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.spaceShow,expression:"spaceShow"}],staticClass:"space"},[i("v-uni-view",{staticClass:"stars "},[i("v-uni-view",{staticClass:"star "}),i("v-uni-view",{staticClass:"star pink "}),i("v-uni-view",{staticClass:"star blue "}),i("v-uni-view",{staticClass:"star yellow "})],1)],1),[i("v-uni-view",{staticClass:"text-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goMedal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar2 round xl margin-right-sm shadow-blur-lg bg-img open-data",staticStyle:{overflow:"hidden"}},[i("v-uni-image",{attrs:{src:"https://t8.baidu.com/it/u=784813603,3568975815&fm=70&app=69&f=JPEG?w=690&h=686&s=F0915B965D1B57EF547147E903004025"}})],1),i("v-uni-view",{staticClass:"padding text-blue text-xl text-bold"},[t._v("你好,Sure")])],1)],i("v-uni-image",{staticClass:"gif-wave",attrs:{src:"https://cdn.nlark.com/yuque/0/2019/gif/280373/1570670848649-assets/web-upload/3dbaa72a-062b-470f-9b9d-058ff8f85ab8.gif",mode:"scaleToFill"}})],2),[i("v-uni-view",{staticClass:"padding flex text-center text-grey bg-white shadow-warp-my"},[i("v-uni-view",{staticClass:"flex flex-sub flex-direction solid-right"},[i("v-uni-view",{staticClass:"text-xxl text-orange"},[t._v("8.5k+")]),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"cuIcon-hot"}),t._v("访客")],1)],1),i("v-uni-view",{staticClass:"flex flex-sub flex-direction solid-right"},[i("v-uni-view",{staticClass:"text-xxl text-blue"},[t._v("1.1k")]),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"cuIcon-share"}),t._v("分享")],1)],1),i("v-uni-view",{staticClass:"flex flex-sub flex-direction"},[i("v-uni-view",{staticClass:"text-xxl text-red"},[t._v("1.4k+")]),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"cuIcon-like"}),t._v("点赞")],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu card-menu margin-top-lg margin-bottom-sm shadow-shop bg-white text-black my-radius sm-border"},[i("v-uni-view",{staticClass:"cu-item",attrs:{"data-target":"Modal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"png",attrs:{src:e("04cf"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-lg margin-sm"},[t._v("主题切换")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"cu-capsule radius"},[i("v-uni-view",{staticClass:"cu-tag bg-gradual-blue"},[i("v-uni-view",{staticStyle:{clear:"both"}})],1),i("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v(t._s(t.picName))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item ",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goCourse.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"content cu-btn"},[i("v-uni-image",{staticClass:"png",attrs:{src:e("cedd"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-lg margin-sm"},[t._v("往记信息")])],1)],1),i("v-uni-view",{staticClass:"cu-item ",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goSalary.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"content cu-btn"},[i("v-uni-image",{staticClass:"png",attrs:{src:e("7973"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-lg margin-sm"},[t._v("打卡排行榜")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"cu-avatar-group"},[i("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"}})],1),i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v("Top 10")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu card-menu margin-top-lg margin-bottom-lg shadow-shop bg-white text-black my-radius sm-border"},[i("v-uni-view",{staticClass:"cu-item ",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.mentalTest.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"content cu-btn"},[i("v-uni-image",{staticClass:"png",attrs:{src:e("ef43"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-lg margin-sm"},[t._v("答题小测试")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("技术")]),i("v-uni-view",{staticClass:"cu-tag round bg-olive light"},[t._v("性格")]),i("v-uni-view",{staticClass:"cu-tag round bg-blue light"},[t._v("星座")])],1)],1),i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goNetwork.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"content cu-btn",attrs:{"open-type":"share"}},[i("v-uni-image",{staticClass:"png",attrs:{src:e("82946"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-lg margin-sm"},[t._v("网络链接测试")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list  card-menu   shadow-shop   my-radius "},[i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.logout.apply(void 0,arguments)}}},[i("u-button",{attrs:{type:"error",text:"退出"}})],1)],1)],i("v-uni-view",{staticClass:"cu-modal",class:"ModalGitee"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("Gitee访问")]),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl"},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:"https://zhoukaiwen.com/img/icon/qdpzGitee.png",mode:"widthFix"}}),i("p",{staticClass:"giteeClass",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getGitee.apply(void 0,arguments)}}},[t._v("https://gitee.com/kevin_chou")])],1)],1)],1),i("v-uni-view",{staticStyle:{height:"110rpx",width:"1rpx"}}),i("drag-button",{attrs:{topProp:"10",textTitle:"摸鱼",isDock:!0,existTabBar:!0},on:{btnClick:function(a){arguments[0]=a=t.$handleEvent(a),t.moYu.apply(void 0,arguments)}}}),i("drag-button",{attrs:{isDock:!0,existTabBar:!0},on:{btnClick:function(a){arguments[0]=a=t.$handleEvent(a),t.checkPage.apply(void 0,arguments)}}})],2)},o=[]},e3bb:function(t,a,e){"use strict";var i=e("689f"),n=e.n(i);n.a},ef43:function(t,a,e){t.exports=e.p+"static/img/bianqian.08f87e5a.png"}}]);