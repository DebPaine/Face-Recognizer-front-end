(this.webpackJsonpfacerecognizer=this.webpackJsonpfacerecognizer||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/brain.2e5504b0.svg"},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),i=a.n(s),l=(a(17),a(1)),r=a(2),c=a(4),m=a(3),u=a(5),p=function(e){var t=e.onRouteChange;return o.a.createElement("nav",{className:"flex justify-end"},o.a.createElement("p",{className:"underline pa3 f4 link dim pointer black font3",onClick:function(){return t("signin")}},"Sign Out"))},d=a(9),h=a.n(d),f=(a(18),a(10)),g=a.n(f);function E(){return o.a.createElement("div",{className:"logo"},o.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:40},style:{height:110,width:110}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{src:g.a,alt:"brain logo",className:"pa2"}))))}a(19);var v=function(e){var t=e.onInputChange,a=e.onDetect;return o.a.createElement("div",{className:"font"},o.a.createElement("p",{className:"f2 mb3 black font1"},"This is a Face Recognition App"),o.a.createElement("div",{className:"flex center shadow-1 pa4 pr3 pl3 br2 w-70"},o.a.createElement("input",{type:"text",className:"input is-rounded font3",onChange:t,placeholder:"Please enter the URL of the image"}),o.a.createElement("button",{className:"button is-rounded is-outlined is-link pointer grow ml2 w-10",onClick:a},o.a.createElement("span",{className:"white font3 f6"},o.a.createElement("strong",null,"Detect")))))},b=function(e){var t=e.name,a=e.entries;return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3 font2 "},"".concat(t,", you have used Face Recognizer")),o.a.createElement("div",{className:"white f1 font2 "},"".concat(a," times")))},N=(a(20),a(11)),w=a.n(N),C=function(){return o.a.createElement(w.a,{className:"particles",params:{particles:{number:{value:150,density:{enable:!0,value_area:800}},line_linked:{enable_auto:!0}}}})},y=(a(21),a(22),function(e){var t=e.box;return o.a.createElement("div",{className:"absolute bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})}),k=function(e){var t=e.boxes,a=e.imageUrl;return o.a.createElement("div",{className:"mt2"},o.a.createElement("div",{className:"absolute imgcontainer"},o.a.createElement("img",{id:"inputImage",src:a,width:"400px",height:"auto",alt:""}),t.map((function(e,t){return o.a.createElement(y,{key:t,box:e})}))))},j=a(6),R=a.n(j),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmit=function(){var e=a.state,t=e.email,n=e.password,o=a.props,s=o.onRouteChange,i=o.loadUser;!function(){var e,a;R.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,R.a.awrap(fetch("https://enigmatic-lowlands-93539.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:t,password:n})}));case 2:return e=o.sent,o.next=5,R.a.awrap(e.json());case 5:(a=o.sent).id&&(i(a),s("home"));case 7:case"end":return o.stop()}}))}()},a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return o.a.createElement("div",{className:"field w-30 center shadow-1 pa3 mt6"},o.a.createElement("p",{className:"f2 font3 b"},"Sign In"),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control has-icons-left "},o.a.createElement("input",{className:"input font3",type:"email",placeholder:"Email",name:"email",onChange:this.onEmailChange}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-envelope"})))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control has-icons-left "},o.a.createElement("input",{className:"input font3",type:"password",placeholder:"Password",name:"password",onChange:this.onPasswordChange}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-lock"})))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"center"},o.a.createElement("button",{className:"button is-outlined is-link font3 b",type:"submit",name:"signin",value:"signin",onClick:this.onSubmit},"Sign In"))),o.a.createElement("div",null,o.a.createElement("p",{className:"font3"},o.a.createElement("a",{onClick:function(){return e("register")}},"New user? Register here")),o.a.createElement("p",{className:"help"},o.a.createElement("a",null,"Forgot password?"))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onRegister=function(){var e=a.state,t=e.name,n=e.email,o=e.password;fetch("https://enigmatic-lowlands-93539.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:t,email:n,password:o})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={name:"",email:"",password:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return o.a.createElement("div",{className:"field w-30 center shadow-3 pa3 mt6"},o.a.createElement("p",{className:"f2 font3 b"},"Register"),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control has-icons-left "},o.a.createElement("input",{className:"input font3",type:"text",placeholder:"Full name",name:"fullname",onChange:this.onNameChange}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-user"})))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control has-icons-left "},o.a.createElement("input",{className:"input font3",type:"email",placeholder:"Email",name:"email",onChange:this.onEmailChange}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-envelope"})))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control has-icons-left "},o.a.createElement("input",{className:"input font3",type:"password",placeholder:"Password",name:"password",onChange:this.onPasswordChange}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-lock"})))),o.a.createElement("div",{className:"field is-grouped is-grouped-centered"},o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button is-outlined is-link font3 b",name:"goback",value:"goback",onClick:function(){return e("signin")}},"Go back")),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button is-outlined is-link font3 b",type:"submit",name:"register",value:"register",onClick:this.onRegister},"Register"))))}}]),t}(n.Component),S={imageUrl:"",boxes:[],route:"signin",user:{id:"",name:"",email:"",entries:0,joined:""}},U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadUser=function(e){a.setState({user:{id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined}})},a.onInputChange=function(e){a.setState({imageUrl:e.target.value})},a.onDetect=function(){fetch("https://enigmatic-lowlands-93539.herokuapp.com/ClarifaiAPI",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({url:a.state.imageUrl})}).then((function(e){return e.json()})).then((function(e){if(e){var t=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}));a.calculateFaceLocation(t),fetch("https://enigmatic-lowlands-93539.herokuapp.com/image",{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({id:a.state.user.id})}).then((function(e){return e.json()})).then((function(e){return a.setState(Object.assign(a.state.user,{entries:e}))})).catch((function(e){return console.log("Entry count error")}))}})).catch((function(e){return console.log("Error in bounding region")}))},a.calculateFaceLocation=function(e){var t=document.getElementById("inputImage"),n=t.width,o=t.height,s=e.map((function(e){return{topRow:e.top_row*o,rightCol:n-e.right_col*n,bottomRow:o-e.bottom_row*o,leftCol:e.left_col*n}}));a.setState({boxes:s})},a.onRouteChange=function(e){"signin"===e?a.setState(S):a.setState({route:e})},a.state=S,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.boxes,a=e.imageUrl,n=e.route,s=this.state.user,i=s.name,l=s.entries;return o.a.createElement("div",{className:"App"},o.a.createElement(C,null),o.a.createElement(E,null),"home"===n?o.a.createElement("div",null,o.a.createElement(p,{onRouteChange:this.onRouteChange}),o.a.createElement(b,{name:i,entries:l}),o.a.createElement(v,{onInputChange:this.onInputChange,onDetect:this.onDetect}),o.a.createElement(k,{boxes:t,imageUrl:a})):"signin"===n?o.a.createElement(O,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):o.a.createElement(x,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(24),a(25),a(26);i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.361c07ab.chunk.js.map