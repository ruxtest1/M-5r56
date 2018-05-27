webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalFilterPage = (function () {
    function ModalFilterPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        // tabs
        this.tabFilter = __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__["a" /* TabFilterPage */];
        this.tabAttribute = __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__["a" /* TabAttributePage */];
        this.selectedIndex = 0;
        if (navParams.get('tabName') == 'attribute') {
            this.selectedIndex = 1;
        }
    }
    ModalFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-filter',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\modal-filter\modal-filter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs class="modal-filter" color="primary" tabbarPlacement="top" [selectedIndex]="selectedIndex" #filterTabs>\n  <ion-tab tabTitle="FILTER" [root]="tabFilter"></ion-tab>\n  <ion-tab tabTitle="ATTRIBUTES" [root]="tabAttribute"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\modal-filter\modal-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ModalFilterPage);
    return ModalFilterPage;
}());

//# sourceMappingURL=modal-filter.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_categories__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService() {
        this.categories = __WEBPACK_IMPORTED_MODULE_1__mock_categories__["a" /* CATEGORIES */];
    }
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.getItem = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === parseInt(id)) {
                return this.categories[i];
            }
        }
        return null;
    };
    CategoryService.prototype.remove = function (item) {
        this.categories.splice(this.categories.indexOf(item), 1);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// import {VideoPage} from "../video/video";
// import {CategorySubPage} from "../category-sub/category-sub";
// import {ProductCartPage} from "../product-cart/product-cart";
// import {ProductSearchPage} from "../product-search/product-search";
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, navParams, apiService, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.lang = 'th';
    }
    CategoriesPage.prototype.ngOnInit = function () {
        this.fnGetCatGroup();
    };
    CategoriesPage.prototype.fnGetCatGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('get cat');
                        // if (this.shareService.list_category_main !== null) {
                        //   this.list_category = this.shareService.list_category_main;
                        // } else {
                        _a = this;
                        return [4 /*yield*/, this.apiService.get(this.api.category.catMain)];
                    case 1:
                        // if (this.shareService.list_category_main !== null) {
                        //   this.list_category = this.shareService.list_category_main;
                        // } else {
                        _a.list_category = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoriesPage.prototype.fnGOToCart = function () {
        // this.navCtrl.push(ProductCartPage);
    };
    // go to search page
    CategoriesPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    CategoriesPage.prototype.fnGoToCate = function (cate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */], {
            id: cate.id,
            name: this.apiService.fnLang(cate, 'name'),
        });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\categories\categories.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>{{ \'CATEGORY\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goToSearch()">\n                <ion-icon name="search"></ion-icon>\n            </button>\n            <!--<button ion-button icon-only (click)="fnGOToCart()">-->\n                <!--&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="ios-cart"></ion-icon>-->\n                <!--<span class="badge"> {{ shareService.count_product }} </span>-->\n            <!--</button>-->\n            <button ion-button icon-only (click)="fnGOToCart()" *ngIf="shareService.open_add_cart">\n                <ion-icon name="cart"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <!--<ion-grid>-->\n        <!--<ion-row *ngFor="let cate of list_category" (click)="goToDetail(cate);" class="border-bottom">-->\n            <!--<ion-col col-3>-->\n                <!--<img src="{{apiService.fnBuildImg(cate, \'image_icon\')}}" width="60">-->\n            <!--</ion-col>-->\n            <!--<ion-col col-9 align="center">-->\n                <!--<h3>{{apiService.fnLang(cate, \'name\')}}</h3>-->\n            <!--</ion-col>-->\n        <!--</ion-row>-->\n    <!--</ion-grid>-->\n    <!--<ion-card>-->\n        <!--<ion-list class="cat-list">-->\n            <!--<ion-row>-->\n                <!--<ion-col col-3 (click)="goToDetail(cate)" *ngFor="let cate of list_category">-->\n                    <!--<img src="{{apiService.fnBuildImg(cate, \'image_icon\')}}" alt="">-->\n                    <!--<div text-center>{{apiService.fnLang(cate, \'name\')}}</div>-->\n                <!--</ion-col>-->\n            <!--</ion-row>-->\n        <!--</ion-list>-->\n    <!--</ion-card>-->\n\n    <ion-grid>\n        <ion-row *ngFor="let cate of list_category" (click)="fnGoToCate(cate);" class="border-bottom">\n            <ion-col col-3>\n                <img src="{{apiService.fnBuildImg(cate, \'image_icon\')}}" style="width: 90%">\n            </ion-col>\n            <ion-col col-9 class="margin-auto">\n                <h2 class="font-blue font-bold">{{apiService.fnLang(cate, \'name\')}}\n                    ({{ cate.count_product | number }})\n                </h2>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!--<ion-list class="list-no-border">-->\n        <!--<ion-item *ngFor="let category of list_category" (click)="fnGoToCate(category)">-->\n            <!--{{ apiService.fnLang(category, \'name\') }} ({{ category.count_product | number }})-->\n        <!--</ion-item>-->\n    <!--</ion-list>-->\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_product_category_product__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import {ModalFilterPage} from "../modal-filter/modal-filter";







/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(nav, itemService, categoryService, modalCtrl, navParams, apiService, shareService, actionSheetCtrl) {
        this.nav = nav;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = __WEBPACK_IMPORTED_MODULE_8__app_app_constant__["a" /* DEFAULT */].config;
        this.countProduct = 0;
        this.isProductNotFound = true;
        this.lang = 'th';
        this.page = 0;
        this.limit = 10;
        this.isMax = false;
        this.scrollAmount = 0;
        this.timeScroll = null;
        this.list_category = [];
        // sort by
        this.sortBy = 'Best Match';
        // get list items of a category as sample
        this.items = itemService.getByCategory(1);
        // set category info
        this.category = categoryService.getItem(1);
    }
    CategoryPage.prototype.ngOnInit = function () {
        this.main_id = this.navParams.get('id');
        this.title = this.navParams.get('name');
        this.fnGetCatGroup();
    };
    CategoryPage.prototype.fnGetCatGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.get(this.api.category.catSub, { main_id: this.main_id })];
                    case 1:
                        _a.list_category = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // get discount percent
    CategoryPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // view a item
    CategoryPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // view cart
    CategoryPage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    CategoryPage.prototype.goToDetail = function (cate) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__category_product_category_product__["a" /* CategoryProductPage */], {
            id: cate.id,
            name: this.apiService.fnLang(cate, 'name'),
        });
    };
    // go to search page
    CategoryPage.prototype.goToSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\category\category.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="goToCart()" *ngIf="shareService.open_add_cart">\n        &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--<ion-list class="list-no-border">-->\n    <!--<ion-item *ngFor="let category of list_category" (click)="goToDetail(category)">-->\n      <!--{{ apiService.fnLang(category, \'name\') }} ({{ category.count_product | number }})-->\n    <!--</ion-item>-->\n  <!--</ion-list>-->\n\n  <ion-grid class="list-no-border">\n    <ion-row *ngFor="let cate of list_category" (click)="goToDetail(cate);" class="border-bottom">\n      <ion-col col-3>\n        <img src="{{apiService.fnBuildImg(cate, \'image_icon\')}}" style="width: 90%">\n      </ion-col>\n      <ion-col col-9 class="margin-auto">\n        <h2 class="font-blue font-bold">{{apiService.fnLang(cate, \'name\')}}\n          ({{ cate.count_product | number }})\n        </h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_7__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(nav, cartService) {
        this.nav = nav;
        this.cartService = cartService;
        // set cart data
        this.cart = cartService.getAll();
    }
    // remove item
    CartPage.prototype.remove = function (itemIndex, sellerIndex) {
        this.cart.sellers[sellerIndex].items.splice(itemIndex, 1);
    };
    // place order
    CartPage.prototype.buy = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__["a" /* OrderConfirmPage */]);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\cart\cart.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n  <!--Choose shipping location-->\n  <div class="card">\n    <ion-item class="no-border">\n      <ion-label>Ship to</ion-label>\n      <ion-select>\n        <ion-option value="">Singapore</ion-option>\n        <ion-option value="vn">Vietnam</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n\n  <div class="card" margin-top *ngFor="let seller of cart.sellers; let sellerIndex = index"\n       [hidden]="!seller.items.length">\n    <div class="card-header" padding>\n      Seller: {{ seller.name }}\n    </div>\n\n    <ion-list class="list-full-border" no-margin>\n      <ion-item class="product" *ngFor="let item of seller.items; let i = index">\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}">\n        </ion-thumbnail>\n        <!--item\'s information-->\n        <div>\n          <div text-wrap>{{ item.name }}</div>\n          <div class="text-sm">\n            <span ion-text color="gray">{{ item.options.join(\',\') }}</span>\n          </div>\n          <div padding-bottom>\n            <span class="pull-right">{{ item.price | currency:\'USD\':true }}</span>\n            <div class="clear"></div>\n          </div>\n          <div>\n            <div class="input-qty">\n            <span class="btn">\n              <ion-icon name="ios-remove"></ion-icon>\n            </span>\n              <input type="text" [(ngModel)]="item.quantity">\n              <span class="btn">\n              <ion-icon name="ios-add"></ion-icon>\n            </span>\n              <div class="clear"></div>\n            </div>\n            <div class="pull-right bottom-info text-lg trash-btn">\n              <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(i, sellerIndex)"></ion-icon>\n              <div class="clear"></div>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n\n\n    <div class="card-footer" padding>\n      <div>\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n        <span class="pull-right" ion-text color="gray">{{ seller.subtotal | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n        <span class="pull-right" ion-text color="gray">{{ seller.shipping | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Total</span>\n        <span class="pull-right bold" ion-text color="danger">{{ seller.total | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n\n  <!--Total price-->\n  <div class="card" margin-top>\n    <div class="card-footer" padding>\n      <div>\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n        <span class="pull-right" ion-text color="gray">{{ cart.subtotal | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n        <span class="pull-right" ion-text color="gray">{{ cart.shipping | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer class="cart-footer" padding>\n  <ion-title>\n    <span ion-text color="gray">Total</span>\n    <br/>\n    <span class="bold" ion-text color="danger">{{ cart.total | currency:\'USD\':true }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="buy()" color="danger">\n      BUY ALL\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_carts__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService() {
        this.carts = __WEBPACK_IMPORTED_MODULE_1__mock_carts__["a" /* CARTS */];
    }
    CartService.prototype.getAll = function () {
        return this.carts;
    };
    CartService.prototype.getItem = function (id) {
        for (var i = 0; i < this.carts.length; i++) {
            if (this.carts[i].id === parseInt(id)) {
                return this.carts[i];
            }
        }
        return null;
    };
    CartService.prototype.remove = function (item) {
        this.carts.splice(this.carts.indexOf(item), 1);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the VendorRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorRegisterPage = (function () {
    function VendorRegisterPage(navCtrl, navParams, shareService, apiService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.api = __WEBPACK_IMPORTED_MODULE_5__app_app_constant__["a" /* DEFAULT */].config;
        this.lang = 'th';
        this.formErrors = {
            'name_th': '',
            'name_en': '',
            'email': '',
            'phone': '',
            'image_card_no_path': '',
            'image_front_store_path': '',
        };
        this.validationMessages = {
            'name_th': {
                'required': 'กรุณากรอก ชื่อ-นามสกุล',
                'minlength': 'ชื่อต้องมีความยาวมากกว่า 4 ตัวอักษร',
            },
            'email': {
                'required': 'กรุณากรอก อีเมล',
                'email': 'รูปแบบอีเมลไม่ถูกต้อง'
            },
            'phone': {
                'required': 'กรุณากรอกเบอร์โทร'
            },
            'image_card_no_path': {
                'required': 'กรุณาเลือกรูปบัตรประชาชน'
            },
            'image_front_store_path': {
                'required': 'กรุณาเลือกรูปหน้าร้าน'
            }
        };
        this.image_card_no_path = '';
        this.image_front_store_path = [];
        this.file_certificate = [];
        this.urlUpload = '';
        this.urlUploadFile = '';
        this.disableBtn = false;
        this.startValidate = false;
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
        this.hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
        this.lang = this.shareService.lang;
        if (this.lang !== 'th') {
            this.validationMessages = {
                'name_th': {
                    'required': 'Name is required.',
                    'minlength': 'Name must be at least 4 characters long.',
                },
                'email': {
                    'required': 'Email is required.',
                    'email': 'Email is not valid'
                },
                'phone': {
                    'required': 'Phone is required.'
                },
                'image_card_no_path': {
                    'required': 'Please select image card id no.'
                },
                'image_front_store_path': {
                    'required': 'Please select image front store.'
                },
            };
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.fnBuildAPIUrl(this.api.vendor.image.upload)];
                    case 1:
                        _a.urlUpload = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.apiService.fnBuildAPIUrl(this.api.vendor.file.upload)];
                    case 2:
                        _b.urlUploadFile = _c.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    VendorRegisterPage.prototype.ngOnInit = function () {
        this.buildForm(this.lang);
    };
    VendorRegisterPage.prototype.buildForm = function (lang) {
        var _this = this;
        if (lang === 'th') {
            this.registerData = this.formBuilder.group({
                'company_name_th': [''],
                'name_th': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)]],
                'phone': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
                'line_id': [''],
                'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
                'address_th': [''],
                'city_th': [''],
                'file_certificate': [''],
                'image_card_no_path': [''],
                'image_front_store_path': [''],
            });
            this.registerData.valueChanges.subscribe(function (data) { return _this.onValueChanged(_this.registerData.controls); });
            // this.onValueChanged();
        }
        else {
            this.registerDataEN = this.formBuilder.group({
                'company_name_en': [''],
                'name_en': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)]],
                'phone': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
                'line_id': [''],
                'email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
                'address_en': [''],
                'city_en': [''],
                'file_certificate': [''],
                'image_card_no_path': [''],
                'image_front_store_path': [''],
            });
            this.registerDataEN.valueChanges.subscribe(function (data) { return _this.onValueChanged(_this.registerDataEN.controls); });
            // this.onValueChanged();
        }
        // this.registerData = new FormGroup({
        //     'name': new FormControl(this.hero.name, [
        //         Validators.required,
        //         Validators.minLength(4),
        //         forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        //     ]),
        //     'alterEgo': new FormControl(this.hero.alterEgo),
        //     'power': new FormControl(this.hero.power, Validators.required)
        // });
        var c = this;
        setTimeout(function () {
            c.startValidate = true;
        }, 100);
    };
    VendorRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorRegisterPage');
    };
    VendorRegisterPage.prototype.fnPostData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.apiService.post(this.api.vendor.create, data)];
                    case 1:
                        res = _a.sent();
                        console.log('res:', res);
                        this.apiService.showSuccessTranslate('THANK_YOU_FOR_REGISTER');
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _a.sent();
                        this.apiService.showErrorTranslate('SAVE_DATA_FAIL');
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VendorRegisterPage.prototype.fnValidateImg = function () {
        var inValid = false;
        var cardIDNo = this.image_card_no_path;
        var imgFront = this.image_front_store_path.length;
        if (!cardIDNo) {
            this.formErrors.image_card_no_path = this.validationMessages.image_card_no_path.required;
            inValid = true;
        }
        else {
            this.formErrors.image_card_no_path = '';
        }
        if (!imgFront) {
            this.formErrors.image_front_store_path = this.validationMessages.image_front_store_path.required;
            inValid = true;
        }
        else {
            this.formErrors.image_front_store_path = '';
        }
        return inValid;
    };
    VendorRegisterPage.prototype.fnSendData = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var invalidImg, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onValueChanged(form.control.controls);
                        console.log(form.control);
                        invalidImg = this.fnValidateImg();
                        if (!(form.invalid || invalidImg)) return [3 /*break*/, 1];
                        this.apiService.showErrorTranslate('PLEASE_CHECK_INPUT');
                        return [3 /*break*/, 3];
                    case 1:
                        data = form.control.value;
                        return [4 /*yield*/, this.fnPostData(data)];
                    case 2:
                        res = _a.sent();
                        if (res) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // isValid(field: string) {
    //   let formField = this.registerData.find(field);
    //   return formField.valid || formField.pristine;
    // }
    VendorRegisterPage.prototype.onValueChanged = function (data) {
        console.log('data:', data);
        // const form = this.lang === 'th' ? this.registerData: this.registerDataEN;
        //   console.log('form:', form)
        console.log('startValidate:', this.startValidate);
        if (!data || !this.startValidate) {
            return;
        }
        // if (!form) {
        //   return;
        // }
        // if (form.pristine) {
        //   return;
        // }
        // if (!form.dirty) {
        //   return;
        // }
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = data[field];
            if (control /*&& form.dirty && !form.valid*/) {
                var messages = this.validationMessages[field];
                var err = [];
                for (var key in control.errors) {
                    err.push(messages[key]);
                }
                this.formErrors[field] = err.join(', ');
            }
        }
    };
    VendorRegisterPage.prototype.nameValidator = function (control) {
        if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
            return { invalidName: true };
        }
    };
    VendorRegisterPage.prototype.phoneValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return { invalidPhone: true };
            }
        }
    };
    VendorRegisterPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
            return { invalidEmail: true };
        }
    };
    Object.defineProperty(VendorRegisterPage.prototype, "name", {
        get: function () {
            return this.heroForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendorRegisterPage.prototype, "power", {
        get: function () {
            return this.heroForm.get('power');
        },
        enumerable: true,
        configurable: true
    });
    VendorRegisterPage.prototype.fnDisableBtn = function (e) {
        console.log('start upload:', e);
        this.disableBtn = true;
    };
    VendorRegisterPage.prototype.uploadImgError = function (e) {
        console.log('upload err:', e);
        this.disableBtn = false;
        console.log(e);
    };
    VendorRegisterPage.prototype.fnUploadCardNo = function (e) {
        console.log('upload success:', e);
        this.disableBtn = false;
        var img = this.apiService.fnGetImgUrl(e, this.api.vendor.image.view);
        this.image_card_no_path = img.url;
        this.apiService.showSuccessTranslate('UPLOAD_IMAGE_SUCCESS');
        this.fnValidateImg();
    };
    VendorRegisterPage.prototype.uploadFileCertificate = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var img;
            return __generator(this, function (_a) {
                this.disableBtn = false;
                img = this.apiService.fnGetImgUrl(e, this.api.vendor.file.view);
                this.file_certificate.push({
                    name: img.name,
                    path: img.url,
                    order: 999,
                });
                this.apiService.showSuccessTranslate('UPLOAD_FILE_SUCCESS');
                return [2 /*return*/];
            });
        });
    };
    VendorRegisterPage.prototype.uploadFileFrontStore = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var img;
            return __generator(this, function (_a) {
                this.disableBtn = false;
                img = this.apiService.fnGetImgUrl(e, this.api.vendor.file.view);
                this.image_front_store_path.push({
                    name: img.name,
                    path: img.url,
                    order: 999,
                });
                this.apiService.showSuccessTranslate('UPLOAD_FILE_SUCCESS');
                this.fnValidateImg();
                return [2 /*return*/];
            });
        });
    };
    VendorRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendor-register',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\vendor-register\vendor-register.html"*/'<!--\n  Generated template for the VendorRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>{{ \'VENDOR_REGISTER\' | translate }}</ion-title>\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="register">\n    <form #form="ngForm" *ngIf="lang==\'th\'" [formGroup]="registerData" (ngSubmit)="fnSendData(form)">\n        <ion-list class="list-form">\n            <ion-item>\n                <ion-label stacked>{{ \'COMPANY_NAME\' | translate }}:</ion-label>\n                <ion-input type="text" formControlName="company_name_th"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'FIRST_NAME_LAST_NAME\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="name_th"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.name_th" class="font-red">\n                {{ formErrors.name_th }}\n            </div>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'PHONE\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="phone"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.phone" class="font-red">\n                {{ formErrors.phone }}\n            </div>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'EMAIL\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="email"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.email" class="font-red">\n                {{ formErrors.email }}\n            </div>\n            <ion-item>\n                <ion-label stacked>{{ \'LINE_ID\' | translate }}:</ion-label>\n                <ion-input type="text" formControlName="line_id"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{ \'ADDRESS\' | translate }}:</ion-label>\n                <ion-textarea formControlName="address_th"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{ \'CITY\' | translate }}:</ion-label>\n                <ion-input formControlName="city_th"></ion-input>\n            </ion-item>\n            <!--<ion-item>-->\n            <!--<ion-label>{{ \'CERTIFICATE_DOC\' | translate }}:</ion-label>-->\n            <!--<ion-input type="hidden" [(value)]="file_certificate" formControlName="file_certificate"></ion-input>-->\n            <!--</ion-item>-->\n\n            <ion-input type="hidden" [(value)]="file_certificate" formControlName="file_certificate"></ion-input>\n            <ion-input type="hidden" [(value)]="image_card_no_path" formControlName="image_card_no_path"></ion-input>\n            <ion-input type="hidden" [(value)]="image_front_store_path" formControlName="image_front_store_path"></ion-input>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;"><i class="font-red">*</i>\n                        {{ \'CARD_ID_IMAGE\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderCardNo\n                            [uploadUrl]="urlUpload"\n                            uploadMethod="POST"\n                            [multiple]="false"\n                            accept="image/*"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="fnUploadCardNo($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{image_card_no_path?(\'CHANGE_IMAGE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n            <div *ngIf="formErrors.image_card_no_path" class="font-red">\n                {{ formErrors.image_card_no_path }}\n            </div>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;"><i class="font-red">*</i>\n                        {{ \'FRONT_MARKET_IMAGE\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderFrontMarket\n                            [uploadUrl]="urlUploadFile"\n                            uploadMethod="POST"\n                            [multiple]="true"\n                            accept="image/*"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="uploadFileFrontStore($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{image_front_store_path.length?(\'SELECT_FILE_MORE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n            <div *ngIf="formErrors.image_front_store_path" class="font-red">\n                {{ formErrors.image_front_store_path }}\n            </div>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;">{{ \'CERTIFICATE_DOC\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderCertificateFile\n                            [uploadUrl]="urlUploadFile"\n                            uploadMethod="POST"\n                            [multiple]="true"\n                            accept="image/*, application/pdf, application/vnd.ms-excel"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="uploadFileCertificate($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{file_certificate.length?(\'SELECT_FILE_MORE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n        </ion-list>\n        <button ion-button color="primary" block type="submit">{{ \'SEND\' | translate }}</button>\n        <!--<ion-row>-->\n        <!--<ion-col col-6>-->\n        <!--</ion-col>-->\n        <!--<ion-col col-6>-->\n        <!--<ion-buttons right>-->\n        <!--<button ion-button color="primary" type="submit" round>{{ \'SEND\' | translate }}</button>-->\n        <!--</ion-buttons>-->\n        <!--</ion-col>-->\n        <!--</ion-row>-->\n    </form>\n    <form #form="ngForm" *ngIf="lang!=\'th\'" [formGroup]="registerDataEN" (ngSubmit)="fnSendData(form)">\n        <ion-list class="list-form">\n            <ion-item>\n                <ion-label stacked>{{ \'COMPANY_NAME\' | translate }}:</ion-label>\n                <ion-input type="text" formControlName="company_name_en"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'FIRST_NAME_LAST_NAME\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="name_en"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.name_en" class="font-red">\n                {{ formErrors.name_en }}\n            </div>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'PHONE\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="phone"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.phone" class="font-red">\n                {{ formErrors.phone }}\n            </div>\n            <ion-item>\n                <ion-label stacked><i class="font-red">*</i>\n                    {{ \'EMAIL\' | translate }}:\n                </ion-label>\n                <ion-input type="text" formControlName="email"></ion-input>\n            </ion-item>\n            <div *ngIf="formErrors.email" class="font-red">\n                {{ formErrors.email }}\n            </div>\n            <ion-item>\n                <ion-label stacked>{{ \'LINE_ID\' | translate }}:</ion-label>\n                <ion-input type="text" formControlName="line_id"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{ \'ADDRESS\' | translate }}:</ion-label>\n                <ion-textarea formControlName="address_en"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{ \'CITY\' | translate }}:</ion-label>\n                <ion-input formControlName="city_en"></ion-input>\n            </ion-item>\n            <!--<ion-item>-->\n            <!--<ion-label>{{ \'CERTIFICATE_DOC\' | translate }}:</ion-label>-->\n            <!--<ion-input type="hidden" [(value)]="file_certificate" formControlName="file_certificate"></ion-input>-->\n            <!--</ion-item>-->\n\n            <ion-input type="hidden" [(value)]="file_certificate" formControlName="file_certificate"></ion-input>\n            <ion-input type="hidden" [(value)]="image_card_no_path" formControlName="image_card_no_path"></ion-input>\n            <ion-input type="hidden" [(value)]="image_front_store_path" formControlName="image_front_store_path"></ion-input>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;"><i class="font-red">*</i>\n                        {{ \'CARD_ID_IMAGE\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderCardNo\n                            [uploadUrl]="urlUpload"\n                            uploadMethod="POST"\n                            [multiple]="false"\n                            accept="image/*"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="fnUploadCardNo($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{image_card_no_path?(\'CHANGE_IMAGE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n            <div *ngIf="formErrors.image_card_no_path" class="font-red">\n                {{ formErrors.image_card_no_path }}\n            </div>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;"><i class="font-red">*</i>\n                        {{ \'FRONT_MARKET_IMAGE\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderFrontMarket\n                            [uploadUrl]="urlUploadFile"\n                            uploadMethod="POST"\n                            [multiple]="true"\n                            accept="image/*"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="uploadFileFrontStore($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{image_front_store_path.length?(\'SELECT_FILE_MORE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n            <div *ngIf="formErrors.image_front_store_path" class="font-red">\n                {{ formErrors.image_front_store_path }}\n            </div>\n            <ion-item>\n                <div class="dx-field">\n                    <div class="dx-field-label" style="width: 100%;">{{ \'CERTIFICATE_DOC\' | translate }}:</div>\n                    <dx-file-uploader\n                            #fileUploaderCertificateFile\n                            [uploadUrl]="urlUploadFile"\n                            uploadMethod="POST"\n                            [multiple]="true"\n                            accept="image/*, application/pdf, application/vnd.ms-excel"\n                            uploadMode="instantly"\n                            labelText=""\n                            (onUploadStarted)="fnDisableBtn($event)"\n                            (onUploaded)="uploadFileCertificate($event)"\n                            (onUploadedError)=uploadImgError($event)\n                            selectButtonText="{{file_certificate.length?(\'SELECT_FILE_MORE\'|translate) :(\'SELECT_IMAGE\'|translate)}}">\n                    </dx-file-uploader>\n                </div>\n            </ion-item>\n        </ion-list>\n        <button ion-button color="primary" block type="submit">{{ \'SEND\' | translate }}</button>\n        <!--<ion-row>-->\n        <!--<ion-col col-6>-->\n        <!--</ion-col>-->\n        <!--<ion-col col-6>-->\n        <!--<ion-buttons right>-->\n        <!--<button ion-button color="primary" type="submit" round>{{ \'SEND\' | translate }}</button>-->\n        <!--</ion-buttons>-->\n        <!--</ion-col>-->\n        <!--</ion-row>-->\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\vendor-register\vendor-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], VendorRegisterPage);
    return VendorRegisterPage;
}());

//# sourceMappingURL=vendor-register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_crypto_js__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_sweetalert2__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












// import {App} from "ionic-angular/index";
// import {CryptoJS} from "crypto-js";


// import {CryptoJS} from '../../node_modules/crypto-js';
// import {LoginPage} from '../pages/login/login';
// import {globAll} from "@ionic/app-scripts/dist/util/glob-util";

/*
 Generated class for the AppProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var Service = (function () {
    function Service(http, storage, alertCtrl, toastCtrl, 
        // public loadingCtrl: LoadingController,
        // private app: App,
        clipboard, translate, sharedService) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.clipboard = clipboard;
        this.translate = translate;
        this.sharedService = sharedService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        this.dateStart = __WEBPACK_IMPORTED_MODULE_6_moment__().format('MM/DD/YYYY');
        this.userDataKey = 'userData';
        this.langKey = 'lang_key';
        this.cartKey = 'cart_key';
        this.searchHistoryKey = 'search_history_key';
        this.rememberKey = 'remember_data';
        this.password = null;
        this.config = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.timeOutLoading = null;
        // private this.cryptoJS: any = null;
        this.SK_afaeasdfs = 'gikiyddyo';
        // console.log('Hello AppProvider Provider');
    }
    Service.prototype.handleError = function (error, app) {
        return __awaiter(this, void 0, void 0, function () {
            var errJ;
            return __generator(this, function (_a) {
                this.closeLoading();
                // console.error('An error occurred', error); // for demo purposes only
                // try {
                //   let objErr = error.json();
                //   console.log(objErr);
                //   if (objErr.error) {
                //     if (objErr.error.statusCode == '401') {
                //       // await this.userLogOut();
                //       this.fnGoLogin();
                //       this.showError('ขออภัยกรุณา Login ใหม่');
                //       // return 'AUTHORIZATION_REQUIRED'
                //     }
                //   }
                // } catch (err) {
                //   console.log(error); // for demo purposes only
                // }
                // return Promise.reject(error.message || error);
                try {
                    errJ = error.json();
                    if (errJ.error.code === 'AUTHORIZATION_REQUIRED') {
                        // this.logoutUser();
                        // this.router.navigate(['/login']);
                        this.showErrorTranslate('AUTHORIZATION_REQUIRED');
                        return [2 /*return*/, Promise.reject(error.message || error)];
                    }
                    else {
                    }
                }
                catch (err) {
                }
                console.log('An error occurred: ', error); // for demo purposes only
                console.log(typeof error);
                if (typeof error === 'string') {
                    // this.showError(error);
                    this.showErrorTranslate(error);
                }
                else {
                    // this.showError(error.message || '');
                    if (error.code) {
                        this.showErrorTranslate(error.code, error);
                    }
                    else {
                        this.showErrorTranslate(error.message || '');
                    }
                }
                return [2 /*return*/, Promise.reject(error)];
            });
        });
    };
    Service.prototype.fnConfirmDelete = function (fnCall, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cancel, yes, title, text, fnGetMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fnGetMsg = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.fnGetTranslate('CANCEL')];
                                    case 1:
                                        cancel = (_a.sent()) + '';
                                        return [4 /*yield*/, this.fnGetTranslate('YES')];
                                    case 2:
                                        yes = (_a.sent()) + '';
                                        return [4 /*yield*/, this.fnGetTranslate('CONFIRM_DELETE')];
                                    case 3:
                                        title = (_a.sent()) + '';
                                        return [4 /*yield*/, this.fnGetTranslate('DO_YOU_WANT_DELETE_DATA')];
                                    case 4:
                                        text = (_a.sent()) + '';
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, fnGetMsg()];
                    case 1:
                        _a.sent();
                        __WEBPACK_IMPORTED_MODULE_14_sweetalert2___default()({
                            title: msg || text,
                            text: title,
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            allowOutsideClick: false,
                            confirmButtonText: yes,
                            cancelButtonText: cancel
                        }).then(function (res) {
                            if (res.value) {
                                fnCall();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.showLoading = function () {
        // this.loading = this.loadingCtrl.create({
        //   content: 'กำลังโหลด...'
        // });
        // this.loading.present();
        var _this = this;
        // setTimeout(() => {
        //   this.loading.dismiss();
        // }, 10000);
        if (this.timeOutLoading) {
            clearTimeout(this.timeOutLoading);
        }
        this.sharedService.showLoading()();
        this.timeOutLoading = setTimeout(function () {
            _this.closeLoading();
        }, 30000);
    };
    Service.prototype.closeLoading = function () {
        if (this.timeOutLoading) {
            clearTimeout(this.timeOutLoading);
        }
        // this.loading.dismiss();
        this.sharedService.hideLoading()();
    };
    Service.prototype.errMsg = function (text, title) {
        title = title || 'เกิดข้อผิดพลาด';
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['ตกลง']
        });
        alert.present();
    };
    Service.prototype.showErrorTranslate = function (t, value) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = t;
                        if (!(t.indexOf('_') > -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fnGetTranslate(t, value)];
                    case 1:
                        msg = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.showError(msg);
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.showError = function (validateOrMsg) {
        console.log(validateOrMsg);
        var msg = 'เกิดข้อผิดพลาด';
        if (this.checkData(validateOrMsg)) {
            if (typeof validateOrMsg === 'object') {
                var arrMsg = [];
                // for (let i in validateOrMsg.brokenRules) {
                //   const m = validateOrMsg.brokenRules[i].message;
                //
                //   if (!arrMsg.includes(m)) {
                //     arrMsg.push(m);
                //   }
                // }
                msg = arrMsg.join(', ');
            }
            else {
                msg = validateOrMsg;
            }
        }
        __WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify___default()(msg, 'error', 6000);
    };
    Service.prototype.showSuccessTranslate = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetTranslate(t)];
                    case 1:
                        msg = _a.sent();
                        this.showSuccess(msg);
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.showSuccess = function (validateOrMsg) {
        console.log(validateOrMsg);
        var msg = 'success';
        if (this.checkData(validateOrMsg)) {
            if (typeof validateOrMsg === 'object') {
                // const arrMsg = [];
                // for (let i in validateOrMsg.brokenRules) {
                //   const m = validateOrMsg.brokenRules[i].message;
                //
                //   if (!arrMsg.includes(m)) {
                //     arrMsg.push(m);
                //   }
                // }
                // msg = arrMsg.join(', ');
            }
            else {
                msg = validateOrMsg;
            }
        }
        __WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify___default()(msg, 'success', 4000);
    };
    Service.prototype.fnBuildAPIUrl = function (url, objQuery, token) {
        return __awaiter(this, void 0, void 0, function () {
            var userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof objQuery !== 'object') {
                            objQuery = {};
                        }
                        if (!(token !== false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getUserData()];
                    case 1:
                        userData = _a.sent();
                        if (this.checkData(userData)) {
                            objQuery.access_token = userData['access_token'];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.config.protocol + this.config.host + ':' + this.config.port + url +
                            (this.checkData(objQuery) ? '?' + __WEBPACK_IMPORTED_MODULE_7_jquery__["param"](objQuery) : '')];
                }
            });
        });
    };
    Service.prototype.fnGetPathImgThumb = function (path) {
        var parts = path.split('.'), extension = parts[parts.length - 1];
        var origName = parts[parts.length - 2];
        return origName + '-thumbnail.' + extension;
    };
    ;
    Service.prototype.fnBuildImg = function (data, name, full) {
        var path = data[name];
        // if (this.checkData(data[name + '_thumbnail'])) {
        //     path = data[name + '_thumbnail'];
        // }
        // return this.fnBuildImgUrl(path);
        if (path) {
            var gUrl = 'https://storage.googleapis.com/marukyo-api/';
            var url = path.replace(gUrl, '');
            if (full !== true) {
                url = this.fnGetPathImgThumb(url);
            }
            return gUrl + url;
        }
        else {
            return 'assets/img/icon-no-image.png';
        }
    };
    Service.prototype.fnBuildImgUrl = function (path) {
        if (this.checkData(path)) {
            return this.config.protocol + this.config.host + ':' + this.config.port + path;
        }
        else {
            return 'assets/img/icon-no-image.png';
        }
    };
    Service.prototype.showInfo = function (msg) {
        __WEBPACK_IMPORTED_MODULE_5_devextreme_ui_notify___default()(msg, 'info', 2500);
    };
    // get
    Service.prototype.get = function (url, objQuery, loading) {
        return __awaiter(this, void 0, void 0, function () {
            var app;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // const config = DEFAULT.config;
                        if (typeof objQuery != 'object') {
                            objQuery = {};
                        }
                        if (this.checkData(objQuery.id)) {
                            url = url.replace(':id', objQuery.id + '');
                        }
                        return [4 /*yield*/, this.fnGetUrlAPI(url, objQuery)];
                    case 1:
                        url = _a.sent();
                        console.log('url get:', url);
                        app = this;
                        if (loading !== false) {
                            this.showLoading();
                        }
                        return [2 /*return*/, this.http.get(url)
                                .toPromise()
                                .then(function (response) {
                                return app.fnCheckResponse(response.json());
                            })
                                .catch(function (err) {
                                return app.handleError(err, app);
                            })];
                }
            });
        });
    };
    Service.prototype.fnGetUrlAPI = function (url, objQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        userData = _a.sent();
                        if (!objQuery || typeof objQuery != 'object') {
                            objQuery = {};
                        }
                        objQuery.lang = this.sharedService.lang;
                        if (this.checkData(userData)) {
                            if (this.checkData(userData['access_token'])) {
                                objQuery.access_token = userData['access_token'];
                                // objQuery.user_name = userData.user_name;
                                // objQuery.user_id = userData.id;
                            }
                        }
                        url = url ? this.config.protocol + this.config.host + ':' + this.config.port + url :
                            this.config.protocol + this.config.host + ':' + this.config.port;
                        console.log(url);
                        if (this.checkData(objQuery)) {
                            url += "?" + __WEBPACK_IMPORTED_MODULE_7_jquery__["param"](objQuery);
                        }
                        return [2 /*return*/, url];
                }
            });
        });
    };
    Service.prototype.post = function (url, data, objQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetUrlAPI(url, objQuery)];
                    case 1:
                        url = _a.sent();
                        if (this.checkData(data)) {
                            try {
                                delete data.id;
                                delete data.created_at;
                                delete data.updated_at;
                                delete data.deleted_at;
                            }
                            catch (err) {
                                console.log('err:');
                                console.log(err);
                            }
                        }
                        console.log('POST url:', url);
                        console.log('POST DATA : ' + JSON.stringify(data));
                        api = this;
                        this.showLoading();
                        return [2 /*return*/, this.http.post(url, data, { headers: this.headers })
                                .toPromise()
                                .then(function (response) {
                                _this.closeLoading();
                                var res = response.json();
                                return api.checkResponse(res);
                            })
                                .catch(function (err) {
                                _this.closeLoading();
                                return api.handleError(err, api);
                            })];
                }
            });
        });
    };
    Service.prototype.put = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var config, userData, access_token, strData, app;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
                        return [4 /*yield*/, this.getUserData()];
                    case 1:
                        userData = _a.sent();
                        access_token = '?access_token=' + userData.id;
                        strData = JSON.stringify(data);
                        url = config.protocol + config.host + ':' + config.port + url + access_token;
                        url = url.replace(':id', data.id);
                        // url = url.replace(':account_id', userData.user.account_id);
                        console.log('PUT ' + url);
                        console.log('PUT DATA : ' + strData);
                        app = this;
                        this.showLoading();
                        return [2 /*return*/, this.http.put(url, strData, { headers: this.headers })
                                .toPromise()
                                .then(function (response) {
                                console.log(response);
                                return app.fnCheckResponse(response.json(), 'edit');
                            })
                                .catch(function (err) {
                                return app.handleError(err, app);
                            })];
                }
            });
        });
    };
    Service.prototype.delete = function (url, id, objQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var config, userData, app;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
                        return [4 /*yield*/, this.getUserData()];
                    case 1:
                        userData = _a.sent();
                        if (typeof objQuery != 'object') {
                            objQuery = {};
                        }
                        objQuery.access_token = userData.id;
                        url = config.protocol + config.host + ':' + config.port + url + '?' + __WEBPACK_IMPORTED_MODULE_7_jquery__["param"](objQuery);
                        url = url.replace(':id', id);
                        url = url.replace(':announce_id', id);
                        url = url.replace(':property_type_id', id);
                        // url = url.replace(':account_id', userData.user.account_id);
                        console.log('Delete url:' + url);
                        app = this;
                        this.showLoading();
                        return [2 /*return*/, this.http.delete(url, { headers: this.headers })
                                .toPromise()
                                .then(function (response) {
                                console.log(response);
                                return app.fnCheckResponse(response.json(), 'delete');
                            })
                                .catch(function (err) {
                                return app.handleError(err, app);
                            })];
                }
            });
        });
    };
    Service.prototype.fnLogin = function (url, data, objQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var api;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetUrlAPI(url, objQuery)];
                    case 1:
                        url = _a.sent();
                        console.log('POST ' + url);
                        console.log('POST DATA : ' + JSON.stringify(data));
                        api = this;
                        this.showLoading();
                        return [2 /*return*/, this.http.post(url, data, { headers: this.headers })
                                .toPromise()
                                .then(function (response) {
                                _this.closeLoading();
                                var res = response.json();
                                console.log(res);
                                return api.checkResponse(res);
                            })
                                .catch(function (err) {
                                _this.closeLoading();
                                return api.handleError(err, api);
                            })];
                }
            });
        });
    };
    Service.prototype.checkResponse = function (res) {
        if (this.checkData(res)) {
            if (this.checkData(res.resultCode)) {
                switch (res.resultCode) {
                    case '40401':
                    case '50000':
                        throw res.resultDescription;
                    case '20000':
                        return res;
                }
            }
        }
        return res;
    };
    Service.prototype.fnCheckResponse = function (data, type) {
        return __awaiter(this, void 0, void 0, function () {
            var resultCode;
            return __generator(this, function (_a) {
                this.closeLoading();
                try {
                    resultCode = data.resultCode;
                    switch (resultCode) {
                        case '20000':
                            if (type === 'add' || type === 'edit' || type === 'delete') {
                                this.presentToast();
                            }
                            return [2 /*return*/, data.data];
                        default:
                            this.showError(data.resultDescription);
                            return [2 /*return*/, null];
                    }
                }
                catch (err) {
                    this.showError(err.message);
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.dateNow = function (date) {
        if (this.checkData(date)) {
            return __WEBPACK_IMPORTED_MODULE_6_moment__(date);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_6_moment__();
        }
    };
    Service.prototype.postWithOutAccountId = function (url, data) {
        var config = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        url = config.protocol + config.host + ':' + config.port + url;
        console.log('POST ' + url);
        console.log('POST DATA : ' + JSON.stringify(data));
        var app = this;
        this.showLoading();
        return this.http.post(url, data, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(response);
            app.closeLoading();
            return response.json();
        })
            .catch(function (err) {
            return app.handleError(err, app);
        });
        // .then(function (res) {
        // return typeof res.data.data === 'undefined' ? res : $.extend(res, res.data);
    };
    Service.prototype.userLogOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove(this.userDataKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.getStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.get(key)];
            });
        });
    };
    Service.prototype.setStorage = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(key, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.deleteStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove(key)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getStorage(this.userDataKey)];
                    case 1:
                        userData = _a.sent();
                        // console.log('getUserData : ' + JSON.stringify(userData));
                        if (this.checkData(userData)) {
                            return [2 /*return*/, userData];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, {}];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.isLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.checkData(user)];
                }
            });
        });
    };
    Service.prototype.fnGoLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.getAccountID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        userData = _a.sent();
                        if (this.checkData(userData)) {
                            return [2 /*return*/, userData.user.account_id];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Service.prototype.checkData = function (data) {
        //console.log(data);
        // console.log(typeof data);
        var haveData = false;
        var type = typeof data;
        switch (type) {
            case 'object':
                if (data == null || !data) {
                    haveData = false;
                }
                else if (typeof data[0] !== 'undefined') {
                    haveData = data.length !== 0;
                }
                else {
                    haveData = Object.keys(data).length ? true : false;
                }
                break;
            case 'string':
                if (data) {
                    haveData = true;
                }
                break;
            case 'number':
                haveData = true;
                break;
            default:
                haveData = false;
                break;
        }
        return haveData;
    };
    Service.prototype.convertMonthThaiText = function (inc) {
        // ปี/เดือนวัน หรือ เดือน/วัน/ปี ก็ได้
        if (inc) {
            var thaiMonth = [
                '',
                'ม.ค.',
                'ก.พ.',
                'มี.ค.',
                'เม.ย.',
                'พ.ค.',
                'มิ.ย.',
                'ก.ค.',
                'ส.ค.',
                'ก.ย.',
                'ต.ค.',
                'พ.ย.',
                'ธ.ค.',
            ];
            var month = __WEBPACK_IMPORTED_MODULE_6_moment__(inc).format('MM');
            // let year = moment(inc).format('YYYY') + 543;
            var year = __WEBPACK_IMPORTED_MODULE_6_moment__(inc).format('YYYY');
            return __WEBPACK_IMPORTED_MODULE_6_moment__(inc).format('DD') + ' ' + thaiMonth[parseInt(month)] + ' ' + year;
        }
        else {
            return "";
        }
    };
    Service.prototype.returnCode = function (inc) {
        return __awaiter(this, void 0, void 0, function () {
            var resCode;
            return __generator(this, function (_a) {
                resCode = typeof inc.resultCode != 'string' ? inc.resultCode.toString() : inc.resultCode;
                if (resCode == '20000') {
                    return [2 /*return*/, true];
                }
                else {
                    this.showError(inc.resultDescription);
                    return [2 /*return*/, false];
                    // throw new Error(inc.resultDescription);
                }
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.presentToast = function (msg) {
        msg = msg || "Successfully";
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2500,
            position: 'top',
            cssClass: "success"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Service.prototype.fnPasswordDecrypted = function (ciphertext) {
        // Decrypt
        var bytes = __WEBPACK_IMPORTED_MODULE_12_crypto_js__["AES"].decrypt(ciphertext, this.SK_afaeasdfs);
        return bytes.toString(__WEBPACK_IMPORTED_MODULE_12_crypto_js__["enc"].Utf8);
    };
    Service.prototype.fnPasswordEncrypted = function (txt) {
        // Encrypt
        var ciphertext = __WEBPACK_IMPORTED_MODULE_12_crypto_js__["AES"].encrypt(txt, this.SK_afaeasdfs);
        return ciphertext.toString();
    };
    Service.prototype.fnCopyClipboard = function (str) {
        var _this = this;
        this.clipboard.copy(str);
        this.translate.get('COPY_CLIPBOARD', {}).subscribe(function (res) {
            _this.showInfo(res);
        });
    };
    Service.prototype.fnGetTranslate = function (key, param) {
        var _this = this;
        param = param || {};
        return new Promise(function (resolve, reject) {
            _this.translate.get(key, param).subscribe(function (res) {
                resolve(res);
            });
        });
    };
    Service.prototype.fnAddSearchHistory = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var lists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.searchHistoryKey)];
                    case 1:
                        lists = _a.sent();
                        lists = lists ? lists : [];
                        lists = lists.filter(function (val) { return val != data; });
                        lists.unshift(data);
                        return [4 /*yield*/, this.setStorage(this.searchHistoryKey, lists)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, lists];
                }
            });
        });
    };
    Service.prototype.fnGetSearchHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.searchHistoryKey)];
                    case 1:
                        lists = _a.sent();
                        lists = lists ? lists : [];
                        return [2 /*return*/, lists];
                }
            });
        });
    };
    Service.prototype.fnRemoveSearchHistory = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var lists, newList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.searchHistoryKey)];
                    case 1:
                        lists = _a.sent();
                        newList = [];
                        if (typeof idx === 'number') {
                            newList = lists.filter(function (val, key) {
                                return key !== idx;
                            });
                        }
                        else {
                            newList = lists.filter(function (val, key) {
                                return idx.indexOf(key) < 0;
                            });
                        }
                        return [4 /*yield*/, this.setStorage(this.searchHistoryKey, newList)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newList];
                }
            });
        });
    };
    Service.prototype.fnRemoveAllSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setStorage(this.searchHistoryKey, [])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, []];
                }
            });
        });
    };
    Service.prototype.fnAddToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var carts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.cartKey)];
                    case 1:
                        carts = _a.sent();
                        carts = carts ? carts : [];
                        carts.push(product);
                        return [4 /*yield*/, this.setStorage(this.cartKey, carts)];
                    case 2:
                        _a.sent();
                        this.sharedService.count_product = carts.length;
                        return [2 /*return*/, carts];
                }
            });
        });
    };
    Service.prototype.fnGetCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var carts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.cartKey)];
                    case 1:
                        carts = _a.sent();
                        carts = carts ? carts : [];
                        return [2 /*return*/, carts];
                }
            });
        });
    };
    Service.prototype.fnRemoveFromCart = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var carts, newCarts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStorage(this.cartKey)];
                    case 1:
                        carts = _a.sent();
                        newCarts = [];
                        if (typeof idx === 'number') {
                            newCarts = carts.filter(function (val, key) {
                                return key !== idx;
                            });
                        }
                        else {
                            newCarts = carts.filter(function (val, key) {
                                return idx.indexOf(key) < 0;
                            });
                        }
                        return [4 /*yield*/, this.setStorage(this.cartKey, newCarts)];
                    case 2:
                        _a.sent();
                        this.sharedService.count_product = newCarts.length;
                        return [2 /*return*/, newCarts];
                }
            });
        });
    };
    Service.prototype.fnLang = function (data, key) {
        var th = data[key + "_th"], en = data[key + "_en"];
        return this.sharedService.lang == 'th' ? th : (en || th);
    };
    Service.prototype.fnProductPrice = function (data) {
        var userData = this.sharedService.userData;
        var fnLoopCheckPrice = function (star) {
            for (var i = star; i > 0; i--) {
                if (data['price_star' + star] > 0) {
                    return data['price_star' + star];
                }
            }
            return data.price1;
        };
        if (this.checkData(userData.vendor)) {
            switch (userData.vendor.star) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return fnLoopCheckPrice(userData.vendor.star);
                default:
                    return data.price1;
            }
        }
        else {
            return data.price1;
        }
    };
    Service.prototype.fnGoWebSite = function (url) {
        window.open(url, '_system', 'location=yes');
    };
    Service.prototype.fnGetImgUrl = function (e, path) {
        var res = JSON.parse(e.request.response).result.files['files[]'];
        var newFileName = res[0].name || '';
        return {
            url: newFileName ? path.replace(':file_name', newFileName) : '',
            name: newFileName
        };
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_service__["a" /* SharedService */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 256;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {Http} from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
var SharedService = (function () {
    function SharedService() {
        // loadingVisible = false;
        this.lang = 'th';
        this.open_add_cart = false;
        this.userData = {
            vendor: {
                star: 0
            }
        };
        this.list_category_main = null;
        this.list_category_sub = [];
        this.count_product = 0;
        this.list_select_buy_product = [];
        this.cart_data = {
            count_product: 0,
        };
        this.isLogin = false;
        // propertyName$ = this.propertyName.asObservable();
        this.callback = null;
        this.callbackShowLoading = null;
        this.callbackHideLoading = null;
    }
    SharedService.prototype.getCallback = function () {
        return this.callback;
    };
    SharedService.prototype.setCallback = function (call) {
        this.callback = call;
    };
    SharedService.prototype.showLoading = function () {
        return this.callbackShowLoading;
    };
    SharedService.prototype.setCallbackShowLoading = function (call) {
        this.callbackShowLoading = call;
    };
    SharedService.prototype.hideLoading = function () {
        return this.callbackHideLoading;
    };
    SharedService.prototype.setCallbackHideLoading = function (call) {
        this.callbackHideLoading = call;
    };
    // constructor(private http: Http) {
    //   this.roomsData = {};
    //   this.floorsData = [];
    //   this.numFloors = [];
    //   this.propertyTypes = {};
    //   this.properties = {};
    //   this.rooms = [];
    //   this.facility = [];
    //   this.building = {};
    //   this.roomDataDetail = {};
    //   this.propertyWizardData = {};
    //   this.roomTypesData = {};
    //   this.typesData = [];
    //   this.room_type = [];
    //   this.propertyTypeList = [];
    //   this.propertiesList = [];
    //   this.numCount = 1;
    //   this.roomSettingType = {};
    //   this.bookingData = {};
    //   this.rentYear = null;
    //   this.rentMonth = null;
    //   this.rentFloor = null;
    //   this.batchData = {};
    //   this.delete_data = {};
    //   this.routerLink = {};
    //   this.routerData = {};
    //   this.waiting_id = null;
    //   this.loadingVisible = false;
    // }
    SharedService.prototype.changedTitle = function () {
        // this.propertyName.next(this.routerData.property_name);
    };
    SharedService.prototype.clearWizardData = function () {
        this.roomsData = {};
        this.floorsData = [];
        this.numFloors = [];
        this.propertyTypes = {};
        this.properties = {};
        this.rooms = [];
        this.facility = [];
        this.building = {};
        this.roomDataDetail = {};
        this.propertyWizardData = {};
        this.roomTypesData = {};
        this.typesData = [];
        this.room_type = [];
        this.propertyTypeList = [];
        this.propertiesList = [];
        this.numCount = 1;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT; });
var DEFAULT = {
    "config": {
        "debug": false,
        // "protocol": "http://",
        // "host": "localhost",
        // "port": 4942,
        // "protocol": "http://",
        // "host": "ruxnutt.thddns.net",
        // "host": "localhost",
        // "port": 4942,
        'protocol': 'https://',
        'host': 'marukyo-api.appspot.com',
        'port': '',
        "checkAuthen": "/current",
        "loginPage": "login",
        "cookie_name": {
            "building": "building_data"
        },
        "property": {
            "propertyType": "/api/property-types",
            "properties": "/api/accounts/:account_id/properties",
            "facilities": "/api/accounts/:account_id/facilities",
            "propertyAdd": "/api/properties/wizard"
        },
        "home": {
            "propertiesBuildings": "/api/accounts/:account_id/properties-buildings",
            "buildingsRoom": "/api/buildings/:building_id",
            "roomDetail": "/api/rooms/:room_id",
            "saveRooms": "/api/rooms/:room_id",
            "propertiesBuildingsList": "/api/accounts/:account_id/properties-buildings-list",
            "getCleanings": "/api/cleanings/",
            "putCleanings": "/api/cleanings/",
            "postCleanings": "/api/cleanings/",
            "getRepairs": "/api/repairs/",
            "putRepairs": "/api/repairs/",
            "postRepairs": "/api/repairs/",
            "getMoveOut": "/api/move-outs/",
            "postMoveOut": "/api/move-outs",
            "putMoveOut": "/api/move-outs/",
            "putContract": "/api/contracts/",
            "postContract": "/api/contracts"
        },
        "lifeType": {
            "list": "/api/life-types/user/:user_id",
            "add": "/api/life-types",
            "edit": "/api/life-types/:id",
            "delete": "/api/life-types/:id",
        },
        "userApi": {
            "login": "/api/Scusers/user-login",
            "logout": "/api/users/logout",
            "list": "/api/users/:account_id/list",
            "edit": "/api/users/",
            "create": "/api/users/:account_id/create",
            "delete": "/api/users/",
            "edit_password": "/api/users/editpassword",
            "forget_password": "/api/Scusers/forget-password",
            "getAnnounce": "/api/buildings/",
            "getRental": "/api/rooms/",
            "updatePersonal": "/api/member/:id",
            "editPassword": "/api/member/:id/edit-password",
            "getContract": "/api/rooms/:room_id/contracts",
            "getBankAccount": "/api/accounts/4/bank-accounts",
            "getRoomContracts": "/api/rooms/:room_id/contracts",
            "getBuilding": "/api/buildings/:building_id/view",
            "upload": "http://27.254.62.79:13022/api/HTP/upload"
        },
        "milkHistories": {
            "list": "/api/milk-histories",
            "add": "/api/milk-histories",
            "edit": "/api/milk-histories/:id",
            "delete": "/api/milk-histories/:id",
            "last_create": "/api/milk-histories/last-create",
        },
        'category': {
            'list': '/api/categories/find',
            'add': '/api/categories',
            'view': '/api/categories/:id',
            'edit': '/api/categories/:id',
            'delete': '/api/categories/:id',
            'catMain': '/api/categories/cat-main',
            'catSub': '/api/categories/cat-sub',
            'catGroup': '/api/categories/cat-group',
            'upload': '/api/containers/categories/upload',
            'viewImage': '/api/containers/categories/download/:file_name',
            'getProduct': '/api/categories/:id/get-product',
        },
        'product': {
            'list': '/api/products/find',
            'add': '/api/products',
            'view': '/api/products/:id',
            'view_buy': '/api/products/:id/buy',
            'edit': '/api/products/:id',
            'delete': '/api/products/:id',
            'clone': '/api/products/clone',
            'search': '/api/products/search',
            'image': {
                'upload': '/api/containers/products/upload',
                'view': '/api/containers/products/download/:file_name',
                'delete': '/api/containers/products/files/:file_name',
            },
        },
        'video': {
            'list': '/api/videos/find',
        },
        'map': {
            'list': '/api/maps/find',
        },
        'bank': {
            'list': '/api/banks/find',
        },
        'vendor': {
            'create': '/api/vendors/register',
            'file': {
                'upload': '/api/containers/vendor-files/upload',
                'view': '/api/containers/vendor-files/download/:file_name',
                'delete': '/api/containers/vendor-files/:file_name',
            },
            'image': {
                'upload': '/api/containers/vendor-images/upload',
                'view': '/api/containers/vendor-images/download/:file_name',
                'delete': '/api/containers/vendor-images/files/:file_name',
            }
        },
        'buyProduct': {
            'shippingMethodList': '/api/shipping-methods/find',
        }
    }
};
//# sourceMappingURL=app.constant.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItemOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalItemOptionPage = (function () {
    function ModalItemOptionPage(nav, itemService, navParams, sv, shareService, viewCtrl, toastCtrl) {
        var _this = this;
        this.nav = nav;
        this.itemService = itemService;
        this.navParams = navParams;
        this.sv = sv;
        this.shareService = shareService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.attrType = {
            color: 'Color',
            radio_button: 'Radio button',
            drop_down: 'Drop down list',
        };
        this.buyProduct = {
            data: {},
            quantity: 1,
            select_attribute: [],
            option_price: 0
        };
        this.productData = {
            name_th: '',
            name_en: '',
            detail_th: '',
            detail_en: '',
            detail_short_th: '',
            detail_short_en: '',
            quantity: null,
            price1: null,
            price_star1: null,
            price_star2: null,
            price_star3: null,
            price_star4: null,
            price_star5: null,
            logo_path: null,
            logo_path_thumbnail: null,
            image_gallery_path: [],
            image_gallery_path_thumbnail: [],
            category_id: null,
            attributes: [],
            attribute_group: [],
        };
        this.selectProductOptionVisible = false;
        this.selectAttribute = [];
        this.shippingMethod = [];
        this.showBtnBuy = false;
        this.productData = navParams.get('item');
        // this.item.option_price = 0;
        this.productData.attribute_group.forEach(function (val, key) {
            _this.fnSetAttribute(key);
        });
        console.log(this.buyProduct);
    }
    ModalItemOptionPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sv.getUserData()];
                    case 1:
                        _a.userData = _b.sent();
                        this.buyProduct.quantity = 1;
                        this.selectAttribute = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    // choose a option
    ModalItemOptionPage.prototype.chooseOption = function (optionGroup, option) {
        for (var i = 0; i < optionGroup.options.length; i++) {
            optionGroup.options[i].active = false;
        }
        option.active = true;
        optionGroup.currentOption = option;
        // recalculate price
        this.calculatePrice();
    };
    ModalItemOptionPage.prototype.fnSetAttribute = function (key) {
        // console.log('key', key)
        // console.log('select_attribute', this.buyProduct.select_attribute.length)
        // console.log('attribute_group', this.productData.attribute_group.length)
        // console.log('attributes', this.productData.attributes.length)
        this.showBtnBuy = true;
        if (this.productData.attributes.length && key < this.productData.attribute_group.length) {
            if (this.buyProduct.select_attribute.length <= key) {
                this.buyProduct.select_attribute.push(this.productData.attribute_group[key]);
            }
            // this.showBtnBuy = false;
        }
    };
    ModalItemOptionPage.prototype.fnSelectNextAttr = function (key, attr) {
        console.log(attr);
        var attribute_id = attr.attribute_id;
        this.buyProduct.select_attribute[key].select_value = this.sv.fnLang(attr, 'attribute_name');
        this.buyProduct.select_attribute[key].attribute.forEach(function (val) {
            if (val.attribute_id == attribute_id) {
                val.is_select = true;
            }
            else {
                val.is_select = false;
            }
        });
        if (this.buyProduct.select_attribute.length == key + 1) {
            // this.fnSetAttribute(key + 1);
        }
    };
    ModalItemOptionPage.prototype.fnGetValueSelect = function (attributes, attribute_id, idx) {
        var _this = this;
        attributes.forEach(function (val) {
            if (val.attribute_id === attribute_id) {
                _this.fnSelectNextAttr(idx, val);
            }
        });
    };
    // calculate item price
    ModalItemOptionPage.prototype.calculatePrice = function () {
        this.item.option_price = 0;
        for (var i = 0; i < this.item.option_groups.length; i++) {
            if (this.item.option_groups[i].currentOption)
                this.item.option_price += this.item.option_groups[i].currentOption.price;
        }
    };
    // add to card
    ModalItemOptionPage.prototype.addCart = function (item) {
        // let toast = this.toastCtrl.create({
        //   message: 'Item added to card',
        //   duration: 500,
        //   position: 'middle'
        // });
        //
        // toast.present();
        this.sv.showSuccessTranslate('ADD_PRODUCT_TO_CART_SUCCESS');
        this.viewCtrl.dismiss(true);
    };
    // buy now
    ModalItemOptionPage.prototype.buy = function (item) {
    };
    // close modal
    ModalItemOptionPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(true);
    };
    ModalItemOptionPage.prototype.fnAddQuantity = function () {
        this.buyProduct.quantity++;
    };
    ModalItemOptionPage.prototype.fnDownQuantity = function () {
        if (this.buyProduct.quantity > 1) {
            this.buyProduct.quantity--;
        }
    };
    ModalItemOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-item-option',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\modal-item-option\modal-item-option.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="light">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>{{\'SELECT_PRODUCT_OPTION\'|translate}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!--item thumbnail-->\n    <ion-item class="no-border border-bottom">\n        <ion-thumbnail item-left>\n            <img src="{{ sv.fnBuildImg(productData, \'logo_path\') }}">\n        </ion-thumbnail>\n        <div>\n            <h2 class="price" ion-text color="danger" margin-top *ngIf="productData.sale_price">{{ (productData.sale_price\n                * buyProduct.quantity)+buyProduct.option_price |\n                currency:\'฿\':true }}</h2>\n            <h2 class="price" ion-text color="danger" margin-top *ngIf="!productData.sale_price">{{ (productData.price *\n                buyProduct.quantity)+buyProduct.option_price |\n                currency:\'฿\':true }}</h2>\n            <span ion-text color="gray">{{ buyProduct.selectedOptions }}</span>\n        </div>\n    </ion-item>\n\n    <!--<div class="border-bottom" padding *ngFor="let optionGroup of item.option_groups">-->\n    <!--<div>-->\n    <!--{{ optionGroup.name }}-->\n    <!--<span padding-left>{{ optionGroup.currentOption ? optionGroup.currentOption.name : \'\' }}</span>-->\n    <!--</div>-->\n    <!--<div class="item-option" *ngFor="let option of optionGroup.options"-->\n    <!--(click)="chooseOption(optionGroup, option)"-->\n    <!--[ngClass]="{\'active\': option.active}">-->\n    <!--{{ option.name }}-->\n    <!--</div>-->\n    <!--</div>-->\n\n    <div class="border-bottom" padding *ngFor="let attr of buyProduct.select_attribute; let idx = index">\n        <div>\n            {{sv.fnLang(attr, \'group_name\')}}:\n            <span padding-left>{{attr.select_value}}</span>\n        </div>\n        <div class="item-option" *ngFor="let attrVal of attr.attribute;"\n             (click)="chooseOption(attr.attribute, attrVal)"\n             [style.background-color]="attrVal.value"\n             [ngClass]="{\'active\': attrVal.is_select}">\n            <span *ngIf="attr.type==attrType.radio_button||attr.type==attrType.drop_down">\n            {{sv.fnLang(attrVal, \'attribute_name\')}}\n            </span>\n            <!--<div *ngIf="attr.type==attrType.color" style="width: 100%" [style.background-color]="attrVal.value"></div>-->\n        </div>\n    </div>\n\n    <!--<div class="border-bottom">-->\n    <!--<ion-item class="no-border">-->\n    <!--<ion-label>Ship to</ion-label>-->\n    <!--<ion-select>-->\n    <!--<ion-option value="">Singapore</ion-option>-->\n    <!--<ion-option value="vn">Vietnam</ion-option>-->\n    <!--</ion-select>-->\n    <!--</ion-item>-->\n    <!--</div>-->\n    <div class="border-bottom" padding>\n        <div>{{\'QUANTITY\'|translate}}:</div>\n        <div class="input-qty" margin-top>\n      <span class="btn" (click)="fnDownQuantity()">\n        <ion-icon name="ios-remove"></ion-icon>\n      </span>\n            <input type="number" [(value)]="buyProduct.quantity" (input)="buyProduct.quantity=$event.target.value" value="1">\n            <span class="btn" (click)="fnAddQuantity()">\n        <ion-icon name="ios-add"></ion-icon>\n      </span>\n            <div class="clear"></div>\n        </div>\n    </div>\n\n    <!--add to cart-->\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <button ion-button block class="btn-add-cart" (click)="addCart(item)">{{\'ADD_TO_CART\'|translate}}\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" block (click)="buy(item)">{{\'BUY_NOW\'|translate}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\modal-item-option\modal-item-option.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ModalItemOptionPage);
    return ModalItemOptionPage;
}());

//# sourceMappingURL=modal-item-option.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__video_video__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bank_bank__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__map_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vendor_register_vendor_register__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


















/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(nav, categoryService, zone, platform, sv, shareService, toastCtrl, itemService) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.zone = zone;
        this.platform = platform;
        this.sv = sv;
        this.shareService = shareService;
        this.toastCtrl = toastCtrl;
        this.itemService = itemService;
        this.api = __WEBPACK_IMPORTED_MODULE_11__app_app_constant__["a" /* DEFAULT */].config;
        // list slides for slider
        this.slides = [
            {
                src: 'assets/img/Marukyo-app-bg-750.png'
            },
        ];
        this.showMenu = false;
        this.countProduct = 1;
        this.timeSearch = null;
        this.scrollAmount = 0;
        this.isMax = false;
        this.isGetList = false;
        this.isProductNotFound = true;
        this.hideMsg = true;
        this.limit = 10;
        this.page = 0;
        this.counter = 0;
        this.categories = categoryService.getAll();
        // this.items = itemService.getAll();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    HomePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    HomePage.prototype.customHandleBackButton = function () {
        var _this = this;
        var view = this.nav.getActive();
        if (view.instance instanceof HomePage_1) {
            if (this.counter == 0) {
                this.counter++;
                this.presentToast();
                setTimeout(function () {
                    _this.counter = 0;
                }, 2000);
            }
            else {
                // console.log("exitapp");
                this.platform.exitApp();
            }
        }
        else {
            this.nav.pop();
        }
    };
    HomePage.prototype.presentToast = function () {
        var _this = this;
        this.sv.fnGetTranslate('CONFIRM_TO_EXIT').then(function (msg) {
            var toast = _this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: "bottom"
            });
            toast.present();
        });
    };
    HomePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fnGetList(this.page, this.limit)];
                    case 1:
                        products = _b.sent();
                        this.list_product = products.rows;
                        this.countProduct = this.list_product.length;
                        if (!(this.countProduct > 0 && this.countProduct < this.limit)) return [3 /*break*/, 2];
                        this.isProductNotFound = false;
                        this.isMax = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!this.countProduct) return [3 /*break*/, 4];
                        this.isProductNotFound = true;
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 3:
                        _a.temp_list_product = _b.sent();
                        _b.label = 4;
                    case 4:
                        this.hideMsg = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    // view categories
    HomePage.prototype.viewCategories = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */]);
    };
    // view a category
    HomePage.prototype.viewCategory = function (catId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */], { id: catId });
    };
    // view a item
    HomePage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    // view cart
    HomePage.prototype.goToCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            if (_this.timeSearch) {
                clearTimeout(_this.timeSearch);
            }
            _this.timeSearch = setTimeout(function () {
                _this.scrollAmount = event.scrollTop;
            }, 100);
        });
    };
    HomePage.prototype.fnGetList = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                try {
                    filter = { search: '', take: limit, skip: page * limit };
                    return [2 /*return*/, this.sv.get(this.api.product.search, filter)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var newItems, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.isMax && !this.isGetList)) return [3 /*break*/, 3];
                        this.isGetList = true;
                        this.page++;
                        newItems = this.temp_list_product;
                        if (newItems != false) {
                            this.isMax = newItems.rows.length > 0 ? false : true;
                            // this.isProductNotFound = newItems.totalCount > 0 ? false : true;
                            for (i in newItems.rows) {
                                this.list_product.push(newItems.rows[i]);
                            }
                        }
                        this.countProduct = this.list_product.length;
                        infiniteScroll.complete();
                        this.isGetList = false;
                        if (!!this.isMax) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 1:
                        _a.temp_list_product = _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        infiniteScroll.complete();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.fnProductPrice = function (data) {
        return this.sv.fnProductPrice(data);
    };
    HomePage.prototype.fnGoCategory = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.fnGoVIPLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.fnGoVendorRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__vendor_register_vendor_register__["a" /* VendorRegisterPage */]);
    };
    HomePage.prototype.fnGoVideo = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__video_video__["a" /* VideoPage */]);
    };
    HomePage.prototype.fnGoContactLine = function () {
        window.open('https://line.me/R/ti/p/%40marukyo', '_system', 'location=yes');
    };
    HomePage.prototype.fnGoBank = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__bank_bank__["a" /* BankPage */]);
    };
    HomePage.prototype.fnGoContact = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    HomePage.prototype.fnGoMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__map_map__["a" /* MapPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\home\home.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{ \'HOME\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goToSearch()">\n                <ion-icon name="search"></ion-icon>\n            </button>\n            <!--<button ion-button icon-only >-->\n                <!--<ion-icon name="qr-scanner"></ion-icon>-->\n            <!--</button>-->\n            <button *ngIf="shareService.open_add_cart" ion-button icon-only (click)="goToCart()">\n                <ion-icon name="cart"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg" (ionScroll)="scrollHandler($event)">\n    <!-- slider on top-->\n    <ion-slides autoplay="2000">\n        <ion-slide *ngFor="let slide of slides">\n            <img src="{{ slide.src }}" alt="">\n        </ion-slide>\n    </ion-slides>\n\n    <!--list categories-->\n    <ion-card>\n        <ion-list class="cat-list">\n            <ion-row>\n                <ion-col col-3 (click)="viewCategories()">\n                    <img src="assets/ico/icon-product1.png" alt="">\n                    <div text-center>{{ \'CATEGORY\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoVIPLogin()">\n                    <img src="assets/ico/user-login-icon.png" alt="">\n                    <div text-center>{{ \'LOGIN\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoVendorRegister()">\n                    <img src="assets/ico/user-group.png" alt="">\n                    <div text-center>{{ \'VENDOR_REGISTER\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoContact()">\n                    <img src="assets/ico/icon-contact-us.png" alt="">\n                    <div text-center>{{ \'CONTACT_US\' | translate }}</div>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="showMenu">\n                <ion-col col-3 (click)="fnGoContactLine()">\n                    <img src="assets/ico/icon-line.png" alt="">\n                    <div text-center>{{ \'LINE_CHAT\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoBank()">\n                    <img src="assets/ico/icon_bank.png" alt="">\n                    <div text-center>{{ \'BANK_NO\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoVideo()">\n                    <img src="assets/ico/Icon-video.png" alt="">\n                    <div text-center>{{ \'VIDEO\' | translate }}</div>\n                </ion-col>\n                <ion-col col-3 (click)="fnGoMap()">\n                    <img src="assets/ico/icon-map.png" alt="">\n                    <div text-center>{{ \'MAP\' | translate }}</div>\n                </ion-col>\n                <!--<ion-col col-3 text-center (click)="viewCategories()">-->\n                    <!--<img src="assets/img/categories/all.png" alt="">-->\n                    <!--<div text-center>All categories</div>-->\n                <!--</ion-col>-->\n            </ion-row>\n                <ion-col col-12>\n                    <hr/>\n                    <div text-center (click)="showMenu=false;" *ngIf="showMenu"> <ion-icon name="ios-arrow-up"></ion-icon></div>\n                    <div text-center (click)="showMenu=true;" *ngIf="!showMenu"> <ion-icon name="ios-arrow-down"></ion-icon></div>\n                </ion-col>\n            <ion-row>\n            </ion-row>\n        </ion-list>\n    </ion-card>\n\n    <!--Deals-->\n    <!--<ion-grid class="grid-no-padding deals">-->\n    <!--<ion-row>-->\n    <!--<ion-col text-center>-->\n    <!--<ion-card>-->\n    <!--<div>Flash Deals</div>-->\n    <!--<ion-badge color="primary">00:00:01</ion-badge>-->\n    <!--<img src="assets/img/items/item_1.jpg" alt="">-->\n    <!--</ion-card>-->\n    <!--</ion-col>-->\n    <!--<ion-col text-center>-->\n    <!--<ion-card>-->\n    <!--<div>Super Deals</div>-->\n    <!--<ion-badge color="primary">Up to 90% off</ion-badge>-->\n    <!--<img src="assets/img/items/item_2.jpg" alt="">-->\n    <!--</ion-card>-->\n    <!--</ion-col>-->\n    <!--</ion-row>-->\n    <!--</ion-grid>-->\n\n    <h4 text-center>{{\'LIST_PRODUCT\' | translate }}</h4>\n\n    <!--List of items-->\n    <!--<ion-grid class="list-cards">-->\n        <!--<ion-row>-->\n            <!--<ion-col *ngFor="let item of items" col-6 class="product" (click)="viewItem(item.id)">-->\n                <!--<div class="card light-bg">-->\n                    <!--<img src="{{ item.thumb }}" alt="{{ item.name }}">-->\n                    <!--<div class="price" text-center>{{ item.price | currency:\'USD\':true }}</div>-->\n                <!--</div>-->\n            <!--</ion-col>-->\n        <!--</ion-row>-->\n    <!--</ion-grid>-->\n    <ion-grid class="list-cards">\n        <ion-row>\n            <ion-col *ngFor="let item of list_product" col-6 class="product" (click)="viewItem(item.id)">\n                <div class="card light-bg" style="width: 100%;height: 100%" >\n                    <img style="width: 100%;height: 80%" src="{{ sv.fnBuildImg(item, \'logo_path\') }}" alt="{{sv.fnLang(item, \'name\')}}">\n                    <div class="price" text-center>{{item.sale_price?item.sale_price:item.price| currency:\'฿\':true }}</div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div *ngIf="!isProductNotFound">\n        <div class="alert alert-info center" [hidden]="!isMax">{{ \'PRODUCT_FOUND\'| translate:{value: countProduct} }}</div>\n    </div>\n    <div *ngIf="!hideMsg">\n        <div class="alert alert-warning" [hidden]="!isProductNotFound">{{\'PRODUCT_NOT_FOUND\' | translate}} </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n                loadingSpinner="bubbles"\n                loadingText="{{ \'LOADING_DATA\' | translate }}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_10__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OrderConfirmPage = (function () {
    function OrderConfirmPage(nav, cartService) {
        this.nav = nav;
        this.cartService = cartService;
        // set cart data
        this.cart = cartService.getAll();
    }
    // place order
    OrderConfirmPage.prototype.buy = function () {
        // back to home page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    OrderConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-confirm',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\order-confirm\order-confirm.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Place Order</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg cart">\n  <div class="card">\n    <div class="card-header" padding>\n      Shipping address:\n    </div>\n    <div padding>\n      <span ion-text color="secondary">ENTER SHIPPING ADDRESS</span>\n    </div>\n  </div>\n\n  <div class="card" margin-top *ngFor="let seller of cart.sellers; let sellerIndex = index"\n       [hidden]="!seller.items.length">\n    <div class="card-header" padding>\n      Seller: {{ seller.name }}\n    </div>\n\n    <ion-list class="list-full-border" no-margin>\n      <ion-item class="product" *ngFor="let item of seller.items; let i = index">\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}">\n        </ion-thumbnail>\n        <!--item\'s information-->\n        <div>\n          <div text-wrap>{{ item.name }}</div>\n          <div class="text-sm">\n            <span ion-text color="gray">{{ item.options.join(\',\') }}</span>\n          </div>\n          <div margin-top>\n            <div class="input-qty">\n            <span class="btn">\n              <ion-icon name="ios-remove"></ion-icon>\n            </span>\n              <input type="text" [(ngModel)]="item.quantity">\n              <span class="btn">\n              <ion-icon name="ios-add"></ion-icon>\n            </span>\n              <div class="clear"></div>\n            </div>\n            <div class="pull-right price">\n              <span>{{ item.price | currency:\'USD\':true }}</span>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n\n    <ion-input placeholder="Massage to Supplier(Optional)"></ion-input>\n\n    <div class="card-footer" padding>\n      <div>\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n        <span class="pull-right" ion-text color="gray">{{ seller.subtotal | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n        <span class="pull-right" ion-text color="gray">{{ seller.shipping | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Total</span>\n        <span class="pull-right bold" ion-text color="danger">{{ seller.total | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n\n  <!--Total price-->\n  <div class="card" margin-top>\n    <div class="card-footer" padding>\n      <div>\n        <span class="pull-left" ion-text color="gray">Subtotal</span>\n        <span class="pull-right" ion-text color="gray">{{ cart.subtotal | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Shipping</span>\n        <span class="pull-right" ion-text color="gray">{{ cart.shipping | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <span class="pull-left" ion-text color="gray">Coupon</span>\n        <span class="pull-right" ion-text color="secondary">PLEASE ENTER COUPON CODE</span>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class="cart-footer" padding>\n  <ion-title>\n    <span ion-text color="gray">Total</span>\n    <br/>\n    <span class="bold" ion-text color="danger">{{ cart.total | currency:\'USD\':true }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="buy()" color="danger">\n      PLACE ORDER\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\order-confirm\order-confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], OrderConfirmPage);
    return OrderConfirmPage;
}());

//# sourceMappingURL=order-confirm.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








// import {CategorySubPage} from "../category-sub/category-sub";
// import {ProductDetailPage} from "../product-detail/product-detail";
// import {ProductCartPage} from "../product-cart/product-cart";
// import {ProductSearchPage} from "../product-search/product-search";
/**
 * Generated class for the CategoryProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryProductPage = (function () {
    function CategoryProductPage(navCtrl, navParams, apiService, shareService, zone, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.countProduct = 0;
        this.isProductNotFound = true;
        this.hideMsg = true;
        this.lang = 'th';
        this.page = 0;
        this.limit = 10;
        this.isMax = false;
        this.isGetList = false;
        this.scrollAmount = 0;
        this.timeScroll = null;
        // sort by
        this.sortBy = 'Best Match';
        // view type
        this.viewType = 'list';
        // this.urlUpload = this.apiService.fnBuildAPIUrl(this.api.product.image.upload);
    }
    CategoryProductPage.prototype.ngOnInit = function () {
        this.sub_id = this.navParams.get('id');
        this.title = this.navParams.get('name');
        this.fnGetCatGroup();
    };
    CategoryProductPage.prototype.fnGetCatGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fnGetList(this.page, this.limit)];
                    case 1:
                        data = _b.sent();
                        this.list_product = data.rows;
                        this.countProduct = this.list_product.length;
                        console.log(this.countProduct);
                        if (!(this.countProduct > 0 && this.countProduct < this.limit)) return [3 /*break*/, 2];
                        this.isProductNotFound = false;
                        this.isMax = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.countProduct > 0)) return [3 /*break*/, 4];
                        this.isProductNotFound = false;
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 3:
                        _a.temp_list_product = _b.sent();
                        _b.label = 4;
                    case 4:
                        this.hideMsg = false;
                        console.log('isProductNotFound:', this.isProductNotFound);
                        console.log('countProduct:', this.countProduct);
                        console.log('hideMsg:', this.hideMsg);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryProductPage.prototype.fnGetList = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                try {
                    filter = { id: this.sub_id, search: '', take: limit, skip: page * limit };
                    return [2 /*return*/, this.apiService.get(this.api.category.getProduct, filter, false)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    CategoryProductPage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var newItems, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.isMax && !this.isGetList)) return [3 /*break*/, 3];
                        this.isGetList = true;
                        this.page++;
                        newItems = this.temp_list_product;
                        console.log('newItems', newItems);
                        if (newItems != false) {
                            this.isMax = newItems.rows.length > 0 ? false : true;
                            // this.isProductNotFound = newItems.length ? false : true;
                            for (i in newItems.rows) {
                                this.list_product.push(newItems.rows[i]);
                            }
                        }
                        this.countProduct = this.list_product.length;
                        infiniteScroll.complete();
                        this.isGetList = false;
                        if (!!this.isMax) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 1:
                        _a.temp_list_product = _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        infiniteScroll.complete();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // choose sort by
    CategoryProductPage.prototype.chooseSortBy = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Best Match',
                    handler: function () {
                        _this.sortBy = 'Best Match';
                    }
                },
                {
                    text: 'Lowest Price First',
                    handler: function () {
                        _this.sortBy = 'Lowest Price First';
                    }
                },
                {
                    text: 'Highest Price First',
                    handler: function () {
                        _this.sortBy = 'Highest Price First';
                    }
                },
                {
                    text: 'No. of orders',
                    handler: function () {
                        _this.sortBy = 'No. of orders';
                    }
                },
                {
                    text: 'Seller Rating',
                    handler: function () {
                        _this.sortBy = 'Seller Rating';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // switch to list view
    CategoryProductPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    CategoryProductPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    CategoryProductPage.prototype.viewItem = function (itemId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // show filter modal
    CategoryProductPage.prototype.openFilter = function (tabName) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__["a" /* ModalFilterPage */], { tabName: tabName });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    CategoryProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryProductPage');
    };
    CategoryProductPage.prototype.fnGetPrice = function (product) {
        if (this.apiService.checkData(this.userData)) {
            return product.price1;
        }
        return product.price1;
    };
    CategoryProductPage.prototype.goToDetail = function (product) {
        // this.navCtrl.push(ProductDetailPage, {id: product.id});
    };
    CategoryProductPage.prototype.scrollToTop = function () {
        this.content.scrollTo(0, 0, 1000);
    };
    CategoryProductPage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            clearTimeout(_this.timeScroll);
            _this.timeScroll = setTimeout(function () {
                _this.scrollAmount = event.scrollTop;
            }, 100);
        });
    };
    CategoryProductPage.prototype.fnGOToCart = function () {
        // this.navCtrl.push(ProductCartPage);
    };
    // go to search page
    CategoryProductPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], CategoryProductPage.prototype, "content", void 0);
    CategoryProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category-product',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\category-product\category-product.html"*/'<!--\n  Generated template for the CategoryProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="fnGOToCart()">\n        &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="ios-cart"></ion-icon>\n        <span class="badge"> {{ shareService.count_product }} </span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div padding class="border-bottom text-lg">\n    <!--<span class="pull-left" (click)="chooseSortBy()" ion-text color="gray">-->\n      <!--{{ sortBy }}-->\n      <!--<ion-icon name="md-arrow-dropdown"></ion-icon>-->\n    <!--</span>-->\n    <ion-icon class="pull-right" name="apps" (click)="viewGrid()" [hidden]="viewType == \'grid\'"></ion-icon>\n    <ion-icon class="pull-right" name="menu" (click)="viewList()" [hidden]="viewType == \'list\'"></ion-icon>\n    <div class="clear"></div>\n  </div>\n\n  <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let item of list_product" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left>\n        <img src="{{ apiService.fnBuildImg(item, \'logo_path\') }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ apiService.fnLang(item, \'name\') }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'฿\':true }}</span>\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'฿\':true }}</span>\n        </div>\n        <div class="origin-price text-sm">\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'฿\':true }}</span>\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>\n        </div>\n        <!--<div class="bottom-info text-sm">-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'฿\':true}}</span>-->\n        <!--<span ion-text color="gray" class="pull-right">-->\n        <!--{{ item.num_orders }} Orders-->\n        <!--</span>-->\n        <!--<div class="clear"></div>-->\n        <!--</div>-->\n      </div>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="!isProductNotFound">\n    <div class="alert alert-info center" [hidden]="!isMax">{{ \'PRODUCT_FOUND\'| translate:{value: countProduct} }}</div>\n  </div>\n  <div *ngIf="!hideMsg">\n    <div class="alert alert-warning" [hidden]="!isProductNotFound">{{\'PRODUCT_NOT_FOUND\' | translate}} </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="{{ \'LOADING_DATA\' | translate }}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n\n<!--Footer buttons-->\n<!--<ion-footer class="category">-->\n  <!--<ion-toolbar position="bottom">-->\n    <!--&lt;!&ndash;filter button&ndash;&gt;-->\n    <!--<ion-buttons text-center start>-->\n      <!--<button ion-button icon-left (click)="openFilter(\'filter\')">-->\n        <!--<ion-icon name="ios-funnel"></ion-icon>-->\n        <!--FILTER-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n    <!--&lt;!&ndash;attribute button&ndash;&gt;-->\n    <!--<ion-buttons text-center end>-->\n      <!--<button ion-button icon-left (click)="openFilter(\'attribute\')">-->\n        <!--<ion-icon name="apps"></ion-icon>-->\n        <!--ATTRIBUTE-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-toolbar>-->\n<!--</ion-footer>-->\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\category-product\category-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CategoryProductPage);
    return CategoryProductPage;
}());

//# sourceMappingURL=category-product.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabFilterPage = (function () {
    function TabFilterPage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // set filter value
        this.filter = {
            shipTo: ''
        };
    }
    // close modal
    TabFilterPage.prototype.closeModal = function () {
        // this.nav.pop();
        // this.viewCtrl.dismiss(true);
    };
    TabFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-filter',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\tab-filter\tab-filter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Search Result(105)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="tab-filter">\n  <!--filter list-->\n  <ion-list class="list-no-border">\n    <ion-item>\n      <ion-label>Ship to</ion-label>\n      <ion-select [(ngModel)]="filter.shipTo">\n        <ion-option value="">All Regions</ion-option>\n        <ion-option value="vn">Vietnam</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="price-ranger">\n      <ion-label>Price</ion-label>\n      <ion-input type="text" placeholder="Min"></ion-input>\n      -\n      <ion-input type="text" placeholder="Max"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Free shipping</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Once pice only</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sale items</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<!--Footer buttons-->\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        CANCEL\n      </button>\n      <button ion-button icon-only (click)="closeModal()">\n        <span ion-text color="gray">APPLY</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\tab-filter\tab-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TabFilterPage);
    return TabFilterPage;
}());

//# sourceMappingURL=tab-filter.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAttributePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabAttributePage = (function () {
    function TabAttributePage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // all attributes
        this.attr = {
            category: 1,
            sleeve: '',
            fabric: ''
        };
    }
    // close modal
    TabAttributePage.prototype.closeModal = function () {
        // this.nav.pop();
        // this.viewCtrl.dismiss(true);
    };
    TabAttributePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-attribute',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\tab-attribute\tab-attribute.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Search Result(105)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="tab-attribute">\n  <!--select attributes-->\n  <ion-list class="list-no-border">\n    <ion-item>\n      <ion-label>Categories</ion-label>\n      <ion-select [(ngModel)]="attr.category">\n        <ion-option value="1">Dress</ion-option>\n        <ion-option value="2">Skirt</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sleeve Length</ion-label>\n      <ion-select [(ngModel)]="attr.sleeve">\n        <ion-option value="">All</ion-option>\n        <ion-option value="1">Short</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fabric Type</ion-label>\n      <ion-select [(ngModel)]="attr.fabric">\n        <ion-option value="">All</ion-option>\n        <ion-option value="1">Batik</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--Footer buttons-->\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        CANCEL\n      </button>\n      <button ion-button icon-only (click)="closeModal()">\n        <span ion-text color="gray">APPLY</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\tab-attribute\tab-attribute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TabAttributePage);
    return TabAttributePage;
}());

//# sourceMappingURL=tab-attribute.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, navParams, apiService, shareService, zone, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.list_product = [];
        this.countProduct = 0;
        this.hideMsg = true;
        this.isProductNotFound = true;
        this.lang = 'th';
        this.search_text = '';
        this.page = 0;
        this.limit = 10;
        this.isMax = false;
        this.isGetList = false;
        this.scrollAmount = 0;
        this.timeScroll = null;
        // sort by
        this.sortBy = 'Best Match';
        // view type
        this.viewType = 'list';
        // this.urlUpload = this.apiService.fnBuildAPIUrl(this.api.product.image.upload);
    }
    SearchResultPage.prototype.ngOnInit = function () {
        this.search_text = this.navParams.get('search_text');
        // this.sub_id = this.navParams.get('search');
        this.title = this.search_text;
        this.fnGetCatGroup();
    };
    SearchResultPage.prototype.fnGetCatGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fnGetList(this.page, this.limit)];
                    case 1:
                        res = _b.sent();
                        console.log(res);
                        this.list_product = res.rows;
                        this.countProduct = this.list_product.length;
                        console.log(this.countProduct);
                        if (!(this.countProduct > 0 && this.countProduct < this.limit)) return [3 /*break*/, 2];
                        this.isProductNotFound = false;
                        this.isMax = true;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!this.countProduct) return [3 /*break*/, 4];
                        this.isProductNotFound = false;
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 3:
                        _a.temp_list_product = _b.sent();
                        _b.label = 4;
                    case 4:
                        this.hideMsg = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchResultPage.prototype.fnGetList = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                try {
                    filter = { search: this.search_text, take: limit, skip: page * limit };
                    return [2 /*return*/, this.apiService.get(this.api.product.search, filter, false)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    SearchResultPage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var newItems, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.isMax && !this.isGetList)) return [3 /*break*/, 3];
                        this.isGetList = true;
                        this.page++;
                        newItems = this.temp_list_product;
                        if (newItems != false) {
                            this.isMax = newItems.rows.length > 0 ? false : true;
                            // this.isProductNotFound = newItems.length ? false : true;
                            for (i in newItems.rows) {
                                this.list_product.push(newItems.rows[i]);
                            }
                        }
                        this.countProduct = this.list_product.length;
                        infiniteScroll.complete();
                        this.isGetList = false;
                        if (!!this.isMax) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fnGetList(this.page + 1, this.limit)];
                    case 1:
                        _a.temp_list_product = _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        infiniteScroll.complete();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // choose sort by
    SearchResultPage.prototype.chooseSortBy = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Best Match',
                    handler: function () {
                        _this.sortBy = 'Best Match';
                    }
                },
                {
                    text: 'Lowest Price First',
                    handler: function () {
                        _this.sortBy = 'Lowest Price First';
                    }
                },
                {
                    text: 'Highest Price First',
                    handler: function () {
                        _this.sortBy = 'Highest Price First';
                    }
                },
                {
                    text: 'No. of orders',
                    handler: function () {
                        _this.sortBy = 'No. of orders';
                    }
                },
                {
                    text: 'Seller Rating',
                    handler: function () {
                        _this.sortBy = 'Seller Rating';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // switch to list view
    SearchResultPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    SearchResultPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    SearchResultPage.prototype.viewItem = function (itemId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // show filter modal
    SearchResultPage.prototype.openFilter = function (tabName) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__["a" /* ModalFilterPage */], { tabName: tabName });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    SearchResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryProductPage');
    };
    SearchResultPage.prototype.fnGetPrice = function (product) {
        if (this.apiService.checkData(this.userData)) {
            return product.price1;
        }
        return product.price1;
    };
    SearchResultPage.prototype.goToDetail = function (product) {
        // this.navCtrl.push(ProductDetailPage, {id: product.id});
    };
    SearchResultPage.prototype.scrollToTop = function () {
        this.content.scrollTo(0, 0, 1000);
    };
    SearchResultPage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            clearTimeout(_this.timeScroll);
            _this.timeScroll = setTimeout(function () {
                _this.scrollAmount = event.scrollTop;
            }, 100);
        });
    };
    SearchResultPage.prototype.fnGOToCart = function () {
        // this.navCtrl.push(ProductCartPage);
    };
    SearchResultPage.prototype.fnGoToSearch = function () {
        // this.navCtrl.push(ProductSearchPage);
    };
    SearchResultPage.prototype.fnGoToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchResultPage.prototype, "content", void 0);
    SearchResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-result',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\search-result\search-result.html"*/'<!--\n  Generated template for the CategoryProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnGoToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <button ion-button icon-only *ngIf="shareService.open_add_cart" (click)="fnGOToCart()">\n        &nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="ios-cart"></ion-icon>\n        <span class="badge"> {{ shareService.count_product }} </span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div padding class="border-bottom text-lg">\n    <!--<span class="pull-left" (click)="chooseSortBy()" ion-text color="gray">-->\n    <!--{{ sortBy }}-->\n    <!--<ion-icon name="md-arrow-dropdown"></ion-icon>-->\n    <!--</span>-->\n    <ion-icon class="pull-right" name="apps" (click)="viewGrid()" [hidden]="viewType == \'grid\'"></ion-icon>\n    <ion-icon class="pull-right" name="menu" (click)="viewList()" [hidden]="viewType == \'list\'"></ion-icon>\n    <div class="clear"></div>\n  </div>\n\n  <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let item of list_product" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left>\n        <img src="{{ apiService.fnBuildImg(item, \'logo_path\') }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ apiService.fnLang(item, \'name\') }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'฿\':true }}</span>\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'฿\':true }}</span>\n        </div>\n        <div class="origin-price text-sm">\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'฿\':true }}</span>\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>\n        </div>\n        <!--<div class="bottom-info text-sm">-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'฿\':true}}</span>-->\n        <!--<span ion-text color="gray" class="pull-right">-->\n        <!--{{ item.num_orders }} Orders-->\n        <!--</span>-->\n        <!--<div class="clear"></div>-->\n        <!--</div>-->\n      </div>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="!isProductNotFound">\n    <div class="alert alert-info center" [hidden]="!isMax">{{ \'PRODUCT_FOUND\'| translate:{value: countProduct} }}</div>\n  </div>\n  <div *ngIf="!hideMsg">\n    <div class="alert alert-warning" [hidden]="!isProductNotFound">{{\'PRODUCT_NOT_FOUND\' | translate}} </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n            loadingSpinner="bubbles"\n            loadingText="{{ \'LOADING_DATA\' | translate }}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n\n<!--Footer buttons-->\n<!--<ion-footer class="category">-->\n<!--<ion-toolbar position="bottom">-->\n<!--&lt;!&ndash;filter button&ndash;&gt;-->\n<!--<ion-buttons text-center start>-->\n<!--<button ion-button icon-left (click)="openFilter(\'filter\')">-->\n<!--<ion-icon name="ios-funnel"></ion-icon>-->\n<!--FILTER-->\n<!--</button>-->\n<!--</ion-buttons>-->\n<!--&lt;!&ndash;attribute button&ndash;&gt;-->\n<!--<ion-buttons text-center end>-->\n<!--<button ion-button icon-left (click)="openFilter(\'attribute\')">-->\n<!--<ion-icon name="apps"></ion-icon>-->\n<!--ATTRIBUTE-->\n<!--</button>-->\n<!--</ion-buttons>-->\n<!--</ion-toolbar>-->\n<!--</ion-footer>-->\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\search-result\search-result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], SearchResultPage);
    return SearchResultPage;
}());

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
    }
    // submit email
    ForgotPasswordPage.prototype.send = function () {
        // enter your code here
        // back to login page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPasswordPage.prototype.fnGoToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'FORGET_PASSWORD\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnGoToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="forgot-password">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="text" placeholder="{{\'ENTER_YOUR_EMAIL\'|translate}}"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="send()">{{\'RESET_PASSWORD\'|translate}}</button>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\forgot-password\forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_detail_video_detail__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_youtube_video_player__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








 // import {CategorySubPage} from "../category-sub/category-sub";
// import {ProductDetailPage} from "../product-detail/product-detail";
// import {ProductCartPage} from "../product-cart/product-cart";
// import {ProductSearchPage} from "../product-search/product-search";
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = (function () {
    function VideoPage(navCtrl, navParams, apiService, shareService, zone, modalCtrl, youtube, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.youtube = youtube;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.countProduct = 0;
        this.isProductNotFound = true;
        this.lang = 'th';
        this.page = 0;
        this.limit = 10;
        this.isMax = false;
        this.scrollAmount = 0;
        this.timeScroll = null;
        // sort by
        this.sortBy = 'Best Match';
        // view type
        this.viewType = 'list';
        this.youtube_list = [
            {
                title: "test Youtube1",
                url: "http://www.youtube.com/embed/a6KGPBflhiM",
                v_id: "a6KGPBflhiM",
                thumbnail_id: "1",
                description: "asdf efe d1121141",
            },
            {
                title: "test Youtube2",
                url: "http://www.youtube.com/embed/a6KGPBflhiM",
                v_id: "a6KGPBflhiM",
                thumbnail_id: "2",
                description: "2 asfa asfd asfd",
            }
        ];
        // this.urlUpload = this.apiService.fnBuildAPIUrl(this.api.product.image.upload);
    }
    VideoPage.prototype.ngOnInit = function () {
        this.sub_id = this.navParams.get('id');
        this.title = this.navParams.get('name');
        this.fnGetCatGroup();
    };
    VideoPage.prototype.fnGetCatGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetList()];
                    case 1:
                        res = _a.sent();
                        this.youtube_list = res.rows;
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoPage.prototype.fnGetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.apiService.get(this.api.video.list, false)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    // async doInfinite(infiniteScroll) {
    //     if (!this.isMax) {
    //         this.page++;
    //         let newItems = await this.fnGetList(this.page, this.limit);
    //         if (newItems != false) {
    //             this.isMax = newItems.length > 0 ? false : true;
    //             this.isProductNotFound = newItems.length ? false : true;
    //         }
    //         setTimeout(() => {
    //             if (newItems != false) {
    //                 for (let i in newItems) {
    //                     this.list_product.push(newItems[i]);
    //                 }
    //                 this.countProduct = this.list_product.length;
    //             }
    //             infiniteScroll.complete();
    //         }, 500);
    //     } else {
    //         infiniteScroll.complete();
    //     }
    // }
    // choose sort by
    VideoPage.prototype.chooseSortBy = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Best Match',
                    handler: function () {
                        _this.sortBy = 'Best Match';
                    }
                },
                {
                    text: 'Lowest Price First',
                    handler: function () {
                        _this.sortBy = 'Lowest Price First';
                    }
                },
                {
                    text: 'Highest Price First',
                    handler: function () {
                        _this.sortBy = 'Highest Price First';
                    }
                },
                {
                    text: 'No. of orders',
                    handler: function () {
                        _this.sortBy = 'No. of orders';
                    }
                },
                {
                    text: 'Seller Rating',
                    handler: function () {
                        _this.sortBy = 'Seller Rating';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // switch to list view
    VideoPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    VideoPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    VideoPage.prototype.viewItem = function (itemId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // show filter modal
    VideoPage.prototype.openFilter = function (tabName) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_filter_modal_filter__["a" /* ModalFilterPage */], { tabName: tabName });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage.prototype.fnGetPrice = function (product) {
        if (this.apiService.checkData(this.userData)) {
            return product.price1;
        }
        return product.price1;
    };
    VideoPage.prototype.scrollToTop = function () {
        this.content.scrollTo(0, 0, 1000);
    };
    VideoPage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            clearTimeout(_this.timeScroll);
            _this.timeScroll = setTimeout(function () {
                _this.scrollAmount = event.scrollTop;
            }, 100);
        });
    };
    VideoPage.prototype.fnGOToCart = function () {
        // this.navCtrl.push(ProductCartPage);
    };
    VideoPage.prototype.fnGoToSearch = function () {
        // this.navCtrl.push(ProductSearchPage);
    };
    VideoPage.prototype.fnGetThumbnailUrl = function (v_id, idx) {
        var url = "https://img.youtube.com/vi/" + v_id + "/" + idx + ".jpg";
        return url;
    };
    VideoPage.prototype.openVideo1 = function () {
        console.log('play');
        this.youtube.openVideo('Ur9jjfrWLdw');
    };
    VideoPage.prototype.goToDetail = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__video_detail_video_detail__["a" /* VideoDetailPage */], data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], VideoPage.prototype, "content", void 0);
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\video\video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'VIDEO\' | translate }}</ion-title>\n\n    <!--<ion-buttons end>-->\n      <!--<button ion-button icon-only (click)="fnGoToSearch()">-->\n        <!--<ion-icon name="search"></ion-icon>-->\n      <!--</button>-->\n      <!--<button ion-button icon-only (click)="fnGOToCart()">-->\n        <!--&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="ios-cart"></ion-icon>-->\n        <!--<span class="badge"> {{ shareService.count_product }} </span>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div padding class="border-bottom text-lg">\n    <!--<span class="pull-left" (click)="chooseSortBy()" ion-text color="gray">-->\n      <!--{{ sortBy }}-->\n      <!--<ion-icon name="md-arrow-dropdown"></ion-icon>-->\n    <!--</span>-->\n    <ion-icon class="pull-right" name="apps" (click)="viewGrid()" [hidden]="viewType == \'grid\'"></ion-icon>\n    <ion-icon class="pull-right" name="menu" (click)="viewList()" [hidden]="viewType == \'list\'"></ion-icon>\n    <div class="clear"></div>\n  </div>\n\n  <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let video of youtube_list" (click)="goToDetail(video)">\n      <ion-thumbnail item-left>\n        <img [src]="fnGetThumbnailUrl(video.video_id, video.thumbnail_id||1)">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ apiService.fnLang(video, \'title\') }}</div>\n        <!--<div>-->\n          <!--<span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'฿\':true }}</span>-->\n          <!--<span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'฿\':true }}</span>-->\n        <!--</div>-->\n        <!--<div class="origin-price text-sm">-->\n          <!--<span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'฿\':true }}</span>-->\n          <!--<span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>-->\n        <!--</div>-->\n        <!--<div class="bottom-info text-sm">-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>-->\n        <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'฿\':true}}</span>-->\n        <!--<span ion-text color="gray" class="pull-right">-->\n        <!--{{ item.num_orders }} Orders-->\n        <!--</span>-->\n        <!--<div class="clear"></div>-->\n        <!--</div>-->\n      </div>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<!--Footer buttons-->\n<!--<ion-footer class="category">-->\n  <!--<ion-toolbar position="bottom">-->\n    <!--&lt;!&ndash;filter button&ndash;&gt;-->\n    <!--<ion-buttons text-center start>-->\n      <!--<button ion-button icon-left (click)="openFilter(\'filter\')">-->\n        <!--<ion-icon name="ios-funnel"></ion-icon>-->\n        <!--FILTER-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n    <!--&lt;!&ndash;attribute button&ndash;&gt;-->\n    <!--<ion-buttons text-center end>-->\n      <!--<button ion-button icon-left (click)="openFilter(\'attribute\')">-->\n        <!--<ion-icon name="apps"></ion-icon>-->\n        <!--ATTRIBUTE-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-toolbar>-->\n<!--</ion-footer>-->\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\video\video.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VideoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoDetailPage = (function () {
    function VideoDetailPage(navCtrl, navParams, apiService, shareService, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.shareService = shareService;
        this.sanitizer = sanitizer;
        this.title = this.shareService.lang == 'th' ? this.navParams.get('title_th') : this.navParams.get('title_en');
        this.description = this.shareService.lang == 'th' ? this.navParams.get('detail_th') : this.navParams.get('detail_en');
        this.v_id = this.navParams.get('video_id');
        var url = 'http://www.youtube.com/embed/' + this.v_id;
        // let url = 'http://www.youtube.com/embed/' + this.navParams.get('url');
        this.fnSetUrlVideo(url);
        console.log(this.description);
    }
    VideoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoDetailPage');
    };
    VideoDetailPage.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VideoDetailPage.prototype.fnSetUrlVideo = function (url) {
        this.urlVideo = this.transform(url);
    };
    VideoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video-detail',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\video-detail\video-detail.html"*/'<!--\n  Generated template for the VideoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'VIDEO_PLAY\' | translate }}</ion-title>\n\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2 class="font-blue">{{title}}</h2>\n  <iframe width="100%" height="315" [src]="urlVideo" frameborder="0" allowfullscreen></iframe>\n  <span class="font-blue font-bold">{{ \'DESCRIPTION\'| translate }}:</span>\n  <span>{{description}}</span>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\video-detail\video-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoDetailPage);
    return VideoDetailPage;
}());

//# sourceMappingURL=video-detail.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = (function () {
    function ContactUsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.openPopupPhone = false;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage.prototype.fnCopy = function (str) {
        this.service.fnCopyClipboard(str);
    };
    ContactUsPage.prototype.fnGoWeb = function (str) {
        window.open(str, '_system', 'location=yes');
    };
    ContactUsPage.prototype.fnCall = function (str) {
        window.open('tel:' + str, '_system', 'location=yes');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\contact-us\contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>{{ \'CONTACT_US\' | translate }}</ion-title>\n\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <!--<ion-item-sliding #item>-->\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <img src="assets/ico/icon-phone.png" style="width: 98%;margin-left: -10px">\n                    </ion-col>\n                    <ion-col col-9 (click)="openPopupPhone=true;">\n                        <h2 class="font-red font-bold">{{\'PHONE\'|translate}}</h2>\n                        <span class="font-blue">02-803-7406</span><br/>\n                        <span class="font-blue">081-825-4835</span>\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnCopy(\'02-803-7406\')">{{\'COPY\'| translate}}</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--<ion-item-sliding #item>-->\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <img src="assets/ico/email-icon.png" style="width: 98%;margin-left: -10px">\n                    </ion-col>\n                    <ion-col col-9 (click)="fnGoWeb(\'mailto:marukyo@gmail.com\')">\n                        <h2 class="font-red font-bold">{{\'EMAIL\'|translate}}</h2>\n                        <span class="font-blue">marukyo@gmail.com</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnGoWeb(\'mailto:marukyo@gmail.com\')">{{\'SEND_EMAIL\'| translate}}</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--<ion-item-sliding #item>-->\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <img src="assets/ico/icon-line2.png" style="width: 98%;margin-left: -10px">\n                    </ion-col>\n                    <ion-col col-9 (click)="fnGoWeb(\'https://line.me/R/ti/p/%40marukyo\')">\n                        <h2 class="font-red font-bold">{{\'LINE\'|translate}}</h2>\n                        <span class="font-blue">@marukyo</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnGoWeb(\'https://line.me/R/ti/p/%40marukyo\')">{{\'GO_WEB_SITE\'| translate}}</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--<ion-item-sliding #item>-->\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <img src="assets/ico/Facebook-Icon.png" style="width: 98%;margin-left: -10px">\n                    </ion-col>\n                    <ion-col col-9 (click)="fnGoWeb(\'https://www.facebook.com/marukyo\')">\n                        <h2 class="font-red font-bold">Facebook</h2>\n                        <span class="font-blue">www.facebook.com/marukyo</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnGoWeb(\'https://www.facebook.com/marukyo\')">{{\'GO_WEB_SITE\'| translate}}-->\n        <!--</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n        <!--<ion-item-sliding #item>-->\n        <ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <img src="assets/ico/icon-wetsite.ico" style="width: 98%;margin-left: -10px">\n                    </ion-col>\n                    <ion-col col-9 (click)="fnGoWeb(\'http://www.marukyo.co.th\')">\n                        <h2 class="font-red font-bold">{{\'WEB_SITE\'|translate}}</h2>\n                        <span class="font-blue">http://www.marukyo.co.th</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnGoWeb(\'http://www.marukyo.co.th\')">{{\'GO_WEB_SITE\'| translate}}</button>-->\n        <!--</ion-item-options>-->\n        <!--</ion-item-sliding>-->\n    </ion-list>\n    <dx-popup\n            class="popup"\n            width="90%"\n            height="200"\n            [showTitle]="true"\n            title="{{\'PHONE\' | translate}}"\n            [dragEnabled]="false"\n            [closeOnOutsideClick]="true"\n            [showCloseButton]="true"\n            [(visible)]="openPopupPhone">\n        <div *dxTemplate="let data of \'content\'">\n            <ion-list>\n                <!--<ion-list-header>Ionic</ion-list-header>-->\n                <button class="font-blue" ion-item (click)="fnCall(\'02-803-7406\')">\n                    <ion-icon ios="ios-call" md="md-call"></ion-icon> 02-803-7406</button>\n                <button class="font-blue" ion-item (click)="fnCall(\'081-825-4835\')">\n                    <ion-icon ios="ios-call" md="md-call"></ion-icon> 081-825-4835</button>\n            </ion-list>\n        </div>\n    </dx-popup>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the BankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankPage = (function () {
    function BankPage(navCtrl, navParams, apiService, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.translate = translate;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.banks = [];
    }
    BankPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fnGetList()];
                    case 1:
                        data = _a.sent();
                        this.banks = data.rows;
                        return [2 /*return*/];
                }
            });
        });
    };
    BankPage.prototype.fnGetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.apiService.get(this.api.bank.list, false)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    BankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankPage');
    };
    BankPage.prototype.fnGetBankLogo = function (name) {
        var path = "assets/img/bank-logo/", logo = "";
        switch (name) {
            case "bkk"://กรุงเทพ
                logo = "bangkok-bank-logo.png";
                break;
            case "scb"://ไทยพาณิขย์
                logo = "logo_scb.png";
                break;
            case "ktb"://กรุงไทย
                logo = "KTB.png";
                break;
            case "kbank"://กสิกร
                logo = "kasikornbank.png";
                break;
        }
        return path + logo;
    };
    BankPage.prototype.fnCopy = function (str) {
        this.apiService.fnCopyClipboard(str);
    };
    BankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bank',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\bank\bank.html"*/'<!--\n  Generated template for the BankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'BANK_NO\' | translate }}</ion-title>\n\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <!--<ion-item-sliding #item *ngFor="let bank of banks">-->\n      <ion-item *ngFor="let bank of banks">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>\n              <img [src]="apiService.fnBuildImgUrl(bank.image_path)" style="width: 98%;margin-left: -10px">\n            </ion-col>\n            <ion-col col-9>\n              <h2 class="font-blue"><b>{{apiService.fnLang(bank, \'bank_account_name\')}}</b></h2>\n              <p><span class="font-bold"><b>{{ \'BANK\'| translate }}:</b></span> {{apiService.fnLang(bank, \'bank_name\')}}</p>\n              <p><span class="font-bold"><b>{{ \'BRANCH\'| translate }}:</b></span> {{apiService.fnLang(bank, \'branch_name\')}}</p>\n              <p><span class="font-bold"><b>{{ \'TYPE\'| translate }}:</b></span> {{apiService.fnLang(bank, \'bank_type\')}}</p>\n              <p><span class="font-bold">\n                <b>{{ \'BANK_NO\'| translate }}:</b></span>\n                <span class="font-blue" (click)="fnCopy(bank.bank_account_number.replace(\'-\', \'\'))">{{bank.bank_account_number}}</span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <!--<ion-item-options side="right">-->\n        <!--<button ion-button color="primary" (click)="fnCopy(bank.bank_account_number)">{{\'COPY\'| translate}}</button>-->\n      <!--</ion-item-options>-->\n    <!--</ion-item-sliding>-->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\bank\bank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], BankPage);
    return BankPage;
}());

//# sourceMappingURL=bank.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_detail_map_detail__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constant__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, apiService, navParams) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.navParams = navParams;
        this.api = __WEBPACK_IMPORTED_MODULE_4__app_app_constant__["a" /* DEFAULT */].config;
        this.list_data = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad MapPage');
                        return [4 /*yield*/, this.fnGetList()];
                    case 1:
                        data = _a.sent();
                        this.list_data = data.rows;
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.fnGetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.apiService.get(this.api.map.list, false)];
                }
                catch (err) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    MapPage.prototype.fnGoWeb = function (str) {
        window.open(str, '_system', 'location=yes');
    };
    MapPage.prototype.fnGoToDetail = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_detail_map_detail__["a" /* MapDetailPage */], data);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{ \'MAP\' | translate }}</ion-title>\n\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list >\n        <ion-item-sliding #item *ngFor="let row of list_data">\n            <ion-item (click)="fnGoToDetail(row)">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-3>\n                            <img src="assets/ico/icon-map.png" width="70">\n                        </ion-col>\n                        <ion-col col-9>\n                            <h2 class="font-blue font-bold">{{apiService.fnLang(row, \'title\')}}</h2>\n                            <span>{{apiService.fnLang(row, \'detail\')}}</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="fnGoWeb(row.url)">{{\'GO_WEB_SITE\'| translate}}</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapDetailPage = (function () {
    function MapDetailPage(navCtrl, navParams, shareService, apiService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shareService = shareService;
        this.apiService = apiService;
        this.title = '';
        this.url = '';
        this.lat = 0;
        this.lng = 0;
        this.title = this.shareService.lang == 'th' ? this.navParams.get('title_th') : this.navParams.get('title_en');
        this.url = this.navParams.get('url');
        this.lat = +this.navParams.get('lat');
        this.lng = +this.navParams.get('long');
        setTimeout(function () {
            _this.loadMap2();
        }, 200);
    }
    MapDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapDetailPage');
        // this.loadMap();
        // this.loadMap2();
    };
    MapDetailPage.prototype.loadMap2 = function () {
        var c = this;
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: 15,
            language: 'th',
            center: { lat: c.lat, lng: c.lng }
        });
        var beachMarker = new google.maps.Marker({
            position: { lat: c.lat, lng: c.lng },
            map: c.map,
            animation: 'DROP',
            icon: 'assets/ico/gmap-place-50x75.png'
        });
        beachMarker.addListener('click', function () {
            console.log('click map');
            c.apiService.fnGoWebSite(c.url);
        });
    };
    MapDetailPage.prototype.loadMap = function () {
        /*
                let mapOptions: GoogleMapOptions = {
                    camera: {
                        target: {
                            lat: 43.0741904,
                            lng: -89.3809802
                        },
                        zoom: 18,
                        tilt: 30
                    }
                };
        
                this.map = GoogleMaps.create('map_canvas');
        
                // Wait the MAP_READY before using any methods.
                this.map.one(GoogleMapsEvent.MAP_READY)
                    .then(() => {
                        console.log('Map is ready!');
        
                        // Now you can use all methods safely.
                        // this.map.addMarker({
                        //     title: 'Ionic',
                        //     icon: 'blue',
                        //     animation: 'DROP',
                        //     position: {
                        //         lat: 43.0741904,
                        //         lng: -89.3809802
                        //     }
                        // })
                        //     .then(marker => {
                        //         marker.on(GoogleMapsEvent.MARKER_CLICK)
                        //             .subscribe(() => {
                        //                 alert('clicked');
                        //             });
                        //     });
        
                    });*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapDetailPage.prototype, "mapElement", void 0);
    MapDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map-detail',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\map-detail\map-detail.html"*/'<!--\n  Generated template for the MapDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="map-page">\n  <div style="height: 100%; width: 100%" id="map_canvas">\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\map-detail\map-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], MapDetailPage);
    return MapDetailPage;
}());

//# sourceMappingURL=map-detail.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(nav, apiService, translate, shareService) {
        this.nav = nav;
        this.apiService = apiService;
        this.translate = translate;
        this.shareService = shareService;
        this.lang = true;
        if (this.shareService.lang === 'en') {
            this.lang = false;
        }
    }
    SettingsPage.prototype.fnSetLang = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var setLang, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLang = 'th';
                        if (!e.value) {
                            setLang = 'en';
                        }
                        this.shareService.lang = setLang;
                        this.translate.use(setLang);
                        return [4 /*yield*/, this.apiService.setStorage(this.apiService.langKey, setLang)];
                    case 1:
                        _a.sent();
                        t = this;
                        setTimeout(function () {
                            t.apiService.showSuccessTranslate('CHANGE_LANG_SUCCESS');
                            t.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        }, 200);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\settings\settings.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'SETTINGS_TITLE\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <!--<ion-item class="item-divider">General</ion-item>-->\n\n    <!--<ion-item>-->\n      <!--<ion-label>{{\'LANGUAGE\'|translate}}</ion-label>-->\n      <!--<ion-toggle checked="false" color="secondary"></ion-toggle>-->\n    <!--</ion-item>-->\n    <ion-item>\n      <!--<ion-label>{{\'LANGUAGE\'|translate}}</ion-label>-->\n      <div class="dx-field">\n        <div class="dx-field-label">{{\'LANGUAGE\'|translate}}</div>\n        <div class="dx-field-value">\n          <dx-switch [value]="lang" onText="TH" offText="EN" (onValueChanged)="fnSetLang($event)"></dx-switch>\n        </div>\n      </div>\n    </ion-item>\n    <!--<ion-item>-->\n      <!--<ion-label>Stay awake</ion-label>-->\n      <!--<ion-toggle checked="false" color="secondary"></ion-toggle>-->\n    <!--</ion-item>-->\n\n    <!--<ion-item>-->\n      <!--Choose a custom ringtone-->\n      <!--<ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>-->\n    <!--</ion-item>-->\n\n    <!--<ion-item class="item-divider">Storage</ion-item>-->\n\n    <!--<ion-item>-->\n      <!--Clean cash history data-->\n      <!--<ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>-->\n    <!--</ion-item>-->\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_service__["a" /* SharedService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_users__ = __webpack_require__(612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.users = __WEBPACK_IMPORTED_MODULE_1__mock_users__["a" /* USERS */];
    }
    UserService.prototype.getAll = function () {
        return this.users;
    };
    UserService.prototype.getItem = function (id) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id === parseInt(id)) {
                return this.users[i];
            }
        }
        return null;
    };
    UserService.prototype.remove = function (item) {
        this.users.splice(this.users.indexOf(item), 1);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_stores__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = (function () {
    function StoreService() {
        this.stores = __WEBPACK_IMPORTED_MODULE_1__mock_stores__["a" /* STORES */];
    }
    StoreService.prototype.getAll = function () {
        return this.stores;
    };
    StoreService.prototype.getItem = function (id) {
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].id === parseInt(id)) {
                return this.stores[i];
            }
        }
        return null;
    };
    StoreService.prototype.remove = function (item) {
        this.stores.splice(this.stores.indexOf(item), 1);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_orders__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = (function () {
    function OrderService() {
        this.orders = __WEBPACK_IMPORTED_MODULE_1__mock_orders__["a" /* ORDERS */];
    }
    OrderService.prototype.getAll = function () {
        return this.orders;
    };
    OrderService.prototype.getItem = function (id) {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id === parseInt(id)) {
                return this.orders[i];
            }
        }
        return null;
    };
    OrderService.prototype.remove = function (item) {
        this.orders.splice(this.orders.indexOf(item), 1);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(nav) {
        this.nav = nav;
    }
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\change-password\change-password.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="change-password">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="password" placeholder="Your password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="New password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="secondary" block>Save</button>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\register\register.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="register">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="text" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="First Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Last Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="register()">Create Account</button>\n\n  <div class="align-bottom" padding text-center>\n    Have an account? <span class="bold" (click)="login()">Sign in</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(500);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_store_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cart_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_order_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_news_service__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_youtube_video_player__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_clipboard__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_gallery_modal__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_devextreme_angular_ui_file_uploader__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_devextreme_angular_ui_file_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_devextreme_angular_ui_file_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_devextreme_angular_ui_switch__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_devextreme_angular_ui_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_devextreme_angular_ui_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_devextreme_angular_ui_number_box__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_devextreme_angular_ui_number_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_devextreme_angular_ui_number_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_devextreme_angular_ui_validation_group__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_devextreme_angular_ui_validation_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_devextreme_angular_ui_validation_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_devextreme_angular_ui_popup__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_devextreme_angular_ui_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_devextreme_angular_ui_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_category_category__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_change_password_change_password__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_currency_converter_currency_converter__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_forgot_password_forgot_password__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_item_item__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_modal_filter_modal_filter__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_modal_item_option_modal_item_option__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_my_order_my_order__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_order_confirm_order_confirm__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_register_register__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_store_store__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_tab_attribute_tab_attribute__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tab_filter_tab_filter__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_welcome_welcome__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_wish_list_wish_list__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_category_product_category_product__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_search_result_search_result__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_video_video__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_video_detail_video_detail__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_contact_us_contact_us__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_bank_bank__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_map_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_map_detail_map_detail__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_vendor_register_vendor_register__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import services

























// end import services
// end import services
// import pages































// end import pages
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_category_product_category_product__["a" /* CategoryProductPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_video_detail_video_detail__["a" /* VideoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_map_detail_map_detail__["a" /* MapDetailPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_vendor_register_vendor_register__["a" /* VendorRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_bank_bank__["a" /* BankPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25_devextreme_angular_ui_file_uploader__["DxFileUploaderModule"],
                __WEBPACK_IMPORTED_MODULE_26_devextreme_angular_ui_switch__["DxSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_27_devextreme_angular_ui_number_box__["DxNumberBoxModule"],
                __WEBPACK_IMPORTED_MODULE_28_devextreme_angular_ui_validation_group__["DxValidationGroupModule"],
                __WEBPACK_IMPORTED_MODULE_29_devextreme_angular_ui_popup__["DxPopupModule"],
                __WEBPACK_IMPORTED_MODULE_24_ionic_gallery_modal__["c" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_category_product_category_product__["a" /* CategoryProductPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_video_detail_video_detail__["a" /* VideoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_map_detail_map_detail__["a" /* MapDetailPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_vendor_register_vendor_register__["a" /* VendorRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_bank_bank__["a" /* BankPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_7__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_10__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_11__services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_12__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_23__providers_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_24_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
                },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicErrorHandler */] }
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









// import pages

// import {LoginPage} from '../pages/login/login';
// import {WelcomePage} from '../pages/welcome/welcome';
// import {MyAccountPage} from '../pages/my-account/my-account';
// import {CartPage} from '../pages/cart/cart';


// import {WishListPage} from '../pages/wish-list/wish-list';
// import {MyOrderPage} from '../pages/my-order/my-order';
// end import pages
var MyApp = (function () {
    function MyApp(translate, platform, statusBar, config, apiService, splashScreen, service, toastCtrl, screenOrientation) {
        this.translate = translate;
        this.platform = platform;
        this.statusBar = statusBar;
        this.config = config;
        this.apiService = apiService;
        this.splashScreen = splashScreen;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.loadingVisible = false;
        // public nav: any;
        this.pages = [];
        this.counter = 0;
        this.service.setCallbackShowLoading(this.fnShowLoading.bind(this));
        this.service.setCallbackHideLoading(this.fnHideLoading.bind(this));
        this.initializeApp();
        this.initTranslate();
        this.fnInitMenu();
        this.fnCheckRootPage();
    }
    MyApp.prototype.fnInitMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.pages = [
                    {
                        title: 'HOME',
                        icon: 'ios-home-outline',
                        count: 0,
                        component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                        set_root: true,
                        msg: ''
                    },
                    {
                        title: 'CATEGORY',
                        icon: 'ios-list-box-outline',
                        count: 0,
                        component: __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */],
                        set_root: false,
                        msg: ''
                    },
                    // {
                    //     title: 'WishList',
                    //     icon: 'md-heart-outline',
                    //     count: 2,
                    //     component: WishListPage
                    // },
                    //
                    // {
                    //     title: 'My Order',
                    //     icon: 'ios-timer-outline',
                    //     count: 0,
                    //     component: MyOrderPage
                    // },
                    //
                    // {
                    //     title: 'My Account',
                    //     icon: 'ios-contact-outline',
                    //     count: 0,
                    //     component: MyAccountPage
                    // },
                    // {
                    //     title: 'Cart',
                    //     icon: 'ios-cart-outline',
                    //     count: 1,
                    //     component: CartPage
                    // },
                    {
                        title: 'SETTINGS_TITLE',
                        icon: 'ios-settings-outline',
                        count: 0,
                        component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                        set_root: false,
                        msg: this.service.lang === 'th' ? "TH" : "EN"
                    },
                ];
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.service;
                        return [4 /*yield*/, this.apiService.getUserData()];
                    case 1:
                        _a.userData = _b.sent();
                        this.platform.ready().then(function (p) {
                            // Okay, so the platform is ready and our plugins are available.
                            // Here you can do any higher level native things you might need.
                            _this.statusBar.styleDefault();
                            _this.splashScreen.hide();
                            if (p !== 'dom') {
                                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                            }
                            else {
                            }
                            // this.platform.registerBackButtonAction(() => {
                            //     if (this.counter == 0) {
                            //         this.counter++;
                            //         this.presentToast();
                            //         setTimeout(() => {
                            //             this.counter = 0
                            //         }, 3000)
                            //     } else {
                            //         // console.log("exitapp");
                            //         this.platform.exitApp();
                            //     }
                            // }, 0)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.initTranslate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var curLang;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getStorage(this.apiService.langKey)];
                    case 1:
                        curLang = (_a.sent()) || 'th';
                        // let curLang = 'th';
                        this.service.lang = curLang;
                        // Set the default language for translation strings, and the current language.
                        // this.translate.setDefaultLang('en');
                        this.translate.use(curLang);
                        return [4 /*yield*/, this.apiService.setStorage(this.apiService.langKey, curLang)];
                    case 2:
                        _a.sent();
                        // if (this.translate.getBrowserLang() !== undefined) {
                        //   // this.translate.use(this.translate.getBrowserLang());
                        //   this.translate.use('th');
                        // } else {
                        //   this.translate.use('th'); // Set your language here
                        // }
                        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
                            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.fnCheckRootPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.set_root) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.fnShowLoading = function () {
        this.loadingVisible = true;
    };
    MyApp.prototype.fnHideLoading = function () {
        this.loadingVisible = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div padding class="menu-left menu-bg">\n      <a menuClose>\n        <!--<img class="profile-picture" src="assets/img/Marukyo-app-bg-750.png">-->\n        <img style="width: 80%" class="" src="assets/img/Marukyo-app-bg-750.png">\n        <!--<h4 ion-text color="light">Marukyo</h4>-->\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title | translate}}\n        <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n        <!--<ion-badge color="danger" item-right *ngIf="page.msg">{{ page.msg }}</ion-badge>-->\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 321,
	"./af.js": 321,
	"./ar": 322,
	"./ar-dz": 323,
	"./ar-dz.js": 323,
	"./ar-kw": 324,
	"./ar-kw.js": 324,
	"./ar-ly": 325,
	"./ar-ly.js": 325,
	"./ar-ma": 326,
	"./ar-ma.js": 326,
	"./ar-sa": 327,
	"./ar-sa.js": 327,
	"./ar-tn": 328,
	"./ar-tn.js": 328,
	"./ar.js": 322,
	"./az": 329,
	"./az.js": 329,
	"./be": 330,
	"./be.js": 330,
	"./bg": 331,
	"./bg.js": 331,
	"./bm": 332,
	"./bm.js": 332,
	"./bn": 333,
	"./bn.js": 333,
	"./bo": 334,
	"./bo.js": 334,
	"./br": 335,
	"./br.js": 335,
	"./bs": 336,
	"./bs.js": 336,
	"./ca": 337,
	"./ca.js": 337,
	"./cs": 338,
	"./cs.js": 338,
	"./cv": 339,
	"./cv.js": 339,
	"./cy": 340,
	"./cy.js": 340,
	"./da": 341,
	"./da.js": 341,
	"./de": 342,
	"./de-at": 343,
	"./de-at.js": 343,
	"./de-ch": 344,
	"./de-ch.js": 344,
	"./de.js": 342,
	"./dv": 345,
	"./dv.js": 345,
	"./el": 346,
	"./el.js": 346,
	"./en-au": 347,
	"./en-au.js": 347,
	"./en-ca": 348,
	"./en-ca.js": 348,
	"./en-gb": 349,
	"./en-gb.js": 349,
	"./en-ie": 350,
	"./en-ie.js": 350,
	"./en-il": 351,
	"./en-il.js": 351,
	"./en-nz": 352,
	"./en-nz.js": 352,
	"./eo": 353,
	"./eo.js": 353,
	"./es": 354,
	"./es-do": 355,
	"./es-do.js": 355,
	"./es-us": 356,
	"./es-us.js": 356,
	"./es.js": 354,
	"./et": 357,
	"./et.js": 357,
	"./eu": 358,
	"./eu.js": 358,
	"./fa": 359,
	"./fa.js": 359,
	"./fi": 360,
	"./fi.js": 360,
	"./fo": 361,
	"./fo.js": 361,
	"./fr": 362,
	"./fr-ca": 363,
	"./fr-ca.js": 363,
	"./fr-ch": 364,
	"./fr-ch.js": 364,
	"./fr.js": 362,
	"./fy": 365,
	"./fy.js": 365,
	"./gd": 366,
	"./gd.js": 366,
	"./gl": 367,
	"./gl.js": 367,
	"./gom-latn": 368,
	"./gom-latn.js": 368,
	"./gu": 369,
	"./gu.js": 369,
	"./he": 370,
	"./he.js": 370,
	"./hi": 371,
	"./hi.js": 371,
	"./hr": 372,
	"./hr.js": 372,
	"./hu": 373,
	"./hu.js": 373,
	"./hy-am": 374,
	"./hy-am.js": 374,
	"./id": 375,
	"./id.js": 375,
	"./is": 376,
	"./is.js": 376,
	"./it": 377,
	"./it.js": 377,
	"./ja": 378,
	"./ja.js": 378,
	"./jv": 379,
	"./jv.js": 379,
	"./ka": 380,
	"./ka.js": 380,
	"./kk": 381,
	"./kk.js": 381,
	"./km": 382,
	"./km.js": 382,
	"./kn": 383,
	"./kn.js": 383,
	"./ko": 384,
	"./ko.js": 384,
	"./ky": 385,
	"./ky.js": 385,
	"./lb": 386,
	"./lb.js": 386,
	"./lo": 387,
	"./lo.js": 387,
	"./lt": 388,
	"./lt.js": 388,
	"./lv": 389,
	"./lv.js": 389,
	"./me": 390,
	"./me.js": 390,
	"./mi": 391,
	"./mi.js": 391,
	"./mk": 392,
	"./mk.js": 392,
	"./ml": 393,
	"./ml.js": 393,
	"./mn": 394,
	"./mn.js": 394,
	"./mr": 395,
	"./mr.js": 395,
	"./ms": 396,
	"./ms-my": 397,
	"./ms-my.js": 397,
	"./ms.js": 396,
	"./mt": 398,
	"./mt.js": 398,
	"./my": 399,
	"./my.js": 399,
	"./nb": 400,
	"./nb.js": 400,
	"./ne": 401,
	"./ne.js": 401,
	"./nl": 402,
	"./nl-be": 403,
	"./nl-be.js": 403,
	"./nl.js": 402,
	"./nn": 404,
	"./nn.js": 404,
	"./pa-in": 405,
	"./pa-in.js": 405,
	"./pl": 406,
	"./pl.js": 406,
	"./pt": 407,
	"./pt-br": 408,
	"./pt-br.js": 408,
	"./pt.js": 407,
	"./ro": 409,
	"./ro.js": 409,
	"./ru": 410,
	"./ru.js": 410,
	"./sd": 411,
	"./sd.js": 411,
	"./se": 412,
	"./se.js": 412,
	"./si": 413,
	"./si.js": 413,
	"./sk": 414,
	"./sk.js": 414,
	"./sl": 415,
	"./sl.js": 415,
	"./sq": 416,
	"./sq.js": 416,
	"./sr": 417,
	"./sr-cyrl": 418,
	"./sr-cyrl.js": 418,
	"./sr.js": 417,
	"./ss": 419,
	"./ss.js": 419,
	"./sv": 420,
	"./sv.js": 420,
	"./sw": 421,
	"./sw.js": 421,
	"./ta": 422,
	"./ta.js": 422,
	"./te": 423,
	"./te.js": 423,
	"./tet": 424,
	"./tet.js": 424,
	"./tg": 425,
	"./tg.js": 425,
	"./th": 426,
	"./th.js": 426,
	"./tl-ph": 427,
	"./tl-ph.js": 427,
	"./tlh": 428,
	"./tlh.js": 428,
	"./tr": 429,
	"./tr.js": 429,
	"./tzl": 430,
	"./tzl.js": 430,
	"./tzm": 431,
	"./tzm-latn": 432,
	"./tzm-latn.js": 432,
	"./tzm.js": 431,
	"./ug-cn": 433,
	"./ug-cn.js": 433,
	"./uk": 434,
	"./uk.js": 434,
	"./ur": 435,
	"./ur.js": 435,
	"./uz": 436,
	"./uz-latn": 437,
	"./uz-latn.js": 437,
	"./uz.js": 436,
	"./vi": 438,
	"./vi.js": 438,
	"./x-pseudo": 439,
	"./x-pseudo.js": 439,
	"./yo": 440,
	"./yo.js": 440,
	"./zh-cn": 441,
	"./zh-cn.js": 441,
	"./zh-hk": 442,
	"./zh-hk.js": 442,
	"./zh-tw": 443,
	"./zh-tw.js": 443
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 579;

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        id: 1,
        name: "Apparel & Accessories",
        thumb: "assets/img/categories/accessories.png",
        item_count: 923
    },
    {
        id: 2,
        name: "Electronics",
        thumb: "assets/img/categories/electronics.png",
        item_count: 810
    },
    {
        id: 3,
        name: "Jewelry",
        thumb: "assets/img/categories/jewelry.png",
        item_count: 102
    },
    {
        id: 4,
        name: "Automobiles & Motorcycles",
        thumb: "",
        item_count: 780
    },
    {
        id: 5,
        name: "Watches",
        thumb: "",
        item_count: 567
    },
    {
        id: 6,
        name: "Shoes",
        thumb: "",
        item_count: 888
    },
    {
        id: 7,
        name: "Luggage & Bags",
        thumb: "",
        item_count: 937
    },
    {
        id: 8,
        name: "Sports & Entertainment",
        thumb: "",
        item_count: 675
    },
    {
        id: 9,
        name: "Home & Garden",
        thumb: "",
        item_count: 970
    }
];
//# sourceMappingURL=mock-categories.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
var ITEMS = [
    {
        id: 1,
        category_id: 1,
        name: "Xiaomi Mi 4",
        price: 300.0,
        sale_price: 250,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        thumb: "assets/img/items/item_3.jpg",
        images: [
            "assets/img/items/detail/d_1.jpg",
            "assets/img/items/detail/d_2.jpg",
            "assets/img/items/detail/d_3.jpg",
            "assets/img/items/detail/d_4.jpg",
        ],
        short_description: "Original Xiaomi Mi4 M4 FDD LTE 4G Phone Snapdragon 801 Quad Core 5 Inch 1080P FHD IPS 13.0MP MIUI 7 White Black Mobile Phones.",
        description: "",
        option_groups: [
            {
                name: "Bundle",
                options: [
                    {
                        name: "Standard",
                        price: 0
                    },
                    {
                        name: "Add Silicon Case",
                        price: 1
                    },
                    {
                        name: "Add Tempered Glass",
                        price: 1
                    },
                ]
            },
            {
                name: "Color",
                options: [
                    {
                        name: "MI4 CU LTE White",
                        price: 2
                    }
                ]
            }
        ],
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "fast shipping, good communication with seller, understands everything, the phone is working, it seems to be original and not used, came with google play preinstaled and euro plug adapter, batery last 2 days, beautiful phone, did not pay tax at the end but almost.., packed well,",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "prodovec ubludok ,tovar ne priehal , i on ne vozvrayil mne svoi dengi,pishy эклюзивно для Русских, chtobi etot geltorotiy ne ponyal",
                stars: 5
            },
        ],
        seller: {
            id: 1,
            name: "FANTACY TECHNOLOGY",
            num_orders: 11102,
            rating: 4.8,
            num_wish_list: 2101,
        }
    },
    {
        id: 2,
        category_id: 1,
        name: "Makeup tool",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_4.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 3,
        category_id: 1,
        name: "Zara coat",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_5.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 4,
        category_id: 1,
        name: "Car phone",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/item_6.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 5,
        category_id: 1,
        name: "Iphone 6 case",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/item_1.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 6,
        category_id: 1,
        name: "Makeup",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_2.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    }
];
//# sourceMappingURL=mock-items.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARTS; });
var CARTS = {
    subtotal: 930,
    shipping: 30,
    total: 950,
    sellers: [
        {
            id: 1,
            name: "FANTACY  TECHNOLOGY",
            subtotal: 900,
            shipping: 20,
            total: 920,
            items: [
                {
                    id: 1,
                    name: "Xiaomi Mi 4",
                    price: 300,
                    quantity: 1,
                    thumb: "assets/img/items/item_3.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                },
                {
                    id: 1,
                    name: "Xiaomi Mi 5",
                    price: 300,
                    quantity: 2,
                    thumb: "assets/img/items/item_3.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Jahurto Inexpensive",
            subtotal: 20,
            shipping: 10,
            total: 30,
            items: [
                {
                    id: 1,
                    name: "Zara coat",
                    price: 20,
                    quantity: 1,
                    thumb: "assets/img/items/item_5.jpg",
                    options: [
                        "XL",
                        "Pink"
                    ]
                }
            ]
        }
    ]
};
//# sourceMappingURL=mock-carts.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [];
//# sourceMappingURL=mock-users.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORES; });
var STORES = [];
//# sourceMappingURL=mock-stores.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDERS; });
var ORDERS = [
    {
        id: 3,
        transaction_id: "111200002223",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Xiaomi Mi 4",
                quantity: 1,
                price: 300,
                thumb: "assets/img/items/item_3.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Makeup tool",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_4.jpg",
            }
        ]
    },
    {
        id: 2,
        transaction_id: "111200002222",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Zara coat",
                quantity: 1,
                price: 30,
                thumb: "assets/img/items/item_5.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Makeup tool",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_4.jpg",
            }
        ]
    },
    {
        id: 1,
        transaction_id: "111200002221",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Xiaomi Mi 4",
                quantity: 1,
                price: 300,
                thumb: "assets/img/items/item_3.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Car phone",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_6.jpg",
            }
        ]
    }
];
//# sourceMappingURL=mock-orders.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_newss__ = __webpack_require__(616);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService() {
        this.newss = __WEBPACK_IMPORTED_MODULE_1__mock_newss__["a" /* NEWSS */];
    }
    NewsService.prototype.getAll = function () {
        return this.newss;
    };
    NewsService.prototype.getItem = function (id) {
        for (var i = 0; i < this.newss.length; i++) {
            if (this.newss[i].id === parseInt(id)) {
                return this.newss[i];
            }
        }
        return null;
    };
    NewsService.prototype.remove = function (item) {
        this.newss.splice(this.newss.indexOf(item), 1);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news-service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEWSS; });
var NEWSS = [];
//# sourceMappingURL=mock-newss.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_constant__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_gallery_modal__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ItemPage = (function () {
    function ItemPage(nav, itemService, sv, navParams, shareService, modalCtrl) {
        this.nav = nav;
        this.itemService = itemService;
        this.sv = sv;
        this.navParams = navParams;
        this.shareService = shareService;
        this.modalCtrl = modalCtrl;
        this.api = __WEBPACK_IMPORTED_MODULE_6__app_app_constant__["a" /* DEFAULT */].config;
        this.lang = 'th';
        this.attrType = {
            color: 'Color',
            radio_button: 'Radio button',
            drop_down: 'Drop down list',
        };
        this.productData = {
            name_th: '',
            name_en: '',
            detail_th: '',
            detail_en: '',
            detail_short_th: '',
            detail_short_en: '',
            quantity: null,
            price1: null,
            price_star1: null,
            price_star2: null,
            price_star3: null,
            price_star4: null,
            price_star5: null,
            logo_path: null,
            logo_path_thumbnail: null,
            image_gallery_path: [],
            image_gallery_path_thumbnail: [],
            category_id: null,
            attributes: [],
            attribute_group: [],
        };
        this.buyProduct = {
            data: {},
            quantity: 1,
            select_attribute: [],
        };
        this.selectProductOptionVisible = false;
        this.selectAttribute = [];
        this.shippingMethod = [];
        this.showBtnBuy = false;
        this.slides = [];
        // get the first item as sample data
        this.item = itemService.getItem(1);
    }
    ItemPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('ini');
                        _a = this;
                        return [4 /*yield*/, this.sv.getUserData()];
                    case 1:
                        _a.userData = _b.sent();
                        this.lang = this.shareService.lang;
                        this.product_id = this.navParams.get('id');
                        return [4 /*yield*/, this.fnGetProduct()];
                    case 2:
                        _b.sent();
                        this.buyProduct.quantity = 1;
                        this.selectAttribute = [];
                        this.productData.attribute_group.forEach(function (val, key) {
                            _this.fnSetAttribute(key);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemPage.prototype.fnGetProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.sv.get(this.api.product.view_buy, { id: this.product_id })];
                    case 1:
                        _a.productData = _b.sent();
                        if (this.productData.image_gallery_path === null) {
                            this.productData.image_gallery_path = [];
                        }
                        // let newArrImg = [];
                        if (!this.productData.image_gallery_path.length) {
                            this.productData.image_gallery_path.push({
                                path: this.productData.logo_path,
                                path_thumbnail: this.productData.logo_path_thumbnail
                            });
                        }
                        // this.productData.image_gallery_path.forEach((val) => {
                        //     newArrImg.push({
                        //         path: this.sv.fnBuildImgUrl(val.path),
                        //         path_thumbnail: this.sv.fnBuildImgUrl(val.path_thumbnail)
                        //     });
                        // });
                        // if (!newArrImg.length) {
                        // this.productData.image_gallery_path.push({
                        //         path: null,
                        //         path_thumbnail: this.sv.fnBuildImgUrl(null)
                        //     });
                        // }
                        // this.productData.image_gallery_path = newArrImg;
                        // this.slides = [];
                        // this.productData.image_gallery_path.forEach((val)=>{
                        //
                        // });
                        console.log(this.productData);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemPage.prototype.fnSetAttribute = function (key) {
        // console.log('key', key)
        // console.log('select_attribute', this.buyProduct.select_attribute.length)
        // console.log('attribute_group', this.productData.attribute_group.length)
        // console.log('attributes', this.productData.attributes.length)
        this.showBtnBuy = true;
        if (this.productData.attributes.length && key < this.productData.attribute_group.length) {
            if (this.buyProduct.select_attribute.length <= key) {
                this.buyProduct.select_attribute.push(this.productData.attribute_group[key]);
            }
            // this.showBtnBuy = false;
        }
    };
    // add or remove item on wish list
    ItemPage.prototype.toggleWishList = function (item) {
        item.on_wish_list = !item.on_wish_list;
    };
    // get item options group name
    ItemPage.prototype.getOptionGroupsName = function (item) {
        var _this = this;
        var optionGroups = [];
        // for (let i = 0; i < item.option_groups.length; i++) {
        //     optionGroups.push(item.option_groups[i].name);
        // }
        item.attribute_group.forEach(function (val) {
            optionGroups.push(_this.sv.fnLang(val, 'group_name'));
        });
        return optionGroups.join(',');
    };
    // make array with range is n
    ItemPage.prototype.range = function (n) {
        return new Array(n);
    };
    // open item option modal
    ItemPage.prototype.showOptions = function (item) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */], { item: item });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    ItemPage.prototype.fnShowModalImg = function (idx) {
        var _this = this;
        var gallery = [];
        this.productData.image_gallery_path.forEach(function (val) {
            gallery.push({ url: _this.sv.fnBuildImg(val, 'path', true) });
        });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: gallery,
            initialSlide: idx
        });
        modal.present();
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\item\item.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ sv.fnLang(productData, \'name\') }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n\n  <div class="card light-bg">\n    <!-- slider on top-->\n    <ion-slides pager autoplay="5000" class="border-bottom" *ngIf="productData.image_gallery_path.length">\n      <ion-slide *ngFor="let slide of productData.image_gallery_path; let idx = index">\n        <img style="width: 100%;" src="{{ sv.fnBuildImg(slide, \'path\') }}" alt="" (click)="fnShowModalImg(idx)">\n      </ion-slide>\n    </ion-slides>\n    <!--<ion-slides  pager autoplay="2000" class="border-bottom">-->\n      <!--<ion-slide *ngFor="let img of productData.image_gallery_path">-->\n        <!--<img class="img-product" [src]="img.path_thumbnail || img.path"/>-->\n      <!--</ion-slide>-->\n    <!--</ion-slides>-->\n\n    <!--<div class="rlt">-->\n      <!--<button ion-button class="btn-wish-list card" (click)="toggleWishList(item)" color="light">-->\n        <!--<ion-icon name="md-heart" color="gray" [hidden]="item.on_wish_list"></ion-icon>-->\n        <!--<ion-icon name="md-heart" color="danger" [hidden]="!item.on_wish_list"></ion-icon>-->\n      <!--</button>-->\n    <!--</div>-->\n\n    <div text-center padding margin-top class="border-bottom">\n      <p [innerHTML]="sv.fnLang(productData, \'detail_short\')"></p>\n      <h1 class="price" ion-text color="danger" margin-top *ngIf="productData.sale_price">{{ productData.sale_price | currency:\'฿\':true }}</h1>\n      <h1 class="price" ion-text color="danger" margin-top *ngIf="!productData.sale_price">{{ productData.price | currency:\'฿\':true }}</h1>\n      <h2 class="origin-price text-decoration" ion-text color="gray" margin-top *ngIf="productData.sale_price">{{ productData.price |\n        currency:\'฿\':true }}</h2>\n    </div>\n\n    <!--<ion-grid>-->\n      <!--<ion-row class="item-stats">-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.rating }}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">FeedBacks</span>-->\n        <!--</ion-col>-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.num_orders}}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">Orders</span>-->\n        <!--</ion-col>-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.num_wish_list}}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">Wish List</span>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n  </div>\n\n  <!--item options-->\n  <div class="card light-bg" margin-top *ngIf="shareService.open_add_cart">\n    <ion-item class="no-border">\n      <div>\n        <div>{{ getOptionGroupsName(productData) }}</div>\n        <!--<div>-->\n          <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>-->\n          <!--<span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.shipping | currency:\'฿\':true}}</span>-->\n        <!--</div>-->\n      </div>\n\n      <div item-right>\n        <span class="bold" ion-text color="secondary" (click)="showOptions(productData)">{{\'SELECT_PRODUCT_OPTION\'|translate}}</span>\n      </div>\n    </ion-item>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block class="btn-add-cart" (click)="showOptions(productData)">{{\'ADD_TO_CART\'|translate}}</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" block (click)="showOptions(productData)">{{\'BUY_NOW\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!--Description-->\n  <div class="card light-bg" margin-top>\n    <div class="border-bottom" padding>{{\'DESCRIPTION\'|translate}}</div>\n    <div padding [innerHTML]="sv.fnLang(productData, \'detail\') || \'-\'"></div>\n  </div>\n\n  <!--Feed backs-->\n  <!--<div class="card light-bg" margin-top>-->\n    <!--<div padding>-->\n      <!--Feedback({{ item.reviews.length }})-->\n    <!--</div>-->\n\n    <!--<ion-list>-->\n      <!--<ion-item *ngFor="let review of item.reviews" text-wrap>-->\n        <!--<ion-avatar item-left>-->\n          <!--<img src="{{ review.avatar }}">-->\n        <!--</ion-avatar>-->\n\n        <!--<div>-->\n          <!--<div>-->\n            <!--<span class="pull-left">{{ review.name }}</span>-->\n            <!--<span class="pull-right text-sm">-->\n              <!--<ion-icon name="md-star" color="orange" *ngFor="let start of range(review.stars)"></ion-icon>-->\n            <!--<ion-icon name="md-star" color="gray" *ngFor="let start of range(5 - review.stars)"></ion-icon>-->\n            <!--</span>-->\n\n            <!--<div class="clear"></div>-->\n          <!--</div>-->\n\n          <!--<div>-->\n            <!--<span class="text-sm" ion-text color="gray">{{ review.time }}</span>-->\n          <!--</div>-->\n\n          <!--<p class="text-sm">-->\n            <!--{{ review.content }}-->\n          <!--</p>-->\n        <!--</div>-->\n\n      <!--</ion-item>-->\n    <!--</ion-list>-->\n  <!--</div>-->\n\n  <!--Seller info-->\n  <!--<div class="card light-bg" margin-top>-->\n    <!--<div padding class="border-bottom">-->\n      <!--Seller info-->\n    <!--</div>-->\n    <!--<div class="border-bottom" padding>-->\n      <!--{{ item.seller.name }}-->\n    <!--</div>-->\n\n    <!--<ion-grid>-->\n      <!--<ion-row class="item-stats">-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.seller.rating }}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">FeedBacks</span>-->\n        <!--</ion-col>-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.seller.num_orders}}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">Orders</span>-->\n        <!--</ion-col>-->\n        <!--<ion-col text-center>-->\n          <!--<div class="text-lg">{{ item.seller.num_wish_list}}</div>-->\n          <!--<span class="text-sm" ion-text color="gray">Wish List</span>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n  <!--</div>-->\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\item\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyConverterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CurrencyConverterPage = (function () {
    function CurrencyConverterPage(nav) {
        this.nav = nav;
    }
    CurrencyConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-currency-converter',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\currency-converter\currency-converter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CurrencyConverter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="currency-converter">\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\currency-converter\currency-converter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], CurrencyConverterPage);
    return CurrencyConverterPage;
}());

//# sourceMappingURL=currency-converter.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyAccountPage = (function () {
    function MyAccountPage(nav, userService) {
        this.nav = nav;
        this.userService = userService;
    }
    // go to changing password page
    MyAccountPage.prototype.changePassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-account',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\my-account\my-account.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- username-->\n  <ion-item class="no-border">\n    <ion-avatar item-left>\n      <img src="assets/img/user/adam.jpg" alt="">\n    </ion-avatar>\n    <span class="strong">Adam Lambert</span>\n    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n  </ion-item>\n\n  <!-- Profile -->\n  <ion-item-group>\n\n    <ion-item-divider bgColor>PROFILE</ion-item-divider>\n    <ion-item>\n      <ion-icon name="md-create"></ion-icon>\n      Edit profile\n    </ion-item>\n    <ion-item (click)="changePassword()">\n      <ion-icon name="lock"></ion-icon>\n      Change password\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-share"></ion-icon>\n      Connected accounts\n    </ion-item>\n    <ion-item>\n      <ion-icon name="timer"></ion-icon>\n      Recent viewed\n    </ion-item>\n    <ion-item>\n      <ion-icon name="pricetags"></ion-icon>\n      Saved Offers\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- Other -->\n  <ion-item-group>\n    <ion-item-divider bgColor>OTHERS</ion-item-divider>\n    <ion-item>\n      <ion-icon name="podium"></ion-icon>\n      Leaderboard\n    </ion-item>\n    <ion-item>\n      <ion-icon name="person-add"></ion-icon>\n      Find foodies\n    </ion-item>\n    <ion-item>\n      <ion-icon name="home"></ion-icon>\n      Suggest a restaurant\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-share"></ion-icon>\n      Invite friend\n    </ion-item>\n    <ion-item>\n      <ion-icon name="send"></ion-icon>\n      Send feedback\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-information-circle"></ion-icon>\n      About\n    </ion-item>\n    <ion-item>\n      <ion-icon name="star"></ion-icon>\n      Rate us\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-exit"></ion-icon>\n      Sign out\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\my-account\my-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyOrderPage = (function () {
    function MyOrderPage(nav, orderService) {
        this.nav = nav;
        this.orderService = orderService;
        // set sample data
        this.orders = orderService.getAll();
    }
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-order',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\my-order\my-order.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="my-order common-bg">\n  <div class="card light-bg" margin-top *ngFor="let order of orders; let orderIndex = index">\n    <div class="card-header" padding>\n      <div>Order Id: {{ order.transaction_id }}</div>\n      <div>Order Time: {{ order.created_at }}</div>\n    </div>\n\n    <ion-list class="list-full-border" no-margin>\n      <ion-item class="product" *ngFor="let item of order.items; let i = index">\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}">\n        </ion-thumbnail>\n        <!--item\'s information-->\n        <div>\n          <div text-wrap>{{ item.name }}</div>\n          <div padding-bottom>\n            <span class="pull-right">{{ item.price | currency:\'USD\':true }} x {{ item.quantity }}</span>\n            <div class="clear"></div>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n\n    <div class="card-footer" padding>\n      <div>\n        <span class="pull-left" ion-text color="gray">Total</span>\n        <span class="pull-right bold" ion-text color="danger">{{ order.total | currency:\'USD\':true }}</span>\n        <div class="clear"></div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\my-order\my-order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var StorePage = (function () {
    function StorePage(nav, storeService) {
        this.nav = nav;
        this.storeService = storeService;
    }
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\store\store.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Store</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="store">\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* StoreService */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(nav) {
        this.nav = nav;
    }
    // go to login page
    WelcomePage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // go to register page
    WelcomePage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="welcome">\n\n  <div class="align-bottom" padding>\n    <div padding-left padding-right>\n      <button ion-button icon-left block color="facebook" class="align-left">\n        <ion-icon name="logo-facebook"></ion-icon>\n        Signin with Facebook\n      </button>\n      <button ion-button icon-left block color="light" class="align-left">\n        <ion-icon name="logo-google"></ion-icon>\n        <span>Signin with Google</span>\n      </button>\n      <div margin-top>\n        <span ion-text color="light">Use Email</span>\n      </div>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col no-padding>\n            <button ion-button block color="light" (click)="login()">Sign In</button>\n          </ion-col>\n          <ion-col no-padding padding-left>\n            <button ion-button block color="light" (click)="register()">Register</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WishListPage = (function () {
    function WishListPage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get list items
        this.items = itemService.getAll();
    }
    // view a item
    WishListPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // get discount percent
    WishListPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // remove item from wish list
    WishListPage.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wish-list',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\wish-list\wish-list.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>WishList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" category">\n\n  <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products list">\n    <ion-item class="product" *ngFor="let item of items; let i = index" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left>\n        <img src="{{ item.thumb }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item.name }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.sale_price | currency:\'USD\':true }}</span>\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.price | currency:\'USD\':true }}</span>\n        </div>\n        <div class="origin-price text-sm">\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.price | currency:\'USD\':true }}</span>\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.price, item.sale_price) }}%</span>\n        </div>\n        <div class="bottom-info text-lg" padding-right>\n          <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(i)"></ion-icon>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\wish-list\wish-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_items__ = __webpack_require__(610);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService() {
        this.items = __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */];
    }
    ItemService.prototype.getAll = function () {
        return this.items;
    };
    ItemService.prototype.getByCategory = function (catId) {
        var items = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].category_id == catId) {
                items.push(__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i]);
            }
        }
        return items;
    };
    ItemService.prototype.getItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === parseInt(id)) {
                return this.items[i];
            }
        }
        return null;
    };
    ItemService.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());

//# sourceMappingURL=item-service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_search_result__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { Keyboard } from 'ionic-native';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(nav, sv) {
        this.nav = nav;
        this.sv = sv;
        this.textSearch = '';
        this.searchHistoryList = [];
    }
    SearchPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sv.fnGetSearchHistory()];
                    case 1:
                        _a.searchHistoryList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("I'm alive!");
        setTimeout(function () {
            // Keyboard.show() // for android
            _this.myInput.setFocus();
        }, 500); //a least 150ms.
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
    };
    SearchPage.prototype.goToSearchResult = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.textSearch) {
                            return [2 /*return*/, true];
                        }
                        _a = this;
                        return [4 /*yield*/, this.sv.fnAddSearchHistory(this.textSearch)];
                    case 1:
                        _a.searchHistoryList = _b.sent();
                        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__search_result_search_result__["a" /* SearchResultPage */], {
                            search_text: this.textSearch,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.fnSelectOldSearch = function (str) {
        this.textSearch = str;
        this.myInput.setFocus();
    };
    SearchPage.prototype.fnRemoveSearch = function (idx) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sv.fnRemoveSearchHistory(idx)];
                    case 1:
                        _a.searchHistoryList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.fnRemoveAllSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sv.fnRemoveAllSearch()];
                    case 1:
                        _a.sent();
                        this.searchHistoryList = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.fnGoToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "myInput", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\search\search.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <!--<button ion-button menuToggle>-->\n      <!--<ion-icon name="menu"></ion-icon>-->\n    <!--</button>-->\n    <ion-title>{{\'SEARCH_PRODUCT\'|translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnGoToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item>\n      <ion-input #input type="search" [(ngModel)]="textSearch" placeholder="{{\'SEARCH_TEXT\'|translate}}"\n                 (keyup.enter)="goToSearchResult($event)"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <!--search history-->\n  <ion-list class="list-no-border">\n    <ion-item *ngFor="let search of searchHistoryList; let idx = index">\n      <ion-icon name="md-time" item-left></ion-icon>\n      <div (click)="fnSelectOldSearch(search)">{{search}}</div>\n      <ion-icon name="close-circle" item-right color="gray" (click)="fnRemoveSearch(idx)"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <div text-right padding *ngIf="searchHistoryList.length">\n    <span ion-text color="danger" (click)="fnRemoveAllSearch()">Clear history</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_register_vendor_register__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_constant__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import {RegisterPage} from "../register/register";





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, apiService) {
        this.nav = nav;
        this.apiService = apiService;
        this.api = __WEBPACK_IMPORTED_MODULE_6__app_app_constant__["a" /* DEFAULT */].config;
        this.username = '';
        this.password = '';
    }
    // go to register page
    LoginPage.prototype.register = function () {
        // this.nav.push(RegisterPage);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__vendor_register_vendor_register__["a" /* VendorRegisterPage */]);
    };
    // go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.fnGoToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.onSubmit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('submit', this.loginData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.apiService.post(this.api.userApi.login, {
                                username: this.username,
                                password: this.password
                            })];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        if (!res.data.is_vendor) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.apiService.setStorage(this.apiService.userDataKey, res.data)];
                    case 3:
                        _a.sent();
                        // localStorage.setItem('userData', JSON.stringify(res.data));
                        this.apiService.showSuccess(res.resultDescription);
                        return [3 /*break*/, 5];
                    case 4:
                        this.apiService.showErrorTranslate('USER_IS_NOT_VENDOR');
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\business_work\bird\M-4r8b\src\pages\login\login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'LOGIN\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnGoToHome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="login">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="text" placeholder="{{ \'EMAIL\' | translate }}"\n                 [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="{{ \'PASSWORD\' | translate }}"\n                 [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="onSubmit($event)">{{ \'LOGIN\' | translate }}</button>\n\n  <div class="font-blue" text-right margin-top margin-bottom (click)="forgotPwd()">{{ \'FORGET_PASSWORD\' | translate }}?</div>\n\n  <!--<button ion-button icon-left block color="facebook" class="align-left">-->\n    <!--<ion-icon name="logo-facebook"></ion-icon>-->\n    <!--Signin with Facebook-->\n  <!--</button>-->\n\n  <!--<button ion-button icon-left block color="light" margin-top class="align-left card">-->\n    <!--<ion-icon name="logo-google"></ion-icon>-->\n    <!--<span>Signin with Google</span>-->\n  <!--</button>-->\n\n  <div class="align-bottom" padding text-center>\n    <!--<span class="bold font-blue" (click)="register()">{{\'VENDOR_REGISTER\'|translate}}</span>-->\n    <button ion-button color="secondary" block (click)="register()">{{ \'VENDOR_REGISTER\' | translate }}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\business_work\bird\M-4r8b\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service__["a" /* Service */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[482]);
//# sourceMappingURL=main.js.map