(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{187:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n(243),i=n(1),l=n(240),s=n(241),p=n(248);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(){var t=u(Object(r.useState)(0),2),e=t[0],n=t[1];return a.a.createElement(l.a,{title:"Spin button"},a.a.createElement(o.Helmet,null,a.a.createElement("meta",{name:"description",content:"Create a spin button with CSS flexbox"}),a.a.createElement("meta",{name:"keywords",content:"css flexbox, css spin button"})),a.a.createElement("div",{className:"p-8 pb-20"},a.a.createElement(s.a,{content:a.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"}},a.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"2px",display:"flex"}},a.a.createElement("input",{type:"text",style:{borderColor:"transparent",marginRight:"4px",padding:"4px",width:"100px"},value:e,onChange:function(t){return n(parseInt(t.target.value,10))}}),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},a.a.createElement("button",{style:{borderColor:"transparent",cursor:"pointer",flex:1,padding:"4px 4px 2px 4px"},onClick:function(){return n(e+1)}},a.a.createElement(p.a,{size:6,corner:"t"})),a.a.createElement("button",{style:{borderColor:"transparent",cursor:"pointer",flex:1,padding:"2px 4px 4px 4px"},onClick:function(){return n(e-1)}},a.a.createElement(p.a,{size:6,corner:"b"}))))),source:'\n<div style="\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-radius: 2px;\n    display: flex;\n">\n    \x3c!-- Input --\x3e\n    <input type="text" style="\n        border-color: transparent;\n        margin-right: 4px;\n        padding: 4px;\n        width: 100px;\n    " />\n\n    \x3c!-- Buttons container --\x3e\n    <div style="\n        /* Content is centered vertically */\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    ">\n        \x3c!-- Up button --\x3e\n        <button style="\n            border-color: transparent;\n            /* Make buttons have the same height */\n            flex: 1,\n        ">\n            ...\n        </button>\n\n        \x3c!-- Down button --\x3e\n        <button style="\n            border-color: transparent;\n            /* Make buttons have the same height */\n            flex: 1,\n        ">\n            ...\n        </button>\n    </div>\n</div>\n'})),a.a.createElement(c.a,{patterns:[i.a.StepperInput]}))}},240:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(9),c=n(14),i=n(15),l=n(16);e.a=function(t){var e=t.title,n=t.children;return Object(i.a)("CSS Layout ∙ ".concat(e)),a.a.createElement(l.a,null,a.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},a.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},"Home"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement(o.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement("h1",null,e)),a.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,a.a.createElement(c.a,null)))}},241:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(26);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e=t.content,n=t.source,i=c(Object(r.useState)(!0),2),l=i[0],s=i[1];return a.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(t){return!t}))}},l?"Source":"Demo"))),a.a.createElement("div",{style:{height:"512px",position:"relative",transform:l?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:l?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},e),n&&a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:l?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},a.a.createElement(o.a,{fullHeight:!0,lang:"html",code:n}))))}},243:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n(11);e.a=function(t){var e=t.patterns;return a.a.createElement("section",null,a.a.createElement(c.a,{title:"Related patterns"}),a.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},e.map((function(t){return a.a.createElement(o.a,{key:t,pattern:t})}))))}},248:function(t,e,n){"use strict";var r=n(0),a=n.n(r);e.a=function(t){var e=t.backgroundColor,n=void 0===e?"rgba(0, 0, 0, .3)":e,r=t.size,o=void 0===r?16:r,c=t.corner,i="",l="";switch(void 0===c?"tl":c){case"t":i="0 ".concat(o,"px ").concat(o,"px ").concat(o,"px"),l="transparent transparent ".concat(n," transparent");break;case"r":i="".concat(o,"px 0 ").concat(o,"px ").concat(2*o,"px"),l="transparent transparent transparent ".concat(n);break;case"b":i="".concat(o,"px ").concat(o,"px 0 ").concat(o,"px"),l="".concat(n," transparent transparent transparent");break;case"l":i="".concat(o,"px ").concat(2*o,"px ").concat(o,"px 0"),l="transparent ".concat(n," transparent transparent");break;case"tr":i="0 ".concat(o,"px ").concat(o,"px 0"),l="transparent ".concat(n," transparent transparent");break;case"br":i="0 0 ".concat(o,"px ").concat(o,"px"),l="transparent transparent ".concat(n," transparent");break;case"bl":i="".concat(o,"px 0 0 ").concat(o,"px"),l="transparent transparent transparent ".concat(n);break;case"tl":default:i="".concat(o,"px ").concat(o,"px 0 0"),l="".concat(n," transparent transparent transparent")}return a.a.createElement("div",{style:{borderColor:l,borderStyle:"solid",borderWidth:i,height:0,width:0}})}}}]);
//# sourceMappingURL=patterns-spin-button-Details.js.map