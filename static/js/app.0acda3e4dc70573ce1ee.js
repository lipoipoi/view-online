webpackJsonp([0],[,,function(t,a,e){e(65);var n=e(1)(e(40),e(88),null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={setTimer:function(t){var a=(new Date).getTime(),e=new Date(t).getTime();return a-e>31536e6?Math.floor((a-e)/31536e6)+" 年前":a-e>2592e6?Math.floor((a-e)/2592e6)+" 个月前":a-e>864e5?Math.floor((a-e)/864e5)+" 天前":a-e>36e5?Math.floor((a-e)/36e5)+" 小时前":a-e>6e4?Math.ceil((a-e)/6e4)+" 分钟前":" 刚刚"},getAllName:function(t){switch(t){case"good":return"精华";case"ask":return"问答";case"share":return"分享";case"job":return"招聘";default:return""}}}},,,function(t,a,e){e(60);var n=e(1)(e(37),e(83),null,null);t.exports=n.exports},,,,,,,,,function(t,a,e){"use strict";var n=e(4),s=e(89),r=e(76),i=e.n(r);n.a.use(s.a),a.a=new s.a({routes:[{path:"/",name:"Main",component:i.a},{path:"/Detail",component:e(74)},{path:"/login",component:e(75)},{path:"/Author",component:e(72)},{path:"/Collections",component:e(73)}]})},function(t,a,e){"use strict";var n=e(4),s=e(12),r=e(48),i=e(49);n.a.use(s.default);var o={user:{isLogin:"",userInfo:{accessToken:"",avatar_url:"",id:"",loginname:""}}},l={CHANGE_USERINFO:function(t,a){console.log(t,a)}};new s.default.Store({state:o,mutations:l,actions:r.a,getters:i.a})},function(t,a,e){e(61);var n=e(1)(e(35),e(84),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(71),s=e.n(n),r=e(68),i=e.n(r),o=e(53);e.n(o);a.default={components:{Top:s.a,Foot:i.a}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{}},methods:{}}},function(t,a,e){var n=e(3);t.exports={data:function(){return{}},props:["list"],methods:{setTimer:function(t){return n.default.setTimer(t)},getAllName:function(t){return n.default.getAllName(t)}}}},function(t,a){t.exports={data:function(){return{pageIndex:"",pageArr:[1,2,3,4,5],allPage:""}},props:["pageVal"],methods:{firstPage:function(){this.pageArr=this.pageArr.map(function(t,a){return a+1}),this.pageVal.current=1,this.$emit("getIndex",this.pageVal)},lastPage:function(){var t=this;this.pageArr=this.pageArr.map(function(a,e){return t.pageVal.allPage-(t.pageArr.length-e-1)}),this.pageVal.current=this.pageVal.allPage,this.$emit("getIndex",this.pageVal)},goto:function(t){var a=this;this.pageVal.current=t;var e=Math.floor(this.pageArr.length/2);t>this.pageArr[e]?this.pageVal.allPage-t>=3?this.pageArr=this.pageArr.map(function(a,n){return n<=e?t-(e-n):t+(n-e)}):this.pageVal.allPage-t<=2&&this.pageVal.allPage-t>=0&&(this.pageArr=this.pageArr.map(function(t,e){return a.pageVal.allPage,a.pageVal.allPage-(a.pageArr.length-e-1)})):t>=3?this.pageArr=this.pageArr.map(function(a,n){return n<=e?t-(e-n):t+(n-e)}):2==t&&(this.pageArr=this.pageArr.map(function(a,n){return n<=e?t-(e-n-1):t+(n-e+1)})),this.$emit("getIndex",this.pageVal)}}}},function(t,a,e){var n=e(3);t.exports={data:function(){return{}},methods:{setTimer:function(t){return n.default.setTimer(t)}},props:["replyData","replyCount"],created:function(){}}},function(t,a){t.exports={data:function(){return{}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{navList:[{name:"首页",link:"/"},{name:"登录",link:"/login"}]}},methods:{}}},function(t,a,e){var n=e(3);t.exports={data:function(){return{author:"",collect:""}},methods:{setTimer:function(t){return n.default.setTimer(t)}},mounted:function(){var t=this,a=this;this.$http({url:"https://cnodejs.org/api/v1/user/"+this.$route.query.author,method:"get"}).then(function(e){return a.author=e.data.data,a.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+t.$route.query.author,method:"get"})}).then(function(t){return a.collect=t.data.data}).catch(function(t){return console.log(t)})},components:{SlideBar:e(2),List:e(6)}}},function(t,a,e){t.exports={data:function(){return{collections:"",author:this.$route.query.loginname}},mounted:function(){var t=this;this.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.$route.query.loginname,method:"get"}).then(function(a){return t.collections=a.data.data}).catch(function(t){return console.log(t)})},components:{SlideBar:e(2),List:e(6)}}},function(t,a,e){var n=e(3);t.exports={data:function(){return{replyData:""}},methods:{setTimer:function(t){return n.default.setTimer(t)},getAllName:function(t){return n.default.getAllName(t)}},created:function(){var t=this;this.$http({url:"https://cnodejs.org/api/v1/topic/"+this.$route.query.id,method:"get",params:{mdrender:!0}}).then(function(a){return t.replyData=a.data.data}).catch(function(t){return console.log(t)})},components:{SlideBar:e(2),Reply:e(70)}}},function(t,a,e){e(12);t.exports={data:function(){return{token:""}},methods:{goLogin:function(){this.$http({method:"POST",url:"https://cnodejs.org/api/v1/accesstoken",params:{accesstoken:this.token}}).then(function(t){t.statusText&&console.log(t)}).catch(function(t){return console.log(t)})}},components:{SlideBar:e(2)}}},function(t,a,e){t.exports={data:function(){return{type:[{name:"全部",tab:""},{name:"精华",tab:"good"},{name:"分享",tab:"share"},{name:"问答",tab:"ask"},{name:"招聘",tab:"job"}],defaultActive:0,list:[],pageVal:{current:1,allPage:400}}},vuex:{},methods:{changeActive:function(t,a,e){e=e||1;var n=this;n.defaultActive=t,n.$http({method:"get",url:"https://cnodejs.org/api/v1/topics",params:{page:e,tab:a,limit:40,mdrender:"false"}}).then(function(t){n.list=t.data.data}).catch(function(t){return console.log(t)}),this.$refs.pageControl.firstPage()},getPageIndex:function(t){var a=this;a.$http({method:"get",url:"https://cnodejs.org/api/v1/topics",params:{page:t.current,tab:this.type[a.defaultActive].tab,limit:40,mdrender:"false"}}).then(function(t){a.list=t.data.data}).catch(function(t){return console.log(t)})}},created:function(){var t=this;t.$http({method:"get",url:"https://cnodejs.org/api/v1/topics",params:{page:1,tab:"",limit:40,mdrender:"false"}}).then(function(a){t.list=a.data.data}).catch(function(t){return console.log(t)})},components:{Pages:e(69),SlideBar:e(2),List:e(6)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(4),s=e(17),r=e.n(s),i=e(15),o=e(14),l=e.n(o);e(16);n.a.config.productionTip=!1,n.a.prototype.$http=l.a,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},function(t,a,e){"use strict";a.a={goLogin:function(t){(0,t.commit)(CHANGE_USERINFO)}}},function(t,a,e){"use strict";a.a={token:function(t){return t.token}}},,,,function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},,,function(t,a,e){e(57);var n=e(1)(e(36),e(80),null,null);t.exports=n.exports},function(t,a,e){e(59);var n=e(1)(e(38),e(82),null,null);t.exports=n.exports},function(t,a,e){e(64);var n=e(1)(e(39),e(87),null,null);t.exports=n.exports},function(t,a,e){e(62);var n=e(1)(e(41),e(85),null,null);t.exports=n.exports},function(t,a,e){e(56);var n=e(1)(e(42),e(79),null,null);t.exports=n.exports},function(t,a,e){e(54);var n=e(1)(e(43),e(77),null,null);t.exports=n.exports},function(t,a,e){e(58);var n=e(1)(e(44),e(81),null,null);t.exports=n.exports},function(t,a,e){e(55);var n=e(1)(e(45),e(78),null,null);t.exports=n.exports},function(t,a,e){e(63);var n=e(1)(e(46),e(86),"data-v-7f25d359",null);t.exports=n.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"container_inner"},[e("SlideBar"),t._v(" "),e("div",{staticClass:"author_container"},[e("div",{staticClass:"penal"},[e("div",{staticClass:"bread_head"},[e("a",{attrs:{href:"/"}},[t._v("主页")]),t._v(" / "+t._s(t.author)+"  收藏的话题")]),t._v(" "),e("List",{attrs:{list:t.collections}})],1)])],1)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"container_inner"},[e("SlideBar"),t._v(" "),e("div",{staticClass:"login_container"},[e("div",{staticClass:"penal"},[t._m(0),t._v(" "),e("div",{staticClass:"login_form"},[e("p",{staticClass:"loginList"},[e("span",{staticClass:"tokenControl"},[t._v("请输入accessToken登录")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],staticClass:"token",attrs:{type:"text"},domProps:{value:t.token},on:{input:function(a){a.target.composing||(t.token=a.target.value)}}})]),t._v(" "),e("p",{staticClass:"loginList"},[e("span",{staticClass:"tokenControl"}),e("a",{staticClass:"loginBtn",attrs:{href:"javascript:void(0)"},on:{click:function(a){t.goLogin()}}},[t._v("登录")])])])])])],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bread_head"},[e("a",{attrs:{href:"/"}},[t._v("主页")]),t._v(" / 登录")])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"container_inner"},[e("SlideBar"),t._v(" "),e("div",{staticClass:"author_container"},[e("div",{staticClass:"penal"},[t._m(0),t._v(" "),e("div",{staticClass:"userInfo"},[e("div",{staticClass:"user_big_avatar"},[e("img",{attrs:{src:t.author.avatar_url,alt:t.author.loginname}}),e("span",[t._v(t._s(t.author.loginname))])]),t._v(" "),e("div",{staticClass:"user_profile"},[e("p",{staticClass:"score"},[t._v(t._s(t.author.score)+" 积分")]),t._v(" "),e("p",[e("router-link",{staticClass:"otherInfo",attrs:{to:{path:"Collections",query:{loginname:t.author.loginname}}}},[t._v(t._s(t.collect?t.collect.length:"")+"个话题收藏")])],1),t._v(" "),e("p",{staticClass:"otherInfo"},[t._v("注册时间 "+t._s(t.setTimer(t.author.create_at)))])])])]),t._v(" "),e("div",{staticClass:"penal"},[e("div",{staticClass:"bread_head"},[t._v("最近创建的话题")]),t._v(" "),e("List",{attrs:{list:t.author.recent_topics}})],1),t._v(" "),e("div",{staticClass:"penal"},[e("div",{staticClass:"bread_head"},[t._v("最近参与的话题")]),t._v(" "),e("List",{attrs:{list:t.author.recent_replies}})],1)])],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bread_head"},[e("a",{attrs:{href:"/"}},[t._v("主页")]),t._v(" / 题主个人信息")])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footMain"},[e("div",{staticClass:"footer_inner"},[e("p",[t._v("CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),t._v(" "),e("p",[t._v("服务器赞助商为  ucloud ，存储赞助商为  七牛云存储 ，由  alinode 提供应用性能服务。")]),t._v(" "),e("p",[t._v("新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean("),e("a",{attrs:{href:"/"}},[t._v("https://www.digitalocean.com/")]),t._v(")")])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"container_inner"},[e("SlideBar"),t._v(" "),e("div",{staticClass:"containerList"},[e("div",{staticClass:"detailContainer"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"topic_header"},[e("span",{staticClass:"topic_full_title"},[t.replyData.top?e("span",{staticClass:"put_top"},[t._v("置顶")]):e("span",[t.replyData.good?e("span",{staticClass:"put_top"},[t._v("精华")]):t._e()]),t._v("\n                              "+t._s(t.replyData.title)+"\n                          ")]),t._v(" "),e("div",{staticClass:"topic_tab"},[e("span",[t._v("发布于 "+t._s(t.setTimer(t.replyData.create_at)))]),t._v(" "),e("span",[t._v("作者 "+t._s(t.replyData.author?t.replyData.author.loginname:""))]),t._v(" "),e("span",[t._v(t._s(t.replyData.visit_count)+" 次浏览")]),t._v(" "),e("span",[t._v("最后一次编辑是 "+t._s(t.setTimer(t.replyData.last_reply_at)))]),t._v(" "),e("span",[t._v("来自 "+t._s(t.getAllName(t.replyData.tab)))])])]),t._v(" "),e("div",{staticClass:"innerTopic"},[e("div",{staticClass:"topic_content"},[e("div",{domProps:{innerHTML:t._s(t.replyData.content)}})])])]),t._v(" "),e("Reply",{attrs:{replyCount:t.replyData.reply_count,replyData:t.replyData.replies}})],1)])],1)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagination"},[e("ul",{staticClass:"paginationList"},[e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){t.firstPage()}}},[t._v("«")])]),t._v(" "),t.pageVal.current>3?e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("...")])]):t._e(),t._v(" "),t._l(t.pageArr,function(a,n){return e("li",[e("a",{class:a==t.pageVal.current?"pageAcitve":"",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.goto(a)}}},[t._v(t._s(a))])])}),t._v(" "),t.pageVal.allPage-t.pageVal.current>=3?e("li",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("...")])]):t._e(),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){t.lastPage()}}},[t._v("»")])])],2)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.list,function(a,n){return e("div",{staticClass:"listInner"},[e("div",{staticClass:"cell"},[e("router-link",{attrs:{to:{path:"Author",query:{author:a.author.loginname}}}},[e("img",{staticClass:"lellansin",attrs:{src:a.author.avatar_url,alt:"",title:a.author.loginname}})]),t._v(" "),e("span",{staticClass:"reply_count"},[e("span",{staticClass:"countOfReplies"},[t._v(t._s(a.reply_count?a.reply_count:0))]),t._v("/"),e("span",{staticClass:"countOfvisits"},[t._v(t._s(a.visit_count?a.visit_count:0))])]),t._v(" "),a.top?e("span",{staticClass:"replay_top"},[t._v("置顶")]):e("span",[a.tab?e("span",{class:a.good?"replay_top":"replay_type"},[t._v(t._s(a.good?"精华":t.getAllName(a.tab)))]):t._e()]),t._v(" "),e("router-link",{staticClass:"replay_title",attrs:{to:{path:"Detail",query:{id:a.id}}}},[t._v(t._s(a.title))]),t._v(" "),e("a",{staticClass:"lastTime",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.setTimer(a.last_reply_at)))])],1)])}))},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Top"),t._v(" "),e("router-view"),t._v(" "),e("Foot")],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navBar"},[e("div",{staticClass:"navBarInner"},[e("div",{staticClass:"navContainer"},[t._m(0),t._v(" "),e("input",{staticClass:"search",attrs:{type:"text",name:"q",value:""}}),t._v(" "),e("ul",{staticClass:"pullList"},t._l(t.navList,function(a){return e("li",[e("router-link",{attrs:{to:a.link}},[t._v(t._s(a.name))])],1)}))])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"logo",attrs:{href:"/"}},[e("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/cnodejs_light.svg",alt:""}})])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"container_inner"},[e("SlideBar"),t._v(" "),e("div",{staticClass:"containerList"},[e("div",{staticClass:"listHeader"},t._l(t.type,function(a,n){return e("a",{staticClass:"typeBtn",class:n==t.defaultActive?"activeTypeBtn":"",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.changeActive(n,a.tab)}}},[t._v(t._s(a.name))])})),t._v(" "),e("List",{attrs:{list:t.list}}),t._v(" "),e("Pages",{ref:"pageControl",attrs:{pageVal:t.pageVal},on:{getIndex:t.getPageIndex}})],1)],1)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"penal"},[e("div",{staticClass:"header"},[e("span",{staticClass:"col_fade"},[t._v(t._s(t.replyData?t.replyData.length:"")+" 回复")]),t._v(" "),t._l(t.replyData,function(a,n){return e("div",{staticClass:"reply_cell",class:n<=2?"reply_highlight":""},[e("div",{staticClass:"author_detail"},[e("router-link",{staticClass:"user_avatar",attrs:{to:{path:"Author",query:{author:a.author.loginname}}}},[e("img",{attrs:{src:a.author.avatar_url,title:"ngot"}})]),t._v(" "),e("div",{staticClass:"user_info"},[e("router-link",{staticClass:"dark reply_author",attrs:{to:{path:"Author",query:{author:a.author.loginname}}}},[t._v(t._s(a.author.loginname))]),t._v(" "),e("a",{staticClass:"reply_time",attrs:{href:"#58d0fc1a17f61387400b7e16"}},[t._v(t._s(n+1)+"楼 • "+t._s(t.setTimer(a.create_at)))])],1),t._v(" "),e("div",{staticClass:"user_action"},[e("i",{staticClass:"fa up_btn fa-thumbs-o-up"}),e("span",{staticClass:"up-count"},[t._v(t._s(a.ups?a.ups.length:""))])])],1),t._v(" "),e("div",{staticClass:"reply_detail"},[e("div",{domProps:{innerHTML:t._s(a.content)}})])])})],2)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"slideBar"},[e("div",{staticClass:"panel"},[e("p",[t._v("CNode：Node.js专业中文社区")]),t._v(" "),e("div",[t._v("\n               您可以\n                 "),e("a",{attrs:{href:"/signin"}},[t._v("登录")]),t._v("\n               或\n                 "),e("a",{attrs:{href:"/signup"}},[t._v("注册")]),t._v("\n               , 也可以\n                 "),e("a",{attrs:{href:"/auth/github"}},[e("span",{staticClass:"span-info"},[t._v("\n                   通过 GitHub 登录\n                 ")])])])]),t._v(" "),e("div",{staticClass:"panel ads"},[e("a",{staticClass:"banner sponsor_outlink",attrs:{href:"http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc&utm_campaign=multicloud&utm_content=gift&ytag=cnodejs",target:"_blank","data-label":"ucloud-banner"}},[e("img",{attrs:{src:"//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG"}})]),t._v(" "),e("div",{staticClass:"sep10"}),t._v(" "),e("a",{staticClass:"banner sponsor_outlink",attrs:{href:"https://0x6.me/CnodeAD",target:"_blank","data-label":"huoqiu"}},[e("img",{attrs:{src:"//dn-cnode.qbox.me/Fh-dDBC360-fT8gaefK0p_hmx_zv"}})]),t._v(" "),e("div",{staticClass:"sep10"}),t._v(" "),e("a",{staticClass:"banner sponsor_outlink",attrs:{href:"https://alinode.aliyun.com/?ref=cnode",target:"_blank","data-label":"alinode"}},[e("img",{attrs:{src:"//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"}})])]),t._v(" "),e("div",{staticClass:"panel friendship"},[e("div",{staticClass:"panel_header"},[e("span",{staticClass:"col_fade"},[t._v("友情社区")])]),t._v(" "),e("ol",{staticClass:"friendship-community"},[e("li",[e("a",{attrs:{href:"https://ruby-china.org/",target:"_blank"}},[e("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png"}})])]),t._v(" "),e("div",{staticClass:"sep10"}),t._v(" "),e("li",[e("a",{attrs:{href:"http://golangtc.com/",target:"_blank"}},[e("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/golangtc-logo.png"}})])]),t._v(" "),e("div",{staticClass:"sep10"}),t._v(" "),e("li",[e("a",{attrs:{href:"http://phphub.org/",target:"_blank"}},[e("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/phphub-logo.png"}})])]),t._v(" "),e("div",{staticClass:"sep10"}),t._v(" "),e("li",[e("a",{attrs:{href:"https://testerhome.com/",target:"_blank"}},[e("img",{attrs:{src:"//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"}})])])])])])}]}}],[47]);
//# sourceMappingURL=app.0acda3e4dc70573ce1ee.js.map