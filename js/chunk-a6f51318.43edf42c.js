(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6f51318"],{2658:function(t,n,e){"use strict";e("7b0e")},4268:function(t,n,e){},5962:function(t,n,e){"use strict";e("4268")},7628:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("key-listener",{on:{keypress:t.keypress,keydown:t.keydown}}),e("table",{attrs:{id:"table"}},[e("tr",[e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(1)}}},[t._v("1")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(2)}}},[t._v("2")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(3)}}},[t._v("3")])],1)]),e("tr",[e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(4)}}},[t._v("4")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(5)}}},[t._v("5")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(6)}}},[t._v("6")])],1)]),e("tr",[e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(7)}}},[t._v("7")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(8)}}},[t._v("8")])],1),e("td",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(9)}}},[t._v("9")])],1)]),e("tr",[e("td",{attrs:{colspan:"3"}},[e("b-button",{staticClass:"w-full btn-block",attrs:{variant:"outline-primary"},on:{click:function(n){return t.click(null)}}},[t._v("Delete")])],1)])])],1)},i=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div")},s=[],c={name:"KeyListener",components:{},props:{},created:function(){var t=this;this.keypressHandler=function(n){t.$emit("keypress",n)},this.keydownHandler=function(n){t.$emit("keydown",n)},this.keyupHandler=function(n){t.$emit("keyup",n)},window.addEventListener("keypress",this.keypressHandler),window.addEventListener("keydown",this.keydownHandler),window.addEventListener("keyup",this.keyupHandler)},beforeDestroy:function(){window.removeEventListener("keypress",this.keypressHandler),window.removeEventListener("keydown",this.keydownHandler),window.removeEventListener("keyup",this.keyupHandler)}},u=c,a=(e("5962"),e("2877")),l=Object(a["a"])(u,o,s,!1,null,"45948df8",null),d=l.exports,k={name:"NumPad",components:{KeyListener:d},props:{},methods:{click:function(t){this.$emit("numpress",t)},keypress:function(t){/^[1-9]$/i.test(t.key)&&this.$emit("numpress",t.key)},keydown:function(t){var n=t.keyCode||t.charCode;8!=n&&46!=n||this.$emit("numpress",null)}}},p=k,f=(e("2658"),Object(a["a"])(p,r,i,!1,null,"2d4224b8",null));n["a"]=f.exports},"7b0e":function(t,n,e){},e90e:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("More features coming soon!")]),e("num-pad",{on:{numpress:t.numpress}})],1)},i=[],o=(e("4160"),e("c7cd"),e("159b"),e("7628")),s=e("c0d6"),c={name:"Play",components:{NumPad:o["a"]},props:{},data:function(){return{store:s["a"]}},methods:{numpress:function(t){this.store.selectedCells.forEach((function(n){if(!n.fixed){n.number=t;for(var e=1;e<=9;e++)n.possibilities[e]=!n.number||e==n.number}}))}}},u=c,a=e("2877"),l=Object(a["a"])(u,r,i,!1,null,"2bb64a6e",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a6f51318.43edf42c.js.map