(this.webpackJsonpfacerecognizer=this.webpackJsonpfacerecognizer||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/brain.2e5504b0.svg"},33:function(e,t,a){e.exports=a(83)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),i=a.n(c),l=(a(38),a(25)),r=a(26),s=a(31),m=a(27),u=a(32),g=a(28),p=a.n(g),h=(a(39),a(29)),d=a.n(h);function f(){return o.a.createElement("div",{className:"logo"},o.a.createElement(p.a,{className:"Tilt br2 shadow-2",options:{max:40},style:{height:110,width:110}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{src:d.a,alt:"brain logo",className:"pa2"}))))}a(40);var b=function(e){var t=e.onInputChange,a=e.onDetect;return o.a.createElement("div",{className:"font mt4"},o.a.createElement("p",{className:"f2 mb2 black font1"},"This is a Face Recognition App"),o.a.createElement("div",{className:"flex center shadow-2 inputbuttondiv pa4 pr3 pl3 br2 w-50"},o.a.createElement("input",{type:"text",className:"input is-rounded font3",onChange:t,placeholder:"Please enter the URL of the image (can recognize only one face as of now)"}),o.a.createElement("button",{className:"button is-rounded is-outlined is-success pointer grow ml2 w-10",onClick:a},o.a.createElement("span",{className:"white font3 f6"},o.a.createElement("strong",null,"Detect")))))},E=(a(41),a(30)),v=a.n(E),w=a(11),N=a.n(w),x=(a(79),function(e){var t=e.box,a=e.imageUrl;return o.a.createElement("div",{className:"mt2"},o.a.createElement("div",{className:"absolute imgcontainer"},o.a.createElement("img",{id:"inputImage",src:a,width:"300px",height:"auto",alt:""}),o.a.createElement("div",{className:"absolute bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),C=new N.a.App({apiKey:"917ae1bc8dd6466699f1f5f13dec6144"}),_={particles:{number:{value:80,density:{enable:!0,value_area:800}},line_linked:{enable_auto:!0}}},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({imageUrl:t.target.value})},e.onDetect=function(){C.models.predict(N.a.FACE_DETECT_MODEL,e.state.imageUrl).then((function(t){var a=t.outputs[0].data.regions[0].region_info.bounding_box;console.log(a),e.calculateFaceLocation(a)})).catch((function(e){return console.log(e)}))},e.calculateFaceLocation=function(t){var a=document.getElementById("inputImage"),n=a.width,o=a.height,c={leftCol:t.left_col*n,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o,topRow:t.top_row*o};e.setState({box:c}),console.log(c),console.log(e.state.box)},e.state={imageUrl:"",box:{}},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v.a,{className:"particles",params:_}),o.a.createElement(f,null),o.a.createElement(b,{onInputChange:this.onInputChange,onDetect:this.onDetect}),o.a.createElement(x,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80),a(81),a(82);i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.931a35e8.chunk.js.map