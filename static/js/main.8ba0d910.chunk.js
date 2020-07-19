(this["webpackJsonpdg-demo-app"]=this["webpackJsonpdg-demo-app"]||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(48),i=a.n(r),o=(a(59),a(32)),c=a(19),l=a(49),u=a(50),m=a(53),d=a(52);function h(e,t){this.id=t,this.status="New",this.text=e,this.isDisplayed=!0}a(60),a(61);function f(e){var t=e.addButtonListener,a=e.inputListener,n=e.inputValue,r=e.keyPress;return s.a.createElement("div",{className:"task-input"},s.a.createElement("input",{type:"text",value:n,onChange:a,placeholder:"Take a Note",onKeyDown:r}),s.a.createElement("button",{onClick:t},"Add"))}a(62);function k(e){var t=e.task,a=t.status,n=t.id,r=t.text,i=e.markDoneListener,o=e.deleteListener;return s.a.createElement("div",{className:"list-item"},s.a.createElement("input",{checked:"Done"===a,type:"checkbox",onChange:function(e){return i(n)}}),s.a.createElement("li",{className:"".concat("Done"===a?"done":"")},r),s.a.createElement("button",{onClick:function(e){return o(n)}},"X"))}var p=s.a.createContext({darkTheme:!0}),v={background:"linear-gradient(to right, #654ea3, #eaafc8)"};function L(e){var t=e.tasks,a=e.markDoneListener,n=e.deleteListener,r=t.filter((function(e){return"Deleted"!==e.status&&e.isDisplayed})).map((function(e){return s.a.createElement(k,{key:e.text.slice(0,5)+e.id,task:e,markDoneListener:a,deleteListener:n})}));return s.a.createElement(p.Consumer,null,(function(e){return s.a.createElement("div",{className:"tasks-list",style:e?{backgroundColor:"#282c34",color:"#ffffff"}:{backgroundColor:"#ffffff",color:"#000000"}},r)}))}var g=a(51),E=a.n(g);a(122);function D(e){var t=e.searchValue,a=e.searchListener,n=e.filter,r=e.filterListener,i=e.themeListener;return s.a.createElement(p.Consumer,null,(function(e){return s.a.createElement("div",{className:"search"},s.a.createElement("div",{onClick:function(e){return r("New, Done")},className:"New, Done"===n?"active":""},"All"),s.a.createElement("div",{onClick:function(e){return r("New")},className:"New"===n?"active":""},"Active"),s.a.createElement("div",{onClick:function(e){return r("Done")},className:"Done"===n?"active":""},"Done"),s.a.createElement("input",{placeholder:"Search Task",type:"search",value:t,onChange:a}),s.a.createElement(E.a,{onChange:i,checked:e,size:64}))}))}var y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[new h("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam!",0),new h("officiis quaerat quas quibusdam enim corporis et, accusamus molestias dolor est odit laboriosam delectus omnis voluptates vero aperiam sequi doloremque maxime laudantium perspiciatis inventore eaque. ",1)],inputValue:"",searchValue:"",filter:"New, Done",darkTheme:!0},e.addButtonListener=function(){var t=Object(c.a)(e.state.tasks);t.push(new h(e.state.inputValue,e.state.tasks.length)),e.setState({inputValue:"",tasks:t})},e.keyPress=function(t){13===t.keyCode&&e.addButtonListener(t)},e.inputListener=function(t){e.setState({inputValue:t.target.value})},e.searchListener=function(t){var a=e.state.tasks.map((function(e){var a=Object(o.a)({},e);return a.text.includes(t.target.value)?a.isDisplayed=!0:a.isDisplayed=!1,a}));e.setState({tasks:a,filter:"New, Done",searchValue:t.target.value})},e.filterListener=function(t){var a=e.state.tasks.map((function(e){var a=Object(o.a)({},e);return t.includes(a.status)?a.isDisplayed=!0:a.isDisplayed=!1,a}));e.setState({searchValue:"",tasks:a,filter:t})},e.markDoneListener=function(t){var a=Object(c.a)(e.state.tasks);"New"===a[t].status?a[t].status="Done":a[t].status="New",e.setState({tasks:a})},e.deleteListener=function(t){var a=Object(c.a)(e.state.tasks);a[t].status="Deleted",e.setState({tasks:a})},e.changeTheme=function(){e.setState({darkTheme:!e.state.darkTheme})},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(p.Provider,{value:this.state.darkTheme},s.a.createElement("div",{className:"App",style:this.state.darkTheme?{backgroundColor:"#282c34"}:{backgroundColor:"#ffffff"}},s.a.createElement("header",{style:this.state.darkTheme?{backgroundColor:"#20232a"}:v},s.a.createElement(f,{inputValue:this.state.inputValue,addButtonListener:this.addButtonListener,inputListener:this.inputListener,keyPress:this.keyPress}),s.a.createElement(D,{filter:this.state.filter,filterListener:this.filterListener,searchValue:this.state.searchValue,searchListener:this.searchListener,themeListener:this.changeTheme})),s.a.createElement(L,{markDoneListener:this.markDoneListener,deleteListener:this.deleteListener,tasks:this.state.tasks})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(123)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.8ba0d910.chunk.js.map