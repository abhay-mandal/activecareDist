(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[5671],{5671:function(e,t,i){"use strict";i.r(t),i.d(t,{MastersGenderModule:function(){return Y}});var n=i(38583),r=i(95987),s=i(23418),o=i(63464),a=i(3679),l=i(37716),d=i(91841),c=i(22238),u=i(26490),g=i(80610),p=i(72620),Z=i(30240),f=i(95514),m=i(33013),b=i(4207),h=i(13928),v=i(72789);function q(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",12),l.TgZ(1,"button",13),l.NdJ("click",function(){l.CHM(e);const t=l.oxw(),i=l.MAs(8);return t.clear(i)}),l.qZA(),l.TgZ(2,"span",14),l._UZ(3,"i",15),l.TgZ(4,"input",16),l.NdJ("input",function(t){return l.CHM(e),l.oxw(),l.MAs(8).filterGlobal(t.target.value,"contains")}),l.qZA(),l.qZA(),l.qZA()}}function A(e,t){if(1&e&&(l.TgZ(0,"tr"),l.TgZ(1,"th",17),l.TgZ(2,"div",18),l._uU(3," ID "),l.qZA(),l.qZA(),l.TgZ(4,"th",19),l.TgZ(5,"div",20),l.TgZ(6,"span"),l._uU(7,"Gender"),l._UZ(8,"p-sortIcon",21),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"th",22),l.TgZ(10,"div",23),l._uU(11," Action "),l.qZA(),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(8),l.Q6J("field",e.gender)}}function T(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tr"),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td",24),l._uU(4),l.qZA(),l.TgZ(5,"td"),l.TgZ(6,"div",25),l.TgZ(7,"p",26),l.NdJ("click",function(){const t=l.CHM(e).$implicit;return l.oxw().editGender(t)}),l._UZ(8,"span",27),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=t.$implicit,i=t.rowIndex;l.xp6(2),l.Oqu(i+1),l.xp6(2),l.Oqu(e.gender),l.xp6(4),l.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg")}}function w(e,t){1&e&&(l.TgZ(0,"tr"),l.TgZ(1,"td",28),l._uU(2,"No Records found."),l.qZA(),l.qZA())}function x(e,t){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function C(e,t){if(1&e&&(l.TgZ(0,"div",47),l.YNc(1,x,2,0,"div",48),l.qZA()),2&e){const e=l.oxw(2);l.xp6(1),l.Q6J("ngIf",e.f.gender.errors.required)}}function y(e,t){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function k(e,t){if(1&e&&(l.TgZ(0,"div",47),l.YNc(1,y,2,0,"div",48),l.qZA()),2&e){const e=l.oxw(2);l.xp6(1),l.Q6J("ngIf",e.f.status.errors.required)}}const _=function(e){return{"is-invalid":e}};function N(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",29),l.TgZ(1,"h4",30),l._uU(2,"Add New"),l.qZA(),l.TgZ(3,"button",31),l.NdJ("click",function(){l.CHM(e);const t=l.oxw();return null==t.modalRef?null:t.modalRef.hide()}),l.TgZ(4,"span",32),l._uU(5,"\xd7"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"div",33),l.TgZ(7,"form",34),l.NdJ("ngSubmit",function(){return l.CHM(e),l.oxw().onSubmit()}),l.TgZ(8,"div",35),l.TgZ(9,"label",36),l._uU(10,"Gender"),l.qZA(),l.TgZ(11,"div",37),l.TgZ(12,"div",38),l.TgZ(13,"div",39),l._UZ(14,"input",40),l.YNc(15,C,2,1,"div",41),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(16,"div",35),l.TgZ(17,"label",36),l._uU(18,"Status"),l.qZA(),l.TgZ(19,"div",37),l.TgZ(20,"div",38),l.TgZ(21,"div",39),l.TgZ(22,"select",42),l.TgZ(23,"option",43),l._uU(24,"Active"),l.qZA(),l.TgZ(25,"option",44),l._uU(26,"Inactive"),l.qZA(),l.qZA(),l.YNc(27,k,2,1,"div",41),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(28,"div",45),l.TgZ(29,"button",46),l._uU(30,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=l.oxw();l.xp6(7),l.Q6J("formGroup",e.genderForm),l.xp6(7),l.Q6J("ngClass",l.VKq(5,_,e.submitted&&e.f.gender.errors)),l.xp6(1),l.Q6J("ngIf",e.submitted&&e.f.gender.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(7,_,e.submitted&&e.f.status.errors)),l.xp6(5),l.Q6J("ngIf",e.submitted&&e.f.status.errors)}}const J=function(){return[10,25,50]},M=function(){return["gender","patientName"]};let U=(()=>{class e{constructor(e,t,i,n,r,s,o,l){this.http=e,this.dialog=t,this.modalService=i,this._location=n,this.cdr=r,this.masterservice=s,this.toasterService=o,this.userservice=l,this.genderForm=new a.cw({gender:new a.NI("",a.kI.required),status:new a.NI("",a.kI.required)}),this.submitted=!1,this.title="datatables",this.dtOptions={},this.posts=[{userId:1,id:1,gender:"Male"},{userId:1,id:2,gender:"Female"}],this.allGenders=[],this.loading=!0}openModal(e){this.modalRef=this.modalService.show(e,{class:"modal-dialog-centered"})}openDialog(){this.dialog.open(s.F,{height:"170px",width:"400px"})}backClicked(){this._location.back()}ngOnInit(){this.userservice.getMgender().subscribe(e=>{this.allGenders=e,this.loading=!1,this.cdr.detectChanges()}),this.dtOptions={pagingType:"full_numbers",pageLength:10,processing:!0}}onSubmit(){if(this.submitted=!0,!this.genderForm.valid)return!1;this.genderForm.valid&&this.masterservice.saveMaster(this.genderForm.value,"5").subscribe(e=>{var t;null===(t=this.modalRef)||void 0===t||t.hide(),this.toasterService.success("Created Successfully"),this.submitted=!1,this.genderForm.reset(),this.userservice.getMgender().subscribe(e=>{this.allGenders=e,this.loading=!1,this.cdr.detectChanges()})},e=>{this.toasterService.error("Failed to create")})}editGender(e){this.dialog.open(o.j,{height:"auto",width:"auto",data:{data:e,type:"5"}}).afterClosed().subscribe(e=>{this.userservice.getMgender().subscribe(e=>{this.allGenders=e,this.cdr.detectChanges()})})}get f(){return this.genderForm.controls}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(d.eN),l.Y36(c.uw),l.Y36(u.tT),l.Y36(n.Ye),l.Y36(l.sBO),l.Y36(g.$),l.Y36(p.Y),l.Y36(Z.x))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-masters-gender"]],decls:15,vars:9,consts:[[1,""],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Create Program",1,"card-toolbar","text-end","pb-5"],["type","button",1,"btn","btn-sm","btn-secondary","back_btn",3,"click"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"card","appointment_card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["template",""],[1,"d-flex","px-5","align-items-center","justify-content-between"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search",1,"w-100",3,"input"],[1,"midtable"],[1,"flex","justify-content-center","fs-5","fw-bolder","align-items-center"],["pSortableColumn","gender"],[1,"d-flex","justify-content-center","fs-5","align-items-center","justify-content-between"],[3,"field"],[1,"actiontable"],[1,"flex","justify-content-center","fs-5","align-items-center"],[1,"text-dark","fw-bolder"],[1,"flex-shrink-0"],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Edit",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","m-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["colspan","7"],[1,"modal-header"],[1,"modal-title","pull-left","text-primary"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8"],[1,"row"],[1,"col-lg-12","fv-row"],["type","text","placeholder","","formControlName","gender",1,"form-control","form-control-lg","mb-3","mb-lg-0",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","status",1,"form-control",3,"ngClass"],["value","active"],["value","inactive"],[1,"d-flex","justify-content-end","py-","mt-8"],["type","submit",1,"btn","btn-primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"button",2),l.NdJ("click",function(){return t.backClicked()}),l._uU(3,"Back"),l.qZA(),l.TgZ(4,"button",3),l.NdJ("click",function(){l.CHM(e);const i=l.MAs(14);return t.openModal(i)}),l._uU(5," + Create"),l.qZA(),l.qZA(),l.TgZ(6,"div",4),l.TgZ(7,"p-table",5,6),l.YNc(9,q,5,0,"ng-template",7),l.YNc(10,A,12,1,"ng-template",8),l.YNc(11,T,9,3,"ng-template",9),l.YNc(12,w,3,0,"ng-template",10),l.qZA(),l.qZA(),l.qZA(),l.YNc(13,N,31,9,"ng-template",null,11,l.W1O)}2&e&&(l.xp6(7),l.Q6J("value",t.allGenders)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",l.DdM(7,J))("loading",t.loading)("paginator",!0)("globalFilterFields",l.DdM(8,M)))},directives:[f.iA,m.jx,b.Hq,h.o,f.lQ,f.fz,v.d$,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,n.mk,n.O5,a.EJ,a.YN,a.Kr],styles:[".form-check[_ngcontent-%COMP%]{margin-left:1.25rem!important}"]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[n.ez,r.Bz.forChild([{path:"",component:U}])]]}),e})()}}]);