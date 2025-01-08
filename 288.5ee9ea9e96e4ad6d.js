"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[288],{2288:(k,d,n)=>{n.r(d),n.d(d,{FileModule:()=>V});var c=n(6814),v=n(95),f=n(7403),e=n(5849),y=n(3246),p=n(5219),I=n(1850),u=n(8857),m=n(707),C=n(6651),x=n(4480),h=n(4104),g=n(5389);const T=()=>({height:"4px"});function U(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"section",11),e._UZ(1,"i",12),e.TgZ(2,"div",13)(3,"p",14),e._uU(4),e.qZA(),e.TgZ(5,"p",15),e._uU(6),e.qZA(),e.TgZ(7,"div",16),e._UZ(8,"p-progressBar",17),e.TgZ(9,"label",18),e._uU(10),e.qZA()(),e.TgZ(11,"div",19)(12,"p-button",20),e.NdJ("onClick",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.onClose())}),e.qZA(),e.TgZ(13,"p-button",21),e.NdJ("onClick",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.onClose())}),e.qZA()()()()}if(2&t){const i=a.$implicit,s=e.oxw();e.xp6(4),e.hij(" ",i.summary," "),e.xp6(2),e.hij(" ",i.detail," "),e.xp6(2),e.Akn(e.DdM(9,T)),e.Q6J("value",s.progress)("showValue",!1),e.xp6(2),e.hij(" ",s.progress,"% uploaded... "),e.xp6(2),e.Q6J("text",!0),e.xp6(1),e.Q6J("text",!0)}}function M(t,a){if(1&t&&(e.TgZ(0,"li",26),e._UZ(1,"i",27),e._uU(2),e.qZA()),2&t){const i=a.$implicit;e.xp6(2),e.hij("",i," ")}}function Z(t,a){if(1&t&&(e.TgZ(0,"div",22)(1,"h3",23),e._uU(2,"Predicciones:"),e.qZA(),e.TgZ(3,"ul",24),e.YNc(4,M,3,1,"li",25),e.qZA()()),2&t){const i=e.oxw();e.xp6(4),e.Q6J("ngForOf",i.predictions)}}let F=(()=>{class t{constructor(i,s,o,l){this.predictionService=i,this.message=s,this.cdr=o,this.auth=l,this.predictions=[],this.visible=!1,this.audio_Url="",this.progress=0,this.interval=null}ngAfterViewInit(){this.verifyAuthState()}onFileUpload(i){this.showConfirm();const s=i.files[0],o=new FileReader;o.onloadend=()=>{this.predictionService.predictImage(o.result).subscribe(r=>{this.predictions=r.predictions,this.audio_Url=r.audio_url,console.log("lol",this.audio_Url),console.log("Predicciones:",this.predictions),this.showSuccess(),this.showInfo(),this.onClose()},r=>{console.error("Error al predecir:",r),this.showError()})},o.readAsDataURL(s)}showSuccess(){this.message.add({severity:"success",summary:"Success",detail:"Predicciones realizadas con \xe9xito!"})}showInfo(){this.message.add({severity:"info",summary:"Info",detail:"Revisar las predicciones en la secci\xf3n 2"})}showError(){this.message.add({severity:"error",summary:"Error",detail:"Error al predecir"})}showConfirm(){this.visible||(this.message.add({key:"confirm",sticky:!0,severity:"custom",summary:"Subiendo tu imagen..."}),this.visible=!0,this.progress=0,this.interval&&clearInterval(this.interval),this.interval=setInterval(()=>{this.progress<=100&&(this.progress=this.progress+20),this.progress>=100&&(this.progress=100,clearInterval(this.interval)),this.cdr.markForCheck()},1e3))}onClose(){this.visible=!1,this.message.clear("confirm")}playAudio(i){new Audio(i).play(),console.log("xd",i)}verifyAuthState(){this.auth.checkLoggedIn()||this.message.add({severity:"info",summary:"Advertencia",detail:"Estimado usuario, para poder realizar predicciones debe iniciar sesion."})}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(y.w),e.Y36(p.ez),e.Y36(e.sBO),e.Y36(I.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-file"]],decls:13,vars:5,consts:[["position","top-center","key","confirm",3,"baseZIndex","onClose"],["pTemplate","headless"],[1,"card","flex","justify-content-center"],[1,"w-11","sm:w-8","lg:w-6"],[3,"activeIndex"],["header","1. Cargar Archivo"],[1,"p-mb-4","text-center"],["name","file","customUpload","true","chooseLabel","Seleccionar Archivo","uploadLabel","Subir","cancelLabel","Cancelar","accept","image/*",1,"w-full",3,"auto","maxFileSize","uploadHandler"],["header","2. Predicciones"],["class","p-mt-4 predictions-container",4,"ngIf"],["pButton","","pRipple","","icon","pi pi-volume-up",1,"p-button-text","mx-auto","sm:mx-0",3,"click"],[1,"flex","flex-column","sm:flex-row","p-3","gap-3","w-full","bg-black-alpha-90","shadow-2",2,"border-radius","10px","max-width","90%","margin","auto"],[1,"pi","pi-cloud-upload","text-primary-500","text-2xl"],[1,"flex","flex-column","gap-3","w-full"],[1,"m-0","font-semibold","text-base","text-white"],[1,"m-0","text-base","text-700"],[1,"flex","flex-column","gap-2"],[3,"value","showValue"],[1,"text-right","text-xs","text-white"],[1,"flex","gap-3","mb-3","justify-content-center","sm:justify-content-end"],["label","Subir otro archivo?","styleClass","p-0",3,"text","onClick"],["label","Cancelar","styleClass","text-white p-0",3,"text","onClick"],[1,"p-mt-4","predictions-container"],[1,"p-mb-3","text-center"],[1,"p-pl-3"],["class","prediction-item flex align-items-center gap-2",4,"ngFor","ngForOf"],[1,"prediction-item","flex","align-items-center","gap-2"],[1,"pi","pi-check-circle","text-primary-500"]],template:function(s,o){1&s&&(e.TgZ(0,"p-toast",0),e.NdJ("onClose",function(){return o.onClose()}),e.YNc(1,U,14,10,"ng-template",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"p-accordion",4)(5,"p-accordionTab",5)(6,"h2",6),e._uU(7,"Cargar Imagen"),e.qZA(),e.TgZ(8,"p-fileUpload",7),e.NdJ("uploadHandler",function(r){return o.onFileUpload(r)}),e.qZA()(),e.TgZ(9,"p-accordionTab",8),e.YNc(10,Z,5,1,"div",9),e.TgZ(11,"button",10),e.NdJ("click",function(){return o.playAudio(o.audio_Url)}),e._uU(12," Reproducir "),e.qZA()()()()()),2&s&&(e.Q6J("baseZIndex",5e3),e.xp6(4),e.Q6J("activeIndex",0),e.xp6(4),e.Q6J("auto",!0)("maxFileSize",1e7),e.xp6(2),e.Q6J("ngIf",o.predictions.length>0))},dependencies:[c.sg,c.O5,p.jx,u.p,m.Hq,m.zx,C.k,x.H,h.FN,g.UQ,g.US]})}return t})(),A=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[f.Bz.forChild([{path:"",component:F}]),f.Bz]})}return t})();var _=n(6623),S=n(6340),E=n(6022),b=n(3714),J=n(6218),w=n(2352),j=n(1865),z=n(354),N=n(7213),H=n(6128),L=n(2591),Q=n(2736),B=n(3823),D=n(8468);let O=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[c.ez,L.n,B.u,D.x,Q.L]})}return t})(),V=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({providers:[p.ez],imports:[c.ez,A,_.U$,u.O,v.u5,m.hJ,x.T,h.EV,S.V,E.Xt,b.j,J.A,w.kW,j.cc,z.L$,N.S,g.fx,H.Qy,O]})}return t})()}}]);