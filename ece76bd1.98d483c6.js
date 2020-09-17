(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(0),a=n.n(o),i=n(70),c=n(77),s=n(71),l=n(69),b=n(72),d=n(64),v=n.n(d),u=n(80);const p=[{title:"Reactive",imageUrl:"img/reactive.svg",description:a.a.createElement(a.a.Fragment,null,"Replacing traditional button with reactive behaviour")},{title:"Customizable",imageUrl:"img/customizable.svg",description:a.a.createElement(a.a.Fragment,null,"Comes with proper customization option.")},{title:"Progress Indicator",imageUrl:"img/progress.svg",description:a.a.createElement(a.a.Fragment,null,"Knows what is happening behind your button click.")}];function g({imageUrl:t,title:e,description:n}){const r=Object(b.a)(t);return a.a.createElement("div",{className:Object(i.a)("col col--4 text--center",v.a.feature)},r&&a.a.createElement("div",{className:"text--center"},a.a.createElement("img",{className:v.a.featureImage,src:r,alt:e})),a.a.createElement("h3",null,e),a.a.createElement("p",null,n))}e.default=function(){const t=Object(l.a)(),{siteConfig:e={}}=t;return a.a.createElement(c.a,{title:""+e.title,description:"A React Button component that thinks like React."},a.a.createElement("header",{className:Object(i.a)("hero ",v.a.heroBanner)},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"hero__title"},e.title),a.a.createElement("p",{className:"hero__subtitle"},e.tagline),a.a.createElement("div",{className:v.a.buttons},a.a.createElement(s.a,{className:Object(i.a)("",v.a.getStarted),to:Object(b.a)("docs/")},a.a.createElement(u.a,{color:"dark",size:"large",idleLabel:"Get Started\xa0\xa0\u2192"}))))),a.a.createElement("main",null,p&&p.length>0&&a.a.createElement("section",{className:v.a.features},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},p.map((t,e)=>a.a.createElement(g,Object(r.a)({key:e},t))))))))}},80:function(t,e,n){"use strict";var r=n(0),o=n.n(r);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".reactive-btn {\n\t--reactive-button-min-width: 115px;\n\t--reactive-button-height: 20px;\n\t--reactive-button-font-size: 14px;\n\t--reactive-button-font-weight: 400;\n\t--reactive-button-text-color: #FFFFFF;\n\t--reactive-progress-color: rgba(0, 0, 0, .15);\n\n\t--reactive-button-primary-color: rgba(88, 103, 221, 1);\n\t--reactive-button-dark-color: rgba(66, 78, 106, 1);\n\t--reactive-button-light-color: rgba(245, 245, 245, 1);\n\t--reactive-button-green-color: rgba(52, 191, 163, 1);\n\t--reactive-button-red-color: rgba(244, 81, 108, 1);\n\n\t--reactive-progress-outline-primary-color: rgba(88, 103, 221, .3);\n\t--reactive-progress-outline-dark-color: rgba(66, 78, 106, .3);\n\t--reactive-progress-outline-light-color: rgba(245, 245, 245, .3);\n\t--reactive-progress-outline-green-color: rgba(52, 191, 163, .3);\n\t--reactive-progress-outline-red-color: rgba(244, 81, 108, .3);\n\t\n}\n\n.reactive-btn {\n\tmin-width: var(--reactive-button-min-width);\n\tdisplay: inline-block;\n\tmargin-bottom: 0;\n\tpadding: 6px 14px 6px;\n\tfont-size: var(--reactive-button-font-size);\n\tfont-weight: var(--reactive-button-font-weight);\n\tline-height: var(--reactive-button-height);\n\tcolor: var(--reactive-button-text-color);\n\ttext-align: center;\n\ttext-decoration: none;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tbackground-color: var(--reactive-button-primary-color);\n\tborder: none;\n\t-webkit-border-radius: 0;\n\t-moz-border-radius: 0;\n\tborder-radius: 0;\n\t-webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-webkit-transition: 0.1s;\n\t-moz-transition: 0.1s;\n\ttransition: 0.1s;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\toutline: none;\n}\n\n.reactive-btn.outline {\n\tbackground-color: transparent !important;\n}\n\n.reactive-btn:disabled {\n\tcursor: default;\n}\n\n.reactive-btn:hover:not(:disabled):not(.disabled) {\n\topacity: .85;\n\t-webkit-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tmargin-top: -2px;\n\tpadding: 6px 14px 8px;\n}\n\n.reactive-btn:active:not(:disabled):not(.disabled) {\n\t-webkit-box-shadow: none;\n\t-moz-box-shadow: none;\n\tbox-shadow: none;\n\tmargin-top: 2px;\n\tpadding: 6px 14px 4px;\n}\n\n.reactive-btn:focus {\n\toutline: none;\n}\n\n.reactive-btn.rounded {\n\tborder-radius: 16px;\n}\n\n.reactive-btn.disabled {\n\topacity: .7;\n}\n\n.reactive-btn .content {\n\tposition: relative;\n}\n\n.reactive-btn .progress {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--reactive-progress-color);\n\ttransform: translateX(-100%);\n\ttransition: transform .2s ease;\n}\n\n.reactive-btn:not(.idle) .progress {\n\ttransform: translateX(0%);\n\ttransition: transform 3s cubic-bezier(0.59, 0.01, 0.41, 0.99);\n}\n\n/* button spinner */\n.reactive-btn .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 5px);\n\theight: calc(var(--reactive-button-height) - 5px);\n\tmargin-right: 3px;\n\tborder-top-color: inherit;\n\tborder-left-color: inherit;\n\tanimation: reactive-spinner 400ms linear infinite;\n\tborder-bottom-color: transparent;\n\tborder-right-color: transparent;\n\tborder-style: solid;\n\tborder-width: 2px;\n\tborder-radius: 50%;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n.reactive-btn .drbll1:after {\n\tcontent: '.';\n\tanimation: dots 1s steps(5, end) infinite;\n}\n\n/* success state */\n/* .reactive-btn.success {\n\topacity: .7;\n} */\n\n\n/* error state */\n.reactive-btn.error.outline {\n\tcolor: white;\n}\n\n.reactive-btn.error .progress {\n\t/* opacity: .8; */\n\tbackground: #f92672 !important;\n}\n\n.reactive-btn.small .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 7px);\n\theight: calc(var(--reactive-button-height) - 7px);\n}\n\n.reactive-btn.small {\n\tfont-size: calc(var(--reactive-button-font-size) - 2px);\n\tmin-width: calc(var(--reactive-button-min-width) - 25px);\n\tline-height: calc(var(--reactive-button-height) - 5px);\n}\n\n.reactive-btn.large {\n\tfont-size: calc(var(--reactive-button-font-size) + 2px);\n\tmin-width: calc(var(--reactive-button-min-width) + 25px);\n\tline-height: calc(var(--reactive-button-height) + 5px);\n}\n\n.reactive-btn.large .rdbs1 {\n\twidth: calc(var(--reactive-button-height) - 1px);\n\theight: calc(var(--reactive-button-height) - 1px);\n}\n\n.reactive-btn.block {\n\tmin-width: 100%;\n}\n\n\n\n/* primary button starts */\n.reactive-btn.primary.outline {\n\tborder-color: var(--reactive-button-primary-color);\n\tcolor: var(--reactive-button-primary-color);\n\tborder: 1px solid var(--reactive-button-primary-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-primary-color) !important;\n}\n\n.reactive-btn.primary.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-primary-color) !important;\n}\n\n/* primary button ends */\n\n\n\n/* dark button starts */\n\n.reactive-btn.dark {\n\tbackground: var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline {\n\tborder-color: var(--reactive-button-dark-color);\n\tcolor: var(--reactive-button-dark-color);\n\tborder: 1px solid var(--reactive-button-dark-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-dark-color) !important;\n}\n\n.reactive-btn.dark.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-dark-color) !important;\n}\n\n/* dark button ends */\n\n\n\n\n/* light button starts */\n\n.reactive-btn.light {\n\tbackground: var(--reactive-button-light-color);\n\tcolor: #000000;\n}\n\n.reactive-btn.light.outline {\n\tborder-color: var(--reactive-button-light-color);\n\tcolor: var(--reactive-button-light-color);\n\tborder: 1px solid var(--reactive-button-light-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-light-color) !important;\n}\n\n.reactive-btn.light.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-light-color) !important;\n}\n\n/* light button ends */\n\n\n\n\n/* green button starts */\n.reactive-btn.green {\n\tbackground: var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline {\n\tborder-color: var(--reactive-button-green-color);\n\tcolor: var(--reactive-button-green-color);\n\tborder: 1px solid var(--reactive-button-green-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-green-color) !important;\n}\n\n.reactive-btn.green.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-green-color) !important;\n}\n\n/* green button ends */\n\n\n\n/* red button starts */\n.reactive-btn.red {\n\tbackground: var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline {\n\tborder-color: var(--reactive-button-red-color);\n\tcolor: var(--reactive-button-red-color);\n\tborder: 1px solid var(--reactive-button-red-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-red-color) !important;\n}\n\n.reactive-btn.red.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-red-color) !important;\n}\n\n/* red button ends */\n\n\n\n@keyframes reactive-spinner {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes dots {\n\n\t0%,\n\t20% {\n\t\tcolor: rgba(0, 0, 0, 0);\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t40% {\n\t\tcolor: white;\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t60% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t80%,\n\t100% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 white;\n\t}\n}"),e.a=function(t){var e,n=t.type?t.type:"button",i=!!t.outline,c=!!t.shadow,s=t.idleLabel?t.idleLabel:"Button",l=t.loadingLabel?t.loadingLabel:'<span class="drbll1"><i class="rdbs1"></i>Loading</span>',b=t.successLabel?t.successLabel:"Success!",d=t.errorLabel?t.errorLabel:"Error!",v="reactive-btn".concat(t.className?" "+t.className:"").concat(t.block?" block":""),u=t.style?t.style:null,p=!!t.rounded,g=t.color?t.color:"primary",h=t.size?t.size:"normal",m=a(Object(r.useState)(t.buttonState?t.buttonState:"idle"),2),x=m[0],w=m[1],f=a(Object(r.useState)(!1),2),k=f[0],y=f[1];return Object(r.useEffect)((function(){void 0!==t.buttonState&&(w(t.buttonState),"success"!==t.buttonState&&"error"!==t.buttonState||setTimeout((function(){y(!1),(void 0===t.autoHideMessage||t.autoHideMessage)&&w("idle")}),t.messageDuration?t.messageDuration:1e3))}),[t.buttonState,t.messageDuration,t.autoHideMessage]),o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{disabled:!0===k||t.disabled,type:n,className:"".concat(v," ").concat(x," ").concat(g," ").concat(h).concat(i?" outline":"").concat(p?" rounded":"").concat(c?" shadow":"").concat(t.disabled?" disabled":""),onClick:function(){void 0!==t.onClick&&(k||("idle"!==x?(w("idle"),setTimeout((function(){y(!0),t.onClick()}),1e3)):(y(!0),t.onClick())))},style:u},o.a.createElement("span",{className:"progress"}),o.a.createElement("span",{className:"content",dangerouslySetInnerHTML:{__html:(e=x,"idle"===e?s:"loading"===e?l:"success"===e?b:"error"===e?d:s)}})))}}}]);