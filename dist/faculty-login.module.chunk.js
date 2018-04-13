webpackJsonp(["faculty-login.module"],{

/***/ "../../../../../src/app/faculty-login/faculty-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faculty_login_component__ = __webpack_require__("../../../../../src/app/faculty-login/faculty-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__faculty_login_component__["a" /* FacultyLoginComponent */]
    }
];
var FacultyLoginRoutingModule = (function () {
    function FacultyLoginRoutingModule() {
    }
    return FacultyLoginRoutingModule;
}());
FacultyLoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], FacultyLoginRoutingModule);

//# sourceMappingURL=faculty-login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/faculty-login/faculty-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n   \n    #loginForm{\n        margin-top:10%;\n       /* box-shadow: 1px 1px 1px 2px; */\n    \n   } \n \n   mdl-card{\n       width:90%;\n       \n    padding: 5%;\n   }\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faculty-login/faculty-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id =\"loginPage\" style=\"background-image:url('../../assets/faculty.jpg');background-size:cover; height: 100vh;\nwidth: 100vw;\" >\n  <div class=\"col-sm-2\"></div>\n<div id=\"loginForm\" class=\"col-sm-4\">\n    <mdl-card  mdl-shadow=\"8\">\n        <mdl-card-title mdl-card-expand>\n     <h4>\n        Faculty Login\n        </h4>\n        </mdl-card-title>\n        <mdl-card-actions mdl-card-border>\n          <mdl-layout-spacer></mdl-layout-spacer>\n          <form class=\"form-horizontal\" [formGroup]=\"form\">\n                  <mdl-textfield\n                  type=\"text\"\n                  formControlName=\"username\"\n                  label=\"Username\"\n                  placeholder=\"Enter Username\"\n                  autofocus></mdl-textfield>\n                  <mdl-layout-spacer></mdl-layout-spacer>\n                    <mdl-textfield\n                  type=\"password\"\n                  formControlName=\"password\"\n                  label=\"Password\"\n                  placeholder=\"Enter Password\"\n                  autofocus></mdl-textfield>\n              <mdl-layout-spacer></mdl-layout-spacer>\n                  <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"checkLogin()\">\n                      Login\n                    </button> \n                    &nbsp; &nbsp;\n                    <mdl-spinner [active]=\"showRefresh\"></mdl-spinner>              \n            </form>\n        </mdl-card-actions>\n      </mdl-card>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/faculty-login/faculty-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FacultyLoginComponent = (function () {
    function FacultyLoginComponent(router, auth, loginService, fb) {
        this.router = router;
        this.auth = auth;
        this.loginService = loginService;
        this.fb = fb;
        this.username = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('');
        this.password = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required);
        this.isLoggedIn = false;
    }
    FacultyLoginComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get("isLoggedIn") == "1")
            this.router.navigate(['postQuestion']);
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password,
        });
    };
    FacultyLoginComponent.prototype.checkLogin = function () {
        // validate the user here
        var _this = this;
        if (this.username.value == '' || this.password.value == '') {
            alert("Username/Password cannot be empty");
        }
        else {
            var user = {
                username: this.username.value,
                password: this.password.value
            };
            console.log(user);
            this.loginService.facultyLogin(user)
                .subscribe(function (res) {
                console.log(res);
                if (res.result == 1) {
                    _this.isLoggedIn = true;
                    __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('username', _this.username.value);
                    __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].set('isFacultyLoggedIn', "1");
                    _this.auth.setUserName(res.value.username);
                    _this.auth.setStudentLogin(true);
                    _this.auth.setFacultyDetails(res.value.map);
                    console.log(res.value);
                    _this.router.navigate(['postQuestion']);
                }
                else {
                    _this.isLoggedIn = false;
                    alert("invalid user");
                }
            });
        }
    };
    return FacultyLoginComponent;
}());
FacultyLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-faculty-login',
        template: __webpack_require__("../../../../../src/app/faculty-login/faculty-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faculty-login/faculty-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], FacultyLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=faculty-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/faculty-login/faculty-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyLoginModule", function() { return FacultyLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faculty_login_routing_module__ = __webpack_require__("../../../../../src/app/faculty-login/faculty-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faculty_login_component__ = __webpack_require__("../../../../../src/app/faculty-login/faculty-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_mdl_core__ = __webpack_require__("../../../../@angular-mdl/core/components/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FacultyLoginModule = (function () {
    function FacultyLoginModule() {
    }
    return FacultyLoginModule;
}());
FacultyLoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_mdl_core__["a" /* MdlModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__faculty_login_routing_module__["a" /* FacultyLoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__faculty_login_component__["a" /* FacultyLoginComponent */]
        ]
    })
], FacultyLoginModule);

//# sourceMappingURL=faculty-login.module.js.map

/***/ })

});
//# sourceMappingURL=faculty-login.module.chunk.js.map