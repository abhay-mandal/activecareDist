(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[5142],{72620:function(t,e,o){"use strict";o.d(e,{Y:function(){return i}});var n=o(37716),r=o(76458);let i=(()=>{class t{constructor(t){this.snackbar=t}success(t){return this.snackbar.open(t,void 0,{duration:3e3,panelClass:["snackbar-success"]})}error(t){return this.snackbar.open(t,void 0,{duration:3e3,panelClass:["snackbar-error"]})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(r.ux))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},80610:function(t,e,o){"use strict";o.d(e,{$:function(){return i}});var n=o(91841),r=o(37716);let i=(()=>{class t{constructor(t){this.httpclient=t,this.httpHeader={headers:new n.WM({"Content-Type":"application/json"})}}saveMaster(t,e){return t.type=e,this.httpclient.post("https://65njeuink2.execute-api.us-east-2.amazonaws.com/DEV/save-masters",JSON.stringify(t),this.httpHeader)}updateMaster(t,e){return t.type=e,this.httpclient.put("https://m2m1ln6pgl.execute-api.us-east-2.amazonaws.com/DEV/update-master",JSON.stringify(t),this.httpHeader)}getStates(){return this.httpclient.get("https://wsjtm9rlig.execute-api.us-east-2.amazonaws.com/DEV/states")}getCityByState(t){return this.httpclient.get("https://vjp422w8qj.execute-api.us-east-2.amazonaws.com/DEV/city-by-state?stateId="+t)}getPrograms(){return this.httpclient.get("https://u9y3qsagy3.execute-api.us-east-2.amazonaws.com/DEV/programs")}getProgramManagements(){return this.httpclient.get("https://onrt9k4hma.execute-api.us-east-2.amazonaws.com/DEV/programs-list")}getRoles(){return this.httpclient.get("https://4jlqz169v7.execute-api.us-east-2.amazonaws.com/DEV/roles")}getHospitalTypes(){return this.httpclient.get("https://zmif3ap4jf.execute-api.us-east-2.amazonaws.com/beta/hospital-types")}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(n.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},15142:function(t,e,o){"use strict";o.r(e),o.d(e,{AppointmentFormModule:function(){return J}});var n=o(38583),r=o(95987),i=o(3679),a=o(37716),s=o(80610),l=o(30240),c=o(72620),u=o(87060);function d(t,e){if(1&t&&(a.TgZ(0,"option",42),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.s9C("value",t._id),a.xp6(1),a.Oqu(t.doctor_info[0].name)}}function m(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function p(t,e){if(1&t&&(a.TgZ(0,"div",43),a.YNc(1,m,2,0,"div",44),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.f.doctorName.errors.required)}}function f(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function g(t,e){if(1&t&&(a.TgZ(0,"div",43),a.YNc(1,f,2,0,"div",44),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.f.patientName.errors.required)}}function Z(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function h(t,e){if(1&t&&(a.TgZ(0,"div",43),a.YNc(1,Z,2,0,"div",44),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.f.appointmentDate.errors.required)}}function b(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function v(t,e){if(1&t&&(a.TgZ(0,"div",43),a.YNc(1,b,2,0,"div",44),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.f.timeSlot.errors.required)}}function q(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function A(t,e){if(1&t&&(a.TgZ(0,"div",43),a.YNc(1,q,2,0,"div",44),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.f.description.errors.required)}}const T=function(t){return{"is-invalid":t}};let x=(()=>{class t{constructor(t,e,o,n,r,a,s){this._location=t,this.masterservice=e,this.userservice=o,this.toasterService=n,this.cdr=r,this.router=a,this.dataservice=s,this.appointmentForm=new i.cw({doctorName:new i.NI("",i.kI.required),patientName:new i.NI("",i.kI.required),timeSlot:new i.NI("",i.kI.required),appointmentDate:new i.NI("",i.kI.required),description:new i.NI("",i.kI.required),createdBy:new i.NI("",i.kI.required)}),this.submitted=!1,this.edit=!1}ngOnInit(){this.userservice.getDoctors().subscribe(t=>{this.Doctors=t,this.cdr.detectChanges(),this.loading=!1}),this.Doctors=JSON.parse(localStorage.getItem("role_access")||"")}backClicked(){this._location.back()}get f(){return this.appointmentForm.controls}onSubmit(){var t;null===(t=this.appointmentForm.get("createdBy"))||void 0===t||t.setValue("1"),this.submitted=!0,this.appointmentForm.valid&&(JSON.parse(localStorage.getItem("userObj")||""),console.log(this.appointmentForm.value),this.userservice.createAppoinment(this.appointmentForm.value).subscribe(t=>{this.submitted=!1,this.appointmentForm.reset(),this.toasterService.success("Appoinment created successfully")},t=>{this.toasterService.error("Failed to create")}))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(n.Ye),a.Y36(s.$),a.Y36(l.x),a.Y36(c.Y),a.Y36(a.sBO),a.Y36(r.F0),a.Y36(u.z))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-appointment-form"]],decls:93,vars:22,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"card","rounded"],[1,"card-header","d-flex","align-items-center"],[1,"m-0"],[1,"card-body","pt-5","pb-3"],[1,"row","mb-3"],[1,"col-md-4"],[1,"w-100","col-form-label","required","fw-bold","fs-6"],[1,"row"],[1,"col-md-12","fv-row"],["formControlName","doctorName",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["formControlName","patientName",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value","Alex"],["value","Andrew"],["value","Dhanush"],["type","date","placeholder","Date","formControlName","appointmentDate",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],[1,"col-md-6"],["for","timeSlot",1,"w-100","col-form-label","required","fw-bold","fs-6",3,"ngClass"],[1,"col-xxl-3","col-xl-4","col-lg-6","col-md-6","col-sm-6","col-12"],["type","radio","name","timeslot","id","danger-outlined","autocomplete","off","formControlName","timeSlot","value","1.00-1.20",1,"btn-check"],["for","danger-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger1-outlined","autocomplete","off","formControlName","timeSlot","value","1.20-1.40",1,"btn-check"],["for","danger1-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger2-outlined","autocomplete","off","formControlName","timeSlot","value","1.40-2.00",1,"btn-check"],["for","danger2-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger3-outlined","autocomplete","off","formControlName","timeSlot","value","2.00-2.20",1,"btn-check"],["for","danger3-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger4-outlined","autocomplete","off","formControlName","timeSlot","value","2.20-2.40",1,"btn-check"],["for","danger4-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger5-outlined","autocomplete","off","formControlName","timeSlot","value","2.40-3.00",1,"btn-check"],["for","danger5-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger6-outlined","autocomplete","off","formControlName","timeSlot","value","3.00-3.20",1,"btn-check"],["for","danger6-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["type","radio","name","timeslot","id","danger7-outlined","autocomplete","off","formControlName","timeSlot","value","3.00-3.20","value","3.20-3.40",1,"btn-check"],["for","danger7-outlined",1,"btn","btn-outline-primary","m-2","btncol","p-2","fs-6","d-flex","justify-content-center","flex-shrink-0"],["name","description","placeholder","Description","rows","4","formControlName","description",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"d-flex","justify-content-end","pb-5","px-9"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-success"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.onSubmit()}),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h3",3),a._uU(4,"Create Appointment"),a.qZA(),a.qZA(),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"div",6),a.TgZ(8,"label",7),a._uU(9,"Doctor Name"),a.qZA(),a.TgZ(10,"div"),a.TgZ(11,"div",8),a.TgZ(12,"div",9),a.TgZ(13,"select",10),a.TgZ(14,"option",11),a._uU(15,"Select Doctor"),a.qZA(),a.YNc(16,d,2,2,"option",12),a.qZA(),a.YNc(17,p,2,1,"div",13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"div",6),a.TgZ(19,"label",7),a._uU(20,"Patient Name"),a.qZA(),a.TgZ(21,"div"),a.TgZ(22,"div",8),a.TgZ(23,"div",9),a.TgZ(24,"select",14),a.TgZ(25,"option",11),a._uU(26,"Select Patient"),a.qZA(),a.TgZ(27,"option",15),a._uU(28,"Alex"),a.qZA(),a.TgZ(29,"option",16),a._uU(30,"Andrew"),a.qZA(),a.TgZ(31,"option",17),a._uU(32,"Dhanush"),a.qZA(),a.qZA(),a.YNc(33,g,2,1,"div",13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(34,"div",6),a.TgZ(35,"label",7),a._uU(36,"Date"),a.qZA(),a.TgZ(37,"div"),a.TgZ(38,"div",8),a.TgZ(39,"div",9),a._UZ(40,"input",18),a.YNc(41,h,2,1,"div",13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(42,"div",5),a.TgZ(43,"div",19),a.TgZ(44,"div",8),a.TgZ(45,"label",20),a._uU(46,"Pick Your Time Slot"),a.qZA(),a.TgZ(47,"div",21),a._UZ(48,"input",22),a.TgZ(49,"label",23),a._uU(50,"1.00-1.20"),a.qZA(),a.qZA(),a.TgZ(51,"div",21),a._UZ(52,"input",24),a.TgZ(53,"label",25),a._uU(54,"1.20-1.40"),a.qZA(),a.qZA(),a.TgZ(55,"div",21),a._UZ(56,"input",26),a.TgZ(57,"label",27),a._uU(58,"1.40-2.00"),a.qZA(),a.qZA(),a.TgZ(59,"div",21),a._UZ(60,"input",28),a.TgZ(61,"label",29),a._uU(62,"2.00-2.20"),a.qZA(),a.qZA(),a.TgZ(63,"div",21),a._UZ(64,"input",30),a.TgZ(65,"label",31),a._uU(66,"2.20-2.40"),a.qZA(),a.qZA(),a.TgZ(67,"div",21),a._UZ(68,"input",32),a.TgZ(69,"label",33),a._uU(70,"2.40-3.00"),a.qZA(),a.qZA(),a.TgZ(71,"div",21),a._UZ(72,"input",34),a.TgZ(73,"label",35),a._uU(74,"3.00-3.20"),a.qZA(),a.qZA(),a.TgZ(75,"div",21),a._UZ(76,"input",36),a.TgZ(77,"label",37),a._uU(78,"3.20-3.40"),a.qZA(),a.qZA(),a.YNc(79,v,2,1,"div",13),a.qZA(),a.qZA(),a.TgZ(80,"div",19),a.TgZ(81,"label",7),a._uU(82,"Description"),a.qZA(),a.TgZ(83,"div"),a.TgZ(84,"div",8),a.TgZ(85,"div",9),a._UZ(86,"textarea",38),a.YNc(87,A,2,1,"div",13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(88,"div",39),a.TgZ(89,"button",40),a.NdJ("click",function(){return e.backClicked()}),a._uU(90,"Back"),a.qZA(),a.TgZ(91,"button",41),a._uU(92,"Save"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.Q6J("formGroup",e.appointmentForm),a.xp6(13),a.Q6J("ngClass",a.VKq(12,T,e.submitted&&e.f.doctorName.errors)),a.xp6(3),a.Q6J("ngForOf",e.Doctors),a.xp6(1),a.Q6J("ngIf",e.submitted&&e.f.doctorName.errors),a.xp6(7),a.Q6J("ngClass",a.VKq(14,T,e.submitted&&e.f.appointmentDate.errors)),a.xp6(9),a.Q6J("ngIf",e.submitted&&e.f.patientName.errors),a.xp6(7),a.Q6J("ngClass",a.VKq(16,T,e.submitted&&e.f.appointmentDate.errors)),a.xp6(1),a.Q6J("ngIf",e.submitted&&e.f.appointmentDate.errors),a.xp6(4),a.Q6J("ngClass",a.VKq(18,T,e.submitted&&e.f.timeSlot.errors)),a.xp6(34),a.Q6J("ngIf",e.submitted&&e.f.timeSlot.errors),a.xp6(7),a.Q6J("ngClass",a.VKq(20,T,e.submitted&&e.f.description.errors)),a.xp6(1),a.Q6J("ngIf",e.submitted&&e.f.description.errors))},directives:[i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,n.mk,i.YN,i.Kr,n.sg,n.O5,i.Fj,i._],styles:[".btn-secondary[_ngcontent-%COMP%]{margin-right:1.2rem}.btncol[_ngcontent-%COMP%]:hover{color:#fff!important}"]}),t})();var y=o(19238),w=o(90625),N=o(87636),k=o(51095),_=o(74937),C=o(72458),U=o(79765);o(75319),o(66682),o(25917),o(36461),o(15257),o(39761),o(45435),o(39490),o(80521),o(17238),o(98295),o(59193),o(22759),o(80013),o(46782),o(70946);let S=(()=>{class t{constructor(){this.changes=new U.xQ,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year"}formatYearRange(t,e){return`${t} \u2013 ${e}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t})();const Y={provide:new a.OlP("mat-datepicker-scroll-strategy"),deps:[w.aV],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[S,Y],imports:[[n.ez,k.ot,w.U8,y.rt,N.eL,C.BQ],_.ZD]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,C.XK,I,r.Bz.forChild([{path:"",component:x}])]]}),t})()}}]);