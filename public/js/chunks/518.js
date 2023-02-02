"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[518],{8052:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(1519),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,".border-bot[data-v-16f447b2]{border-bottom:1px solid #bdbdbd}.bar .bar-left[data-v-16f447b2]{padding:2px 5px;padding-right:0!important;width:25%}.bar .bar-right[data-v-16f447b2]{border-left:1px solid #bdbdbd;padding:2px 5px}.bar-right .bar-block[data-v-16f447b2]{height:40px;margin:5px 0}.bar-right .bar-block .block-content[data-v-16f447b2]{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:grow-16f447b2;animation-name:grow-16f447b2;height:100%}@-webkit-keyframes grow-16f447b2{0%{width:0}to{width:100%}}@keyframes grow-16f447b2{0%{width:0}to{width:100%}}.bg[data-v-16f447b2]{background:#f08080}",""]);const n=i},909:(t,e,a)=>{a.d(e,{Z:()=>r});const s={data:function(){return{loading:!0}},props:{elect:{type:Object,default:function(){}}},methods:{pickColor:function(){return"#"+(16777215*Math.random()<<0).toString(16)},computeWidth:function(t){return t/this.elect.voters_count*90}},watch:{elect:{handler:function(t){var e=this;t&&setTimeout((function(){e.loading=!1}),1e3)}}}};var i=a(3379),n=a.n(i),o=a(8052),c={insert:"head",singleton:!1};n()(o.Z,c);o.Z.locals;const r=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return t.loading?e("div",{staticClass:"d-flex align-center justify-center",staticStyle:{"min-height":"80vh"}},[e("div",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}}),t._v(" "),e("div",{staticClass:"mt-5"},[t._v("\n            Loading Information ...\n        ")])],1)]):e("div",t._l(t.elect.positions,(function(a){return e("div",{key:a.id,staticClass:"cb w-100 mb-4"},[e("div",{staticClass:"cb-title text-center"},[e("v-toolbar-title",[t._v(t._s(a.name))])],1),t._v(" "),t._l(a.candidate,(function(s,i){return e("div",{key:s.id,staticClass:"d-flex align-center bar"},[e("div",{staticClass:"bar-left justify-end d-flex align-center text-right"},[e("span",[t._v(t._s(s.name))]),t._v(" "),e("v-avatar",[e("v-icon",[t._v("mdi-account-circle")])],1)],1),t._v(" "),e("div",{staticClass:"bar-right w-100 d-flex align-center",class:i==a.candidate.length-1?"border-bot":""},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("div",t._g(t._b({staticClass:"bar-block",style:"width:"+t.computeWidth(s.vote_count)+"%"},"div",n,!1),i),[e("div",{staticClass:"block-content bg",style:"background:"+t.pickColor()+";"})])]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(s.name+" - "+s.vote_count)+" votes")])]),t._v(" "),e("div",{staticClass:"ml-2"},[t._v(t._s(s.vote_count)+" votes")])],1)])}))],2)})),0)}),[],!1,null,"16f447b2",null).exports},518:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const s={components:{CustomBar:a(909).Z},data:function(){return{selectedId:"",elects:[],votes:[],elect:{},stats:[{name:"Announcements",color:"red",icon:"mdi-bullhorn-outline",data:"0"},{name:"Elections",color:"brown",icon:"mdi-printer-outline",data:"0"},{name:"Voters",color:"secondary",icon:"mdi-account-group-outline",data:"0"},{name:"Party Groups",color:"success",icon:"mdi-flag-outline",data:"0"}]}},created:function(){this.getElectionList(),this.getStat()},methods:{getElectionList:function(){var t=this;axios.get("/admin-api/election?per_page=-1").then((function(e){var a=e.data;if(t.elects=a.data,a.data.length>0){var s=t.elects[t.elects.length-1];console.log(s),t.selectedId=s.id,t.getElection()}}))},getElection:function(){var t=this,e=this.selectedId;axios.get("/admin-api/election/".concat(e,"/result")).then((function(e){var a=e.data;t.elect=a.election,t.votes=a.votes}))},getStat:function(){var t=this;axios.get("/admin-api/status").then((function(e){var a=e.data;t.stats[0].data=a.announcements,t.stats[1].data=a.elections,t.stats[2].data=a.voters,t.stats[3].data=a.partygroups}))},pickColor:function(){return"#"+(16777215*Math.random()<<0).toString(16)}}};const i=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-4",attrs:{elevation:"2"}},[e("v-row",{staticClass:"py-3",attrs:{wrap:""}},t._l(t.stats,(function(a){return e("v-col",{key:a.name,attrs:{md:"3",cols:"12"}},[e("v-card",{staticClass:"rounded-lg pa-3 text-center",attrs:{elevation:"0",dark:"",color:a.color}},[e("div",{staticClass:"d-flex justify-center align-center"},[e("v-icon",{attrs:{"x-large":""}},[t._v(t._s(a.icon))]),t._v(" "),e("span",{staticClass:"text-h3 ml-2"},[t._v(t._s(a.data))])],1),t._v(" "),e("div",[t._v(t._s(a.name))])])],1)})),1),t._v(" "),e("v-divider"),t._v(" "),t.elects.length>0?e("div",[e("v-card",{attrs:{elevation:"0"}},[e("v-row",[e("v-col",{staticClass:"pb-0",attrs:{cols:"5"}},[e("v-select",{attrs:{outlined:"",dense:"",items:t.elects,"item-value":"id","item-text":"name","hide-details":"",placeholder:"Select Election"},on:{change:t.getElection},model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}})],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{md:"8",cols:"12"}},[e("v-card",{attrs:{outlined:""}},[e("v-card-title",{staticClass:"mb-0 pb-0"},[t._v("Status")]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"pt-0"},[e("custom-bar",{attrs:{elect:t.elect}})],1)],1)],1),t._v(" "),e("v-col",{attrs:{md:"4",cols:"12"}},[e("v-card",{attrs:{outlined:""}},[e("v-card-title",{staticClass:"mb-0 pb-0"},[t._v("Voted")]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"pt-0"},[t.votes.length>0?e("v-timeline",{attrs:{"align-top":""}},t._l(t.votes,(function(a){return e("v-timeline-item",{key:a.id,staticClass:"pb-0",attrs:{color:t.pickColor(),small:""}},[e("span",{staticClass:"pt-1"},[t._v(t._s("".concat(t.moment(a.created_at).format("MM/DD/YY")," ").concat(a.voter)))])])})),1):e("div",{staticClass:"pa-10"},[e("v-img",{attrs:{src:"/images/system/admin-empty.svg"}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"mt-2 text-center"},[t._v("No currently vote record...")])],1)],1)],1)],1)],1)],1)],1):e("v-card",{attrs:{outlined:""}},[e("div",{staticClass:"pa-10 text-center"},[e("v-img",{staticClass:"mx-auto",attrs:{width:"300",src:"/images/system/admin-empty.svg"}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"mt-2 text-center"},[t._v("No currently vote record...")])],1)])],1)],1)}),[],!1,null,null,null).exports}}]);