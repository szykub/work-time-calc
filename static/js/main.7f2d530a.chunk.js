(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(14),n(1)),i=n(2),l=n(4),s=n(3),m=n(5),p=(n(16),n(18),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("span",null,"Work hour calculator"))}),d=n(8),h=(n(20),n(22),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleBeginHour=function(e){n.setState({beginHour:e.target.value})},n.handleEndHour=function(e){n.setState({endHour:e.target.value})},n.calculateWorkTime=function(){var e,t,a,r,c=0;return n.state.beginHour.length>=3&&n.state.endHour.length>=3?(e=n.state.beginHour.split(":"),e=60*parseInt(e[0])+parseInt(e[1]),t=n.state.endHour.split(":"),c=(a=(t=60*parseInt(t[0])+parseInt(t[1]))-e<0?t+e:t-e)%60,r=(r=Math.floor(a/60))<10?"0".concat(r):r,c=c<10?"0".concat(c):c,n.props.callback(a,n.props.id),"".concat(r,":").concat(c)):void 0},n.state={beginHour:"",endHour:"",workTime:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"HourInputContainer"},r.a.createElement("span",{className:"gridElement"},this.props.id),r.a.createElement("section",{className:"InputsContainer gridElement"},r.a.createElement("input",{type:"time",maxLength:5,onChange:this.handleBeginHour,value:this.state.beginHour})),r.a.createElement("section",{className:"InputsContainer gridElement"},r.a.createElement("input",{type:"time",maxLength:5,onChange:this.handleEndHour,value:this.state.endHour})),r.a.createElement("span",{className:"gridElement"},this.calculateWorkTime()))}}]),t}(a.Component)),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).addHourInput=function(){var e={id:n.state.id,key:Date.now(),minutes:0};n.setState(function(t){return{hourInputsArr:Object(d.a)(t.hourInputsArr).concat([e]),id:t.id+1}})},n.minutesCallback=function(e,t){n.state.hourInputsArr.forEach(function(n){n.id===t&&(n.minutes=e)})},n.calculateAllWorkingHours=function(){var e,t=0,a=0;n.state.hourInputsArr.forEach(function(e){t+=e.minutes}),e=(e=Math.floor(t/60))<10?"0"+e:e,a=(a=t%60)<10?"0"+a:a,n.setState({countedHours:"".concat(e,":").concat(a)})},n.state={id:1,hourInputsArr:[],minutesArr:[],countedHours:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"container"},r.a.createElement("section",{className:"headerTable"},r.a.createElement("span",null,"Lp."),r.a.createElement("span",null,"Godzina rozpocz\u0119cia"),r.a.createElement("span",null,"Godzina zako\u0144czenia"),r.a.createElement("span",null,"Przepracowane")),this.state.hourInputsArr.map(function(t){return r.a.createElement(h,{key:t.key,id:t.id,callback:e.minutesCallback})}),r.a.createElement("section",{className:"addButtonContainer"},r.a.createElement("input",{className:"addButton",type:"button",value:"+",onClick:this.addHourInput})),r.a.createElement("section",{className:"outputTable"},r.a.createElement("span",null,"W sumie:"),r.a.createElement("span",null,this.state.countedHours,r.a.createElement("input",{className:"calculateButton",type:"button",value:"Oblicz",onClick:this.calculateAllWorkingHours}))))}}]),t}(a.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(E,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.7f2d530a.chunk.js.map