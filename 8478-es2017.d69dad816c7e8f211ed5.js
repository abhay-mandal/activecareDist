(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[8478],{68478:function(e,t,n){"use strict";n.r(t),n.d(t,{WizardsModule:function(){return K}});var r=n(38583),o=n(3679),i=n(72789),a=n(69517),s=n(95987),u=n(26215);const l={accountType:"personal",accountTeamSize:"50+",accountName:"",accountPlan:"1",businessName:"Keenthemes Inc.",businessDescriptor:"KEENTHEMES",businessType:"1",businessDescription:"",businessEmail:"corp@support.com",nameOnCard:"Max Doe",cardNumber:"4111 1111 1111 1111",cardExpiryMonth:"1",cardExpiryYear:"2",cardCvv:"123",saveCard:"1"};var c=n(37716);let p=(()=>{class e{constructor(e){this.fb=e,this.unsubscribe=[]}ngOnInit(){this.initForm(),this.updateParentModel({},!0)}initForm(){this.form=this.fb.group({accountType:[this.defaultValues.accountType,[o.kI.required]]});const e=this.form.valueChanges.subscribe(e=>{this.updateParentModel(e,!0)});this.unsubscribe.push(e)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-step1"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:30,vars:3,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","d-flex","align-items-center","text-dark"],["ngbTooltip","Billing is issued based on your selected account type",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"text-gray-400","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[1,"fv-row",3,"formGroup"],[1,"row"],[1,"col-lg-6"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_personal","value","personal",1,"btn-check"],["for","kt_create_account_form_account_type_personal",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center","mb-10"],[1,"svg-icon","svg-icon-3x","me-5",3,"inlineSVG"],[1,"d-block","fw-bold","text-start"],[1,"text-dark","fw-bolder","d-block","fs-4","mb-2"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_corporate","value","corporate",1,"btn-check"],["for","kt_create_account_form_account_type_corporate",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2," Choose Account Type "),c._UZ(3,"i",2),c.qZA(),c.TgZ(4,"div",3),c._uU(5," If you need more info, please check out "),c.TgZ(6,"a",4),c._uU(7," Help Page "),c.qZA(),c._uU(8," . "),c.qZA(),c.qZA(),c.TgZ(9,"div",5),c.TgZ(10,"div",6),c.TgZ(11,"div",7),c._UZ(12,"input",8),c.TgZ(13,"label",9),c._UZ(14,"span",10),c.TgZ(15,"span",11),c.TgZ(16,"span",12),c._uU(17,"Personal Account"),c.qZA(),c.TgZ(18,"span",3),c._uU(19," If you need more info, please check it out "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"div",7),c._UZ(21,"input",13),c.TgZ(22,"label",14),c._UZ(23,"span",10),c.TgZ(24,"span",11),c.TgZ(25,"span",12),c._uU(26,"Corporate Account"),c.qZA(),c.TgZ(27,"span",3),c._uU(28," Create corporate account to mane users "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(29,"div",15),c.qZA(),c.qZA()),2&e&&(c.xp6(9),c.Q6J("formGroup",t.form),c.xp6(5),c.Q6J("inlineSVG","./assets/media/icons/duotune/communication/com005.svg"),c.xp6(9),c.Q6J("inlineSVG","./assets/media/icons/duotune/finance/fin006.svg"))},directives:[a._L,o.JL,o.sg,o.Fj,o._,o.JJ,o.u,i.d$],encapsulation:2}),e})();function d(e,t){1&e&&(c.TgZ(0,"div",40),c._uU(1," Team Account name is required "),c.qZA())}let Z=(()=>{class e{constructor(e){this.fb=e,this.unsubscribe=[]}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({accountTeamSize:[this.defaultValues.accountTeamSize,[o.kI.required]],accountName:[this.defaultValues.accountName,[o.kI.required]],accountPlan:[this.defaultValues.accountPlan,[o.kI.required]]});const e=this.form.valueChanges.subscribe(e=>{this.updateParentModel(e,this.checkForm())});this.unsubscribe.push(e)}checkForm(){var e;return!(null===(e=this.form.get("accountName"))||void 0===e?void 0:e.hasError("required"))}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-step2"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:82,vars:5,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-dark"],[1,"text-gray-400","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"mb-10","fv-row"],[1,"d-flex","align-items-center","form-label","mb-3"],["ngbTooltip","Provide your team size to help us setup your billing",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["data-kt-buttons","true",1,"row","mb-2"],[1,"col"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_1","value","1-1",1,"btn-check"],["for","kt_account_team_size_select_1",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"fw-bolder","fs-3"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_2","value","2-10",1,"btn-check"],["for","kt_account_team_size_select_2",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_3","value","10-50",1,"btn-check"],["for","kt_account_team_size_select_3",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_4","value","50+",1,"btn-check"],["for","kt_account_team_size_select_4",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"form-text"],[1,"form-label","mb-3","required"],["formControlName","accountName","type","text","placeholder","Team Account name",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"mb-0","fv-row"],[1,"d-flex","align-items-center","form-label","mb-5"],["ngbTooltip","Monthly billing will be based on your account plan",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"mb-0"],[1,"d-flex","flex-stack","mb-5","cursor-pointer"],[1,"d-flex","align-items-center","me-2"],[1,"symbol","symbol-50px","me-6"],[1,"symbol-label"],[1,"svg-icon","svg-icon-1","svg-icon-gray-600",3,"inlineSVG"],[1,"d-flex","flex-column"],[1,"fw-bolder","text-gray-800","text-hover-primary","fs-5"],[1,"fs-6","fw-bold","text-gray-400"],[1,"form-check","form-check-custom","form-check-solid"],["formControlName","accountPlan","type","radio","value","1",1,"form-check-input"],["formControlName","accountPlan","type","radio","value","2",1,"form-check-input"],[1,"d-flex","flex-stack","mb-0","cursor-pointer"],["formControlName","accountPlan","type","radio","value","3",1,"form-check-input"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(e,t){if(1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Account Info"),c.qZA(),c.TgZ(3,"div",2),c._uU(4," If you need more info, please check out "),c.TgZ(5,"a",3),c._uU(6," Help Page"),c.qZA(),c._uU(7,". "),c.qZA(),c.qZA(),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"label",6),c._uU(11,"Specify Team Size"),c._UZ(12,"i",7),c.qZA(),c.TgZ(13,"div",8),c.TgZ(14,"div",9),c._UZ(15,"input",10),c.TgZ(16,"label",11),c.TgZ(17,"span",12),c._uU(18,"1-1"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"div",9),c._UZ(20,"input",13),c.TgZ(21,"label",14),c.TgZ(22,"span",12),c._uU(23,"2-10"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(24,"div",9),c._UZ(25,"input",15),c.TgZ(26,"label",16),c.TgZ(27,"span",12),c._uU(28,"10-50"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(29,"div",9),c._UZ(30,"input",17),c.TgZ(31,"label",18),c.TgZ(32,"span",12),c._uU(33,"50+"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(34,"div",19),c._uU(35," Customers will see this shortened version of your statement descriptor "),c.qZA(),c.qZA(),c.TgZ(36,"div",5),c.TgZ(37,"label",20),c._uU(38,"Team Account Name"),c.qZA(),c._UZ(39,"input",21),c.YNc(40,d,2,0,"div",22),c.qZA(),c.TgZ(41,"div",23),c.TgZ(42,"label",24),c._uU(43,"Select Account Plan"),c._UZ(44,"i",25),c.qZA(),c.TgZ(45,"div",26),c.TgZ(46,"label",27),c.TgZ(47,"span",28),c.TgZ(48,"span",29),c.TgZ(49,"span",30),c._UZ(50,"span",31),c.qZA(),c.qZA(),c.TgZ(51,"span",32),c.TgZ(52,"span",33),c._uU(53,"Company Account"),c.qZA(),c.TgZ(54,"span",34),c._uU(55,"Use images to enhance your post flow"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(56,"span",35),c._UZ(57,"input",36),c.qZA(),c.qZA(),c.TgZ(58,"label",27),c.TgZ(59,"span",28),c.TgZ(60,"span",29),c.TgZ(61,"span",30),c._UZ(62,"span",31),c.qZA(),c.qZA(),c.TgZ(63,"span",32),c.TgZ(64,"span",33),c._uU(65,"Developer Account"),c.qZA(),c.TgZ(66,"span",34),c._uU(67,"Use images to your post time"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(68,"span",35),c._UZ(69,"input",37),c.qZA(),c.qZA(),c.TgZ(70,"label",38),c.TgZ(71,"span",28),c.TgZ(72,"span",29),c.TgZ(73,"span",30),c._UZ(74,"span",31),c.qZA(),c.qZA(),c.TgZ(75,"span",32),c.TgZ(76,"span",33),c._uU(77,"Testing Account"),c.qZA(),c.TgZ(78,"span",34),c._uU(79,"Use images to enhance time travel rivers"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(80,"span",35),c._UZ(81,"input",39),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e){let e;c.xp6(8),c.Q6J("formGroup",t.form),c.xp6(32),c.Q6J("ngIf",(null==(e=t.form.get("accountName"))?null:e.hasError("required"))&&(null==(e=t.form.get("accountName"))?null:e.touched)),c.xp6(10),c.Q6J("inlineSVG","./assets/media/icons/duotune/finance/fin001.svg"),c.xp6(12),c.Q6J("inlineSVG","./assets/media/icons/duotune/graphs/gra006.svg"),c.xp6(12),c.Q6J("inlineSVG","./assets/media/icons/duotune/graphs/gra008.svg")}},directives:[o.JL,o.sg,a._L,o.Fj,o._,o.JJ,o.u,r.O5,i.d$],encapsulation:2}),e})();function g(e,t){1&e&&(c.TgZ(0,"div",24),c._uU(1," Business Name is required "),c.qZA())}function f(e,t){1&e&&(c.TgZ(0,"div",24),c._uU(1," Shortened Descriptor is required "),c.qZA())}function m(e,t){1&e&&(c.TgZ(0,"div",24),c._uU(1," Contact Email is required "),c.qZA())}function v(e,t){1&e&&(c.TgZ(0,"div",24),c._uU(1," Wrong email format "),c.qZA())}let b=(()=>{class e{constructor(e){this.fb=e,this.unsubscribe=[]}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({businessName:[this.defaultValues.businessName,[o.kI.required]],businessDescriptor:[this.defaultValues.businessDescriptor,[o.kI.required]],businessType:[this.defaultValues.businessType,[o.kI.required]],businessDescription:[this.defaultValues.businessDescription],businessEmail:[this.defaultValues.businessEmail,[o.kI.required,o.kI.email]]});const e=this.form.valueChanges.subscribe(e=>{this.updateParentModel(e,this.checkForm())});this.unsubscribe.push(e)}checkForm(){var e,t,n,r,o;return!((null===(e=this.form.get("businessName"))||void 0===e?void 0:e.hasError("required"))||(null===(t=this.form.get("businessDescriptor"))||void 0===t?void 0:t.hasError("required"))||(null===(n=this.form.get("businessType"))||void 0===n?void 0:n.hasError("required"))||(null===(r=this.form.get("businessEmail"))||void 0===r?void 0:r.hasError("required"))||(null===(o=this.form.get("businessEmail"))||void 0===o?void 0:o.hasError("email")))}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-step3"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:48,vars:5,consts:[[1,"pb-10","pb-lg-12"],[1,"fw-bolder","text-dark"],[1,"text-gray-400","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"fv-row","mb-10"],[1,"form-label","required"],["name","businessName","formControlName","businessName",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"d-flex","align-items-center","form-label"],[1,"required"],["name","businessDescriptor","formControlName","businessDescriptor",1,"form-control","form-control-lg","form-control-solid"],[1,"form-text"],["name","businessType","formControlName","businessType",1,"form-select","form-select-lg","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"form-label"],["name","businessDescription","rows","3","formControlName","businessDescription",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-row","mb-0"],[1,"fs-6","fw-bold","form-label","required"],["name","businessEmail","formControlName","businessEmail",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(e,t){if(1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Business Details"),c.qZA(),c.TgZ(3,"div",2),c._uU(4," If you need more info, please check out "),c.TgZ(5,"a",3),c._uU(6,"Help Page"),c.qZA(),c._uU(7,". "),c.qZA(),c.qZA(),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"label",6),c._uU(11,"Business Name"),c.qZA(),c._UZ(12,"input",7),c.YNc(13,g,2,0,"div",8),c.qZA(),c.TgZ(14,"div",5),c.TgZ(15,"label",9),c.TgZ(16,"span",10),c._uU(17,"Shortened Descriptor"),c.qZA(),c.qZA(),c._UZ(18,"input",11),c.YNc(19,f,2,0,"div",8),c.TgZ(20,"div",12),c._uU(21," Customers will see this shortened version of your statement descriptor "),c.qZA(),c.qZA(),c.TgZ(22,"div",5),c.TgZ(23,"label",6),c._uU(24,"Corporation Type"),c.qZA(),c.TgZ(25,"select",13),c.TgZ(26,"option",14),c._uU(27,"S Corporation"),c.qZA(),c.TgZ(28,"option",14),c._uU(29,"C Corporation"),c.qZA(),c.TgZ(30,"option",15),c._uU(31,"Sole Proprietorship"),c.qZA(),c.TgZ(32,"option",16),c._uU(33,"Non-profit"),c.qZA(),c.TgZ(34,"option",17),c._uU(35,"Limited Liability"),c.qZA(),c.TgZ(36,"option",18),c._uU(37,"General Partnership"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"div",5),c.TgZ(39,"label",19),c._uU(40,"Business Description"),c.qZA(),c._UZ(41,"textarea",20),c.qZA(),c.TgZ(42,"div",21),c.TgZ(43,"label",22),c._uU(44,"Contact Email"),c.qZA(),c._UZ(45,"input",23),c.YNc(46,m,2,0,"div",8),c.YNc(47,v,2,0,"div",8),c.qZA(),c.qZA()),2&e){let e,n,r,o;c.xp6(8),c.Q6J("formGroup",t.form),c.xp6(5),c.Q6J("ngIf",(null==(e=t.form.get("businessName"))?null:e.hasError("required"))&&(null==(e=t.form.get("businessName"))?null:e.touched)),c.xp6(6),c.Q6J("ngIf",(null==(n=t.form.get("businessDescriptor"))?null:n.hasError("required"))&&(null==(n=t.form.get("businessDescriptor"))?null:n.touched)),c.xp6(27),c.Q6J("ngIf",(null==(r=t.form.get("businessEmail"))?null:r.hasError("required"))&&(null==(r=t.form.get("businessEmail"))?null:r.touched)),c.xp6(1),c.Q6J("ngIf",(null==(o=t.form.get("businessEmail"))?null:o.hasError("email"))&&(null==(o=t.form.get("businessEmail"))?null:o.touched))}},directives:[o.JL,o.sg,o.Fj,o.JJ,o.u,r.O5,o.EJ,o.YN,o.Kr],encapsulation:2}),e})();function q(e,t){1&e&&(c.TgZ(0,"div",59),c._uU(1," Name on card is required "),c.qZA())}function h(e,t){1&e&&(c.TgZ(0,"div",59),c._uU(1," Card number is required "),c.qZA())}function T(e,t){1&e&&(c.TgZ(0,"div",59),c._uU(1," Expiration month is required "),c.qZA())}function _(e,t){1&e&&(c.TgZ(0,"div",59),c._uU(1," Expiration year is required "),c.qZA())}function A(e,t){1&e&&(c.TgZ(0,"div",59),c._uU(1," CVV is required "),c.qZA())}let x=(()=>{class e{constructor(e){this.fb=e,this.unsubscribe=[]}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({nameOnCard:[this.defaultValues.nameOnCard,[o.kI.required]],cardNumber:[this.defaultValues.cardNumber,[o.kI.required]],cardExpiryMonth:[this.defaultValues.cardExpiryMonth,[o.kI.required]],cardExpiryYear:[this.defaultValues.cardExpiryYear,[o.kI.required]],cardCvv:[this.defaultValues.cardCvv,[o.kI.required]],saveCard:["1"]});const e=this.form.valueChanges.subscribe(e=>{this.updateParentModel(e,this.checkForm())});this.unsubscribe.push(e)}checkForm(){var e,t,n,r,o;return!((null===(e=this.form.get("nameOnCard"))||void 0===e?void 0:e.hasError("required"))||(null===(t=this.form.get("cardNumber"))||void 0===t?void 0:t.hasError("required"))||(null===(n=this.form.get("cardExpiryMonth"))||void 0===n?void 0:n.hasError("required"))||(null===(r=this.form.get("cardExpiryYear"))||void 0===r?void 0:r.hasError("required"))||(null===(o=this.form.get("cardCvv"))||void 0===o?void 0:o.hasError("required")))}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.qu))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-step4"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:105,vars:7,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-dark"],[1,"text-gray-400","fw-bold","fs-6"],["href","#",1,"text-primary","fw-bolder"],[3,"formGroup"],[1,"d-flex","flex-column","mb-7","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","form-label","mb-2"],[1,"required"],["ngbTooltip","Specify a card holder's name",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","nameOnCard","type","text","placeholder","Name on card",1,"form-control","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"required","fs-6","fw-bold","form-label","mb-2"],[1,"position-relative"],["formControlName","cardNumber","type","text","placeholder","Enter card number",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-5"],["src","./assets/media/svg/card-logos/visa.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/mastercard.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/american-express.svg","alt","",1,"h-25px"],[1,"row","mb-10"],[1,"col-md-8","fv-row"],[1,"row","fv-row"],[1,"col-6"],["formControlName","cardExpiryMonth",1,"form-select","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["value","12"],["formControlName","cardExpiryYear",1,"form-select","form-select-solid"],["value","2021"],["value","2022"],["value","2023"],["value","2024"],["value","2025"],["value","2026"],["value","2027"],["value","2028"],["value","2029"],["value","2030"],["value","2031"],[1,"col-md-4","fv-row"],["ngbTooltip","Enter a card CVV code",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","cardCvv","type","text","minlength","3","maxlength","4","placeholder","CVV",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-3"],[1,"svg-icon","svg-icon-2hx",3,"inlineSVG"],[1,"d-flex","flex-stack"],[1,"me-5"],[1,"fs-6","fw-bold","form-label"],[1,"fs-7","fw-bold","text-gray-400"],[1,"form-check","form-switch","form-check-custom","form-check-solid"],["formControlName","saveCard","type","checkbox","value","1",1,"form-check-input"],[1,"form-check-label","fw-bold","text-gray-400"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(e,t){if(1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Billing Details"),c.qZA(),c.TgZ(3,"div",2),c._uU(4," If you need more info, please check out "),c.TgZ(5,"a",3),c._uU(6,"Help Page"),c.qZA(),c._uU(7,". "),c.qZA(),c.qZA(),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"label",6),c.TgZ(11,"span",7),c._uU(12,"Name On Card"),c.qZA(),c._UZ(13,"i",8),c.qZA(),c._UZ(14,"input",9),c.YNc(15,q,2,0,"div",10),c.qZA(),c.TgZ(16,"div",5),c.TgZ(17,"label",11),c._uU(18,"Card Number"),c.qZA(),c.TgZ(19,"div",12),c._UZ(20,"input",13),c.YNc(21,h,2,0,"div",10),c.TgZ(22,"div",14),c._UZ(23,"img",15),c._UZ(24,"img",16),c._UZ(25,"img",17),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"div",18),c.TgZ(27,"div",19),c.TgZ(28,"label",11),c._uU(29,"Expiration Date"),c.qZA(),c.TgZ(30,"div",20),c.TgZ(31,"div",21),c.TgZ(32,"select",22),c._UZ(33,"option"),c.TgZ(34,"option",23),c._uU(35,"1"),c.qZA(),c.TgZ(36,"option",24),c._uU(37,"2"),c.qZA(),c.TgZ(38,"option",25),c._uU(39,"3"),c.qZA(),c.TgZ(40,"option",26),c._uU(41,"4"),c.qZA(),c.TgZ(42,"option",27),c._uU(43,"5"),c.qZA(),c.TgZ(44,"option",28),c._uU(45,"6"),c.qZA(),c.TgZ(46,"option",29),c._uU(47,"7"),c.qZA(),c.TgZ(48,"option",30),c._uU(49,"8"),c.qZA(),c.TgZ(50,"option",31),c._uU(51,"9"),c.qZA(),c.TgZ(52,"option",32),c._uU(53,"10"),c.qZA(),c.TgZ(54,"option",33),c._uU(55,"11"),c.qZA(),c.TgZ(56,"option",34),c._uU(57,"12"),c.qZA(),c.qZA(),c.YNc(58,T,2,0,"div",10),c.qZA(),c.TgZ(59,"div",21),c.TgZ(60,"select",35),c._UZ(61,"option"),c.TgZ(62,"option",36),c._uU(63,"2021"),c.qZA(),c.TgZ(64,"option",37),c._uU(65,"2022"),c.qZA(),c.TgZ(66,"option",38),c._uU(67,"2023"),c.qZA(),c.TgZ(68,"option",39),c._uU(69,"2024"),c.qZA(),c.TgZ(70,"option",40),c._uU(71,"2025"),c.qZA(),c.TgZ(72,"option",41),c._uU(73,"2026"),c.qZA(),c.TgZ(74,"option",42),c._uU(75,"2027"),c.qZA(),c.TgZ(76,"option",43),c._uU(77,"2028"),c.qZA(),c.TgZ(78,"option",44),c._uU(79,"2029"),c.qZA(),c.TgZ(80,"option",45),c._uU(81,"2030"),c.qZA(),c.TgZ(82,"option",46),c._uU(83,"2031"),c.qZA(),c.qZA(),c.YNc(84,_,2,0,"div",10),c.qZA(),c.qZA(),c.qZA(),c.TgZ(85,"div",47),c.TgZ(86,"label",6),c.TgZ(87,"span",7),c._uU(88,"CVV"),c.qZA(),c._UZ(89,"i",48),c.qZA(),c.TgZ(90,"div",12),c._UZ(91,"input",49),c.YNc(92,A,2,0,"div",10),c.TgZ(93,"div",50),c._UZ(94,"span",51),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(95,"div",52),c.TgZ(96,"div",53),c.TgZ(97,"label",54),c._uU(98,"Save Card for further billing?"),c.qZA(),c.TgZ(99,"div",55),c._uU(100," If you need more info, please check budget planning "),c.qZA(),c.qZA(),c.TgZ(101,"label",56),c._UZ(102,"input",57),c.TgZ(103,"span",58),c._uU(104,"Save Card"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e){let e,n,r,o,i;c.xp6(8),c.Q6J("formGroup",t.form),c.xp6(7),c.Q6J("ngIf",(null==(e=t.form.get("nameOnCard"))?null:e.hasError("required"))&&(null==(e=t.form.get("nameOnCard"))?null:e.touched)),c.xp6(6),c.Q6J("ngIf",(null==(n=t.form.get("cardNumber"))?null:n.hasError("required"))&&(null==(n=t.form.get("cardNumber"))?null:n.touched)),c.xp6(37),c.Q6J("ngIf",(null==(r=t.form.get("cardExpiryMonth"))?null:r.hasError("required"))&&(null==(r=t.form.get("cardExpiryMonth"))?null:r.touched)),c.xp6(26),c.Q6J("ngIf",(null==(o=t.form.get("cardExpiryYear"))?null:o.hasError("required"))&&(null==(o=t.form.get("cardExpiryYear"))?null:o.touched)),c.xp6(8),c.Q6J("ngIf",(null==(i=t.form.get("cardCvv"))?null:i.hasError("required"))&&(null==(i=t.form.get("cardCvv"))?null:i.touched)),c.xp6(2),c.Q6J("inlineSVG","./assets/media/icons/duotune/finance/fin002.svg")}},directives:[o.JL,o.sg,a._L,o.Fj,o.JJ,o.u,r.O5,o.EJ,o.YN,o.Kr,o.wO,o.nD,i.d$,o.Wl],encapsulation:2}),e})(),U=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-step5"]],decls:21,vars:0,consts:[[1,"pb-8","pb-lg-10"],[1,"fw-bolder","text-dark"],[1,"text-gray-400","fw-bold","fs-6"],[1,"link-primary","fw-bolder","cursor-pointer"],[1,"mb-0"],[1,"fs-6","text-gray-600","mb-5"],[1,"notice","d-flex","bg-light-warning","rounded","border-warning","border","border-dashed","p-6"],[1,"svg-icon","svg-icon-2tx","svg-icon-warning","me-4"],[1,"d-flex","flex-stack","flex-grow-1"],[1,"fw-bold"],[1,"text-gray-800","fw-bolder"],[1,"fs-6","text-gray-600"],[1,"fw-bolder","cursor-pointer"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Your Are Done!"),c.qZA(),c.TgZ(3,"div",2),c._uU(4," If you need more info, please "),c.TgZ(5,"a",3),c._uU(6," Sign In"),c.qZA(),c._uU(7,". "),c.qZA(),c.qZA(),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c._uU(10," Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience. "),c.qZA(),c.TgZ(11,"div",6),c._UZ(12,"span",7),c.TgZ(13,"div",8),c.TgZ(14,"div",9),c.TgZ(15,"h4",10),c._uU(16,"We need your attention!"),c.qZA(),c.TgZ(17,"div",11),c._uU(18," To start using great tools, please, please "),c.TgZ(19,"a",12),c._uU(20," Create Team Platform"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA())},encapsulation:2}),e})();function y(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step1",11),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function k(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step2",11),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function w(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step3",11),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function C(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step4",11),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function S(e,t){1&e&&(c.ynx(0),c._UZ(1,"app-step5",12),c.BQk())}function N(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"button",13),c.NdJ("click",function(){return c.CHM(e),c.oxw().prevStep()}),c._UZ(2,"span",14),c._uU(3," Back "),c.qZA(),c.BQk()}2&e&&(c.xp6(2),c.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr063.svg"))}function J(e,t){1&e&&(c.ynx(0),c._uU(1),c._UZ(2,"span",17),c.BQk()),2&e&&(c.xp6(1),c.hij(" Continue "," "," "),c.xp6(1),c.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr064.svg"))}function Q(e,t){1&e&&(c.ynx(0),c._uU(1," Submit "),c.BQk())}function $(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"div"),c.TgZ(2,"button",15),c.NdJ("click",function(){return c.CHM(e),c.oxw().nextStep()}),c.TgZ(3,"span",16),c.YNc(4,J,3,2,"ng-container",8),c.YNc(5,Q,2,0,"ng-container",8),c.qZA(),c.qZA(),c.qZA(),c.BQk()}if(2&e){const e=c.oxw();c.xp6(2),c.Q6J("disabled",!e.isCurrentFormValid$.value),c.xp6(2),c.Q6J("ngIf",e.currentStep$.value<e.formsCount-1),c.xp6(1),c.Q6J("ngIf",e.currentStep$.value===e.formsCount-1)}}const E=function(e,t){return{current:e,completed:t}},I=function(e){return{current:e}};let V=(()=>{class e{constructor(){this.formsCount=5,this.account$=new u.X(l),this.currentStep$=new u.X(1),this.isCurrentFormValid$=new u.X(!1),this.unsubscribe=[],this.updateAccount=(e,t)=>{const n=Object.assign(Object.assign({},this.account$.value),e);this.account$.next(n),this.isCurrentFormValid$.next(t)}}ngOnInit(){}nextStep(){const e=this.currentStep$.value+1;e>this.formsCount||this.currentStep$.next(e)}prevStep(){const e=this.currentStep$.value-1;0!==e&&this.currentStep$.next(e)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-horizontal"]],decls:30,vars:26,consts:[[1,"card"],[1,"card-body"],["id","kt_create_account_stepper",1,"stepper","stepper-links","d-flex","flex-column","pt-15"],[1,"stepper-nav","mb-5"],[1,"stepper-item",3,"ngClass"],[1,"stepper-title"],["noValidate","","id","kt_create_account_form",1,"mx-auto","mw-600px","w-100","pt-15","pb-10"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-15"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],[1,"svg-icon","svg-icon-4","me-1",3,"inlineSVG"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"disabled","click"],[1,"indicator-label"],[1,"svg-icon","svg-icon-3","ms-2","me-0",3,"inlineSVG"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"h3",5),c._uU(6,"Account Type"),c.qZA(),c.qZA(),c.TgZ(7,"div",4),c.TgZ(8,"h3",5),c._uU(9,"Account Info"),c.qZA(),c.qZA(),c.TgZ(10,"div",4),c.TgZ(11,"h3",5),c._uU(12,"Business Info"),c.qZA(),c.qZA(),c.TgZ(13,"div",4),c.TgZ(14,"h3",5),c._uU(15,"Billing Details"),c.qZA(),c.qZA(),c.TgZ(16,"div",4),c.TgZ(17,"h3",5),c._uU(18,"Completed"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"form",6),c.TgZ(20,"div",7),c.YNc(21,y,2,2,"ng-container",8),c.YNc(22,k,2,2,"ng-container",8),c.YNc(23,w,2,2,"ng-container",8),c.YNc(24,C,2,2,"ng-container",8),c.YNc(25,S,2,0,"ng-container",8),c.qZA(),c.TgZ(26,"div",9),c.TgZ(27,"div",10),c.YNc(28,N,4,1,"ng-container",8),c.qZA(),c.YNc(29,$,6,3,"ng-container",8),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("ngClass",c.WLB(12,E,1===t.currentStep$.value,t.currentStep$.value>1)),c.xp6(3),c.Q6J("ngClass",c.WLB(15,E,2===t.currentStep$.value,t.currentStep$.value>2)),c.xp6(3),c.Q6J("ngClass",c.WLB(18,E,3===t.currentStep$.value,t.currentStep$.value>3)),c.xp6(3),c.Q6J("ngClass",c.WLB(21,E,4===t.currentStep$.value,t.currentStep$.value>4)),c.xp6(3),c.Q6J("ngClass",c.VKq(24,I,5===t.currentStep$.value)),c.xp6(5),c.Q6J("ngIf",1===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",2===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",3===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",4===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",5===t.currentStep$.value),c.xp6(3),c.Q6J("ngIf",1!==t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",t.currentStep$.value!==t.formsCount))},directives:[r.mk,o._Y,o.JL,r.O5,p,Z,b,x,U,i.d$],encapsulation:2}),e})();function Y(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step1",18),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function M(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step2",18),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function B(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step3",18),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function P(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"app-step4",18),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("updateParentModel",e.updateAccount)("defaultValues",e.account$.value)}}function D(e,t){1&e&&(c.ynx(0),c._UZ(1,"app-step5",19),c.BQk())}function F(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"button",20),c.NdJ("click",function(){return c.CHM(e),c.oxw().prevStep()}),c._UZ(2,"span",21),c._uU(3," Back "),c.qZA(),c.BQk()}2&e&&(c.xp6(2),c.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr063.svg"))}function O(e,t){1&e&&(c.ynx(0),c._uU(1),c._UZ(2,"span",24),c.BQk()),2&e&&(c.xp6(1),c.hij(" Continue "," "," "),c.xp6(1),c.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr064.svg"))}function z(e,t){1&e&&(c.ynx(0),c._uU(1," Submit "),c.BQk())}function G(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"div"),c.TgZ(2,"button",22),c.NdJ("click",function(){return c.CHM(e),c.oxw().nextStep()}),c.TgZ(3,"span",23),c.YNc(4,O,3,2,"ng-container",15),c.YNc(5,z,2,0,"ng-container",15),c.qZA(),c.qZA(),c.qZA(),c.BQk()}if(2&e){const e=c.oxw();c.xp6(2),c.Q6J("disabled",!e.isCurrentFormValid$.value),c.xp6(2),c.Q6J("ngIf",e.currentStep$.value<e.formsCount-1),c.xp6(1),c.Q6J("ngIf",e.currentStep$.value===e.formsCount-1)}}const L=function(e,t){return{current:e,completed:t}},X=function(e){return{current:e}};let j=(()=>{class e{constructor(){this.formsCount=5,this.account$=new u.X(l),this.currentStep$=new u.X(1),this.isCurrentFormValid$=new u.X(!1),this.unsubscribe=[],this.updateAccount=(e,t)=>{const n=Object.assign(Object.assign({},this.account$.value),e);this.account$.next(n),this.isCurrentFormValid$.next(t)}}ngOnInit(){}nextStep(){const e=this.currentStep$.value+1;e>this.formsCount||this.currentStep$.next(e)}prevStep(){const e=this.currentStep$.value-1;0!==e&&this.currentStep$.next(e)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-vertical"]],decls:71,vars:26,consts:[["id","kt_create_account_stepper",1,"stepper","stepper-pills","stepper-column","d-flex","flex-column","flex-xl-row","flex-row-fluid"],[1,"d-flex","justify-content-center","bg-white","rounded","justify-content-xl-start","flex-row-auto","w-100","w-xl-300px","w-xxl-400px","me-9"],[1,"px-6","px-lg-10","px-xxl-15","py-20"],[1,"stepper-nav"],[1,"stepper-item",3,"ngClass"],[1,"stepper-line","w-40px"],[1,"stepper-icon","w-40px","h-40px"],[1,"stepper-check","fas","fa-check"],[1,"stepper-number"],[1,"stepper-label"],[1,"stepper-title"],[1,"stepper-desc","fw-bold"],[1,"d-flex","flex-row-fluid","flex-center","bg-white","rounded"],["noValidate","","id","kt_create_account_form",1,"py-20","w-100","w-xl-700px","px-9"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-10"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],[1,"svg-icon","svg-icon-4","me-1",3,"inlineSVG"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"disabled","click"],[1,"indicator-label"],[1,"svg-icon","svg-icon-3","ms-2","me-0",3,"inlineSVG"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c._UZ(5,"div",5),c.TgZ(6,"div",6),c._UZ(7,"i",7),c.TgZ(8,"span",8),c._uU(9,"1"),c.qZA(),c.qZA(),c.TgZ(10,"div",9),c.TgZ(11,"h3",10),c._uU(12,"Account Type"),c.qZA(),c.TgZ(13,"div",11),c._uU(14,"Setup Your Account Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"div",4),c._UZ(16,"div",5),c.TgZ(17,"div",6),c._UZ(18,"i",7),c.TgZ(19,"span",8),c._uU(20,"2"),c.qZA(),c.qZA(),c.TgZ(21,"div",9),c.TgZ(22,"h3",10),c._uU(23,"Account Settings"),c.qZA(),c.TgZ(24,"div",11),c._uU(25,"Setup Your Account Settings"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"div",4),c._UZ(27,"div",5),c.TgZ(28,"div",6),c._UZ(29,"i",7),c.TgZ(30,"span",8),c._uU(31,"3"),c.qZA(),c.qZA(),c.TgZ(32,"div",9),c.TgZ(33,"h3",10),c._uU(34,"Business Info"),c.qZA(),c.TgZ(35,"div",11),c._uU(36,"Your Business Related Info"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(37,"div",4),c._UZ(38,"div",5),c.TgZ(39,"div",6),c._UZ(40,"i",7),c.TgZ(41,"span",8),c._uU(42,"4"),c.qZA(),c.qZA(),c.TgZ(43,"div",9),c.TgZ(44,"h3",10),c._uU(45,"Billing Details"),c.qZA(),c.TgZ(46,"div",11),c._uU(47,"Set Your Payment Methods"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(48,"div",4),c._UZ(49,"div",5),c.TgZ(50,"div",6),c._UZ(51,"i",7),c.TgZ(52,"span",8),c._uU(53,"5"),c.qZA(),c.qZA(),c.TgZ(54,"div",9),c.TgZ(55,"h3",10),c._uU(56,"Completed"),c.qZA(),c.TgZ(57,"div",11),c._uU(58,"Woah, we are here"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(59,"div",12),c.TgZ(60,"form",13),c.TgZ(61,"div",14),c.YNc(62,Y,2,2,"ng-container",15),c.YNc(63,M,2,2,"ng-container",15),c.YNc(64,B,2,2,"ng-container",15),c.YNc(65,P,2,2,"ng-container",15),c.YNc(66,D,2,0,"ng-container",15),c.qZA(),c.TgZ(67,"div",16),c.TgZ(68,"div",17),c.YNc(69,F,4,1,"ng-container",15),c.qZA(),c.YNc(70,G,6,3,"ng-container",15),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("ngClass",c.WLB(12,L,1===t.currentStep$.value,t.currentStep$.value>1)),c.xp6(11),c.Q6J("ngClass",c.WLB(15,L,2===t.currentStep$.value,t.currentStep$.value>2)),c.xp6(11),c.Q6J("ngClass",c.WLB(18,L,3===t.currentStep$.value,t.currentStep$.value>3)),c.xp6(11),c.Q6J("ngClass",c.WLB(21,L,4===t.currentStep$.value,t.currentStep$.value>4)),c.xp6(11),c.Q6J("ngClass",c.VKq(24,X,5===t.currentStep$.value)),c.xp6(14),c.Q6J("ngIf",1===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",2===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",3===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",4===t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",5===t.currentStep$.value),c.xp6(3),c.Q6J("ngIf",1!==t.currentStep$.value),c.xp6(1),c.Q6J("ngIf",t.currentStep$.value!==t.formsCount))},directives:[r.mk,o._Y,o.JL,r.O5,p,Z,b,x,U,i.d$],encapsulation:2}),e})();const W=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-wizards"]],decls:1,vars:0,template:function(e,t){1&e&&c._UZ(0,"router-outlet")},directives:[s.lC],encapsulation:2}),e})(),children:[{path:"horizontal",component:V},{path:"vertical",component:j},{path:"",redirectTo:"horizontal",pathMatch:"full"},{path:"**",redirectTo:"horizontal",pathMatch:"full"}]}];let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[s.Bz.forChild(W)],s.Bz]}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,H,o.UX,i.vi,a.HK]]}),e})()}}]);