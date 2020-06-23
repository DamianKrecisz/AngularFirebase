(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesClientsClientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div nz-row [nzGutter]=\"32\">\r\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\r\n    <button nz-button nzType=\"primary\" nzBlock (click)=\"addNewClient()\">Add client</button>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\r\n    <input nz-input placeholder=\"Search client by name\"\r\n      (ngModelChange)=\"search($event)\" />\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--------------------------------------------------------------->\r\n\r\n<nz-table #editRowTable nzBordered [nzData]=\"listOfData\" nzTableLayout=\"fixed\">\r\n  <thead>\r\n    <tr>\r\n      <th nzWidth=\"1%\">#</th>\r\n      <th nzWidth=\"20%\">Client Name</th>\r\n      <th nzWidth=\"59%\">Address</th>\r\n      <th nzWidth=\"20%\">Tax</th>\r\n      <th>Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of editRowTable.data; let i = index\">\r\n      <ng-container *ngIf=\"!editCache[data.id].edit; else editTemplate\">\r\n        <td>{{ i+1 }} </td>\r\n        <td>{{ data.clientName }}</td>\r\n        <td>{{ data.address }}</td>\r\n        <td>{{ data.tax }}</td>\r\n        <td><a (click)=\"startEdit(data.id)\">Edit</a> <a id=\"delete\" (click)=deleteClient(data.id)>Delete</a> </td>\r\n      </ng-container>\r\n      <ng-template #editTemplate>\r\n        <td>{{ i+1 }}</td>\r\n        <td><input type=\"text\" nz-input [(ngModel)]=\"editCache[data.id].data.clientName\" /></td>\r\n        <td><input type=\"text\" nz-input [(ngModel)]=\"editCache[data.id].data.address\" /></td>\r\n        <td><input type=\"number\" nz-input [(ngModel)]=\"editCache[data.id].data.tax\" /></td>\r\n        <td>\r\n          <a (click)=\"saveEdit(data.id)\" class=\"save\">Save</a>\r\n          <a nz-popconfirm nzTitle=\"Sure to cancel?\" (nzOnConfirm)=\"cancelEdit(data.id)\">Cancel</a>\r\n        </td>\r\n      </ng-template>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n\r\n<!--------------------------------------------------------------->\r\n\r\n<nz-modal [(nzVisible)]=\"addClientModal\" nzTitle=\"Add new client \" (nzOnCancel)=\"handleCancel()\"\r\n  (nzOnOk)=\"handleAddOk()\" [nzOkLoading]=\"isOkLoading\">\r\n  <form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" >\r\n\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input client name!\">\r\n        <nz-input-group nzPrefixIcon=\"user\">\r\n          <input formControlName=\"clientName\" nz-input placeholder=\"Client name\" />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input!\">\r\n        <nz-input-group nzPrefixIcon=\"home\">\r\n          <input formControlName=\"address\" nz-input placeholder=\"Address\" />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input!\">\r\n        <nz-input-group nzPrefixIcon=\"number\">\r\n          <input formControlName=\"tax\" nz-input placeholder=\"Tax number\" />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n  </form>\r\n\r\n</nz-modal>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nz-layout>\r\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"null\">\r\n    <div class=\"logo\">\r\n      <a  [routerLink]='[{ outlets: { content: [\"stats\"] } }]'>\r\n        <img src=\"../../../assets/angular.svg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <ul nz-menu nzTheme=\"dark\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\">\r\n      <li nz-submenu nzOpen nzTitle=\"Clients\" nzIcon=\"dashboard\">\r\n        <ul>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a [routerLink]='[{ outlets: { content: [\"listOfClients\"] } }]'>List of clients</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li nz-submenu nzOpen nzTitle=\"Products\" nzIcon=\"form\">\r\n        <ul>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a  [routerLink]='[{ outlets: { content: [\"listOfProducts\"] } }]'>List of products</a>\r\n          </li>\r\n          \r\n        </ul>\r\n      </li>\r\n      <li nz-submenu nzOpen nzTitle=\"Orders\" nzIcon=\"form\">\r\n        <ul>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a [routerLink]='[{ outlets: { content: [\"listOfOrders\"] } }]'>List of orders</a>\r\n          </li>\r\n          \r\n        </ul>\r\n      </li>\r\n      \r\n\r\n    </ul>\r\n  </nz-sider>\r\n  <nz-layout>\r\n    <nz-header>\r\n\r\n      <i class=\"trigger\" nz-icon [nzType]=\"isCollapsed ? 'menu-unfold' : 'menu-fold'\"\r\n        (click)=\"isCollapsed = !isCollapsed\"></i>\r\n      <div *ngIf=\"authService.userData as user\"><strong>{{user.email}}</strong>\r\n\r\n        <button nz-button nzType=\"primary\" (click)=\"authService.SignOut()\">Log out</button>\r\n\r\n      </div>\r\n    </nz-header>\r\n    <nz-content>\r\n      <nz-breadcrumb>\r\n      </nz-breadcrumb>\r\n      <div class=\"inner-content\">\r\n        <router-outlet name=\"content\"></router-outlet>\r\n      </div>\r\n    </nz-content>\r\n    <nz-footer>Damian Krecisz ©2020 Implement In Angular</nz-footer>\r\n  </nz-layout>\r\n</nz-layout>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/add-order/add-order.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/add-order/add-order.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersAddOrderAddOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n\n  <nz-form-item>\n    <nz-form-label [nzXs]=\"24\" [nzSm]=\"4\" nzFor=\"client\" >Client</nz-form-label>\n    <nz-form-control [nzXs]=\"24\" [nzSm]=\"20\" nzErrorTip=\"Please select client!\">\n      <nz-select id=\"client\" formControlName=\"client\" nzPlaceHolder=\"Select client\" >\n        <nz-option *ngFor=\"let client of clients;\" nzValue=\"{{client.clientName}}\" nzLabel=\"{{client.clientName}}\" ></nz-option>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item *ngFor=\"let control of listOfControl; let i = index\">\n    <nz-form-label [nzXs]=\"24\" [nzSm]=\"4\" *ngIf=\"i == 0\" [nzFor]=\"control.controlInstance\">Items </nz-form-label>\n    <nz-form-control [nzXs]=\"24\" [nzSm]=\"20\" [nzOffset]=\"i == 0 ? 0 : 4\"\n      nzErrorTip=\"Please select item to order.\">\n\n\n        <nz-select nzPlaceHolder=\"Select a option and change input text above\" class=\"passenger-input\"  [formControlName]=\"control.controlInstance\" [attr.id]=\"control.id\">\n          <nz-option *ngFor=\"let item of ItemsData;\" nzValue=\"{{item.product}}\" nzLabel=\"{{item.product}}\" ></nz-option>\n        </nz-select>\n\n\n      <i nz-icon nzType=\"minus-circle-o\" class=\"dynamic-delete-button\" (click)=\"removeField(control, $event)\"></i>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-control [nzXs]=\"{ span: 24, offset: 0 }\" [nzSm]=\"{ span: 20, offset: 4 }\">\n      <button nz-button nzBlock nzType=\"dashed\" class=\"add-button\" (click)=\"addField($event)\">\n        <i nz-icon nzType=\"plus\"></i>\n        Add new item\n      </button>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-control [nzXs]=\"{ span: 24, offset: 0 }\" [nzSm]=\"{ span: 20, offset: 4 }\">\n      <button nz-button nzBlock  nzType=\"default\">{{action}}</button>\n    </nz-form-control>\n  </nz-form-item>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div nz-row [nzGutter]=\"32\">\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\n    <button nz-button nzType=\"primary\" nzBlock (click)=\"showModalAdd()\">Add order</button>\n  </div>\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\n    <input nz-input placeholder=\"Search order by client or status\"  (ngModelChange)=\"search($event)\" />\n\n  </div>\n</div>\n\n<div nz-row>\n  <nz-table #basicTable [nzData]=\"listOfData\">\n    <thead>\n      <tr>\n        <th nzWidth=\"1%\">#</th>\n        <th>Client</th>\n        <th>Date of created</th>\n        <th>Status</th>\n        <th>Items</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of basicTable.data; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{ data.client }}</td>\n        <td>{{ data.dateOfCreated.seconds * 1000 | date:'dd/MM/yyyy' }}</td>\n        <td>{{ data.status }}\n\n\n        <td>\n          <div *ngFor=\"let item of data.items| keyvalue; let i = index\">\n            {{i+1}}: {{ item.value }}\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>\n\n\n<nz-modal [(nzVisible)]=\"isVisibleAdd\" nzTitle=\"Add new order\" (nzOnCancel)=\"handleAddCancel()\" (nzOnOk)=\"handleAddOk()\"\n  [nzOkLoading]=\"isOkAddLoading\">\n  <app-add-order (order)=\"getEmiter($event)\"></app-add-order>\n</nz-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/list-of-products.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/list-of-products.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsListOfProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div nz-row [nzGutter]=\"32\">\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\n    <button nz-button nzType=\"primary\" nzBlock (click)=\"showModal()\">Add item</button>\n  </div>\n  <div nz-col nzSpan=\"12\" class=\"gutter-row\">\n    <input nz-input placeholder=\"Search item by name or warehouse\" (ngModelChange)=\"search($event)\" />\n\n  </div>\n</div>\n\n<nz-table #editRowTable nzBordered [nzData]=\"listOfData\" nzTableLayout=\"fixed\">\n  <thead>\n    <tr>\n      <th nzWidth=\"1%\">#</th>\n      <th nzWidth=\"57%\">Name of product</th>\n      <th nzWidth=\"1%\">Quantity</th>\n      <th nzWidth=\"35%\">Warehouse</th>\n      <th nzWidth=\"10%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of editRowTable.data; let i = index\">\n      <ng-container *ngIf=\"!editCache[data.id].edit; else editTemplate\">\n        <td>{{ i+1 }} </td>\n        <td>{{ data.product }}</td>\n        <td>{{ data.qty }}</td>\n        <td>{{ data.warehouse }}</td>\n        <td><a (click)=\"startEdit(data.id)\">Edit</a> <a id=\"delete\" (click)=deleteItem(data.id)>Delete</a>\n        </td>\n      </ng-container>\n      <ng-template #editTemplate>\n        <td>{{ i+1 }}</td>\n        <td><input type=\"text\" nz-input [(ngModel)]=\"editCache[data.id].data.product\" /></td>\n        <td><input type=\"number\" nz-input [(ngModel)]=\"editCache[data.id].data.qty\" /></td>\n        <td><input type=\"text\" nz-input [(ngModel)]=\"editCache[data.id].data.warehouse\" /></td>\n        <td>\n          <a (click)=\"saveEdit(data.id)\" class=\"save\">Save</a>\n          <a nz-popconfirm nzTitle=\"Sure to cancel?\" (nzOnConfirm)=\"cancelEdit(data.id)\">Cancel</a>\n        </td>\n      </ng-template>\n    </tr>\n  </tbody>\n</nz-table>\n\n<!---->\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"Modal Title\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\"\n  [nzOkLoading]=\"isOkLoading\">\n\n  <form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\">\n\n    <nz-form-item>\n      <nz-form-control nzErrorTip=\"Please input product name!\">\n        <nz-input-group nzPrefixIcon=\"book\">\n          <input formControlName=\"product\" nz-input placeholder=\"Product\" />\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-control nzErrorTip=\"Please input quantity!\">\n        <nz-input-group nzPrefixIcon=\"calculator\">\n          <input formControlName=\"qty\" nz-input placeholder=\"Qty\" type=\"number\" />\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-control nzErrorTip=\"Please input warehouse!\">\n        <nz-input-group nzPrefixIcon=\"database\">\n          <input formControlName=\"warehouse\" nz-input placeholder=\"Warehouse\" />\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n\n  </form>\n\n</nz-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStatsStatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding:30px;\">\n    <div nz-row [nzGutter]=\"8\">\n      <div nz-col [nzSpan]=\"8\" >\n        <nz-card nzTitle=\"Total Clients\" style=\"font-size:2rem;\">\n          <p>{{totalClients}}</p>\n        </nz-card>\n      </div>\n      <div nz-col [nzSpan]=\"8\" >\n        <nz-card nzTitle=\"Total Items\" style=\"font-size:2rem;\">\n          <p>{{totalItems}}</p>\n        </nz-card>\n      </div>\n      <div nz-col [nzSpan]=\"8\" >\n        <nz-card nzTitle=\"Total Orders\" style=\"font-size:2rem;\">\n          <p>{{totalOrders}}</p>\n        </nz-card>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-login/user-login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-login/user-login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserLoginUserLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loginContainer\">\n  \n\n  <h1>Login to app</h1>\n  <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n    <nz-form-item>\n      <span>Login: test@test.com</span>\n      <nz-form-control nzErrorTip=\"Please input your username!\">\n        <nz-input-group nzPrefixIcon=\"user\">\n          <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"Username\" #userName />\n          \n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <span>Password: test123</span>\n      <nz-form-control nzErrorTip=\"Please input your Password!\">\n        <nz-input-group nzPrefixIcon=\"lock\">\n          <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" #userPassword />\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <label nz-checkbox formControlName=\"remember\">\n          <span>Remember me</span>\n        </label>\n        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\"\n          (click)=\"authService.SignIn(userName.value, userPassword.value)\">Log in</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/user-login/user-login.component */
    "./src/app/pages/user-login/user-login.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/authentication-guard.service */
    "./src/app/services/authentication-guard.service.ts");
    /* harmony import */


    var _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/clients/clients.component */
    "./src/app/pages/clients/clients.component.ts");
    /* harmony import */


    var _pages_products_list_of_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/products/list-of-products.component */
    "./src/app/pages/products/list-of-products.component.ts");
    /* harmony import */


    var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/orders/orders.component */
    "./src/app/pages/orders/orders.component.ts");
    /* harmony import */


    var _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/stats/stats.component */
    "./src/app/pages/stats/stats.component.ts");

    const routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/userLogin'
    }, {
      path: 'userLogin',
      component: _pages_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"]
    }, {
      path: 'dashboard',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_services_authentication_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [{
        path: '',
        component: _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_9__["StatsComponent"],
        outlet: "content"
      }, {
        path: 'stats',
        component: _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_9__["StatsComponent"],
        outlet: "content"
      }, {
        path: 'listOfClients',
        component: _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"],
        outlet: "content"
      }, {
        path: 'listOfProducts',
        component: _pages_products_list_of_products_component__WEBPACK_IMPORTED_MODULE_7__["ListOfProductsComponent"],
        outlet: "content"
      }, {
        path: 'listOfOrders',
        component: _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
        outlet: "content"
      }]
    }, {
      path: '**',
      redirectTo: '/userLogin'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout {\n  height: 100vh;\n}\n\n.menu-sidebar {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s, padding 0s;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.sidebar-logo img {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo h1 {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content {\n  margin: 24px;\n}\n\n.inner-content {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEYW1pYW4gS3LEmWNpc3pcXERlc2t0b3BcXFByb2pla3R5XFxQb3J0Zm9saW9cXEFuZ3VsYXJGaXJlYmFzZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4uYXBwLWxheW91dCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1lbnUtc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsMjEsNDEsLjM1KTtcclxufVxyXG5cclxuLmhlYWRlci10cmlnZ2VyIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyxwYWRkaW5nIDBzO1xyXG59XHJcblxyXG4udHJpZ2dlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMxODkwZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIGgxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsSGVsdmV0aWNhIE5ldWUsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxubnotaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDIxLDQxLC4wOCk7XHJcbn1cclxuXHJcbm56LWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjRweDtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmFwcC1sYXlvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWVudS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgMC4zNSk7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIHBhZGRpbmcgMHM7XG59XG5cbi50cmlnZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG5cbi5zaWRlYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMjEsIDQxLCAwLjA4KTtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.isCollapsed = false;
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icons-provider.module */
    "./src/app/icons-provider.module.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/locales/pl */
    "./node_modules/@angular/common/locales/pl.js");
    /* harmony import */


    var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _pages_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/user-login/user-login.component */
    "./src/app/pages/user-login/user-login.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/clients/clients.component */
    "./src/app/pages/clients/clients.component.ts");
    /* harmony import */


    var _pages_products_list_of_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/products/list-of-products.component */
    "./src/app/pages/products/list-of-products.component.ts");
    /* harmony import */


    var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/orders/orders.component */
    "./src/app/pages/orders/orders.component.ts");
    /* harmony import */


    var _pages_orders_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/orders/add-order/add-order.component */
    "./src/app/pages/orders/add-order/add-order.component.ts");
    /* harmony import */


    var _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/stats/stats.component */
    "./src/app/pages/stats/stats.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default.a);
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_15__["UserLoginComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_19__["ClientsComponent"], _pages_products_list_of_products_component__WEBPACK_IMPORTED_MODULE_20__["ListOfProductsComponent"], _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_21__["OrdersComponent"], _pages_orders_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_22__["AddOrderComponent"], _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_23__["StatsComponent"]],
      imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["pl_PL"]
      }, _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/icons-provider.module.ts":
  /*!******************************************!*\
    !*** ./src/app/icons-provider.module.ts ***!
    \******************************************/

  /*! exports provided: IconsProviderModule */

  /***/
  function srcAppIconsProviderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function () {
      return IconsProviderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ant-design/icons-angular/icons */
    "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");

    const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutline"]];
    let IconsProviderModule = class IconsProviderModule {};
    IconsProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NZ_ICONS"],
        useValue: icons
      }]
    })], IconsProviderModule);
    /***/
  },

  /***/
  "./src/app/pages/clients/clients.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/clients/clients.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesClientsClientsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  margin-bottom: 1%;\n}\n\n.editable-cell {\n  position: relative;\n  padding: 5px 12px;\n  cursor: pointer;\n}\n\n.editable-row:hover .editable-cell {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 11px;\n}\n\n#delete {\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50cy9DOlxcVXNlcnNcXERhbWlhbiBLcsSZY2lzelxcRGVza3RvcFxcUHJvamVrdHlcXFBvcnRmb2xpb1xcQW5ndWxhckZpcmViYXNlL3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50c1xcY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXRhYmxlLWNlbGwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZGl0YWJsZS1yb3c6aG92ZXIgLmVkaXRhYmxlLWNlbGwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gIH1cclxuICBcclxuI2RlbGV0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OjUlO1xyXG4gIH0iLCJidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLmVkaXRhYmxlLWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0YWJsZS1yb3c6aG92ZXIgLmVkaXRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweCAxMXB4O1xufVxuXG4jZGVsZXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/clients/clients.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/clients/clients.component.ts ***!
    \****************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppPagesClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase-crud.service */
    "./src/app/services/firebase-crud.service.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    let ClientsComponent = class ClientsComponent {
      constructor(firebaseService, modalService, fb, afs) {
        this.firebaseService = firebaseService;
        this.modalService = modalService;
        this.fb = fb;
        this.afs = afs;
        this.isVisible = false;
        this.addClientModal = false;
        this.isOkLoading = false;
        this.editCache = {};
        this.clientsCollecton = afs.collection('clients');
      }

      ngOnInit() {
        this.firebaseService.getClients().subscribe(data => {
          this.listOfData = data.map(e => {
            return Object.assign({
              id: e.payload.doc.id
            }, e.payload.doc.data());
          });
          this.updateEditCache();
        });
        this.validateForm = this.fb.group({
          clientName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          tax: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
      }

      deleteClient(id) {
        this.modalService.confirm({
          nzTitle: 'Are you sure delete this client?',
          nzOkText: 'Yes',
          nzOkType: 'warning',
          nzOnOk: () => this.firebaseService.deleteClient(id),
          nzCancelText: 'No',
          nzOnCancel: () => console.log('Cancel')
        });
      }

      startEdit(id) {
        this.editCache[id].edit = true;
      }

      cancelEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
          data: Object.assign({}, this.listOfData[index]),
          edit: false
        };
      }

      saveEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
        this.firebaseService.updateItem(this.editCache[id].data.id, this.editCache[id].data);
      }

      updateEditCache() {
        this.listOfData.forEach(item => {
          this.editCache[item.id] = {
            edit: false,
            data: Object.assign({}, item)
          };
        });
      }

      handleAddOk() {
        for (const i in this.validateForm.controls) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }

        this.isOkLoading = true;
        setTimeout(() => {
          this.isOkLoading = false;
        }, 500);

        if (this.validateForm.valid) {
          this.clientsCollecton.add(this.validateForm.value);
          this.validateForm.reset();
          this.addClientModal = false;
        }
      }

      handleCancel() {
        this.isVisible = false;
        this.addClientModal = false;
      }

      addNewClient() {
        this.addClientModal = true;
      }

      search(e) {
        if (e == '') {
          this.firebaseService.getClients().subscribe(data => {
            this.listOfData = data.map(e => {
              return Object.assign({
                id: e.payload.doc.id
              }, e.payload.doc.data());
            });
          });
        } else {
          this.listOfData = this.listOfData.filter(item => item.clientName.indexOf(e) !== -1);
        }
      }

    };

    ClientsComponent.ctorParameters = () => [{
      type: src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseCrudService"]
    }, {
      type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
    }];

    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clients.component.scss */
      "./src/app/pages/clients/clients.component.scss")).default]
    })], ClientsComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nz-layout {\n  width: 100vw;\n  height: 100vh;\n}\n\n.trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n\n.trigger:hover {\n  color: #1890ff;\n}\n\nnz-header {\n  background: #fff;\n  padding: 0;\n}\n\nnz-content {\n  margin: 0 16px;\n}\n\nnz-breadcrumb {\n  margin: 16px 0;\n}\n\n.inner-content {\n  padding: 24px;\n  background: #fff;\n  min-height: 360px;\n}\n\nnz-footer {\n  text-align: center;\n}\n\nnz-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nnz-header button {\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcRGFtaWFuIEtyxJljaXN6XFxEZXNrdG9wXFxQcm9qZWt0eVxcUG9ydGZvbGlvXFxBbmd1bGFyRmlyZWJhc2Uvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0VKOztBRERJO0VBQ0ksWUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnRyaWdnZXIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi50cmlnZ2VyOmhvdmVyIHtcclxuICBjb2xvcjogIzE4OTBmZjtcclxufVxyXG5cclxuXHJcbm56LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5uei1jb250ZW50IHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxubnotYnJlYWRjcnVtYiB7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogMzYwcHg7XHJcbn1cclxuXHJcbm56LWZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm56LWhlYWRlcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46MXJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsIm56LWxheW91dCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRyaWdnZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuLnRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cblxubnotaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMDtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG5uei1icmVhZGNydW1iIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMzYwcHg7XG59XG5cbm56LWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubnotaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbm56LWhlYWRlciBidXR0b24ge1xuICBtYXJnaW46IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    let DashboardComponent = class DashboardComponent {
      constructor(authService) {
        this.authService = authService;
        this.isCollapsed = false;
      }

      ngOnInit() {}

    };

    DashboardComponent.ctorParameters = () => [{
      type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/orders/add-order/add-order.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/orders/add-order/add-order.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersAddOrderAddOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dynamic-delete-button {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.dynamic-delete-button:hover {\n  color: #777;\n}\n\n.passenger-input {\n  width: 80%;\n  margin-right: 8px;\n}\n\n[nz-select] {\n  width: 80%;\n  margin-right: 8px;\n}\n\n[nz-form] {\n  max-width: 600px;\n}\n\n.passenger-input {\n  width: 91%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL2FkZC1vcmRlci9DOlxcVXNlcnNcXERhbWlhbiBLcsSZY2lzelxcRGVza3RvcFxcUHJvamVrdHlcXFBvcnRmb2xpb1xcQW5ndWxhckZpcmViYXNlL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJzXFxhZGQtb3JkZXJcXGFkZC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXJzL2FkZC1vcmRlci9hZGQtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9hZGQtb3JkZXIvYWRkLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR5bmFtaWMtZGVsZXRlLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5keW5hbWljLWRlbGV0ZS1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ucGFzc2VuZ2VyLWlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG5bbnotc2VsZWN0XSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbn1cclxuXHJcbltuei1mb3JtXSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG4ucGFzc2VuZ2VyLWlucHV0e1xyXG4gIHdpZHRoOjkxJTtcclxufSIsIi5keW5hbWljLWRlbGV0ZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uZHluYW1pYy1kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5wYXNzZW5nZXItaW5wdXQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuW256LXNlbGVjdF0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuW256LWZvcm1dIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLnBhc3Nlbmdlci1pbnB1dCB7XG4gIHdpZHRoOiA5MSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/orders/add-order/add-order.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/orders/add-order/add-order.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddOrderComponent */

  /***/
  function srcAppPagesOrdersAddOrderAddOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function () {
      return AddOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase-crud.service */
    "./src/app/services/firebase-crud.service.ts");

    let AddOrderComponent = class AddOrderComponent {
      constructor(fb, firebaseService) {
        this.fb = fb;
        this.firebaseService = firebaseService;
        this.listOfControl = [];
        this.order = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.action = "Save";
      }

      addField(e) {
        if (e) {
          e.preventDefault();
        }

        const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
        const control = {
          id,
          controlInstance: "item".concat(id)
        };
        const index = this.listOfControl.push(control);
        this.validateForm.addControl(this.listOfControl[index - 1].controlInstance, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
      }

      removeField(i, e) {
        e.preventDefault();

        if (this.listOfControl.length > 1) {
          const index = this.listOfControl.indexOf(i);
          this.listOfControl.splice(index, 1);
          this.validateForm.removeControl(i.controlInstance);
        }
      }

      submitForm() {
        for (const i in this.validateForm.controls) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }

        if (this.validateForm.status === "VALID") {
          this.action = "Saved";
          this.order.emit(this.validateForm.value);
        } else {
          this.action = "Save";
        }
      }

      ngOnInit() {
        this.validateForm = this.fb.group({
          client: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.addField();
        this.firebaseService.getClients().subscribe(data => {
          this.clients = data.map(e => {
            return Object.assign({
              id: e.payload.doc.id
            }, e.payload.doc.data());
          });
        });
        this.firebaseService.getItems().subscribe(data => {
          this.ItemsData = data.map(e => {
            return Object.assign({
              id: e.payload.doc.id
            }, e.payload.doc.data());
          });
        });
      }

    };

    AddOrderComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseCrudService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddOrderComponent.prototype, "order", void 0);
    AddOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/add-order/add-order.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-order.component.scss */
      "./src/app/pages/orders/add-order/add-order.component.scss")).default]
    })], AddOrderComponent);
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/orders/orders.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "[nz-button] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n\nnz-select {\n  margin: 0 8px 10px 0;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL0M6XFxVc2Vyc1xcRGFtaWFuIEtyxJljaXN6XFxEZXNrdG9wXFxQcm9qZWt0eVxcUG9ydGZvbGlvXFxBbmd1bGFyRmlyZWJhc2Uvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1idXR0b25dIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxufVxyXG5cclxubnotc2VsZWN0IHtcclxuICBtYXJnaW46IDAgOHB4IDEwcHggMDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuIiwiW256LWJ1dHRvbl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxubnotc2VsZWN0IHtcbiAgbWFyZ2luOiAwIDhweCAxMHB4IDA7XG4gIHdpZHRoOiAxMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/orders/orders.component.ts ***!
    \**************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppPagesOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase-crud.service */
    "./src/app/services/firebase-crud.service.ts");

    let OrdersComponent = class OrdersComponent {
      constructor(afs, firebaseService) {
        this.afs = afs;
        this.firebaseService = firebaseService;
        this.isVisibleEdit = false;
        this.isVisibleAdd = false;
        this.isOkEditLoading = false;
        this.isOkAddLoading = false;
        this.now = new Date();
        this.listOfData = [];
        this.productsCollecton = afs.collection('orders');
      }

      ngOnInit() {
        this.firebaseService.getOrders().subscribe(data => {
          this.listOfData = data.map(e => {
            return Object.assign({
              id: e.payload.doc.id
            }, e.payload.doc.data());
          });
        });
      }

      showModalAdd() {
        this.isVisibleAdd = true;
      }

      handleEditOk() {
        this.isOkEditLoading = true;
        setTimeout(() => {
          this.isVisibleEdit = false;
          this.isOkEditLoading = false;
        }, 500);
      }

      handleAddOk() {
        this.isOkAddLoading = true;
        setTimeout(() => {
          this.isVisibleAdd = false;
          this.isOkAddLoading = false;
        }, 500);
        this.firebaseService.createOrder(this.model);
      }

      handleEditCancel() {
        this.isVisibleEdit = false;
      }

      handleAddCancel() {
        this.isVisibleAdd = false;
      }

      getEmiter(order) {
        this.model = {
          client: order.client,
          dateOfCreated: this.now,
          status: 'new',
          items: order
        };
        delete this.model.items['client'];
      }

      search(e) {
        if (e == '') {
          this.firebaseService.getOrders().subscribe(data => {
            this.listOfData = data.map(e => {
              return Object.assign({
                id: e.payload.doc.id
              }, e.payload.doc.data());
            });
          });
        } else {
          this.listOfData = this.listOfData.filter(item => item.client.indexOf(e) !== -1 || item.status.indexOf(e) !== -1);
        }
      }

    };

    OrdersComponent.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }, {
      type: src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseCrudService"]
    }];

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/pages/orders/orders.component.scss")).default]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/list-of-products.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/products/list-of-products.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsListOfProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  margin-bottom: 1%;\n}\n\n.editable-cell {\n  position: relative;\n  padding: 5px 12px;\n  cursor: pointer;\n}\n\n.editable-row:hover .editable-cell {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 11px;\n}\n\n#delete {\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXFVzZXJzXFxEYW1pYW4gS3LEmWNpc3pcXERlc2t0b3BcXFByb2pla3R5XFxQb3J0Zm9saW9cXEFuZ3VsYXJGaXJlYmFzZS9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RzXFxsaXN0LW9mLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9saXN0LW9mLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2xpc3Qtb2YtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4uZWRpdGFibGUtY2VsbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVkaXRhYmxlLXJvdzpob3ZlciAuZWRpdGFibGUtY2VsbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNHB4IDExcHg7XHJcbn1cclxuI2RlbGV0ZXtcclxuICBtYXJnaW4tbGVmdDo1JTtcclxufSIsImJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4uZWRpdGFibGUtY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXRhYmxlLXJvdzpob3ZlciAuZWRpdGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDExcHg7XG59XG5cbiNkZWxldGUge1xuICBtYXJnaW4tbGVmdDogNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/products/list-of-products.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/products/list-of-products.component.ts ***!
    \**************************************************************/

  /*! exports provided: ListOfProductsComponent */

  /***/
  function srcAppPagesProductsListOfProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfProductsComponent", function () {
      return ListOfProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firebase-crud.service */
    "./src/app/services/firebase-crud.service.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

    let ListOfProductsComponent = class ListOfProductsComponent {
      constructor(fb, afs, firebaseService, modalService) {
        this.fb = fb;
        this.afs = afs;
        this.firebaseService = firebaseService;
        this.modalService = modalService;
        this.editCache = {};
        this.listOfData = [];
        this.isVisible = false;
        this.isOkLoading = false;
        this.productsCollecton = afs.collection('items');
      }

      ngOnInit() {
        this.validateForm = this.fb.group({
          product: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          qty: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          warehouse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.firebaseService.getItems().subscribe(data => {
          this.listOfData = data.map(e => {
            return Object.assign({
              id: e.payload.doc.id
            }, e.payload.doc.data());
          });
          this.updateEditCache();
        });
      }

      startEdit(id) {
        this.editCache[id].edit = true;
      }

      deleteItem(id) {
        this.modalService.confirm({
          nzTitle: 'Are you sure delete this item?',
          nzOkText: 'Yes',
          nzOkType: 'warning',
          nzOnOk: () => this.firebaseService.deleteItem(id),
          nzCancelText: 'No',
          nzOnCancel: () => console.log('Cancel')
        });
      }

      cancelEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
          data: Object.assign({}, this.listOfData[index]),
          edit: false
        };
      }

      saveEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
        this.firebaseService.updateItem(this.editCache[id].data.id, this.editCache[id].data);
      }

      updateEditCache() {
        this.listOfData.forEach(item => {
          this.editCache[item.id] = {
            edit: false,
            data: Object.assign({}, item)
          };
        });
      }

      showModal() {
        this.isVisible = true;
      }

      handleOk() {
        this.isOkLoading = true;
        setTimeout(() => {
          this.isVisible = false;
          this.isOkLoading = false;
        }, 500);
        this.productsCollecton.add(this.validateForm.value);
      }

      handleCancel() {
        this.isVisible = false;
      }

      search(e) {
        if (e == '') {
          this.firebaseService.getItems().subscribe(data => {
            this.listOfData = data.map(e => {
              return Object.assign({
                id: e.payload.doc.id
              }, e.payload.doc.data());
            });
          });
        } else {
          this.listOfData = this.listOfData.filter(item => item.product.indexOf(e) !== -1 || item.warehouse.indexOf(e) !== -1);
        }
      }

    };

    ListOfProductsComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
    }, {
      type: src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseCrudService"]
    }, {
      type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]
    }];

    ListOfProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-of-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-of-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/list-of-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-of-products.component.scss */
      "./src/app/pages/products/list-of-products.component.scss")).default]
    })], ListOfProductsComponent);
    /***/
  },

  /***/
  "./src/app/pages/stats/stats.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/stats/stats.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStatsStatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdHMvQzpcXFVzZXJzXFxEYW1pYW4gS3LEmWNpc3pcXERlc2t0b3BcXFByb2pla3R5XFxQb3J0Zm9saW9cXEFuZ3VsYXJGaXJlYmFzZS9zcmNcXGFwcFxccGFnZXNcXHN0YXRzXFxzdGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0cy9zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0iLCJwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/stats/stats.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/stats/stats.component.ts ***!
    \************************************************/

  /*! exports provided: StatsComponent */

  /***/
  function srcAppPagesStatsStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsComponent", function () {
      return StatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase-crud.service */
    "./src/app/services/firebase-crud.service.ts");

    let StatsComponent = class StatsComponent {
      constructor(firebaseService) {
        this.firebaseService = firebaseService;
      }

      ngOnInit() {
        this.firebaseService.getItems().subscribe(data => {
          this.totalItems = data.length;
        });
        this.firebaseService.getOrders().subscribe(data => {
          this.totalOrders = data.length;
        });
        this.firebaseService.getClients().subscribe(data => {
          this.totalClients = data.length;
        });
      }

    };

    StatsComponent.ctorParameters = () => [{
      type: src_app_services_firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseCrudService"]
    }];

    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stats.component.scss */
      "./src/app/pages/stats/stats.component.scss")).default]
    })], StatsComponent);
    /***/
  },

  /***/
  "./src/app/pages/user-login/user-login.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/user-login/user-login.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserLoginUserLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-form {\n  max-width: 100%;\n}\n\n.login-form-button {\n  width: 100%;\n}\n\n.loginContainer {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nform {\n  width: 30vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1sb2dpbi9DOlxcVXNlcnNcXERhbWlhbiBLcsSZY2lzelxcRGVza3RvcFxcUHJvamVrdHlcXFBvcnRmb2xpb1xcQW5ndWxhckZpcmViYXNlL3NyY1xcYXBwXFxwYWdlc1xcdXNlci1sb2dpblxcdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubG9naW5Db250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5mb3Jte1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG59IiwiLmxvZ2luLWZvcm0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW5Db250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDMwdnc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/user-login/user-login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/user-login/user-login.component.ts ***!
    \**********************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppPagesUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    let UserLoginComponent = class UserLoginComponent {
      constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
      }

      submitForm() {
        for (const i in this.validateForm.controls) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }
      }

      ngOnInit() {
        this.validateForm = this.fb.group({
          userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          remember: [true]
        });
      }

    };

    UserLoginComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }];

    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-login/user-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-login.component.scss */
      "./src/app/pages/user-login/user-login.component.scss")).default]
    })], UserLoginComponent);
    /***/
  },

  /***/
  "./src/app/services/authentication-guard.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/authentication-guard.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthenticationGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
          this.router.navigate(['sign-in']);
        }

        return true;
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AuthenticationService = class AuthenticationService {
      constructor(afs, afAuth, router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      }

      SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(result => {
          this.isLoggedIn = true;
          this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          });
          this.SetUserData(result.user);
        }).catch(error => {
          this.isLoggedIn = false;
          window.alert(error.message);
        });
      }

      SetUserData(user) {
        const userRef = this.afs.doc("users/".concat(user.uid));
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
          merge: true
        });
      }

      SignOut() {
        return this.afAuth.auth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['userLogin']);
        });
      }

    };

    AuthenticationService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
    }, {
      type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/firebase-crud.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/firebase-crud.service.ts ***!
    \***************************************************/

  /*! exports provided: FirebaseCrudService */

  /***/
  function srcAppServicesFirebaseCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseCrudService", function () {
      return FirebaseCrudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    let FirebaseCrudService = class FirebaseCrudService {
      constructor(db) {
        this.db = db;
      }

      getClients() {
        return this.db.collection('clients').snapshotChanges();
      }

      createClient(client) {
        return this.db.collection('policies').add(client);
      }

      updateClient(client) {
        this.db.doc('clients/' + client.id).update(client);
      }

      deleteClient(policyId) {
        this.db.doc('clients/' + policyId).delete();
      }

      getItems() {
        return this.db.collection('items').snapshotChanges();
      }

      updateItem(itemId, value) {
        return this.db.collection('items').doc(itemId).set(value);
      }

      deleteItem(itemId) {
        this.db.doc('items/' + itemId).delete();
      }

      getOrders() {
        return this.db.collection('orders').snapshotChanges();
      }

      createOrder(order) {
        return this.db.collection('orders').add(order);
      }

      updateStatusOrder(itemId, value) {
        return this.db.collection('orders').doc(itemId).set(value);
      }

    };

    FirebaseCrudService.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }];

    FirebaseCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebaseCrudService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyD5gF4BWpcamXEuND93HuXY6BeRH6GstAc",
        authDomain: "angularfirebasecrud-7c726.firebaseapp.com",
        databaseURL: "https://angularfirebasecrud-7c726.firebaseio.com",
        projectId: "angularfirebasecrud-7c726",
        storageBucket: "angularfirebasecrud-7c726.appspot.com",
        messagingSenderId: "499153951315",
        appId: "1:499153951315:web:e3d5b500b64c35728684a6",
        measurementId: "G-C2WL35PQZ9"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Damian Kręcisz\Desktop\Projekty\Portfolio\AngularFirebase\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map