(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,a){},132:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return g})),a.d(t,"default",(function(){return h}));var l=a(2),c=a(6),o=a(0),r=a.n(o),n=a(78),s=a(76),m=a(130),i=a.n(m),u=(a(131),a(132),a(75),function(){var e="idle",t="primary",a="Click Me",l='<span><i className="reactive-btn-spinner"></i>Loading</span>',c="Success!",n="Error!",m="",u=!1,d=!1,p=!1,g="normal",b=2e3,h=!1,v=!1,E=0,f=0,N=Object(o.useState)(e),x=N[0],w=N[1],j=Object(o.useState)(t),y=j[0],S=j[1],O=Object(o.useState)(a),k=O[0],T=O[1],C=Object(o.useState)(l),F=C[0],z=C[1],_=Object(o.useState)(c),D=_[0],L=_[1],P=Object(o.useState)(n),M=P[0],R=P[1],I=Object(o.useState)(m),H=I[0],B=I[1],J=Object(o.useState)(u),X=J[0],A=J[1],G=Object(o.useState)(d),U=G[0],V=G[1],q=Object(o.useState)(p),K=q[0],Q=q[1],W=Object(o.useState)(g),Y=W[0],Z=W[1],$=Object(o.useState)(b),ee=$[0],te=$[1],ae=Object(o.useState)(h),le=ae[0],ce=ae[1],oe=Object(o.useState)(v),re=oe[0],ne=oe[1],se=Object(o.useState)(E),me=se[0],ie=se[1],ue=Object(o.useState)(f),de=ue[0],pe=ue[1],ge=Object(o.useState)(!1),be=ge[0],he=ge[1];Object(o.useEffect)((function(){"success"!==x&&"error"!==x||setTimeout((function(){w("idle")}),2e3)}),[x]);return r.a.createElement("div",{className:"playground-component-wrapper"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"card playground__card bg-dark"},r.a.createElement("div",{className:"card__body my-auto text-center"},r.a.createElement(s.a,{buttonState:x,onClick:function(){he(!0),w("loading"),setTimeout((function(){w("success"),he(!1)}),2e3)},color:y,idleText:r.a.createElement(i.a,{jsx:""===k?a:k}),loadingText:r.a.createElement(i.a,{jsx:""===k?l:F}),successText:r.a.createElement(i.a,{jsx:""===D?c:D}),errorText:r.a.createElement(i.a,{jsx:""===M?n:M}),type:"button",className:H,style:{},outline:X,shadow:U,rounded:K,size:Y,block:le,messageDuration:ee,disabled:re,buttonRef:null,width:me?me+"px":null,height:de?de+"px":null})))),r.a.createElement("div",{className:"card shadow--lw"},r.a.createElement("div",{className:"card__body"},r.a.createElement("div",{className:"container props__container"},r.a.createElement("div",{className:"row",style:{fontSize:"13px"}},r.a.createElement("div",{className:"col col--6 bootstrap"},r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"buttonState"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control form-control-sm",id:"buttonState",value:x,onChange:function(e){w(e.target.value)},disabled:be},r.a.createElement("option",{value:"idle"},"idle"),r.a.createElement("option",{value:"loading"},"loading"),r.a.createElement("option",{value:"success"},"success"),r.a.createElement("option",{value:"error"},"error")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"idleText"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"idleText",placeholder:"Click Me",value:k,onChange:function(e){T(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"successText"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"successText",placeholder:"Success!",value:D,onChange:function(e){L(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"className"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"className",placeholder:"",value:H,onChange:function(e){B(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"shadow"),r.a.createElement("div",{className:"col-sm-6 align-self-end"},r.a.createElement("input",{type:"checkbox",id:"shadow",checked:U,onChange:function(e){V(!0===e.target.checked)},className:"z-switch"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"outline"),r.a.createElement("div",{className:"col-sm-6 align-self-end"},r.a.createElement("input",{type:"checkbox",id:"outline",checked:X,onChange:function(e){A(!0===e.target.checked)},className:"z-switch"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"messageDuration"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"number",className:"form-control form-control-sm",id:"messageDuration",value:ee,onChange:function(e){parseInt(e.target.value)>=0&&te(e.target.value)},placeholder:"2000"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"width"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",id:"width",value:me,onChange:function(e){ie(e.target.value)},placeholder:"null"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"px"))))))),r.a.createElement("div",{className:"col col--6 bootstrap"},r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"color"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control form-control-sm",id:"color",value:y,onChange:function(e){S(e.target.value)}},r.a.createElement("option",{value:"primary"},"Primary"),r.a.createElement("option",{value:"dark"},"Dark"),r.a.createElement("option",{value:"light"},"Light"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"red"},"Red")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"loadingText"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"loadingText",placeholder:"Loading",value:F,onChange:function(e){z(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"errorText"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"errorText",placeholder:"Error!",value:M,onChange:function(e){setErrorText(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"size"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control form-control-sm",id:"size",value:Y,onChange:function(e){Z(e.target.value)}},r.a.createElement("option",{value:"small"},"small"),r.a.createElement("option",{value:"normal"},"normal"),r.a.createElement("option",{value:"large"},"large")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"rounded"),r.a.createElement("div",{className:"col-sm-6 align-self-end"},r.a.createElement("input",{type:"checkbox",id:"rounded",checked:K,onChange:function(e){Q(!0===e.target.checked)},className:"z-switch"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"block"),r.a.createElement("div",{className:"col-sm-6 align-self-end"},r.a.createElement("input",{type:"checkbox",id:"block",checked:le,onChange:function(e){ce(!0===e.target.checked)},className:"z-switch"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"disabled"),r.a.createElement("div",{className:"col-sm-6 align-self-end"},r.a.createElement("input",{type:"checkbox",id:"disabled",checked:re,onChange:function(e){ne(!0===e.target.checked)},className:"z-switch"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"height"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",className:"form-control",id:"height",value:de,onChange:function(e){pe(e.target.value)},placeholder:"null"}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"px")))))))))),r.a.createElement("div",{className:"card__footer text-center"},r.a.createElement(s.a,{size:"large",idleText:"Reset All",color:"dark",height:"40px",onClick:function(){w(e),S(e),T(a),z(l),L(c),R(n),B(m),Z(g),V(d),Q(p),A(u),ce(h),te(b),ne(v),ie(E),pe(f)}}))))}),d={id:"playground",title:"Playground"},p={unversionedId:"playground",id:"playground",isDocsHomePage:!1,title:"Playground",description:"This section is a work in progress.",source:"@site/docs\\playground.md",slug:"/playground",permalink:"/reactive-button/docs/playground",version:"current",sidebar:"someSidebar",previous:{title:"Usage",permalink:"/reactive-button/docs/usage"}},g=[{value:"Interactive Playground",id:"interactive-playground",children:[]}],b={rightToc:g};function h(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(l.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(l.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(n.b)("path",Object(l.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(n.b)("div",Object(l.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(n.b)("p",null,"Let's explore the different options that ",Object(n.b)("span",{className:"keyword"},"React Button")," offers. "),Object(n.b)("h2",{id:"interactive-playground"},"Interactive Playground"),Object(n.b)(u,{mdxType:"Playground"}))}h.isMDXComponent=!0}}]);