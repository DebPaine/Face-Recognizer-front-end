(this.webpackJsonpfacerecognizer=this.webpackJsonpfacerecognizer||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/brain.2e5504b0.svg"},33:function(e,t,n){e.exports=n(83)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),l=(n(38),n(25)),r=n(26),s=n(31),m=n(27),u=n(32),p=function(){return o.a.createElement("nav",{className:"flex justify-end"},o.a.createElement("p",{className:"underline pa3 f4 link dim pointer black font3"},"Sign Out"))},g=n(28),d=n.n(g),f=(n(39),n(29)),h=n.n(f);function b(){return o.a.createElement("div",{className:"logo"},o.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:40},style:{height:110,width:110}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{src:h.a,alt:"brain logo",className:"pa2"}))))}n(40);var E=function(e){var t=e.onInputChange,n=e.onDetect;return o.a.createElement("div",{className:"font"},o.a.createElement("p",{className:"f2 mb2 black font1"},"This is a Face Recognition App"),o.a.createElement("div",{className:"flex center shadow-2 inputbuttondiv pa4 pr3 pl3 br2 w-50"},o.a.createElement("input",{type:"text",className:"input is-rounded font3",onChange:t}),o.a.createElement("button",{className:"button is-rounded is-outlined is-success pointer grow ml2 w-10",onClick:n},o.a.createElement("span",{className:"white font3 f6"},o.a.createElement("strong",null,"Detect")))))},v=(n(41),n(30)),w=n.n(v),N=n(11),x=n.n(N),C=(n(79),function(e){var t=e.box,n=e.imageUrl;return o.a.createElement("div",{className:"mt2"},o.a.createElement("div",{className:"absolute imgcontainer"},o.a.createElement("img",{id:"inputImage",src:n,width:"300px",height:"auto",alt:""}),o.a.createElement("div",{className:"absolute bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),_=new x.a.App({apiKey:"917ae1bc8dd6466699f1f5f13dec6144"}),k={particles:{number:{value:80,density:{enable:!0,value_area:800}},line_linked:{enable_auto:!0}}},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({imageUrl:t.target.value})},e.onDetect=function(){_.models.predict(x.a.FACE_DETECT_MODEL,e.state.imageUrl).then((function(t){var n=t.outputs[0].data.regions[0].region_info.bounding_box;console.log(n),e.calculateFaceLocation(n)})).catch((function(e){return console.log(e)}))},e.calculateFaceLocation=function(t){var n=document.getElementById("inputImage"),a=n.width,o=n.height,c={leftCol:t.left_col*a,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o,topRow:t.top_row*o};e.setState({box:c}),console.log(c),console.log(e.state.box)},e.state={imageUrl:"",box:{}},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w.a,{className:"particles",params:k}),o.a.createElement(p,null),o.a.createElement(b,null),o.a.createElement(E,{onInputChange:this.onInputChange,onDetect:this.onDetect}),o.a.createElement(C,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(80),n(81),n(82);i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6dde518a.chunk.js.map