(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d7fe"],{"/f5E":function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var i=n("t3Un"),r="/binds";function a(t){return Object(i.a)({url:r,method:"PUT",data:t})}function s(t){return Object(i.a)({url:r,method:"DELETE",data:t})}},"24S7":function(t,e,n){"use strict";var i=n("BXZD");n.n(i).a},BXZD:function(t,e,n){},WLKy:function(t,e,n){"use strict";n.r(e);var i=n("4d7F"),r=n.n(i),a=n("qiID"),s=n("fqLP"),l=n("/f5E"),o=n("ZySA"),u=n("7Qib"),c={name:"routingIndex",directives:{waves:o.a},data:function(){return{listQuery:{clusterId:void 0,addr:void 0,maxQPS:void 0},listLoading:!0,dataList:[],clustersList:[],bindIdList:[],pageInfo:{totalSize:void 0}}},created:function(){this.init()},watch:{$route:function(t,e){"routingIndex"!=t.name&&this.$destroy()}},computed:{filterData:function(){var t=this;return this.dataList.filter(function(e){var n=!0;return t.listQuery.addr&&(n=Object(u.g)(e.addr,t.listQuery.addr)),n&&t.listQuery.maxQPS&&(n=Object(u.g)(e.maxQPS,t.listQuery.maxQPS)),n})}},methods:{init:function(){var t=this;this.listQuery.clusterId=this.$route.query.id||"",s.b().then(function(e){t.clustersList=e||[],t.listLoading=!1}).catch(function(){t.listLoading=!1}),this.listQuery.clusterId&&this.handleFilter()},getList:function(){var t=this;if(this.bindIdList&&this.bindIdList.length>0){var e=[];this.bindIdList.forEach(function(t){e.push(a.b(t))}),r.a.all(e).then(function(e){t.dataList=e,t.listLoading=!1,t.pageInfo.totalSize=t.dataList.length})}else this.dataList=[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1},handleFilter:function(){var t=this,e=this.listQuery.clusterId;this.listLoading=!0,s.c(e).then(function(e){t.bindIdList=e||[],t.getList()})},handleDelete:function(t){var e=this,n=t.id;this.$confirm("是否删除该server？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(n)})},_doDeleteItem:function(t){var e=this;if(t&&this.listQuery.clusterId){var n={clusterID:this.listQuery.clusterId,serverID:t};l.a(n).then(function(){a.a(t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.handleFilter()})})}},handleCreate:function(){this.$router.push({path:"/server/new",query:{clusterId:this.listQuery.clusterId}})},handleShow:function(t){this.$router.push({path:"/server/show",query:{id:t.id,clusterId:this.listQuery.clusterId}})},handleUpdate:function(t){this.$router.push({path:"/server/edit",query:{id:t.id,clusterId:this.listQuery.clusterId}})}}},d=(n("24S7"),n("KHd+")),f=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{attrs:{filterable:"",placeholder:"请选择Cluster进行查询"},on:{change:t.handleFilter},model:{value:t.listQuery.clusterId,callback:function(e){t.$set(t.listQuery,"clusterId",t._n(e))},expression:"listQuery.clusterId"}},t._l(t.clustersList,function(t,e){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),t.listQuery.clusterId?[n("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"地址",clearable:""},model:{value:t.listQuery.addr,callback:function(e){t.$set(t.listQuery,"addr",e)},expression:"listQuery.addr"}}),t._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"maxQPS",clearable:""},model:{value:t.listQuery.maxQPS,callback:function(e){t.$set(t.listQuery,"maxQPS",e)},expression:"listQuery.maxQPS"}}),t._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.handleFilter}},[t._v("刷新\n            ")])]:t._e(),t._v(" "),0===t.clustersList.length?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先添加Cluster",placement:"top-start"}},[n("div",{staticStyle:{float:"right"}},[n("el-button",{staticClass:"filter-item",attrs:{disabled:!0,type:"danger",icon:"el-icon-edit"}},[t._v("添加\n                ")])],1)]):n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],2),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.filterData,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.addr))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"接口协议"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("protocolFilter")(e.row.protocol)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"支持的最大QPS"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.maxQPS))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleShow(e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total",total:t.pageInfo.totalSize}})],1)],1)},[],!1,null,"3834ee75",null);f.options.__file="index.vue";e.default=f.exports},ZySA:function(t,e,n){"use strict";var i=n("P2sY"),r=n.n(i),a=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var i=r()({},e.value),a=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",s.appendChild(o)),a.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=n.pageY-l.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=n.pageX-l.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}},!1)}}),s=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(s)),a.install=s;e.a=a},fqLP:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return f});var i=n("4d7F"),r=n.n(i),a=n("t3Un"),s=n("JDVc"),l="/clusters";function o(){return new r.a(function(t,e){var n=[],i="",r=s.c;!function s(o){(function(t){return Object(a.a)({url:l,method:"GET",params:t})})(o).then(function(e){var a=(e=e||[]).length;a>0?(n=n.concat(e),(i=e[a-1]||{}).id&&s({after:i.id,limit:r})):t(n)}).catch(function(){e()})}({after:"",limit:r})})}function u(t){return Object(a.a)({url:l+"/"+t,method:"GET"})}function c(t){return Object(a.a)({url:l,method:"PUT",data:t})}function d(t){return Object(a.a)({url:l+"/"+t,method:"DELETE"})}function f(t){return Object(a.a)({url:l+"/"+t+"/binds",method:"GET"})}},jUE0:function(t,e,n){},qiID:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return l});n("4d7F");var i=n("t3Un"),r=(n("JDVc"),"/servers");function a(t){return Object(i.a)({url:r+"/"+t,method:"GET"})}function s(t){return Object(i.a)({url:r,method:"PUT",data:t})}function l(t){return Object(i.a)({url:r+"/"+t,method:"DELETE"})}},t3Un:function(t,e,n){"use strict";var i=n("4d7F"),r=n.n(i),a=n("vDqi"),s=n.n(a),l=n("XJYT"),o=s.a.create({baseURL:"/v1",timeout:6e4});o.interceptors.request.use(function(t){return t},function(t){console.error(t),r.a.reject(t)}),o.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(l.Message)({message:e.data,type:"error",duration:5e3}),r.a.reject("error"))},function(t){return Object(l.Message)({message:t.data||"网络异常",type:"error",duration:5e3}),r.a.reject(t)}),e.a=o}}]);