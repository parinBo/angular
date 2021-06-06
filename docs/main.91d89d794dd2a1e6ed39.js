(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.center{\r\n  margin: auto;\r\n  margin-top: 15%;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.form-width {\r\n  width: 100%;\r\n}\r\n\r\n.border{\r\n  border-color: lightblue;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx1QkFBdUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm9yZGVye1xyXG4gIGJvcmRlci1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\web-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");






let RegisterComponent = class RegisterComponent {
    constructor(user) {
        this.user = user;
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,]);
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]);
        this.conPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]);
        this.hide1 = true;
        this.hide2 = true;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.passwordForm.value !== this.conPasswordForm.value) {
            console.log("Password doesn't match");
        }
        else {
            this.user.register(this.emailForm.value, this.passwordForm.value, this.nameForm.value);
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.guard */ "P+IX");
/* harmony import */ var _list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-tasks/list-tasks.component */ "ce7Z");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _order_tasks_order_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-tasks/order-tasks.component */ "c4ra");







let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], children: [
                        { path: '', component: _list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_4__["ListTasksComponent"] },
                        { path: 'Order', component: _order_tasks_order_tasks_component__WEBPACK_IMPORTED_MODULE_6__["OrderTasksComponent"] }
                    ], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
            ])],
    })
], MainRoutingModule);



/***/ }),

/***/ "40DX":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"example-container\"  >\n  <mat-sidenav #sidenav style=\"width: 150px;\" >\n      <mat-selection-list  [multiple]=\"false\">\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <mat-card-title>Hi: {{data.displayName}} </mat-card-title>\n          </mat-card-header>\n          </mat-card>\n        <mat-list-option *ngFor=\"let menu of typesOfMenu\" >\n          <mat-icon matListIcon >{{menu.icon}}</mat-icon>\n          <mat-list-item [routerLink]=\"menu.link\"> {{menu.name}} </mat-list-item>\n        </mat-list-option>\n        <div class=\"bottom\">\n          <mat-list-option >\n            <mat-icon matListIcon>settings</mat-icon>\n            <mat-list-item [routerLink]=\"\" >Setting</mat-list-item>\n          </mat-list-option>\n          <mat-list-option >\n            <mat-icon matListIcon>exit_to_app</mat-icon>\n            <mat-list-item (click)=\"logout()\" >Logout</mat-list-item>\n          </mat-list-option>\n        </div>\n      </mat-selection-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <p>\n      <mat-toolbar color=\"primary\">\n        <span>My App</span>\n        <span class=\"example-spacer\"></span>\n        <button mat-icon-button class=\"example-icon favorite-icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n        <button mat-icon-button class=\"example-icon\" >\n          <mat-icon>share</mat-icon>\n        </button>\n          <ul class=\"menu-button\">\n            <li>\n              <button mat-icon-button routerLink=\"/Order\">\n                <mat-icon matBadge=\"{{limit}}\" matBadgeColor=\"warn\">note</mat-icon>\n              </button>\n            </li>\n            <li>\n              <p><button mat-icon-button  (click)=\"sidenav.toggle()\"><mat-icon>menu</mat-icon></button></p>\n            </li>\n          </ul>\n      </mat-toolbar>\n    </p>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</mat-sidenav-content>\n</mat-sidenav-container>\n\n\n");

/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let UserService = class UserService {
  constructor(auth, afs, router) {
    this.auth = auth;
    this.afs = afs;
    this.router = router;
    auth.authState.subscribe(userData => {
      if (userData) {
        this.afs.doc(`users/${userData.uid}`).get().subscribe(data => {
          localStorage.setItem('user', JSON.stringify(data.data()));
        });
      } else {
        localStorage.setItem('user', "");
      }
    });
  }

  register(email, password, name) {
    var _this = this;

    return Object(D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.auth.createUserWithEmailAndPassword(email, password).then(res => {
        _this.router.navigate(['/']);

        _this.SetUserData(res.user, name);
      }).catch(err => {});
    })();
  }

  login(email, pass) {
    var _this2 = this;

    return Object(D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this2.auth.signInWithEmailAndPassword(email, pass).then(res => {
        _this2.router.navigate(['/']);
      }).catch(err => {
        console.log(err.message);
      });
    })();
  }

  logout() {
    var _this3 = this;

    return Object(D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.auth.signOut();

      _this3.router.navigate(['/login']);
    })();
  }

  isLoggedIn() {
    const user = localStorage.getItem('user');
    return user !== "" ? true : false;
  }

  SetUserData(user, name) {
    const userRef = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

};

UserService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
}];

UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ "8NnV":
/*!****************************************!*\
  !*** ./src/app/Tasks/tasks.service.ts ***!
  \****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let TaskService = class TaskService {
    constructor(db) {
        this.db = db;
        this.limitSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.limit = 0;
    }
    addTask() {
        this.limitSub.next(this.limit++);
    }
    getLimit() {
        return this.limitSub;
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TaskService);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Aqmg":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-button{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 1%;\r\n}\r\n\r\n.bottom{\r\nposition: absolute;\r\nbottom: 0;\r\n}\r\n\r\nmain{\r\n  margin: 3rem;\r\n}\r\n\r\n.example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\nul {\r\nlist-style-type: none;\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n\r\nli{\r\nfloat: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztBQUNUOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBR0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNULFVBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1idXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMSU7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAwO1xyXG59XHJcblxyXG5tYWlue1xyXG4gIG1hcmdpbjogM3JlbTtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG51bCB7XHJcbmxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saXtcclxuZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDQiIe2lO-woUfXfas6nYc_WFZrPAdX6vw",
        authDomain: "fund-662cf.firebaseapp.com",
        databaseURL: "https://fund-662cf.firebaseio.com",
        projectId: "fund-662cf",
        storageBucket: "fund-662cf.appspot.com",
        messagingSenderId: "159155807852",
        appId: "1:159155807852:web:4eb19e6d109471de401a49",
        measurementId: "G-3P5JP6Z06V"
    }
};


/***/ }),

/***/ "HyvQ":
/*!************************************************************!*\
  !*** ./src/app/main/order-tasks/order-tasks.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn{\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYiIsImZpbGUiOiJvcmRlci10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"center border\" style=\"background-color: beige;\" >\n  <h1>Register</h1>\n  <form (ngSubmit)=\"onSubmit()\" >\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <mat-form-field  appearance=\"outline\">\n          <mat-label>Name</mat-label>\n          <input type=\"text\" matInput [formControl]=\"nameForm\" >\n          <mat-error *ngIf=\"nameForm.hasError('required')\">\n            Name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col\">\n        <mat-form-field  appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input type=\"email\" matInput [formControl]=\"emailForm\" placeholder=\"Ex. pat@example.com\">\n          <mat-error *ngIf=\"emailForm.hasError('email') && !emailForm.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailForm.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <mat-form-field appearance=\"outline\" >\n          <mat-label>Enter your password</mat-label>\n          <input matInput [type]=\"hide1 ? 'password' : 'text'\" [formControl]=\"passwordForm\">\n          <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\" >\n            <mat-icon>{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <mat-error *ngIf=\"passwordForm.hasError('required')\" >\n            Password is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"passwordForm.errors?.minlength \" >\n            Password is <strong>more than 6</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col\">\n        <mat-form-field appearance=\"outline\" >\n          <mat-label>Comfirm your password</mat-label>\n          <input matInput [type]=\"hide2 ? 'password' : 'text'\" [formControl]=\"conPasswordForm\">\n          <button mat-icon-button matSuffix (click)=\"hide2 = !hide2\" >\n            <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <mat-error *ngIf=\"conPasswordForm.hasError('required')\" >\n            Password is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"conPasswordForm.errors?.minlength \" >\n            Password is <strong>more than 6</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <mat-error *ngIf=\"conPasswordForm.value!==passwordForm.value \" >\n      Password  <strong>is n't match</strong>\n    </mat-error>\n    <button mat-flat-button color=\"primary\" style=\"margin-left: 40%;\" >Signup</button>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");




let AuthGuard = class AuthGuard {
    constructor(router, user) {
        this.router = router;
        this.user = user;
    }
    canActivate(route, state) {
        const isAuthen = this.user.isLoggedIn();
        if (!isAuthen) {
            this.router.navigate(['/login']);
        }
        return isAuthen;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "QNMO":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/order-tasks/order-tasks.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>task{{rate>1?\"s\":\"\"}} sum:{{rate}}</mat-card-title>\n  </mat-card-header>\n  <mat-card *ngFor=\"let i of tasks\">\n    {{i.name}}\n    <button mat-mini-fab color=\"accent\" class=\"btn\" (click)=\"onRemove(i)\"   >\n      <mat-icon>remove</mat-icon>\n   </button>\n  </mat-card>\n</mat-card>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Tasks_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tasks/tasks.service */ "8NnV");





let AppComponent = class AppComponent {
    constructor(tasks) {
        this.tasks = tasks;
        this.title = 'web-angular';
        this.typesOfMenu = [
            { name: "Home", link: "/", icon: "home" },
            { name: "Tasks", link: "/Tasks", icon: "description" },
        ];
        this.limit = 0;
    }
    ngOnInit() {
        this.tasks.getLimit().subscribe(data => {
            this.limit = data;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _Tasks_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: azure;height: 100%;\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-tasks/list-tasks.component */ "ce7Z");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "vvyD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let MainModule = class MainModule {
};
MainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_3__["ListTasksComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MatertialModule"],
        ],
    })
], MainModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _main_order_tasks_order_tasks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/order-tasks/order-tasks.component */ "c4ra");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_order_tasks_order_tasks_component__WEBPACK_IMPORTED_MODULE_14__["OrderTasksComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_11__["MainModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MatertialModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "c4ra":
/*!***********************************************************!*\
  !*** ./src/app/main/order-tasks/order-tasks.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTasksComponent", function() { return OrderTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-tasks.component.html */ "QNMO");
/* harmony import */ var _order_tasks_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-tasks.component.css */ "HyvQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasks.service */ "ptfe");





let OrderTasksComponent = class OrderTasksComponent {
    constructor(taskSer) {
        this.taskSer = taskSer;
        this.tasks = [];
        this.rate = 0;
        taskSer.getTask();
        taskSer.getTaskUpdated().subscribe(res => {
            this.tasks = res;
        });
        taskSer.getRateUpdate().subscribe(res => {
            this.rate = res;
        });
    }
    ngOnInit() {
    }
    onRemove(task) {
        this.taskSer.deleteTask(task);
    }
};
OrderTasksComponent.ctorParameters = () => [
    { type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }
];
OrderTasksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-tasks',
        template: _raw_loader_order_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_tasks_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderTasksComponent);



/***/ }),

/***/ "ce7Z":
/*!*********************************************************!*\
  !*** ./src/app/main/list-tasks/list-tasks.component.ts ***!
  \*********************************************************/
/*! exports provided: ListTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTasksComponent", function() { return ListTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-tasks.component.html */ "wBbn");
/* harmony import */ var _list_tasks_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-tasks.component.css */ "fDOc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasks.service */ "ptfe");





let ListTasksComponent = class ListTasksComponent {
    constructor(taskser) {
        this.taskser = taskser;
        this.tasks = [];
    }
    ngOnInit() {
        this.taskser.getAllTasks();
        this.taskser.getAllTaskUpdate().subscribe(res => {
            this.tasks = res;
        });
    }
    onAdd(i) {
        if (i.limit <= 0) {
        }
        else {
            this.taskser.addTask(i);
        }
    }
};
ListTasksComponent.ctorParameters = () => [
    { type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }
];
ListTasksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-tasks',
        template: _raw_loader_list_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_tasks_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListTasksComponent);



/***/ }),

/***/ "fDOc":
/*!**********************************************************!*\
  !*** ./src/app/main/list-tasks/list-tasks.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn{\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiIiwiZmlsZSI6Imxpc3QtdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <mat-card class=\"center border\" style=\"background-color: beige;\" >\n    <h1>Login</h1>\n    <form (ngSubmit)=\"onSubmit()\" >\n      <mat-form-field class=\"form-width\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input type=\"email\" matInput [formControl]=\"emailForm\" placeholder=\"Ex. pat@example.com\">\n        <mat-error *ngIf=\"emailForm.hasError('email') && !emailForm.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailForm.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"form-width\">\n        <mat-label>Enter your password</mat-label>\n        <input matInput [type]=\"hide ? 'password' : 'text'\" [formControl]=\"passwordForm\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" >\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-error *ngIf=\"passwordForm.hasError('required')\" >\n          Password is <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"passwordForm.errors?.minlength \" >\n          Password is <strong>more than 6</strong>\n        </mat-error>\n      </mat-form-field>\n      <button mat-flat-button color=\"primary\" style=\"margin-left: 40%;\" >Signin</button>\n      <a routerLink=\"/regis\" style=\"margin-left:80%\">register</a>\n    </form>\n  </mat-card>\n");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.center{\r\n  margin: auto;\r\n  margin-top: 15%;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.form-width {\r\n  width: 100%;\r\n}\r\n\r\n.border{\r\n  border-color: lightblue;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx1QkFBdUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm9yZGVye1xyXG4gIGJvcmRlci1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ptfe":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TaskService = class TaskService {
  constructor(afs) {
    this.afs = afs;
    this.tasks = [{
      name: "ตักน้ำแข็ง (2ถุง)",
      id: "icebag-1",
      rate: 10,
      limit: 1,
      icon: ""
    }, {
      name: "ตักน้ำแข็ง (3กระติก)",
      id: "icebox-1",
      rate: 5,
      limit: 1,
      icon: ""
    }, {
      name: "กวาดบ้าน",
      id: "sweep-2",
      rate: 5,
      limit: 2,
      icon: ""
    }, {
      name: "ถูบ้าน",
      id: "mopping-2",
      rate: 5,
      limit: 2,
      icon: ""
    }, {
      name: "ตากผ้า",
      id: "shirt-1",
      rate: 10,
      limit: 1,
      icon: ""
    }, {
      name: "อ่านหนังสือ/ทำแบบฝึกหัด",
      id: "int-1",
      rate: 30,
      limit: 1,
      icon: ""
    }, {
      name: "เตรียม/เก็บโต๊ะกินข้าว",
      id: "prepare-2",
      rate: 10,
      limit: 2,
      icon: ""
    }, {
      name: "เช็ดโต๊ะกินข้าว",
      id: "cleantable-2",
      rate: 5,
      limit: 2,
      icon: ""
    }, {
      name: "ขายของ (วัน)",
      id: "sell-1",
      rate: 15,
      limit: 1,
      icon: ""
    }, {
      name: "ให้อาหารหมา",
      id: "feed-2",
      rate: 5,
      limit: 2,
      icon: ""
    }, {
      name: "ล้างจาน",
      id: "cleandish-2",
      rate: 10,
      limit: 2,
      icon: ""
    }, {
      name: "แช่ของ",
      id: "fillshelf-2",
      rate: 5,
      limit: 2,
      icon: ""
    }, {
      name: "ปิดบ้าน",
      id: "closehome-1",
      rate: 5,
      limit: 1,
      icon: ""
    }, {
      name: "ทิ้งขยะ ",
      id: "garbage-3",
      rate: 10,
      limit: 3,
      icon: ""
    }, {
      name: "ช่วยแม่ทำงาน (วัน)",
      id: "helpmom-1",
      rate: 15,
      limit: 1,
      icon: ""
    }];
    this.rate = 0;
    this.rateSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.orderSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.taskAllUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.taskUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    this.t = [];
    this.allTasksCollections = afs.doc(`Task/${this.user.uid}`).collection("allData");
    this.tasksCollections = afs.doc(`Task/${this.user.uid}`).collection("data");
  } // addTask(){
  //   this.limit++
  //   this.limitSub.next(this.limit)
  // }


  getAllTasks() {
    var allTask = this.allTasksCollections;
    allTask.snapshotChanges().subscribe(data => {
      if (data.length == 0) {
        this.tasks.map(data => {
          this.allTasksCollections.doc(data.id).set(data);
        });
      } else {
        allTask.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
          return data.map(task => {
            return task;
          });
        })).subscribe(res => {
          this.taskAllUpdated.next(res);
        });
      }
    });
  }

  getAllTaskUpdate() {
    return this.taskAllUpdated;
  }

  getRateUpdate() {
    return this.rateSub;
  }

  getorderUpdate() {
    return this.orderSub;
  }

  getTask() {
    var task = this.tasksCollections;
    task.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
      this.rate = 0;
      return data.map(t => {
        this.rate += t.rate;
        return t;
      });
    })).subscribe(res => {
      this.rateSub.next(this.rate);
      this.taskUpdated.next(res);
      this.orderSub.next(res.length);
    });
  }

  getTaskUpdated() {
    return this.taskUpdated;
  }

  changeAllTask(task) {
    let oldId = task.id;
    let id = task.id.substr(0, task.id.indexOf("-"));
    task.id = `${id}-${task.limit}`;
    this.allTasksCollections.doc(oldId).delete();
    this.allTasksCollections.doc(task.id).set({
      name: task.name,
      id: task.id,
      limit: task.limit,
      rate: task.rate,
      icon: ""
    });
  }

  addTask(task) {
    this.tasksCollections.doc(task.id).set(task);
    task.limit--;
    this.changeAllTask(task);
  }

  deleteTask(task) {
    var _this = this;

    return Object(D_web_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var allTask = _this.allTasksCollections;
      yield allTask.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
        return data.find(d => d.name == task.name);
      })).subscribe(data => {
        data.limit++;

        _this.changeAllTask(data);
      });
      yield _this.tasksCollections.doc(task.id).delete();
    })();
  }

};

TaskService.ctorParameters = () => [{
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
}];

TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
  providedIn: "root"
})], TaskService);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "1W4x");





const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'regis', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main/main.module */ "XpXM")).then(x => x.MainModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");






let LoginComponent = class LoginComponent {
    constructor(user) {
        this.user = user;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,]);
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]);
        this.hide = true;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.user.login(this.emailForm.value, this.passwordForm.value);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MatertialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatertialModule", function() { return MatertialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");














































let MatertialModule = class MatertialModule {
};
MatertialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_45__["BrowserAnimationsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        ]
    })
], MatertialModule);



/***/ }),

/***/ "wBbn":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/list-tasks/list-tasks.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngFor=\"let i of tasks\">\n  {{i.name}}\n  <button mat-mini-fab color=\"primary\" class=\"btn\"  (click)=\"onAdd(i)\"  [disabled]=\"i.limit==0?true:false\" >\n   {{i.limit}}\n </button>\n</mat-card>\n");

/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "40DX");
/* harmony import */ var _main_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.css */ "Aqmg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tasks.service */ "ptfe");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users.service */ "6Qg2");






let MainComponent = class MainComponent {
    constructor(tasks, user) {
        this.tasks = tasks;
        this.user = user;
        this.data = JSON.parse(localStorage.getItem("user"));
        this.typesOfMenu = [
            { name: "Home", link: "/", icon: "home" },
            { name: "Tasks", link: "/Order", icon: "description" },
        ];
        this.limit = 0;
    }
    ngOnInit() {
        this.tasks.getTask();
        this.tasks.getorderUpdate().subscribe(data => {
            this.limit = data;
        });
    }
    logout() {
        this.user.logout();
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.91d89d794dd2a1e6ed39.js.map