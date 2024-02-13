"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{8562:function(e,t,i){i.d(t,{D:function(){return l}});var n=i(57437),r=i(25577);let l=e=>(0,n.jsx)(r.Z,{padding:2,sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",alignItems:"center",cursor:"pointer","&:hover":{transform:"scale3d(1.1, 1.1, 1)"},backgroundColor:e.backgroundColor?e.backgroundColor:"",borderRadius:5,borderColor:"#efefef",borderWidth:2},children:e.children})},9827:function(e,t,i){i.d(t,{p:function(){return a}});var n=i(57437),r=i(43226),l=i(16691),s=i.n(l),o=i(8562);let a=e=>(0,n.jsxs)(o.D,{children:[(0,n.jsx)("div",{style:{width:"100%",height:50,position:"relative"},children:(0,n.jsx)(s(),{alt:"Mountains",src:e.icon,layout:"fill",objectFit:"contain"})}),(0,n.jsx)(r.Z,{variant:"caption",children:e.name})]})},9128:function(e,t,i){i.d(t,{P:function(){return a}});var n=i(57437),r=i(25577),l=i(43226),s=i(60640),o=i(8562);let a=e=>(0,n.jsxs)(o.D,{backgroundColor:"background.paper",children:[(0,n.jsx)("div",{style:{width:"100%",position:"relative",objectFit:"cover",height:"100%"},children:(0,n.jsx)(s.Yo,{imageURL:e.imageURL})}),(0,n.jsxs)(r.Z,{sx:{width:"100%",justifyContent:"space-between",display:"flex",flexDirection:"column",gap:1,marginTop:3,marginX:4},children:[(0,n.jsxs)(r.Z,{sx:{justifyContent:"space-between",display:"flex",flexDirection:"row",gap:1},children:[(0,n.jsx)(l.Z,{color:"primary",fontWeight:"bold",fontSize:18,textAlign:"right",children:e.title}),!e.isSubscribed&&(0,n.jsx)(l.Z,{variant:"caption",color:"white",sx:{backgroundColor:"#2D6276",borderRadius:5,paddingY:1,paddingX:2,width:100,height:40},children:" سجل الآن "})]}),(0,n.jsx)(l.Z,{color:"primary.dark",fontWeight:"bold",fontSize:12,textAlign:"right",textOverflow:"ellipsis",noWrap:!0,children:e.subTitle})]})]})},20763:function(e,t,i){i.d(t,{V:function(){return o}});var n=i(57437),r=i(49050),l=i(33968),s=i(60640);let o=e=>{let t=e=>{var t=document.createElement("a");t.download="name",t.href=e,t.setAttribute("target","_blank"),t.click(),t.remove()};return(0,n.jsx)(n.Fragment,{children:e.text?(0,n.jsxs)(r.Z,{onClick:()=>t(e.url),children:[(0,l.t)("buttons.download")," "]}):(0,n.jsx)(s.Sn,{onClick:()=>t(e.url),title:(0,l.t)("buttons.download")})})}},60640:function(e,t,i){i.d(t,{O_:function(){return j},xD:function(){return M},$_:function(){return H},h4:function(){return eq},j_:function(){return eO},sB:function(){return c},Sn:function(){return g},P$:function(){return y},m6:function(){return F},Yo:function(){return L},PA:function(){return eM},Qr:function(){return eL},tH:function(){return eU.t},ue:function(){return eB},cq:function(){return eS}});var n=i(57437),r=i(81344),l=i(82057),s=i(15873),o=i(28874),a=i(43226),d=i(58768);let c=e=>(0,n.jsxs)(l.Z,{disableGutters:!0,children:[(0,n.jsx)(s.Z,{expandIcon:(0,n.jsx)(r.Z,{color:"primary"}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,n.jsxs)(o.ZP,{container:!0,gap:2,alignItems:"center",sx:{color:"primary.main"},children:[e.icon,(0,n.jsxs)(a.Z,{variant:"h5",color:"primary",children:[" ",e.title]})]})}),(0,n.jsx)(d.Z,{children:e.children})]});var u=i(25577),h=i(16691),x=i.n(h);let j=e=>(0,n.jsxs)(u.Z,{padding:2,sx:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",alignItems:"center"},children:[(0,n.jsx)("div",{style:{width:"100%",height:130,position:"relative",marginBottom:40},children:(0,n.jsx)(x(),{alt:"Mountains",src:e.icon,layout:"fill",objectFit:"contain"})}),(0,n.jsx)(a.Z,{variant:"h5",sx:{fontWeight:"bold"},color:"primary.dark",children:e.name})]});i(8562);var p=i(49050),m=i(2265);let g=e=>(0,n.jsx)(p.Z,{variant:"contained",fullWidth:!0,sx:{mt:2},...e,children:e.title});i(9827);var b=i(2582),v=i(9812),f=i(51469),Z=i(56230);let y=e=>{var t;let[i,r]=(0,Z.U$)(e),l=null!==(t=r.value)&&void 0!==t?t:[];return(0,n.jsx)(u.Z,{sx:{width:"100%"},children:(0,n.jsx)(b.Z,{children:e.options.map(t=>(0,n.jsx)(v.Z,{color:l.includes(t.id)?"red":"text.primary",control:(0,n.jsx)(f.Z,{checked:l.includes(t.id)}),...e,...i,label:t.text,value:t.id},t.id))})})};i(9128);var _=i(86373),w=i(23894),C=i(3850),k=i(54719),P=i(85e3),I=i(60108),A=i(20505),R=i(95851),q=i(33968),D=i(24033),S=i(20763),O=i(12352);let T=e=>{var t;let{courseDetails:i,courseItem:r}=e,l=null===(t=r.object.submission)||void 0===t?void 0:t.has_feedback,{push:s}=(0,D.useRouter)(),[d,c]=(0,m.useState)(null),{uploadFile:u}=(0,O.z)();return(0,n.jsx)(o.ZP,{container:!0,mt:1,children:l?(0,n.jsx)(g,{onClick:()=>s(w.v.courses.homework(i.category.id,i.id,r.id).url),title:(0,q.t)("buttons.view_feedback")}):(0,n.jsxs)(o.ZP,{container:!0,gap:2,children:[!d&&(0,n.jsxs)(p.Z,{variant:"contained",component:"label",fullWidth:!0,color:"primary",disabled:!d,children:["اختيار الملف",(0,n.jsx)("input",{onChange:e=>{let{target:t}=e;c(t.files[0]),console.log(t.files[0].name)},type:"file",hidden:!0})]}),d&&(0,n.jsxs)(a.Z,{variant:"caption",color:"primary.main",children:[(0,n.jsx)(C.Z,{}),d.name]}),d&&(0,n.jsx)(p.Z,{variant:"contained",component:"label",fullWidth:!0,onClick:()=>u(r.id,null!=d?d:{}),disabled:null===d,children:(0,q.t)("buttons.upload")})]})})},E={video:(0,n.jsx)(R.Z,{}),meeting:(0,n.jsx)(I.Z,{}),text:(0,n.jsx)(P.Z,{}),multiple_choice:(0,n.jsx)(k.Z,{}),homework:(0,n.jsx)(A.Z,{}),file:(0,n.jsx)(C.Z,{})},M=e=>{let{push:t}=(0,D.useRouter)(),i=e.courseItem.type==_.MR.QUIZ?e.courseItem.object.type:e.courseItem.type,r=()=>{window.open(e.courseItem.url)};(0,D.usePathname)();let l=(0,D.useSearchParams)();(0,m.useCallback)((e,t)=>{let i=new URLSearchParams(l.toString());return i.set(e,t),i.toString()},[l]);let s=()=>{var i;let n=null!==(i=e.courseItem.object.url)&&void 0!==i?i:"",r=n.indexOf("v="),l="";if(-1!==r){let e=r+2,t=n.indexOf("&",e);l=-1!==t?n.substring(e,t):n.substring(e)}let s=w.v.courses.video_player(e.courseDetails.category.id,e.courseDetails.id,l).url;t(s)},d=()=>{var i;return t(w.v.courses.quiz(e.courseDetails.category.id,e.courseDetails.id,null===(i=e.courseItem)||void 0===i?void 0:i.id).url)};return(0,n.jsx)(n.Fragment,{children:"section"==e.courseItem.type?(0,n.jsxs)(a.Z,{variant:"h4",textAlign:"center",color:"primary.dark",my:2,children:[" ",e.courseItem.object.name]}):(0,n.jsx)(o.ZP,{sx:{paddingX:20},children:(0,n.jsxs)(c,{title:(0,q.t)("courseItemTypes."+i),icon:E[i],children:[(0,n.jsxs)(a.Z,{style:{textAlign:"center",marginBottom:10},children:[" ",e.courseItem.object.name," "]}),(()=>{switch(i){case _.MR.FILE:return(0,n.jsx)(S.V,{url:e.courseItem.object.file_url});case _.MR.MEETING:var t,l,o,c,u,h,x,j,p;return(0,n.jsxs)(n.Fragment,{children:[(null===(l=e.courseItem)||void 0===l?void 0:null===(t=l.object)||void 0===t?void 0:t.date)!=null?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{children:null===(c=e.courseItem)||void 0===c?void 0:null===(o=c.object)||void 0===o?void 0:o.time}),(0,n.jsx)(a.Z,{children:null===(h=e.courseItem)||void 0===h?void 0:null===(u=h.object)||void 0===u?void 0:u.date})]}):(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels.meeting_not_set")}),(0,n.jsx)(eB,{handleClick:r,title:null===(x=e.courseItem)||void 0===x?void 0:x.object.name,date:null===(j=e.courseItem)||void 0===j?void 0:j.object.date,time:null===(p=e.courseItem)||void 0===p?void 0:p.object.time})]});case _.MR.VIDEO:return(0,n.jsx)(g,{onClick:s,title:(0,q.t)("buttons.open_video")});case _.MR.MULTIPLE:return(0,n.jsxs)(n.Fragment,{children:[e.courseItem.object.is_submitted?(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels.quiz_submitted")}):e.courseItem.object.time_limit?(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels.quiz_time_limit")+e.courseItem.object.time_limit+(0,q.t)("labels.minute")}):(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels_no_time_limit")}),(0,n.jsx)(g,{onClick:d,title:e.courseItem.object.is_submitted?(0,q.t)("buttons.view_feedback"):(0,q.t)("buttons.open_multiple")})]});case _.MR.TEXT:return(0,n.jsxs)(n.Fragment,{children:[e.courseItem.object.is_submitted?null:(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels.file_submitted")}),(0,n.jsx)(g,{onClick:d,title:e.courseItem.object.is_submitted?(0,q.t)("buttons.view_feedback"):(0,q.t)("buttons.open_text")})]});case _.MR.HOMEWORK:return(0,n.jsxs)(n.Fragment,{children:[null==e.courseItem.object.submission?null:(0,n.jsx)(a.Z,{style:{textAlign:"center"},children:(0,q.t)("labels.file_submitted")}),(0,n.jsx)(T,{courseDetails:e.courseDetails,courseItem:e.courseItem})]})}})()]})})})};var W=i(92750),z=i(95306),K=i(74124);let F=e=>{let[t,i]=(0,Z.U$)(e),{setFieldValue:r}=(0,Z.u6)();return(0,n.jsx)(K._,{dateAdapter:W.y,children:(0,n.jsx)(z.M,{sx:{width:"100%"},...e,...t,onChange:e=>{r(t.name,e.toString())}})})},L=e=>(0,n.jsx)(x(),{src:e.imageURL,alt:"",layout:"fill",objectFit:"cover",style:{borderTopLeftRadius:10,borderTopRightRadius:10}});var U=i(68295),B=i(82448),V=i(55037),Y=i(85945),G=i(77160),N=i(61396),X=i.n(N);let $=e=>(0,n.jsx)(a.Z,{variant:"body1",color:"primary.light",children:(0,q.t)("pages.".concat(e.title))}),J=e=>{let{title:t,icon:i}=e;return(0,n.jsxs)(o.ZP,{container:!0,gap:2,children:[i,(0,n.jsx)(a.Z,{color:"secondary.main",variant:"subtitle2",children:t})]})},H=e=>(0,n.jsx)(u.Z,{sx:{backgroundColor:"primary.dark",width:"100%",height:130,alignSelf:"end",padding:3,paddingInline:10},children:(0,n.jsxs)(o.ZP,{container:!0,item:!0,lg:12,children:[(0,n.jsxs)(o.ZP,{item:!0,container:!0,md:4,children:[(0,n.jsxs)(o.ZP,{item:!0,md:6,children:[(0,n.jsxs)(X(),{href:w.v.home.url,children:["   ",(0,n.jsx)($,{title:w.v.home.title})]}),(0,n.jsxs)(X(),{href:w.v.courses.index.url,children:["   ",(0,n.jsx)($,{title:w.v.courses.index.title})]}),(0,n.jsxs)(X(),{href:w.v.teachers.url,children:[" ",(0,n.jsx)($,{title:w.v.teachers.title})]})]}),(0,n.jsxs)(o.ZP,{item:!0,md:6,children:[(0,n.jsxs)(X(),{href:w.v.partners.url,children:["  ",(0,n.jsx)($,{title:w.v.partners.title})]}),(0,n.jsxs)(X(),{href:w.v.about_us.url,children:["   ",(0,n.jsx)($,{title:w.v.about_us.title})]})]})]}),(0,n.jsxs)(o.ZP,{item:!0,container:!0,direction:"column",md:4,gap:2,children:[(0,n.jsx)(J,{icon:(0,n.jsx)(Y.Z,{color:"secondary",sx:{backgroundColor:"primary.main",borderRadius:6,padding:.3}}),title:"+966666666660"}),(0,n.jsx)(J,{icon:(0,n.jsx)(V.Z,{color:"secondary",sx:{backgroundColor:"success.main",borderRadius:6,padding:.3}}),title:"دمشق , المزة"})]}),(0,n.jsxs)(o.ZP,{item:!0,container:!0,direction:"column",md:4,gap:1,children:[(0,n.jsx)(J,{icon:(0,n.jsx)(U.Z,{color:"info"}),title:"teachers_facebook"}),(0,n.jsx)(J,{icon:(0,n.jsx)(B.Z,{color:"primary"}),title:"teachers_ins"}),(0,n.jsx)(J,{icon:(0,n.jsx)(G.Z,{color:"success"}),title:"teachers_wts"})]})]})});var Q=i(52847),ee=i(90006),et=i(19643),ei=i(52653),en=i(64236),er=i(43989),el=i(8424),es=i(54986);let eo=e=>{let{fetchNotification:t,notifications:i}=(0,O.z)();return(0,m.useEffect)(()=>{t()},[e.open]),(0,n.jsx)(el.d,{onClickAway:e.handleClick,children:(0,n.jsx)(u.Z,{sx:{p:2,bgcolor:"background.paper",width:400},children:(0,n.jsxs)(o.ZP,{container:!0,gap:3,children:[(0,n.jsxs)(o.ZP,{item:!0,md:12,children:[(0,n.jsx)(a.Z,{variant:"h6",color:"primary",mb:1,children:(0,q.t)("titles.notifications")}),(0,n.jsx)(es.Z,{})]}),i.map(e=>(0,n.jsxs)(o.ZP,{container:!0,item:!0,direction:"row",md:12,gap:1,children:[!e.read&&(0,n.jsxs)("div",{children:["   ",(0,n.jsx)(en.Z,{color:"success",variant:"dot"})]}),(0,n.jsxs)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:350},children:[(0,n.jsx)(a.Z,{children:e.title}),(0,n.jsx)(a.Z,{noWrap:!0,children:e.text})]})]},e.id))]})})})};var ea=i(53113),ed=i(13391),ec=i(74866),eu=i(59104),eh=i(8088),ex=i(22079),ej=i(91797),ep=i(26337),em=i(42834),eg=i(35691);let eb=eg.Ry().shape({old_password:eg.Z_().min(8,"min_8").required("required"),new_password:eg.Z_().required("required"),new_password_confirmation:eg.Z_().oneOf([eg.iH("new_password"),null],"Password_must_match").required("required")}),ev=e=>{let{profileInfo:t,fetchRegisterInfo:i,registerInfo:r,updatePassword:l}=(0,O.z)();return(0,n.jsx)(Z.J9,{initialValues:{old_password:"",new_password:"",new_password_confirmation:""},validationSchema:eb,onSubmit:(t,i)=>{let{setSubmitting:n}=i;l(t,e.closePopup,()=>{n(!1),e.closePopup()})},children:e=>{let{isSubmitting:t,isValid:i}=e;return(0,n.jsxs)(Z.l0,{children:[(0,n.jsx)(ej.Z,{variant:"h5",color:"primary",children:(0,q.t)("popup.title.change_password")}),(0,n.jsx)(es.Z,{}),(0,n.jsx)(ep.Z,{children:(0,n.jsxs)(o.ZP,{container:!0,direction:"column",gap:2,lg:12,my:3,children:[(0,n.jsx)(eU.t,{name:"old_password",type:"password",required:!0,translateKey:"old_password"}),(0,n.jsx)(eU.t,{name:"new_password",type:"password",required:!0,translateKey:"new_password"}),(0,n.jsx)(eU.t,{name:"new_password_confirmation",type:"password",required:!0,translateKey:"new_password_confirmation"})]})}),(0,n.jsx)(em.Z,{children:(0,n.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:t&&i,children:(0,q.t)("buttons.save")})})]})}})};var ef=i(74548),eZ=i.n(ef),ey=i(62067),e_=i.n(ey);let ew=eg.Ry().shape({name_ar:eg.Z_().required("required"),name_en:eg.Z_().required("required"),email:eg.Z_().email("email").required("required"),address:eg.Z_().required("required"),date_of_birth:eg.hT().typeError("valid_date").required("required"),nationality_id:eg.Z_().required("required"),education_level_id:eg.Z_().required("required")}),eC=e=>{var t,i;let{profileInfo:r,fetchRegisterInfo:l,registerInfo:s,saveProfileData:a}=(0,O.z)(),d={...r,date_of_birth:eZ()(r.date_of_birth),nationality_id:null==r?void 0:r.nationality.id,education_level_id:null==r?void 0:r.education_level.id};return(0,m.useEffect)(()=>{l()},[]),(0,n.jsx)(Z.J9,{initialValues:d,validationSchema:ew,onSubmit:(t,i)=>{let{setSubmitting:n}=i,r={...t,date_of_birth:e_()(t.date_of_birth).format("YYYY-MM-DD")};a(r,e.closePopup,()=>{n(!1),e.closePopup()})},children:e=>{let{isSubmitting:r,isValid:l}=e;return(0,n.jsxs)(Z.l0,{children:[(0,n.jsx)(ej.Z,{variant:"h5",color:"primary",children:(0,q.t)("popup.title.update_profile")}),(0,n.jsx)(es.Z,{}),(0,n.jsx)(ep.Z,{children:(0,n.jsxs)(o.ZP,{container:!0,direction:"column",gap:2,lg:12,my:3,children:[(0,n.jsx)(eU.t,{translateKey:"name_ar",name:"name_ar",required:!0}),(0,n.jsx)(eU.t,{translateKey:"name_en",name:"name_en",required:!0}),(0,n.jsx)(eU.t,{translateKey:"phone",name:"phone",required:!0}),(0,n.jsx)(eU.t,{translateKey:"email",name:"email"}),(0,n.jsx)(eU.t,{translateKey:"address",name:"address",required:!0}),(0,n.jsx)(eU.t,{translateKey:"reference",name:"reference"}),(0,n.jsxs)(o.ZP,{container:!0,lg:12,children:[(0,n.jsx)(o.ZP,{container:!0,lg:4,sx:{pl:2},children:(0,n.jsx)(eL,{translateKey:"education_level",name:"education_level_id",options:null!==(t=null==s?void 0:s.education_levels)&&void 0!==t?t:[]})}),(0,n.jsx)(o.ZP,{lg:4,children:(0,n.jsx)(eL,{translateKey:"nationality",name:"nationality_id",options:null!==(i=null==s?void 0:s.nationalities)&&void 0!==i?i:[]})}),(0,n.jsx)(o.ZP,{lg:4,sx:{pr:2},children:(0,n.jsx)(F,{name:"date_of_birth"})})]})]})}),(0,n.jsx)(em.Z,{children:(0,n.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:r&&l,children:(0,q.t)("buttons.save")})})]})}})};var ek=i(64173);let eP=e=>{let{logUserOut:t}=(0,O.z)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ej.Z,{color:"error",children:[" ",(0,q.t)("popup.title.logout")]}),(0,n.jsx)(ep.Z,{children:(0,n.jsx)(ek.Z,{color:"text.primary",id:"alert-dialog-slide-description",children:(0,q.t)("popup.subtitle.logout")})}),(0,n.jsx)(em.Z,{sx:{justifyContent:"space-between"},children:(0,n.jsxs)(o.ZP,{item:!0,lg:12,container:!0,justifyContent:"space-between",children:[(0,n.jsx)(o.ZP,{item:!0,lg:5,children:(0,n.jsx)(p.Z,{fullWidth:!0,variant:"contained",color:"error",onClick:()=>{t(),e.closePopup()},children:(0,q.t)("buttons.logout")})}),(0,n.jsx)(o.ZP,{item:!0,lg:5,children:(0,n.jsx)(p.Z,{fullWidth:!0,variant:"contained",onClick:e.closePopup,children:(0,q.t)("buttons.ignore")})})]})})]})};var eI=i(49599);let eA=m.forwardRef(function(e,t){return(0,n.jsx)(eh.Z,{direction:"up",ref:t,...e})}),eR=e=>{var t,i;let r=(0,ea.B)(),l=(0,ea.B)(),s=(0,ea.B)(),{push:d}=(0,D.useRouter)(),{profileInfo:c,logUserOut:h}=(0,O.z)(),[x,j]=m.useState(null),g=e=>{j(x?null:e.currentTarget)},b=!!x;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ei.Z,{size:"large",onClick:g,children:(0,n.jsx)(eI.Z,{sx:{height:30,width:30}})}),(0,n.jsx)(er.Z,{id:b?"simple-popper":void 0,open:b,anchorEl:x,style:{zIndex:2},children:(0,n.jsx)(el.d,{onClickAway:g,children:(0,n.jsx)(u.Z,{sx:{p:3,bgcolor:"background.paper",width:350,marginTop:1},children:(0,n.jsxs)(o.ZP,{container:!0,gap:2,children:[(0,n.jsxs)(o.ZP,{container:!0,children:[(0,n.jsx)(o.ZP,{item:!0,container:!0,gap:3,direction:"row",lg:9,sx:{paddingRight:2},children:(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Z,{children:null!==(t=null==c?void 0:c.name_ar)&&void 0!==t?t:""}),(0,n.jsx)(a.Z,{sx:{direction:"ltr",textAlign:"right"},children:null!==(i=null==c?void 0:c.phone)&&void 0!==i?i:""})]})}),(0,n.jsx)(o.ZP,{item:!0,lg:3,container:!0,justifyContent:"flex-end",children:(0,n.jsx)(ei.Z,{size:"large",onClick:()=>{g(),l.handleOpen()},children:(0,n.jsx)(ed.Z,{sx:{height:20,width:20}})})})]}),(0,n.jsx)(o.ZP,{item:!0,lg:12,children:(0,n.jsx)(es.Z,{})}),(0,n.jsxs)(o.ZP,{item:!0,lg:12,children:[(0,n.jsx)(p.Z,{color:"info",sx:{justifyContent:"space-between"},fullWidth:!0,endIcon:(0,n.jsx)(ec.Z,{}),onClick:()=>{g(),s.handleOpen()},children:(0,q.t)("buttons.change_password")}),(0,n.jsx)(p.Z,{color:"error",sx:{justifyContent:"space-between"},fullWidth:!0,endIcon:(0,n.jsx)(eu.Z,{}),onClick:()=>{g(),r.handleOpen()},children:(0,q.t)("buttons.logout")})]})]})})})}),(0,n.jsx)(ex.Z,{open:r.isOpen,TransitionComponent:eA,keepMounted:!0,onClose:r.handleClose,"aria-describedby":"alert-dialog-slide-description",fullWidth:!0,children:(0,n.jsx)(eP,{closePopup:r.handleClose})}),(0,n.jsx)(ex.Z,{open:l.isOpen,TransitionComponent:eA,keepMounted:!0,onClose:l.handleClose,"aria-describedby":"alert-dialog-slide-description",fullWidth:!0,children:l.isOpen&&(0,n.jsx)(eC,{closePopup:l.handleClose})}),(0,n.jsx)(ex.Z,{open:s.isOpen,TransitionComponent:eA,keepMounted:!0,onClose:s.handleClose,"aria-describedby":"alert-dialog-slide-description",fullWidth:!0,children:s.isOpen&&(0,n.jsx)(ev,{closePopup:s.handleClose})})]})};function eq(e){var t,r;let{lng:l}=e,{push:s}=(0,D.useRouter)(),{authenticatedStatus:a,notificationNumber:d,profileInfo:c,logUserOut:h}=(0,O.z)(),j=null!==(t=(0,D.usePathname)().split("/")[2])&&void 0!==t?t:"";j="/"+j;let g=[w.v.home.url,w.v.my_courses.url,w.v.courses.index.url,w.v.teachers.url,w.v.partners.url,w.v.about_us.url],{t:b}=(0,Q.$)(l,"translation"),[v,f]=m.useState(null),Z=e=>{f(v?null:e.currentTarget)},y=!!v,C=i(40566);return(0,n.jsxs)(u.Z,{sx:{width:"100%",display:"fixed",justifyContent:"space-between",flexDirection:"row",alignSelf:"center",paddingTop:8,paddingX:10,marginBottom:0,backgroundColor:"white"},children:[(0,n.jsx)(u.Z,{children:(0,n.jsxs)(et.Z,{value:null!==(r=g.indexOf(j))&&void 0!==r?r:0,onChange:(e,t)=>{("click"!==e.type||"click"===e.type&&eS(e))&&s(g[t])},"aria-label":"nav tabs example",TabIndicatorProps:{style:{width:"5%",marginRight:40,marginLeft:50,height:4,borderRadius:20}},children:[(0,n.jsx)(eO,{label:b("pages."+w.v.home.title),href:w.v.home.url}),a==_.iy.LOGGED_IN&&(0,n.jsx)(eO,{label:b("pages."+w.v.my_courses.title),href:w.v.my_courses.url}),(0,n.jsx)(eO,{label:b("pages."+w.v.courses.index.title),href:w.v.courses.index.url}),(0,n.jsx)(eO,{label:b("pages."+w.v.teachers.title),href:w.v.teachers.url}),(0,n.jsx)(eO,{label:b("pages."+w.v.partners.title),href:w.v.partners.url}),(0,n.jsx)(eO,{label:b("pages."+w.v.about_us.title),href:w.v.about_us.url})]})}),(0,n.jsxs)(u.Z,{sx:{display:"fixed",justifyContent:"space-between",flexDirection:"row",alignSelf:"center",backgroundColor:"success.light",marginBottom:10},gap:4,children:[(0,n.jsx)(u.Z,{children:a===_.iy.LOGGED_IN?(0,n.jsxs)(o.ZP,{container:!0,alignItems:"center",gap:2,children:[(0,n.jsx)(eR,{}),(0,n.jsx)(ei.Z,{size:"large",onClick:Z,children:(0,n.jsx)(en.Z,{badgeContent:d,color:"info",children:(0,n.jsx)(ee.Z,{sx:{height:30,width:30}})})}),(0,n.jsx)(er.Z,{id:y?"simple-popper":void 0,open:y,anchorEl:v,style:{zIndex:2},children:(0,n.jsx)(eo,{open:!0,handleClick:Z})})]}):a===_.iy.NOT_LOGGEN_IN?(0,n.jsx)(p.Z,{variant:"outlined",style:{color:"#329996",padding:10,paddingRight:40,paddingLeft:40,fontSize:24,marginTop:0},onClick:()=>s(w.v.login.url),children:b("buttons.login")}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(x(),{alt:"logo",src:C,height:60})})]})]})}var eD=i(92277);function eS(e){return!e.defaultPrevented&&0===e.button&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!e.shiftKey}function eO(e){return(0,n.jsx)(eD.Z,{component:"a",sx:{fontSize:24,textAlign:"start",fontWeight:500,paddingX:5},onClick:e=>{eS(e)&&e.preventDefault()},...e})}var eT=i(60529),eE=i(82658);let eM=e=>{var t;let[i,r]=(0,Z.U$)(e),l=null!==(t=r.value)&&void 0!==t?t:[];return(0,n.jsx)(u.Z,{sx:{width:"100%"},children:(0,n.jsx)(eT.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",...e,...i,children:e.options.map(t=>(0,n.jsx)(v.Z,{color:l===t.id?"primary.main":"text.primary",control:(0,n.jsx)(eE.Z,{checked:l===t.id}),...e,...i,label:t.text,value:t.id},t.id))})})};var eW=i(84081),ez=i(50819),eK=i(30292),eF=i(84142);let eL=e=>{let[t,i]=(0,Z.U$)(e);return(0,n.jsx)(u.Z,{sx:{width:"100%"},children:(0,n.jsxs)(eW.Z,{fullWidth:!0,children:[(0,n.jsx)(ez.Z,{id:"demo-simple-select-label",children:(0,q.t)("labels."+e.translateKey)}),(0,n.jsx)(eK.Z,{dir:"rtl",labelId:"demo-simple-select-label",id:"demo-simple-select",label:(0,q.t)("labels."+e.translateKey),...e,...t,children:e.options.map(e=>(0,n.jsx)(eF.Z,{value:e.id,children:e.name},e.id))})]})})};var eU=i(48923);let eB=e=>{let{title:t,handleClick:i,time:r,date:l}=e,s=new Date("".concat(l,"T").concat(r)),o=l&&new Date>s;return(0,n.jsx)(g,{onClick:i,title:(0,q.t)("buttons.open_meeting"),disabled:o||!l})}},53113:function(e,t,i){i.d(t,{B:function(){return r}});var n=i(2265);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[t,i]=n.useState(e),r=n.useCallback(()=>{i(!0)},[]),l=n.useCallback(()=>{i(!1)},[]),s=n.useCallback(()=>{i(e=>!e)},[]),o=n.useMemo(()=>({isOpen:t,setIsOpen:i,handleOpen:r,handleClose:l,handleToggle:s}),[t,i,r,l,s]);return o}},40566:function(e,t,i){i.r(t),t.default={src:"/_next/static/media/logo.7c0ac88f.png",height:579,width:1462,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZklEQVR42mMAgb6l1YlpizpiwZwlM7UYls7omre8RLJ4aZshw/XVRv0LF+T8Xzs/abnSihnODEumd4gtnb7dfunk1cpLplUxPFnKkDltTuHtRfOy0xiWzloos2RaJcSk5VwMDAwMAJgqJv867/bCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}}}]);