!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[7803],{72620:function(t,r,n){"use strict";n.d(r,{Y:function(){return u}});var i=n(37716),l=n(76458),u=function(){var t=function(){function t(o){e(this,t),this.snackbar=o}return o(t,[{key:"success",value:function(e){return this.snackbar.open(e,void 0,{duration:3e3,panelClass:["snackbar-success"]})}},{key:"error",value:function(e){return this.snackbar.open(e,void 0,{duration:3e3,panelClass:["snackbar-error"]})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.LFG(l.ux))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},80610:function(t,r,n){"use strict";n.d(r,{$:function(){return u}});var i=n(91841),l=n(37716),u=function(){var t=function(){function t(o){e(this,t),this.httpclient=o,this.httpHeader={headers:new i.WM({"Content-Type":"application/json"})}}return o(t,[{key:"saveMaster",value:function(e,t){return e.type=t,this.httpclient.post("https://65njeuink2.execute-api.us-east-2.amazonaws.com/DEV/save-masters",JSON.stringify(e),this.httpHeader)}},{key:"updateMaster",value:function(e,t){return e.type=t,this.httpclient.put("https://m2m1ln6pgl.execute-api.us-east-2.amazonaws.com/DEV/update-master",JSON.stringify(e),this.httpHeader)}},{key:"getStates",value:function(){return this.httpclient.get("https://wsjtm9rlig.execute-api.us-east-2.amazonaws.com/DEV/states")}},{key:"getCityByState",value:function(e){return this.httpclient.get("https://vjp422w8qj.execute-api.us-east-2.amazonaws.com/DEV/city-by-state?stateId="+e)}},{key:"getPrograms",value:function(){return this.httpclient.get("https://u9y3qsagy3.execute-api.us-east-2.amazonaws.com/DEV/programs")}},{key:"getProgramManagements",value:function(){return this.httpclient.get("https://onrt9k4hma.execute-api.us-east-2.amazonaws.com/DEV/programs-list")}},{key:"getRoles",value:function(){return this.httpclient.get("https://4jlqz169v7.execute-api.us-east-2.amazonaws.com/DEV/roles")}},{key:"getHospitalTypes",value:function(){return this.httpclient.get("https://zmif3ap4jf.execute-api.us-east-2.amazonaws.com/beta/hospital-types")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.LFG(i.eN))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},47803:function(t,r,n){"use strict";n.r(r),n.d(r,{NurseFormModule:function(){return re}});var i=n(38583),l=n(95987),u=n(3679),s=n(37716),a=n(80610),c=n(30240),d=n(72620),f=n(87060),g=n(3363);function m(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function Z(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,m,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.name.errors.required)}}function v(e,t){if(1&e&&(s.TgZ(0,"option",31),s._uU(1),s.qZA()),2&e){var o=t.$implicit;s.s9C("value",o._id),s.xp6(1),s.Oqu(o.hospitalName)}}function h(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function T(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,h,2,0,"div",29),s.qZA()),2&e){var o=s.oxw(2);s.xp6(1),s.Q6J("ngIf",o.f.hospital.errors.required)}}var p=function(e){return{"is-invalid":e}};function q(e,t){if(1&e&&(s.TgZ(0,"div",6),s.TgZ(1,"label",7),s._uU(2,"Hospital Name"),s.qZA(),s.TgZ(3,"div"),s.TgZ(4,"div",5),s.TgZ(5,"div",8),s.TgZ(6,"select",30),s.YNc(7,v,2,2,"option",14),s.qZA(),s.YNc(8,T,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){var o=s.oxw();s.xp6(6),s.Q6J("ngClass",s.VKq(3,p,o.submitted&&o.f.hospital.errors)),s.xp6(1),s.Q6J("ngForOf",o.hospitals),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.hospital.errors)}}function A(e,t){if(1&e&&(s.TgZ(0,"option",31),s._uU(1),s.qZA()),2&e){var o=t.$implicit;s.s9C("value",o.role_id),s.xp6(1),s.Oqu(o.role_name)}}function N(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function b(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,N,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.role.errors.required)}}function x(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",32),s.TgZ(1,"div",33),s.TgZ(2,"label",34),s._uU(3,"Pick Your Date"),s.qZA(),s.TgZ(4,"div",35),s.TgZ(5,"input",36),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangemon(e)}),s.qZA(),s.TgZ(6,"label",37),s._uU(7,"Monday"),s.qZA(),s.qZA(),s.TgZ(8,"div",35),s.TgZ(9,"input",38),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangetue(e)}),s.qZA(),s.TgZ(10,"label",39),s._uU(11,"Tuesday"),s.qZA(),s.qZA(),s.TgZ(12,"div",35),s.TgZ(13,"input",40),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangewed(e)}),s.qZA(),s.TgZ(14,"label",41),s._uU(15,"Wednesday"),s.qZA(),s.qZA(),s.TgZ(16,"div",35),s.TgZ(17,"input",42),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangethu(e)}),s.qZA(),s.TgZ(18,"label",43),s._uU(19,"Thursday"),s.qZA(),s.qZA(),s.TgZ(20,"div",35),s.TgZ(21,"input",44),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangefri(e)}),s.qZA(),s.TgZ(22,"label",45),s._uU(23,"Friday"),s.qZA(),s.qZA(),s.TgZ(24,"div",35),s.TgZ(25,"input",46),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangesat(e)}),s.qZA(),s.TgZ(26,"label",47),s._uU(27,"Saturday"),s.qZA(),s.qZA(),s.TgZ(28,"div",35),s.TgZ(29,"input",48),s.NdJ("change",function(e){return s.CHM(o),s.oxw().valuechangesun(e)}),s.qZA(),s.TgZ(30,"label",49),s._uU(31,"Sunday"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}}function F(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){var e=s.CHM(o).index;return s.oxw(2).removeMonTSlt(e)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",59),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",61),s.qZA(),s.qZA()}if(2&e){var r=t.index;s.xp6(5),s.MGl("formControlName","FN11",r,""),s.xp6(3),s.MGl("formControlName","FN12",r,"")}}function S(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Monday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addMonTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,F,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getMonTSltFormControls())}}function y(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeTueTSlt(e.j)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",59),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",61),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN11",r.j,""),s.xp6(3),s.MGl("formControlName","FN12",r.j,"")}}function k(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Tuesday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addTueTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,y,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getTueTSltFormControls())}}function w(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeWedTSlt(e.k)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",62),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",63),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN21",r.k,""),s.xp6(3),s.MGl("formControlName","FN22",r.k,"")}}function C(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Wednesday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addWedTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,w,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getWedTSltFormControls())}}function _(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeThuTSlt(e.l)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",64),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",65),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN31",r.l,""),s.xp6(3),s.MGl("formControlName","FN32",r.l,"")}}function I(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Thursday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addThuTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,_,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getThuTSltFormControls())}}function U(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeFriTSlt(e.m)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",66),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",67),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN41",r.m,""),s.xp6(3),s.MGl("formControlName","FN42",r.m,"")}}function J(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Friday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addFriTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,U,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getFriTSltFormControls())}}function M(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeSatTSlt(e.n)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",68),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",69),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN51",r.n,""),s.xp6(3),s.MGl("formControlName","FN52",r.n,"")}}function Y(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Saturday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addSatTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,M,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getSatTSltFormControls())}}function Q(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"div",56),s.TgZ(2,"div",57),s.TgZ(3,"button",58),s.NdJ("click",function(){s.CHM(o);var e=s.oxw(2);return e.removeSunTSlt(e.o)}),s._uU(4,"-"),s.qZA(),s.qZA(),s._UZ(5,"timepicker",70),s.TgZ(6,"div",60),s._uU(7,"To"),s.qZA(),s._UZ(8,"timepicker",71),s.qZA(),s.qZA()}if(2&e){var r=s.oxw(2);s.xp6(5),s.MGl("formControlName","FN61",r.o,""),s.xp6(3),s.MGl("formControlName","FN62",r.o,"")}}function E(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",50),s.TgZ(1,"div",51),s.TgZ(2,"h6",52),s._uU(3,"Sunday TimeSlots"),s.qZA(),s.TgZ(4,"div",53),s.TgZ(5,"a",54),s.NdJ("click",function(){return s.CHM(o),s.oxw().addSunTSlt()}),s._uU(6,"+"),s.qZA(),s.qZA(),s.TgZ(7,"div"),s.YNc(8,Q,9,2,"div",55),s.qZA(),s.qZA(),s.qZA()}if(2&e){var r=s.oxw();s.xp6(8),s.Q6J("ngForOf",r.getSunTSltFormControls())}}function H(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function O(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,H,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.phone.errors.required)}}function V(e,t){if(1&e&&(s.TgZ(0,"option",31),s._uU(1),s.qZA()),2&e){var o=t.$implicit;s.s9C("value",o._id),s.xp6(1),s.Oqu(o.state)}}function j(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function G(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,j,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.state.errors.required)}}function W(e,t){if(1&e&&(s.TgZ(0,"option",31),s._uU(1),s.qZA()),2&e){var o=t.$implicit;s.s9C("value",o._id),s.xp6(1),s.Oqu(o.city)}}function z(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function D(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,z,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.city.errors.required)}}function R(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function K(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,R,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.address.errors.required)}}function P(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function B(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,P,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.pincode.errors.required)}}function $(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function L(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,$,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.email.errors.required)}}function X(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function ee(e,t){if(1&e&&(s.TgZ(0,"div",28),s.YNc(1,X,2,0,"div",29),s.qZA()),2&e){var o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.f.password.errors.required)}}var te,oe=function(){var t=function(){function t(o,r,n,i,l,s,a,c){e(this,t),this._location=o,this.masterservice=r,this.userservice=n,this.toasterService=i,this.cdr=l,this.router=s,this.dataservice=a,this.fb=c,this.usersForm=new u.cw({name:new u.NI("",u.kI.required),hospital:new u.NI("",u.kI.required),role:new u.NI("",u.kI.required),phone:new u.NI("",u.kI.required),address:new u.NI("",u.kI.required),city:new u.NI("",u.kI.required),state:new u.NI("",u.kI.required),pincode:new u.NI("",u.kI.required),email:new u.NI("",u.kI.required),password:new u.NI("",u.kI.required),createdBy:new u.NI("",u.kI.required),FN01:new u.NI(""),FN02:new u.NI(""),AN01:new u.NI(""),AN02:new u.NI(""),FN11:new u.NI(""),FN12:new u.NI(""),AN11:new u.NI(""),AN12:new u.NI(""),FN21:new u.NI(""),FN22:new u.NI(""),AN21:new u.NI(""),AN22:new u.NI(""),FN31:new u.NI(""),FN32:new u.NI(""),AN31:new u.NI(""),AN32:new u.NI(""),FN41:new u.NI(""),FN42:new u.NI(""),AN41:new u.NI(""),AN42:new u.NI(""),FN51:new u.NI(""),FN52:new u.NI(""),AN51:new u.NI(""),AN52:new u.NI(""),FN61:new u.NI(""),FN62:new u.NI(""),AN61:new u.NI(""),AN62:new u.NI("")}),this.submitted=!1,this.hospitals=[],this.roles=[],this.count1=0,this.count2=0,this.count3=0,this.count4=0,this.count5=0,this.count6=0,this.count7=0,this.states=[],this.cities=[],this.role=0,this.roleDoctor=!1,this.roleMon=!1,this.roleTue=!1,this.roleWed=!1,this.roleThu=!1,this.roleFri=!1,this.roleSat=!1,this.roleSun=!1,this.userForm1=this.fb.group({name1:[],MonTSlt:this.fb.array([this.fb.control(null)])}),this.userForm2=this.fb.group({name2:[],TueTSlt:this.fb.array([this.fb.control(null)])}),this.userForm3=this.fb.group({name3:[],WedTSlt:this.fb.array([this.fb.control(null)])}),this.userForm4=this.fb.group({name4:[],ThuTSlt:this.fb.array([this.fb.control(null)])}),this.userForm5=this.fb.group({name5:[],FriTSlt:this.fb.array([this.fb.control(null)])}),this.userForm6=this.fb.group({name6:[],SatTSlt:this.fb.array([this.fb.control(null)])}),this.userForm7=this.fb.group({name7:[],SunTSlt:this.fb.array([this.fb.control(null)])})}return o(t,[{key:"getMonTSltFormControls",value:function(){return this.userForm1.get("MonTSlt").controls}},{key:"getTueTSltFormControls",value:function(){return this.userForm2.get("TueTSlt").controls}},{key:"getWedTSltFormControls",value:function(){return this.userForm3.get("WedTSlt").controls}},{key:"getThuTSltFormControls",value:function(){return this.userForm4.get("ThuTSlt").controls}},{key:"getFriTSltFormControls",value:function(){return this.userForm5.get("FriTSlt").controls}},{key:"getSatTSltFormControls",value:function(){return this.userForm6.get("SatTSlt").controls}},{key:"getSunTSltFormControls",value:function(){return this.userForm7.get("SunTSlt").controls}},{key:"addMonTSlt",value:function(){this.userForm1.get("MonTSlt").push(this.fb.control(null)),this.count1=this.count1+1}},{key:"addTueTSlt",value:function(){this.userForm2.get("TueTSlt").push(this.fb.control(null)),this.count2=this.count2+1}},{key:"addWedTSlt",value:function(){this.userForm3.get("WedTSlt").push(this.fb.control(null)),this.count3=this.count3+1}},{key:"addThuTSlt",value:function(){this.userForm4.get("ThuTSlt").push(this.fb.control(null)),this.count4=this.count4+1}},{key:"addFriTSlt",value:function(){this.userForm5.get("FriTSlt").push(this.fb.control(null)),this.count5=this.count5+1}},{key:"addSatTSlt",value:function(){this.userForm6.get("SatTSlt").push(this.fb.control(null)),this.count6=this.count6+1}},{key:"addSunTSlt",value:function(){this.userForm7.get("SunTSlt").push(this.fb.control(null)),this.count7=this.count7+1}},{key:"removeMonTSlt",value:function(e){this.userForm1.get("MonTSlt").removeAt(e)}},{key:"removeTueTSlt",value:function(e){this.userForm2.get("TueTSlt").removeAt(e)}},{key:"removeWedTSlt",value:function(e){this.userForm3.get("WedTSlt").removeAt(e)}},{key:"removeThuTSlt",value:function(e){this.userForm4.get("ThuTSlt").removeAt(e)}},{key:"removeFriTSlt",value:function(e){this.userForm5.get("FriTSlt").removeAt(e)}},{key:"removeSatTSlt",value:function(e){this.userForm6.get("SatTSlt").removeAt(e)}},{key:"removeSunTSlt",value:function(e){this.userForm7.get("SunTSlt").removeAt(e)}},{key:"ngOnInit",value:function(){var e,t=this;if(this.role=parseInt(localStorage.getItem("role")||""),this.edit=this.router.url.indexOf("user-management/hospital-users/nurse/edit/nurse-form")>-1?"Edit":"Create",this.userservice.getHospitals().subscribe(function(e){t.hospitals=e,t.cdr.detectChanges()}),this.masterservice.getStates().subscribe(function(e){t.states=e,t.cdr.detectChanges()}),this.masterservice.getRoles().subscribe(function(e){e.forEach(function(e){e.role_id>3&&t.roles.push(e)}),t.cdr.detectChanges()}),this.edit){var o=this.dataservice.getEdittingUser();this.edittingObject=o,this.roleDoctor=4==o.role,this.usersForm.patchValue(o),this.onStateChange()}if(2==this.role){var r=JSON.parse(localStorage.getItem("userDetails")||"");null===(e=this.usersForm.get("hospital"))||void 0===e||e.setValue(r._id)}}},{key:"onStateChange",value:function(){var e,t=this,o=null===(e=this.usersForm.get("state"))||void 0===e?void 0:e.value;this.masterservice.getCityByState(o).subscribe(function(e){t.cities=e,t.cdr.detectChanges()})}},{key:"onSubmit",value:function(){var e,t,o=this;if(this.submitted=!0,console.log(this.usersForm),null===(e=this.usersForm.get("createdBy"))||void 0===e||e.setValue("1"),!this.usersForm.valid)return!1;if(this.usersForm.valid){if(!this.edit){var r=JSON.parse(localStorage.getItem("userObj")||"");null===(t=this.usersForm.get("createdBy"))||void 0===t||t.setValue(r._id),this.userservice.createHospitalUsers(this.usersForm.value).subscribe(function(e){o.submitted=!1,o.usersForm.reset(),o.toasterService.success("Hospital User created successfully")},function(e){o.toasterService.error("Failed to create")})}this.edit&&this.userservice.updateHospitalUsers(this.usersForm.value,this.edittingObject._id).subscribe(function(e){o.submitted=!1,o.usersForm.reset(),o.router.navigateByUrl("user-management/hospital-users"),o.toasterService.success("Hospital User updated successfully")},function(e){o.toasterService.error("Failed to create")})}}},{key:"f",get:function(){return this.usersForm.controls}},{key:"backClicked",value:function(){this._location.back()}},{key:"valuechangee",value:function(e){console.log(e),4==e?this.roleDoctor=!0:(this.roleDoctor=!1,this.roleMon=!1,this.roleTue=!1,this.roleWed=!1,this.roleThu=!1,this.roleFri=!1,this.roleSat=!1,this.roleSun=!1)}},{key:"valuechangemon",value:function(e){this.roleMon=!!e.target.checked}},{key:"valuechangetue",value:function(e){this.roleTue=!!e.target.checked}},{key:"valuechangewed",value:function(e){this.roleWed=!!e.target.checked}},{key:"valuechangethu",value:function(e){this.roleThu=!!e.target.checked}},{key:"valuechangefri",value:function(e){this.roleFri=!!e.target.checked}},{key:"valuechangesat",value:function(e){this.roleSat=!!e.target.checked}},{key:"valuechangesun",value:function(e){this.roleSun=!!e.target.checked}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Y36(i.Ye),s.Y36(a.$),s.Y36(c.x),s.Y36(d.Y),s.Y36(s.sBO),s.Y36(l.F0),s.Y36(f.z),s.Y36(u.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-nurse-form"]],decls:101,vars:50,consts:[[1,"card"],[1,"card-header","d-flex","align-items-center"],[1,"m-0"],[1,"form",3,"formGroup","ngSubmit"],[1,"card-body","border-top","pb-0","pt-3"],[1,"row"],[1,"col-md-4","mb-3"],[1,"w-100","col-form-label","required","fw-bold","fs-6"],[1,"col-lg-12","fv-row"],["type","text","placeholder","Enter name","formControlName","name",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["class","col-md-4 mb-3",4,"ngIf"],["id","user_role","formControlName","role",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass","change"],["isdoctor",""],[3,"value",4,"ngFor","ngForOf"],["class","mb-3",4,"ngIf"],["class","col-xxl-6 col-xl-12 col-sm-12 col-12 text-center py-3 mb-3",4,"ngIf"],["type","text","placeholder","Enter Phone number","formControlName","phone",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["formControlName","state",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass","change"],["formControlName","city",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],[1,"col-md-6","mb-3"],["type","text","placeholder","Enter Address","formControlName","address",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","placeholder","Enter Pincode","formControlName","pincode",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","email","placeholder","Email","formControlName","email",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","password","placeholder","Password","formControlName","password",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],[1,"card-footer","d-flex","justify-content-end","py-3","px-9"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-success"],[1,"invalid-feedback"],[4,"ngIf"],["formControlName","hospital",1,"form-select","form-select-solid","form-select-lg","fw-bold",3,"ngClass"],[3,"value"],[1,"mb-3"],[1,"mb-3","row"],["for","timeSlot",1,"w-100","col-form-label","required","fw-bold","fs-6"],[1,"col"],["type","checkbox","name","options-outlined","id","success-outlined","autocomplete","off","formControlName","timeSlot","value","1",1,"btn-check",3,"change"],["for","success-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger1-outlined","autocomplete","off","formControlName","timeSlot","value","2",1,"btn-check",3,"change"],["for","danger1-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger2-outlined","autocomplete","off","formControlName","timeSlot","value","3",1,"btn-check",3,"change"],["for","danger2-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger3-outlined","autocomplete","off","formControlName","timeSlot","value","4",1,"btn-check",3,"change"],["for","danger3-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger4-outlined","autocomplete","off","formControlName","timeSlot","value","5",1,"btn-check",3,"change"],["for","danger4-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger5-outlined","autocomplete","off","formControlName","timeSlot","value","6",1,"btn-check",3,"change"],["for","danger5-outlined",1,"btn","btn-outline-primary","m-3","btncol"],["type","checkbox","name","options-outlined","id","danger6-outlined","autocomplete","off","formControlName","timeSlot","value","7",1,"btn-check",3,"change"],["for","danger6-outlined",1,"btn","btn-outline-primary","m-3","btncol"],[1,"col-xxl-6","col-xl-12","col-sm-12","col-12","text-center","py-3","mb-3"],[1,"bg_lightgray","p-3","rounded"],[1,"pt-3"],[1,"d-flex","justify-content-end","me-1"],[1,"btn","btn-sm","btn-primary","rounded",3,"click"],[4,"ngFor","ngForOf"],[1,"row","w-100","m-0"],[1,"d-flex","justify-content-end","ms-5"],[1,"btn","btn-sm","btn-primary","rounded","m-3",3,"click"],["value","FN11",1,"col-md","d-flex","flex-center","p-0",3,"formControlName"],[1,"col-md","d-flex","flex-center","fw-bolder"],["value","FN12",1,"col-md","d-flex","flex-center","p-0",3,"formControlName"],["value","FN21",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN22",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN31",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN32",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN41",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN42",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN51",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN52",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN61",1,"col-md","d-flex","flex-center",3,"formControlName"],["value","FN62",1,"col-md","d-flex","flex-center",3,"formControlName"]],template:function(e,t){if(1&e){var o=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"h3",2),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"form",3),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"div",6),s.TgZ(8,"label",7),s._uU(9,"User Name"),s.qZA(),s.TgZ(10,"div"),s.TgZ(11,"div",5),s.TgZ(12,"div",8),s._UZ(13,"input",9),s.YNc(14,Z,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(15,q,9,5,"div",11),s.TgZ(16,"div",6),s.TgZ(17,"label",7),s._uU(18,"Role"),s.qZA(),s.TgZ(19,"div"),s.TgZ(20,"div",5),s.TgZ(21,"div",8),s.TgZ(22,"select",12,13),s.NdJ("change",function(){s.CHM(o);var e=s.MAs(23);return t.valuechangee(e.value)}),s.YNc(24,A,2,2,"option",14),s.qZA(),s.YNc(25,b,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(26,x,32,0,"div",15),s.TgZ(27,"div",5),s.YNc(28,S,9,1,"div",16),s.YNc(29,k,9,1,"div",16),s.YNc(30,C,9,1,"div",16),s.YNc(31,I,9,1,"div",16),s.YNc(32,J,9,1,"div",16),s.YNc(33,Y,9,1,"div",16),s.YNc(34,E,9,1,"div",16),s.qZA(),s.TgZ(35,"div",5),s.TgZ(36,"div",6),s.TgZ(37,"label",7),s._uU(38,"Phone"),s.qZA(),s.TgZ(39,"div"),s.TgZ(40,"div",5),s.TgZ(41,"div",8),s._UZ(42,"input",17),s.YNc(43,O,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(44,"div",6),s.TgZ(45,"label",7),s._uU(46,"State"),s.qZA(),s.TgZ(47,"div"),s.TgZ(48,"div",5),s.TgZ(49,"div",8),s.TgZ(50,"select",18),s.NdJ("change",function(){return t.onStateChange()}),s.YNc(51,V,2,2,"option",14),s.qZA(),s.YNc(52,G,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(53,"div",6),s.TgZ(54,"label",7),s._uU(55,"City"),s.qZA(),s.TgZ(56,"div"),s.TgZ(57,"div",5),s.TgZ(58,"div",8),s.TgZ(59,"select",19),s.YNc(60,W,2,2,"option",14),s.qZA(),s.YNc(61,D,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(62,"div",5),s.TgZ(63,"div",20),s.TgZ(64,"label",7),s._uU(65,"Address"),s.qZA(),s.TgZ(66,"div"),s.TgZ(67,"div",5),s.TgZ(68,"div",8),s._UZ(69,"input",21),s.YNc(70,K,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(71,"div",20),s.TgZ(72,"label",7),s._uU(73,"Pincode"),s.qZA(),s.TgZ(74,"div"),s.TgZ(75,"div",5),s.TgZ(76,"div",8),s._UZ(77,"input",22),s.YNc(78,B,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(79,"div",5),s.TgZ(80,"div",20),s.TgZ(81,"label",7),s._uU(82,"Email"),s.qZA(),s.TgZ(83,"div"),s.TgZ(84,"div",5),s.TgZ(85,"div",8),s._UZ(86,"input",23),s.YNc(87,L,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(88,"div",20),s.TgZ(89,"label",7),s._uU(90,"Password"),s.qZA(),s.TgZ(91,"div"),s.TgZ(92,"div",5),s.TgZ(93,"div",8),s._UZ(94,"input",24),s.YNc(95,ee,2,1,"div",10),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(96,"div",25),s.TgZ(97,"button",26),s.NdJ("click",function(){return t.backClicked()}),s._uU(98,"Back"),s.qZA(),s.TgZ(99,"button",27),s._uU(100,"Save"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(3),s.hij("",t.edit," Hospital User"),s.xp6(1),s.Q6J("formGroup",t.usersForm),s.xp6(9),s.Q6J("ngClass",s.VKq(32,p,t.submitted&&t.f.name.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.name.errors),s.xp6(1),s.Q6J("ngIf",1==t.role),s.xp6(7),s.Q6J("ngClass",s.VKq(34,p,t.submitted&&t.f.role.errors)),s.xp6(2),s.Q6J("ngForOf",t.roles),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.role.errors),s.xp6(1),s.Q6J("ngIf",t.roleDoctor),s.xp6(2),s.Q6J("ngIf",t.roleMon),s.xp6(1),s.Q6J("ngIf",t.roleTue),s.xp6(1),s.Q6J("ngIf",t.roleWed),s.xp6(1),s.Q6J("ngIf",t.roleThu),s.xp6(1),s.Q6J("ngIf",t.roleFri),s.xp6(1),s.Q6J("ngIf",t.roleSat),s.xp6(1),s.Q6J("ngIf",t.roleSun),s.xp6(8),s.Q6J("ngClass",s.VKq(36,p,t.submitted&&t.f.phone.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.phone.errors),s.xp6(7),s.Q6J("ngClass",s.VKq(38,p,t.submitted&&t.f.state.errors)),s.xp6(1),s.Q6J("ngForOf",t.states),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.state.errors),s.xp6(7),s.Q6J("ngClass",s.VKq(40,p,t.submitted&&t.f.city.errors)),s.xp6(1),s.Q6J("ngForOf",t.cities),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.city.errors),s.xp6(8),s.Q6J("ngClass",s.VKq(42,p,t.submitted&&t.f.address.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.address.errors),s.xp6(7),s.Q6J("ngClass",s.VKq(44,p,t.submitted&&t.f.pincode.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.pincode.errors),s.xp6(8),s.Q6J("ngClass",s.VKq(46,p,t.submitted&&t.f.email.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.email.errors),s.xp6(7),s.Q6J("ngClass",s.VKq(48,p,t.submitted&&t.f.password.errors)),s.xp6(1),s.Q6J("ngIf",t.submitted&&t.f.password.errors))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,i.mk,i.O5,u.EJ,i.sg,u.YN,u.Kr,u.Wl,g.EV],styles:[".btn-secondary[_ngcontent-%COMP%]{margin-right:1.2rem}"]}),t}(),re=((te=function t(){e(this,t)}).\u0275fac=function(e){return new(e||te)},te.\u0275mod=s.oAB({type:te}),te.\u0275inj=s.cJS({imports:[[i.ez,l.Bz.forChild([{path:"",component:oe}])]]}),te)}}])}();