!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[3464],{72620:function(e,r,o){"use strict";o.d(r,{Y:function(){return n}});var a=o(37716),s=o(76458),n=function(){var e=function(){function e(i){t(this,e),this.snackbar=i}return i(e,[{key:"success",value:function(t){return this.snackbar.open(t,void 0,{duration:3e3,panelClass:["snackbar-success"]})}},{key:"error",value:function(t){return this.snackbar.open(t,void 0,{duration:3e3,panelClass:["snackbar-error"]})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(s.ux))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},80610:function(e,r,o){"use strict";o.d(r,{$:function(){return n}});var a=o(91841),s=o(37716),n=function(){var e=function(){function e(i){t(this,e),this.httpclient=i,this.httpHeader={headers:new a.WM({"Content-Type":"application/json"})}}return i(e,[{key:"saveMaster",value:function(t,e){return t.type=e,this.httpclient.post("https://65njeuink2.execute-api.us-east-2.amazonaws.com/DEV/save-masters",JSON.stringify(t),this.httpHeader)}},{key:"updateMaster",value:function(t,e){return t.type=e,this.httpclient.put("https://m2m1ln6pgl.execute-api.us-east-2.amazonaws.com/DEV/update-master",JSON.stringify(t),this.httpHeader)}},{key:"getStates",value:function(){return this.httpclient.get("https://wsjtm9rlig.execute-api.us-east-2.amazonaws.com/DEV/states")}},{key:"getCityByState",value:function(t){return this.httpclient.get("https://vjp422w8qj.execute-api.us-east-2.amazonaws.com/DEV/city-by-state?stateId="+t)}},{key:"getPrograms",value:function(){return this.httpclient.get("https://u9y3qsagy3.execute-api.us-east-2.amazonaws.com/DEV/programs")}},{key:"getProgramManagements",value:function(){return this.httpclient.get("https://onrt9k4hma.execute-api.us-east-2.amazonaws.com/DEV/programs-list")}},{key:"getRoles",value:function(){return this.httpclient.get("https://4jlqz169v7.execute-api.us-east-2.amazonaws.com/DEV/roles")}},{key:"getHospitalTypes",value:function(){return this.httpclient.get("https://zmif3ap4jf.execute-api.us-east-2.amazonaws.com/beta/hospital-types")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.LFG(a.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},63464:function(e,r,o){"use strict";o.d(r,{j:function(){return St}});var a=o(22238),s=o(3679),n=o(37716),u=o(80610),d=o(72620),c=o(91841),g=o(30240),Z=o(38583);function l(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function f(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,l,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f.action.errors.required)}}function v(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function p(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,v,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f.status.errors.required)}}var m=function(t){return{"is-invalid":t}};function q(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Action Type"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",6),n.YNc(8,f,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,p,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.editActionForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f.action.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f.action.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f.status.errors)}}function A(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function T(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,A,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f2.type.errors.required)}}function h(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function b(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,h,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f2.status.errors.required)}}function x(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Hospital Type"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",15),n.YNc(8,T,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,b,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.hospitalTypeForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f2.type.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f2.type.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f2.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f2.status.errors)}}function I(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function y(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,I,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f3.occupation.errors.required)}}function N(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function w(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,N,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f3.status.errors.required)}}function J(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Occupation"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",16),n.YNc(8,y,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,w,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.occupationForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f3.occupation.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f3.occupation.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f3.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f3.status.errors)}}function F(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function U(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,F,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f4.economicStatus.errors.required)}}function _(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function Q(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,_,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f4.status.errors.required)}}function S(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Economic Status"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",17),n.YNc(8,U,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,Q,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.economicStatusForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f4.economicStatus.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f4.economicStatus.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f4.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f4.status.errors)}}function Y(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function C(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Y,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f5.interval.errors.required)}}function k(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function V(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,k,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f5.status.errors.required)}}function R(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Drug Interval"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",18),n.YNc(8,C,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,V,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.drugIntervalForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f5.interval.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f5.interval.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f5.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f5.status.errors)}}function M(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function K(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,M,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f6.test.errors.required)}}function E(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function G(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,E,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f6.status.errors.required)}}function H(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Lab Test"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",19),n.YNc(8,K,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,G,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.labTestForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f6.test.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f6.test.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f6.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f6.status.errors)}}function z(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function j(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,z,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f7.scan.errors.required)}}function O(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function D(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,O,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f7.status.errors.required)}}function L(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Scan Name"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",20),n.YNc(8,j,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,D,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.scanForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f7.scan.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f7.scan.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f7.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f7.status.errors)}}function P(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function $(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,P,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f8.drug.errors.required)}}function B(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function W(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,B,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f8.status.errors.required)}}function X(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Drug name"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",21),n.YNc(8,$,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,W,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.drugForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f8.drug.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f8.drug.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f8.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f8.status.errors)}}function tt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function et(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,tt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f9.program.errors.required)}}function it(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function rt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,it,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f9.status.errors.required)}}function ot(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Program name"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",22),n.YNc(8,et,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,rt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.programForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f9.program.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f9.program.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f9.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f9.status.errors)}}function at(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function st(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,at,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f10.section.errors.required)}}function nt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function ut(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,nt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f10.status.errors.required)}}function dt(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Section"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",23),n.YNc(8,st,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,ut,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.sectionForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f10.section.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f10.section.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f10.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f10.status.errors)}}function ct(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function gt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,ct,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f11.role_name.errors.required)}}function Zt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function lt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Zt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f11.status.errors.required)}}function ft(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Role name"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",24),n.YNc(8,gt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,lt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.roleForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f11.role_name.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f11.role_name.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f11.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f11.status.errors)}}function vt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function pt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,vt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f12.gender.errors.required)}}function mt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function qt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,mt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f12.status.errors.required)}}function At(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"Gender"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",25),n.YNc(8,pt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,qt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.genderForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f12.gender.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f12.gender.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f12.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f12.status.errors)}}function Tt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function ht(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Tt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f13.state.errors.required)}}function bt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function xt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,bt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f13.status.errors.required)}}function It(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"State"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"input",26),n.YNc(8,ht,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"label",3),n._uU(11,"Status"),n.qZA(),n.TgZ(12,"div"),n.TgZ(13,"div",4),n.TgZ(14,"div",5),n.TgZ(15,"select",8),n.TgZ(16,"option",9),n._uU(17,"Active"),n.qZA(),n.TgZ(18,"option",10),n._uU(19,"Inactive"),n.qZA(),n.qZA(),n.YNc(20,xt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",11),n.TgZ(22,"button",12),n._uU(23," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.stateForm),n.xp6(7),n.Q6J("ngClass",n.VKq(5,m,r.submitted&&r.f13.state.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f13.state.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(7,m,r.submitted&&r.f13.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f13.status.errors)}}function yt(t,e){if(1&t&&(n.TgZ(0,"option",31),n._uU(1),n.qZA()),2&t){var i=e.$implicit;n.s9C("value",i._id),n.xp6(1),n.Oqu(i.state)}}function Nt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function wt(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Nt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f14.stateId.errors.required)}}function Jt(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function Ft(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Jt,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f14.city.errors.required)}}function Ut(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1,"Required"),n.qZA())}function _t(t,e){if(1&t&&(n.TgZ(0,"div",13),n.YNc(1,Ut,2,0,"div",14),n.qZA()),2&t){var i=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.f14.status.errors.required)}}function Qt(t,e){if(1&t){var i=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(i),n.oxw().onSubmit()}),n.TgZ(1,"div",2),n.TgZ(2,"label",3),n._uU(3,"State"),n.qZA(),n.TgZ(4,"div"),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n.TgZ(7,"select",27),n.YNc(8,yt,2,2,"option",28),n.qZA(),n.YNc(9,wt,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"div",2),n.TgZ(11,"label",3),n._uU(12,"City"),n.qZA(),n.TgZ(13,"div"),n.TgZ(14,"div",4),n.TgZ(15,"div",5),n._UZ(16,"input",29),n.YNc(17,Ft,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",2),n.TgZ(19,"label",3),n._uU(20,"Status"),n.qZA(),n.TgZ(21,"div"),n.TgZ(22,"div",4),n.TgZ(23,"div",5),n.TgZ(24,"select",8),n.TgZ(25,"option",9),n._uU(26,"Active"),n.qZA(),n.TgZ(27,"option",10),n._uU(28,"Inactive"),n.qZA(),n.qZA(),n.YNc(29,_t,2,1,"div",7),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(30,"div",30),n.TgZ(31,"button",12),n._uU(32," Update"),n.qZA(),n.qZA(),n.qZA()}if(2&t){var r=n.oxw();n.Q6J("formGroup",r.cityForm),n.xp6(7),n.Q6J("ngClass",n.VKq(8,m,r.submitted&&r.f14.stateId.errors)),n.xp6(1),n.Q6J("ngForOf",r.states),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f14.stateId.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(10,m,r.submitted&&r.f14.city.errors)),n.xp6(1),n.Q6J("ngIf",r.submitted&&r.f14.city.errors),n.xp6(7),n.Q6J("ngClass",n.VKq(12,m,r.submitted&&r.f14.status.errors)),n.xp6(5),n.Q6J("ngIf",r.submitted&&r.f14.status.errors)}}var St=function(){var e=function(){function e(i,r,o,a,n,u,d){t(this,e),this.dialogRef=i,this.data=r,this.masterService=o,this.toasterService=a,this.cdr=n,this.http=u,this.userservice=d,this.editActionForm=new s.cw({action:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.hospitalTypeForm=new s.cw({type:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.occupationForm=new s.cw({occupation:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.economicStatusForm=new s.cw({economicStatus:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.drugIntervalForm=new s.cw({interval:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.labTestForm=new s.cw({test:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.scanForm=new s.cw({scan:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.drugForm=new s.cw({drug:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.programForm=new s.cw({program:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.sectionForm=new s.cw({section:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.roleForm=new s.cw({role_name:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.genderForm=new s.cw({gender:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.stateForm=new s.cw({state:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.cityForm=new s.cw({city:new s.NI("",s.kI.required),stateId:new s.NI("",s.kI.required),status:new s.NI("",s.kI.required)}),this.submitted=!1,this.states=[]}return i(e,[{key:"ngOnInit",value:function(){var t=this;"1"==this.data.type&&this.editActionForm.patchValue(this.data.data),"2"==this.data.type&&this.drugForm.patchValue(this.data.data),"3"==this.data.type&&this.drugIntervalForm.patchValue(this.data.data),"4"==this.data.type&&this.economicStatusForm.patchValue(this.data.data),"5"==this.data.type&&this.genderForm.patchValue(this.data.data),"6"==this.data.type&&this.hospitalTypeForm.patchValue(this.data.data),"7"==this.data.type&&this.labTestForm.patchValue(this.data.data),"8"==this.data.type&&this.occupationForm.patchValue(this.data.data),"9"==this.data.type&&this.programForm.patchValue(this.data.data),"10"==this.data.type&&this.roleForm.patchValue(this.data.data),"11"==this.data.type&&this.scanForm.patchValue(this.data.data),"12"==this.data.type&&this.sectionForm.patchValue(this.data.data),"13"==this.data.type&&this.stateForm.patchValue(this.data.data),"14"==this.data.type&&this.userservice.getMstate().subscribe(function(e){var i;t.states=e,t.cdr.detectChanges(),t.cityForm.patchValue(t.data.data),null===(i=t.cityForm.get("stateId"))||void 0===i||i.setValue(t.data.data.stateId)})}},{key:"onSubmit",value:function(){var t,e,i,r,o,a,s,n,u,d,c,g,Z,l,f,v,p,m,q,A,T,h,b,x,I,y,N,w,J,F=this;this.submitted=!0,"1"==this.data.type&&(this.data.data.action=null===(t=this.editActionForm.get("action"))||void 0===t?void 0:t.value,this.data.data.status=null===(e=this.editActionForm.get("status"))||void 0===e?void 0:e.value,this.editActionForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"6"==this.data.type&&(this.data.data.hospital_type=null===(i=this.hospitalTypeForm.get("type"))||void 0===i?void 0:i.value,this.data.data.status=null===(r=this.hospitalTypeForm.get("status"))||void 0===r?void 0:r.value,this.hospitalTypeForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"8"==this.data.type&&(this.data.data.occupation=null===(o=this.occupationForm.get("occupation"))||void 0===o?void 0:o.value,this.data.data.status=null===(a=this.occupationForm.get("status"))||void 0===a?void 0:a.value,this.occupationForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"4"==this.data.type&&(this.data.data.economicStatus=null===(s=this.economicStatusForm.get("economicStatus"))||void 0===s?void 0:s.value,this.data.data.status=null===(n=this.economicStatusForm.get("status"))||void 0===n?void 0:n.value,this.economicStatusForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"3"==this.data.type&&(this.data.data.interval=null===(u=this.drugIntervalForm.get("interval"))||void 0===u?void 0:u.value,this.data.data.status=null===(d=this.drugIntervalForm.get("status"))||void 0===d?void 0:d.value,this.drugIntervalForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"7"==this.data.type&&(this.data.data.test=null===(c=this.labTestForm.get("test"))||void 0===c?void 0:c.value,this.data.data.status=null===(g=this.labTestForm.get("status"))||void 0===g?void 0:g.value,this.labTestForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"11"==this.data.type&&(this.data.data.scan=null===(Z=this.scanForm.get("scan"))||void 0===Z?void 0:Z.value,this.data.data.status=null===(l=this.scanForm.get("status"))||void 0===l?void 0:l.value,this.scanForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"2"==this.data.type&&(this.data.data.drug=null===(f=this.drugForm.get("drug"))||void 0===f?void 0:f.value,this.data.data.status=null===(v=this.drugForm.get("status"))||void 0===v?void 0:v.value,this.drugForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"9"==this.data.type&&(this.data.data.program=null===(p=this.programForm.get("program"))||void 0===p?void 0:p.value,this.data.data.status=null===(m=this.programForm.get("status"))||void 0===m?void 0:m.value,this.programForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"12"==this.data.type&&(this.data.data.section=null===(q=this.sectionForm.get("section"))||void 0===q?void 0:q.value,this.data.data.status=null===(A=this.sectionForm.get("status"))||void 0===A?void 0:A.value,this.sectionForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"10"==this.data.type&&(this.data.data.role_name=null===(T=this.roleForm.get("role_name"))||void 0===T?void 0:T.value,this.data.data.status=null===(h=this.roleForm.get("status"))||void 0===h?void 0:h.value,this.roleForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"5"==this.data.type&&(this.data.data.gender=null===(b=this.genderForm.get("gender"))||void 0===b?void 0:b.value,this.data.data.status=null===(x=this.genderForm.get("status"))||void 0===x?void 0:x.value,this.genderForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"13"==this.data.type&&(this.data.data.state=null===(I=this.stateForm.get("state"))||void 0===I?void 0:I.value,this.data.data.status=null===(y=this.stateForm.get("status"))||void 0===y?void 0:y.value,this.stateForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")})),"14"==this.data.type&&(this.data.data.stateId=null===(N=this.cityForm.get("stateId"))||void 0===N?void 0:N.value,this.data.data.city=null===(w=this.cityForm.get("city"))||void 0===w?void 0:w.value,this.data.data.status=null===(J=this.cityForm.get("status"))||void 0===J?void 0:J.value,this.cityForm.valid&&this.masterService.updateMaster(this.data.data,this.data.type).subscribe(function(t){F.toasterService.success("updated successfully"),F.dialogRef.close()},function(t){console.log("error",t),F.toasterService.error("Failed to update")}))}},{key:"f",get:function(){return this.editActionForm.controls}},{key:"f2",get:function(){return this.hospitalTypeForm.controls}},{key:"f3",get:function(){return this.occupationForm.controls}},{key:"f4",get:function(){return this.economicStatusForm.controls}},{key:"f5",get:function(){return this.drugIntervalForm.controls}},{key:"f6",get:function(){return this.labTestForm.controls}},{key:"f7",get:function(){return this.scanForm.controls}},{key:"f8",get:function(){return this.drugForm.controls}},{key:"f9",get:function(){return this.programForm.controls}},{key:"f10",get:function(){return this.sectionForm.controls}},{key:"f11",get:function(){return this.roleForm.controls}},{key:"f12",get:function(){return this.genderForm.controls}},{key:"f13",get:function(){return this.stateForm.controls}},{key:"f14",get:function(){return this.cityForm.controls}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Y36(a.so),n.Y36(a.WI),n.Y36(u.$),n.Y36(d.Y),n.Y36(n.sBO),n.Y36(c.eN),n.Y36(g.x))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-edit-masters"]],decls:14,vars:14,consts:[["class","text-start",3,"formGroup","ngSubmit",4,"ngIf"],[1,"text-start",3,"formGroup","ngSubmit"],[1,"col-md-12","mb-6"],[1,"w-100","col-form-label","required","fw-bold","fs-6"],[1,"row"],[1,"col-12","fv-row"],["type","text","formControlName","action",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","status",1,"form-control",3,"ngClass"],["value","active"],["value","inactive"],[1,"text-left"],["type","submit",1,"btn","btn-success"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","formControlName","type",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","occupation",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","economicStatus",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","interval",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","test",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","scan",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","drug",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","program",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","section",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","role_name",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","gender",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["type","text","formControlName","state",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],["formControlName","stateId",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","city",1,"form-control","form-control-lg","form-control-solid","mb-3","mb-lg-0",3,"ngClass"],[1,"text-end"],[3,"value"]],template:function(t,e){1&t&&(n.YNc(0,q,24,9,"form",0),n.YNc(1,x,24,9,"form",0),n.YNc(2,J,24,9,"form",0),n.YNc(3,S,24,9,"form",0),n.YNc(4,R,24,9,"form",0),n.YNc(5,H,24,9,"form",0),n.YNc(6,L,24,9,"form",0),n.YNc(7,X,24,9,"form",0),n.YNc(8,ot,24,9,"form",0),n.YNc(9,dt,24,9,"form",0),n.YNc(10,ft,24,9,"form",0),n.YNc(11,At,24,9,"form",0),n.YNc(12,It,24,9,"form",0),n.YNc(13,Qt,33,14,"form",0)),2&t&&(n.Q6J("ngIf","1"==e.data.type),n.xp6(1),n.Q6J("ngIf","6"==e.data.type),n.xp6(1),n.Q6J("ngIf","8"==e.data.type),n.xp6(1),n.Q6J("ngIf","4"==e.data.type),n.xp6(1),n.Q6J("ngIf","3"==e.data.type),n.xp6(1),n.Q6J("ngIf","7"==e.data.type),n.xp6(1),n.Q6J("ngIf","11"==e.data.type),n.xp6(1),n.Q6J("ngIf","2"==e.data.type),n.xp6(1),n.Q6J("ngIf","9"==e.data.type),n.xp6(1),n.Q6J("ngIf","12"==e.data.type),n.xp6(1),n.Q6J("ngIf","10"==e.data.type),n.xp6(1),n.Q6J("ngIf","5"==e.data.type),n.xp6(1),n.Q6J("ngIf","13"==e.data.type),n.xp6(1),n.Q6J("ngIf","14"==e.data.type))},directives:[Z.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,Z.mk,s.EJ,s.YN,s.Kr,Z.sg],styles:[""]}),e}()}}])}();