!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,i,o){return i&&r(e.prototype,i),o&&r(e,o),e}(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[8585],{72620:function(r,o,t){"use strict";t.d(o,{Y:function(){return d}});var s=t(37716),n=t(76458),d=function(){var r=function(){function r(i){e(this,r),this.snackbar=i}return i(r,[{key:"success",value:function(e){return this.snackbar.open(e,void 0,{duration:3e3,panelClass:["snackbar-success"]})}},{key:"error",value:function(e){return this.snackbar.open(e,void 0,{duration:3e3,panelClass:["snackbar-error"]})}}]),r}();return r.\u0275fac=function(e){return new(e||r)(s.LFG(n.ux))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()},80610:function(r,o,t){"use strict";t.d(o,{$:function(){return d}});var s=t(91841),n=t(37716),d=function(){var r=function(){function r(i){e(this,r),this.httpclient=i,this.httpHeader={headers:new s.WM({"Content-Type":"application/json"})}}return i(r,[{key:"saveMaster",value:function(e,r){return e.type=r,this.httpclient.post("https://65njeuink2.execute-api.us-east-2.amazonaws.com/DEV/save-masters",JSON.stringify(e),this.httpHeader)}},{key:"updateMaster",value:function(e,r){return e.type=r,this.httpclient.put("https://m2m1ln6pgl.execute-api.us-east-2.amazonaws.com/DEV/update-master",JSON.stringify(e),this.httpHeader)}},{key:"getStates",value:function(){return this.httpclient.get("https://wsjtm9rlig.execute-api.us-east-2.amazonaws.com/DEV/states")}},{key:"getCityByState",value:function(e){return this.httpclient.get("https://vjp422w8qj.execute-api.us-east-2.amazonaws.com/DEV/city-by-state?stateId="+e)}},{key:"getPrograms",value:function(){return this.httpclient.get("https://u9y3qsagy3.execute-api.us-east-2.amazonaws.com/DEV/programs")}},{key:"getProgramManagements",value:function(){return this.httpclient.get("https://onrt9k4hma.execute-api.us-east-2.amazonaws.com/DEV/programs-list")}},{key:"getRoles",value:function(){return this.httpclient.get("https://4jlqz169v7.execute-api.us-east-2.amazonaws.com/DEV/roles")}},{key:"getHospitalTypes",value:function(){return this.httpclient.get("https://zmif3ap4jf.execute-api.us-east-2.amazonaws.com/beta/hospital-types")}}]),r}();return r.\u0275fac=function(e){return new(e||r)(n.LFG(s.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()},78585:function(r,o,t){"use strict";t.r(o),t.d(o,{PatientHistoryFormModule:function(){return Ke}});var s=t(38583),n=t(95987),d=t(3679),l=t(37716),a=t(80610),Z=t(30240),g=t(72620),u=t(87060);function f(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function c(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,f,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.LMP.errors.required)}}function q(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function v(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,q,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.EDD.errors.required)}}function T(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function A(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,T,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Correct_EDD.errors.required)}}function m(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function p(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,m,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Scan_EDD.errors.required)}}function b(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function _(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,b,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Gravida.errors.required)}}function N(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function I(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,N,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Para.errors.required)}}function U(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function h(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,U,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Abortion.errors.required)}}function x(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function C(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,x,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Live_birth.errors.required)}}function y(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function w(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,y,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Pregnancy_Order.errors.required)}}function J(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Q(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,J,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Marriage_Years.errors.required)}}function Y(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function D(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Y,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.CONSANGUINITY.errors.required)}}function k(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function P(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,k,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Age_of_Menarche.errors.required)}}function S(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function V(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,S,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Period_Regularity.errors.required)}}function R(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function H(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,R,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.LMP.errors.required)}}function O(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function K(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,O,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Urine_Pregnancy_Test_Result.errors.required)}}function M(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function E(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,M,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.uptdetailsifoptionisother.errors.required)}}function F(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function L(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,F,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Date_of_UPT.errors.required)}}function z(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function G(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,z,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Place_of_UPT.errors.required)}}function j(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function B(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,j,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.detailsofoptionifhospital.errors.required)}}function $(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function W(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,$,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Hypertension.errors.required)}}function X(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ee(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,X,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Diabetes.errors.required)}}function re(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ie(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,re,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Asthma.errors.required)}}function oe(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function te(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,oe,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Epilepsy.errors.required)}}function se(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ne(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,se,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Heart_disease.errors.required)}}function de(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function le(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,de,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Thyroid_Disorder.errors.required)}}function ae(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Ze(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,ae,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.PCOS.errors.required)}}function ge(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ue(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,ge,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.COVID_INFECTION.errors.required)}}function fe(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ce(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,fe,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Covid_Vaccinated.errors.required)}}function qe(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function ve(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,qe,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Other_History.errors.required)}}function Te(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Ae(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Te,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.History.errors.required)}}function me(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function pe(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,me,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.pastsurgicalhistory.errors.required)}}function be(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function _e(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,be,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Father.errors.required)}}function Ne(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Ie(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Ne,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Details.errors.required)}}function Ue(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function he(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Ue,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Mother.errors.required)}}function xe(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Ce(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,xe,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.motherdetails.errors.required)}}function ye(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function we(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,ye,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Siblings.errors.required)}}function Je(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Qe(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Je,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.siblingsdetails.errors.required)}}function Ye(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function De(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Ye,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Allergy_Present.errors.required)}}function ke(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Pe(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,ke,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Details.errors.required)}}function Se(e,r){1&e&&(l.TgZ(0,"div"),l._uU(1,"Required"),l.qZA())}function Ve(e,r){if(1&e&&(l.TgZ(0,"div",66),l.YNc(1,Se,2,0,"div",67),l.qZA()),2&e){var i=l.oxw();l.xp6(1),l.Q6J("ngIf",i.f.Details.errors.required)}}var Re,He=function(e){return{"is-invalid":e}},Oe=function(){var r=function(){function r(i,o,t,s,n,l){e(this,r),this._location=i,this.masterservice=o,this.userservice=t,this.toasterService=s,this.router=n,this.dataservice=l,this.patientHistoryForm=new d.cw({lmp:new d.NI({value:"",disabled:!1},d.kI.required),edd:new d.NI({value:"",disabled:!1},d.kI.required),correctedd:new d.NI({value:"",disabled:!1},d.kI.required),scanededd:new d.NI({value:"",disabled:!1},d.kI.required),gravida:new d.NI({value:"",disabled:!1},d.kI.required),para:new d.NI({value:"",disabled:!1},d.kI.required),abortion:new d.NI({value:"",disabled:!1},d.kI.required),livebirth:new d.NI({value:"",disabled:!1},d.kI.required),pragnancyorder:new d.NI({value:"",disabled:!1},d.kI.required),marriageyears:new d.NI({value:"",disabled:!1},d.kI.required),consanguinity:new d.NI({value:"",disabled:!1},d.kI.required),ageofmenarche:new d.NI({value:"",disabled:!1},d.kI.required),periodtegularity:new d.NI({value:"",disabled:!1},d.kI.required),lmp2:new d.NI({value:"",disabled:!1},d.kI.required),urinepregnancytestresult:new d.NI({value:"",disabled:!1},d.kI.required),uptdetailsifoptionisother:new d.NI({value:"",disabled:!1},d.kI.required),dateofupt:new d.NI({value:"",disabled:!1},d.kI.required),placeofupt:new d.NI({value:"",disabled:!1},d.kI.required),detailsofoptionifhospital:new d.NI({value:"",disabled:!1},d.kI.required),hypertension:new d.NI({value:"",disabled:!1},d.kI.required),diabetes:new d.NI({value:"",disabled:!1},d.kI.required),asthma:new d.NI({value:"",disabled:!1},d.kI.required),epilepsy:new d.NI({value:"",disabled:!1},d.kI.required),heartdisease:new d.NI({value:"",disabled:!1},d.kI.required),thyroiddisorder:new d.NI({value:"",disabled:!1},d.kI.required),pcos:new d.NI({value:"",disabled:!1},d.kI.required),covidinfection:new d.NI({value:"",disabled:!1},d.kI.required),covidvaccinated:new d.NI({value:"",disabled:!1},d.kI.required),otherhistory:new d.NI({value:"",disabled:!1},d.kI.required),history:new d.NI({value:"",disabled:!1},d.kI.required),pastsurgicalhistory:new d.NI({value:"",disabled:!1},d.kI.required),father:new d.NI({value:"",disabled:!1},d.kI.required),fatherdetails:new d.NI({value:"",disabled:!1},d.kI.required),mother:new d.NI({value:"",disabled:!1},d.kI.required),motherdetails:new d.NI({value:"",disabled:!1},d.kI.required),siblings:new d.NI({value:"",disabled:!1},d.kI.required),siblingsdetails:new d.NI({value:"",disabled:!1},d.kI.required),allergypresent:new d.NI({value:"",disabled:!1},d.kI.required),allergydetails:new d.NI({value:"",disabled:!1},d.kI.required),drugddetails:new d.NI({value:"",disabled:!1},d.kI.required)}),this.submitted=!1,this.edit=!1}return i(r,[{key:"ngOnInit",value:function(){}},{key:"backClicked",value:function(){this._location.back()}},{key:"f",get:function(){return this.patientHistoryForm.controls}},{key:"onSubmit",value:function(){var e,r=this;null===(e=this.patientHistoryForm.get("createdBy"))||void 0===e||e.setValue("1"),this.submitted=!0,this.patientHistoryForm.valid&&(JSON.parse(localStorage.getItem("userObj")||""),console.log(this.patientHistoryForm.value),this.userservice.historyForm(this.patientHistoryForm.value).subscribe(function(e){r.submitted=!1,r.patientHistoryForm.reset(),r.toasterService.success("Appoinment created successfully")},function(e){r.toasterService.error("Failed to create")}))}}]),r}();return r.\u0275fac=function(e){return new(e||r)(l.Y36(s.Ye),l.Y36(a.$),l.Y36(Z.x),l.Y36(g.Y),l.Y36(n.F0),l.Y36(u.z))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-patient-history-form"]],decls:461,vars:161,consts:[[1,"card"],[1,"form",3,"formGroup","ngSubmit"],[1,"card-body","pb-0"],[1,"row","p-3"],[1,"col-md-4","mb-3"],[1,"w-100","col-form-label","required","fw-bold","fs-6"],[1,"row"],[1,"col-md-12","fv-row"],["type","date","value","","placeholder","LMP","formControlName","LMP",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","date","placeholder","EDD","formControlName","EDD",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","date","placeholder","Correct EDD","formControlName","Correct_EDD",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","date","placeholder","Scaned EDD","formControlName","Scan_EDD",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","number","placeholder","Gravida","formControlName","Gravida",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","number","placeholder","Para","formControlName","Para",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","number","placeholder","Abortion","formControlName","Abortion",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","number","placeholder","Live Birth","formControlName","Live_birth",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["name","description","placeholder","Pragnancy order","rows","","formControlName","Pregnancy_Order",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","number","placeholder","Marriage Years","formControlName","Marriage_Years",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","CONSANGUINITY",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value",""],["value","firstDegree"],["value","secondDegree"],["value","thirdDegree"],["type","number","placeholder","Age of Menarche","formControlName","Age_of_Menarche",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Period_Regularity",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value","Regular"],["value","Irregular"],["type","date","placeholder","LMP","formControlName","LMP",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Urine_Pregnancy_Test_Result",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value","Positive"],["value","Negative"],["value","Other"],["name","description","placeholder","UPT Details","rows","","formControlName","uptdetailsifoptionisother",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["type","date","placeholder","Date of UPT","formControlName","Date_of_UPT",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Place_of_UPT",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value","hospital"],["value","home"],["name","description","placeholder","Details","rows","","formControlName","detailsofoptionifhospital",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Hypertension",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["value","yes"],["value","no"],["formControlName","Diabetes",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","Asthma",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","Epilepsy",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","Heart_disease",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","Thyroid_Disorder",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","PCOS",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","COVID_INFECTION",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["formControlName","Covid_Vaccinated",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Other History","rows","","formControlName","Other_History",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","History","placeholder","History",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Past Surgical History","rows","","formControlName","pastsurgicalhistory",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Father","placeholder","History",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Father Details","rows","","formControlName","Details",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Mother","placeholder","History",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Mother Details","rows","","formControlName","motherdetails",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Siblings","placeholder","History",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Siblings Details","rows","","formControlName","siblingsdetails",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],["formControlName","Allergy_Present","placeholder","History",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],["name","description","placeholder","Allergy Details","rows","","formControlName","Details",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"col-md-4","p-3","mb-3"],["name","description","placeholder","Drug Details","rows","","formControlName","Details",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"card-footer","d-flex","justify-content-end","py-3","px-9"],["type","button",1,"btn","btn-secondary","mr-3",3,"click"],["type","submit",1,"btn","btn-success"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"form",1),l.NdJ("ngSubmit",function(){return r.onSubmit()}),l.TgZ(2,"div",2),l.TgZ(3,"h3"),l._uU(4,"Obsertritic Formula"),l.qZA(),l.TgZ(5,"div",3),l.TgZ(6,"div",4),l.TgZ(7,"label",5),l._uU(8,"LMP"),l.qZA(),l.TgZ(9,"div",6),l.TgZ(10,"div",7),l._UZ(11,"input",8),l.YNc(12,c,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(13,"div",4),l.TgZ(14,"label",5),l._uU(15,"EDD"),l.qZA(),l.TgZ(16,"div",6),l.TgZ(17,"div",7),l._UZ(18,"input",10),l.YNc(19,v,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",4),l.TgZ(21,"label",5),l._uU(22,"Correct EDD"),l.qZA(),l.TgZ(23,"div",6),l.TgZ(24,"div",7),l._UZ(25,"input",11),l.YNc(26,A,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(27,"div",3),l.TgZ(28,"div",4),l.TgZ(29,"label",5),l._uU(30,"Scaned EDD"),l.qZA(),l.TgZ(31,"div",6),l.TgZ(32,"div",7),l._UZ(33,"input",12),l.YNc(34,p,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(35,"div",4),l.TgZ(36,"label",5),l._uU(37,"Gravida"),l.qZA(),l.TgZ(38,"div",6),l.TgZ(39,"div",7),l._UZ(40,"input",13),l.YNc(41,_,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(42,"div",4),l.TgZ(43,"label",5),l._uU(44,"Para"),l.qZA(),l.TgZ(45,"div",6),l.TgZ(46,"div",7),l._UZ(47,"input",14),l.YNc(48,I,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(49,"div",3),l.TgZ(50,"div",4),l.TgZ(51,"label",5),l._uU(52,"Abortion"),l.qZA(),l.TgZ(53,"div"),l.TgZ(54,"div",6),l.TgZ(55,"div",7),l._UZ(56,"input",15),l.YNc(57,h,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(58,"div",4),l.TgZ(59,"label",5),l._uU(60,"Live Birth"),l.qZA(),l.TgZ(61,"div"),l.TgZ(62,"div",6),l.TgZ(63,"div",7),l._UZ(64,"input",16),l.YNc(65,C,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(66,"div",4),l.TgZ(67,"label",5),l._uU(68,"Pragnancy order"),l.qZA(),l.TgZ(69,"div"),l.TgZ(70,"div",6),l.TgZ(71,"div",7),l._UZ(72,"textarea",17),l.YNc(73,w,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(74,"h3"),l._uU(75,"Marital History"),l.qZA(),l.TgZ(76,"div",3),l.TgZ(77,"div",4),l.TgZ(78,"label",5),l._uU(79,"Marriage Years"),l.qZA(),l.TgZ(80,"div",6),l.TgZ(81,"div",7),l._UZ(82,"input",18),l.YNc(83,Q,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(84,"div",4),l.TgZ(85,"label",5),l._uU(86,"CONSANGUINITY"),l.qZA(),l.TgZ(87,"div"),l.TgZ(88,"div",6),l.TgZ(89,"div",7),l.TgZ(90,"select",19),l.TgZ(91,"option",20),l._uU(92,"Select"),l.qZA(),l.TgZ(93,"option",21),l._uU(94,"First Degree"),l.qZA(),l.TgZ(95,"option",22),l._uU(96,"Second Degree"),l.qZA(),l.TgZ(97,"option",23),l._uU(98,"Third Degree"),l.qZA(),l.qZA(),l.YNc(99,D,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(100,"h3"),l._uU(101,"Menstural History"),l.qZA(),l.TgZ(102,"div",3),l.TgZ(103,"div",4),l.TgZ(104,"label",5),l._uU(105,"Age of Menarche"),l.qZA(),l.TgZ(106,"div",6),l.TgZ(107,"div",7),l._UZ(108,"input",24),l.YNc(109,P,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.TgZ(110,"div",4),l.TgZ(111,"label",5),l._uU(112,"Period Regularity"),l.qZA(),l.TgZ(113,"div"),l.TgZ(114,"div",6),l.TgZ(115,"div",7),l.TgZ(116,"select",25),l.TgZ(117,"option",20),l._uU(118,"Select"),l.qZA(),l.TgZ(119,"option",26),l._uU(120,"Regular"),l.qZA(),l.TgZ(121,"option",27),l._uU(122,"Irregular"),l.qZA(),l.qZA(),l.YNc(123,V,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(124,"div",4),l.TgZ(125,"label",5),l._uU(126,"LMP"),l.qZA(),l.TgZ(127,"div",6),l.TgZ(128,"div",7),l._UZ(129,"input",28),l.YNc(130,H,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(131,"div",3),l.TgZ(132,"div",4),l.TgZ(133,"label",5),l._uU(134,"Urine Pregnancy Test Result"),l.qZA(),l.TgZ(135,"div"),l.TgZ(136,"div",6),l.TgZ(137,"div",7),l.TgZ(138,"select",29),l.TgZ(139,"option",20),l._uU(140,"Select"),l.qZA(),l.TgZ(141,"option",30),l._uU(142,"Positive"),l.qZA(),l.TgZ(143,"option",31),l._uU(144,"Negative"),l.qZA(),l.TgZ(145,"option",32),l._uU(146,"Other"),l.qZA(),l.qZA(),l.YNc(147,K,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(148,"div",4),l.TgZ(149,"label",5),l._uU(150,"UPT Details if Option is OTHER"),l.qZA(),l.TgZ(151,"div"),l.TgZ(152,"div",6),l.TgZ(153,"div",7),l._UZ(154,"textarea",33),l.YNc(155,E,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(156,"div",4),l.TgZ(157,"label",5),l._uU(158,"Date of UPT"),l.qZA(),l.TgZ(159,"div",6),l.TgZ(160,"div",7),l._UZ(161,"input",34),l.YNc(162,L,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(163,"div",3),l.TgZ(164,"div",4),l.TgZ(165,"label",5),l._uU(166,"Place of UPT"),l.qZA(),l.TgZ(167,"div"),l.TgZ(168,"div",6),l.TgZ(169,"div",7),l.TgZ(170,"select",35),l.TgZ(171,"option",20),l._uU(172,"Select"),l.qZA(),l.TgZ(173,"option",36),l._uU(174,"Hospital"),l.qZA(),l.TgZ(175,"option",37),l._uU(176,"Home"),l.qZA(),l.qZA(),l.YNc(177,G,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(178,"div",4),l.TgZ(179,"label",5),l._uU(180,"Details of option if HOSPITAL"),l.qZA(),l.TgZ(181,"div"),l.TgZ(182,"div",6),l.TgZ(183,"div",7),l._UZ(184,"textarea",38),l.YNc(185,B,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(186,"h3"),l._uU(187,"Past History"),l.qZA(),l.TgZ(188,"div",3),l.TgZ(189,"div",4),l.TgZ(190,"label",5),l._uU(191,"Hypertension"),l.qZA(),l.TgZ(192,"div"),l.TgZ(193,"div",6),l.TgZ(194,"div",7),l.TgZ(195,"select",39),l.TgZ(196,"option",20),l._uU(197,"Select"),l.qZA(),l.TgZ(198,"option",40),l._uU(199,"Yes"),l.qZA(),l.TgZ(200,"option",41),l._uU(201,"No"),l.qZA(),l.qZA(),l.YNc(202,W,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(203,"div",4),l.TgZ(204,"label",5),l._uU(205,"Diabetes"),l.qZA(),l.TgZ(206,"div"),l.TgZ(207,"div",6),l.TgZ(208,"div",7),l.TgZ(209,"select",42),l.TgZ(210,"option",20),l._uU(211,"Select"),l.qZA(),l.TgZ(212,"option",40),l._uU(213,"Yes"),l.qZA(),l.TgZ(214,"option",41),l._uU(215,"No"),l.qZA(),l.qZA(),l.YNc(216,ee,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(217,"div",4),l.TgZ(218,"label",5),l._uU(219,"Asthma"),l.qZA(),l.TgZ(220,"div"),l.TgZ(221,"div",6),l.TgZ(222,"div",7),l.TgZ(223,"select",43),l.TgZ(224,"option",20),l._uU(225,"Select"),l.qZA(),l.TgZ(226,"option",40),l._uU(227,"Yes"),l.qZA(),l.TgZ(228,"option",41),l._uU(229,"No"),l.qZA(),l.qZA(),l.YNc(230,ie,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(231,"div",3),l.TgZ(232,"div",4),l.TgZ(233,"label",5),l._uU(234,"Epilepsy"),l.qZA(),l.TgZ(235,"div"),l.TgZ(236,"div",6),l.TgZ(237,"div",7),l.TgZ(238,"select",44),l.TgZ(239,"option",20),l._uU(240,"Select"),l.qZA(),l.TgZ(241,"option",40),l._uU(242,"Yes"),l.qZA(),l.TgZ(243,"option",41),l._uU(244,"No"),l.qZA(),l.qZA(),l.YNc(245,te,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(246,"div",4),l.TgZ(247,"label",5),l._uU(248,"Heart Disease"),l.qZA(),l.TgZ(249,"div"),l.TgZ(250,"div",6),l.TgZ(251,"div",7),l.TgZ(252,"select",45),l.TgZ(253,"option",20),l._uU(254,"Select"),l.qZA(),l.TgZ(255,"option",40),l._uU(256,"Yes"),l.qZA(),l.TgZ(257,"option",41),l._uU(258,"No"),l.qZA(),l.qZA(),l.YNc(259,ne,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(260,"div",4),l.TgZ(261,"label",5),l._uU(262,"Thyroid Disorder"),l.qZA(),l.TgZ(263,"div"),l.TgZ(264,"div",6),l.TgZ(265,"div",7),l.TgZ(266,"select",46),l.TgZ(267,"option",20),l._uU(268,"Select"),l.qZA(),l.TgZ(269,"option",40),l._uU(270,"Yes"),l.qZA(),l.TgZ(271,"option",41),l._uU(272,"No"),l.qZA(),l.qZA(),l.YNc(273,le,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(274,"div",3),l.TgZ(275,"div",4),l.TgZ(276,"label",5),l._uU(277,"PCOS"),l.qZA(),l.TgZ(278,"div"),l.TgZ(279,"div",6),l.TgZ(280,"div",7),l.TgZ(281,"select",47),l.TgZ(282,"option",20),l._uU(283,"Select"),l.qZA(),l.TgZ(284,"option",40),l._uU(285,"Yes"),l.qZA(),l.TgZ(286,"option",41),l._uU(287,"No"),l.qZA(),l.qZA(),l.YNc(288,Ze,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(289,"div",4),l.TgZ(290,"label",5),l._uU(291,"COVID Infection"),l.qZA(),l.TgZ(292,"div"),l.TgZ(293,"div",6),l.TgZ(294,"div",7),l.TgZ(295,"select",48),l.TgZ(296,"option",20),l._uU(297,"Select"),l.qZA(),l.TgZ(298,"option",40),l._uU(299,"Yes"),l.qZA(),l.TgZ(300,"option",41),l._uU(301,"No"),l.qZA(),l.qZA(),l.YNc(302,ue,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(303,"div",4),l.TgZ(304,"label",5),l._uU(305,"Covid Vaccinated"),l.qZA(),l.TgZ(306,"div"),l.TgZ(307,"div",6),l.TgZ(308,"div",7),l.TgZ(309,"select",49),l.TgZ(310,"option",20),l._uU(311,"Select"),l.qZA(),l.TgZ(312,"option",40),l._uU(313,"Yes"),l.qZA(),l.TgZ(314,"option",41),l._uU(315,"No"),l.qZA(),l.qZA(),l.YNc(316,ce,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(317,"div",3),l.TgZ(318,"div",4),l.TgZ(319,"label",5),l._uU(320,"Other History"),l.qZA(),l.TgZ(321,"div"),l.TgZ(322,"div",6),l.TgZ(323,"div",7),l._UZ(324,"textarea",50),l.YNc(325,ve,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(326,"h3"),l._uU(327,"Past Surgical History"),l.qZA(),l.TgZ(328,"div",3),l.TgZ(329,"div",4),l.TgZ(330,"label",5),l._uU(331,"History"),l.qZA(),l.TgZ(332,"div"),l.TgZ(333,"div",6),l.TgZ(334,"div",7),l.TgZ(335,"select",51),l.TgZ(336,"option",20),l._uU(337,"Select"),l.qZA(),l.TgZ(338,"option",40),l._uU(339,"Yes"),l.qZA(),l.TgZ(340,"option",41),l._uU(341,"No"),l.qZA(),l.qZA(),l.YNc(342,Ae,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(343,"div",4),l.TgZ(344,"label",5),l._uU(345,"Past Surgical History"),l.qZA(),l.TgZ(346,"div"),l.TgZ(347,"div",6),l.TgZ(348,"div",7),l._UZ(349,"textarea",52),l.YNc(350,pe,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(351,"h3"),l._uU(352,"Family History"),l.qZA(),l.TgZ(353,"div",3),l.TgZ(354,"div",4),l.TgZ(355,"label",5),l._uU(356,"Father"),l.qZA(),l.TgZ(357,"div"),l.TgZ(358,"div",6),l.TgZ(359,"div",7),l.TgZ(360,"select",53),l.TgZ(361,"option",20),l._uU(362,"Select"),l.qZA(),l.TgZ(363,"option",40),l._uU(364,"Yes"),l.qZA(),l.TgZ(365,"option",41),l._uU(366,"No"),l.qZA(),l.qZA(),l.YNc(367,_e,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(368,"div",4),l.TgZ(369,"label",5),l._uU(370,"Father Details"),l.qZA(),l.TgZ(371,"div"),l.TgZ(372,"div",6),l.TgZ(373,"div",7),l._UZ(374,"textarea",54),l.YNc(375,Ie,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(376,"div",4),l.TgZ(377,"label",5),l._uU(378,"Mother"),l.qZA(),l.TgZ(379,"div"),l.TgZ(380,"div",6),l.TgZ(381,"div",7),l.TgZ(382,"select",55),l.TgZ(383,"option",20),l._uU(384,"Select"),l.qZA(),l.TgZ(385,"option",40),l._uU(386,"Yes"),l.qZA(),l.TgZ(387,"option",41),l._uU(388,"No"),l.qZA(),l.qZA(),l.YNc(389,he,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(390,"div",3),l.TgZ(391,"div",4),l.TgZ(392,"label",5),l._uU(393,"Mother Details"),l.qZA(),l.TgZ(394,"div"),l.TgZ(395,"div",6),l.TgZ(396,"div",7),l._UZ(397,"textarea",56),l.YNc(398,Ce,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(399,"div",4),l.TgZ(400,"label",5),l._uU(401,"Siblings"),l.qZA(),l.TgZ(402,"div"),l.TgZ(403,"div",6),l.TgZ(404,"div",7),l.TgZ(405,"select",57),l.TgZ(406,"option",20),l._uU(407,"Select"),l.qZA(),l.TgZ(408,"option",40),l._uU(409,"Yes"),l.qZA(),l.TgZ(410,"option",41),l._uU(411,"No"),l.qZA(),l.qZA(),l.YNc(412,we,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(413,"div",4),l.TgZ(414,"label",5),l._uU(415,"Siblings Details"),l.qZA(),l.TgZ(416,"div"),l.TgZ(417,"div",6),l.TgZ(418,"div",7),l._UZ(419,"textarea",58),l.YNc(420,Qe,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(421,"h3"),l._uU(422,"Allergy History"),l.qZA(),l.TgZ(423,"div",3),l.TgZ(424,"div",4),l.TgZ(425,"label",5),l._uU(426,"Allergy Present"),l.qZA(),l.TgZ(427,"div"),l.TgZ(428,"div",6),l.TgZ(429,"div",7),l.TgZ(430,"select",59),l.TgZ(431,"option",20),l._uU(432,"Select"),l.qZA(),l.TgZ(433,"option",40),l._uU(434,"Yes"),l.qZA(),l.TgZ(435,"option",41),l._uU(436,"No"),l.qZA(),l.qZA(),l.YNc(437,De,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(438,"div",4),l.TgZ(439,"label",5),l._uU(440,"Allergy Details"),l.qZA(),l.TgZ(441,"div"),l.TgZ(442,"div",6),l.TgZ(443,"div",7),l._UZ(444,"textarea",60),l.YNc(445,Pe,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(446,"h3"),l._uU(447,"Drug History"),l.qZA(),l.TgZ(448,"div",61),l.TgZ(449,"label",5),l._uU(450,"Drug Details"),l.qZA(),l.TgZ(451,"div"),l.TgZ(452,"div",6),l.TgZ(453,"div",7),l._UZ(454,"textarea",62),l.YNc(455,Ve,2,1,"div",9),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(456,"div",63),l.TgZ(457,"button",64),l.NdJ("click",function(){return r.backClicked()}),l._uU(458,"Back"),l.qZA(),l.TgZ(459,"button",65),l._uU(460,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("formGroup",r.patientHistoryForm),l.xp6(10),l.Q6J("ngClass",l.VKq(81,He,r.submitted&&r.f.LMP.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.LMP.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(83,He,r.submitted&&r.f.EDD.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.EDD.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(85,He,r.submitted&&r.f.Correct_EDD.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Correct_EDD.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(87,He,r.submitted&&r.f.Scan_EDD.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Scan_EDD.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(89,He,r.submitted&&r.f.Gravida.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Gravida.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(91,He,r.submitted&&r.f.Para.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Para.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(93,He,r.submitted&&r.f.Abortion.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Abortion.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(95,He,r.submitted&&r.f.Live_birth.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Live_birth.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(97,He,r.submitted&&r.f.Pregnancy_Order.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Pregnancy_Order.errors),l.xp6(9),l.Q6J("ngClass",l.VKq(99,He,r.submitted&&r.f.Marriage_Years.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Marriage_Years.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(101,He,r.submitted&&r.f.CONSANGUINITY.errors)),l.xp6(9),l.Q6J("ngIf",r.submitted&&r.f.CONSANGUINITY.errors),l.xp6(9),l.Q6J("ngClass",l.VKq(103,He,r.submitted&&r.f.Age_of_Menarche.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Age_of_Menarche.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(105,He,r.submitted&&r.f.Period_Regularity.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Period_Regularity.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(107,He,r.submitted&&r.f.LMP.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.LMP.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(109,He,r.submitted&&r.f.Urine_Pregnancy_Test_Result.errors)),l.xp6(9),l.Q6J("ngIf",r.submitted&&r.f.Urine_Pregnancy_Test_Result.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(111,He,r.submitted&&r.f.uptdetailsifoptionisother.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.uptdetailsifoptionisother.errors),l.xp6(6),l.Q6J("ngClass",l.VKq(113,He,r.submitted&&r.f.Date_of_UPT.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Date_of_UPT.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(115,He,r.submitted&&r.f.Place_of_UPT.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Place_of_UPT.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(117,He,r.submitted&&r.f.detailsofoptionifhospital.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.detailsofoptionifhospital.errors),l.xp6(10),l.Q6J("ngClass",l.VKq(119,He,r.submitted&&r.f.Hypertension.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Hypertension.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(121,He,r.submitted&&r.f.Diabetes.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Diabetes.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(123,He,r.submitted&&r.f.Asthma.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Asthma.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(125,He,r.submitted&&r.f.Epilepsy.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Epilepsy.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(127,He,r.submitted&&r.f.Heart_disease.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Heart_disease.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(129,He,r.submitted&&r.f.Thyroid_Disorder.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Thyroid_Disorder.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(131,He,r.submitted&&r.f.PCOS.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.PCOS.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(133,He,r.submitted&&r.f.COVID_INFECTION.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.COVID_INFECTION.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(135,He,r.submitted&&r.f.Covid_Vaccinated.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Covid_Vaccinated.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(137,He,r.submitted&&r.f.Other_History.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Other_History.errors),l.xp6(10),l.Q6J("ngClass",l.VKq(139,He,r.submitted&&r.f.History.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.History.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(141,He,r.submitted&&r.f.pastsurgicalhistory.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.pastsurgicalhistory.errors),l.xp6(10),l.Q6J("ngClass",l.VKq(143,He,r.submitted&&r.f.Father.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Father.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(145,He,r.submitted&&r.f.Details.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Details.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(147,He,r.submitted&&r.f.Mother.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Mother.errors),l.xp6(8),l.Q6J("ngClass",l.VKq(149,He,r.submitted&&r.f.motherdetails.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.motherdetails.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(151,He,r.submitted&&r.f.Siblings.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Siblings.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(153,He,r.submitted&&r.f.siblingsdetails.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.siblingsdetails.errors),l.xp6(10),l.Q6J("ngClass",l.VKq(155,He,r.submitted&&r.f.Allergy_Present.errors)),l.xp6(7),l.Q6J("ngIf",r.submitted&&r.f.Allergy_Present.errors),l.xp6(7),l.Q6J("ngClass",l.VKq(157,He,r.submitted&&r.f.Details.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Details.errors),l.xp6(9),l.Q6J("ngClass",l.VKq(159,He,r.submitted&&r.f.Details.errors)),l.xp6(1),l.Q6J("ngIf",r.submitted&&r.f.Details.errors))},directives:[d._Y,d.JL,d.sg,d.Fj,d.JJ,d.u,s.mk,s.O5,d.wV,d.EJ,d.YN,d.Kr],styles:[""]}),r}(),Ke=((Re=function r(){e(this,r)}).\u0275fac=function(e){return new(e||Re)},Re.\u0275mod=l.oAB({type:Re}),Re.\u0275inj=l.cJS({imports:[[s.ez,n.Bz.forChild([{path:"",component:Oe}])]]}),Re)}}])}();