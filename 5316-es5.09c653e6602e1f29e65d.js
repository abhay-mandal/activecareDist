!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[5316],{45316:function(i,n,o){"use strict";o.r(n),o.d(n,{HospitalTypeModule:function(){return I}});var a=o(38583),r=o(95987),s=o(23418),l=o(63464),c=o(3679),p=o(37716),u=o(91841),d=o(22238),g=o(26490),f=o(72620),Z=o(80610),h=o(30240),v=o(95514),m=o(33013),b=o(4207),y=o(13928),T=o(72789);function q(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",12),p.TgZ(1,"button",13),p.NdJ("click",function(){p.CHM(i);var t=p.oxw(),e=p.MAs(8);return t.clear(e)}),p.qZA(),p.TgZ(2,"span",14),p._UZ(3,"i",15),p.TgZ(4,"input",16),p.NdJ("input",function(t){return p.CHM(i),p.oxw(),p.MAs(8).filterGlobal(t.target.value,"contains")}),p.qZA(),p.qZA(),p.qZA()}}function A(t,e){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"th",17),p.TgZ(2,"div",18),p._uU(3," ID"),p.qZA(),p.qZA(),p.TgZ(4,"th",19),p.TgZ(5,"div",20),p.TgZ(6,"span"),p._uU(7,"Hospital Type"),p._UZ(8,"p-sortIcon",21),p.qZA(),p._UZ(9,"p-columnFilter",22),p.qZA(),p.qZA(),p.TgZ(10,"th",23),p.TgZ(11,"div",24),p._uU(12," Action "),p.qZA(),p.qZA(),p.qZA()),2&t){var i=p.oxw();p.xp6(8),p.Q6J("field",i.type)}}function w(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td",25),p._uU(4),p.qZA(),p.TgZ(5,"td"),p.TgZ(6,"div",26),p.TgZ(7,"p",27),p.NdJ("click",function(){var t=p.CHM(i).$implicit;return p.oxw().editHospitalType(t)}),p._UZ(8,"span",28),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){var n=e.$implicit,o=e.rowIndex;p.xp6(2),p.Oqu(o+1),p.xp6(2),p.Oqu(n.type),p.xp6(4),p.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg")}}function x(t,e){1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"td",29),p._uU(2,"No Records found."),p.qZA(),p.qZA())}function _(t,e){1&t&&(p.TgZ(0,"div"),p._uU(1,"Required"),p.qZA())}function k(t,e){if(1&t&&(p.TgZ(0,"div",48),p.YNc(1,_,2,0,"div",49),p.qZA()),2&t){var i=p.oxw(2);p.xp6(1),p.Q6J("ngIf",i.f.hospital_type.errors.required)}}function C(t,e){1&t&&(p.TgZ(0,"div"),p._uU(1,"Required"),p.qZA())}function N(t,e){if(1&t&&(p.TgZ(0,"div",48),p.YNc(1,C,2,0,"div",49),p.qZA()),2&t){var i=p.oxw(2);p.xp6(1),p.Q6J("ngIf",i.f.status.errors.required)}}var J=function(t){return{"is-invalid":t}};function U(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",30),p.TgZ(1,"h4",31),p._uU(2,"Add New"),p.qZA(),p.TgZ(3,"button",32),p.NdJ("click",function(){p.CHM(i);var t=p.oxw();return null==t.modalRef?null:t.modalRef.hide()}),p.TgZ(4,"span",33),p._uU(5,"\xd7"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(6,"div",34),p.TgZ(7,"form",35),p.NdJ("ngSubmit",function(){return p.CHM(i),p.oxw().onSubmit()}),p.TgZ(8,"div",36),p.TgZ(9,"label",37),p._uU(10,"Hospital Type"),p.qZA(),p.TgZ(11,"div",38),p.TgZ(12,"div",39),p.TgZ(13,"div",40),p._UZ(14,"input",41),p.YNc(15,k,2,1,"div",42),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(16,"div",36),p.TgZ(17,"label",37),p._uU(18,"Status"),p.qZA(),p.TgZ(19,"div",38),p.TgZ(20,"div",39),p.TgZ(21,"div",40),p.TgZ(22,"select",43),p.TgZ(23,"option",44),p._uU(24,"Active"),p.qZA(),p.TgZ(25,"option",45),p._uU(26,"Inactive"),p.qZA(),p.qZA(),p.YNc(27,N,2,1,"div",42),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(28,"div",46),p.TgZ(29,"button",47),p._uU(30,"Save"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){var n=p.oxw();p.xp6(7),p.Q6J("formGroup",n.hospitalTypeForm),p.xp6(7),p.Q6J("ngClass",p.VKq(5,J,n.submitted&&n.f.hospital_type.errors)),p.xp6(1),p.Q6J("ngIf",n.submitted&&n.f.hospital_type.errors),p.xp6(7),p.Q6J("ngClass",p.VKq(7,J,n.submitted&&n.f.status.errors)),p.xp6(5),p.Q6J("ngIf",n.submitted&&n.f.status.errors)}}var S,Y=function(){return[10,25,50]},F=function(){return["type","patientName"]},M=function(){var i=function(){function i(e,n,o,a,r,s,l,p){t(this,i),this.http=e,this.dialog=n,this.modalService=o,this._location=a,this.cdr=r,this.toasterService=s,this.masterService=l,this.userservice=p,this.hospitalTypeForm=new c.cw({hospital_type:new c.NI("",c.kI.required),status:new c.NI("",c.kI.required)}),this.submitted=!1,this.title="datatables",this.dtOptions={},this.posts=[{id:1,hospital_type:"General Medical & Surgical Hospitals"},{id:2,hospital_type:"Specialty Hospitals"},{id:3,hospital_type:"Clinics"},{id:4,hospital_type:"Dental Laboratories"},{id:5,hospital_type:"Emergency & Other Outpatient Care Centers"}],this.hospitalTypes=[],this.loading=!0}var n,o,a;return n=i,(o=[{key:"openModal",value:function(t){this.modalRef=this.modalService.show(t,{class:"modal-dialog-centered"})}},{key:"openDialog",value:function(){this.dialog.open(s.F,{height:"auto",width:"auto"})}},{key:"backClicked",value:function(){this._location.back()}},{key:"ngOnInit",value:function(){var t=this;this.userservice.getMhospital().subscribe(function(e){t.hospitalTypes=e,t.loading=!1,t.cdr.detectChanges()}),this.dtOptions={pagingType:"full_numbers",pageLength:10,processing:!0}}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,!this.hospitalTypeForm.valid)return!1;this.hospitalTypeForm.valid&&this.masterService.saveMaster(this.hospitalTypeForm.value,"6").subscribe(function(e){var i;null===(i=t.modalRef)||void 0===i||i.hide(),t.toasterService.success("Created successfully"),t.submitted=!1,t.hospitalTypeForm.reset(),t.userservice.getMhospital().subscribe(function(e){t.hospitalTypes=e,t.loading=!1,t.cdr.detectChanges()})},function(e){t.toasterService.error("Failed to create")})}},{key:"editHospitalType",value:function(t){var e=this;this.dialog.open(l.j,{height:"auto",width:"auto",data:{data:t,type:"6"}}).afterClosed().subscribe(function(t){e.loading=!0,e.userservice.getMhospital().subscribe(function(t){e.hospitalTypes=t,e.loading=!1,e.cdr.detectChanges()})})}},{key:"f",get:function(){return this.hospitalTypeForm.controls}}])&&e(n.prototype,o),a&&e(n,a),i}();return i.\u0275fac=function(t){return new(t||i)(p.Y36(u.eN),p.Y36(d.uw),p.Y36(g.tT),p.Y36(a.Ye),p.Y36(p.sBO),p.Y36(f.Y),p.Y36(Z.$),p.Y36(h.x))},i.\u0275cmp=p.Xpm({type:i,selectors:[["app-hospital-type"]],decls:15,vars:9,consts:[[1,""],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Create Program",1,"card-toolbar","text-end","pb-5"],["type","button",1,"btn","btn-sm","btn-secondary","back_btn",3,"click"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"card","appointment_card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["template",""],[1,"d-flex","px-5","align-items-center","justify-content-between"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search",1,"w-100",3,"input"],[1,"midtable"],[1,"flex","justify-content-center","fs-5","fw-bolder","align-items-center"],["pSortableColumn","type"],[1,"d-flex","justify-content-center","fs-5","align-items-center","justify-content-between"],[3,"field"],["type","text","field","type","display","menu",1,""],[1,"actiontable"],[1,"flex","justify-content-center","fs-5","align-items-center"],[1,"text-dark","fw-bolder"],[1,"flex-shrink-0"],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Edit",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","m-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["colspan","7"],[1,"modal-header"],[1,"modal-title","pull-left","text-priamry"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8"],[1,"row"],[1,"col-lg-12","fv-row"],["type","text","placeholder","","formControlName","hospital_type",1,"form-control","form-control-lg","mb-3","mb-lg-0",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","status",1,"form-control",3,"ngClass"],["value","active"],["value","inactive"],[1,"d-flex","justify-content-end","py-","mt-8"],["type","submit",1,"btn","btn-primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"button",2),p.NdJ("click",function(){return e.backClicked()}),p._uU(3,"Back"),p.qZA(),p.TgZ(4,"button",3),p.NdJ("click",function(){p.CHM(i);var t=p.MAs(14);return e.openModal(t)}),p._uU(5," + Create"),p.qZA(),p.qZA(),p.TgZ(6,"div",4),p.TgZ(7,"p-table",5,6),p.YNc(9,q,5,0,"ng-template",7),p.YNc(10,A,13,1,"ng-template",8),p.YNc(11,w,9,3,"ng-template",9),p.YNc(12,x,3,0,"ng-template",10),p.qZA(),p.qZA(),p.qZA(),p.YNc(13,U,31,9,"ng-template",null,11,p.W1O)}2&t&&(p.xp6(7),p.Q6J("value",e.hospitalTypes)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",p.DdM(7,Y))("loading",e.loading)("paginator",!0)("globalFilterFields",p.DdM(8,F)))},directives:[v.iA,m.jx,b.Hq,y.o,v.lQ,v.fz,v.xl,T.d$,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,a.mk,a.O5,c.EJ,c.YN,c.Kr],styles:[""]}),i}(),I=((S=function e(){t(this,e)}).\u0275fac=function(t){return new(t||S)},S.\u0275mod=p.oAB({type:S}),S.\u0275inj=p.cJS({imports:[[a.ez,r.Bz.forChild([{path:"",component:M}])]]}),S)}}])}();