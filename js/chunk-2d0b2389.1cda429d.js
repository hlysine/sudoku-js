(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2389"],{"22d7":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-form",{on:{submit:e.onSubmit}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Code:","label-for":"code"}},[o("b-form-textarea",{attrs:{id:"code",placeholder:"Enter a code...",rows:"3","max-rows":"6",required:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.click",value:"Copied!",expression:"'Copied!'",modifiers:{click:!0}}],staticClass:"m-1",attrs:{variant:"primary"},on:{click:function(t){return e.copyText(e.code)}}},[e._v("Copy")]),o("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("Load")])],1)],1)},a=[],c=(o("fb6a"),o("c0d6")),r=o("2ebe"),d={name:"SaveLoad",components:{},data:function(){return{store:c["a"],code:""}},props:{},created:function(){this.code=this.store.sudoku.getCode().slice(2)},methods:{onSubmit:function(e){e.preventDefault(),this.store.sudoku=r["c"].loadCode("0x"+this.code)},copyText:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var o=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),o&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(o))}}},i=d,s=o("2877"),u=Object(s["a"])(i,n,a,!1,null,"4f8b89c9",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b2389.1cda429d.js.map