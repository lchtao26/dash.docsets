(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{124:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n(243),c=n(1),l=n(240),s=n(247),d=n(241),p=n(242),u=n(248);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=m(Object(r.useState)(1),2),t=e[0],n=e[1],x=function(e){var r=e.index,o=e.title,i=e.children,c=r===t;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{borderBottom:"1px solid rgba(0, 0, 0, 0.3)"}},a.a.createElement("div",{style:{alignItems:"center",cursor:"pointer",display:"flex",padding:"16px"},onClick:function(){return n(c?-1:r)}},a.a.createElement("div",{style:{marginRight:"12px"}},a.a.createElement(u.a,{size:8,corner:c?"b":"r"})),a.a.createElement("div",{style:{flex:1}},o)),a.a.createElement("div",{style:{borderTop:"1px solid rgba(0, 0, 0, 0.3)",display:c?"block":"none",padding:"16px"}},i)))};return a.a.createElement(l.a,{title:"Accordion"},a.a.createElement(o.Helmet,null,a.a.createElement("meta",{name:"description",content:"Create an accordion with CSS flexbox"}),a.a.createElement("meta",{name:"keywords",content:"css accordion, css flexbox"})),a.a.createElement("div",{className:"p-8 pb-20"},a.a.createElement(d.a,{content:a.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},a.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderBottomColor:"transparent",borderRadius:"4px",width:"60%"}},a.a.createElement(x,{index:0,title:a.a.createElement("div",{style:{width:"40%"}},a.a.createElement(p.a,null))},a.a.createElement("div",{style:{marginBottom:"16px"}},a.a.createElement(s.a,{numberOfBlocks:10}))),a.a.createElement(x,{index:1,title:a.a.createElement("div",{style:{width:"80%"}},a.a.createElement(p.a,null))},a.a.createElement("div",{style:{marginBottom:"16px"}},a.a.createElement(s.a,{numberOfBlocks:15}))),a.a.createElement(x,{index:2,title:a.a.createElement("div",{style:{width:"60%"}},a.a.createElement(p.a,null))},a.a.createElement("div",{style:{marginBottom:"16px"}},a.a.createElement(s.a,{numberOfBlocks:10}))))),source:'\n\x3c!-- Container --\x3e\n<div style="\n    /* Border */\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-bottom-color: transparent;\n    border-radius: 4px;\n">\n    \x3c!-- Each accordion item --\x3e\n    <div style="\n        border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    ">\n        \x3c!-- Heading --\x3e\n        <div style="\n            /* Center the content horizontally */\n            align-items: center;\n            display: flex;\n\n            cursor: pointer;\n            padding: 16px;\n        ">\n            \x3c!-- The toggle icon --\x3e\n            <div style="margin-right: 12px;">...</div>\n\n            \x3c!-- The title --\x3e\n            <div style="\n                flex: 1; /* Take remaining width */\n            ">\n                ...\n            </div>\n        </div>\n\n        \x3c!-- The content --\x3e\n        <div style="\n            /* For selected item */\n            display: block;\n\n            /* For not selected item */\n            display: none;\n\n            border-top: 1px solid rgba(0, 0, 0, 0.3);\n            padding: 16px;\n        ">\n            ...\n        </div>\n    </div>\n\n    \x3c!-- Repeat other item --\x3e\n    ...\n</div>\n\n\n<div style="\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n">\n    \x3c!-- Heading --\x3e\n    <div style="\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    ">\n        \x3c!-- Question --\x3e\n        ...\n\n        \x3c!-- The toggle icon sticks to the right --\x3e\n        ...\n    </div>\n\n    \x3c!-- Answer --\x3e\n</div>\n'})),a.a.createElement(i.a,{patterns:[c.a.QuestionsAndAnswers]}))}},240:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(9),i=n(14),c=n(15),l=n(16);t.a=function(e){var t=e.title,n=e.children;return Object(c.a)("CSS Layout ∙ ".concat(t)),a.a.createElement(l.a,null,a.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},a.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},"Home"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement(o.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,a.a.createElement(i.a,null)))}},241:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(26);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.content,n=e.source,c=i(Object(r.useState)(!0),2),l=c[0],s=c[1];return a.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},l?"Source":"Demo"))),a.a.createElement("div",{style:{height:"512px",position:"relative",transform:l?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:l?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),n&&a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:l?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},a.a.createElement(o.a,{fullHeight:!0,lang:"html",code:n}))))}},242:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.height,n=void 0===t?8:t;return a.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(n,"px"),width:"100%"}})}},243:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),i=n(11);t.a=function(e){var t=e.patterns;return a.a.createElement("section",null,a.a.createElement(i.a,{title:"Related patterns"}),a.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},t.map((function(e){return a.a.createElement(o.a,{key:e,pattern:e})}))))}},246:function(e,t,n){"use strict";t.a=function(e,t){return e+Math.round(Math.random()*(t-e))}},247:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(246);t.a=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, 0.3)":t,r=e.blockHeight,i=void 0===r?4:r,c=e.justify,l=void 0===c?"start":c,s=e.numberOfBlocks,d=void 0===s?1:s;return a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:l,width:"100%"}},Array(d).fill(0).map((function(e,t){var r=Object(o.a)(1,5);return a.a.createElement("div",{key:t,style:{marginBottom:"8px",marginRight:"8px",width:"".concat(10*r,"%")}},a.a.createElement("div",{style:{backgroundColor:n,borderRadius:"9999px",height:"".concat(i,"px"),width:"100%"}}))})))}},248:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, .3)":t,r=e.size,o=void 0===r?16:r,i=e.corner,c="",l="";switch(void 0===i?"tl":i){case"t":c="0 ".concat(o,"px ").concat(o,"px ").concat(o,"px"),l="transparent transparent ".concat(n," transparent");break;case"r":c="".concat(o,"px 0 ").concat(o,"px ").concat(2*o,"px"),l="transparent transparent transparent ".concat(n);break;case"b":c="".concat(o,"px ").concat(o,"px 0 ").concat(o,"px"),l="".concat(n," transparent transparent transparent");break;case"l":c="".concat(o,"px ").concat(2*o,"px ").concat(o,"px 0"),l="transparent ".concat(n," transparent transparent");break;case"tr":c="0 ".concat(o,"px ").concat(o,"px 0"),l="transparent ".concat(n," transparent transparent");break;case"br":c="0 0 ".concat(o,"px ").concat(o,"px"),l="transparent transparent ".concat(n," transparent");break;case"bl":c="".concat(o,"px 0 0 ").concat(o,"px"),l="transparent transparent transparent ".concat(n);break;case"tl":default:c="".concat(o,"px ").concat(o,"px 0 0"),l="".concat(n," transparent transparent transparent")}return a.a.createElement("div",{style:{borderColor:l,borderStyle:"solid",borderWidth:c,height:0,width:0}})}}}]);
//# sourceMappingURL=patterns-accordion-Details.js.map