!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[8832],{8832:function(n,i,a){"use strict";a.r(i),a.d(i,{MastersScanModule:function(){return M}});var r=a(38583),o=a(95987),s=a(23418),c=a(63464),l=a(3679),u=a(37716),d=a(91841),g=a(22238),p=a(26490),f=a(80610),Z=a(72620),m=a(30240),v=a(95514),b=a(33013),h=a(4207),q=a(13928),T=a(72789);function A(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"div",12),u.TgZ(1,"button",13),u.NdJ("click",function(){u.CHM(n);var t=u.oxw(),e=u.MAs(8);return t.clear(e)}),u.qZA(),u.TgZ(2,"span",14),u._UZ(3,"i",15),u.TgZ(4,"input",16),u.NdJ("input",function(t){return u.CHM(n),u.oxw(),u.MAs(8).filterGlobal(t.target.value,"contains")}),u.qZA(),u.qZA(),u.qZA()}}function y(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"th",17),u.TgZ(2,"div",18),u._uU(3," ID "),u.qZA(),u.qZA(),u.TgZ(4,"th",19),u.TgZ(5,"div",20),u.TgZ(6,"span"),u._uU(7,"Scan"),u._UZ(8,"p-sortIcon",21),u.qZA(),u._UZ(9,"p-columnFilter",22),u.qZA(),u.qZA(),u.TgZ(10,"th",23),u.TgZ(11,"div",24),u._uU(12," Action "),u.qZA(),u.qZA(),u.qZA()),2&t){var n=u.oxw();u.xp6(8),u.Q6J("field",n.scan)}}function w(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td",25),u._uU(4),u.qZA(),u.TgZ(5,"td"),u.TgZ(6,"div",26),u.TgZ(7,"p",27),u.NdJ("click",function(){var t=u.CHM(n).$implicit;return u.oxw().editScan(t)}),u._UZ(8,"span",28),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){var i=e.$implicit,a=e.rowIndex;u.xp6(2),u.Oqu(a+1),u.xp6(2),u.Oqu(i.scan),u.xp6(4),u.Q6J("inlineSVG","./assets/media/icons/duotune/art/art005.svg")}}function x(t,e){1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"td",29),u._uU(2,"No Records found."),u.qZA(),u.qZA())}function k(t,e){1&t&&(u.TgZ(0,"div"),u._uU(1,"Required"),u.qZA())}function C(t,e){if(1&t&&(u.TgZ(0,"div",48),u.YNc(1,k,2,0,"div",49),u.qZA()),2&t){var n=u.oxw(2);u.xp6(1),u.Q6J("ngIf",n.f.status.errors.required)}}var S=function(t){return{"is-invalid":t}};function _(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"div",30),u.TgZ(1,"h4",31),u._uU(2,"Add New"),u.qZA(),u.TgZ(3,"button",32),u.NdJ("click",function(){u.CHM(n);var t=u.oxw();return null==t.modalRef?null:t.modalRef.hide()}),u.TgZ(4,"span",33),u._uU(5,"\xd7"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",34),u.TgZ(7,"form",35),u.NdJ("ngSubmit",function(){return u.CHM(n),u.oxw().onSubmit()}),u.TgZ(8,"div",36),u.TgZ(9,"label",37),u._uU(10,"Scan"),u.qZA(),u.TgZ(11,"div",38),u.TgZ(12,"div",39),u.TgZ(13,"div",40),u._UZ(14,"input",41),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"div",36),u.TgZ(16,"label",37),u._uU(17,"Status"),u.qZA(),u.TgZ(18,"div",38),u.TgZ(19,"div",39),u.TgZ(20,"div",40),u.TgZ(21,"select",42),u.TgZ(22,"option",43),u._uU(23,"Active"),u.qZA(),u.TgZ(24,"option",44),u._uU(25,"Inactive"),u.qZA(),u.qZA(),u.YNc(26,C,2,1,"div",45),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(27,"div",46),u.TgZ(28,"button",47),u._uU(29,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){var i=u.oxw();u.xp6(7),u.Q6J("formGroup",i.scanForm),u.xp6(7),u.Q6J("ngClass",u.VKq(4,S,i.submitted&&i.f.scan.errors)),u.xp6(7),u.Q6J("ngClass",u.VKq(6,S,i.submitted&&i.f.status.errors)),u.xp6(5),u.Q6J("ngIf",i.submitted&&i.f.status.errors)}}var N,U=function(){return[10,25,50]},J=function(){return["scan","patientName"]},F=function(){var n=function(){function n(e,i,a,r,o,s,c,u){t(this,n),this.http=e,this.dialog=i,this.modalService=a,this._location=r,this.cdr=o,this.masterService=s,this.toasterService=c,this.userservice=u,this.title="datatables",this.dtOptions={},this.posts=[{userId:1,id:1,scan:"scan1"},{userId:1,id:2,scan:"scan2"},{userId:1,id:3,scan:"scan3"}],this.allScans=[],this.loading=!0,this.submitted=!1,this.scanForm=new l.cw({scan:new l.NI("",l.kI.required),status:new l.NI("",l.kI.required)})}var i,a,r;return i=n,(a=[{key:"openModal",value:function(t){this.modalRef=this.modalService.show(t,{class:"modal-dialog-centered"})}},{key:"openDialog",value:function(){this.dialog.open(s.F,{height:"170px",width:"400px"})}},{key:"backClicked",value:function(){this._location.back()}},{key:"ngOnInit",value:function(){var t=this;this.userservice.getMscan().subscribe(function(e){t.allScans=e,t.cdr.detectChanges(),t.loading=!1}),this.dtOptions={pagingType:"full_numbers",pageLength:10,processing:!0}}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,!this.scanForm.valid)return!1;this.scanForm.valid&&this.masterService.saveMaster(this.scanForm.value,"11").subscribe(function(e){var n;null===(n=t.modalRef)||void 0===n||n.hide(),t.toasterService.success("created successfully"),t.submitted=!1,t.scanForm.reset(),t.userservice.getMscan().subscribe(function(e){t.allScans=e,t.cdr.detectChanges()})},function(e){t.toasterService.error("Failed to create")})}},{key:"editScan",value:function(t){var e=this;this.dialog.open(c.j,{height:"auto",width:"auto",data:{data:t,type:"11"}}).afterClosed().subscribe(function(t){e.userservice.getMscan().subscribe(function(t){e.allScans=t,e.cdr.detectChanges()})})}},{key:"f",get:function(){return this.scanForm.controls}}])&&e(i.prototype,a),r&&e(i,r),n}();return n.\u0275fac=function(t){return new(t||n)(u.Y36(d.eN),u.Y36(g.uw),u.Y36(p.tT),u.Y36(r.Ye),u.Y36(u.sBO),u.Y36(f.$),u.Y36(Z.Y),u.Y36(m.x))},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-masters-scan"]],decls:15,vars:9,consts:[[1,""],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Create Program",1,"card-toolbar","text-end","pb-5"],["type","button",1,"btn","btn-sm","btn-secondary","back_btn",3,"click"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"card","appointment_card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["template",""],[1,"d-flex","px-5","align-items-center","justify-content-between"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search",1,"w-100",3,"input"],[1,"midtable"],[1,"flex","justify-content-center","fs-5","fw-bolder","align-items-center"],["pSortableColumn","scan"],[1,"d-flex","justify-content-center","fs-5","align-items-center","justify-content-between"],[3,"field"],["type","text","field","scan","display","menu",1,""],[1,"actiontable"],[1,"flex","justify-content-center","fs-5","align-items-center"],[1,"text-dark","fw-bolder"],[1,"flex-shrink-0"],["data-bs-toggle","tooltip","data-bs-placement","top","data-bs-trigger","hover","title","Edit",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","m-1",3,"click"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["colspan","7"],[1,"modal-header"],[1,"modal-title","pull-left","text-primary"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-lg-4","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-8"],[1,"row"],[1,"col-lg-12","fv-row"],["type","text","formControlName","scan",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["formControlName","status",1,"form-control",3,"ngClass"],["value","active"],["value","inactive"],["class","invalid-feedback",4,"ngIf"],[1,"d-flex","justify-content-end","py-","mt-8"],["type","submit",1,"btn","btn-primary"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"button",2),u.NdJ("click",function(){return e.backClicked()}),u._uU(3,"Back"),u.qZA(),u.TgZ(4,"button",3),u.NdJ("click",function(){u.CHM(n);var t=u.MAs(14);return e.openModal(t)}),u._uU(5," + Create"),u.qZA(),u.qZA(),u.TgZ(6,"div",4),u.TgZ(7,"p-table",5,6),u.YNc(9,A,5,0,"ng-template",7),u.YNc(10,y,13,1,"ng-template",8),u.YNc(11,w,9,3,"ng-template",9),u.YNc(12,x,3,0,"ng-template",10),u.qZA(),u.qZA(),u.qZA(),u.YNc(13,_,30,8,"ng-template",null,11,u.W1O)}2&t&&(u.xp6(7),u.Q6J("value",e.allScans)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",u.DdM(7,U))("loading",e.loading)("paginator",!0)("globalFilterFields",u.DdM(8,J)))},directives:[v.iA,b.jx,h.Hq,q.o,v.lQ,v.fz,v.xl,T.d$,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,r.mk,l.EJ,l.YN,l.Kr,r.O5],styles:[""]}),n}(),M=((N=function e(){t(this,e)}).\u0275fac=function(t){return new(t||N)},N.\u0275mod=u.oAB({type:N}),N.\u0275inj=u.cJS({imports:[[r.ez,o.Bz.forChild([{path:"",component:F}])]]}),N)}}])}();