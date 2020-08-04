(this["webpackJsonppoimanager-frontend"]=this["webpackJsonppoimanager-frontend"]||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),l=t(33),c=t(23),s=t(47),u=t(3),d=t(154),m=t(175),g=t(165),f=t(166),w=t(167),p=t(168),b=t(31),v=t(174),h=t(169),E=t(158),k=t(170),C=t(171),y=t(172),O=t(71),x=t.n(O),S=t(72),j=t.n(S),N=t(73),B=t.n(N),P=t(64),M=t(65),F=t(66),T=t.n(F),I=t(173),J=t(159),L=t(160),R=t(161),W=t(162),z=t(164),H=t(163),G=Object(d.a)((function(e){return Object(m.a)({terminal:{width:"100%",padding:12,backgroundColor:"#2b2b2b",marginBottom:e.spacing(2),borderRadius:4},commandInput:{display:"flex",justifyContent:"center"},commandTextField:{width:"85vw"},sendButton:{margin:8}})})),A={fontSize:16,fontFamily:"Menlo For Powerline,Consolas,Liberation Mono,Menlo,Courier,monospace",theme:{foreground:"#d2d2d2",background:"#2b2b2b",cursor:"#adadad",black:"#000000",red:"#d81e00",green:"#5ea702",yellow:"#cfae00",blue:"#427ab3",magenta:"#89658e",cyan:"#00a7aa",white:"#dbded8",brightBlack:"#686a66",brightRed:"#f54235",brightGreen:"#99e343",brightYellow:"#fdeb61",brightBlue:"#84b0d8",brightMagenta:"#bc94b7",brightCyan:"#37e6e8",brightWhite:"#f1f1f0"}},K=function(){var e=new M.FitAddon,n=G(),t=a.useRef(null),r=a.useState(""),i=Object(c.a)(r,2),o=i[0],l=i[1],s=a.useState(!1),u=Object(c.a)(s,2),d=u[0],m=u[1],g=a.useState(""),f=Object(c.a)(g,2),w=f[0],p=f[1],b=a.useState(!1),v=Object(c.a)(b,2),h=v[0],E=v[1],k=a.useState(""),C=Object(c.a)(k,2),y=C[0],O=C[1],x=function(e){var n,a=JSON.parse(e.data);switch(a.type){case"auth":var r,i,o;if("OK"===a.msg)null===(r=t.current)||void 0===r||r.terminal.writeln("Connection succeeded.");else null===(i=t.current)||void 0===i||i.terminal.writeln(a.msg),null===(o=t.current)||void 0===o||o.terminal.writeln("Please enter token."),m(!0);break;default:null===(n=t.current)||void 0===n||n.terminal.writeln("".concat("\x1b[1;3;31m").concat(a.type,": ").concat("\x1b[0m").concat(a.msg))}},S=a.useCallback((function(e){var n,a;null===(n=t.current)||void 0===n||n.terminal.clear(),null===(a=t.current)||void 0===a||a.terminal.writeln("Connecting to PoiManager..."),function(e){return new Promise((function(n){T.a.get("/api/log/all?token=".concat(e)).then((function(e){e.data.content.forEach((function(e){var n;return null===(n=t.current)||void 0===n?void 0:n.terminal.writeln("".concat("\x1b[1;3;31m").concat(e.type,": ").concat("\x1b[0m").concat(e.log))})),n()})).catch((function(e){var n,a,r,i,o,l;(null===(n=t.current)||void 0===n||n.terminal.writeln("Connection failed"),401===e.response.status)?(null===(a=t.current)||void 0===a||a.terminal.writeln(e.response.data.msg),null===(r=t.current)||void 0===r||r.terminal.writeln("Please enter token."),m(!0)):(null===(i=t.current)||void 0===i||i.terminal.writeln("Connection lost."),null===(o=t.current)||void 0===o||o.terminal.writeln("Unknown error:"+e.response.data.msg+e.response.status),null===(l=t.current)||void 0===l||l.terminal.writeln("Please contact the developer."))}))}))}(e).then((function(){window.websocketConn=new WebSocket("ws://".concat(window.location.host,"/api/ws/cmd")),E(!0),window.websocketConn.onclose=function(){var e;E(!1),null===(e=t.current)||void 0===e||e.terminal.writeln("Connection lost.")},window.websocketConn.onmessage=x,window.websocketConn.onopen=function(){var n;null===(n=window.websocketConn)||void 0===n||n.send(JSON.stringify({token:e}))}}))}),[]);return a.useEffect((function(){e.fit()}),[e]),a.useEffect((function(){S(o)}),[S,o]),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(P.a,{ref:t,className:n.terminal,addons:[e],options:A}),a.createElement("div",{className:n.commandInput},a.createElement(I.a,{label:"\u5728\u6b64\u8f93\u5165\u6307\u4ee4",variant:"outlined",className:n.commandTextField,value:y,onChange:function(e){return O(e.target.value)}}),a.createElement(J.a,{variant:"contained",color:"primary",className:n.sendButton,onClick:function(){var e;null===(e=window.websocketConn)||void 0===e||e.send(JSON.stringify({token:o,cmd:y})),O("")}},"\u6267\u884c"),h?a.createElement(J.a,{variant:"contained",color:"primary",className:n.sendButton,onClick:function(){var e;null===(e=window.websocketConn)||void 0===e||e.close(),E(!1)}},"\u4e2d\u65ad"):a.createElement(J.a,{variant:"contained",color:"primary",className:n.sendButton,onClick:function(){S(o)}},"\u8fde\u63a5"))),a.createElement(L.a,{open:d,"aria-labelledby":"form-dialog-title"},a.createElement(R.a,{id:"form-dialog-title"},"\u8bf7\u8f93\u5165 Token"),a.createElement(W.a,null,a.createElement(H.a,null,"\u8bf7\u60a8\u8f93\u5165 Token \uff0c\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u80fd\u627e\u5230"," ",a.createElement("code",null," >Manager Token: xxxxxx"),"\u7684\u5b57\u6837\uff0c\u60a8\u8f93\u5165",a.createElement("code",null,"Manager Token: "),"\u540e\u7684\u6587\u672c\u5373\u53ef"),a.createElement(I.a,{autoFocus:!0,margin:"dense",id:"token",label:"Token",type:"text",onChange:function(e){return p(e.target.value)},fullWidth:!0})),a.createElement(z.a,null,a.createElement(J.a,{onClick:function(){m(!1)},color:"primary"},"\u53d6\u6d88"),a.createElement(J.a,{onClick:function(){l(w),m(!1)},color:"primary"},"\u786e\u5b9a"))))},U=Object(d.a)((function(e){return Object(m.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - 240px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)(Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})})),Y=function(){var e=U(),n=a.useState(!1),t=Object(c.a)(n,2),r=t[0],i=t[1];return a.createElement("div",{className:e.root},a.createElement(g.a,null),a.createElement(f.a,{position:"fixed",className:Object(u.a)(e.appBar,Object(l.a)({},e.appBarShift,r))},a.createElement(w.a,null,a.createElement(p.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return i(!0)},edge:"start",className:Object(u.a)(e.menuButton,r&&e.hide)},a.createElement(x.a,null)),a.createElement(b.a,{variant:"h6",noWrap:!0},"PoiManager"))),a.createElement(v.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper}},a.createElement("div",{className:e.drawerHeader},a.createElement(p.a,{onClick:function(){i(!1)}},a.createElement(j.a,null))),a.createElement(h.a,null),a.createElement(E.a,null,a.createElement(k.a,{button:!0,key:"console"},a.createElement(C.a,null,a.createElement(B.a,null)),a.createElement(y.a,{primary:"\u63a7\u5236\u53f0"})))),a.createElement("main",{className:Object(u.a)(e.content,Object(l.a)({},e.contentShift,r))},a.createElement("div",{className:e.drawerHeader}),a.createElement(K,null)))};o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},84:function(e,n,t){e.exports=t(110)}},[[84,1,2]]]);
//# sourceMappingURL=main.b889d321.chunk.js.map