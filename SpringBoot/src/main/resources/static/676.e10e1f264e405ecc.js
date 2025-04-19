"use strict";(self.webpackChunkFlex=self.webpackChunkFlex||[]).push([[676],{8676:(v,d,i)=>{i.r(d),i.d(d,{RentDetailsComponent:()=>b});var s=i(177),e=i(4438),u=i(5865),m=i(5725),p=i(5085);const c=a=>({show:a}),l=a=>({display:a});function h(a,g){if(1&a){const t=e.RV6();e.j41(0,"img",45),e.bIt("click",function(){const n=e.eBV(t).index,r=e.XpG();return e.Njj(r.openImage(n))}),e.k0s()}2&a&&e.Y8G("src",g.$implicit,e.B4B)}function _(a,g){if(1&a&&(e.j41(0,"div",46),e.nrm(1,"img",47),e.k0s()),2&a){const t=g.$implicit;e.R7$(),e.Y8G("src",t,e.B4B)}}let b=(()=>{class a{router;actRoute;carService;authService;carId;car;showCarousel=!1;carImages;imageIndex;showImage=!1;carFeatures;showMainImage=!1;constructor(t,o,n,r){this.router=t,this.actRoute=o,this.carService=n,this.authService=r}ngOnInit(){this.actRoute.params.subscribe(t=>{this.carId=+Number(t.carId),this.car=this.carService.getCarById(this.carId),this.carService.getCarById(this.carId).subscribe(o=>this.car=o),this.carFeatures=this.carService.getCarFeatures(this.carId)})}handleMainImage(){this.showMainImage=!this.showMainImage}openImage(t){this.imageIndex=t,this.showImage=!this.showImage}closeModal(){this.showImage=!1}openCarousel(){this.showCarousel=!this.showCarousel}goToLogin(){this.authService.isTokenPresent()||this.router.navigate(["/login"],{queryParams:{toLogin:!0}}),this.authService.verifyToken().subscribe({next:t=>{this.router.navigate(["/login/payment"])},error:t=>{401===t.status?console.log("Session expired. Please login again."):alert("An error occurred. Please try again."),this.router.navigate(["/login"],{queryParams:{toLogin:!0}})}})}static \u0275fac=function(o){return new(o||a)(e.rXU(u.Ix),e.rXU(u.nX),e.rXU(m.K),e.rXU(p.k))};static \u0275cmp=e.VBU({type:a,selectors:[["app-rent-details"]],standalone:!0,features:[e.aNF],decls:109,vars:34,consts:[[1,"container"],[1,"row"],[1,"col-9","main"],["alt","",1,"mainImage","img-fluid",3,"click","src"],[1,"photosButton","btn","btn-danger",3,"click"],[1,"d-flex","flex-column","align-items-between","justify-content-between","sideImages","col-3"],["class","col-4 sideImage img-fluid",3,"src","click",4,"ngFor","ngForOf"],[1,"features"],[1,"btn","btnWidth"],[1,"btn","btnWidth","btnPurpose",3,"click"],[1,"container2","mt-5"],[1,"container3","border-dark","card","card-custom-shadow",2,"margin","20px 300px 0px 0px"],[1,"card-body","border-secondary","d-grid","grid",2,"margin","0px 30px 30px 30px"],[1,"row","icon"],[1,"col-2"],["src","IconFeature/carBrand.png",1,"featureLogo","col-4"],[1,"col-10"],[1,"ms-2",2,"display","block"],[1,"brand","ms-2"],["src","IconFeature/Price tag.png",1,"featureLogo","col-4"],["src","IconFeature/purpose.png",1,"featureLogo","col-4"],["src","IconFeature/Transmission.svg",1,"featureLogo","col-4"],["src","IconFeature/engine.png",1,"featureLogo","col-4"],["src","IconFeature/AirBags.jpg",1,"featureLogo","col-4"],["src","IconFeature/Fuel.png",1,"featureLogo","col-4"],["id","imageModal",1,"modal","modal-lg",3,"ngClass","ngStyle"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content","openImageModal"],["alt","",1,"openImage",3,"src"],[1,"btn","btn-danger","close",3,"click"],[1,"modal","modal-lg",3,"ngClass","ngStyle"],[1,"modal-content"],["id","demo",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#demo","data-bs-slide-to","0",1,"active"],["type","button","data-bs-target","#demo","data-bs-slide-to","1"],["type","button","data-bs-target","#demo","data-bs-slide-to","2"],[1,"carousel-inner"],[1,"carousel-item","active"],[1,"d-block","w-100","carouselImage",3,"src"],["class","carousel-item ",4,"ngFor","ngForOf"],["type","button","data-bs-target","#demo","data-bs-slide","prev",1,"carousel-control-prev"],[1,"carousel-control-prev-icon"],["type","button","data-bs-target","#demo","data-bs-slide","next",1,"carousel-control-next"],[1,"carousel-control-next-icon"],[1,"col-4","sideImage","img-fluid",3,"click","src"],[1,"carousel-item"],[1,"col-4","img-fluid","carouselImage",3,"src"]],template:function(o,n){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"img",3),e.bIt("click",function(){return n.handleMainImage()}),e.k0s(),e.j41(4,"button",4),e.bIt("click",function(){return n.openCarousel()}),e.EFF(5,"See all photos"),e.k0s()(),e.j41(6,"div",5),e.DNE(7,h,1,1,"img",6),e.k0s()(),e.j41(8,"div",7)(9,"div")(10,"h5",8),e.EFF(11),e.k0s()(),e.j41(12,"div")(13,"a",8),e.EFF(14),e.k0s()(),e.j41(15,"div")(16,"Button",9),e.bIt("click",function(){return n.goToLogin()}),e.EFF(17),e.k0s()()(),e.j41(18,"div",10)(19,"h4"),e.EFF(20,"Know more about this Car"),e.k0s(),e.j41(21,"div",11)(22,"div",12)(23,"div",13)(24,"div",14),e.nrm(25,"img",15),e.k0s(),e.j41(26,"div",16)(27,"a",17),e.EFF(28,"Car brand"),e.k0s(),e.j41(29,"strong",18),e.EFF(30),e.k0s()()(),e.j41(31,"div",13)(32,"div",14),e.nrm(33,"img",19),e.k0s(),e.j41(34,"div",16)(35,"a",17),e.EFF(36,"Car Price"),e.k0s(),e.j41(37,"strong",18),e.EFF(38),e.k0s()()(),e.j41(39,"div",13)(40,"div",14),e.nrm(41,"img",20),e.k0s(),e.j41(42,"div",16)(43,"a",17),e.EFF(44,"Car Purpose"),e.k0s(),e.j41(45,"strong",18),e.EFF(46),e.k0s()()(),e.j41(47,"div",13)(48,"div",14),e.nrm(49,"img",21),e.k0s(),e.j41(50,"div",16)(51,"a",17),e.EFF(52,"Transmission"),e.k0s(),e.j41(53,"strong",18),e.EFF(54),e.k0s()()(),e.j41(55,"div",13)(56,"div",14),e.nrm(57,"img",22),e.k0s(),e.j41(58,"div",16)(59,"a",17),e.EFF(60,"Engine Type"),e.k0s(),e.j41(61,"strong",18),e.EFF(62),e.k0s()()(),e.j41(63,"div",13)(64,"div",14),e.nrm(65,"img",23),e.k0s(),e.j41(66,"div",16)(67,"a",17),e.EFF(68,"Air Bags"),e.k0s(),e.j41(69,"strong",18),e.EFF(70),e.k0s()()(),e.j41(71,"div",13)(72,"div",14),e.nrm(73,"img",24),e.k0s(),e.j41(74,"div",16)(75,"a",17),e.EFF(76,"Fuel Tank Capacity"),e.k0s(),e.j41(77,"strong",18),e.EFF(78),e.k0s()()()()()()(),e.j41(79,"div",25)(80,"div",26)(81,"div",27),e.nrm(82,"img",28),e.j41(83,"a",29),e.bIt("click",function(){return n.handleMainImage()}),e.EFF(84,"\xd7"),e.k0s()()()(),e.j41(85,"div",25)(86,"div",26)(87,"div",27),e.nrm(88,"img",28),e.j41(89,"a",29),e.bIt("click",function(){return n.closeModal()}),e.EFF(90,"\xd7"),e.k0s()()()(),e.j41(91,"div",30)(92,"div",26)(93,"div",31)(94,"div",32)(95,"div",33),e.nrm(96,"button",34)(97,"button",35)(98,"button",36),e.k0s(),e.j41(99,"div",37)(100,"div",38),e.nrm(101,"img",39),e.k0s(),e.DNE(102,_,2,1,"div",40),e.k0s(),e.j41(103,"button",41),e.nrm(104,"span",42),e.k0s(),e.j41(105,"button",43),e.nrm(106,"span",44),e.k0s()(),e.j41(107,"a",29),e.bIt("click",function(){return n.openCarousel()}),e.EFF(108,"\xd7"),e.k0s()()()()),2&o&&(e.R7$(3),e.Y8G("src",n.car.carImages[0],e.B4B),e.R7$(4),e.Y8G("ngForOf",n.car.carImages.slice(1)),e.R7$(4),e.JRh(n.car.carBrand),e.R7$(3),e.SpI("Price : \u20b9 ",n.car.carPrice,""),e.R7$(3),e.JRh(n.car.carPurpose),e.R7$(13),e.JRh(n.car.carBrand),e.R7$(8),e.SpI("\u20b9 ",n.car.carPrice,""),e.R7$(8),e.JRh(n.car.carPurpose),e.R7$(8),e.JRh(null==n.car.carFeatures[0]?null:n.car.carFeatures[0].transmissionType),e.R7$(8),e.JRh(null==n.car.carFeatures[0]?null:n.car.carFeatures[0].engineType),e.R7$(8),e.SpI("",null==n.car.carFeatures[0]?null:n.car.carFeatures[0].airBags," Nos"),e.R7$(8),e.SpI("",null==n.car.carFeatures[0]?null:n.car.carFeatures[0].fuelTankCapacity," Litres"),e.R7$(),e.Y8G("ngClass",e.eq3(22,c,n.showMainImage))("ngStyle",e.eq3(24,l,n.showMainImage?"block":"none")),e.R7$(3),e.Y8G("src",n.car.carImages[0],e.B4B),e.R7$(3),e.Y8G("ngClass",e.eq3(26,c,n.showImage))("ngStyle",e.eq3(28,l,n.showImage?"block":"none")),e.R7$(3),e.Y8G("src",n.car.carImages[n.imageIndex+1],e.B4B),e.R7$(3),e.Y8G("ngClass",e.eq3(30,c,n.showCarousel))("ngStyle",e.eq3(32,l,n.showCarousel?"block":"none")),e.R7$(10),e.Y8G("src",n.car.carImages[0],e.B4B),e.R7$(),e.Y8G("ngForOf",n.car.carImages.slice(1)))},dependencies:[s.B3,s.YU,s.pM,s.MD],styles:[".container[_ngcontent-%COMP%]{margin:70px 50px 100px}.container2[_ngcontent-%COMP%]{margin-left:30px}.mainImage[_ngcontent-%COMP%]{border-radius:20px;height:100%}.sideImage[_ngcontent-%COMP%]{border-radius:10px;width:100%}.container[_ngcontent-%COMP%]{max-width:1200px}img[_ngcontent-%COMP%]:hover{cursor:pointer}.main[_ngcontent-%COMP%]{position:relative}.photosButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;padding:10px 15px}.close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;padding:0 10px;font-size:30px}.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);height:auto;width:5%;height:10%;background-color:red;padding:0;opacity:1}.carousel-control-next-icon[_ngcontent-%COMP%]{color:#000}.carousel-indicators.active[_ngcontent-%COMP%]{background-color:red}.openImage[_ngcontent-%COMP%], .openImageModal[_ngcontent-%COMP%]{border-radius:25px}.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:25px;width:100%;height:100%;object-fit:cover}.modal[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.modal-content[_ngcontent-%COMP%]{border-radius:25px}.features[_ngcontent-%COMP%]{margin:50px 200px 20px 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}.btnWidth[_ngcontent-%COMP%]{height:50px;background-color:#e8e9eb;font-size:25px;width:250px;color:#000;margin:20px}.btnCrud[_ngcontent-%COMP%]{height:50px;font-size:25px;width:250px;color:#000;margin-left:320px}.featureLogo[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:10px}.card-body[_ngcontent-%COMP%]{margin-top:30px 30px 30px 30px}.card-custom-shadow[_ngcontent-%COMP%]{box-shadow:0 10px 10px #0003;border-color:#e8e9eb}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(180px,250px))}.icon[_ngcontent-%COMP%]{margin:30px 0}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.btnPurpose[_ngcontent-%COMP%]{width:150px}.btnPurpose[_ngcontent-%COMP%]:hover{background-color:green;border-color:green}"]})}return a})()}}]);