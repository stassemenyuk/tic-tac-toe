(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{14:function(t,e,i){},15:function(t,e,i){},16:function(t,e,i){},18:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var s=i(1),c=i.n(s),n=i(5),a=i.n(n),l=(i(14),i(15),i(4)),r=i(6),d=i(7),h=i(2),j=i(9),o=i(8),x=(i(16),i(0));function u(t){var e=t.handleClick,i=t.fill,s=t.id;return Object(x.jsxs)("div",{className:"box",onClick:function(){return e(s)},children:[Object(x.jsx)("div",{className:"index",children:s}),Object(x.jsx)("div",{className:"sign",children:i})]})}i(18);var b=function(t){Object(j.a)(i,t);var e=Object(o.a)(i);function i(t){var s;return Object(r.a)(this,i),(s=e.call(this,t)).state={square:["","","","","","","","",""],currentSign:"x"},s.handleClick=s.handleClick.bind(Object(h.a)(s)),s.restart=s.restart.bind(Object(h.a)(s)),s}return Object(d.a)(i,[{key:"handleClick",value:function(t){if("x"!==this.state.square[t]&&"o"!==this.state.square[t]){var e=[].concat(Object(l.a)(this.state.square.slice(0,t)),[this.state.currentSign],Object(l.a)(this.state.square.slice(t+1)));"x"===this.state.currentSign?this.setState({currentSign:"o"}):this.setState({currentSign:"x"}),this.setState({square:e})}}},{key:"restart",value:function(){this.setState({square:["","","","","","","","",""]})}},{key:"render",value:function(){var t=this.state,e=t.square,i=t.currentSign;return"x"===e[0]&&"x"===e[3]&&"x"===e[6]||"x"===e[3]&&"x"===e[4]&&"x"===e[5]||"x"===e[6]&&"x"===e[7]&&"x"===e[8]||"x"===e[8]&&"x"===e[5]&&"x"===e[2]||"x"===e[0]&&"x"===e[1]&&"x"===e[2]||"x"===e[0]&&"x"===e[4]&&"x"===e[8]||"x"===e[6]&&"x"===e[4]&&"x"===e[2]?Object(x.jsxs)("div",{className:"win",children:[Object(x.jsx)("div",{className:"text",children:"X Wins"}),Object(x.jsx)("button",{className:"restart-btn",onClick:this.restart,children:"Restart"})]}):"o"===e[0]&&"o"===e[3]&&"o"===e[6]||"o"===e[3]&&"o"===e[4]&&"o"===e[5]||"o"===e[6]&&"o"===e[7]&&"o"===e[8]||"o"===e[8]&&"o"===e[5]&&"o"===e[2]||"o"===e[0]&&"o"===e[1]&&"o"===e[2]||"o"===e[0]&&"o"===e[4]&&"o"===e[8]||"o"===e[6]&&"o"===e[4]&&"o"===e[2]?Object(x.jsxs)("div",{className:"win",children:[Object(x.jsx)("div",{className:"text",children:"O Wins"}),Object(x.jsx)("button",{className:"restart-btn",onClick:this.restart,children:"Restart"})]}):""!==e[0]&&""!==e[1]&&""!==e[2]&&""!==e[3]&&""!==e[4]&&""!==e[5]&&""!==e[6]&&""!==e[7]&&""!==e[8]?Object(x.jsxs)("div",{className:"win",children:[Object(x.jsx)("div",{className:"text",children:"Draw"}),Object(x.jsx)("button",{className:"restart-btn",onClick:this.restart,children:"Restart"})]}):Object(x.jsxs)("div",{className:"board",children:[Object(x.jsxs)("div",{className:"current",children:["Current turn: ",i]}),Object(x.jsx)(u,{fill:e[0],id:0,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[1],id:1,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[2],id:2,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[3],id:3,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[4],id:4,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[5],id:5,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[6],id:6,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[7],id:7,handleClick:this.handleClick}),Object(x.jsx)(u,{fill:e[8],id:8,handleClick:this.handleClick})]})}}]),i}(s.Component);var O=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(b,{})})},k=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(e){var i=e.getCLS,s=e.getFID,c=e.getFCP,n=e.getLCP,a=e.getTTFB;i(t),s(t),c(t),n(t),a(t)}))};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.4a992cb5.chunk.js.map