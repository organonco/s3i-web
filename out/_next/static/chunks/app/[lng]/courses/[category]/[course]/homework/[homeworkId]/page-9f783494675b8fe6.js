(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3832],{23030:function(r,e,i){Promise.resolve().then(i.bind(i,5518))},5518:function(r,e,i){"use strict";i.r(e),i.d(e,{default:function(){return E}});var t=i(57437),s=i(20763),a=i(12352),o=i(28874),n=i(2650),l=i(54136),c=i(2265),d=i(57042),u=i(95600),m=i(99538),v=i(28702),f=i(87927),h=i(35843),k=i(26520),x=i(25702);function p(r){return(0,x.Z)("MuiCircularProgress",r)}(0,k.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let Z=["className","color","disableShrink","size","style","thickness","value","variant"],g=r=>r,b,y,P,j,w=(0,m.F4)(b||(b=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,m.F4)(y||(y=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),C=r=>{let{classes:e,variant:i,color:t,disableShrink:s}=r,a={root:["root",i,`color${(0,v.Z)(t)}`],svg:["svg"],circle:["circle",`circle${(0,v.Z)(i)}`,s&&"circleDisableShrink"]};return(0,u.Z)(a,p,e)},_=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:i}=r;return[e.root,e[i.variant],e[`color${(0,v.Z)(i.color)}`]]}})(({ownerState:r,theme:e})=>(0,l.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>"indeterminate"===r.variant&&(0,m.iv)(P||(P=g`
      animation: ${0} 1.4s linear infinite;
    `),w)),D=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),M=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:i}=r;return[e.circle,e[`circle${(0,v.Z)(i.variant)}`],i.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>(0,l.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,m.iv)(j||(j=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)),N=c.forwardRef(function(r,e){let i=(0,f.Z)({props:r,name:"MuiCircularProgress"}),{className:s,color:a="primary",disableShrink:o=!1,size:c=40,style:u,thickness:m=3.6,value:v=0,variant:h="indeterminate"}=i,k=(0,n.Z)(i,Z),x=(0,l.Z)({},i,{color:a,disableShrink:o,size:c,thickness:m,value:v,variant:h}),p=C(x),g={},b={},y={};if("determinate"===h){let r=2*Math.PI*((44-m)/2);g.strokeDasharray=r.toFixed(3),y["aria-valuenow"]=Math.round(v),g.strokeDashoffset=`${((100-v)/100*r).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,t.jsx)(_,(0,l.Z)({className:(0,d.Z)(p.root,s),style:(0,l.Z)({width:c,height:c},b,u),ownerState:x,ref:e,role:"progressbar"},y,k,{children:(0,t.jsx)(D,{className:p.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,t.jsx)(M,{className:p.circle,style:g,ownerState:x,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})}))});var $=i(43226),R=i(33968);function E(r){var e,i,n;let{params:{lng:l,homeworkId:d}}=r,{homework:u,fetchCourseHomeworkDetails:m,loadingCourseHomework:v}=(0,a.z)();return(0,c.useEffect)(()=>m(d),[d]),(0,t.jsx)(o.ZP,{children:v?(0,t.jsx)(N,{}):(0,t.jsxs)(o.ZP,{container:!0,children:[(0,t.jsxs)(o.ZP,{container:!0,item:!0,direction:"row",lg:12,alignItems:"center",children:[(0,t.jsx)($.Z,{ml:1,children:(0,R.t)("texts.your_homework")}),(0,t.jsx)(s.V,{url:null==u?void 0:null===(e=u.submission)||void 0===e?void 0:e.file_url,text:!0})]}),(null==u?void 0:null===(i=u.submission)||void 0===i?void 0:i.feedback)&&(0,t.jsxs)(o.ZP,{item:!0,md:12,my:4,children:[(0,t.jsx)($.Z,{variant:"h3",color:"primary.main",mb:2,children:(0,R.t)("texts.professor_feedback")+": "}),(0,t.jsx)($.Z,{variant:"h6",children:null==u?void 0:null===(n=u.submission)||void 0===n?void 0:n.feedback})]})]})})}}},function(r){r.O(0,[6990,4125,8874,3970,3698,3705,1986,6685,9450,2136,5270,640,2971,596,1744],function(){return r(r.s=23030)}),_N_E=r.O()}]);