webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left{\n    box-shadow: 2px 1px 1px 2px;\n    padding: 2%;\n    margin:3%;\n    background-color: #f1f1f1;\n    \n}\nselect{\n    width:100%;\n}\n\nh2{\n    color:black;\n}\n\n#button{\n    margin-top: 5%;\n}\n\n\n.quizQuestions{\n    margin:2%;\n}\n\n.question{\n    padding:2%;\n    border:1px solid black;\n}\n\n.marksDisplay{\n    margin:2%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"total\">\n  <div class=\"row\">\n    <form [formGroup]=\"form\">\n      <div class=\"col-sm-3\" id=\"left\">\n\n        <h2>Select Week : </h2>\n        <select name=\"selectedWeek\" formControlName=\"week\" placeholder=\"week\" (change)=\"onChangeWeek()\">\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n        </select>\n\n        <div id=\"button\">\n          <input type=\"submit\" value=\"Code Challenge\" name=\"getQuestions\" class=\"btn btn-warning\" (click)=\"showQuestionForWeek()\">\n          <input type=\"submit\" value=\"Answer Quiz\" class=\"btn btn-warning\" (click)=\"showQuiz()\">\n\n        </div>\n\n      </div>\n    </form>\n\n    <div class=\"col-sm-6\" id=\"right\">\n      <div class=\"list-group\">\n        <ul *ngIf=\"showQuestions\">\n          <li style=\"margin:2%;\" *ngFor=\"let question of displayQuestions\" class=\"list-group-item active\">\n            <div *ngIf=\"!question.isAttempted\">\n              <h3>{{question.name}}</h3>\n              <h5>Posted By : {{question.postedBy}}</h5>\n              <input type=\"submit\" class=\"btn btn-danger\" (click)=\"sendQuestion(question)\" value=\"Solve\" style=\"margin-left:2%;\">\n            </div>\n          </li>\n\n\n        </ul>\n        <h3 *ngIf=\"noQuestions\" style=\"border:2px solid black\">No Questions to Show. Please contact your faculty </h3>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n<div *ngIf=\"quizDisplay\" class=\"quizQuestions\">\n  <h2>Your Quiz Questions for this week</h2>\n  <div class=\"question\" *ngFor=\"let quiz of quizQuestions; let i = index\" >\n    <h3>{{i + 1}}.{{quiz.question}}</h3>\n\n    <label class=\"radio-inline\">\n      <input type=\"radio\" id=\"{{quiz._id}}\" name=\"{{quiz._id}}\" [value]=\"quiz.option_one\" *ngIf=\"quiz.option_one\" [(ngModel)]=\"stu_answers[i]\">{{quiz.option_one}}\n    </label>\n\n    <label class=\"radio-inline\">\n      <input type=\"radio\" id=\"{{quiz._id}}\" name=\"{{quiz._id}}\" [value]=\"quiz.option_two\" *ngIf=\"quiz.option_two\" [(ngModel)]=\"stu_answers[i]\">{{quiz.option_two}}\n    </label>\n\n    <label class=\"radio-inline\">\n      <input type=\"radio\" id=\"{{quiz._id}}\" name=\"{{quiz._id}}\" [value]=\"quiz.option_three\" *ngIf=\"quiz.option_three\" [(ngModel)]=\"stu_answers[i]\">{{quiz.option_three}}\n    </label>\n\n    <label class=\"radio-inline\">\n      <input type=\"radio\" id=\"{{quiz._id}}\" name=\"{{quiz._id}}\" *ngIf=\"quiz.option_four\" [value]=\"quiz.option_four\" [(ngModel)]=\"stu_answers[i]\">{{quiz.option_four}}\n    </label>\n    <br>\n    <hr>\n    <label>\n      &nbsp;&nbsp;&nbsp;-PostedBy:{{quiz.postedBy}}\n    </label>\n    <br>\n  </div>\n  <div>\n    <br>\n  </div>\n  <div class=\"col-sm-3\" >\n    <input type=\"submit\" value=\"Submit Answers\" class=\"btn btn-danger\" (click)=\"validateAnswers()\">\n  </div>\n</div>\n<h3 *ngIf=\"noQuiz\" style=\"border:2px solid black\">No QUIZ Questions to Show. Please contact your faculty </h3>\n<div *ngIf=\"marksDisplay\" class=\"marksDisplay\">\n  <h2>Your Quiz Marks For This week!</h2>\n  <table class=\"table table-bordered\">\n    <tr>\n      <td><h4>Total Questions:</h4></td>\n      <td><h5>{{fac_answers.length}}</h5></td>\n      <td>&nbsp;</td>\n      \n    </tr>\n    <tr>\n      <td><h4>Correctly Answered:</h4></td>\n      <td><h5>{{score}}</h5></td>\n      <td>&nbsp;</td>\n      \n    </tr>\n    <tr>\n      <td><h4>Wrongly Answered:</h4></td>\n      <td><h5>{{fac_answers.length-score}}</h5></td>\n      <td>&nbsp;</td>\n      \n    </tr>\n    <tr>\n      <td><h4>Questions You Went Wrong Are Below</h4></td>\n      <td><h4>YourAnswer:</h4></td>\n      <td><h4>CorrectAnswer:</h4></td>\n    </tr>\n    <tr *ngFor=\"let i of wrong_answers\">\n      <td><h5>{{quizQuestions[i].question}}</h5></td>\n      <td><h5>{{stu_answers[i]}}</h5></td>\n      <td><h5>{{fac_answers[i]}}</h5></td>\n      \n\n    </tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_service__ = __webpack_require__("../../../../../src/app/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__que_service_service__ = __webpack_require__("../../../../../src/app/que-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_service_service__ = __webpack_require__("../../../../../src/app/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(queService, fb, _loginService, router, authService, quizService, quiz) {
        this.queService = queService;
        this.fb = fb;
        this._loginService = _loginService;
        this.router = router;
        this.authService = authService;
        this.quizService = quizService;
        this.quiz = quiz;
        this.score = 0;
        this.wrong_answers = [];
        this.fac_answers = [];
        this.stu_answers = [];
        this.isReturned = false;
        this.showQuestions = false;
        this.noQuestions = false;
        this.noQuiz = false;
        this.quizDisplay = false;
        this.marksDisplay = false;
        this.displayQuestions = [];
        this.k = 0;
        this.quizAnsweredWeeks = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            week: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
        var query = {
            username: this.authService.username,
            year: this.authService.studentYear,
            section: this.authService.studentSection
        };
        this.quizService.getAnsweredQuizWeeks(query).subscribe(function (res) {
            _this.quizAnsweredWeeks = res;
        });
    };
    DashboardComponent.prototype.sendQuestion = function (question) {
        this.queService.selectedQuestion(question);
        // console.log(question);
        this.router.navigate(['editor']);
    };
    DashboardComponent.prototype.showQuestionForWeek = function () {
        var _this = this;
        this.marksDisplay = false;
        this.noQuiz = false;
        this.quizDisplay = false;
        this.displayQuestions = [];
        var query = {
            username: this.authService.getUserName()
        };
        this._loginService.getAnsweredQuestions(query)
            .subscribe(function (res) {
            _this.answeredQuestions = res;
            // console.log(this.answeredQuestions);
            _this.getTotalQuestions();
        });
    };
    DashboardComponent.prototype.onChangeWeek = function () {
        this.displayQuestions = [];
    };
    DashboardComponent.prototype.getTotalQuestions = function () {
        var _this = this;
        var data = {
            week: this.form.get('week').value,
            year: this.authService.getUserYear(),
            section: this.authService.getUserSection()
        };
        // console.log(data);
        this._loginService.getQuestions(data).subscribe(function (res) {
            _this.questions = res;
            if (_this.questions.length === 0) {
                _this.noQuestions = true;
            }
            else {
                _this.noQuestions = false;
                __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].set('week', _this.form.get('week').value + ' ');
                _this.showQuestions = true;
                if (_this.answeredQuestions.length === 0) {
                    _this.displayQuestions = _this.questions;
                }
                else {
                    // console.log(this.questions);
                    _this.calculateArray();
                }
            }
        });
    };
    DashboardComponent.prototype.calculateArray = function () {
        var aq = this.answeredQuestions[0]['marks'];
        // console.log(aq);
        // console.log(this.questions);
        var i, j;
        for (i = 0; i < this.questions.length; i++) {
            for (j = 0; j < aq.length; j++) {
                if (aq[j].qid !== this.questions[i]['_id']) {
                    this.displayQuestions.push(this.questions[i]);
                }
            }
        }
        // console.log(this.displayQuestions);
    };
    DashboardComponent.prototype.showQuiz = function () {
        var _this = this;
        if (this.noQuestions) {
            this.noQuestions = false;
        }
        this.showQuestions = false;
        this.noQuiz = false;
        this.quizDisplay = true;
        this.userSelectedWeek = this.form.get('week').value;
        if (!this.isWeekAnswered(this.userSelectedWeek)) {
            var data = {
                week: this.form.get('week').value,
                year: this.authService.getUserYear(),
                section: this.authService.getUserSection().toLowerCase()
            };
            // console.log(data);
            this.quiz.getQuizQuestions(data).subscribe(function (res) {
                // console.log(res);
                if (res.length === 0) {
                    _this.quizDisplay = false;
                    _this.noQuiz = true;
                }
                _this.marksDisplay = false;
                _this.quizQuestions = res;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var iterator = res_1[_i];
                    _this.fac_answers.push(iterator.answer);
                }
            });
        }
        else {
            alert('Quiz for the selected week is already attempted');
        }
    };
    DashboardComponent.prototype.isWeekAnswered = function (week) {
        this.quizAnsweredWeeks.forEach(function (element) {
            console.log(element.trim() === week.trim());
            if (element.trim() === week.trim()) {
                return true;
            }
        });
        return false;
    };
    DashboardComponent.prototype.validateAnswers = function () {
        for (var i = 0; i < this.stu_answers.length; i++) {
            if (this.stu_answers[i] === this.fac_answers[i]) {
                this.score += 1;
            }
            else {
                this.wrong_answers.push(i);
            }
        }
        this.quizDisplay = false;
        // console.log(this.score);
        this.marksDisplay = true;
        var data = {
            username: this.authService.getUserName(),
            week: this.form.get('week').value,
            year: this.authService.getUserYear(),
            section: this.authService.getUserSection(),
            quizmarks: this.score,
            attemptedQuizWeek: this.userSelectedWeek
        };
        // console.log('in component', data);
        this.quiz.saveQuizMarks(data).subscribe(function (res) {
            // console.log(res);
            if (res.data == null && res.userdata == null) {
                window.alert('Marks Not Saved !!!');
            }
            else {
                window.alert('Marks saved successfully!');
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__que_service_service__["a" /* QueServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__que_service_service__["a" /* QueServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__login_service_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__login_service_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__quiz_service__["a" /* QuizService */]) === "function" && _g || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map