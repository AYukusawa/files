(self["webpackChunkwgid_account_manager_ui"] = self["webpackChunkwgid_account_manager_ui"] || []).push([["main"],{

/***/ 40503:
/*!********************************************!*\
  !*** ./src/app/account-manager.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountManagerService": () => (/* binding */ AccountManagerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/common-helper.service */ 17706);






class AccountManagerService {
  constructor(http, commonHelperService) {
    this.http = http;
    this.commonHelperService = commonHelperService;
    this.accountManagerBaseURL = 'acctmgr';
    this.guardApiURL = '';
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.guardApiURL = this.commonHelperService.getUrlByEnv('guardApiURL');
  }
  checkUserNameExists(userName) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/user_name`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('user_name', userName);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  checkDuplicateEmail(email) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/email`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('email', email);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  createAccount(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/account`;
    return this.http.post(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  sendResetPassword(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/forgot/password`;
    return this.http.post(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  setPassword(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/credential/password`;
    return this.http.post(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  resetPassword(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/credential/password`;
    return this.http.put(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  retrieveUserName(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/forgot/user_name`;
    return this.http.post(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  validateToken(token, new_user) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/token/validate`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('token', token).set('new_user', new_user);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  validatePassword(password) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/credential/validate_password`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('password', password);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getAccountInfoByContactId(contact_id) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/account/get_by_contactId`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('contact_id', contact_id);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  inviteFromSalesforce(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/inviteFromSalesForce`;
    return this.http.post(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  validateEmailToken(token, federation_id) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/email/validatetoken`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('email_change_token', token).set('federation_id', federation_id);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  confirmPendingEmail(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/confirmPendingEmail`;
    return this.http.patch(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  cancelPendingEmail(payload) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/cancelPendingEmail`;
    return this.http.patch(url, payload, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getPendingEmail(federationId) {
    const url = this.guardApiURL + `${this.accountManagerBaseURL}/user/pendingEmail`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('federationId', federationId);
    return this.http.get(url, {
      params,
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  handleError(error) {
    const errMsgStatus = error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    const errMsg = error.message ? error.message : errMsgStatus;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errMsg));
  }
  static #_ = this.Éµfac = function AccountManagerService_Factory(t) {
    return new (t || AccountManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_0__.CommonHelperService));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineInjectable"]({
    token: AccountManagerService,
    factory: AccountManagerService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account/create-account.component */ 71035);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ 49983);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 62054);
/* harmony import */ var _retrieve_user_name_retrieve_user_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retrieve-user-name/retrieve-user-name.component */ 37777);
/* harmony import */ var _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-region/select-region.component */ 50825);
/* harmony import */ var _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-password/set-password.component */ 92710);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email/email.component */ 3753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [{
  path: 'create-account',
  component: _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_0__.CreateAccountComponent
}, {
  path: 'set-password',
  component: _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_5__.SetPasswordComponent
}, {
  path: 'select-region',
  component: _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_4__.SelectRegionComponent
}, {
  path: 'reset-password',
  component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent
}, {
  path: 'retrieve-user-name',
  component: _retrieve_user_name_retrieve_user_name_component__WEBPACK_IMPORTED_MODULE_3__.RetrieveUserNameComponent
}, {
  path: 'change-email',
  component: _email_email_component__WEBPACK_IMPORTED_MODULE_6__.EmailComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalGuard]
}, {
  path: 'error',
  component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent
}, {
  path: '',
  redirectTo: 'create-account',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'create-account'
}];
class AppRoutingModule {
  static #_ = this.Éµfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.Éµmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.Éµinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _header_header_main_header_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header-main/header-main.component */ 13237);
/* harmony import */ var _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @watchguard/wg-notifications */ 28900);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);





class AppComponent {
  constructor() {
    this.title = 'wgid-account-manager-ui';
  }
  static #_ = this.Éµfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineComponent"]({
    type: AppComponent,
    selectors: [["wgc-app-root"]],
    decls: 8,
    vars: 2,
    consts: [[1, "text-center", "mt-4"], ["src", "images/wgc/svg-icons/wgc-dark-logo.svg", "alt", "wgc-logo"], [1, "container-fluid", "col-sm-6", "col-md-6", "d-flex", "justify-content-around"], [1, "col-sm-6", "col-md-5"], [3, "useService", "modal"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](0, "wgc-header-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](6, "wg-notifications")(7, "wg-loader", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµproperty"]("useService", true)("modal", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_main_header_main_component__WEBPACK_IMPORTED_MODULE_0__.HeaderMainComponent, _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_3__.WgNotificationsComponent, _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MSALGuardConfigFactory": () => (/* binding */ MSALGuardConfigFactory),
/* harmony export */   "MSALInstanceFactory": () => (/* binding */ MSALInstanceFactory),
/* harmony export */   "isMock": () => (/* binding */ isMock),
/* harmony export */   "translationInitializerFactory": () => (/* binding */ translationInitializerFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-translate-multi-http-loader */ 11919);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @azure/msal-browser */ 19790);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @azure/msal-browser */ 43105);
/* harmony import */ var _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @watchguard/wg-hide-show-password */ 32625);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @watchguard/wg-dropdown */ 45457);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @watchguard/wg-notifications */ 28900);
/* harmony import */ var _watchguard_wg_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @watchguard/wg-dialog */ 71241);
/* harmony import */ var _watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @watchguard/wg-utils */ 58557);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.module */ 60677);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 62054);
/* harmony import */ var _retrieve_user_name_retrieve_user_name_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retrieve-user-name/retrieve-user-name.component */ 37777);
/* harmony import */ var _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-password/set-password.component */ 92710);
/* harmony import */ var _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-region/select-region.component */ 50825);
/* harmony import */ var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-account/create-account.component */ 71035);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ 49983);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _mock_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock-interceptor.service */ 37197);
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-interceptor.service */ 51035);
/* harmony import */ var _inviteFromSalesforce_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inviteFromSalesforce/invite-user/invite-user.component */ 52962);
/* harmony import */ var _inviteFromSalesforce_invite_user_in_new_account_invite_user_in_new_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inviteFromSalesforce/invite-user-in-new-account/invite-user-in-new-account.component */ 69336);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/common-helper.service */ 17706);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email/email.component */ 3753);



































const isMock = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.mock;
// AoT requires an exported function for factories
function HttpLoaderFactory(httpBackend) {
  return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_16__.MultiTranslateHttpLoader(httpBackend, [{
    prefix: 'locale-bundle/wgid-acc-mgr/',
    suffix: '.json'
  }]);
}
function translationInitializerFactory(translate, commonHelperService, localeService) {
  commonHelperService.loadConfig();
  return () => {
    translate.setDefaultLang('en');
    translate.use(localeService.userPrefLang);
    return new Promise(resolve => {
      translate.onLangChange.subscribe(() => {
        resolve();
      });
    });
  };
}
class AppModule {
  static #_ = this.Éµfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.Éµmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ÉµÉµdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.Éµinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ÉµÉµdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_17__.APP_INITIALIZER,
      useFactory: translationInitializerFactory,
      deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService, _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_14__.CommonHelperService, _watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_19__.LocaleResolverService],
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS,
      useClass: isMock ? _mock_interceptor_service__WEBPACK_IMPORTED_MODULE_10__.HttpMockRequestInterceptor : _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptor,
      multi: true
    }, _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_21__.LoaderService, _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_22__.WgNotificationsService, _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_14__.CommonHelperService, _watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_19__.LocaleResolverService, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MsalService, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MsalGuard, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MsalBroadcastService, {
      provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
      deps: [_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_14__.CommonHelperService]
    }, {
      provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_25__.WgHideShowPasswordModule, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_26__.WgFormsModule, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_27__.WgButtonModule, _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_28__.WgDropdownModule, _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_22__.WgNotificationsModule, _watchguard_wg_dialog__WEBPACK_IMPORTED_MODULE_29__.WgDialogModule, _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_21__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MsalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpBackend]
      }
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ÉµÉµsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_7__.CreateAccountComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent, _retrieve_user_name_retrieve_user_name_component__WEBPACK_IMPORTED_MODULE_4__.RetrieveUserNameComponent, _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_6__.SelectRegionComponent, _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_5__.SetPasswordComponent, _error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent, _inviteFromSalesforce_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_12__.InviteUserComponent, _inviteFromSalesforce_invite_user_in_new_account_invite_user_in_new_account_component__WEBPACK_IMPORTED_MODULE_13__.InviteUserInNewAccountComponent, _email_email_component__WEBPACK_IMPORTED_MODULE_15__.EmailComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_25__.WgHideShowPasswordModule, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_26__.WgFormsModule, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_27__.WgButtonModule, _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_28__.WgDropdownModule, _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_22__.WgNotificationsModule, _watchguard_wg_dialog__WEBPACK_IMPORTED_MODULE_29__.WgDialogModule, _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_21__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_23__.MsalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule],
    exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule]
  });
})();
function MSALInstanceFactory(configService) {
  const authConfig = configService.config.auth;
  return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_32__.PublicClientApplication({
    auth: {
      clientId: authConfig.clientId,
      authority: authConfig.authority,
      redirectUri: '/change-email',
      postLogoutRedirectUri: authConfig.postLogoutUrl,
      knownAuthorities: authConfig.knownAuthorities
    },
    cache: {
      cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_33__.BrowserCacheLocation.SessionStorage
    }
  });
}
function MSALGuardConfigFactory() {
  return {
    interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_33__.InteractionType.Redirect
  };
}

/***/ }),

/***/ 51035:
/*!*********************************************!*\
  !*** ./src/app/auth-interceptor.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _payload_hashing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payload-hashing.service */ 77585);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_storage_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/storage-helper.service */ 81152);





class AuthInterceptor {
  constructor(payloadHashingService, route, storageHelperService) {
    this.payloadHashingService = payloadHashingService;
    this.route = route;
    this.storageHelperService = storageHelperService;
  }
  encodeQueryParams(queryParams) {
    const encodedParams = {};
    queryParams.keys().forEach(key => {
      encodedParams[key] = btoa(queryParams.get(key));
    });
    return encodedParams;
  }
  setAuthorizationHeader(req) {
    const reqParams = req.params;
    let token;
    if (reqParams.keys().length !== 0) {
      const encodedParams = this.encodeQueryParams(reqParams);
      const updatedReqParams = Object.keys(encodedParams).map(key => `${key}=${encodedParams[key]}`).join('&');
      req = req.clone({
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams({
          fromObject: encodedParams
        })
      });
      const sortedRequestParams = updatedReqParams.split('').sort().join('');
      token = this.payloadHashingService.hashPayload(sortedRequestParams);
    } else if (req.body) {
      token = this.payloadHashingService.hashPayload(JSON.stringify(req.body));
    } else {
      const sessionToken = this.storageHelperService.getSession("token");
      const sessionFederationId = this.storageHelperService.getSession("federationId");
      const joinTokenFederationId = sessionToken + '&' + sessionFederationId;
      token = this.getToken(joinTokenFederationId);
      this.storageHelperService.removeSession("token");
      this.storageHelperService.removeSession("federationId");
    }
    const bearerToken = 'Bearer ' + token;
    req = req.clone({
      headers: req.headers.set('Authorization', bearerToken)
    });
    return req;
  }
  getToken(updatedReqParams) {
    const sortedRequestParams = updatedReqParams.split('').sort().join('');
    return this.payloadHashingService.hashPayload(sortedRequestParams);
  }
  intercept(req, next) {
    const localDev = window.location.href.indexOf('watchguard.com') === -1;
    const serverlessApi = this.isServerlessApi(req.url);
    // Uncomment below to replace all override (service discovery) URLs with the real ones.
    // This way, you can use a real session if logged into dev
    if (localDev) {
      req = this._forLocalDev(req, serverlessApi);
    }
    if (/(\/cloud\/|\/aaas\/)/.test(req.url) || serverlessApi) {
      req = this.setAuthorizationHeader(req);
      // Get aound the CORS policy issue when running locally.
      // This must be after setHeaders() above.
      if (localDev && serverlessApi) {
        req = this.getAroundCorsPolicy(req);
      }
    } else {
      // append date when retrieving .json files to avaoid caching
      if (req.url.endsWith('.json')) {
        req = req.clone({
          url: req.url + '?' + Date.now()
        });
      }
    }
    return next.handle(req);
  }
  _forLocalDev(req, serverlessApi = false) {
    // no change to the url used for serverless API. Otherwise, proceed as normal.
    if (!serverlessApi) {
      const url = req.url.split('/');
      if (url.length > 4 && url[3] !== 'cloud') {
        req = req.clone({
          url: req.url.replace(/\.com\/.*?\//, '.com/')
        });
      }
    }
    return req;
  }
  // match the keyword to dermine if the request is for a serverless API.
  isServerlessApi(url) {
    if (!url) {
      return false;
    }
    // API's for Platform, https://guardapi.dev.usa.cloud.watchguard.com/<application>-<servicename>
    if (/guardapi/.test(url)) {
      return true;
    }
    return false;
  }
  // To get around the CORS Policy issue when running locally.
  getAroundCorsPolicy(req) {
    // This is for a custom domain, https://guardapi.dev.usa.cloud.watchguard.com
    //
    // This is to redirect http://localhost:4200/platform-groupmgr-svc/** to
    // https://guardapi.dev.usa.cloud.watchguard.com/platform-groupmgr-svc/**
    //
    // Note: The corresponding "base path mapping" entry in proxy.config.json is the /platform-groupmgr-svc/**,
    // "/platform-groupmgr-svc/**": {
    //   "target": "https://guardapi.dev.usa.cloud.watchguard.com",
    //   "secure": false,
    //   "changeOrigin": true
    // }
    //
    if (/guardapi.dev/.test(req.url)) {
      return req.clone({
        url: req.url.replace('https://guardapi.dev.usa.cloud.watchguard.com', '')
      });
    }
    if (/guardapi.acctmgr.dev/.test(req.url)) {
      return req.clone({
        url: req.url.replace('https://guardapi.acctmgr.dev.usa.cloud.watchguard.com', '')
      });
    }
    return req;
  }
  static #_ = this.Éµfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_payload_hashing_service__WEBPACK_IMPORTED_MODULE_0__.PayloadHashingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_shared_storage_helper_service__WEBPACK_IMPORTED_MODULE_1__.StorageHelperService));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.Éµfac
  });
}

/***/ }),

/***/ 71035:
/*!************************************************************!*\
  !*** ./src/app/create-account/create-account.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountComponent": () => (/* binding */ CreateAccountComponent)
/* harmony export */ });
/* harmony import */ var _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @watchguard/wg-notifications */ 28900);
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model */ 34152);
/* harmony import */ var _shared_countriesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/countriesList */ 70334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @watchguard/wg-dropdown */ 45457);
/* harmony import */ var _watchguard_wg_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @watchguard/wg-dialog */ 71241);
/* harmony import */ var _inviteFromSalesforce_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inviteFromSalesforce/invite-user/invite-user.component */ 52962);
/* harmony import */ var _inviteFromSalesforce_invite_user_in_new_account_invite_user_in_new_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inviteFromSalesforce/invite-user-in-new-account/invite-user-in-new-account.component */ 69336);




















function CreateAccountComponent_ng_container_3_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](0, "div", 15)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](4, "wg-dropdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("focusout", function CreateAccountComponent_ng_container_3_div_74_Template_wg_dropdown_focusout_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r6.form.controls["state"].markAllAsTouched());
    })("selectedEvent", function CreateAccountComponent_ng_container_3_div_74_Template_wg_dropdown_selectedEvent_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r8.dropdownSelected($event, "state"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](5, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](3, 5, ctx_r4.compStrs.state_province_region_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("dropdownList", ctx_r4.stateList)("isInvalid", ctx_r4.form.controls["state"].touched && ctx_r4.form.controls["state"].invalid)("userSelection", ctx_r4.stateSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r4.form.controls["state"]);
  }
}
function CreateAccountComponent_ng_container_3_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](0, "div", 34)(1, "div", 35)(2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](3, "input", 37)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](5, 1, ctx_r5.compStrs.receive_marketing_email_text), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµsanitizeHtml"]);
  }
}
function CreateAccountComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](1, "div", 10)(2, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](5, "div", 12)(6, "div", 13)(7, "div", 14)(8, "div", 15)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](12, "wg-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("focusout", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_focusout_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r9.form.controls["accountType"].markAllAsTouched());
    })("selectedEvent", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_selectedEvent_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r11.dropdownSelected($event, "accountType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](13, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](14, "div", 15)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](18, "input", 18)(19, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](20, "div", 15)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](24, "input", 19)(25, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](26, "div", 15)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](30, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("keyup", function CreateAccountComponent_ng_container_3_Template_input_keyup_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r12.updateUsernameFieldValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](31, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](32, "div", 15)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](36, "input", 21)(37, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](38, "div", 15)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](42, "input", 22)(43, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](44, "div", 15)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](48, "input", 23)(49, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](50, "div", 15)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](54, "wg-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("focusout", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_focusout_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r13.form.controls["industry"].markAllAsTouched());
    })("selectedEvent", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_selectedEvent_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r14.dropdownSelected($event, "industry"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](55, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](56, "div", 15)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](60, "input", 25)(61, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](62, "div", 15)(63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](66, "input", 26)(67, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](68, "div", 15)(69, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](72, "input", 27)(73, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](74, CreateAccountComponent_ng_container_3_div_74_Template, 6, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](75, "div", 15)(76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](79, "wg-dropdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("focusout", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_focusout_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r15.form.controls["country"].markAllAsTouched());
    })("selectedEvent", function CreateAccountComponent_ng_container_3_Template_wg_dropdown_selectedEvent_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r16.dropdownSelected($event, "country"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](80, "wg-form-control-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](81, CreateAccountComponent_ng_container_3_div_81_Template, 6, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](82, "div", 31)(83, "wg-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("click", function CreateAccountComponent_ng_container_3_Template_wg_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµresetView"](ctx_r17.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](4, 35, ctx_r0.compStrs.create_acc_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](11, 37, ctx_r0.compStrs.account_type_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("dropdownList", ctx_r0.accountTypesList)("isInvalid", ctx_r0.form.controls["accountType"].touched && ctx_r0.form.controls["accountType"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["accountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](17, 39, ctx_r0.compStrs.first_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["firstName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](23, 41, ctx_r0.compStrs.last_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["lastName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](29, 43, ctx_r0.compStrs.username_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["userName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](35, 45, ctx_r0.compStrs.email_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](41, 47, ctx_r0.compStrs.phone_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](47, 49, ctx_r0.compStrs.company_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["companyName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](53, 51, ctx_r0.compStrs.industry_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("dropdownList", ctx_r0.industryList)("isInvalid", ctx_r0.form.controls["industry"].touched && ctx_r0.form.controls["industry"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["industry"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](59, 53, ctx_r0.compStrs.street_address_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["street"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](65, 55, ctx_r0.compStrs.postal_code_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["postalCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](71, 57, ctx_r0.compStrs.city_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["city"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", ctx_r0.stateList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](78, 59, ctx_r0.compStrs.country_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("dropdownList", ctx_r0.countryList)("isInvalid", ctx_r0.form.controls["country"].touched && ctx_r0.form.controls["country"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("control", ctx_r0.form.controls["country"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", ctx_r0.isShowOptInEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](85, 61, ctx_r0.compStrs.create_acc_btn_lbl), " ");
  }
}
function CreateAccountComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](1, "div", 38)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](4, 2, ctx_r1.compStrs.create_acc_check_email_msg));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](7, 4, ctx_r1.compStrs.create_acc_contact_msg), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµsanitizeHtml"]);
  }
}
function CreateAccountComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](1, "wgc-invite-user-in-new-account", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("accountInfo", ctx_r2.accountInfo)("contactId", ctx_r2.contactId);
  }
}
function CreateAccountComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](1, "wgc-invite-user", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("accountInfo", ctx_r3.accountInfo)("contactId", ctx_r3.contactId);
  }
}
class CreateAccountComponent {
  constructor(fb, customValidator, accountManagerService, notificationService, commonHelperService, loaderService, el, route, translateService) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.notificationService = notificationService;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.route = route;
    this.translateService = translateService;
    this.isShowConfirmation = false;
    this.isShowOptInEmail = false;
    this.isShowWarning = false;
    this.isShowCreateAccountForm = false;
    this.isInviteUserinNewAccountForm = false;
    this.isInviteUserForm = false;
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_ACC_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
    this.industryList = [];
    this.countryList = [];
    this.stateList = [];
    this.accountTypesList = [];
    this.userNameExistsValFn = this.customValidator.commonValFn('userNameUnique');
    this.stateRequiredFn = this.customValidator.requiredFn('state');
    this.emailTransParams = {
      email: ''
    };
    this.errorCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_COMP_STRINGS;
    this.setError = {
      errorHeader: this.translateService.instant(this.errorCompStrs.page_heading),
      errorMessage: this.translateService.instant(this.errorCompStrs.duplicate_email_error_heading),
      redirectMessage: this.translateService.instant(this.errorCompStrs.duplicate_email_error_subheading)
    };
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.create_account);
    this.setUserFlow();
  }
  setUserFlow() {
    const urlData = {
      params: {}
    };
    this.fetchQueryParamsSub = this.fetchQueryParams().subscribe(queryParams => {
      urlData.params = queryParams;
      this.contactId = urlData.params.contact_id;
      if (this.contactId === undefined) {
        this.isShowCreateAccountForm = true;
        this.initForm();
        this.setDropDownItems();
      } else {
        this.loaderService.showLoading();
        this.getAccountInfoByContactId();
      }
    });
  }
  fetchQueryParams() {
    return this.route.queryParams;
  }
  getAccountInfoByContactId() {
    this.getAccountInfoSub = this.accountManagerService.getAccountInfoByContactId(this.contactId).subscribe({
      next: data => this.handleGetAccountInfoByContactIdResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  handleGetAccountInfoByContactIdResponse(data) {
    if (data.status === 'success') {
      this.accountInfo = data;
      this.setInviteFromSalesforceFlow(this.accountInfo.account_exists);
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  setInviteFromSalesforceFlow(account_exists) {
    if (!account_exists) {
      this.isInviteUserinNewAccountForm = true;
    } else {
      if (this.accountInfo.account_details.isEmailDuplicateInSameAccount) {
        this.commonHelperService.showApiError(this.setError);
      } else {
        this.isInviteUserForm = true;
      }
    }
  }
  initForm() {
    this.form = this.fb.group({
      firstName: ['', [this.customValidator.requiredFn('firstName'), this.customValidator.regexFn('firstName'), this.customValidator.lengthValFn('firstName', 40)]],
      lastName: ['', [this.customValidator.requiredFn('lastName'), this.customValidator.regexFn('lastName'), this.customValidator.lengthValFn('lastName', 40)]],
      userName: ['', [this.customValidator.requiredFn('userName'), this.customValidator.regexFn('userName'), this.customValidator.lengthValFn('userName', 65, 5)]],
      email: ['', [this.customValidator.requiredFn('email'), this.customValidator.regexFn('email'), this.customValidator.lengthValFn('email', 80, 4)]],
      phone: ['', [this.customValidator.requiredFn('phone'), this.customValidator.regexFn('phone'), this.customValidator.lengthValFn('phone', 40, 6)]],
      companyName: ['', [this.customValidator.requiredFn('companyName'), this.customValidator.regexFn('companyName')]],
      industry: [null, this.customValidator.requiredFn('industry')],
      street: ['', [this.customValidator.requiredFn('street'), this.customValidator.regexFn('street'), this.customValidator.lengthValFn('streetAddress', 150)]],
      postalCode: ['', [this.customValidator.requiredFn('postalCode'), this.customValidator.regexFn('postalCode'), this.customValidator.lengthValFn('postalCode', 20)]],
      city: ['', [this.customValidator.requiredFn('city'), this.customValidator.regexFn('city'), this.customValidator.lengthValFn('city', 40)]],
      state: [null],
      country: [null, [this.customValidator.requiredFn('country')]],
      accountType: [null, [this.customValidator.requiredFn('accountType')]],
      optedInForEmail: [false]
    });
  }
  setDropDownItems() {
    Object.values(_shared_model__WEBPACK_IMPORTED_MODULE_1__.IndustryList).forEach(industry => this.industryList.push({
      id: industry,
      val: industry
    }));
    Object.keys(_shared_countriesList__WEBPACK_IMPORTED_MODULE_2__.countriesList).forEach(country => this.countryList.push({
      id: country,
      val: country
    }));
    Object.keys(_shared_model__WEBPACK_IMPORTED_MODULE_1__.AccountTypesList).forEach(accountType => this.accountTypesList.push({
      id: accountType,
      val: accountType
    }));
  }
  updateStateList() {
    const countryInfo = _shared_countriesList__WEBPACK_IMPORTED_MODULE_2__.countriesList[this.countrySelected.val];
    const stateField = this.form.controls.state;
    this.isShowOptInEmail = countryInfo.zone === 'EU';
    this.stateList = countryInfo.states;
    this.stateSelected = null;
    stateField.setValue(null);
    if (this.stateList.length) {
      stateField.markAsUntouched();
      stateField.addValidators([this.stateRequiredFn]);
    } else {
      stateField.removeValidators([this.stateRequiredFn]);
    }
    stateField.updateValueAndValidity();
  }
  dropdownSelected(item, field) {
    if (field === 'accountType') {
      this.accountTypeSelected = item;
    }
    if (field === 'industry') {
      this.industrySelected = item;
    } else if (field === 'country') {
      this.countrySelected = item;
      this.updateStateList();
    } else if (field === 'state') {
      // We will simply update userSelection reference only when it is null or selectedItem is different
      if (!this.stateSelected || item.id !== this.stateSelected.id) {
        this.stateSelected = item;
      }
    }
  }
  handleValidateUserNameResponse(data, userNameField) {
    if (data.user_exists) {
      userNameField.addValidators([this.userNameExistsValFn]);
      this.loaderService.hideLoading();
      this.commonHelperService.getFormFieldElementRef(this.el, 'userName', '[formcontrolname="userName"]').focus();
    } else {
      userNameField.removeValidators([this.userNameExistsValFn]);
      this.validateDuplicateEmail();
    }
    userNameField.updateValueAndValidity();
  }
  updateUsernameFieldValidity() {
    const userNameField = this.form.controls.userName;
    userNameField.removeValidators([this.userNameExistsValFn]);
    userNameField.updateValueAndValidity();
  }
  validateUserNameExists() {
    const userName = this.form.value.userName || '';
    const userNameField = this.form.controls.userName;
    if (userNameField.valid) {
      this.checkUserNameExistsSub = this.accountManagerService.checkUserNameExists(userName).subscribe({
        next: data => this.handleValidateUserNameResponse(data, userNameField),
        error: () => this.commonHelperService.handleApiError()
      });
    } else {
      userNameField.removeValidators([this.userNameExistsValFn]);
      userNameField.updateValueAndValidity();
    }
  }
  handleValidateEmailResponse(data, email) {
    this.notificationService.clear(_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_9__.NotificationType.Info);
    this.emailTransParams = {
      email
    };
    if (data.user_exists) {
      this.showDuplicateEmailWarningDialog();
    } else {
      this.createAccount();
    }
    this.loaderService.hideLoading();
  }
  createAccountWithDuplicateEmail() {
    this.isShowWarning = false;
    this.loaderService.showLoading();
    this.createAccount();
  }
  validateDuplicateEmail() {
    const email = this.form.value.email || '';
    if (email) {
      this.loaderService.showLoading();
      this.checkEmailExistsSub = this.accountManagerService.checkDuplicateEmail(email).subscribe({
        next: data => this.handleValidateEmailResponse(data, email),
        error: () => this.commonHelperService.handleApiError()
      });
    }
  }
  generatePayload() {
    const formData = {
      ...this.form.value,
      industry: this.industrySelected.val,
      country: this.countrySelected.val,
      state: this.stateSelected?.id || '',
      optedInForEmail: !this.form.value.optedInForEmail,
      accountType: this.accountTypeSelected.val
    };
    return formData;
  }
  handleCreateAccountResponse(data) {
    if (data.status === 'success') {
      this.isShowConfirmation = true;
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  createAccount() {
    const payload = this.generatePayload();
    this.createAccountSub = this.accountManagerService.createAccount(payload).subscribe({
      next: data => this.handleCreateAccountResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  closeDuplicateEmailWarningDialog() {
    this.isShowWarning = false;
    this.loaderService.hideLoading();
  }
  showDuplicateEmailWarningDialog() {
    this.isShowWarning = true;
  }
  submit() {
    if (this.form.valid) {
      this.loaderService.showLoading();
      this.validateUserNameExists();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.checkUserNameExistsSub?.unsubscribe();
    this.checkEmailExistsSub?.unsubscribe();
    this.createAccountSub?.unsubscribe();
    this.getAccountInfoSub?.unsubscribe();
    this.fetchQueryParamsSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function CreateAccountComponent_Factory(t) {
    return new (t || CreateAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_4__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_9__.WgNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_5__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_11__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµdefineComponent"]({
    type: CreateAccountComponent,
    selectors: [["wgc-create-account"]],
    decls: 25,
    vars: 22,
    consts: [["src", "https://www.googletagmanager.com/ns.html?id=GTM-KS2GSV", "height", "0", "width", "0", 2, "display", "none", "visibility", "hidden"], [4, "ngIf"], [1, "wg-dialog-sm", 3, "showDialog", "hideClickOutside", "dialogClosedEvent"], ["dialog-title", ""], ["dialog-content", ""], [3, "innerHTML"], ["dialog-footer", ""], [1, "ui-dialog-buttonpane"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup"], [1, "wg-form-row"], [1, "wg-form-col"], [1, "form-group", "required"], ["id", "accountType", "placeHolderText", "Select from the list", "formControlName", "accountType", 3, "dropdownList", "isInvalid", "focusout", "selectedEvent"], [3, "control"], ["type", "text", "formControlName", "firstName", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "lastName", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "userName", "wgTrim", "", 1, "form-control", 3, "keyup"], ["type", "text", "formControlName", "email", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "companyName", "wgTrim", "", 1, "form-control"], ["id", "industry", "placeHolderText", "Select from the list", "formControlName", "industry", 3, "dropdownList", "isInvalid", "focusout", "selectedEvent"], ["type", "text", "formControlName", "street", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "postalCode", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "city", "wgTrim", "", 1, "form-control"], ["class", "form-group required", 4, "ngIf"], ["id", "country", "placeHolderText", "Select from the list", "formControlName", "country", 3, "dropdownList", "isInvalid", "focusout", "selectedEvent"], ["class", "form-group for-checkbox-inline", 4, "ngIf"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], ["id", "state", "placeHolderText", "Select from the list", "formControlName", "state", 3, "dropdownList", "isInvalid", "userSelection", "focusout", "selectedEvent"], [1, "form-group", "for-checkbox-inline"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "name", "test-radio", "formControlName", "optedInForEmail", 1, "form-check-input"], [1, "text-center", "mt-4"], [3, "accountInfo", "contactId"]],
    template: function CreateAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](0, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](1, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](3, CreateAccountComponent_ng_container_3_Template, 86, 63, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](4, CreateAccountComponent_ng_container_4_Template, 8, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](5, "wg-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("dialogClosedEvent", function CreateAccountComponent_Template_wg_dialog_dialogClosedEvent_5_listener() {
          return ctx.closeDuplicateEmailWarningDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelement"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](15, "div", 6)(16, "div", 7)(17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("click", function CreateAccountComponent_Template_button_click_17_listener() {
          return ctx.closeDuplicateEmailWarningDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµlistener"]("click", function CreateAccountComponent_Template_button_click_20_listener() {
          return ctx.createAccountWithDuplicateEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](23, CreateAccountComponent_ng_container_23_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtemplate"](24, CreateAccountComponent_ng_container_24_Template, 2, 2, "ng-container", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", !ctx.isShowConfirmation && ctx.isShowCreateAccountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", ctx.isShowConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("showDialog", ctx.isShowWarning)("hideClickOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](8, 11, ctx.compStrs.duplicate_email_dialog_title));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind2"](11, 13, ctx.errorStrs.user_exists_email_info_msg, ctx.emailTransParams), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](14, 16, ctx.errorStrs.email_duplicate));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](19, 18, ctx.compStrs.duplicate_email_dialog_btn_no_lbl), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµpipeBind1"](22, 20, ctx.compStrs.duplicate_email_dialog_proceed_btn_lbl), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", ctx.isInviteUserinNewAccountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ÉµÉµproperty"]("ngIf", ctx.isInviteUserForm && !ctx.isInviteUserinNewAccountForm && !ctx.isShowCreateAccountForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlErrorComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_15__.TrimDirective, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_16__.WgButtonComponent, _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_17__.WgDropdownComponent, _watchguard_wg_dialog__WEBPACK_IMPORTED_MODULE_18__.WgDialogComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _inviteFromSalesforce_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_6__.InviteUserComponent, _inviteFromSalesforce_invite_user_in_new_account_invite_user_in_new_account_component__WEBPACK_IMPORTED_MODULE_7__.InviteUserInNewAccountComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3753:
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _shared_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/storage-helper.service */ 81152);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);











function EmailComponent_ng_container_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function EmailComponent_ng_container_0_div_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r6.cancelEmailRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function EmailComponent_ng_container_0_div_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r8.confirmEmailRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](3, 2, ctx_r3.emailChangeString.email_cancel_btn_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](6, 4, ctx_r3.emailChangeString.email_change_btn_lbl), " ");
  }
}
function EmailComponent_ng_container_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div", 10)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function EmailComponent_ng_container_0_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r9.cancelEmailRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](3, 1, ctx_r4.emailChangeString.email_change_btn_lbl), " ");
  }
}
function EmailComponent_ng_container_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpropertyInterpolate"]("href", ctx_r5.wgCloudLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](3, 2, ctx_r5.errorCompStrs.return_to_wg_cloud));
  }
}
function EmailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div")(2, "div", 1)(3, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](6, "div", 1)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](10, "div", 3)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](17, "div", 3)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](24, EmailComponent_ng_container_0_div_24_Template, 7, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](25, EmailComponent_ng_container_0_div_25_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](26, EmailComponent_ng_container_0_div_26_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](5, 9, ctx_r0.emailChangeString.email_title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](9, 11, ctx_r0.emailChangeString.email_message));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](13, 13, ctx_r0.emailChangeString.previous_email_address_lbl), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](16, 15, ctx_r0.oldEmail));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](20, 17, ctx_r0.emailChangeString.new_email_address_lbl), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](23, 19, ctx_r0.newEmail));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx_r0.isShowForConfirmEmaillbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx_r0.isShowForConfirmEmaillbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx_r0.isShowForConfirmEmaillbl);
  }
}
function EmailComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 13)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "div", 13)(6, "wg-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function EmailComponent_ng_container_1_Template_wg_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r11.returnToCloudLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 2, ctx_r1.emailChangeString.confirm_email_success));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 4, ctx_r1.addAccCompStrs.return_to_login_page_btn_lbl), " ");
  }
}
function EmailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 13)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "div", 13)(6, "wg-button", 15)(7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 3, ctx_r2.emailChangeString.cancel_email_message));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpropertyInterpolate"]("href", ctx_r2.signInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](9, 5, ctx_r2.addAccCompStrs.return_to_login_page_btn_lbl));
  }
}
class EmailComponent {
  constructor(route, commonHelperService, accountManagerService, loaderService, authService, storageService, translateService) {
    this.route = route;
    this.commonHelperService = commonHelperService;
    this.accountManagerService = accountManagerService;
    this.loaderService = loaderService;
    this.authService = authService;
    this.storageService = storageService;
    this.translateService = translateService;
    this.token = '';
    this.b2cToken = '';
    this.claimPayload = '';
    this.federation_id = '';
    this.account_id = '';
    this.region_id = -1;
    this.username = '';
    this.oldEmail = '';
    this.newEmail = '';
    this.signInUrl = '';
    this.wgCloudLink = this.commonHelperService.getUrlByEnv('signInToCloud');
    this.isShowConfirmation = false;
    this.isShowEmail = false;
    this.isShowForConfirmEmaillbl = true;
    this.isShowCancelConfirmation = false;
    this.wgCloudLinkTransParams = {
      wgCloudLink: this.wgCloudLink
    };
    this.addAccCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_ACC_STRINGS;
    this.emailChangeString = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.EMAIL_CHANGE_STRINGS;
    this.errorCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_COMP_STRINGS;
    this.setNoPendingEmailContent = {
      errorHeader: this.emailChangeString.no_pending_email_found,
      errorMessage: this.errorCompStrs.contact_customer_care,
      redirectMessage: this.translateService.instant(this.errorCompStrs.return_to_wg_cloud_msg, this.wgCloudLinkTransParams)
    };
    this.setError = {
      errorHeader: this.errorCompStrs.page_heading,
      errorMessage: this.errorCompStrs.contact_customer_care,
      redirectMessage: this.errorCompStrs.redirect_to_start_reg
    };
  }
  ngOnInit() {
    this.loaderService.showLoading();
    this.getAccessToken();
  }
  setUserFlow() {
    const urlData = {
      params: {}
    };
    this.fetchQueryParamsSub = this.route.queryParams.subscribe(queryParams => {
      urlData.params = queryParams;
      this.token = urlData.params.token;
      this.storageService.setSession("token", this.token);
    });
  }
  validateConfirmEmailToken() {
    this.accountManagerService.validateEmailToken(this.token, this.federation_id).subscribe({
      next: data => this.handleValidateEmailTokenResponse(data),
      error: () => this.showApiErrors()
    });
  }
  handleValidateEmailTokenResponse(data) {
    if (data.status === 'success' && data.isTokenValid) {
      this.oldEmail = data.oldEmailId;
      this.newEmail = data.pendingEmailId;
      this.isShowEmail = true;
    } else {
      this.commonHelperService.showApiError(this.setError);
    }
    this.loaderService.hideLoading();
  }
  confirmEmailRequest() {
    this.loaderService.showLoading();
    this.accountManagerService.confirmPendingEmail(this.generatePayload()).subscribe({
      next: data => this.handelConfirmEmailChangeRequset(data),
      error: () => this.showApiErrors()
    });
  }
  cancelEmailRequest() {
    this.loaderService.showLoading();
    this.accountManagerService.cancelPendingEmail(this.generateCancelPaylaod()).subscribe({
      next: data => this.handleCancelEmailChangeResponse(data),
      error: () => this.showApiErrors()
    });
  }
  handelConfirmEmailChangeRequset(data) {
    if (data.status == 'success') {
      this.isShowConfirmation = true;
      setTimeout(() => {
        this.returnToCloudLogin();
      }, 10000);
    }
    this.handleEmailResponse(data);
  }
  handleCancelEmailChangeResponse(data) {
    if (data.status == 'success') {
      this.isShowCancelConfirmation = true;
    }
    this.handleEmailResponse(data);
  }
  handleEmailResponse(data) {
    if (data.status == 'success') {
      this.signInUrl = this.commonHelperService.getUrlByEnv('signInToCloud');
      this.isShowEmail = false;
    } else {
      this.commonHelperService.showApiError(this.setError);
    }
    this.loaderService.hideLoading();
  }
  generatePayload() {
    const payload = {
      token: this.token,
      email: this.newEmail,
      federation_id: this.federation_id,
      account_id: this.account_id,
      region_id: this.region_id,
      username: this.username
    };
    return payload;
  }
  getAccessToken() {
    const accessTokenRequest = {
      scopes: [this.commonHelperService.getConfigByEnv().scope],
      account: this.authService.instance.getAllAccounts()[0]
    };
    this.authService.acquireTokenSilent(accessTokenRequest).subscribe(accessTokenReponse => {
      if (accessTokenReponse != null) {
        const accessToken = accessTokenReponse.accessToken;
        this.getClaimsData(accessToken);
      }
    });
  }
  generateCancelPaylaod() {
    const payload = {
      federation_id: this.federation_id,
      account_id: this.account_id,
      region_id: this.region_id,
      username: this.username
    };
    return payload;
  }
  getClaimsData(accToken) {
    this.claimPayload = atob(accToken.split('.')[1]);
    if (this.claimPayload) {
      this.federation_id = JSON.parse(this.claimPayload)?.extension_FederationId;
      this.username = JSON.parse(this.claimPayload)?.username;
      this.account_id = JSON.parse(this.claimPayload)?.extension_PrimaryAccountId;
      this.region_id = JSON.parse(this.claimPayload)?.extension_RegionId;
      this.storageService.setSession("federationId", this.federation_id);
      this.oldEmail = JSON.parse(this.claimPayload)?.email;
      this.setUserFlow();
      if (this.token) {
        this.validateConfirmEmailToken();
      } else {
        this.getPendingEmail();
      }
    }
  }
  returnToCloudLogin() {
    this.authService.logoutRedirect();
  }
  getPendingEmail() {
    this.accountManagerService.getPendingEmail(this.federation_id).subscribe({
      next: data => this.handleGetPendingEmailResponse(data),
      error: () => this.showApiErrors()
    });
  }
  handleGetPendingEmailResponse(data) {
    if (data.isEmailChangePending) {
      this.oldEmail = this.oldEmail;
      this.newEmail = data.pendingEmail;
      this.emailChangeString.email_title = this.emailChangeString.cancel_email_title;
      this.emailChangeString.email_message = this.emailChangeString.cancel_email_text;
      this.isShowForConfirmEmaillbl = false;
      this.isShowEmail = true;
    } else {
      const errorContent = this.setNoPendingEmailContent;
      this.commonHelperService.showApiError(errorContent);
    }
    this.loaderService.hideLoading();
  }
  showApiErrors() {
    this.commonHelperService.showApiError(this.setError);
    this.loaderService.hideLoading();
  }
  static #_ = this.Éµfac = function EmailComponent_Factory(t) {
    return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_1__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__.StorageHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineComponent"]({
    type: EmailComponent,
    selectors: [["app-email"]],
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], [1, "text-center"], [1, "my-4", "page-heading"], [1, "d-flex", "flex-column", "align-items-center", "mt-2"], ["class", "ui-dialog-buttonpane d-flex justify-content-around col-12 mt-4", 4, "ngIf"], ["class", "ui-dialog-buttonpane text-center mt-4", 4, "ngIf"], ["class", "ui-dialog-buttonpane text-center mt-2", 4, "ngIf"], [1, "ui-dialog-buttonpane", "d-flex", "justify-content-around", "col-12", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ui-dialog-buttonpane", "text-center", "mt-4"], [1, "ui-dialog-buttonpane", "text-center", "mt-2"], [3, "href"], [1, "text-center", "mt-4"], ["color", "primary", 3, "click"], ["color", "primary"], [1, "btn-a", 3, "href"]],
    template: function EmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](0, EmailComponent_ng_container_0_Template, 27, 21, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](1, EmailComponent_ng_container_1_Template, 9, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](2, EmailComponent_ng_container_2_Template, 10, 7, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.isShowEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.isShowConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.isShowCancelConfirmation);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_10__.WgButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



class ErrorComponent {
  ngOnInit() {
    this.errorContent = this.commonHelperService.errorContent;
  }
  constructor(commonHelperService) {
    this.commonHelperService = commonHelperService;
  }
  static #_ = this.Éµfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_0__.CommonHelperService));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineComponent"]({
    type: ErrorComponent,
    selectors: [["wgc-error"]],
    decls: 12,
    vars: 9,
    consts: [[1, "text-center"], [1, "my-4", "page-heading"], [3, "innerHTML"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementStart"](1, "div", 0)(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementStart"](5, "div", 0)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelement"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipeBind1"](4, 3, ctx.errorContent.errorHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipeBind1"](8, 5, ctx.errorContent.errorMessage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµpipeBind1"](11, 7, ctx.errorContent.redirectMessage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµsanitizeHtml"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13237:
/*!*************************************************************!*\
  !*** ./src/app/header/header-main/header-main.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMainComponent": () => (/* binding */ HeaderMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _watchguard_wg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @watchguard/wg-icon */ 6859);


class HeaderMainComponent {
  constructor() {
    this.supportUrl = 'https://www.watchguard.com/help/docs/help-center/en-US/index_CSH.html#15086';
  }
  static #_ = this.Éµfac = function HeaderMainComponent_Factory(t) {
    return new (t || HeaderMainComponent)();
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµdefineComponent"]({
    type: HeaderMainComponent,
    selectors: [["wgc-header-main"]],
    decls: 6,
    vars: 1,
    consts: [[1, "header"], [1, "section-title", "mx-3"], [1, "d-flex", "justify-content-between"], ["src", "images/wgc/svg-icons/wgc-light-logo.svg", "alt", "wgc-logo"], [3, "href"], ["name", "question-circle", 1, "size-18", "color-slate"]],
    template: function HeaderMainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµelement"](5, "wg-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµpropertyInterpolate"]("href", ctx.supportUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµsanitizeUrl"]);
      }
    },
    dependencies: [_watchguard_wg_icon__WEBPACK_IMPORTED_MODULE_1__.WgIconComponent],
    styles: [".header[_ngcontent-%COMP%] {\n  background-color: #434343 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci1tYWluL2hlYWRlci1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDMgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 60677:
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @watchguard/wg-icon */ 6859);
/* harmony import */ var _header_main_header_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-main/header-main.component */ 13237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class HeaderModule {
  static #_ = this.Éµfac = function HeaderModule_Factory(t) {
    return new (t || HeaderModule)();
  };
  static #_2 = this.Éµmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineNgModule"]({
    type: HeaderModule
  });
  static #_3 = this.Éµinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _watchguard_wg_icon__WEBPACK_IMPORTED_MODULE_3__.WgIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµsetNgModuleScope"](HeaderModule, {
    declarations: [_header_main_header_main_component__WEBPACK_IMPORTED_MODULE_0__.HeaderMainComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _watchguard_wg_icon__WEBPACK_IMPORTED_MODULE_3__.WgIconModule],
    exports: [_header_main_header_main_component__WEBPACK_IMPORTED_MODULE_0__.HeaderMainComponent]
  });
})();

/***/ }),

/***/ 39942:
/*!***********************************************************************!*\
  !*** ./src/app/inviteFromSalesforce/invite-from-sf-helper.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteFromSalesforceHelperService": () => (/* binding */ InviteFromSalesforceHelperService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);






class InviteFromSalesforceHelperService {
  constructor(customValidator, loaderService, accountManagerService, commonHelperService) {
    this.customValidator = customValidator;
    this.loaderService = loaderService;
    this.accountManagerService = accountManagerService;
    this.commonHelperService = commonHelperService;
    this.isPasswordValid = false;
    this.isUsernameValid = false;
    this.passwordCompromisedValFn = this.customValidator.commonValFn('password_compromised');
    this.matchPasswordValFn = this.customValidator.commonValFn('password_mismatch');
    this.userNameExistsValFn = this.customValidator.commonValFn('userNameUnique');
  }
  validateSamePassword(form) {
    const password = form.value.password || '';
    const confirmPasswordField = form.controls.confirm_password;
    const passwordField = form.controls.password;
    if (passwordField.hasValidator(this.passwordCompromisedValFn)) {
      passwordField.removeValidators([this.passwordCompromisedValFn]);
      passwordField.updateValueAndValidity();
    }
    if (password === '' || confirmPasswordField.value === '') {
      confirmPasswordField.removeValidators([this.matchPasswordValFn]);
    } else if (password && confirmPasswordField.value && password !== confirmPasswordField.value) {
      confirmPasswordField.addValidators([this.matchPasswordValFn]);
    } else {
      confirmPasswordField.removeValidators([this.matchPasswordValFn]);
    }
    confirmPasswordField.updateValueAndValidity();
  }
  validatePasswordAndUsername(form) {
    this.loaderService.showLoading();
    const password = form.value.password || '';
    const username = form.value.userName || '';
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this.accountManagerService.validatePassword(password), this.accountManagerService.checkUserNameExists(username)]);
  }
  handlePasswordValidation(isPasswordCompromised, form, el) {
    const passwordField = form.controls.password;
    if (isPasswordCompromised.status === 'success') {
      if (isPasswordCompromised.password_compromised) {
        passwordField.addValidators([this.passwordCompromisedValFn]);
        this.commonHelperService.getFormFieldElementRef(el, 'password', '[formcontrolname="password"]').focus();
        this.isPasswordValid = false;
      } else {
        passwordField.removeValidators([this.passwordCompromisedValFn]);
        this.isPasswordValid = true;
      }
      passwordField.updateValueAndValidity();
    } else {
      this.commonHelperService.showApiError();
    }
    return this.isPasswordValid;
  }
  handleUsernameValidation(duplicateUsernameExists, form, el) {
    const userNameField = form.controls.userName;
    if (duplicateUsernameExists.user_exists) {
      userNameField.addValidators([this.userNameExistsValFn]);
      this.commonHelperService.getFormFieldElementRef(el, 'userName', '[formcontrolname="userName"]').focus();
      this.isUsernameValid = false;
    } else {
      userNameField.removeValidators([this.userNameExistsValFn]);
      this.isUsernameValid = true;
    }
    userNameField.updateValueAndValidity();
    return this.isUsernameValid;
  }
  static #_ = this.Éµfac = function InviteFromSalesforceHelperService_Factory(t) {
    return new (t || InviteFromSalesforceHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_0__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_1__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµinject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_2__.CommonHelperService));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineInjectable"]({
    token: InviteFromSalesforceHelperService,
    factory: InviteFromSalesforceHelperService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 69336:
/*!*********************************************************************************************************!*\
  !*** ./src/app/inviteFromSalesforce/invite-user-in-new-account/invite-user-in-new-account.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteUserInNewAccountComponent": () => (/* binding */ InviteUserInNewAccountComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model */ 34152);
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui-strings */ 56927);
/* harmony import */ var _shared_countriesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/countriesList */ 70334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/custom-validator.service */ 26274);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _invite_from_sf_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../invite-from-sf-helper.service */ 39942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @watchguard/wg-hide-show-password */ 32625);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @watchguard/wg-dropdown */ 45457);
/* harmony import */ var _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../select-region/select-region.component */ 50825);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















function InviteUserInNewAccountComponent_ng_container_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](0, "div", 6)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](4, "wg-dropdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("focusout", function InviteUserInNewAccountComponent_ng_container_1_div_76_Template_wg_dropdown_focusout_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r4.form.controls["state"].markAllAsTouched());
    })("selectedEvent", function InviteUserInNewAccountComponent_ng_container_1_div_76_Template_wg_dropdown_selectedEvent_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r6.dropdownSelected($event, "state"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](5, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](3, 5, ctx_r2.addAccCompStrs.state_province_region_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("dropdownList", ctx_r2.stateList)("isInvalid", ctx_r2.form.controls["state"].touched && ctx_r2.form.controls["state"].invalid)("userSelection", ctx_r2.stateSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r2.form.controls["state"]);
  }
}
function InviteUserInNewAccountComponent_ng_container_1_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](0, "div", 27)(1, "div", 28)(2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](3, "input", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](5, 1, ctx_r3.addAccCompStrs.receive_marketing_email_text), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµsanitizeHtml"]);
  }
}
function InviteUserInNewAccountComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](1, "div", 1)(2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](12, "input", 7)(13, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](14, "div", 6)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](18, "input", 9)(19, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](20, "div", 6)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](24, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("keyup", function InviteUserInNewAccountComponent_ng_container_1_Template_input_keyup_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r7.updateUsernameFieldValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](25, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](26, "div", 6)(27, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](30, "wg-hide-show-password")(31, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("input", function InviteUserInNewAccountComponent_ng_container_1_Template_input_input_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r9.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](32, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](33, "div", 6)(34, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](37, "wg-hide-show-password")(38, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("input", function InviteUserInNewAccountComponent_ng_container_1_Template_input_input_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r10.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](39, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](40, "div", 6)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](44, "input", 15)(45, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](46, "div", 6)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](50, "input", 16)(51, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](52, "div", 6)(53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](56, "wg-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("focusout", function InviteUserInNewAccountComponent_ng_container_1_Template_wg_dropdown_focusout_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r11.form.controls["industry"].markAllAsTouched());
    })("selectedEvent", function InviteUserInNewAccountComponent_ng_container_1_Template_wg_dropdown_selectedEvent_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r12.dropdownSelected($event, "industry"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](57, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](58, "div", 6)(59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](62, "input", 18)(63, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](64, "div", 6)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](68, "input", 19)(69, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](70, "div", 6)(71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](74, "input", 20)(75, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtemplate"](76, InviteUserInNewAccountComponent_ng_container_1_div_76_Template, 6, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](77, "div", 6)(78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](81, "wg-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("focusout", function InviteUserInNewAccountComponent_ng_container_1_Template_wg_dropdown_focusout_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r13.form.controls["country"].markAllAsTouched());
    })("selectedEvent", function InviteUserInNewAccountComponent_ng_container_1_Template_wg_dropdown_selectedEvent_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r14.dropdownSelected($event, "country"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](82, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtemplate"](83, InviteUserInNewAccountComponent_ng_container_1_div_83_Template, 6, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](84, "div", 24)(85, "wg-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµlistener"]("click", function InviteUserInNewAccountComponent_ng_container_1_Template_wg_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµrestoreView"](_r8);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµresetView"](ctx_r15.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](4, 33, ctx_r0.compStrs.invite_from_sf_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](11, 35, ctx_r0.addAccCompStrs.first_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["firstName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](17, 37, ctx_r0.addAccCompStrs.last_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["lastName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](23, 39, ctx_r0.addAccCompStrs.username_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["userName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](29, 41, ctx_r0.addAccCompStrs.password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](36, 43, ctx_r0.addAccCompStrs.confirm_password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["confirm_password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](43, 45, ctx_r0.addAccCompStrs.phone_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](49, 47, ctx_r0.addAccCompStrs.company_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["companyName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](55, 49, ctx_r0.addAccCompStrs.industry_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("dropdownList", ctx_r0.industryList)("isInvalid", ctx_r0.form.controls["industry"].touched && ctx_r0.form.controls["industry"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["industry"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](61, 51, ctx_r0.addAccCompStrs.street_address_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["street"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](67, 53, ctx_r0.addAccCompStrs.postal_code_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["postalCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](73, 55, ctx_r0.addAccCompStrs.city_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["city"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("ngIf", ctx_r0.stateList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](80, 57, ctx_r0.addAccCompStrs.country_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("dropdownList", ctx_r0.countryList)("isInvalid", ctx_r0.form.controls["country"].touched && ctx_r0.form.controls["country"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("control", ctx_r0.form.controls["country"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("ngIf", ctx_r0.isShowOptInEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµpipeBind1"](87, 59, ctx_r0.addAccCompStrs.create_acc_btn_lbl), " ");
  }
}
function InviteUserInNewAccountComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelement"](1, "wgc-select-region", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("payload", ctx_r1.payload);
  }
}
class InviteUserInNewAccountComponent {
  constructor(fb, customValidator, commonHelperService, loaderService, el, inviteFromSfHelperService) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.inviteFromSfHelperService = inviteFromSfHelperService;
    this.isShowSelectRegion = false;
    this.isShowOptInEmail = false;
    this.isPasswordValid = false;
    this.isUsernameValid = false;
    this.addAccCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_1__.ADD_NEW_ACC_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_1__.ERROR_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_1__.APP_TITLE_STRINGS;
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_1__.INVITE_FROM_SF_COMP_STRINGS;
    this.industryList = [];
    this.countryList = [];
    this.stateList = [];
    this.stateRequiredFn = this.customValidator.requiredFn('state');
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.invite_from_sf);
    this.initForm();
    this.setDropDownItems();
    this.initValidators();
  }
  initValidators() {
    this.passwordCompromisedValFn = this.inviteFromSfHelperService.passwordCompromisedValFn;
    this.matchPasswordValFn = this.inviteFromSfHelperService.matchPasswordValFn;
    this.userNameExistsValFn = this.inviteFromSfHelperService.userNameExistsValFn;
  }
  initForm() {
    this.form = this.fb.group({
      firstName: ['', [this.customValidator.requiredFn('firstName'), this.customValidator.regexFn('firstName'), this.customValidator.lengthValFn('firstName', 40)]],
      lastName: ['', [this.customValidator.requiredFn('lastName'), this.customValidator.regexFn('lastName'), this.customValidator.lengthValFn('lastName', 40)]],
      userName: ['', [this.customValidator.requiredFn('userName'), this.customValidator.regexFn('userName'), this.customValidator.lengthValFn('userName', 65, 5)]],
      phone: ['', [this.customValidator.requiredFn('phone'), this.customValidator.regexFn('phone'), this.customValidator.lengthValFn('phone', 40, 6)]],
      companyName: ['', [this.customValidator.requiredFn('companyName'), this.customValidator.regexFn('companyName')]],
      industry: [null, this.customValidator.requiredFn('industry')],
      street: ['', [this.customValidator.requiredFn('street'), this.customValidator.regexFn('street'), this.customValidator.lengthValFn('streetAddress', 150)]],
      postalCode: ['', [this.customValidator.requiredFn('postalCode'), this.customValidator.regexFn('postalCode'), this.customValidator.lengthValFn('postalCode', 20)]],
      city: ['', [this.customValidator.requiredFn('city'), this.customValidator.regexFn('city'), this.customValidator.lengthValFn('city', 40)]],
      state: [null],
      country: [null, [this.customValidator.requiredFn('country')]],
      optedInForEmail: [false],
      password: ['', [this.customValidator.requiredFn('password'), this.customValidator.regexFn('password')]],
      confirm_password: ['', [this.customValidator.requiredFn('confirm_password')]]
    });
  }
  setDropDownItems() {
    Object.values(_shared_model__WEBPACK_IMPORTED_MODULE_0__.IndustryList).forEach(industry => this.industryList.push({
      id: industry,
      val: industry
    }));
    Object.keys(_shared_countriesList__WEBPACK_IMPORTED_MODULE_2__.countriesList).forEach(country => this.countryList.push({
      id: country,
      val: country
    }));
  }
  updateStateList() {
    const countryInfo = _shared_countriesList__WEBPACK_IMPORTED_MODULE_2__.countriesList[this.countrySelected.val];
    const stateField = this.form.controls.state;
    this.isShowOptInEmail = countryInfo.zone === 'EU';
    this.stateList = countryInfo.states;
    this.stateSelected = null;
    stateField.setValue(null);
    if (this.stateList.length) {
      stateField.markAsUntouched();
      stateField.addValidators([this.stateRequiredFn]);
    } else {
      stateField.removeValidators([this.stateRequiredFn]);
    }
    stateField.updateValueAndValidity();
  }
  dropdownSelected(item, field) {
    if (field === 'industry') {
      this.industrySelected = item;
    } else if (field === 'country') {
      this.countrySelected = item;
      this.updateStateList();
    } else if (field === 'state') {
      if (!this.stateSelected || item.id !== this.stateSelected.id) {
        this.stateSelected = item;
      }
    }
  }
  updateUsernameFieldValidity() {
    const userNameField = this.form.controls.userName;
    userNameField.removeValidators([this.userNameExistsValFn]);
    userNameField.updateValueAndValidity();
  }
  generatePayloadForInviteUserInNewAccount() {
    const formData = {
      ...this.form.value,
      industry: this.industrySelected.val,
      country: this.countrySelected.val,
      state: this.stateSelected?.id || '',
      nativeSalesforceContactId: this.contactId,
      accountId: this.accountInfo.account_details.contact.accountId__c,
      accountExists: this.accountInfo.account_exists,
      email: this.accountInfo.account_details.contact.email
    };
    return formData;
  }
  validateSamePassword() {
    this.inviteFromSfHelperService.validateSamePassword(this.form);
  }
  handleValidatePasswordAndUsernameResponse(isPasswordCompromised, isDuplicateUsername) {
    this.isPasswordValid = this.inviteFromSfHelperService.handlePasswordValidation(isPasswordCompromised, this.form, this.el);
    this.isUsernameValid = this.inviteFromSfHelperService.handleUsernameValidation(isDuplicateUsername, this.form, this.el);
    if (this.isPasswordValid && this.isUsernameValid) {
      this.payload = this.generatePayloadForInviteUserInNewAccount();
      this.isShowSelectRegion = true;
    }
    this.loaderService.hideLoading();
  }
  validatePasswordAndUsername() {
    this.inviteFromSfHelperService.validatePasswordAndUsername(this.form).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([isPasswordCompromised, isDuplicateUsername]) => {
      return this.isPasswordCompromised = isPasswordCompromised, this.isDuplicateUsername = isDuplicateUsername;
    })).subscribe({
      next: () => this.handleValidatePasswordAndUsernameResponse(this.isPasswordCompromised, this.isDuplicateUsername),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  submit() {
    if (this.form.valid) {
      this.validatePasswordAndUsername();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.checkUserNameExistsSub?.unsubscribe();
    this.validatePasswordSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function InviteUserInNewAccountComponent_Factory(t) {
    return new (t || InviteUserInNewAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_4__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_10__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdirectiveInject"](_invite_from_sf_helper_service__WEBPACK_IMPORTED_MODULE_5__.InviteFromSalesforceHelperService));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµdefineComponent"]({
    type: InviteUserInNewAccountComponent,
    selectors: [["wgc-invite-user-in-new-account"]],
    inputs: {
      accountInfo: "accountInfo",
      contactId: "contactId"
    },
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup"], [1, "wg-form-row"], [1, "wg-form-col"], [1, "form-group", "required"], ["type", "text", "formControlName", "firstName", "wgTrim", "", 1, "form-control"], [3, "control"], ["type", "text", "formControlName", "lastName", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "userName", "wgTrim", "", 1, "form-control", 3, "keyup"], ["for", "input-password"], ["id", "input-password", "type", "password", "formControlName", "password", 1, "form-control", 3, "input"], ["for", "input-confirm-password"], ["id", "input-confirm-password", "type", "password", "formControlName", "confirm_password", 1, "form-control", 3, "input"], ["type", "text", "formControlName", "phone", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "companyName", "wgTrim", "", 1, "form-control"], ["id", "industry", "placeHolderText", "Select from the list", "formControlName", "industry", 3, "dropdownList", "isInvalid", "focusout", "selectedEvent"], ["type", "text", "formControlName", "street", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "postalCode", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "city", "wgTrim", "", 1, "form-control"], ["class", "form-group required", 4, "ngIf"], ["id", "country", "placeHolderText", "Select from the list", "formControlName", "country", 3, "dropdownList", "isInvalid", "focusout", "selectedEvent"], ["class", "form-group for-checkbox-inline", 4, "ngIf"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], ["id", "state", "placeHolderText", "Select from the list", "formControlName", "state", 3, "dropdownList", "isInvalid", "userSelection", "focusout", "selectedEvent"], [1, "form-group", "for-checkbox-inline"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "name", "test-radio", "formControlName", "optedInForEmail", 1, "form-check-input"], [3, "innerHTML"], [3, "payload"]],
    template: function InviteUserInNewAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtemplate"](1, InviteUserInNewAccountComponent_ng_container_1_Template, 88, 61, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµtemplate"](2, InviteUserInNewAccountComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("ngIf", !ctx.isShowSelectRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ÉµÉµproperty"]("ngIf", ctx.isShowSelectRegion);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_12__.WgHideShowPasswordComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlErrorComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_13__.TrimDirective, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_14__.WgButtonComponent, _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_15__.WgDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_6__.SelectRegionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52962:
/*!***************************************************************************!*\
  !*** ./src/app/inviteFromSalesforce/invite-user/invite-user.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteUserComponent": () => (/* binding */ InviteUserComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _invite_from_sf_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invite-from-sf-helper.service */ 39942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @watchguard/wg-hide-show-password */ 32625);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function InviteUserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](1, "div", 1)(2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](12, "input", 7)(13, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](14, "div", 6)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](18, "input", 9)(19, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](20, "div", 6)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](24, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("keyup", function InviteUserComponent_ng_container_1_Template_input_keyup_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r2.updateUsernameFieldValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](25, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](26, "div", 6)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](30, "input", 11)(31, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](32, "div", 6)(33, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](36, "wg-hide-show-password")(37, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("input", function InviteUserComponent_ng_container_1_Template_input_input_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r4.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](38, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](39, "div", 6)(40, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](43, "wg-hide-show-password")(44, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("input", function InviteUserComponent_ng_container_1_Template_input_input_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r5.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](45, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](46, "div", 16)(47, "wg-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("click", function InviteUserComponent_ng_container_1_Template_wg_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r6.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](48, " SAVE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](4, 14, ctx_r0.compStrs.invite_from_sf_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](11, 16, ctx_r0.addAccCompStrs.first_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["firstName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](17, 18, ctx_r0.addAccCompStrs.last_name_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["lastName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](23, 20, ctx_r0.addAccCompStrs.username_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["userName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](29, 22, ctx_r0.addAccCompStrs.phone_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](35, 24, ctx_r0.addAccCompStrs.password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](42, 26, ctx_r0.addAccCompStrs.confirm_password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["confirm_password"]);
  }
}
function InviteUserComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](1, "div", 1)(2, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](5, "div", 19)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](9, "div", 19)(10, "wg-button", 20)(11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](4, 4, ctx_r1.addAccCompStrs.congratulations_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](8, 6, ctx_r1.addAccCompStrs.acc_created_msg));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpropertyInterpolate"]("href", ctx_r1.signInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](13, 8, ctx_r1.addAccCompStrs.return_to_login_page_btn_lbl));
  }
}
class InviteUserComponent {
  constructor(fb, customValidator, accountManagerService, commonHelperService, loaderService, el, inviteFromSfHelperService) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.inviteFromSfHelperService = inviteFromSfHelperService;
    this.isShowConfirmation = false;
    this.isPasswordValid = false;
    this.isUsernameValid = false;
    this.signInUrl = '';
    this.addAccCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_ACC_STRINGS;
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.INVITE_FROM_SF_COMP_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.invite_from_sf);
    this.initForm();
    this.signInUrl = this.commonHelperService.getUrlByEnv('signIn');
    this.initValidators();
  }
  initValidators() {
    this.passwordCompromisedValFn = this.inviteFromSfHelperService.passwordCompromisedValFn;
    this.matchPasswordValFn = this.inviteFromSfHelperService.matchPasswordValFn;
    this.userNameExistsValFn = this.inviteFromSfHelperService.userNameExistsValFn;
  }
  initForm() {
    this.form = this.fb.group({
      firstName: ['', [this.customValidator.requiredFn('firstName'), this.customValidator.regexFn('firstName'), this.customValidator.lengthValFn('firstName', 40)]],
      lastName: ['', [this.customValidator.requiredFn('lastName'), this.customValidator.regexFn('lastName'), this.customValidator.lengthValFn('lastName', 40)]],
      userName: ['', [this.customValidator.requiredFn('userName'), this.customValidator.regexFn('userName'), this.customValidator.lengthValFn('userName', 65, 5)]],
      phone: ['', [this.customValidator.requiredFn('phone'), this.customValidator.regexFn('phone'), this.customValidator.lengthValFn('phone', 40, 6)]],
      password: ['', [this.customValidator.requiredFn('password'), this.customValidator.regexFn('password')]],
      confirm_password: ['', [this.customValidator.requiredFn('confirm_password')]]
    });
  }
  inviteFromSalesforce(payload) {
    this.loaderService.showLoading();
    this.inviteUserFromSfSub = this.accountManagerService.inviteFromSalesforce(payload).subscribe({
      next: data => this.handleApiResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  handleApiResponse(data) {
    if (data.status === 'success') {
      this.isShowConfirmation = true;
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  inviteUserFromSf() {
    this.payload = this.generatePayloadForInviteUser();
    this.inviteFromSalesforce(this.payload);
  }
  generatePayloadForInviteUser() {
    const formData = {
      ...this.form.value,
      nativeSalesforceContactId: this.contactId,
      accountId: this.accountInfo.account_details.contact.accountId__c,
      regionId: this.accountInfo.account_details.regionId,
      email: this.accountInfo.account_details.contact.email,
      accountExists: this.accountInfo.account_exists
    };
    return formData;
  }
  validateSamePassword() {
    this.inviteFromSfHelperService.validateSamePassword(this.form);
  }
  handleValidatePasswordAndUsernameResponse(isPasswordCompromised, duplicateUsernameExists) {
    this.isPasswordValid = this.inviteFromSfHelperService.handlePasswordValidation(isPasswordCompromised, this.form, this.el);
    this.isUsernameValid = this.inviteFromSfHelperService.handleUsernameValidation(duplicateUsernameExists, this.form, this.el);
    if (this.isPasswordValid && this.isUsernameValid) {
      this.inviteUserFromSf();
    }
    this.loaderService.hideLoading();
  }
  validatePasswordAndUsername() {
    this.inviteFromSfHelperService.validatePasswordAndUsername(this.form).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([isPasswordCompromised, isDuplicateUsername]) => {
      return this.isPasswordCompromised = isPasswordCompromised, this.isDuplicateUsername = isDuplicateUsername;
    })).subscribe({
      next: () => this.handleValidatePasswordAndUsernameResponse(this.isPasswordCompromised, this.isDuplicateUsername),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  updateUsernameFieldValidity() {
    const userNameField = this.form.controls.userName;
    userNameField.removeValidators([this.userNameExistsValFn]);
    userNameField.updateValueAndValidity();
  }
  submit() {
    if (this.form.valid) {
      this.validatePasswordAndUsername();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.checkUserNameExistsSub?.unsubscribe();
    this.validatePasswordSub?.unsubscribe();
    this.inviteUserFromSfSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function InviteUserComponent_Factory(t) {
    return new (t || InviteUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_8__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_invite_from_sf_helper_service__WEBPACK_IMPORTED_MODULE_4__.InviteFromSalesforceHelperService));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdefineComponent"]({
    type: InviteUserComponent,
    selectors: [["wgc-invite-user"]],
    inputs: {
      accountInfo: "accountInfo",
      contactId: "contactId"
    },
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup"], [1, "wg-form-row"], [1, "wg-form-col"], [1, "form-group", "required"], ["type", "text", "formControlName", "firstName", "wgTrim", "", 1, "form-control"], [3, "control"], ["type", "text", "formControlName", "lastName", "wgTrim", "", 1, "form-control"], ["type", "text", "formControlName", "userName", "wgTrim", "", 1, "form-control", 3, "keyup"], ["type", "text", "formControlName", "phone", "wgTrim", "", 1, "form-control"], ["for", "input-password"], ["id", "input-password", "type", "password", "formControlName", "password", 1, "form-control", 3, "input"], ["for", "input-confirm-password"], ["id", "input-confirm-password", "type", "password", "formControlName", "confirm_password", 1, "form-control", 3, "input"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], [1, "mt-4", "page-heading"], [1, "text-center", "mt-4"], ["color", "primary"], [1, "btn-a", 3, "href"]],
    template: function InviteUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](1, InviteUserComponent_ng_container_1_Template, 49, 28, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](2, InviteUserComponent_ng_container_2_Template, 14, 10, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", !ctx.isShowConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx.isShowConfirmation);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_10__.WgHideShowPasswordComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlErrorComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_11__.TrimDirective, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_12__.WgButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37197:
/*!*********************************************!*\
  !*** ./src/app/mock-interceptor.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpMockRequestInterceptor": () => (/* binding */ HttpMockRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _mock_mock_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/mock_urls */ 86741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





const FEATURE_INFO = 'feature_info';
class HttpMockRequestInterceptor {
  constructor(injector, xsrf) {
    this.injector = injector;
    this.xsrf = xsrf;
    console.log('---------- RUNNING APP WITH MOCK DATA -----------');
    console.log('Following APIs have been hooked up with mock data:');
    console.table(_mock_mock_urls__WEBPACK_IMPORTED_MODULE_0__.mockUrls);
  }
  intercept(request, next) {
    for (const element of _mock_mock_urls__WEBPACK_IMPORTED_MODULE_0__.mockUrls) {
      if (new RegExp(element.url).test(request.urlWithParams)) {
        console.log('loaded from mock json: ' + request.urlWithParams);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
          status: 200,
          body: element.json.default
        }));
      }
    }
    return next.handle(request);
  }
  setHeaders(req) {
    const featureInfo = req.headers.get(FEATURE_INFO);
    const apiContextId = {};
    if (req.method.toLowerCase() !== 'get' && req.method.toLowerCase() !== 'head') {
      req = req.clone({
        headers: req.headers.set('X-XSRF-Token', this.xsrf.getToken() || '')
      });
    }
    //TODO - Remove me when AQE no longer requires api key
    if (req.url.indexOf('abstractquery') !== -1) {
      req = req.clone({
        headers: req.headers.set('x-api-key', 'xsEvJQ0yOKo9IKBEWt3FPLQ0xe8lNfGVT+eZN+Hm61M=')
      });
    }
    if (featureInfo) {
      req = req.clone({
        headers: req.headers.delete(FEATURE_INFO, featureInfo)
      });
      const obj = JSON.parse(featureInfo);
      apiContextId[FEATURE_INFO] = obj;
    }
    apiContextId.context_id = 'mock-id';
    req = req.clone({
      headers: req.headers.set('WGC-API-CONTEXT-ID', encodeURIComponent(JSON.stringify(apiContextId)))
    });
    req = req.clone({
      withCredentials: true
    });
    return req;
  }
  static #_ = this.Éµfac = function HttpMockRequestInterceptor_Factory(t) {
    return new (t || HttpMockRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpXsrfTokenExtractor));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµdefineInjectable"]({
    token: HttpMockRequestInterceptor,
    factory: HttpMockRequestInterceptor.Éµfac
  });
}

/***/ }),

/***/ 77585:
/*!********************************************!*\
  !*** ./src/app/payload-hashing.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayloadHashingService": () => (/* binding */ PayloadHashingService)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ 13999);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PayloadHashingService {
  // The payload may vary depending upon the calls from UI
  hashPayload(payload) {
    const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_0__.genSaltSync(10);
    const hashedPayload = bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hashSync(payload, salt);
    const hashedToken = ''.concat(hashedPayload, '#', salt);
    return hashedToken;
  }
  static #_ = this.Éµfac = function PayloadHashingService_Factory(t) {
    return new (t || PayloadHashingService)();
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineInjectable"]({
    token: PayloadHashingService,
    factory: PayloadHashingService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62054:
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











function ResetPasswordComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "div", 6)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](9, "input", 7)(10, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](11, "div", 9)(12, "wg-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function ResetPasswordComponent_ng_container_7_Template_wg_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 5, ctx_r0.compStrs.enter_user_name_text));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 7, ctx_r0.compStrs.username_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("control", ctx_r0.form.controls["userName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](14, 9, ctx_r0.compStrs.submit_req_btn), " ");
  }
}
function ResetPasswordComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 2, ctx_r1.compStrs.email_sent_msg));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](7, 4, ctx_r1.compStrs.email_sent_msg_2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeHtml"]);
  }
}
class ResetPasswordComponent {
  constructor(fb, customValidator, accountManagerService, commonHelperService, loaderService, el) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.requestSubmitted = false;
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.RESETS_PASSWORD_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.forgot_password);
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      userName: ['', [this.customValidator.requiredFn('userName'), this.customValidator.regexFn('userName'), this.customValidator.lengthValFn('userName', 65, 5)]]
    });
  }
  handleApiResponse(data) {
    this.loaderService.hideLoading();
    if (data.status === 'success') {
      this.requestSubmitted = true;
    } else {
      this.commonHelperService.showApiError();
    }
  }
  sendResetPasswordEmail() {
    const userName = this.form.value.userName;
    this.resetPasswordSub = this.accountManagerService.sendResetPassword({
      userName
    }).subscribe({
      next: data => this.handleApiResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  submit() {
    if (this.form.valid) {
      this.loaderService.showLoading();
      this.sendResetPasswordEmail();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.resetPasswordSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function ResetPasswordComponent_Factory(t) {
    return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineComponent"]({
    type: ResetPasswordComponent,
    selectors: [["wgc-reset-password"]],
    decls: 9,
    vars: 5,
    consts: [["src", "https://www.googletagmanager.com/ns.html?id=GTM-KS2GSV", "height", "0", "width", "0", 2, "display", "none", "visibility", "hidden"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group", "required"], ["type", "text", "formControlName", "userName", "wgTrim", "", 1, "form-control"], [3, "control"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], [3, "innerHTML"]],
    template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](1, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](2, "div")(3, "div", 1)(4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](7, ResetPasswordComponent_ng_container_7_Template, 15, 11, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](8, ResetPasswordComponent_ng_container_8_Template, 8, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](6, 3, ctx.compStrs.page_heading));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx.requestSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.requestSubmitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlErrorComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__.TrimDirective, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__.WgButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37777:
/*!********************************************************************!*\
  !*** ./src/app/retrieve-user-name/retrieve-user-name.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetrieveUserNameComponent": () => (/* binding */ RetrieveUserNameComponent)
/* harmony export */ });
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











function RetrieveUserNameComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "div", 6)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](9, "input", 7)(10, "wg-form-control-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](11, "div", 9)(12, "wg-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function RetrieveUserNameComponent_ng_container_7_Template_wg_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 5, ctx_r0.compStrs.enter_email_text));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 7, ctx_r0.compStrs.email_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("control", ctx_r0.form.controls["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](14, 9, ctx_r0.compStrs.submit_req_btn), " ");
  }
}
function RetrieveUserNameComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 2, ctx_r1.compStrs.email_sent_msg));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](7, 4, ctx_r1.compStrs.email_sent_msg_2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeHtml"]);
  }
}
class RetrieveUserNameComponent {
  constructor(fb, customValidator, accountManagerService, commonHelperService, loaderService, el) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.requestSubmitted = false;
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.RETRIEVE_USER_NAME_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.forgot_user_name);
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      email: ['', [this.customValidator.requiredFn('email'), this.customValidator.regexFn('email'), this.customValidator.lengthValFn('email', 80, 4)]]
    });
  }
  handleApiResponse(data) {
    if (data.status === 'success') {
      this.requestSubmitted = true;
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  sendRetrieveUserNameEmail() {
    const email = this.form.value.email;
    this.retrieveUserNameSub = this.accountManagerService.retrieveUserName({
      email
    }).subscribe({
      next: data => this.handleApiResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  submit() {
    if (this.form.valid) {
      this.loaderService.showLoading();
      this.sendRetrieveUserNameEmail();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.retrieveUserNameSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function RetrieveUserNameComponent_Factory(t) {
    return new (t || RetrieveUserNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineComponent"]({
    type: RetrieveUserNameComponent,
    selectors: [["wgc-retrieve-user-name"]],
    decls: 9,
    vars: 5,
    consts: [["src", "https://www.googletagmanager.com/ns.html?id=GTM-KS2GSV", "height", "0", "width", "0", 2, "display", "none", "visibility", "hidden"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "form-group", "required"], ["type", "text", "formControlName", "email", "wgTrim", "", 1, "form-control"], [3, "control"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], [3, "innerHTML"]],
    template: function RetrieveUserNameComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](1, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](2, "div")(3, "div", 1)(4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](7, RetrieveUserNameComponent_ng_container_7_Template, 15, 11, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](8, RetrieveUserNameComponent_ng_container_8_Template, 8, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](6, 3, ctx.compStrs.page_heading));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx.requestSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.requestSubmitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlErrorComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__.TrimDirective, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__.WgButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50825:
/*!**********************************************************!*\
  !*** ./src/app/select-region/select-region.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectRegionComponent": () => (/* binding */ SelectRegionComponent)
/* harmony export */ });
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @watchguard/wg-dropdown */ 45457);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function SelectRegionComponent_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div", 11)(1, "wg-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function SelectRegionComponent_ng_container_1_div_23_Template_wg_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r4.toggleConfirmRegionSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](3, 1, ctx_r2.compStrs.save_region_btn_lbl), " ");
  }
}
function SelectRegionComponent_ng_container_1_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div", 1)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](4, "div", 16)(5, "div", 17)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind2"](3, 2, ctx_r6.compStrs.confirm_region_heading, ctx_r6.confirmLblTransParams), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 5, ctx_r6.compStrs.confirm_region_heading_2));
  }
}
function SelectRegionComponent_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](1, SelectRegionComponent_ng_container_1_div_24_div_1_Template, 9, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](2, "div", 7)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("input", function SelectRegionComponent_ng_container_1_div_24_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r7.validateConfirmRegion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](7, "wg-form-control-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](8, "div", 15)(9, "wg-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("click", function SelectRegionComponent_ng_container_1_div_24_Template_wg_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r9.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx_r3.showConfirmRegionSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](5, 4, ctx_r3.compStrs.confirm_select_region_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("control", ctx_r3.form.controls["confirm_region"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](11, 6, ctx_r3.compStrs.set_region_btn_lbl), " ");
  }
}
function SelectRegionComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](4, "div", 3)(5, "div", 1)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](12, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](14, "div", 5)(15, "div", 6)(16, "div", 7)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](20, "wg-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµlistener"]("focusout", function SelectRegionComponent_ng_container_1_Template_wg_dropdown_focusout_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r10.form.controls["region"].markAllAsTouched());
    })("selectedEvent", function SelectRegionComponent_ng_container_1_Template_wg_dropdown_selectedEvent_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµresetView"](ctx_r12.regionDropDownSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelement"](22, "wg-form-control-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](23, SelectRegionComponent_ng_container_1_div_23_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](24, SelectRegionComponent_ng_container_1_div_24_Template, 12, 8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](3, 12, ctx_r0.compStrs.select_region_heading), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 14, ctx_r0.compStrs.select_region_sub_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](11, 16, ctx_r0.compStrs.select_region_sub_heading_2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](13, 18, ctx_r0.compStrs.select_region_learn_more_text), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](19, 20, ctx_r0.compStrs.select_region_dropdown_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("isInvalid", ctx_r0.form.controls["region"].touched && ctx_r0.form.controls["region"].invalid)("dropdownList", ctx_r0.regionsList)("placeHolderText", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](21, 22, ctx_r0.compStrs.select_region_dropdown_placeholder_lbl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("control", ctx_r0.form.controls["region"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx_r0.showConfirmRegionSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx_r0.showConfirmRegionSelection);
  }
}
function SelectRegionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](1, "div", 1)(2, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](5, "div", 19)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](9, "div", 19)(10, "wg-button", 20)(11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](4, 4, ctx_r1.compStrs.congratulations_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](8, 6, ctx_r1.compStrs.acc_created_msg));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpropertyInterpolate"]("href", ctx_r1.signInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµpipeBind1"](13, 8, ctx_r1.compStrs.return_to_login_page_btn_lbl));
  }
}
class SelectRegionComponent {
  constructor(fb, customValidator, accountManagerService, commonHelperService, loaderService, el) {
    this.fb = fb;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.commonHelperService = commonHelperService;
    this.loaderService = loaderService;
    this.el = el;
    this.token = '';
    this.showConfirmation = false;
    this.showConfirmRegionSelection = false;
    this.signInUrl = '';
    this.compStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_ACC_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
    this.pageHeading = this.compStrs.create_acc_heading;
    this.regionsList = [{
      id: 1,
      val: 'America'
    }, {
      id: 2,
      val: 'Europe'
    }, {
      id: 3,
      val: 'Asia Pacific'
    }];
    this.confirmLblTransParams = {
      selected_region: ''
    };
    this.matchRegionValFn = this.customValidator.commonValFn('region_mismatch');
  }
  ngOnInit() {
    this.commonHelperService.setTitle(this.titleStrs.select_region);
    this.initForm();
    this.signInUrl = this.commonHelperService.getUrlByEnv('signIn');
  }
  initForm() {
    this.form = this.fb.group({
      region: ['', [this.customValidator.requiredFn('region')]],
      confirm_region: ['', [this.customValidator.requiredFn('confirm_region')]]
    });
  }
  regionDropDownSelected(item) {
    this.regionSelected = item;
    this.confirmLblTransParams = {
      selected_region: item.val
    };
    this.validateConfirmRegion();
  }
  validateConfirmRegion() {
    const confirmRegionField = this.form.controls.confirm_region;
    if (confirmRegionField.value !== '' && this.regionSelected.val !== confirmRegionField.value) {
      confirmRegionField.addValidators([this.matchRegionValFn]);
    } else {
      confirmRegionField.removeValidators([this.matchRegionValFn]);
    }
    confirmRegionField.updateValueAndValidity();
  }
  toggleConfirmRegionSelection() {
    this.showConfirmRegionSelection = true;
  }
  handleApiResponse(data) {
    if (data.status === 'success') {
      this.showConfirmation = true;
      this.pageHeading = this.compStrs.congratulations_heading;
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  generatePayload() {
    const regionId = parseInt(this.regionSelected.id.toString(), 10);
    const payload = {
      password: this.password,
      token: this.token,
      regionId
    };
    return payload;
  }
  setPasswordAndRegion() {
    const payload = this.generatePayload();
    this.setPasswordSub = this.accountManagerService.setPassword(payload).subscribe({
      next: data => this.handleApiResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  inviteFromSalesforce(payload) {
    this.inviteFromSfSub = this.accountManagerService.inviteFromSalesforce(payload).subscribe({
      next: data => this.handleApiResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  setUserFlow() {
    if (this.payload) {
      this.payload.regionId = this.regionSelected.id.toString();
      this.loaderService.showLoading();
      this.inviteFromSalesforce(this.payload);
    } else {
      this.loaderService.showLoading();
      this.setPasswordAndRegion();
    }
  }
  submit() {
    if (this.form.valid) {
      this.setUserFlow();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.setPasswordSub?.unsubscribe();
    this.inviteFromSfSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function SelectRegionComponent_Factory(t) {
    return new (t || SelectRegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµdefineComponent"]({
    type: SelectRegionComponent,
    selectors: [["wgc-select-region"]],
    inputs: {
      password: "password",
      token: "token",
      payload: "payload"
    },
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf"], [1, "text-center"], [1, "mt-4", "page-heading", 3, "innerHTML"], [3, "formGroup"], [3, "innerHTML"], [1, "wg-form-row", "mt-3"], [1, "wg-form-col"], [1, "form-group", "required"], ["formControlName", "region", 3, "isInvalid", "dropdownList", "placeHolderText", "focusout", "selectedEvent"], [3, "control"], ["class", "form-actions mb", 4, "ngIf"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], ["class", "text-center", 4, "ngIf"], ["type", "text", "formControlName", "confirm_region", 1, "form-control", 3, "input"], [1, "form-actions"], [1, "d-flex", "justify-content-around"], [1, "col-11"], [1, "mt-4", "page-heading"], [1, "text-center", "mt-4"], ["color", "primary"], [1, "btn-a", 3, "href"]],
    template: function SelectRegionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](1, SelectRegionComponent_ng_container_1_Template, 25, 24, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµtemplate"](2, SelectRegionComponent_ng_container_2_Template, 14, 10, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", !ctx.showConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ÉµÉµproperty"]("ngIf", ctx.showConfirmation);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlErrorComponent, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_9__.WgButtonComponent, _watchguard_wg_dropdown__WEBPACK_IMPORTED_MODULE_10__.WgDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92710:
/*!********************************************************!*\
  !*** ./src/app/set-password/set-password.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPasswordComponent": () => (/* binding */ SetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @watchguard/wg-notifications */ 28900);
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/custom-validator.service */ 26274);
/* harmony import */ var _account_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account-manager.service */ 40503);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common-helper.service */ 17706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @watchguard/wg-hide-show-password */ 32625);
/* harmony import */ var _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @watchguard/wg-forms */ 46830);
/* harmony import */ var _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @watchguard/wg-button */ 86844);
/* harmony import */ var _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-region/select-region.component */ 50825);















function SetPasswordComponent_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](0, "div", 14)(1, "div", 15)(2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](3, "input", 17)(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](5, 1, ctx_r3.addAccStrs.receive_marketing_email_text), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµsanitizeHtml"]);
  }
}
function SetPasswordComponent_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](2, 1, ctx_r4.resetPwdStrs.reset_password_privacy_policy_text), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµsanitizeHtml"]);
  }
}
function SetPasswordComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](1, "div", 1)(2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](5, "div", 3)(6, "div", 4)(7, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](10, "wg-hide-show-password")(11, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("input", function SetPasswordComponent_ng_container_1_Template_input_input_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r5.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](12, "wg-form-control-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](13, "div", 4)(14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](17, "wg-hide-show-password")(18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("input", function SetPasswordComponent_ng_container_1_Template_input_input_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r7.validateSamePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](19, "wg-form-control-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](20, SetPasswordComponent_ng_container_1_div_20_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](21, SetPasswordComponent_ng_container_1_div_21_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](22, "div", 12)(23, "wg-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµlistener"]("click", function SetPasswordComponent_ng_container_1_Template_wg_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµresetView"](ctx_r8.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](4, 9, ctx_r0.addAccStrs.enter_new_password_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](9, 11, ctx_r0.addAccStrs.password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](16, 13, ctx_r0.addAccStrs.confirm_password_lbl), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("control", ctx_r0.form.controls["confirm_password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx_r0.isShowOptedInFromEmail && !ctx_r0.isNewUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx_r0.isShowOptedInFromEmail && !ctx_r0.isNewUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](25, 15, ctx_r0.addAccStrs.set_password_btn_lbl), " ");
  }
}
function SetPasswordComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](1, "div", 1)(2, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](5, "div", 19)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](9, "div", 19)(10, "wg-button", 21)(11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](4, 4, ctx_r1.addAccStrs.congratulations_heading));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](8, 6, ctx_r1.resetPwdStrs.reset_password_successful));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpropertyInterpolate"]("href", ctx_r1.signInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµpipeBind1"](13, 8, ctx_r1.addAccStrs.return_to_login_page_btn_lbl));
  }
}
function SetPasswordComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelement"](1, "wgc-select-region", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("password", ctx_r2.password)("token", ctx_r2.token);
  }
}
class SetPasswordComponent {
  constructor(fb, route, customValidator, accountManagerService, loaderService, commonHelperService, translateService, el) {
    this.fb = fb;
    this.route = route;
    this.customValidator = customValidator;
    this.accountManagerService = accountManagerService;
    this.loaderService = loaderService;
    this.commonHelperService = commonHelperService;
    this.translateService = translateService;
    this.el = el;
    this.isShowSelectRegion = false;
    this.isShowSetPasswordForm = false;
    this.isShowConfirmation = false;
    this.isNewUser = false;
    this.isActivateUser = false;
    this.isShowOptedInFromEmail = false;
    this.isTier1 = true;
    this.token = '';
    this.userName = '';
    this.password = '';
    this.signInUrl = '';
    this.addAccStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ADD_NEW_ACC_STRINGS;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.resetPwdStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.RESETS_PASSWORD_STRINGS;
    this.titleStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
    this.errorCompStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_COMP_STRINGS;
    this.setPasswordErrorContent = {
      errorHeader: this.errorCompStrs.set_password_error_heading,
      errorMessage: this.errorCompStrs.contact_customer_care,
      redirectMessage: this.errorCompStrs.redirect_to_start_reg
    };
    this.resetPasswordErrorContent = {
      errorHeader: this.errorCompStrs.reset_password_error_heading,
      errorMessage: this.errorCompStrs.reset_password_error_subheading,
      redirectMessage: this.errorCompStrs.redirect_to_reset_password
    };
    this.matchPasswordValFn = this.customValidator.commonValFn('password_mismatch');
    this.passwordCompromisedValFn = this.customValidator.commonValFn('password_compromised');
  }
  ngOnInit() {
    this.validateUser();
    this.signInUrl = this.commonHelperService.getUrlByEnv('signIn');
  }
  initForm() {
    this.form = this.fb.group({
      password: ['', [this.customValidator.requiredFn('password'), this.customValidator.regexFn('password')]],
      confirm_password: ['', [this.customValidator.requiredFn('confirm_password')]],
      optedInFromEmail: [false]
    });
  }
  fetchUrlData() {
    const urlData = {
      isValid: false,
      params: {}
    };
    this.route.queryParams.subscribe(queryParams => {
      urlData.params = queryParams;
    });
    const params = urlData.params;
    if (params.new_user && params.token) {
      urlData.isValid = true;
    }
    return urlData;
  }
  validateUser() {
    const urlData = this.fetchUrlData();
    if (!urlData.isValid) {
      this.commonHelperService.redirectToErrorPage();
      this.commonHelperService.showNotification(_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_6__.NotificationType.Error, this.errorStrs.api_bad_request_err_msg);
    } else {
      this.loaderService.showLoading();
      const queryParams = urlData.params;
      this.token = queryParams.token;
      this.isNewUser = this.commonHelperService.convertQueryParamsToLowercase(queryParams.new_user) === 'true';
      this.isActivateUser = this.commonHelperService.convertQueryParamsToLowercase(queryParams.activate) === 'true';
      this.isShowOptedInFromEmail = this.commonHelperService.convertQueryParamsToLowercase(queryParams.showOptInEmailOption) === 'true';
      this.isTier1 = queryParams.isTier1 ? this.commonHelperService.convertQueryParamsToLowercase(queryParams.isTier1) !== 'false' : true;
      this.validateToken();
    }
  }
  handleValidateTokenResponse(data) {
    if (data.status === 'success' && data.is_token_valid) {
      const appTitle = this.isNewUser ? this.titleStrs.set_password : this.titleStrs.reset_password;
      this.commonHelperService.setTitle(appTitle);
      this.userName = data.user_name;
      this.initForm();
      this.isShowSetPasswordForm = true;
    } else {
      const errorContent = this.getErrorContent(this.isNewUser);
      this.commonHelperService.showApiError(errorContent);
    }
    this.loaderService.hideLoading();
  }
  getErrorContent(isNewUser) {
    return isNewUser ? this.setPasswordErrorContent : this.resetPasswordErrorContent;
  }
  validateToken() {
    const token = this.token || '';
    this.validTokenSub = this.accountManagerService.validateToken(token, this.isNewUser).subscribe({
      next: data => this.handleValidateTokenResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  validateSamePassword() {
    const password = this.form.value.password || '';
    const confirmPasswordField = this.form.controls.confirm_password;
    const passwordField = this.form.controls.password;
    //Removing the compromised validator only if it's attached to the password field
    if (passwordField.hasValidator(this.passwordCompromisedValFn)) {
      passwordField.removeValidators([this.passwordCompromisedValFn]);
      passwordField.updateValueAndValidity();
    }
    if (password === '' || confirmPasswordField.value === '') {
      confirmPasswordField.removeValidators([this.matchPasswordValFn]);
    } else if (password !== '' && confirmPasswordField.value !== '' && password !== confirmPasswordField.value) {
      confirmPasswordField.addValidators([this.matchPasswordValFn]);
    } else {
      confirmPasswordField.removeValidators([this.matchPasswordValFn]);
    }
    confirmPasswordField.updateValueAndValidity();
  }
  handleResetPasswordResponse(data) {
    if (data.status === 'success') {
      if (!this.isTier1) {
        this.signInUrl = this.commonHelperService.getUrlByEnv('signInToCloud');
      }
      this.isShowSetPasswordForm = false;
      this.isShowConfirmation = true;
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  handleValidatePasswordResponse(data, passwordField) {
    if (data.status === 'success') {
      if (!this.isTier1) {
        this.signInUrl = this.commonHelperService.getUrlByEnv('signInToCloud');
      }
      if (data.password_compromised) {
        passwordField.addValidators([this.passwordCompromisedValFn]);
      } else {
        passwordField.removeValidators([this.passwordCompromisedValFn]);
        this.setUserFlow();
      }
      passwordField.updateValueAndValidity();
    } else {
      this.commonHelperService.showApiError();
    }
    this.loaderService.hideLoading();
  }
  resetPassword() {
    const password = this.form.value.password || '';
    const payload = {
      username: this.userName,
      token: this.token,
      password,
      activateUser: this.isActivateUser,
      optedInFromEmail: !this.form.value.optedInFromEmail
    };
    this.resetPasswordSub = this.accountManagerService.resetPassword(payload).subscribe({
      next: data => this.handleResetPasswordResponse(data),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  setUserFlow() {
    if (this.isNewUser) {
      this.password = this.form.value.password;
      this.isShowSelectRegion = true;
      this.isShowSetPasswordForm = false;
    } else {
      this.loaderService.showLoading();
      this.resetPassword();
    }
  }
  validatePassword() {
    const passwordField = this.form.controls.password;
    this.loaderService.showLoading();
    this.validatePasswordSub = this.accountManagerService.validatePassword(passwordField.value).subscribe({
      next: data => this.handleValidatePasswordResponse(data, passwordField),
      error: () => this.commonHelperService.handleApiError()
    });
  }
  submit() {
    if (this.form.valid) {
      this.validatePassword();
    } else {
      this.form.markAllAsTouched();
      this.commonHelperService.setFocusOnInvalidFormField(this.form, this.el);
    }
  }
  ngOnDestroy() {
    this.validTokenSub?.unsubscribe();
    this.resetPasswordSub?.unsubscribe();
    this.validatePasswordSub?.unsubscribe();
  }
  static #_ = this.Éµfac = function SetPasswordComponent_Factory(t) {
    return new (t || SetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_shared_custom_validator_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_account_manager_service__WEBPACK_IMPORTED_MODULE_2__.AccountManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_9__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_shared_common_helper_service__WEBPACK_IMPORTED_MODULE_3__.CommonHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
  };
  static #_2 = this.Éµcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµdefineComponent"]({
    type: SetPasswordComponent,
    selectors: [["wgc-set-password"]],
    decls: 4,
    vars: 3,
    consts: [[4, "ngIf"], [1, "text-center"], [1, "my-4", "page-heading"], [3, "formGroup"], [1, "form-group", "required"], ["for", "input-password"], ["id", "input-password", "type", "password", "formControlName", "password", 1, "form-control", 3, "input"], [3, "control"], ["for", "input-confirm-password"], ["id", "input-confirm-password", "type", "password", "formControlName", "confirm_password", 1, "form-control", 3, "input"], ["class", "form-group for-checkbox-inline", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], [1, "form-actions", "mb"], ["color", "primary", 3, "click"], [1, "form-group", "for-checkbox-inline"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "name", "test-radio", "formControlName", "optedInFromEmail", 1, "form-check-input"], [3, "innerHTML"], [1, "text-center", "mt-4"], [1, "mt-4", "page-heading"], ["color", "primary"], [1, "btn-a", 3, "href"], [3, "password", "token"]],
    template: function SetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](1, SetPasswordComponent_ng_container_1_Template, 26, 17, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](2, SetPasswordComponent_ng_container_2_Template, 14, 10, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµtemplate"](3, SetPasswordComponent_ng_container_3_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx.isShowSetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx.isShowConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ÉµÉµproperty"]("ngIf", ctx.isShowSelectRegion);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _watchguard_wg_hide_show_password__WEBPACK_IMPORTED_MODULE_12__.WgHideShowPasswordComponent, _watchguard_wg_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlErrorComponent, _watchguard_wg_button__WEBPACK_IMPORTED_MODULE_14__.WgButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _select_region_select_region_component__WEBPACK_IMPORTED_MODULE_4__.SelectRegionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 17706:
/*!*************************************************!*\
  !*** ./src/app/shared/common-helper.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_CONFIG": () => (/* binding */ AUTH_CONFIG),
/* harmony export */   "CommonHelperService": () => (/* binding */ CommonHelperService),
/* harmony export */   "GUARD_API_URL": () => (/* binding */ GUARD_API_URL),
/* harmony export */   "SIGN_IN_TO_CLOUD_URL": () => (/* binding */ SIGN_IN_TO_CLOUD_URL),
/* harmony export */   "SIGN_IN_URL": () => (/* binding */ SIGN_IN_URL)
/* harmony export */ });
/* harmony import */ var _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @watchguard/wg-notifications */ 28900);
/* harmony import */ var _watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @watchguard/wg-utils */ 58557);
/* harmony import */ var _ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @watchguard/wg-loader */ 21099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);









const SIGN_IN_URL = {
  dev: 'https://login.devci.watchguard.com/',
  qa: 'https://login.test.watchguard.com/',
  staging: 'https://login.staging.watchguard.com/',
  prod: 'https://login.watchguard.com/'
};
const SIGN_IN_TO_CLOUD_URL = {
  dev: 'https://dev.cloud.watchguard.com/',
  qa: 'https://qa.cloud.watchguard.com/',
  staging: 'https://staging.cloud.watchguard.com/',
  prod: 'https://cloud.watchguard.com/'
};
const GUARD_API_URL = {
  dev: 'https://guardapi.acctmgr.dev.usa.cloud.watchguard.com/',
  qa: 'https://guardapi.acctmgr.qa.usa.cloud.watchguard.com/',
  staging: 'https://guardapi.acctmgr.staging.deu.cloud.watchguard.com/',
  prod: 'https://guardapi.acctmgr.usa.cloud.watchguard.com/'
};
const AUTH_CONFIG = {
  dev: {
    auth: {
      clientId: 'b7efc23c-33c4-4fa6-9e8f-315d58b93a4b',
      authority: 'https://wglogindevci.b2clogin.com/wglogindevci.onmicrosoft.com/B2C_1A_Local_Signin',
      knownAuthorities: ['wglogindevci.b2clogin.com'],
      postLogoutUrl: 'https://dev.cloud.watchguard.com/'
    },
    accountManagerBaseUrl: 'https://accountmanager.dev.cloud.watchguard.com',
    scope: 'https://wglogindevci.onmicrosoft.com/b7efc23c-33c4-4fa6-9e8f-315d58b93a4b/user.read'
  },
  qa: {
    auth: {
      clientId: '12dc7bda-8bff-4381-b80c-1f7d0e87ff00',
      authority: 'https://wglogintest.b2clogin.com/wglogintest.onmicrosoft.com/B2C_1A_Local_Signin',
      knownAuthorities: ['wglogintest.b2clogin.com'],
      postLogoutUrl: 'https://qa.cloud.watchguard.com/'
    },
    accountManagerBaseUrl: 'https://accountmanager.qa.cloud.watchguard.com',
    scope: 'https://wglogintest.onmicrosoft.com/12dc7bda-8bff-4381-b80c-1f7d0e87ff00/user.read'
  },
  staging: {
    auth: {
      clientId: '8f869df4-36e0-44da-92bb-042c30471b79',
      authority: 'https://wgloginstaging.b2clogin.com/wgloginstaging.onmicrosoft.com/B2C_1A_Local_Signin',
      knownAuthorities: ['wgloginstaging.b2clogin.com'],
      postLogoutUrl: 'https://staging.cloud.watchguard.com/'
    },
    accountManagerBaseUrl: 'https://accountmanager.staging.cloud.watchguard.com',
    scope: 'https://wgloginstaging.onmicrosoft.com/8f869df4-36e0-44da-92bb-042c30471b79/8f869df4-36e0-44da-92bb-042c30471b79'
  },
  prod: {
    auth: {
      clientId: '045d6b50-edc0-4344-8440-4544a9d91ea9',
      authority: 'https://wglogin.b2clogin.com/wglogin.onmicrosoft.com/B2C_1A_Local_Signin',
      knownAuthorities: ['wglogin.b2clogin.com'],
      postLogoutUrl: 'https://cloud.watchguard.com/'
    },
    accountManagerBaseUrl: 'https://accountmanager.cloud.watchguard.com',
    scope: 'https://wglogin.onmicrosoft.com/045d6b50-edc0-4344-8440-4544a9d91ea9/045d6b50-edc0-4344-8440-4544a9d91ea9'
  }
};
class CommonHelperService {
  constructor(loaderService, notificationService, translateService, router, titleService) {
    this.loaderService = loaderService;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.router = router;
    this.titleService = titleService;
    this.errorStrs = _ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.titleStrs = _ui_strings__WEBPACK_IMPORTED_MODULE_0__.APP_TITLE_STRINGS;
    this.errorCompStrs = _ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_COMP_STRINGS;
    this.errorContent = {
      errorHeader: this.errorCompStrs.page_heading,
      errorMessage: this.errorCompStrs.contact_customer_care,
      redirectMessage: this.errorCompStrs.redirect_to_start_reg
    };
  }
  setTitle(title) {
    const translatedTitle = this.translateService.instant(title);
    // we aren't translating the WatchGuard Technologies since it is the company name
    this.titleService.setTitle(translatedTitle + ' | ' + this.titleStrs.wg_technologies);
  }
  handleApiError(customMessage) {
    this.loaderService.hideLoading();
    this.redirectToErrorPage();
    this.showNotification(_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Error, customMessage);
  }
  showNotification(type, customMessage, interpolateMsgParams) {
    const errorMessage = customMessage ? customMessage : this.errorStrs.api_request_err_message;
    const interpolateParams = interpolateMsgParams ? interpolateMsgParams : {};
    const translatedMsg = this.translateService.instant(errorMessage, interpolateParams);
    if (type === _watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Info) {
      this.notificationService.info(translatedMsg);
    } else {
      this.notificationService.error(translatedMsg);
    }
  }
  setFocusOnInvalidFormField(form, el) {
    for (const key of Object.keys(form.controls)) {
      if (form.controls[key].invalid) {
        const isDropdown = key === 'industry' || key === 'country' || key === 'state';
        const selector = isDropdown ? '#' + key + ' input' : '[formcontrolname="' + key + '"]';
        const invalidControl = this.getFormFieldElementRef(el, key, selector);
        invalidControl.focus();
        break;
      }
    }
  }
  getFormFieldElementRef(el, key, selector) {
    return el.nativeElement.querySelector(selector);
  }
  showApiError(errorContent) {
    this.redirectToErrorPage(errorContent);
    this.showNotification(_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Error, this.errorStrs.api_request_err_message);
  }
  redirectToErrorPage(errorContent) {
    this.errorContent = errorContent ? errorContent : this.errorContent;
    this.router.navigate(['error']);
  }
  convertQueryParamsToLowercase(queryParam) {
    return String(queryParam).toLowerCase();
  }
  getUrlByEnv(urlType) {
    const envUrls = urlType === 'signIn' ? SIGN_IN_URL : urlType === 'signInToCloud' ? SIGN_IN_TO_CLOUD_URL : GUARD_API_URL;
    const env = (0,_watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    if (env === 'dev') {
      return envUrls.dev;
    } else if (env === 'qa') {
      return envUrls.qa;
    } else if (env === 'staging') {
      return envUrls.staging;
    }
    return envUrls.prod;
  }
  loadConfig() {
    this.config = this.getConfigByEnv();
  }
  getConfigByEnv() {
    const envConfig = AUTH_CONFIG;
    const env = (0,_watchguard_wg_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    return env ? envConfig[env] : envConfig.prod;
  }
  static #_ = this.Éµfac = function CommonHelperService_Factory(t) {
    return new (t || CommonHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_watchguard_wg_loader__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_watchguard_wg_notifications__WEBPACK_IMPORTED_MODULE_1__.WgNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ÉµÉµdefineInjectable"]({
    token: CommonHelperService,
    factory: CommonHelperService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 70334:
/*!*****************************************!*\
  !*** ./src/app/shared/countriesList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countriesList": () => (/* binding */ countriesList)
/* harmony export */ });
const countriesList = {
  Afghanistan: {
    zone: '',
    states: []
  },
  Albania: {
    zone: '',
    states: []
  },
  Algeria: {
    zone: '',
    states: []
  },
  'American Samoa': {
    zone: '',
    states: []
  },
  Andorra: {
    zone: '',
    states: []
  },
  Angola: {
    zone: '',
    states: []
  },
  Anguilla: {
    zone: '',
    states: []
  },
  Antarctica: {
    zone: '',
    states: []
  },
  'Antigua And Barbuda': {
    zone: '',
    states: []
  },
  Argentina: {
    zone: '',
    states: []
  },
  Armenia: {
    zone: '',
    states: []
  },
  Aruba: {
    zone: '',
    states: []
  },
  Australia: {
    zone: '',
    states: [{
      id: 'ACT',
      val: 'Australian Capital Territory'
    }, {
      id: 'NSW',
      val: 'New South Wales'
    }, {
      id: 'NTT',
      val: 'Northern Territory'
    }, {
      id: 'QLD',
      val: 'Queensland'
    }, {
      id: 'SA',
      val: 'South Australia'
    }, {
      id: 'TAS',
      val: 'Tasmania'
    }, {
      id: 'VIC',
      val: 'Victoria'
    }, {
      id: 'WAU',
      val: 'Western Australia'
    }]
  },
  Austria: {
    zone: 'EU',
    states: []
  },
  Azerbaijan: {
    zone: '',
    states: []
  },
  Bahamas: {
    zone: '',
    states: []
  },
  Bahrain: {
    zone: '',
    states: []
  },
  Bangladesh: {
    zone: '',
    states: []
  },
  Barbados: {
    zone: '',
    states: []
  },
  Belgium: {
    zone: 'EU',
    states: []
  },
  Belize: {
    zone: '',
    states: []
  },
  Benin: {
    zone: '',
    states: []
  },
  Bermuda: {
    zone: '',
    states: []
  },
  Bhutan: {
    zone: '',
    states: []
  },
  Bolivia: {
    zone: '',
    states: []
  },
  'Bonaire, Sint Eustatius and Saba': {
    zone: '',
    states: []
  },
  'Bosnia And Herzegovina': {
    zone: '',
    states: []
  },
  Botswana: {
    zone: '',
    states: []
  },
  'Bouvet Island': {
    zone: '',
    states: []
  },
  Brazil: {
    zone: '',
    states: [{
      id: 'ACRE',
      val: 'Acre'
    }, {
      id: 'ALBS',
      val: 'Alagoas'
    }, {
      id: 'AMPA',
      val: 'AmapÃ¡'
    }, {
      id: 'AMZN',
      val: 'Amazonas'
    }, {
      id: 'BHIA',
      val: 'Bahia'
    }, {
      id: 'CARA',
      val: 'CearÃ¡'
    }, {
      id: 'DFRL',
      val: 'Distrito Federal'
    }, {
      id: 'ESNT',
      val: 'EspÃ­rito Santo'
    }, {
      id: 'GOIS',
      val: 'GoiÃ¡s'
    }, {
      id: 'MARH',
      val: 'MaranhÃ£o'
    }, {
      id: 'MGSS',
      val: 'Mato Grosso'
    }, {
      id: 'MGDS',
      val: 'Mato Grosso do Sul'
    }, {
      id: 'MNSG',
      val: 'Minas Gerais'
    }, {
      id: 'PRNA',
      val: 'ParanÃ¡'
    }, {
      id: 'PRBA',
      val: 'ParaÃ­ba'
    }, {
      id: 'PARA',
      val: 'ParÃ¡'
    }, {
      id: 'PRNB',
      val: 'Pernambuco'
    }, {
      id: 'PIUI',
      val: 'PiauÃ­'
    }, {
      id: 'RGDN',
      val: 'Rio Grande do Norte'
    }, {
      id: 'RGDS',
      val: 'Rio Grande do Sul'
    }, {
      id: 'RDJN',
      val: 'Rio de Janeiro'
    }, {
      id: 'RNDA',
      val: 'RondÃ´nia'
    }, {
      id: 'RORM',
      val: 'Roraima'
    }, {
      id: 'SCRN',
      val: 'Santa Catarina'
    }, {
      id: 'SRGP',
      val: 'Sergipe'
    }, {
      id: 'SPLO',
      val: 'SÃ£o Paulo'
    }, {
      id: 'TOCN',
      val: 'Tocantins'
    }]
  },
  'British Indian Ocean Territory': {
    zone: '',
    states: []
  },
  Brunei: {
    zone: '',
    states: []
  },
  Bulgaria: {
    zone: 'EU',
    states: []
  },
  'Burkina Faso': {
    zone: '',
    states: []
  },
  Burundi: {
    zone: '',
    states: []
  },
  Cambodia: {
    zone: '',
    states: []
  },
  Cameroon: {
    zone: '',
    states: []
  },
  Canada: {
    zone: '',
    states: [{
      id: 'AB',
      val: 'Alberta'
    }, {
      id: 'BC',
      val: 'British Columbia'
    }, {
      id: 'MB',
      val: 'Manitoba'
    }, {
      id: 'NB',
      val: 'New Brunswick'
    }, {
      id: 'NL',
      val: 'Newfoundland and Labrador'
    }, {
      id: 'NT',
      val: 'Northwest Territories'
    }, {
      id: 'NS',
      val: 'Nova Scotia'
    }, {
      id: 'NU',
      val: 'Nunavut'
    }, {
      id: 'ON',
      val: 'Ontario'
    }, {
      id: 'PE',
      val: 'Prince Edward Island'
    }, {
      id: 'QC',
      val: 'Quebec'
    }, {
      id: 'SK',
      val: 'Saskatchewan'
    }, {
      id: 'YT',
      val: 'Yukon'
    }]
  },
  'Cape Verde': {
    zone: '',
    states: []
  },
  'Cayman Islands': {
    zone: '',
    states: []
  },
  'Central African Republic': {
    zone: '',
    states: []
  },
  Chad: {
    zone: '',
    states: []
  },
  Chile: {
    zone: '',
    states: []
  },
  China: {
    zone: '',
    states: []
  },
  'Christmas Island': {
    zone: '',
    states: []
  },
  'Cocos (Keeling) Islands': {
    zone: '',
    states: []
  },
  Colombia: {
    zone: '',
    states: []
  },
  Comoros: {
    zone: '',
    states: []
  },
  Congo: {
    zone: '',
    states: []
  },
  'Cook Islands': {
    zone: '',
    states: []
  },
  'Costa Rica': {
    zone: '',
    states: []
  },
  'CÃ´te d\'Ivoire': {
    zone: '',
    states: []
  },
  Croatia: {
    zone: 'EU',
    states: []
  },
  Cuba: {
    zone: '',
    states: []
  },
  CuraÃ§ao: {
    zone: '',
    states: []
  },
  Cyprus: {
    zone: 'EU',
    states: []
  },
  'Czech Republic': {
    zone: 'EU',
    states: []
  },
  'Democratic Republic of the Congo': {
    zone: '',
    states: []
  },
  Denmark: {
    zone: 'EU',
    states: []
  },
  Djibouti: {
    zone: '',
    states: []
  },
  Dominica: {
    zone: '',
    states: []
  },
  'Dominican Republic': {
    zone: '',
    states: []
  },
  Ecuador: {
    zone: '',
    states: []
  },
  Egypt: {
    zone: '',
    states: []
  },
  'El Salvador': {
    zone: '',
    states: []
  },
  'Equatorial Guinea': {
    zone: '',
    states: []
  },
  Eritrea: {
    zone: '',
    states: []
  },
  Estonia: {
    zone: 'EU',
    states: []
  },
  Eswatini: {
    zone: '',
    states: []
  },
  Ethiopia: {
    zone: '',
    states: []
  },
  'Faroe Islands': {
    zone: '',
    states: []
  },
  'Falkland Islands (Malvinas)': {
    zone: '',
    states: []
  },
  Fiji: {
    zone: '',
    states: []
  },
  Finland: {
    zone: 'EU',
    states: []
  },
  France: {
    zone: 'EU',
    states: []
  },
  'French Guiana': {
    zone: '',
    states: []
  },
  'French Polynesia': {
    zone: '',
    states: []
  },
  'French Southern Territories': {
    zone: '',
    states: []
  },
  Gabon: {
    zone: '',
    states: []
  },
  Gambia: {
    zone: '',
    states: []
  },
  Georgia: {
    zone: '',
    states: []
  },
  Germany: {
    zone: 'EU',
    states: []
  },
  Ghana: {
    zone: '',
    states: []
  },
  Gibraltar: {
    zone: '',
    states: []
  },
  Greece: {
    zone: 'EU',
    states: []
  },
  Greenland: {
    zone: '',
    states: []
  },
  Grenada: {
    zone: '',
    states: []
  },
  Guadeloupe: {
    zone: '',
    states: []
  },
  Guam: {
    zone: '',
    states: []
  },
  Guatemala: {
    zone: '',
    states: []
  },
  'Guernsey, C.I.': {
    zone: '',
    states: []
  },
  Guinea: {
    zone: '',
    states: []
  },
  'Guinea-Bissau': {
    zone: '',
    states: []
  },
  Guyana: {
    zone: '',
    states: []
  },
  Haiti: {
    zone: '',
    states: []
  },
  'Heard And Mcdonald Islands': {
    zone: '',
    states: []
  },
  'Holy See (the)': {
    zone: '',
    states: []
  },
  Honduras: {
    zone: '',
    states: []
  },
  'Hong Kong': {
    zone: '',
    states: []
  },
  Hungary: {
    zone: 'EU',
    states: []
  },
  Iceland: {
    zone: 'EU',
    states: []
  },
  India: {
    zone: '',
    states: []
  },
  Indonesia: {
    zone: '',
    states: []
  },
  Iran: {
    zone: '',
    states: []
  },
  Iraq: {
    zone: '',
    states: []
  },
  Ireland: {
    zone: 'EU',
    states: []
  },
  'Isle Of Man': {
    zone: '',
    states: []
  },
  Israel: {
    zone: '',
    states: []
  },
  Italy: {
    zone: 'EU',
    states: []
  },
  Jamaica: {
    zone: '',
    states: []
  },
  Japan: {
    zone: '',
    states: []
  },
  'Jersey, C.I.': {
    zone: '',
    states: []
  },
  Jordan: {
    zone: '',
    states: []
  },
  Kazakhstan: {
    zone: '',
    states: []
  },
  Kenya: {
    zone: '',
    states: []
  },
  Kiribati: {
    zone: '',
    states: []
  },
  'Korea (the Democratic People\'s Republic of)': {
    zone: '',
    states: []
  },
  Kuwait: {
    zone: '',
    states: []
  },
  Kyrgyzstan: {
    zone: '',
    states: []
  },
  Laos: {
    zone: '',
    states: []
  },
  Latvia: {
    zone: 'EU',
    states: []
  },
  Lebanon: {
    zone: '',
    states: []
  },
  Lesotho: {
    zone: '',
    states: []
  },
  Liberia: {
    zone: '',
    states: []
  },
  'Libyan Arab Jamahiriya': {
    zone: '',
    states: []
  },
  Liechtenstein: {
    zone: 'EU',
    states: []
  },
  Lithuania: {
    zone: 'EU',
    states: []
  },
  Luxembourg: {
    zone: 'EU',
    states: []
  },
  Macedonia: {
    zone: '',
    states: []
  },
  Madagascar: {
    zone: '',
    states: []
  },
  Malawi: {
    zone: '',
    states: []
  },
  Malaysia: {
    zone: '',
    states: []
  },
  Maldives: {
    zone: '',
    states: []
  },
  Mali: {
    zone: '',
    states: []
  },
  Malta: {
    zone: 'EU',
    states: []
  },
  'Marshall Islands': {
    zone: '',
    states: []
  },
  Martinique: {
    zone: '',
    states: []
  },
  Mauritania: {
    zone: '',
    states: []
  },
  Mauritius: {
    zone: '',
    states: []
  },
  Mayotte: {
    zone: '',
    states: []
  },
  Mexico: {
    zone: '',
    states: []
  },
  Micronesia: {
    zone: '',
    states: []
  },
  Moldova: {
    zone: '',
    states: []
  },
  Monaco: {
    zone: '',
    states: []
  },
  Mongolia: {
    zone: '',
    states: []
  },
  Montenegro: {
    zone: '',
    states: []
  },
  Montserrat: {
    zone: '',
    states: []
  },
  Morocco: {
    zone: '',
    states: []
  },
  Mozambique: {
    zone: '',
    states: []
  },
  Myanmar: {
    zone: '',
    states: []
  },
  Namibia: {
    zone: '',
    states: []
  },
  Nauru: {
    zone: '',
    states: []
  },
  Nepal: {
    zone: '',
    states: []
  },
  Netherlands: {
    zone: 'EU',
    states: []
  },
  'New Caledonia': {
    zone: '',
    states: []
  },
  'New Zealand': {
    zone: '',
    states: []
  },
  Nicaragua: {
    zone: '',
    states: []
  },
  Niger: {
    zone: '',
    states: []
  },
  Nigeria: {
    zone: '',
    states: []
  },
  Niue: {
    zone: '',
    states: []
  },
  'Norfolk Island': {
    zone: '',
    states: []
  },
  'Northern Mariana Islands': {
    zone: '',
    states: []
  },
  Norway: {
    zone: 'EU',
    states: []
  },
  Oman: {
    zone: '',
    states: []
  },
  Pakistan: {
    zone: '',
    states: []
  },
  Palau: {
    zone: '',
    states: []
  },
  Palestine: {
    zone: '',
    states: []
  },
  Panama: {
    zone: '',
    states: []
  },
  'Papua New Guinea': {
    zone: '',
    states: []
  },
  Paraguay: {
    zone: '',
    states: []
  },
  Peru: {
    zone: '',
    states: []
  },
  Philippines: {
    zone: '',
    states: []
  },
  Pitcairn: {
    zone: '',
    states: []
  },
  Poland: {
    zone: 'EU',
    states: []
  },
  Portugal: {
    zone: 'EU',
    states: []
  },
  'Puerto Rico': {
    zone: '',
    states: []
  },
  Qatar: {
    zone: '',
    states: []
  },
  Reunion: {
    zone: '',
    states: []
  },
  Romania: {
    zone: 'EU',
    states: []
  },
  Rwanda: {
    zone: '',
    states: []
  },
  'Saint BarthÃ©lemy': {
    zone: '',
    states: []
  },
  'Saint Kitts And Nevis': {
    zone: '',
    states: []
  },
  'Saint Lucia': {
    zone: '',
    states: []
  },
  'Saint Martin (French part)': {
    zone: '',
    states: []
  },
  Samoa: {
    zone: '',
    states: []
  },
  'San Marino': {
    zone: '',
    states: []
  },
  'Sao Tome And Principe': {
    zone: '',
    states: []
  },
  'Saudi Arabia': {
    zone: '',
    states: []
  },
  Senegal: {
    zone: '',
    states: []
  },
  Serbia: {
    zone: '',
    states: []
  },
  Seychelles: {
    zone: '',
    states: []
  },
  'Sierra Leone': {
    zone: '',
    states: []
  },
  Singapore: {
    zone: '',
    states: []
  },
  'Sint Maarten (Dutch part)': {
    zone: '',
    states: []
  },
  Slovakia: {
    zone: 'EU',
    states: []
  },
  Slovenia: {
    zone: 'EU',
    states: []
  },
  'Solomon Islands': {
    zone: '',
    states: []
  },
  Somalia: {
    zone: '',
    states: []
  },
  'South Africa': {
    zone: '',
    states: []
  },
  'South Georgia and the South Sandwich Islands': {
    zone: '',
    states: []
  },
  'South Korea': {
    zone: '',
    states: []
  },
  'South Sudan': {
    zone: '',
    states: []
  },
  Spain: {
    zone: 'EU',
    states: [{
      id: 'ANDL',
      val: 'Andalucia'
    }, {
      id: 'ARGN',
      val: 'Aragon'
    }, {
      id: 'ASTR',
      val: 'Asturias'
    }, {
      id: 'BSQU',
      val: 'Basque Country'
    }, {
      id: 'BLRS',
      val: 'Belearas'
    }, {
      id: 'CNRY',
      val: 'Canary Islands'
    }, {
      id: 'CNTB',
      val: 'Cantabria'
    }, {
      id: 'MNCH',
      val: 'Castilla-la Mancha'
    }, {
      id: 'CLYL',
      val: 'Castille Y Leon'
    }, {
      id: 'CTLN',
      val: 'Catalonia'
    }, {
      id: 'CUTA',
      val: 'Ceuta'
    }, {
      id: 'EXTR',
      val: 'Extremadura'
    }, {
      id: 'GLCA',
      val: 'Galicia'
    }, {
      id: 'RJLA',
      val: 'La Rioja'
    }, {
      id: 'MDRD',
      val: 'Madrid'
    }, {
      id: 'MLLA',
      val: 'Melilla'
    }, {
      id: 'MRCA',
      val: 'Murcia'
    }, {
      id: 'NVRA',
      val: 'Navarra'
    }, {
      id: 'VLNC',
      val: 'Valencian Community'
    }]
  },
  'Sri Lanka': {
    zone: '',
    states: []
  },
  'St. Helena': {
    zone: '',
    states: []
  },
  'St. Pierre And Miquelon': {
    zone: '',
    states: []
  },
  'St. Vincent And The Grenadines': {
    zone: '',
    states: []
  },
  Sudan: {
    zone: '',
    states: []
  },
  Suriname: {
    zone: '',
    states: []
  },
  'Svalbard And Jan Mayen Islands': {
    zone: '',
    states: []
  },
  Sweden: {
    zone: 'EU',
    states: []
  },
  Switzerland: {
    zone: 'EU',
    states: []
  },
  Syria: {
    zone: '',
    states: []
  },
  Taiwan: {
    zone: '',
    states: []
  },
  Tajikistan: {
    zone: '',
    states: []
  },
  'Tanzania, United Republic Of': {
    zone: '',
    states: []
  },
  Thailand: {
    zone: '',
    states: []
  },
  'Timor-Leste': {
    zone: '',
    states: []
  },
  Togo: {
    zone: '',
    states: []
  },
  Tokelau: {
    zone: '',
    states: []
  },
  Tonga: {
    zone: '',
    states: []
  },
  'Trinidad And Tobago': {
    zone: '',
    states: []
  },
  Tunisia: {
    zone: '',
    states: []
  },
  Turkey: {
    zone: '',
    states: []
  },
  Turkmenistan: {
    zone: '',
    states: []
  },
  'Turks And Caicos Islands': {
    zone: '',
    states: []
  },
  Tuvalu: {
    zone: '',
    states: []
  },
  'U.S. Minor Outlying Islands': {
    zone: '',
    states: []
  },
  Uganda: {
    zone: '',
    states: []
  },
  Ukraine: {
    zone: '',
    states: []
  },
  'United Arab Emirates': {
    zone: '',
    states: []
  },
  'United Kingdom': {
    zone: 'EU',
    states: []
  },
  'United States': {
    zone: '',
    states: [{
      id: 'AL',
      val: 'Alabama'
    }, {
      id: 'AK',
      val: 'Alaska'
    }, {
      id: 'AZ',
      val: 'Arizona'
    }, {
      id: 'AR',
      val: 'Arkansas'
    }, {
      id: 'CA',
      val: 'California'
    }, {
      id: 'CO',
      val: 'Colorado'
    }, {
      id: 'CT',
      val: 'Connecticut'
    }, {
      id: 'DE',
      val: 'Delaware'
    }, {
      id: 'FL',
      val: 'Florida'
    }, {
      id: 'GA',
      val: 'Georgia'
    }, {
      id: 'HI',
      val: 'Hawaii'
    }, {
      id: 'ID',
      val: 'Idaho'
    }, {
      id: 'IL',
      val: 'Illinois'
    }, {
      id: 'IN',
      val: 'Indiana'
    }, {
      id: 'IA',
      val: 'Iowa'
    }, {
      id: 'KS',
      val: 'Kansas'
    }, {
      id: 'KY',
      val: 'Kentucky'
    }, {
      id: 'LA',
      val: 'Louisiana'
    }, {
      id: 'ME',
      val: 'Maine'
    }, {
      id: 'MD',
      val: 'Maryland'
    }, {
      id: 'MA',
      val: 'Massachusetts'
    }, {
      id: 'MI',
      val: 'Michigan'
    }, {
      id: 'MN',
      val: 'Minnesota'
    }, {
      id: 'MS',
      val: 'Mississippi'
    }, {
      id: 'MO',
      val: 'Missouri'
    }, {
      id: 'MT',
      val: 'Montana'
    }, {
      id: 'NE',
      val: 'Nebraska'
    }, {
      id: 'NV',
      val: 'Nevada'
    }, {
      id: 'NH',
      val: 'New Hampshire'
    }, {
      id: 'NJ',
      val: 'New Jersey'
    }, {
      id: 'NM',
      val: 'New Mexico'
    }, {
      id: 'NY',
      val: 'New York'
    }, {
      id: 'NC',
      val: 'North Carolina'
    }, {
      id: 'ND',
      val: 'North Dakota'
    }, {
      id: 'OH',
      val: 'Ohio'
    }, {
      id: 'OK',
      val: 'Oklahoma'
    }, {
      id: 'OR',
      val: 'Oregon'
    }, {
      id: 'PA',
      val: 'Pennsylvania'
    }, {
      id: 'RI',
      val: 'Rhode Island'
    }, {
      id: 'SC',
      val: 'South Carolina'
    }, {
      id: 'SD',
      val: 'South Dakota'
    }, {
      id: 'TN',
      val: 'Tennessee'
    }, {
      id: 'TX',
      val: 'Texas'
    }, {
      id: 'UT',
      val: 'Utah'
    }, {
      id: 'VT',
      val: 'Vermont'
    }, {
      id: 'VA',
      val: 'Virginia'
    }, {
      id: 'WA',
      val: 'Washington'
    }, {
      id: 'DC',
      val: 'Washington DC'
    }, {
      id: 'WV',
      val: 'West Virginia'
    }, {
      id: 'WI',
      val: 'Wisconsin'
    }, {
      id: 'WY',
      val: 'Wyoming'
    }]
  },
  Uruguay: {
    zone: '',
    states: []
  },
  Uzbekistan: {
    zone: '',
    states: []
  },
  Vanuatu: {
    zone: '',
    states: []
  },
  Venezuela: {
    zone: '',
    states: []
  },
  Vietnam: {
    zone: '',
    states: []
  },
  'Virgin Islands (British)': {
    zone: '',
    states: []
  },
  'Virgin Islands, U.S.': {
    zone: '',
    states: []
  },
  'Wallis And Futuna Islands': {
    zone: '',
    states: []
  },
  'Western Sahara': {
    zone: '',
    states: []
  },
  Yemen: {
    zone: '',
    states: []
  },
  Zambia: {
    zone: '',
    states: []
  },
  Zimbabwe: {
    zone: '',
    states: []
  },
  'Ã…land Islands': {
    zone: '',
    states: []
  }
};

/***/ }),

/***/ 26274:
/*!****************************************************!*\
  !*** ./src/app/shared/custom-validator.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorService": () => (/* binding */ CustomValidatorService)
/* harmony export */ });
/* harmony import */ var _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui-strings */ 56927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



class CustomValidatorService {
  constructor(translate) {
    this.translate = translate;
    this.errorStrs = _shared_ui_strings__WEBPACK_IMPORTED_MODULE_0__.ERROR_STRINGS;
    this.reqErrorMsgs = field => {
      const errorMsgMap = {
        firstName: this.errorStrs.first_name_req,
        lastName: this.errorStrs.last_name_req,
        userName: this.errorStrs.user_name_req,
        email: this.errorStrs.email_req,
        phone: this.errorStrs.phone_req,
        companyName: this.errorStrs.company_req,
        industry: this.errorStrs.industry_req,
        street: this.errorStrs.street_address_req,
        postalCode: this.errorStrs.postal_code_req,
        city: this.errorStrs.city_req,
        state: this.errorStrs.state_province_region_req,
        country: this.errorStrs.country_req,
        password: this.errorStrs.password_req,
        confirm_password: this.errorStrs.confirm_password_req,
        region: this.errorStrs.select_region_req,
        confirm_region: this.errorStrs.confirm_select_region_req,
        accountType: this.errorStrs.account_type_req
      };
      // return empty if not found, since public
      return errorMsgMap[field];
    };
    this.invalidErrorMsgs = field => {
      const errorMsgMap = {
        userName: this.errorStrs.user_name_invalid,
        userNameUnique: this.errorStrs.user_name_unique,
        email: this.errorStrs.email_invalid,
        phone: this.errorStrs.phone_invalid,
        password: this.errorStrs.password_invalid,
        password_mismatch: this.errorStrs.confirm_password_mismatch,
        password_compromised: this.errorStrs.compromised_password,
        region_mismatch: this.errorStrs.confirm_region_mismatch,
        firstName: this.errorStrs.special_chars_not_allowed,
        lastName: this.errorStrs.special_chars_not_allowed,
        city: this.errorStrs.special_chars_not_allowed,
        postalCode: this.errorStrs.postal_code_invalid,
        street: this.errorStrs.street_address_invalid,
        companyName: this.errorStrs.company_invalid
      };
      return errorMsgMap[field];
    };
    this.lengthErrorMsgs = field => {
      const errorMsgMap = {
        userName: this.errorStrs.user_name_length,
        email: this.errorStrs.email_length,
        phone: this.errorStrs.phone_length,
        firstName: this.errorStrs.first_name_length,
        lastName: this.errorStrs.last_name_length,
        city: this.errorStrs.city_length,
        postalCode: this.errorStrs.postal_code_length,
        streetAddress: this.errorStrs.street_address_length
      };
      return errorMsgMap[field];
    };
  }
  getRegex(field) {
    const regExpressions = {
      userName: /^[\w\-\+\.]+$/i,
      email: /^[\w+\d*!#$%&'*+/=.?^`\{|}~-]+@([a-zA-Z\d-]+\.)+[a-zA-Z\d]+$/i,
      phone: /^\d+$/i,
      password: /^((?!.*[\s])((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]))(?!.*[<>]).{8,})$/,
      firstName: /^[a-zA-Z0-9\s]+$/i,
      lastName: /^[a-zA-Z0-9\s]+$/i,
      city: /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/i,
      postalCode: /^[a-zA-Z0-9\-]+$/i,
      street: /^[a-zA-Z0-9]+[a-zA-Z0-9\s\.\-\#\&]*$/i,
      companyName: /^[a-zA-Z0-9]+[a-zA-Z0-9_\-\s\.]*[a-zA-Z0-9]+$/i
    };
    return regExpressions[field];
  }
  cleanValue(value) {
    return typeof value === 'object' ? value : value.trim();
  }
  requiredFn(field) {
    return control => {
      if (control) {
        const value = control.value ? this.cleanValue(control.value) : '';
        if (!value) {
          const requiredErrorMsg = this.reqErrorMsgs(field);
          return {
            required: {
              message: this.translate.instant(requiredErrorMsg)
            }
          };
        }
        return null;
      }
      return null;
    };
  }
  regexFn(field) {
    return control => {
      if (control) {
        if (control.value) {
          const value = control.value ? this.cleanValue(control.value) : '';
          const regex = this.getRegex(field);
          const invalidErrorMsg = this.invalidErrorMsgs(field);
          if (value && !regex.test(value)) {
            return {
              error: {
                message: this.translate.instant(invalidErrorMsg)
              }
            };
          }
          return null;
        }
      }
      return null;
    };
  }
  matchFieldFn(field, fieldToMatch, type = 'text') {
    return control => {
      if (control) {
        const value = control.value ? this.cleanValue(control.value) : '';
        let valueToMatch = control.parent?.value[fieldToMatch];
        valueToMatch = type === 'dropDown' ? valueToMatch?.val : valueToMatch;
        const invalidErrorMsg = this.invalidErrorMsgs(field);
        if (value && valueToMatch && value !== valueToMatch) {
          return {
            error: {
              message: this.translate.instant(invalidErrorMsg)
            }
          };
        }
        return null;
      }
      return null;
    };
  }
  commonValFn(field) {
    const invalidErrorMsg = this.invalidErrorMsgs(field);
    return control => {
      return {
        required: {
          message: this.translate.instant(invalidErrorMsg)
        }
      };
    };
  }
  lengthValFn(field, maxLength, minLength) {
    return control => {
      if (control) {
        const fieldValueLength = control.value.trim().length;
        if (minLength && fieldValueLength < minLength || fieldValueLength > maxLength) {
          const lengthErrorMsg = this.lengthErrorMsgs(field);
          return {
            error: {
              message: this.translate.instant(lengthErrorMsg)
            }
          };
        }
      }
      return null;
    };
  }
  static #_ = this.Éµfac = function CustomValidatorService_Factory(t) {
    return new (t || CustomValidatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ÉµÉµdefineInjectable"]({
    token: CustomValidatorService,
    factory: CustomValidatorService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 34152:
/*!*********************************!*\
  !*** ./src/app/shared/model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTypesList": () => (/* binding */ AccountTypesList),
/* harmony export */   "IndustryList": () => (/* binding */ IndustryList)
/* harmony export */ });
var IndustryList;
(function (IndustryList) {
  IndustryList["Aerospace_Defense"] = "Aerospace/Defense";
  IndustryList["BusinessServices"] = "Business Services";
  IndustryList["ComputerSystemsDevelopment"] = "Computer Systems Development";
  IndustryList["DataProcessing"] = "Data Processing";
  IndustryList["E_Commerce"] = "E-Commerce";
  IndustryList["Education"] = "Education";
  IndustryList["Energy_Utilities_Mining"] = "Energy/Utilities/Mining";
  IndustryList["Engineering_Architecture_Construction"] = "Engineering/Architecture/Construction";
  IndustryList["Entertainment_Publishing"] = "Entertainment/Publishing";
  IndustryList["Finance"] = "Finance";
  IndustryList["Government"] = "Government";
  IndustryList["Healthcare"] = "Healthcare";
  IndustryList["Hotel_Restaurant_Tourism"] = "Hotel/Restaurant/Tourism";
  IndustryList["Insurance_RealEstate_Legal"] = "Insurance/Real Estate/Legal";
  IndustryList["ISP"] = "ISP";
  IndustryList["Manufacturing"] = "Manufacturing";
  IndustryList["Marketing"] = "Marketing";
  IndustryList["NetworkServices"] = "Network Services";
  IndustryList["Non_Profit"] = "Non-Profit";
  IndustryList["OtherComputerRelated"] = "Other Computer Related";
  IndustryList["OtherNon_ComputerRelated"] = "Other Non-Computer Related";
  IndustryList["Pharmaceutical"] = "Pharmaceutical";
  IndustryList["Retail"] = "Retail";
  IndustryList["SystemsSecurity"] = "Systems Security";
  IndustryList["Telecommunications"] = "Telecommunications";
  IndustryList["Transportation"] = "Transportation";
})(IndustryList || (IndustryList = {}));
var AccountTypesList;
(function (AccountTypesList) {
  AccountTypesList["Partner"] = "Partner";
  AccountTypesList["Customer"] = "Customer";
})(AccountTypesList || (AccountTypesList = {}));
;
;
;
;
;
;
;

/***/ }),

/***/ 81152:
/*!**************************************************!*\
  !*** ./src/app/shared/storage-helper.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageHelperService": () => (/* binding */ StorageHelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StorageHelperService {
  getSession(key) {
    return localStorage.getItem(key);
  }
  setSession(key, value) {
    localStorage.setItem(key, value);
  }
  removeSession(key) {
    localStorage.removeItem(key);
  }
  static #_ = this.Éµfac = function StorageHelperService_Factory(t) {
    return new (t || StorageHelperService)();
  };
  static #_2 = this.Éµprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ÉµÉµdefineInjectable"]({
    token: StorageHelperService,
    factory: StorageHelperService.Éµfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56927:
/*!**************************************!*\
  !*** ./src/app/shared/ui-strings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_NEW_ACC_STRINGS": () => (/* binding */ ADD_NEW_ACC_STRINGS),
/* harmony export */   "APP_TITLE_STRINGS": () => (/* binding */ APP_TITLE_STRINGS),
/* harmony export */   "EMAIL_CHANGE_STRINGS": () => (/* binding */ EMAIL_CHANGE_STRINGS),
/* harmony export */   "ERROR_COMP_STRINGS": () => (/* binding */ ERROR_COMP_STRINGS),
/* harmony export */   "ERROR_STRINGS": () => (/* binding */ ERROR_STRINGS),
/* harmony export */   "INVITE_FROM_SF_COMP_STRINGS": () => (/* binding */ INVITE_FROM_SF_COMP_STRINGS),
/* harmony export */   "RESETS_PASSWORD_STRINGS": () => (/* binding */ RESETS_PASSWORD_STRINGS),
/* harmony export */   "RETRIEVE_USER_NAME_STRINGS": () => (/* binding */ RETRIEVE_USER_NAME_STRINGS)
/* harmony export */ });
const ADD_NEW_ACC_STRINGS = {
  create_acc_heading: 'create_acc_heading',
  first_name_lbl: 'create_acc_first_name_lbl',
  last_name_lbl: 'create_acc_last_name_lbl',
  username_lbl: 'create_acc_username_lbl',
  email_lbl: 'create_acc_email_lbl',
  phone_lbl: 'create_acc_phone_lbl',
  company_name_lbl: 'create_acc_company_name_lbl',
  industry_lbl: 'create_acc_industry_lbl',
  street_address_lbl: 'create_acc_street_address_lbl',
  postal_code_lbl: 'create_acc_postal_code_lbl',
  city_lbl: 'create_acc_city_lbl',
  state_province_region_lbl: 'create_acc_state_province_region_lbl',
  country_lbl: 'create_acc_country_lbl',
  receive_marketing_email_text: 'create_acc_receive_marketing_email_text',
  create_acc_btn_lbl: 'create_acc_btn_lbl',
  account_type_lbl: 'account_type_lbl',
  create_acc_check_email_msg: 'create_acc_check_email_msg',
  create_acc_contact_msg: 'create_acc_contact_msg',
  select_region_heading: 'select_region_heading',
  select_region_sub_heading: 'select_region_sub_heading',
  select_region_sub_heading_2: 'select_region_sub_heading_2',
  select_region_learn_more_text: 'select_region_learn_more_text',
  select_region_dropdown_lbl: 'select_region_dropdown_lbl',
  select_region_dropdown_placeholder_lbl: 'select_region_dropdown_placeholder_lbl',
  save_region_btn_lbl: 'select_region_save_region_btn_lbl',
  confirm_region_heading: 'select_region_confirm_region_heading',
  confirm_region_heading_2: 'select_region_confirm_region_heading_2',
  confirm_select_region_lbl: 'select_region_confirm_lbl',
  set_region_btn_lbl: 'select_region_set_region_btn_lbl',
  congratulations_heading: 'congratulations_heading',
  acc_created_msg: 'acc_created_msg',
  return_to_login_page_btn_lbl: 'return_to_login_page_btn_lbl',
  enter_new_password_heading: 'set_password_heading',
  password_lbl: 'set_password_password_lbl',
  confirm_password_lbl: 'set_password_confirm_password_lbl',
  set_password_btn_lbl: 'set_password_save_password_btn_lbl',
  duplicate_email_dialog_proceed_btn_lbl: 'duplicate_email_dialog_btn_proceed_lbl',
  duplicate_email_dialog_btn_no_lbl: 'duplicate_email_dialog_btn_no_lbl',
  duplicate_email_dialog_title: 'duplicate_email_dialog_title'
};
const RESETS_PASSWORD_STRINGS = {
  page_heading: 'reset_password_heading',
  enter_user_name_text: 'reset_enter_user_name_text',
  username_lbl: 'reset_username_lbl',
  submit_req_btn: 'reset_submit_req_btn',
  email_sent_msg: 'reset_email_sent_msg',
  email_sent_msg_2: 'reset_email_sent_msg_2',
  reset_password_privacy_policy_text: 'reset_password_privacy_policy_text',
  reset_password_successful: 'reset_password_successful',
  return_to_login_page_btn_lbl: 'return_to_login_page_btn_lbl'
};
const RETRIEVE_USER_NAME_STRINGS = {
  page_heading: 'retrieve_user_name_heading',
  enter_email_text: 'retrieve_enter_email_text',
  email_lbl: 'retrieve_email_lbl',
  submit_req_btn: 'retrieve_submit_req_btn',
  email_sent_msg: 'retrieve_email_sent_msg',
  email_sent_msg_2: 'retrieve_user_name_email_sent_msg_2'
};
const ERROR_STRINGS = {
  first_name_req: 'create_acc_err_first_name_req',
  first_name_length: 'create_acc_err_first_name_length',
  last_name_req: 'create_acc_err_last_name_req',
  last_name_length: 'create_acc_err_last_name_length',
  user_name_req: 'create_acc_err_user_name_req',
  user_name_invalid: 'create_acc_err_user_name_invalid',
  user_name_unique: 'create_acc_err_user_name_unique',
  user_name_length: 'create_acc_err_user_name_length',
  email_req: 'create_acc_err_email_req',
  email_invalid: 'create_acc_err_email_invalid',
  email_duplicate: 'duplicate_email_dialog_content_msg',
  email_length: 'create_acc_err_email_length',
  phone_req: 'create_acc_err_phone_req',
  phone_length: 'create_acc_err_phone_length',
  phone_invalid: 'create_acc_err_phone_invalid',
  company_req: 'create_acc_err_company_req',
  company_invalid: 'create_acc_err_company_name_invalid',
  industry_req: 'create_acc_err_industry_req',
  street_address_req: 'create_acc_err_street_address_req',
  street_address_length: 'create_acc_err_street_length',
  street_address_invalid: 'create_acc_err_street_address_invalid',
  postal_code_req: 'create_acc_err_postal_code_req',
  postal_code_length: 'create_acc_err_postal_code_length',
  postal_code_invalid: 'create_acc_err_postal_code_invalid',
  city_req: 'create_acc_err_city_req',
  city_length: 'create_acc_err_city_length',
  state_province_region_req: 'create_acc_err_state_province_region_req',
  country_req: 'create_acc_err_country_req',
  user_exists_email_info_msg: 'create_acc_user_exists_email_info_msg',
  special_chars_not_allowed: 'create_acc_err_special_chars_not_allowed',
  account_type_req: 'account_type_req',
  reset_password_username_req: 'reset_password_err_username_req',
  reset_password_email_req: 'retrieve_username_err_email_req',
  reset_password_failure: 'reset_password_failure',
  password_req: 'set_password_err_password_req',
  password_invalid: 'set_password_err_password_invalid',
  confirm_password_req: 'set_password_err_confirm_password_req',
  confirm_password_mismatch: 'set_password_err_confirm_password_mismatch',
  set_password_failure: 'set_password_failure',
  compromised_password: 'set_password_err_password_compromised',
  select_region_req: 'select_region_err_select_region_req',
  confirm_select_region_req: 'select_region_err_confirm_select_region_req',
  confirm_region_mismatch: 'select_region_err_confirm_region_mismatch',
  api_request_err_message: 'api_request_err_message',
  api_bad_request_err_msg: 'api_bad_request_err_msg'
};
const ERROR_COMP_STRINGS = {
  page_heading: 'error_heading',
  contact_customer_care: 'error_sub_heading',
  redirect_to_start_reg: 'error_sub_heading2',
  reset_password_error_heading: 'reset_password_error_heading',
  reset_password_error_subheading: 'reset_password_error_subheading',
  redirect_to_reset_password: 'reset_password_error_subheading2',
  set_password_error_heading: 'set_password_error_heading',
  return_to_wg_cloud_msg: 'return_to_wg_cloud_msg',
  return_to_wg_cloud: 'return_to_wg_cloud',
  duplicate_email_error_heading: 'duplicate_email_error_heading',
  duplicate_email_error_subheading: 'duplicate_email_error_subheading'
};
const INVITE_FROM_SF_COMP_STRINGS = {
  invite_from_sf_heading: 'invite_from_sf_heading',
  invite_user_btn_lbl: 'invite_user_btn_lbl'
};
const APP_TITLE_STRINGS = {
  wg_technologies: 'WatchGuard Technologies',
  create_account: 'create_account_title',
  set_password: 'set_password_title',
  reset_password: 'reset_password_title',
  select_region: 'select_region_title',
  forgot_password: 'forgot_password_title',
  forgot_user_name: 'forgot_user_name_title',
  invite_from_sf: 'invite_from_sf_title'
};
const EMAIL_CHANGE_STRINGS = {
  email_title: 'email_title',
  email_message: 'email_message',
  confirm_email_success: 'confirm_email_success',
  cancel_email_title: 'cancel_email_heading',
  cancel_email_text: 'cancel_email_subheading',
  cancel_email_message: 'cancel_email_message',
  no_pending_email_found: 'no_pending_email_found',
  email_change_btn_lbl: 'email_change_btn_lbl',
  email_cancel_btn_lbl: 'email_cancel_btn_lbl',
  previous_email_address_lbl: 'previous_email_address_lbl',
  new_email_address_lbl: 'new_email_address_lbl'
};

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  mock: false
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 86741:
/*!*******************************!*\
  !*** ./src/mock/mock_urls.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _data_account_creation_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _data_account_creation_fail_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _data_reset_password_mail_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _data_reset_password_mail_fail_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
var _data_set_password_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache;
var _data_set_password_fail_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache;
var _data_reset_password_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _data_reset_password_fail_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _data_retrieve_user_name_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
var _data_retrieve_user_name_fail_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache;
var _data_validate_unique_user_name_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache;
var _data_validate_non_unique_user_name_json__WEBPACK_IMPORTED_MODULE_11___namespace_cache;
var _data_validate_duplicate_email_json__WEBPACK_IMPORTED_MODULE_12___namespace_cache;
var _data_validate_non_duplicate_email_json__WEBPACK_IMPORTED_MODULE_13___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockUrls": () => (/* binding */ mockUrls)
/* harmony export */ });
/* harmony import */ var _data_account_creation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/account_creation.json */ 11038);
/* harmony import */ var _data_account_creation_fail_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/account_creation_fail.json */ 79342);
/* harmony import */ var _data_reset_password_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/reset_password.json */ 84726);
/* harmony import */ var _data_reset_password_fail_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/reset_password_fail.json */ 79755);
/* harmony import */ var _data_reset_password_mail_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/reset_password_mail.json */ 72745);
/* harmony import */ var _data_reset_password_mail_fail_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/reset_password_mail_fail.json */ 11664);
/* harmony import */ var _data_retrieve_user_name_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/retrieve_user_name.json */ 24821);
/* harmony import */ var _data_retrieve_user_name_fail_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/retrieve_user_name_fail.json */ 5816);
/* harmony import */ var _data_set_password_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/set_password.json */ 73435);
/* harmony import */ var _data_set_password_fail_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/set_password_fail.json */ 53346);
/* harmony import */ var _data_validate_unique_user_name_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/validate_unique_user_name.json */ 58346);
/* harmony import */ var _data_validate_non_unique_user_name_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/validate_non_unique_user_name.json */ 29754);
/* harmony import */ var _data_validate_duplicate_email_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/validate_duplicate_email.json */ 54073);
/* harmony import */ var _data_validate_non_duplicate_email_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/validate_non_duplicate_email.json */ 37545);














const mockUrls = [{
  url: '/account-manager-mw/CreateAccount',
  json: /*#__PURE__*/ (_data_account_creation_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_data_account_creation_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_data_account_creation_json__WEBPACK_IMPORTED_MODULE_0__, 2)))
}, {
  url: '/account-manager-mw/FailCreateAccount',
  json: /*#__PURE__*/ (_data_account_creation_fail_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_data_account_creation_fail_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_data_account_creation_fail_json__WEBPACK_IMPORTED_MODULE_1__, 2)))
}, {
  url: '/account-manager-mw/SendResetPassword',
  json: /*#__PURE__*/ (_data_reset_password_mail_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_data_reset_password_mail_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_data_reset_password_mail_json__WEBPACK_IMPORTED_MODULE_4__, 2)))
}, {
  url: '/account-manager-mw/FailSendResetPassword',
  json: /*#__PURE__*/ (_data_reset_password_mail_fail_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_data_reset_password_mail_fail_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_data_reset_password_mail_fail_json__WEBPACK_IMPORTED_MODULE_5__, 2)))
}, {
  url: '/account-manager-mw/[^/]+/SetPassword',
  json: /*#__PURE__*/ (_data_set_password_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache || (_data_set_password_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache = __webpack_require__.t(_data_set_password_json__WEBPACK_IMPORTED_MODULE_8__, 2)))
}, {
  url: '/account-manager-mw/[^/]+/FailSetPassword',
  json: /*#__PURE__*/ (_data_set_password_fail_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache || (_data_set_password_fail_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache = __webpack_require__.t(_data_set_password_fail_json__WEBPACK_IMPORTED_MODULE_9__, 2)))
}, {
  url: '/account-manager-mw/[^/]+/ResetPassword',
  json: /*#__PURE__*/ (_data_reset_password_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_data_reset_password_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_data_reset_password_json__WEBPACK_IMPORTED_MODULE_2__, 2)))
}, {
  url: '/account-manager-mw/[^/]+/FailResetPassword',
  json: /*#__PURE__*/ (_data_reset_password_fail_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_data_reset_password_fail_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_data_reset_password_fail_json__WEBPACK_IMPORTED_MODULE_3__, 2)))
}, {
  url: '/account-manager-mw/RetrieveUserName',
  json: /*#__PURE__*/ (_data_retrieve_user_name_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (_data_retrieve_user_name_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(_data_retrieve_user_name_json__WEBPACK_IMPORTED_MODULE_6__, 2)))
}, {
  url: '/account-manager-mw/FailRetrieveUserName',
  json: /*#__PURE__*/ (_data_retrieve_user_name_fail_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache || (_data_retrieve_user_name_fail_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache = __webpack_require__.t(_data_retrieve_user_name_fail_json__WEBPACK_IMPORTED_MODULE_7__, 2)))
}, {
  url: '/account-manager-mw/ValidateUniqueUserName',
  json: /*#__PURE__*/ (_data_validate_unique_user_name_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache || (_data_validate_unique_user_name_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache = __webpack_require__.t(_data_validate_unique_user_name_json__WEBPACK_IMPORTED_MODULE_10__, 2)))
}, {
  url: '/account-manager-mw/ValidateNonUniqueUserName',
  json: /*#__PURE__*/ (_data_validate_non_unique_user_name_json__WEBPACK_IMPORTED_MODULE_11___namespace_cache || (_data_validate_non_unique_user_name_json__WEBPACK_IMPORTED_MODULE_11___namespace_cache = __webpack_require__.t(_data_validate_non_unique_user_name_json__WEBPACK_IMPORTED_MODULE_11__, 2)))
}, {
  url: '/account-manager-mw/ValidateDuplicateEmail',
  json: /*#__PURE__*/ (_data_validate_duplicate_email_json__WEBPACK_IMPORTED_MODULE_12___namespace_cache || (_data_validate_duplicate_email_json__WEBPACK_IMPORTED_MODULE_12___namespace_cache = __webpack_require__.t(_data_validate_duplicate_email_json__WEBPACK_IMPORTED_MODULE_12__, 2)))
}, {
  url: '/account-manager-mw/ValidateNonDuplicateEmail',
  json: /*#__PURE__*/ (_data_validate_non_duplicate_email_json__WEBPACK_IMPORTED_MODULE_13___namespace_cache || (_data_validate_non_duplicate_email_json__WEBPACK_IMPORTED_MODULE_13___namespace_cache = __webpack_require__.t(_data_validate_non_duplicate_email_json__WEBPACK_IMPORTED_MODULE_13__, 2)))
}];

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 11038:
/*!*********************************************!*\
  !*** ./src/mock/data/account_creation.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = {"success":true};

/***/ }),

/***/ 79342:
/*!**************************************************!*\
  !*** ./src/mock/data/account_creation_fail.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"success":false,"message":"There was some error processing your request."}');

/***/ }),

/***/ 84726:
/*!*******************************************!*\
  !*** ./src/mock/data/reset_password.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = {"success":true};

/***/ }),

/***/ 79755:
/*!************************************************!*\
  !*** ./src/mock/data/reset_password_fail.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"success":false,"message":"There was some error processing your request."}');

/***/ }),

/***/ 72745:
/*!************************************************!*\
  !*** ./src/mock/data/reset_password_mail.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"success":true};

/***/ }),

/***/ 11664:
/*!*****************************************************!*\
  !*** ./src/mock/data/reset_password_mail_fail.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"success":false,"message":"There was some error processing your request."}');

/***/ }),

/***/ 24821:
/*!***********************************************!*\
  !*** ./src/mock/data/retrieve_user_name.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = {"success":true};

/***/ }),

/***/ 5816:
/*!****************************************************!*\
  !*** ./src/mock/data/retrieve_user_name_fail.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"success":false,"message":"There was some error processing your request."}');

/***/ }),

/***/ 73435:
/*!*****************************************!*\
  !*** ./src/mock/data/set_password.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = {"success":true};

/***/ }),

/***/ 53346:
/*!**********************************************!*\
  !*** ./src/mock/data/set_password_fail.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"success":false,"message":"There was some error processing your request."}');

/***/ }),

/***/ 54073:
/*!*****************************************************!*\
  !*** ./src/mock/data/validate_duplicate_email.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"unique":false};

/***/ }),

/***/ 37545:
/*!*********************************************************!*\
  !*** ./src/mock/data/validate_non_duplicate_email.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"unique":true};

/***/ }),

/***/ 29754:
/*!**********************************************************!*\
  !*** ./src/mock/data/validate_non_unique_user_name.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"unique":false};

/***/ }),

/***/ 58346:
/*!******************************************************!*\
  !*** ./src/mock/data/validate_unique_user_name.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = {"unique":true};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.2e4b43c654574a4f.js.map
