(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc3d0b1c"],{"3d67":function(e,r){function t(e,r){var t=0,n={};e.addEventListener("message",(function(r){var t=r.data;if("RPC"===t.type)if(t.id){var i=n[t.id];i&&(delete n[t.id],t.error?i[1](Object.assign(Error(t.error.message),t.error)):i[0](t.result))}else{var a=document.createEvent("Event");a.initEvent(t.method,!1,!1),a.data=t.params,e.dispatchEvent(a)}})),r.forEach((function(r){e[r]=function(){var i=arguments;return new Promise((function(a,s){var o=++t;n[o]=[a,s],e.postMessage({type:"RPC",id:o,method:r,params:[].slice.call(i)})}))}}))}e.exports=t},6426:function(e,r,t){var n=t("3d67"),i=["getProgress","generate","solve","step"];e.exports=function(){var e=new Worker(t.p+"8a9be9b2c30dc23f0050.worker.js",{name:"[hash].worker.js"});return n(e,i),e}},d286:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Techniques:"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.ariaDescribedby;return[t("b-form-checkbox-group",{attrs:{id:"checkboxes-1","aria-describedby":n},model:{value:e.solver.EnabledTechniques,callback:function(r){e.$set(e.solver,"EnabledTechniques",r)},expression:"solver.EnabledTechniques"}},e._l(e.solver.Techniques,(function(r){return t("b-form-checkbox",{key:r.id,attrs:{value:r.id}},[e._v(e._s(r.name))])})),1)]}}])}),t("b-form-group",{attrs:{id:"input-group-2",label:"Given digits:","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"input-2",type:"number",max:"80",min:"17",placeholder:"Enter a number",required:""},model:{value:e.givenDigits,callback:function(r){e.givenDigits=r},expression:"givenDigits"}})],1),t("b-button",{attrs:{type:"submit",variant:e.isLoading?"danger":"primary"}},[e._v(e._s(e.isLoading?"Cancel":"Generate"))])],1),e.isLoading?t("b-progress",{staticClass:"mt-3",attrs:{value:e.progress,max:81-e.givenDigits,"show-progress":"",animated:""}}):e._e(),t("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result (Debug)"}},[t("pre",{staticClass:"m-0"},[e._v(e._s({solver:e.solver,givenDigits:e.givenDigits}))])])],1)},i=[],a=(t("96cf"),t("1da1")),s=t("6426"),o=t.n(s),c=t("2ebe"),u=t("c0d6"),l={name:"Generate",components:{},data:function(){return{store:u["a"],givenDigits:17,progress:0,isLoading:!1,genWorker:null,intervalId:void 0,solver:new c["b"]}},props:{},beforeDestroy:function(){this.intervalId&&clearInterval(this.intervalId),this.genWorker&&this.genWorker.terminate()},methods:{onSubmit:function(e){e.preventDefault(),this.generate()},generate:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.isLoading?(e.intervalId&&clearInterval(e.intervalId),e.genWorker&&e.genWorker.terminate(),e.isLoading=!1):(e.isLoading=!0,e.genWorker=new o.a,e.progress=0,e.intervalId=setInterval(Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.genWorker.getProgress();case 2:return r.abrupt("return",e.progress=r.sent);case 3:case"end":return r.stop()}}),r)}))),500),e.genWorker.generate(e.givenDigits,e.solver.EnabledTechniques).then((function(r){e.store.sudoku=c["c"].fromObject(r),clearInterval(e.intervalId),e.intervalId=void 0,e.isLoading=!1})));case 1:case"end":return r.stop()}}),r)})))()}}},d=l,g=t("2877"),v=Object(g["a"])(d,n,i,!1,null,"358fa63c",null);r["default"]=v.exports}}]);
//# sourceMappingURL=chunk-fc3d0b1c.7c077373.js.map