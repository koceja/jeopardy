(this["webpackJsonpmy-jeopardy-app"]=this["webpackJsonpmy-jeopardy-app"]||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),l=a.n(i),c=(a(57),a(20)),o=a(21),s=a(23),u=a(22),d=a(29),h=a(8),m=a(47),v=(a(58),a(103)),p=(a(59),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleClick",value:function(){window.location.assign("http://jservice.io/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"points"},r.a.createElement("h2",null,"API")),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"middle"},r.a.createElement("h2",null,"JService.io"),r.a.createElement("p",null,"This webapp was created using the JService.io API. You can find the API here."),r.a.createElement(v.a,{variant:"contained",onClick:this.handleClick.bind(this),size:"small",style:{width:"90%"}},"Go to JService.io"))))}}]),a}(r.a.Component)),f=(a(63),a(33)),E=a.n(f),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showResults:!1,reveal:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.question;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}}]),a}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).fetchDataInitial=function(){E.a.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/random/").then((function(e){n.setState({data:e.data})})).catch((function(e){console.log(e)}))},n.fetchDataSecond=function(){E.a.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/random/").then((function(e){n.setState({dataNext:e.data})})).catch((function(e){console.log(e)}))},n.fetchSet=function(){var e=n.state.dataNext;n.setState({data:e}),n.fetcher()},n.fetcher=function(){try{n.fetchData()}catch(t){}var e=n.state.dataNext;if(""===e[0].question||""===e[0].answer)try{n.fetchData()}catch(t){}},n.fetchData=function(){E.a.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/random/").then((function(e){n.setState({dataNext:e.data})})).catch((function(e){n.setState({dataNext:"Error Loading"}),console.log(e)}))},n.state={data:[{question:"Loading..."}],reveal:!1,points:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchDataInitial(),this.fetchDataSecond()}},{key:"correct",value:function(e){var t=this.state.points;t+=null===e||0===e||"unknown"===e?200:e,this.setState({points:t}),this.reveal()}},{key:"reveal",value:function(){var e=this.state.data;"undefined"===typeof e[0]?this.setState({revealed:""}):!1===this.state.reveal?(this.setState({revealed:e[0].answer}),this.setState({reveal:!this.state.reveal})):(this.setState({revealed:""}),this.fetchSet(),this.setState({reveal:!this.state.reveal}))}},{key:"render",value:function(){var e=this,t=this.state.data;if("undefined"===typeof t||"undefined"===typeof t[0])return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"inner"},r.a.createElement("h1",null,"External API Error. Nothing I can do about that :(")));var a=t[0].category,n=null;n="undefined"==typeof a?"Unknown":a.title;var i=t[0].question,l=2*t[0].value;0===l&&(l="unknown");var c=this.state.revealed,o=this.state.points;return this.state.reveal?r.a.createElement("div",null,r.a.createElement("div",{id:"points"},r.a.createElement("h2",null,"Points: ",o)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"inner"},r.a.createElement("div",{id:"top"},r.a.createElement("div",{id:"category"},r.a.createElement("p",null,r.a.createElement("strong",null,n),r.a.createElement("br",null),"Value: ",l))),r.a.createElement("div",{id:"question"},r.a.createElement("h3",null,r.a.createElement("b",null,"Answer")),r.a.createElement("p",null,i)),r.a.createElement("div",{id:"answer"},r.a.createElement("h3",null,"Question"),r.a.createElement("div",{style:{width:"90%",margin:"0 auto"}},r.a.createElement(v.a,{variant:"contained",onClick:function(){e.correct(l)},size:"small",style:{backgroundColor:"#49c749",display:"inline-block",width:"calc(50% - 10px)",height:"56px",marginRight:"10px",color:"#eeeeee"}},"Correct"),r.a.createElement(v.a,{variant:"contained",onClick:function(){e.reveal()},size:"small",style:{backgroundColor:"#e44f4f",display:"inline-block",width:"calc(50% - 10px)",height:"56px",marginLeft:"10px",color:"#eeeeee"}},"Incorrect")),r.a.createElement("p",null),r.a.createElement(b,{question:c}),r.a.createElement("p",null))))):r.a.createElement("div",null,r.a.createElement("div",{id:"points"},r.a.createElement("h2",null,"Points: ",o)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"inner"},r.a.createElement("div",{id:"top"},r.a.createElement("div",{id:"category"},r.a.createElement("p",null,r.a.createElement("strong",null,n),r.a.createElement("br",null),"Value: ",l))),r.a.createElement("div",{id:"question"},r.a.createElement("h3",null,r.a.createElement("b",null,"Answer")),r.a.createElement("p",null,i)),r.a.createElement("div",{id:"answer"},r.a.createElement("h3",null,"Question"),r.a.createElement(v.a,{variant:"contained",onClick:function(){e.reveal()},size:"small",style:{width:"90%"}},r.a.createElement("p",null,"Reveal")),r.a.createElement("p",null),r.a.createElement(b,{question:c}),r.a.createElement("p",null)))))}}]),a}(r.a.Component),g=(a(81),a(108)),w=(a(105),a(107)),k=a(106);var j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:!1},e.handleChange=function(t,a){e.setState({value:a})},e}return Object(o.a)(a,[{key:"render",value:function(){this.state.value;return r.a.createElement("div",{id:"navigation-bar"},r.a.createElement(g.a,{position:"static",style:{backgroundColor:"#3500D3"}},r.a.createElement(w.a,{value:this.state.value,onChange:this.handleChange,centered:!0},r.a.createElement(k.a,{component:d.b,to:"/",label:"Random"}),r.a.createElement(k.a,{component:d.b,to:"/apiInfo",label:"API"}))))}}]),a}(r.a.Component),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{id:"app"},r.a.createElement(j,null),r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/apiInfo",component:p})),r.a.createElement(m.a,{num:40,type:"cobweb",bg:!0}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d9aff46f.chunk.js.map