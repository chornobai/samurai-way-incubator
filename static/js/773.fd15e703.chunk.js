"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[773],{3566:function(A,e,o){o.d(e,{Gr:function(){return c},II:function(){return a},gx:function(){return l}});var t=o(1413),n=o(7781),r=o(1648),s=o(9343),i=function(A){var e,o=A.meta&&A.meta.touched&&A.meta.error;return(0,s.jsxs)("div",{className:"".concat(n.Z.formControl," ").concat(o?n.Z.error:""),children:[A.children," ",o&&(0,s.jsx)("span",{children:null===(e=A.meta)||void 0===e?void 0:e.error})]})},l=function(A){return(0,s.jsx)(i,{meta:A.meta,children:(0,s.jsx)("textarea",(0,t.Z)((0,t.Z)({},A.input),A))})},a=function(A){return(0,s.jsx)(i,{meta:A.meta,children:(0,s.jsx)("input",(0,t.Z)((0,t.Z)({},A.input),A))})},c=function(A,e,o,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,(0,t.Z)({placeholder:A,name:e,validate:o,component:n},i)),l]})}},1935:function(A,e,o){o.d(e,{B:function(){return p}});var t=o(1413),n=o(5987),r=o(5671),s=o(3144),i=o(136),l=o(7277),a=o(8381),c=o(104),u=o(440),d=o(8899),m=o(9343),f=["isAuth"],h=function(A){return{isAuth:(0,d.I5)(A)}},p=function(A){var e=function(e){(0,i.Z)(a,e);var o=(0,l.Z)(a);function a(){return(0,r.Z)(this,a),o.apply(this,arguments)}return(0,s.Z)(a,[{key:"render",value:function(){var e=this.props,o=e.isAuth,r=(0,n.Z)(e,f);return!1===o?(0,m.jsx)(c.l_,{to:"/login"}):(0,m.jsx)(A,(0,t.Z)({},r))}}]),a}(a.Component);return(0,u.$j)(h)(e)}},2773:function(A,e,o){o.r(e),o.d(e,{default:function(){return R}});var t=o(1413),n=o(885),r=o(8381),s="Profile_profile__VHbzQ",i="Profile_photo_profile__2s4fk",l="Profile_wrapper_profile__YOj04",a="Profile_profile_id__54EdN",c="Profile_avatar__NzF5E",u="Profile_profile_info__hMQWP",d="Profile_edit_btn_profile__5u462",m=o(1753),f="MyPosts_myposts__6+UXN",h="MyPosts_textfield_post__7IfeP",p="MyPosts_post_btn_sbm__jyQs7",j="MyPosts_list_post__hHnpa",x="MyPosts_post_img__SD0VB",v="MyPosts_post_item__l3gjg",b="MyPosts_heart_btn__Fki-3",g=o(1648),N=o(5188),C=o(3566),_=o(7615),k=o(2287),S=o(9343),Z=r.memo((function(A){var e=(0,_.Gh)(20),o=(0,N.Z)({form:"PostProfilePage"})((function(A){return(0,S.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,S.jsx)(g.Z,{name:"PostName",id:"PostName",component:C.gx,placeholder:"message",validate:[_.lp,e],className:h}),(0,S.jsx)("button",{className:p,children:"Send"})]})})),t=A.posts.map((function(e){return(0,S.jsxs)("li",{className:v,children:[(0,S.jsx)("img",{className:x,src:A.profile.photos.large||k,alt:"avatar",width:"50",height:"50"}),(0,S.jsxs)("div",{children:[(0,S.jsx)("blockquote",{children:e.messageText}),(0,S.jsx)("button",{onClick:function(){A.onDeleteHandler(e.id)},children:"X"})]}),(0,S.jsx)("div",{children:(0,S.jsx)("button",{className:b,onClick:function(){A.onAddLikeHandler(e.id)},children:e.like})})]},e.id)}));return(0,S.jsxs)("div",{className:f,children:[(0,S.jsx)("h2",{children:"My Posts"}),(0,S.jsx)("div",{className:"new_post",children:(0,S.jsx)(o,{onSubmit:function(e){A.addPostNow(e.PostName),A.addPostNow(e.PostName="")}})}),(0,S.jsx)("ul",{className:j,children:t})]})})),P=o(440),E=o(8899),y=(0,P.$j)((function(A){return{posts:(0,E.bp)(A),profile:(0,E.aC)(A)}}),(function(A){return{addPostNow:function(e){A((0,m.Pi)(e))},onDeleteHandler:function(e){A((0,m.Uc)(e))},onAddLikeHandler:function(e){A((0,m.ry)(e))}}}))(Z),J=o(253),Q=o(9595),U=r.memo((function(A){console.log("EditableSpan called");var e=(0,r.useState)(!1),o=(0,n.Z)(e,2),t=o[0],s=o[1],i=(0,r.useState)(A.value),l=(0,n.Z)(i,2),a=l[0],c=l[1];return t?(0,S.jsx)(Q.Z,{value:a,onChange:function(A){c(A.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),A.onChange(a)}}):(0,S.jsx)("span",{onDoubleClick:function(){s(!0),c(A.value)},children:A.value})})),K=o(104),L=o(1935),M=o(5450),T=o(7781),B=(0,N.Z)({form:"ProfileInfoForm"})((function(A){return(0,S.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,S.jsx)("button",{type:"submit",children:"Save"}),(0,S.jsxs)("label",{children:["Full name:",A.profile.fullName,(0,C.Gr)("FullName","fullName",[],C.II)]}),(0,S.jsxs)("label",{children:["Looking for a job:",(0,C.Gr)("LookingForAJob","lookingForAJob",[],C.II,{type:"checkbox"})]}),(0,S.jsxs)("label",{children:["Job description:",A.profile.lookingForAJobDescription,(0,C.Gr)("LookingForAJobDescription","lookingForAJobDescription",[],C.gx)]}),(0,S.jsxs)("label",{children:["About me:",A.profile.aboutMe,(0,C.Gr)("AboutMe","aboutMe",[],C.gx)]}),Object.keys(A.profile.contacts).map((function(e){return(0,S.jsxs)("label",{children:[e,":",A.profile[e],(0,C.Gr)(e,"contacts."+e,[],C.II)]})})),(0,S.jsx)("div",{className:T.Z.formControl_common_error,children:A.error})]})})),F=r.memo((function(A){var e=A.profile,o=A.authId,m=A.match,f=A.error,h=A.getProfileTC,p=A.savePhotoTC,j=A.status,x=A.updateStatusTC,v=A.updateProfileTC,b=(0,r.useState)(!1),g=(0,n.Z)(b,2),N=g[0],C=g[1],_=!m.params.userId;(0,r.useEffect)((function(){var e=m.params.userId||o;e?h(e):A.history.push("/login"),!1===f&&C(!1)}),[m.params.userId,o,h,A.history,f]);var Z=function(A){var e=A.contactName,o=A.contactValue;return(0,S.jsx)("div",{children:(0,S.jsxs)("div",{children:[e," :",o," "]})})};return(0,S.jsx)("section",{className:s,children:(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:l,children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("h2",{children:"Profile"}),(0,S.jsxs)("div",{className:a,children:["Id: ",e.userId]})]}),(0,S.jsx)("div",{className:c,children:(0,S.jsx)("img",{src:e.photos.large||k,alt:"Avatar"})}),_&&(0,S.jsx)("div",{className:i,children:(0,S.jsxs)("label",{htmlFor:"photo",className:i,children:["\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e",(0,S.jsx)("input",{type:"file",id:"photo",onChange:function(A){A.target.files&&A.target.files.length&&p(A.target.files[0])}})]})}),(0,S.jsx)(U,{value:j,onChange:x}),(0,S.jsx)("div",{className:u,children:N?(0,S.jsx)(B,(0,t.Z)((0,t.Z)({},A),{},{initialValues:e,onSubmit:function(A){v(A)}})):(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{children:["Full Name:",e.fullName]}),(0,S.jsxs)("div",{children:["Looking for a job:",e.lookingForAJob?"yes":"no"]}),(0,S.jsxs)("div",{children:["Job description:",e.lookingForAJobDescription]}),(0,S.jsxs)("div",{children:["About me:",e.aboutMe]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h3",{children:"Contacts"}),Object.keys(e.contacts).map((function(A){var o=e.contacts[A];return(0,S.jsx)(Z,{contactName:A,contactValue:o},A)}))]}),(0,S.jsx)("button",{className:d,onClick:function(){C(!0)},children:"EDIT"})]})}),(0,S.jsx)(y,{})]})})})})),R=(0,M.qC)(L.B,(0,P.$j)((function(A){return{profile:(0,E.aC)(A),isFetching:(0,E.r$)(A),status:(0,E.A3)(A),auth:(0,E.I5)(A),authId:(0,E.sd)(A),error:(0,E.OB)(A)}}),{setProfileAC:m.n_,setFetchingAC:J.B0,setStatusAC:m.aR,getProfileTC:m.GA,updateStatusTC:m.OG,savePhotoTC:m.Tw,updateProfileTC:m.UA}),K.EN)(F)},7615:function(A,e,o){o.d(e,{Gh:function(){return n},lp:function(){return t}});var t=function(A){if(!A)return"field is required"},n=function(A){return function(e){if(e&&e.Maxlenght>30)return"max lenght is ".concat(A,"> 30")}}},7781:function(A,e){e.Z={formControl:"FormControl_formControl__50rF8",error:"FormControl_error__DCD0n",formControl_common_error:"FormControl_formControl_common_error__+Ke55"}},2287:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=773.fd15e703.chunk.js.map