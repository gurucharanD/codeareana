webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./faculty-login/faculty-login.module": [
		"../../../../../src/app/faculty-login/faculty-login.module.ts",
		"faculty-login.module"
	],
	"./register-user/register.module": [
		"../../../../../src/app/register-user/register.module.ts",
		"register.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n   \n    #loginForm{\n        margin-top:10%;\n       /* box-shadow: 1px 1px 1px 2px; */\n   } \n \n   mdl-card{\n       width:90%;\n       \n    padding: 5%;\n   }\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-image:url('../../assets/admin.gif');background-size:cover; height: 100vh;\nwidth: 100vw;\" >\n      <div class=\"col-sm-2\"></div>\n    <div id=\"loginForm\" class=\"col-sm-4\">\n        <mdl-card  mdl-shadow=\"8\">\n            <mdl-card-title mdl-card-expand>\n         <h4>\n            Admin Login\n            </h4>\n            </mdl-card-title>\n            <mdl-card-actions mdl-card-border>\n              <mdl-layout-spacer></mdl-layout-spacer>\n              <form class=\"form-horizontal\" [formGroup]=\"form\">\n                  <mdl-textfield\n                      type=\"text\"\n                      formControlName=\"username\"\n                      label=\"Username\"\n                      placeholder=\"Enter Username\"\n                      autofocus></mdl-textfield>\n                      <mdl-layout-spacer></mdl-layout-spacer>\n                    <mdl-textfield\n                      type=\"password\"\n                      formControlName=\"password\"\n                      label=\"Password\"\n                      placeholder=\"Enter Password\"\n                      autofocus></mdl-textfield>\n                  <mdl-layout-spacer></mdl-layout-spacer>\n                      <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"checkLogin()\">\n                          Login\n                        </button>  \n                        &nbsp; &nbsp;\n                        <mdl-spinner [active]=\"showRefresh\"></mdl-spinner>           \n                </form>\n            </mdl-card-actions>\n          </mdl-card>\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(router, loginService, fb, auth) {
        this.router = router;
        this.loginService = loginService;
        this.fb = fb;
        this.auth = auth;
        this.showRefresh = false;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.isLoggedIn = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password,
            'year': this.year
        });
    };
    AdminComponent.prototype.checkLogin = function () {
        var _this = this;
        // validate the user here
        if (this.username.value === '' || this.password.value === '') {
            alert('Username/Password cannot be empty');
        }
        else {
            this.showRefresh = true;
            var user = {
                username: this.username.value,
                password: this.password.value,
            };
            console.log(user);
            // validation part
            this.loginService.isValidAdmin(user)
                .subscribe(function (res) {
                console.log(res);
                if (res.result === 1) {
                    _this.isLoggedIn = true;
                    _this.auth.setStudentLogin(true);
                    var userDetails = res.userDetails;
                    _this.auth.setUserName(userDetails.username);
                    _this.router.navigate(['adminDashboard']);
                }
                else {
                    _this.isLoggedIn = false;
                    alert('Invalid USERNAME/PASSWORD!');
                    _this.showRefresh = false;
                }
            });
        }
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span> \n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Code Arena</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a *ngIf=\"!isLoggedIn\"  routerLink=\"/adminLogin\">Admin Login</a></li>\n            <li><a *ngIf=\"!isLoggedIn\"  routerLink=\"/login\">Student Login</a></li>\n            <li><a *ngIf=\"!isLoggedIn\"  routerLink=\"/facultyLogin\">Faculty Login</a></li>\n            <li><a *ngIf=\"!isLoggedIn\"  routerLink=\"/registerUser\">Register Student</a></li>\n            <li><a *ngIf=\"!isLoggedIn\"  routerLink=\"/facultyRegister\">Register Faculty</a></li>           \n            <li><a *ngIf=\"isLoggedIn\" >Welcome {{user}}</a></li>\n              <li><a *ngIf=\"isLoggedIn\"  (click)=\"logout()\">Log out</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n  <div id=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- <app-copyrights></app-copyrights> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_account_service__ = __webpack_require__("../../../../../src/app/user-account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(auth, router, _userAccount) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this._userAccount = _userAccount;
        this.title = 'app';
        this.auth.isStudentLoggedIn.subscribe(function (res) {
            _this.isLoggedIn = res;
        });
        this.auth.userName.subscribe(function (res) {
            _this.user = res;
        });
    }
    AppComponent.prototype.logout = function () {
        var res = confirm("Any unsaved changes will be lost");
        if (res) {
            this.auth.setStudentLogin(false);
            this.auth.setFacutlyLogin(false);
            this.auth.setUserName('');
            this.auth.setUserYear('');
            this.router.navigate(['login']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_account_service__["a" /* UserAccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_account_service__["a" /* UserAccountService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_service__ = __webpack_require__("../../../../../src/app/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__que_service_service__ = __webpack_require__("../../../../../src/app/que-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_account_service__ = __webpack_require__("../../../../../src/app/user-account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__post_question_post_question_component__ = __webpack_require__("../../../../../src/app/post-question/post-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__copyrights_copyrights_component__ = __webpack_require__("../../../../../src/app/copyrights/copyrights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__faculty_menu_faculty_menu_component__ = __webpack_require__("../../../../../src/app/faculty-menu/faculty-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__keys_pipe__ = __webpack_require__("../../../../../src/app/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__show_questions_faculty_show_questions_faculty_component__ = __webpack_require__("../../../../../src/app/show-questions-faculty/show-questions-faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mapping_mapping_component__ = __webpack_require__("../../../../../src/app/mapping/mapping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mapping_service__ = __webpack_require__("../../../../../src/app/mapping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_mdl_core__ = __webpack_require__("../../../../@angular-mdl/core/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__fac_register_fac_register_component__ = __webpack_require__("../../../../../src/app/fac-register/fac-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__code_generator_code_generator_component__ = __webpack_require__("../../../../../src/app/code-generator/code-generator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__post_question_post_question_component__["a" /* PostQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__copyrights_copyrights_component__["a" /* CopyrightsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__faculty_menu_faculty_menu_component__["a" /* FacultyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_19__show_questions_faculty_show_questions_faculty_component__["a" /* ShowQuestionsFacultyComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_23__mapping_mapping_component__["a" /* MappingComponent */],
            __WEBPACK_IMPORTED_MODULE_26__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_27__fac_register_fac_register_component__["a" /* FacRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_29__code_generator_code_generator_component__["a" /* CodeGeneratorComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_28_ng2_ace_editor__["a" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_mdl_core__["a" /* MdlModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_router__["a" /* routes */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_21__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__user_account_service__["a" /* UserAccountService */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_8__que_service_service__["a" /* QueServiceService */], __WEBPACK_IMPORTED_MODULE_9__login_service_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_14__register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_24__mapping_service__["a" /* MappingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fac_register_fac_register_component__ = __webpack_require__("../../../../../src/app/fac-register/fac-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapping_mapping_component__ = __webpack_require__("../../../../../src/app/mapping/mapping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_question_post_question_component__ = __webpack_require__("../../../../../src/app/post-question/post-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");








var router = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
        pathMatch: 'full'
    },
    {
        path: 'registerUser',
        loadChildren: './register-user/register.module#RegisterModule'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'adminLogin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'adminDashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_1__mapping_mapping_component__["a" /* MappingComponent */]
    },
    {
        path: 'facultyLogin',
        loadChildren: './faculty-login/faculty-login.module#FacultyLoginModule'
    },
    {
        path: 'facultyRegister',
        component: __WEBPACK_IMPORTED_MODULE_0__fac_register_fac_register_component__["a" /* FacRegisterComponent */]
    },
    {
        path: 'postQuestion',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__post_question_post_question_component__["a" /* PostQuestionComponent */]
    },
    {
        path: 'editor',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__["a" /* EditorComponent */]
    },
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(route, auth) {
        this.route = route;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var res = this.auth.getUserState();
        if (!res) {
            this.route.navigate(['login']);
        }
        return this.auth.getUserState();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService() {
        this.studentLoggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.facultyLoggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.year = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.section = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.username = '';
        this.studentYear = '';
        this.studentSection = '';
    }
    Object.defineProperty(AuthenticationService.prototype, "userName", {
        get: function () {
            return this.user.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "userSection", {
        get: function () {
            return this.section.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "userYear", {
        get: function () {
            return this.year.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isStudentLoggedIn", {
        get: function () {
            // console.log(typeof this.studentLoggedIn.asObservable() );
            return this.studentLoggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isFacultyLoggedIn", {
        get: function () {
            return this.studentLoggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.setUserName = function (value) {
        this.user.next(value);
        this.username = value;
    };
    AuthenticationService.prototype.setSection = function (value) {
        this.section.next(value);
        this.studentSection = value;
    };
    AuthenticationService.prototype.setUserYear = function (value) {
        this.year.next(value);
        this.studentYear = value;
    };
    AuthenticationService.prototype.setStudentLogin = function (value) {
        this.userState = value;
        this.studentLoggedIn.next(value);
    };
    AuthenticationService.prototype.setStudentDetails = function (value) {
        this.studentDetails = value;
    };
    AuthenticationService.prototype.getStudentDetails = function () {
        return this.studentDetails;
    };
    AuthenticationService.prototype.setFacutlyLogin = function (value) {
        this.facultyLoggedIn.next(value);
    };
    AuthenticationService.prototype.setFacultyDetails = function (value) {
        this.facDetails = value;
    };
    AuthenticationService.prototype.getFacultyDetails = function () {
        return this.facDetails;
    };
    AuthenticationService.prototype.getUserState = function () {
        return this.userState;
    };
    AuthenticationService.prototype.getUserName = function () {
        return this.username;
    };
    AuthenticationService.prototype.getUserYear = function () {
        return this.studentYear;
    };
    AuthenticationService.prototype.getUserSection = function () {
        return this.studentSection;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationService);

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/code-generator/code-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/code-generator/code-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Select Year : </h5>\n  <select name=\"selectedYear\" [(ngModel)]=\"selectedYear\">\n    <option *ngFor=\"let i of years\">{{i}}</option>\n\n  </select>        \n</div>\n<div>\n  <h5>Select Section : </h5>\n  <select name=\"selectedSection\" [(ngModel)]=\"selectedSection\">\n    <option *ngFor=\"let i of sections\">{{i}}</option>\n  </select>\n</div>\n\n<button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"generateCode()\">\n  Generate Code\n</button>\n\n<h1 style=\"margin: 1\">{{code}}</h1>"

/***/ }),

/***/ "../../../../../src/app/code-generator/code-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeGeneratorComponent = (function () {
    function CodeGeneratorComponent(loginService, auth) {
        this.loginService = loginService;
        this.auth = auth;
        this.years = [];
        this.sections = [];
        this.facDetails = [];
    }
    CodeGeneratorComponent.prototype.ngOnInit = function () {
        var set1 = new Set();
        var set2 = new Set();
        this.facDetails = this.auth.getFacultyDetails();
        for (var i = 0; i < this.facDetails.length; i++) {
            set1.add(this.facDetails[i]['year']);
            set2.add(this.facDetails[i]['section']);
        }
        var itr1 = set1.values();
        for (var i = 0; i < set1.size; i++) {
            this.years.push(itr1.next().value);
        }
        var itr2 = set2.values();
        for (var i = 0; i < set2.size; i++) {
            this.sections.push(itr2.next().value);
        }
    };
    CodeGeneratorComponent.prototype.generateCode = function () {
        var _this = this;
        var obj = this.auth.getFacultyDetails();
        // console.log(obj);
        var data = {
            year: this.selectedYear,
            section: this.selectedSection
        };
        // console.log(data);
        this.loginService.generateRandomLoginCode(data).subscribe(function (res) {
            _this.code = res.code;
        });
    };
    return CodeGeneratorComponent;
}());
CodeGeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-code-generator',
        template: __webpack_require__("../../../../../src/app/code-generator/code-generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/code-generator/code-generator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__login_service_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], CodeGeneratorComponent);

var _a, _b;
//# sourceMappingURL=code-generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/copyrights/copyrights.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/copyrights/copyrights.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h5 style=\"margin-left:30%;margin-top:4%\">Copyrights &copy; : Vardhaman College Of Engineering 2018</h5>\n</div>"

/***/ }),

/***/ "../../../../../src/app/copyrights/copyrights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightsComponent = (function () {
    function CopyrightsComponent() {
    }
    CopyrightsComponent.prototype.ngOnInit = function () {
    };
    return CopyrightsComponent;
}());
CopyrightsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-copyrights',
        template: __webpack_require__("../../../../../src/app/copyrights/copyrights.component.html"),
        styles: [__webpack_require__("../../../../../src/app/copyrights/copyrights.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CopyrightsComponent);

//# sourceMappingURL=copyrights.component.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#output{\n    margin: 2%;\n    padding: 2%;\n   \n} \n\ninput{\n    width:30%;\n}\n\ntextarea{\n    resize: none;\n}\n\n#questionPart {\n\n    border: 1px solid black;\n    margin-left: 2%;\n    margin-bottom: 2%;\n    margin-right: 2%;\n    box-shadow: 2px 1px 1px;\n    width: 40%;\n    float: left;\n    height: 100%;\n}\n#editorPart {\n    width: 60%;\n    float: left;\n    height: 100%;\n}\n\nselect{\n    width:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"editor\">\n    <div class=\"col-sm-6\" id=\"questionPart\" style=\"display:block;min-height:500px;overflow:scroll;\">\n      <h1>{{question.name}}</h1>\n      <p>{{question.question}}</p>\n    </div>\n    <div class=\"editorPart\">\n    <div class=\"col-sm-6\">\n      <div ace-editor\n      #editor\n      [(text)]=\"code\" \n      [mode]=\"'javascript'\" \n      [options]=\"options\"\n      [readOnly]=\"false\"\n      [autoUpdateContent]=\"true\"\n      [durationBeforeCallback]=\"1000\"\n      (textChanged)=\"onChange($event)\"\n      style=\"min-height: 500px; width:100%; font-size:120%; overflow: scroll;\"></div>\n\n      <div style=\"margin:4%;padding:2%;box-shadow:1px 1px 2px\">\n        <label for=\"language\">language</label>\n        <select name=\"lang\" id=\"lang\" [(ngModel)]=\"lang\">\n          <option value=\"1\">PYTHON</option>\n          <option value=\"2\">JAVA</option>\n          <!-- <option value=\"3\">C</option> --> \n        </select>\n        <br>\n        <input style=\"margin:2%;\" type=\"submit\" value=\"Run Sample Test Case\" (click)=\"runSampleTestCases()\" class=\"btn btn-primary\">\n        <input type=\"submit\" style=\"margin:2%;\" value=\"Run All Test Cases\" class=\"btn btn-danger\" (click)=\"run()\">\n        <br>\n        <button (click)=\"download()\" style=\"margin:2%;\" class=\"btn btn-warning\">Download Code</button>\n        <input type=\"submit\" name=\"submitScore\" style=\"margin:2%;\" value=\"submit\" (click)=\"submitScore()\" class=\"btn btn-success\">\n      </div>\n    </div>\n  </div>\n  <div  id=\"output\" *ngIf=\"showOutput\">\n    <h4 *ngIf=\"sampleResult\" style=\"color:green\">Output: Sample Test Cases Passed</h4>\n    <h4 *ngIf=\"outputResult\" style=\"color:green\">Output : CORRECT RESULT</h4>\n    <h4 *ngIf=\"!outputResult\" style=\"color:red\">Output : INCORRECT RESULT</h4>\n    <h4 *ngIf=\"showScore\" style=\"color:violet\">Score : {{score}}/5</h4>\n    <h4 *ngIf=\"!outputResult\" style=\"color:red\">\n      <h4>Your Output: </h4>{{err}}</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__que_service_service__ = __webpack_require__("../../../../../src/app/que-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EditorComponent = (function () {
    function EditorComponent(window, auth, router, queService, _loginService) {
        this.window = window;
        this.auth = auth;
        this.router = router;
        this.queService = queService;
        this._loginService = _loginService;
        this.options = { maxLines: 1000, printMargin: false };
        this.showScore = false;
        this.score = 0;
        this.wrong = 0;
        this.code = '';
        this.langOpt = 0;
        this.outputResult = true;
        this.showOutput = false;
        this.sampleResult = false;
        this.timeOfProblem = 60;
        this.question = this.queService.getSelectedQuestion();
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.onChange = function (code) {
        console.log('new code', code);
    };
    EditorComponent.prototype.download = function () {
        // console.log('calling');
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__();
        doc.text(20, 20, this.code);
        doc.save('code.pdf');
    };
    EditorComponent.prototype.runSampleTestCases = function () {
        var _this = this;
        this.showScore = false;
        this.input = this.queService.getInput();
        this.output = this.queService.getOutput();
        console.log(this.input);
        if (this.code !== '' && this.lang !== '') {
            var code = {
                code: this.code,
                lang: parseInt(this.lang, 10),
                input: this.input[0]
            };
            this._loginService.compile(code)
                .subscribe(function (res) {
                _this.err = res;
                if (res.toString().trim() !== _this.output[0].toString()) {
                    _this.outputResult = false;
                    _this.sampleResult = false;
                }
                else {
                    _this.sampleResult = true;
                    _this.outputResult = true;
                }
                _this.showOutput = true;
            });
        }
        else {
            alert('CODE / LANGUAGE cannot be empty');
        }
    };
    EditorComponent.prototype.submitScore = function () {
        var _this = this;
        alert('Are you Sure You want to submit?');
        var data = {
            username: this.auth.getUserName()
        };
        var marks = {
            qid: this.question['_id'],
            questionName: this.question['name'],
            marksScored: this.score,
            isAttempted: true,
        };
        this._loginService.getStudentMarks(data)
            .subscribe(function (res) {
            if (res === undefined || res === null) {
                var updatemarks = {
                    username: _this.auth.getUserName(),
                    year: _this.auth.getUserYear(),
                    section: _this.auth.getUserSection(),
                    week: __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('week'),
                    marks: [marks]
                };
                console.log(updatemarks);
                _this._loginService.saveMarks(updatemarks)
                    .subscribe(function (result) {
                    alert(result.msg);
                    _this.router.navigate(['dashboard']);
                });
            }
            else {
                console.log('database :', res.marks);
                var usermarks = [];
                usermarks = res.marks;
                usermarks.push(marks);
                console.log(usermarks);
                var Updatemarks = {
                    username: _this.auth.getUserName(),
                    year: _this.auth.getUserYear(),
                    section: _this.auth.getUserSection(),
                    week: __WEBPACK_IMPORTED_MODULE_6_ng2_cookies_ng2_cookies__["Cookie"].get('week'),
                    marks: usermarks
                };
                _this._loginService.submitMarks(Updatemarks)
                    .subscribe(function (result) {
                    console.log(result.marks);
                    alert(result.msg);
                    _this.router.navigate(['dashboard']);
                });
            }
        });
    };
    EditorComponent.prototype.run = function () {
        var _this = this;
        this.input = this.queService.getInput();
        this.output = this.queService.getOutput();
        if (this.code !== '' && this.lang !== '') {
            var code = {
                code: this.code,
                lang: parseInt(this.lang, 10),
                input: this.input
            };
            this._loginService.run(code)
                .subscribe(function (res) {
                _this.err = res;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].toString().trim() !== _this.output[i].toString()) {
                        _this.wrong++;
                        _this.outputResult = false;
                        break;
                    }
                }
                console.log(res);
                _this.score = (res.length - _this.wrong) * 5 / res.length;
                console.log(_this.score);
                _this.showScore = true;
                if (_this.outputResult) {
                    _this.sampleResult = false;
                }
                _this.showOutput = true;
            });
        }
        else {
            alert('CODE / LANGUAGE cannot be empty');
        }
    };
    return EditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('editor'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "editor", void 0);
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editor/editor.component.css")],
        providers: [{ provide: 'Window', useValue: window }]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])('Window')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__que_service_service__["a" /* QueServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__que_service_service__["a" /* QueServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */]) === "function" && _d || Object])
], EditorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/fac-register/fac-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n   \r\n    #loginForm{\r\n        margin-top:15%;\r\n       /* box-shadow: 1px 1px 1px 2px; */\r\n    \r\n   } \r\n \r\n   mdl-card{\r\n       width:90%;\r\n       \r\n    padding: 5%;\r\n   }\r\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fac-register/fac-register.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\" id =\"loginPage\" style=\"background-image:url('../../assets/facsignup.jpg');background-size:cover; height: 100vh;\n    width: 100vw;\" >\n      <div class=\"col-sm-4\"></div>\n      <!-- <div class=\"col-sm-3\"></div> -->\n    <div id=\"loginForm\" class=\"col-sm-4\">\n        <mdl-card  mdl-shadow=\"8\">\n            <mdl-card-title mdl-card-expand>\n         <h4>\n           Faculty Registration\n            </h4>\n            </mdl-card-title>\n            <mdl-card-actions mdl-card-border>\n              <mdl-layout-spacer></mdl-layout-spacer>\n              <form class=\"form-horizontal\" [formGroup]=\"form\">\n                      <mdl-textfield\n                      type=\"text\"\n                      formControlName=\"username\"\n                      label=\"Username\"\n                      placeholder=\"Enter Username\"\n                      autofocus></mdl-textfield>\n                      <mdl-layout-spacer></mdl-layout-spacer>\n                        <mdl-textfield\n                      type=\"password\"\n                      formControlName=\"password\"\n                      label=\"Password\"\n                      placeholder=\"Enter Password\"\n                      autofocus></mdl-textfield>\n                  <mdl-layout-spacer></mdl-layout-spacer>\n                      <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"facultyRegister()\">\n                          Register\n                        </button> \n                        &nbsp; &nbsp;\n                        <mdl-spinner [active]=\"showRefresh\"></mdl-spinner>              \n                </form>\n            </mdl-card-actions>\n          </mdl-card>\n    </div>\n    </div>  \n    "

/***/ }),

/***/ "../../../../../src/app/fac-register/fac-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacRegisterComponent = (function () {
    function FacRegisterComponent(_registerService, router, fb) {
        this._registerService = _registerService;
        this.router = router;
        this.fb = fb;
        this.username = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required);
        this.year = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required);
        this.section = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required);
    }
    FacRegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password,
            'year': this.year,
            'section': this.section
        });
    };
    FacRegisterComponent.prototype.facultyRegister = function () {
        var _this = this;
        if (this.username.value === '' || this.password.value === '') {
            alert('Username/Password cannot be empty');
        }
        else {
            var user = {
                username: this.username.value,
                password: this.password.value,
            };
            this._registerService.registerFaculty(user)
                .subscribe(function (res) {
                alert(res.msg);
                _this.router.navigate(['facultyLogin']);
            });
        }
    };
    return FacRegisterComponent;
}());
FacRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fac-register',
        template: __webpack_require__("../../../../../src/app/fac-register/fac-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fac-register/fac-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], FacRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=fac-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/faculty-menu/faculty-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu{\n    background-color: #f1f1f1;\n}\nselect{\n    width: 40%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faculty-menu/faculty-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"FacultyMenu\">\n  <form id=\"menu\">\n    <h1>Download Marks sheet of students</h1>\n      <h3>Select Year</h3>\n      <select name=\"year\" [(ngModel)]=\"year\">\n        <option *ngFor=\"let i of years\">{{i}}</option>\n      </select>\n    \n    <h3>Select section</h3>\n    <select name=\"section\" [(ngModel)]=\"section\">\n      <option *ngFor=\"let i of sections\">{{i}}</option>\n    </select>\n  </form>\n\n\n<h3>Click here to get marks</h3>\n&nbsp;&nbsp;&nbsp;\n<input type=\"submit\" name=\"submit\" value=\"GET MARKS\" (click)=\"getMarks()\" class=\"btn btn-primary\">\n<br>\n<br>\n<div>\n  <div class=\"col-xs-4\" style=\"margin:2%;\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"marks\" name=\"marks\" placeholder=\"Code Challenge Marks\">\n  </div>\n  <div class=\"col-xs-4\" style=\"margin:2%;\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"quizmarks\" name=\"quizmarks\" placeholder=\"Quiz Marks\">\n  </div>\n  <div class=\"col-xs-4\">\n    <input type=\"submit\" name=\"submit\" value=\"GET REPORT\" (click)=\"getFilteredReports()\" class=\"btn btn-primary\">\n  </div>\n</div>\n<br>\n<div *ngIf=\"viewMarks\">\n  <table class=\"table table-striped\">\n    <tr>\n      <td>UserName</td>\n      <td>Coding Marks</td>\n      <td>Quiz Marks</td>\n    </tr>\n    <tr *ngFor=\"let student of students\">\n      <td>{{student.username}}</td>\n      <td>{{student.marks}}</td>\n      <td>{{student.quizmarks}}</td>\n  </table>\n  <input type=\"submit\" (click)=\"download()\" value=\"download\" class=\"btn btn-warning\">\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/faculty-menu/faculty-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf_autotable__ = __webpack_require__("../../../../jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FacultyMenuComponent = (function () {
    function FacultyMenuComponent(window, auth, _loginService) {
        this.window = window;
        this.auth = auth;
        this._loginService = _loginService;
        this.viewMarks = false;
        this.marksScored = 0;
        this.facDetails = [];
        this.years = [];
        this.sections = [];
    }
    FacultyMenuComponent.prototype.ngOnInit = function () {
        var set1 = new Set();
        var set2 = new Set();
        this.facDetails = this.auth.getFacultyDetails();
        for (var i = 0; i < this.facDetails.length; i++) {
            set1.add(this.facDetails[i]['year']);
            set2.add(this.facDetails[i]['section']);
        }
        var itr1 = set1.values();
        for (var i = 0; i < set1.size; i++) {
            this.years.push(itr1.next().value);
        }
        var itr2 = set2.values();
        for (var i = 0; i < set2.size; i++) {
            this.sections.push(itr2.next().value);
        }
    };
    FacultyMenuComponent.prototype.getMarks = function () {
        var _this = this;
        var data = {
            year: this.year,
            section: this.section
        };
        this._loginService.getMarks(data)
            .subscribe(function (res) {
            console.log(res);
            _this.students = res;
            _this.viewMarks = true;
        });
    };
    FacultyMenuComponent.prototype.download = function () {
        var columns = ['UserName', 'Marks'];
        var rows = [];
        for (var i = 0; i < this.students.length; i++) {
            rows.push([this.students['username']]);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf_autotable__();
        doc.autoTable(columns, rows);
        doc.save('table.pdf');
        // doc.save('code.pdf');
    };
    FacultyMenuComponent.prototype.getFilteredReports = function () {
        var _this = this;
        console.log('called');
        var data = {
            year: this.year,
            section: this.section,
            marks: this.marks,
            quizmarks: this.quizmarks
        };
        console.log(data);
        this._loginService.getFilteredMarks(data).subscribe(function (res) {
            console.log(res);
            _this.students = res;
            if (_this.students.length == 0) {
                _this.window.alert('empty records generated');
                _this.viewMarks = false;
            }
            _this.viewMarks = true;
        });
    };
    return FacultyMenuComponent;
}());
FacultyMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-faculty-menu',
        template: __webpack_require__("../../../../../src/app/faculty-menu/faculty-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faculty-menu/faculty-menu.component.css")],
        providers: [{
                provide: 'Window',
                useValue: window
            }]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])('Window')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service_service__["a" /* LoginService */]) === "function" && _b || Object])
], FacultyMenuComponent);

var _a, _b;
//# sourceMappingURL=faculty-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    padding:10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value);
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.isValidUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/studentLogin', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.facultyLogin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/facultyLogin', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.postQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/postQuestion', JSON.stringify(question), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getQuestions = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/getQuestions', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getAnsweredQuestions = function (data) {
        // console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/getAnsweredQuestions', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.generateRandomLoginCode = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/generateCode', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.checkCodeValidity = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/checkCodeValidity', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.run = function (code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/run', JSON.stringify(code), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.compile = function (code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/compile', JSON.stringify(code), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.submitMarks = function (marks) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/updateMarks', JSON.stringify(marks), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getMarks = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/getMarks', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getStudentMarks = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/getStudentMarks', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getFilteredMarks = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/filterMarks', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.saveMarks = function (marks) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/saveMarks', JSON.stringify(marks), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.isValidAdmin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/adminLogin', JSON.stringify(user), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n   \n    #loginForm{\n        margin-top:10%;\n       /* box-shadow: 1px 1px 1px 2px; */\n    \n   } \n \n   mdl-card{\n       width:90%;\n       \n    padding: 5%;\n   }\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"loginPage\" style=\"background-image:url('../../assets/login_background.gif');background-size:cover; height: 100vh;\nwidth: 100vw;\">\n  <div class=\"col-sm-2\"></div>\n  <div id=\"loginForm\" class=\"col-sm-4\">\n    <mdl-card mdl-shadow=\"8\">\n      <mdl-card-title mdl-card-expand>\n        <h4>\n          Student Login\n        </h4>\n      </mdl-card-title>\n      <mdl-card-actions mdl-card-border>\n        <mdl-layout-spacer></mdl-layout-spacer>\n        <form class=\"form-horizontal\" [formGroup]=\"form\">\n          <mdl-textfield type=\"text\" formControlName=\"username\" label=\"Username\" autofocus  placeholder=\"Enter Username\" autofocus></mdl-textfield>\n          <mdl-layout-spacer></mdl-layout-spacer>\n          <mdl-textfield type=\"password\" formControlName=\"password\" label=\"Password\" placeholder=\"Enter Password\" autofocus></mdl-textfield>\n          <mdl-textfield type=\"text\"  formControlName=\"code\" placeholder=\"Enter Login Code\"></mdl-textfield>\n          <mdl-layout-spacer></mdl-layout-spacer>\n          <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"checkLogin()\">\n            Login\n          </button>\n          &nbsp; &nbsp;\n          <mdl-spinner [active]=\"showRefresh\"></mdl-spinner>\n        </form>\n      </mdl-card-actions>\n    </mdl-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, loginService, fb, auth) {
        this.router = router;
        this.loginService = loginService;
        this.fb = fb;
        this.auth = auth;
        this.username = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.code = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.isLoggedIn = false;
        this.showRefresh = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password,
            'code': this.code
        });
    };
    LoginComponent.prototype.checkLogin = function () {
        // validate the user here
        var _this = this;
        if (this.username.value === '' || this.password.value === '') {
            alert('Username/Password cannot be empty');
        }
        else {
            var user = {
                username: this.username.value,
                password: this.password.value,
            };
            this.showRefresh = true;
            this.loginService.isValidUser(user)
                .subscribe(function (res) {
                // console.log(res);
                if (res.result === 1) {
                    _this.isLoggedIn = true;
                    var userDetails_1 = res.userDetails;
                    var obj = {
                        year: userDetails_1.year,
                        section: userDetails_1.section,
                        code: _this.code.value
                    };
                    _this.loginService.checkCodeValidity(obj).subscribe(function (result) {
                        if (result.length === 0) {
                            alert('Invalid Login Code');
                        }
                        else {
                            _this.auth.setStudentLogin(true);
                            _this.auth.setUserName(userDetails_1.username);
                            _this.auth.setUserYear(userDetails_1.year);
                            _this.auth.setSection(userDetails_1.section);
                            _this.router.navigate(['dashboard']);
                        }
                    });
                }
                else {
                    _this.isLoggedIn = false;
                    alert('Invalid USERNAME/PASSWORD/YEAR!');
                    _this.showRefresh = false;
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mapping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MappingService = (function () {
    function MappingService(http) {
        this.http = http;
    }
    MappingService.prototype.getFaculty = function () {
        return this.http.get('api/getfaculty').map(function (res) { return res.json(); });
    };
    MappingService.prototype.mapFaculty = function (data) {
        console.log("inservice", data);
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/assignSection', data)
            .map(function (res) { return res.json(); });
    };
    MappingService.prototype.removeFaculty = function (data) {
        console.log("inservice remove faculty", data);
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('api/deleteSection', data)
            .map(function (res) { return res.json(); });
    };
    return MappingService;
}());
MappingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MappingService);

var _a;
//# sourceMappingURL=mapping.service.js.map

/***/ }),

/***/ "../../../../../src/app/mapping/mapping.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 5%;    \n    margin-bottom: 3%;    \n    padding-left: 1%;\n    background-color: #f1f1f1;  \n}\n\nselect{\n    width:80%;\n}\n\n.container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; /*grow*/\n  }\n  #mapButton{\n      margin-top:20%;\n      margin-left:5%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mapping/mapping.component.html":
/***/ (function(module, exports) {

module.exports = "<mdl-card mdl-shadow=\"4\" class=\"card\">\n\n\n  <div class=\"container\">\n      <div class=\"form-group\">\n<h4>Faculty</h4>\n        <select [(ngModel)]=\"name\">\n              <option> </option>\n              <option *ngFor=\"let f of faculty\">{{f.username}}</option>\n            </select>\n      </div>\n      <div class=\"form-group\">\n        <h4>Year</h4>   \n        <select  [(ngModel)]=\"year\">\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n              </select>\n      </div>\n      <div class=\"form-group\">\n        <h4>Section</h4>        \n        <select  [(ngModel)]=\"section\">\n                    <option value=\"A\">A</option>\n                    <option value=\"B\">B</option>\n                    <option value=\"C\">C</option>\n                    <option value=\"D\">D</option>\n                </select>\n        </div> \n        <div class=\"form-group\">\n            <button id=\"mapButton\" mdl-button mdl-button-type=\"raised\" (click)=\"mapFaculty()\" mdl-colored=\"primary\" mdl-ripple>\n              Map Faculty\n            </button>\n          </div>     \n  </div>\n</mdl-card>\n\n \n\n<mdl-card mdl-shadow=\"4\" class=\"card\">\n<h3>Faculty Mapping Details</h3>\n   \n<div class=\"jumbotron\">\n        \n  <div class=\"table-responsive\">          \n  <table class=\"table table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Faculty Name</th>\n        <th>Year & Section</th>\n       <th><button class=\"btn btn-danger\" (click)=\"remove()\">Edit Mapping</button></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let f of faculty ;let index=index\">\n        \n        <td>{{f.username}}</td>\n        <td *ngFor=\"let i of map_object[index] \">{{i.year}} - {{i.section}}&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"removeFaculty(f.username,i.year,i.section)\" *ngIf=\"edit\">Remove</button><br></td>\n        \n      </tr>\n    </tbody>\n  </table>\n  </div>\n </div>\n</mdl-card>  \n\n"

/***/ }),

/***/ "../../../../../src/app/mapping/mapping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapping_service__ = __webpack_require__("../../../../../src/app/mapping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MappingComponent = (function () {
    function MappingComponent(mapping) {
        this.mapping = mapping;
        this.faculty = [];
        this.map_object = [];
        this.customers = [{}];
        this.edit = false;
    }
    MappingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapping.getFaculty().subscribe(function (res) {
            _this.faculty = res;
            console.log(_this.faculty);
            for (var i = 0; i < _this.faculty.length; i++) {
                _this.map_object[i] = res[i].map;
            }
            console.log(_this.map_object);
        });
    };
    MappingComponent.prototype.mapFaculty = function () {
        var _this = this;
        var newMap = {
            name: this.name,
            map: {
                year: this.year,
                section: this.section
            }
        };
        console.log(newMap);
        this.mapping.mapFaculty(newMap).subscribe(function (res) {
            // console.log("return data", res);
            _this.ngOnInit();
        });
    };
    MappingComponent.prototype.removeFaculty = function (name, year, section) {
        var _this = this;
        var d_map = {
            name: name,
            year: year,
            section: section
        };
        this.mapping.removeFaculty(d_map).subscribe(function (res) {
            console.log(res);
            _this.ngOnInit();
        });
    };
    MappingComponent.prototype.remove = function () {
        this.edit = !this.edit;
    };
    return MappingComponent;
}());
MappingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-mapping',
        template: __webpack_require__("../../../../../src/app/mapping/mapping.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mapping/mapping.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__mapping_service__["a" /* MappingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__mapping_service__["a" /* MappingService */]) === "function" && _a || Object])
], MappingComponent);

var _a;
//# sourceMappingURL=mapping.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-question/post-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#questionEditor{\n    margin:5%;\n    /* background-color: #f1f1f1; */\n}\n\nselect{\nwidth:30%;\n}\n\n.container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; /*grow*/\n  }\n\n  .cases {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .cases > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; /*grow*/\n  }\n\n.card{\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 2%;    \n    margin-bottom: 3%;    \n    padding-left: 1%;\n    background-color: #f1f1f1;  \n}\n\n.totalSubmit{\n    margin-top:5%;\n}\n\n#sameline{    \n  display: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-question/post-question.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <mdl-card mdl-shadow=\"4\" class=\"card\">\n\n      <div id=\"questionEditor\">\n\n        <mdl-tabs mdl-ripple mdl-tab-active-index=\"0\">\n          <mdl-tab-panel>\n            <mdl-tab-panel-title>\n              <span>Marks</span>\n            </mdl-tab-panel-title>\n            <mdl-tab-panel-content>\n              <app-faculty-menu></app-faculty-menu>\n            </mdl-tab-panel-content>\n          </mdl-tab-panel>\n          <mdl-tab-panel mdl-tab-panel-title=\"Post Question\">\n\n\n\n            <form id=\"menu\">\n              <div class=\"row\">\n                  <h3 style=\"text-shadow:2px 2px 2px;\">Post a Question</h3>\n                <div class=\"container\">\n                    <div>\n                        <h5>Select Year : </h5>\n                        <select name=\"selectedYear\" [(ngModel)]=\"selectedYear\">\n                          <option *ngFor=\"let i of years\">{{i}}</option>\n        \n                        </select>        \n                    </div>\n                    <div>\n                        <h5>Select Section : </h5>\n                        <select name=\"selectedSection\" [(ngModel)]=\"selectedSection\">\n                          <option *ngFor=\"let i of sections\">{{i}}</option>\n                        </select>\n                    </div>\n                    <div>\n                        <h5>Select week</h5>\n                <select name=\"selectedYear\" [(ngModel)]=\"week\">\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"11\">11</option>\n                  <option value=\"12\">12</option>\n                  <option value=\"13\">13</option>\n                  <option value=\"14\">14</option>\n                  <option value=\"15\">15</option>\n                </select>\n                    </  div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <h5>Post your Question Name</h5>\n                <textarea name=\"questionName\" cols=\"90\" rows=\"2\" [(ngModel)]=\"questionName\" placeholder=\"Problem Statement\"></textarea>\n                <h5>Your question must include : 1. Problem 2.Sample Input&Output\n                </h5>\n                <textarea name=\"problem_stmt\" cols=\"90\" rows=\"10\" [(ngModel)]=\"question\" placeholder=\"Problem\"></textarea>\n              </div>\n              <div class=\"row\">\n                <h5>Enter the number of test cases for input :</h5>\n                <input type=\"text\" name=\"noOfTestCases\" [(ngModel)]=\"n\" (change)=\"changeNoOfTestCases($event.target.value)\">\n                <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"testCases()\">\n                    Submit\n                </button>   \n                <div *ngIf=\"showTestInputBox\" class=\"cases\">\n                  <div>\n                  <h5>Enter Input Test Cases :</h5>\n                  <ul>\n                    <li *ngFor=\"let i of arr\">\n                      <input type=\"text\" name=\"testCase\" [(ngModel)]=\"input[i]\" />{{input[i]}}</li>\n                  </ul>\n                  </div>\n                  <div>\n                  <h5>Enter Output Test Cases :</h5>\n                  <ul>\n                    <li *ngFor=\"let i of arr\">\n                      <input type=\"text\" name=\"testCase\" [(ngModel)]=\"output[i]\" />{{output[i]}}</li>\n                  </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"showTestInputBox\">\n                <div class=\"col-sm-offset-5 col-sm-2\"> \n                  <button class=\"totalSubmit\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"submitQuestion()\">\n                      Submit Question\n                  </button>                \n                </div>\n              </div>\n            </form>\n          </mdl-tab-panel>\n          <mdl-tab-panel>\n            <mdl-tab-panel-title>\n              <span>Quiz</span>\n            </mdl-tab-panel-title>\n            <mdl-tab-panel-content>\n              <app-quiz></app-quiz>\n            </mdl-tab-panel-content>\n          </mdl-tab-panel>\n          <mdl-tab-panel>\n            <mdl-tab-panel-title>\n              <span>Generate Login Code</span>\n            </mdl-tab-panel-title>\n            <mdl-tab-panel-content>\n              <app-code-generator></app-code-generator>\n            </mdl-tab-panel-content>\n          </mdl-tab-panel>\n        </mdl-tabs>\n      </div>\n    </mdl-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post-question/post-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapping_service__ = __webpack_require__("../../../../../src/app/mapping.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostQuestionComponent = (function () {
    function PostQuestionComponent(_loginService, auth, router, map) {
        this._loginService = _loginService;
        this.auth = auth;
        this.router = router;
        this.map = map;
        this.selectedYear = 1;
        this.selectedSection = '';
        this.showTestInputBox = false;
        this.input = [];
        this.output = [];
        this.showDownloadMarks = false;
        this.arr = [];
        this.years = [];
        this.sections = [];
        this.facDetails = [];
    }
    PostQuestionComponent.prototype.ngOnInit = function () {
        var set1 = new Set();
        var set2 = new Set();
        this.facDetails = this.auth.getFacultyDetails();
        for (var i = 0; i < this.facDetails.length; i++) {
            set1.add(this.facDetails[i]['year']);
            set2.add(this.facDetails[i]['section']);
        }
        var itr1 = set1.values();
        for (var i = 0; i < set1.size; i++) {
            this.years.push(itr1.next().value);
        }
        var itr2 = set2.values();
        for (var i = 0; i < set2.size; i++) {
            this.sections.push(itr2.next().value);
        }
        // console.log(this.facDetails);
    };
    // Function which shows current questions for a faculty
    PostQuestionComponent.prototype.showExistingQuestions = function () {
    };
    PostQuestionComponent.prototype.changeNoOfTestCases = function (value) {
        // console.log(value);
        this.showTestInputBox = false;
        this.n = value;
        this.testCases();
    };
    PostQuestionComponent.prototype.testCases = function () {
        this.arr = [];
        for (var i = 0; i < this.n; i++) {
            this.arr[i] = i;
        }
        this.showTestInputBox = true;
    };
    PostQuestionComponent.prototype.submitQuestion = function () {
        alert('Are you Sure you want to submit ?');
        var newQuestion = {
            name: this.questionName,
            question: this.question,
            week: this.week,
            year: this.selectedYear,
            section: this.selectedSection,
            input: this.input,
            output: this.output,
            postedBy: __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('username')
        };
        this._loginService.postQuestion(newQuestion)
            .subscribe(function (res) {
            alert(res.msg);
        });
    };
    PostQuestionComponent.prototype.showMarksMenu = function () {
        this.showDownloadMarks = !this.showDownloadMarks;
    };
    return PostQuestionComponent;
}());
PostQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-post-question',
        template: __webpack_require__("../../../../../src/app/post-question/post-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-question/post-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__mapping_service__["a" /* MappingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mapping_service__["a" /* MappingService */]) === "function" && _d || Object])
], PostQuestionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/que-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueServiceService = (function () {
    function QueServiceService() {
    }
    QueServiceService.prototype.selectedQuestion = function (question) {
        this.question = question;
        this.input = question.input;
        this.output = question.output;
    };
    QueServiceService.prototype.getSelectedQuestion = function () {
        return this.question;
    };
    QueServiceService.prototype.getOutput = function () {
        return this.output;
    };
    QueServiceService.prototype.getInput = function () {
        return this.input;
    };
    return QueServiceService;
}());
QueServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], QueServiceService);

//# sourceMappingURL=que-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getQuizQuestions = function (data) {
        return this.http.post('api/showquiz', data).map(function (res) { return res.json(); });
    };
    QuizService.prototype.postQuizQuestions = function (question) {
        return this.http.post('/api/postquiz', question).map(function (res) { return res.json(); });
    };
    QuizService.prototype.saveQuizMarks = function (marks) {
        console.log('in service', marks);
        return this.http.post('/api/savequizmarks', marks).map(function (res) { return res.json(); });
    };
    QuizService.prototype.getAnsweredQuizWeeks = function (user) {
        return this.http.post('api/getAnsweredQuizWeeks', user).map(function (res) { return res.json(); });
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuizService);

var _a;
//# sourceMappingURL=quiz.service.js.map

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sameline{    \n    display: inline;\n}\n#questionEditor{\n    margin:5%;\n    /* background-color: #f1f1f1; */\n}\n\nselect{\nwidth:30%;\n}\n\n.container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; /*grow*/\n  }\n\n  .cases {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .cases > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; /*grow*/\n  }\n\n.card{\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 2%;    \n    margin-bottom: 3%;    \n    padding-left: 1%;\n    background-color: #f1f1f1;  \n}\n\n.totalSubmit{\n    margin-top:5%;\n}\n\n#sameline{    \n  display: inline;\n}\n\n\nhr {\n  clear: both;\n  visibility: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Post Quiz Questions</h1>\n\n<form id=\"menu\">\n  <div class=\"row\">\n    <div class=\"container\">\n      <div>\n        <h5>Select Year : </h5>\n        <select name=\"selectedYear\" [(ngModel)]=\"selectedYear\">\n          <option *ngFor=\"let i of years\">{{i}}</option>\n\n        </select>\n      </div>\n      <div>\n        <h5>Select Section : </h5>\n        <select name=\"selectedSection\" [(ngModel)]=\"selectedSection\">\n          <option *ngFor=\"let i of sections\">{{i}}</option>\n        </select>\n      </div>\n      <div>\n        <h5>Select week:</h5>\n        <select name=\"selectedYear\" [(ngModel)]=\"selectedWeek\">\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n        </select>\n        </ div>\n      </div>\n    </div>\n\n    <div>\n      <div>\n        <hr>\n      </div>\n      <div class=\"col-xs-4\">\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"tot\" name=\"marks\" placeholder=\"enter number of input questions\">\n      </div>\n      <div class=\"col-xs-2\">\n        <input type=\"submit\" name=\"submit\" value=\"POST\" (click)=\"getQuestionBoxes()\" class=\"btn btn-primary\">\n      </div>\n    </div>\n    <div>\n      <br>\n    </div>\n    <div>\n      <hr>\n    </div>\n    <div>\n      <hr>\n    </div>\n    <div>\n      <hr>\n    </div>\n    <div *ngFor=\"let i of boxes;let i=index\">\n      <div class=\"form-group\">\n        <input class=\"form-control input-lg\" id=\"inputlg\" type=\"text\" placeholder=\"Question {{i+1}}\" [(ngModel)]=\"questions[i]\" name=\"question1\">\n      </div>\n      <div class=\"col-xs-2\">\n        <input class=\"form-control\" id=\"ex1\" type=\"text\" placeholder=\"Option 1\" [(ngModel)]=\"option_one[i]\" name=\"option1\">\n      </div>\n      <div class=\"col-xs-2\">\n        <input class=\"form-control\" id=\"ex1\" type=\"text\" placeholder=\"Option 2\" [(ngModel)]=\"option_two[i]\" name=\"option2\">\n      </div>\n      <div class=\"col-xs-2\">\n        <input class=\"form-control\" id=\"ex1\" type=\"text\" placeholder=\"Option 3\" [(ngModel)]=\"option_three[i]\" name=\"option3\">\n      </div>\n      <div class=\"col-xs-2\">\n        <input class=\"form-control\" id=\"ex1\" type=\"text\" placeholder=\"Option 4\" [(ngModel)]=\"option_four[i]\" name=\"option4\">\n      </div>\n      <div class=\"col-xs-2\">\n        <label>Answer</label>\n        <select [(ngModel)]=\"answers[i]\" name=\"answer\">\n          <option></option>\n          <option>{{option_one[i]}}</option>\n          <option>{{option_two[i]}}</option>\n          <option>{{option_three[i]}}</option>\n          <option>{{option_four[i]}}</option>\n        </select>\n      </div>\n      <div>\n        <br>\n      </div>\n      <div>\n        <hr>\n      </div>\n\n\n    </div>\n\n    <div class=\"col-xs-2\">\n      <input type=\"submit\" name=\"submit\" value=\"POST QUIZ\" (click)=\"sendQuestions()\" class=\"btn btn-primary\" *ngIf=\"postButton\">\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_service__ = __webpack_require__("../../../../../src/app/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    function QuizComponent(auth, quiz) {
        this.auth = auth;
        this.quiz = quiz;
        this.postButton = false;
        this.boxes = [];
        this.years = [];
        this.sections = [];
        this.questions = [];
        this.answers = [];
        this.option_one = [];
        this.option_two = [];
        this.option_three = [];
        this.option_four = [];
        this.facDetails = [];
    }
    QuizComponent.prototype.ngOnInit = function () {
        var set1 = new Set();
        var set2 = new Set();
        this.facDetails = this.auth.getFacultyDetails();
        for (var i = 0; i < this.facDetails.length; i++) {
            set1.add(this.facDetails[i]['year']);
            set2.add(this.facDetails[i]['section']);
        }
        var itr1 = set1.values();
        for (var i = 0; i < set1.size; i++) {
            this.years.push(itr1.next().value);
        }
        var itr2 = set2.values();
        for (var i = 0; i < set2.size; i++) {
            this.sections.push(itr2.next().value);
        }
    };
    QuizComponent.prototype.getQuestionBoxes = function () {
        console.log('called');
        this.postButton = true;
        for (var i = 0; i < this.tot; i++) {
            this.boxes.push(i);
        }
    };
    QuizComponent.prototype.sendQuestions = function () {
        console.log('called sendind');
        var _loop_1 = function (i) {
            var consolidated_question = {
                question: this_1.questions[i],
                answer: this_1.answers[i],
                option_one: this_1.option_one[i],
                option_two: this_1.option_two[i],
                option_three: this_1.option_three[i],
                option_four: this_1.option_four[i],
                section: this_1.selectedSection.toLowerCase(),
                week: this_1.selectedWeek,
                year: this_1.selectedYear,
                postedBy: __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('username')
            };
            this_1.quiz.postQuizQuestions(consolidated_question).subscribe(function (res) {
                if (res.msg) {
                    alert("Quiz question " + (i + 1) + " Posted Successfully");
                }
                else {
                    alert("Quiz question " + (i + 1) + " Posting Unsuccessfull");
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tot; i++) {
            _loop_1(i);
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */]) === "function" && _b || Object])
], QuizComponent);

var _a, _b;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/registerUser', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RegisterService.prototype.registerFaculty = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/facRegister', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/show-questions-faculty/show-questions-faculty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-questions-faculty/show-questions-faculty.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"showQuestionsForFaculty\">\n  <div class=\"row\">\n    <h1 style=\"color:red;text-shadow:2px 2px 2px;\">Show Existing questions</h1>\n   <h2>Select Year : </h2>\n   <select name=\"selectedYear\" [(ngModel)]=\"selectedYear\">\n     <option value=\"1\">1</option>\n     <option value=\"2\">2</option>\n     <option value=\"3\">3</option>\n     <option value=\"4\">4</option>\n   </select>\n   \n </div>\n\n <div class=\"row\">\n  <h2>Select Section : </h2>\n  <select name=\"selectedSection\" [(ngModel)]=\"selectedSection\">\n    <option value=\"A\">A</option>\n    <option value=\"B\">B</option>\n    <option value=\"C\">C</option>\n    <option value=\"D\">D</option>\n  </select>\n  \n</div>\n\n <div class=\"row\">\n   <h2>Select week</h2>  \n   <select name=\"selectedYear\" [(ngModel)]=\"week\">\n     <option value=\"1\">1</option>\n     <option value=\"2\">2</option>\n     <option value=\"3\">3</option>\n     <option value=\"4\">4</option>\n     <option value=\"5\">5</option>\n     <option value=\"6\">6</option>\n     <option value=\"7\">7</option>\n     <option value=\"8\">8</option>\n     <option value=\"9\">9</option>\n     <option value=\"10\">10</option>\n     <option value=\"11\">11</option>\n     <option value=\"12\">12</option>\n     <option value=\"13\">13</option>\n     <option value=\"14\">14</option>\n     <option value=\"15\">15</option>\n   </select>\n </div>\n <br>\n <div class=\"row\">\n   <input type=\"submit\" class=\"btn btn-primary\" (click)=\"getQuestions()\">\n </div>\n\n <div id=\"show_questions\">\n  <div class=\"list-group\">\n    <ul *ngIf=\"showQuestions\">\n      <li style=\"margin:2%;\" *ngFor=\"let question of questions\"  class=\"list-group-item active\"><h3>{{question.name}}</h3>\n        <h5>Posted By : {{question.postedBy}}</h5>\n        <!-- <input type=\"submit\" class=\"btn btn-danger\" (click)=\"sendQuestion(question)\" value=\"Solve\" style=\"margin-left:2%;\"> -->\n      </li> \n       \n        \n    </ul>\n    <h3 *ngIf=\"noQuestions\" style=\"border:2px solid black\">No Questions to Show. Please contact your faculty </h3>\n    </div>\n </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/show-questions-faculty/show-questions-faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQuestionsFacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowQuestionsFacultyComponent = (function () {
    function ShowQuestionsFacultyComponent(loginService) {
        this.loginService = loginService;
        this.showQuestions = false;
    }
    ShowQuestionsFacultyComponent.prototype.ngOnInit = function () {
    };
    ShowQuestionsFacultyComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questions = [];
        var data = {
            year: this.selectedYear,
            section: this.selectedSection,
            week: this.week,
        };
        this.loginService.getQuestions(data)
            .subscribe(function (res) {
            _this.questions = res;
            _this.showQuestions = true;
        });
    };
    return ShowQuestionsFacultyComponent;
}());
ShowQuestionsFacultyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-questions-faculty',
        template: __webpack_require__("../../../../../src/app/show-questions-faculty/show-questions-faculty.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-questions-faculty/show-questions-faculty.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service_service__["a" /* LoginService */]) === "function" && _a || Object])
], ShowQuestionsFacultyComponent);

var _a;
//# sourceMappingURL=show-questions-faculty.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserAccountService = (function () {
    function UserAccountService() {
    }
    UserAccountService.prototype.setCredentials = function (credentials) {
        this.isLoggedIn = credentials.isLoggedIn;
        this.uname = credentials.uname;
    };
    UserAccountService.prototype.getCredentials = function () {
        return { 'uname': this.uname, 'isLoggedIn': this.isLoggedIn };
    };
    return UserAccountService;
}());
UserAccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserAccountService);

//# sourceMappingURL=user-account.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map