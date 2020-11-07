(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),r=n.n(i),c=(n(17),n(9)),l=n(1),s=n(6),u=n.n(s);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto-Russia",className:"header__logo"}))};var m=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u041a\u0443\u0447\u0435\u0440\u044f\u0432\u044b\u0439 \u041a\u0438\u0440\u0438\u043b\u043b"))},d=o.a.createContext();var _=function(e){var t=e._id,n=e.link,a=e.name,i=e.likes,r=e.owner,c=e.onCardClick,l=e.onCardLike,s=e.onCardDelete,u=o.a.useContext(d),p={_id:t,link:n,name:a,owner:r,likes:i},m=p.owner._id===u._id,_="photo-grid__btn photo-grid__btn_action_del ".concat(m?"":"photo-grid__btn photo-grid__btn_action_del_hidden"),f=p.likes.some((function(e){return e._id===u._id})),h="photo-grid__btn photo-grid__btn_action_like ".concat(f?"photo-grid__btn photo-grid__btn_clicked":"");return o.a.createElement("li",{className:"photo-grid__card"},o.a.createElement("img",{src:n,alt:a,className:"photo-grid__image",onClick:function(){c({link:n,name:a})}}),o.a.createElement("div",{className:"photo-grid__description"},o.a.createElement("h2",{className:"photo-grid__title"},a),o.a.createElement("div",{className:"photo-grid__btn_action_likes"},o.a.createElement("button",{className:h,onClick:function(){l(p)},type:"button",title:"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),o.a.createElement("p",{className:"photo-grid__like-amount"},i.length))),o.a.createElement("button",{className:_,onClick:function(){s(p)},type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))};var f=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,i=e.onCardClick,r=e.cards,c=e.onCardLike,l=e.onCardDelete,s=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar",onClick:a,style:{backgroundImage:"url(".concat(s.avatar,")")}}),o.a.createElement("div",{className:"profile__description"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{type:"button",className:"profile__btn profile__btn_action_edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t}),o.a.createElement("p",{className:"profile__work"},s.about)),o.a.createElement("button",{className:"profile__btn profile__btn_action_add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:n})),o.a.createElement("section",{className:"photo-grid"},o.a.createElement("ul",{className:"photo-grid__list"},r.map((function(e){return o.a.createElement(_,{key:e._id,_id:e._id,owner:e.owner,link:e.link,name:e.name,likes:e.likes,onCardClick:i,onCardLike:c,onCardDelete:l})})))))};var h=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return o.a.createElement("div",{className:"popup popup_content_image ".concat(n&&"popup_opened"),id:"popup-image"},o.a.createElement("div",{className:"popup__image-box"},o.a.createElement("button",{type:"button",className:"popup__btn_action_close",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",onClick:a}),o.a.createElement("img",{src:t.link,alt:t.title,className:"popup__image"}),o.a.createElement("h2",{className:"popup__image-caption"},t.title)))},v=n(7),E=n(8),k=new(function(){function e(t){Object(v.a)(this,e),this._token=t.baseUrl,this._authorization=t.headers.authorization,this._contentType=t.headers["Content-Type"]}return Object(E.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._token,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._token,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._token,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._token,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeDislikeStatus",value:function(e,t){return fetch("".concat(this._token,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._token,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._token,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"805da766-1e17-442b-aa98-c904fbf55e62","Content-Type":"application/json"}});var g=function(e){var t=e.name,n=e.title,a=e.buttonTitle,i=e.children,r=e.isOpen,c=e.onClose,l=e.onSubmit;return o.a.createElement("div",{className:"popup popup_content_".concat(t," ").concat(r&&"popup_opened")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"popup__btn_action_close",onClick:c}),o.a.createElement("h3",{className:"popup__heading"},n),o.a.createElement("form",{action:"#",name:"popup-form",className:"popup__form popup-".concat(t,"__form"),onSubmit:l,noValidate:!0},i,o.a.createElement("button",{type:"submit",className:"popup__btn"},a))))};var b=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,i=e.isLoading,r=o.a.useState(""),c=Object(l.a)(r,2),s=c[0],u=c[1],p=o.a.useState(""),m=Object(l.a)(p,2),_=m[0],f=m[1],h=o.a.useContext(d),v=i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";return o.a.useEffect((function(){u(h.name),f(h.about)}),[h]),o.a.createElement(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:v,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:s,about:_})}},o.a.createElement("input",{name:"name",type:"text",placeholder:"\u0418\u043c\u044f",maxLength:"40",minLength:"2",className:"popup__input popup__input_type_name",id:"name",value:s||"",onChange:function(e){u(e.target.value)},required:!0}),o.a.createElement("span",{id:"name-error"}),o.a.createElement("input",{name:"description",type:"text",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",autoComplete:"off",maxLength:"200",minLength:"2",className:"popup__input popup__input_type_info",id:"info",value:_||"",onChange:function(e){f(e.target.value)},required:!0}),o.a.createElement("span",{id:"info-error"}))};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,i=e.isLoading,r=o.a.useRef(),c=i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";return o.a.useEffect((function(){r.current.value=""}),[t]),o.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:c,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:r.current.value})}},o.a.createElement("input",{name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",className:"popup__input popup__input_type_info popup__input_type_link",id:"link-input",ref:r,required:!0}),o.a.createElement("span",{id:"link-input-error"}))};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,i=e.isLoading,r=o.a.useState(""),c=Object(l.a)(r,2),s=c[0],u=c[1],p=o.a.useState(""),m=Object(l.a)(p,2),d=m[0],_=m[1],f=i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";return o.a.useEffect((function(){u(""),_("")}),[t]),o.a.createElement(g,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:f,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:s,link:d})}},o.a.createElement("input",{name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30",minLength:"2",className:"popup__input popup__input_type_name popup__input_type_title",id:"title",value:s||"",onChange:function(e){u(e.target.value)},required:!0}),o.a.createElement("span",{id:"title-error"}),o.a.createElement("input",{name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",className:"popup__input popup__input_type_info popup__input_type_link",id:"link",value:d||"",onChange:function(e){_(e.target.value)},required:!0}),o.a.createElement("span",{id:"link-error"}))};var N=function(e){var t=e.card,n=e.isOpen,a=e.onClose,i=e.onCardDelete,r=e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430";return o.a.createElement(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:r,isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),i(t)}})},O=n(10),j=n(11);var L=function(e){var t=e.children,n=Object(j.a)(e,["children"]);return o.a.useEffect((function(){function e(e){"Escape"===e.key&&t.props.onClose()}function n(e){e.target.classList.contains("popup")&&t.props.onClose()}return document.addEventListener("click",n),document.addEventListener("keydown",e),function(){document.removeEventListener("click",n),document.removeEventListener("keydown",e)}}),[t]),o.a.createElement(o.a.Fragment,null," ",o.a.cloneElement(t,Object(O.a)({},n))," ")};var S=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=o.a.useState(!1),r=Object(l.a)(i,2),s=r[0],u=r[1],_=o.a.useState(!1),v=Object(l.a)(_,2),E=v[0],g=v[1],O=o.a.useState({}),j=Object(l.a)(O,2),S=j[0],T=j[1],P=o.a.useState({}),w=Object(l.a)(P,2),z=w[0],D=w[1],x=o.a.useState([]),A=Object(l.a)(x,2),U=A[0],I=A[1],q=o.a.useState(!1),J=Object(l.a)(q,2),B=J[0],G=J[1],H=o.a.useState(!1),M=Object(l.a)(H,2),R=M[0],W=M[1],F=o.a.useState({}),V=Object(l.a)(F,2),$=V[0],K=V[1];function Q(){a(!1),u(!1),g(!1),T({isOpen:!1}),G(!1),W(!1)}return o.a.useEffect((function(){var e=[k.getUserInfo(),k.getInitialCards()];Promise.all(e).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];D(n),I(a)})).catch((function(e){return console.log("Error ".concat(e))}))}),[]),o.a.createElement(d.Provider,{value:z},o.a.createElement("div",{className:"page"},o.a.createElement(p,null),o.a.createElement(f,{onEditProfile:function(){a(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){g(!0)},onCardClick:function(e){T({isOpen:!0,link:e.link,title:e.name})},cards:U,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===z._id}));k.changeLikeDislikeStatus(e._id,!t).then((function(t){var n=U.map((function(n){return n._id===e._id?t:n}));I(n)})).catch((function(e){return console.log("Error ".concat(e))}))},onCardDelete:function(e){W(!0),K(e)}}),o.a.createElement(b,{isOpen:n,onClose:Q,onUpdateUser:function(e){var t=e.name,n=e.about;G(!0),k.editProfile({name:t,about:n}).then((function(e){D(e),Q()})).catch((function(e){return console.log("Error ".concat(e))}))},isLoading:B}),o.a.createElement(y,{isOpen:s,onClose:Q,onAddPlace:function(e){var t=e.name,n=e.link;G(!0),k.addNewCard({name:t,link:n}).then((function(e){I([e].concat(Object(c.a)(U))),Q()})).catch((function(e){return console.log("Error ".concat(e))}))},isLoading:B}),o.a.createElement(C,{isOpen:E,onClose:Q,onUpdateAvatar:function(e){var t=e.avatar;G(!0),k.editAvatar({avatar:t}).then((function(e){D(e),Q()})).catch((function(e){return console.log("Error ".concat(e))}))},isLoading:B}),o.a.createElement(N,{card:$,isOpen:R,onClose:Q,onCardDelete:function(e){G(!0),k.deleteCard(e._id).then((function(){var t=U.filter((function(t){return t._id!==e._id}));I(t),Q()})).catch((function(e){return console.log("Error ".concat(e))}))},isLoading:B}),o.a.createElement(L,null,o.a.createElement(h,{card:S,isOpen:S.isOpen,onClose:Q})),o.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n.p+"static/media/logo.c6f11019.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.0463e540.chunk.js.map