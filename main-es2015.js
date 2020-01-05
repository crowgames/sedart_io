(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainFlex\">\n  <app-editor-panel [ngClass]=\"{'hidden': !pds.curLayer || pds.curLayer.type !== LayerType.MorphLayer}\"  class=\"flexGrow  card roundPanel\" (scroll)=\"scroll($event)\" #editorPanel></app-editor-panel>\n  <app-particle-editor [ngClass]=\"{'hidden': !pds.curLayer || pds.curLayer.type !== LayerType.ParticleLayer}\"  class=\"flexGrow  card roundPanel\" #editorPanel></app-particle-editor>\n  <div class=\"centerPanel\">\n    <app-tool-panel class=\"flexGrow roundPanel card\"></app-tool-panel>\n    <app-layer-panel class=\"flexGrow roundPanel card\"></app-layer-panel>\n  </div>\n  <app-preview-panel class=\"flexGrow roundPanel card\" (scroll)=\"scroll($event)\" #previewPanel></app-preview-panel>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor-panel/editor-panel.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor-panel/editor-panel.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas id=\"previewCanvas\" #previewCanvas></canvas>\n<canvas #flowmapCanvas style=\"display: none;\"></canvas>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-panel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flexContainer\">\n  <div class=\"layers\">\n    <app-layer-select *ngFor=\"let layer of pds.layers\" [layer]=\"layer\"></app-layer-select>\n  </div>\n  <div class=\"toolbar\">\n    <button type=\"button\" (click)=\"newLayerVisible=true\">+</button>\n    <button style=\"float: right;\" (click)=\"pds.moveLayerDown();\"> down </button>\n    <button style=\"float: right;\" (click)=\"pds.moveLayerUp();\"> up </button>\n    <button style=\"float: right;\" (click)=\"pds.deleteCurrentLayer();\"> X </button>\n  </div>\n</div>\n<div id=\"dialogBack\" (click)=\"newLayerVisible = false;\" [ngClass]=\"{'hidden':!newLayerVisible}\">\n  <div id=\"newLayerDialog\" (click)=\"$event.stopPropagation()\">\n    <button type=\"button\" (click)=\"selectLayerType('morph')\">MorphLayer</button>\n    <button type=\"button\" (click)=\"selectLayerType('particle')\">ParticleLayer</button><br>\n    <hr>\n    <label>Layer Name:</label><br/>\n    <input type=\"text\" placeholder=\"Enter layer name\" #layerNameInput/> <br/><br/>\n    <div id=\"morphInput\">\n      <select id=\"morphType\" size=\"2\">\n          <option selected>flow</option>\n          <option>wave</option>\n      </select><br><br>\n      <label>Image File:</label><br/>\n      <input type=\"file\" #imageLoader name=\"imageLoader\"/><br><br>\n      <canvas #imageCanvas></canvas><br>\n      <button type=\"button\" style=\"float: right;\" (click)=\"createLayer()\">create new layer</button>\n    </div>\n\n    <div id=\"particleInput\" style=\"display: none;\"><br><br>\n      <button type=\"button\" style=\"float: right;\"  (click)=\"createParticleLayer()\">create new particle layer</button>\n    </div>\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-select/layer-select.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-select/layer-select.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"selectLayer()\" class=\"host\" [ngClass]=\"{'selected': pds.curLayer == layer}\">\n  {{layer.name}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/particle-editor/particle-editor.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/particle-editor/particle-editor.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let emitter of getParticleLayer().emitters\">\n  <b>{{emitter.readableName}}</b>\n  <div *ngFor=\"let field of emitter.fields\">\n    {{field.name}}: <input value=\"{{emitter[field.key]}}\" (change)=\"updateEmitter(emitter, field.key, $event)\">\n  </div>\n\n</div>\n<div *ngFor=\"let pf of getParticleLayer().particleFactories\">\n  <b>{{pf.readableName}}</b>\n  <div *ngFor=\"let field of pf.fields\">\n    <ng-container *ngIf=\"field.type === 'number'\">\n      {{field.name}}: <input value=\"{{pf[field.key]}}\" (change)=\"updateEmitter(pf, field.key, $event)\">\n    </ng-container>\n    <ng-container *ngIf=\"field.type === 'image'\">\n      <label>{{field.name}}:</label><br/>\n      <input type=\"file\" #imageLoader name=\"imageLoader\" (change)=\"updateImage(pf, field.key, $event)\"/><br>\n    </ng-container>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview-panel/preview-panel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview-panel/preview-panel.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas id=\"CanvasFinal\" style=\"background-color: #aaaaaa\" #CanvasFinal></canvas>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/direction-color-picker/direction-color-picker.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/direction-color-picker/direction-color-picker.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas #canvas></canvas>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/tool-panel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/tool-panel.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Select direction:\n<app-direction-color-picker></app-direction-color-picker><br><br>\nZoom:<br>\n<button type=\"button\" (click)=\"zoom(1.2)\">+</button>\n<button type=\"button\" (click)=\"zoom(1/1.2)\">-</button><br><br>\nBrush size:<br>\n<input type=\"range\" min=\"1\" max=\"100\" value=\"20\" (change)=\"changePenSize($event);\"/><br><br>\n\n<button type=\"button\" (click)=\"blur()\">blur</button><br><br>\n<button type=\"button\" (click)=\"renderDialog()\">render</button>\n\n<div id=\"dialogBack\" (click)=\"closeDialog($event)\" [ngClass]=\"{'hidden':!renderLayerVisible}\">\n  <div id=\"newLayerDialog\" (click)=\"$event.stopPropagation()\">\n    <h1>Render video</h1>\n    <input type=\"number\" id=\"renderTime\"/> seconds<br><br>\n    <button type=\"button\" (click)=\"render()\">render</button>\n    <div id=\"outputElement\">\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainFlex {\n  position: absolute;\n  display: flex;\n  width: 100%;\n  top: 0px;\n  bottom: 0px;\n}\n\n.centerPanel {\n  display: flex;\n  width: 200px;\n  flex-direction: column;\n}\n\n.flexGrow {\n  flex-grow: 1;\n  flex-basis: 0;\n  overflow: auto;\n}\n\n.roundPanel {\n  margin: 1rem;\n  padding: 1rem;\n  background: lightgray;\n  border: 1px solid gray;\n  border-radius: 0.2rem;\n}\n\n.rectPanel {\n  margin: 1rem;\n  padding: 1rem;\n  background: lightgray;\n  border: 1px solid gray;\n}\n\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkZsZXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jZW50ZXJQYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXhHcm93IHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJvdW5kUGFuZWwge1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4ucmVjdFBhbmVsIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _services_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/layer */ "./src/app/services/layer.ts");




let AppComponent = class AppComponent {
    constructor(pds) {
        this.pds = pds;
        this.title = 'sedart';
        this.LayerType = _services_layer__WEBPACK_IMPORTED_MODULE_3__["LayerType"];
    }
    scroll(e) {
        this.pds.curScrollLeft = e.srcElement.scrollLeft;
        this.pds.curScrollTop = e.srcElement.scrollTop;
        setTimeout(() => {
            if (this.editorPanel.nativeElement.scrollTop !== this.pds.curScrollTop || this.editorPanel.nativeElement.scrollLeft !== this.pds.curScrollLeft) {
                this.editorPanel.nativeElement.scrollTop = this.pds.curScrollTop;
                this.editorPanel.nativeElement.scrollLeft = this.pds.curScrollLeft;
            }
            else {
                this.previewPanel.nativeElement.scrollTop = this.pds.curScrollTop;
                this.previewPanel.nativeElement.scrollLeft = this.pds.curScrollLeft;
            }
        }, 0);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewPanel', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], AppComponent.prototype, "previewPanel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editorPanel', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], AppComponent.prototype, "editorPanel", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layer_panel_layer_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer-panel/layer-panel.component */ "./src/app/layer-panel/layer-panel.component.ts");
/* harmony import */ var _editor_panel_editor_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-panel/editor-panel.component */ "./src/app/editor-panel/editor-panel.component.ts");
/* harmony import */ var _preview_panel_preview_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-panel/preview-panel.component */ "./src/app/preview-panel/preview-panel.component.ts");
/* harmony import */ var _tool_panel_tool_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tool-panel/tool-panel.component */ "./src/app/tool-panel/tool-panel.component.ts");
/* harmony import */ var _tool_panel_direction_color_picker_direction_color_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tool-panel/direction-color-picker/direction-color-picker.component */ "./src/app/tool-panel/direction-color-picker/direction-color-picker.component.ts");
/* harmony import */ var _layer_panel_layer_select_layer_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layer-panel/layer-select/layer-select.component */ "./src/app/layer-panel/layer-select/layer-select.component.ts");
/* harmony import */ var _particle_editor_particle_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./particle-editor/particle-editor.component */ "./src/app/particle-editor/particle-editor.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _layer_panel_layer_panel_component__WEBPACK_IMPORTED_MODULE_4__["LayerPanelComponent"],
            _editor_panel_editor_panel_component__WEBPACK_IMPORTED_MODULE_5__["EditorPanelComponent"],
            _preview_panel_preview_panel_component__WEBPACK_IMPORTED_MODULE_6__["PreviewPanelComponent"],
            _tool_panel_tool_panel_component__WEBPACK_IMPORTED_MODULE_7__["ToolPanelComponent"],
            _tool_panel_direction_color_picker_direction_color_picker_component__WEBPACK_IMPORTED_MODULE_8__["DirectionColorPickerComponent"],
            _layer_panel_layer_select_layer_select_component__WEBPACK_IMPORTED_MODULE_9__["LayerSelectComponent"],
            _particle_editor_particle_editor_component__WEBPACK_IMPORTED_MODULE_10__["ParticleEditorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/editor-panel/editor-panel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editor-panel/editor-panel.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#previewCanvas {\n  transition: 0.3s ease-in-out;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yLXBhbmVsL2VkaXRvci1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yLXBhbmVsL2VkaXRvci1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ByZXZpZXdDYW52YXMge1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/editor-panel/editor-panel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editor-panel/editor-panel.component.ts ***!
  \********************************************************/
/*! exports provided: EditorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPanelComponent", function() { return EditorPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _services_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layer */ "./src/app/services/layer.ts");




let EditorPanelComponent = class EditorPanelComponent {
    constructor(pds) {
        this.pds = pds;
        this.paint = false;
        this.mouseover = false;
        this.radius = 20;
        this.current = { x: 0, y: 0, zoom: 1 };
        this.curZoom = 1;
        this.scrollSync = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    updateImage() {
        if (!this.pds.curLayer || this.pds.curLayer.type !== _services_layer__WEBPACK_IMPORTED_MODULE_3__["LayerType"].MorphLayer) {
            return;
        }
        const image = this.pds.editorImage;
        this.previewCanvas.nativeElement.width = image.width;
        this.previewCanvas.nativeElement.height = image.height;
        this.flowmapCanvas.nativeElement.width = image.width;
        this.flowmapCanvas.nativeElement.height = image.height;
        this.previewCtx = this.previewCanvas.nativeElement.getContext('2d');
        this.flowmapCtx = this.flowmapCanvas.nativeElement.getContext('2d');
        this.flowmapCtx.fillStyle = '#808080';
        this.flowmapCtx.fillRect(0, 0, this.previewCanvas.nativeElement.width, this.previewCanvas.nativeElement.height);
        if (this.pds.editorImage) {
            this.flowmapCtx.drawImage(this.pds.editorImage, 0, 0); // Or at whatever offset you like
            this.previewCtx.drawImage(this.pds.editorImage, 0, 0); // Or at whatever offset you like
        }
        this.updatePreviewImage(-10, -10);
    }
    ngAfterViewInit() {
        this.updateImage();
        this.pds.layerSelectionChange.subscribe(() => this.updateImage());
        this.pds.blurEmitter.subscribe(n => this.blur(n));
        this.previewCanvas.nativeElement.addEventListener('mousemove', (ev) => this.mousemove(ev));
        this.previewCanvas.nativeElement.addEventListener('mousedown', (ev) => this.mousedown(ev));
        this.previewCanvas.nativeElement.addEventListener('mouseup', (ev) => this.mouseup(ev));
        this.previewCanvas.nativeElement.addEventListener('mouseenter', (ev) => this.mouseover = true);
        this.previewCanvas.nativeElement.addEventListener('mouseleave', (ev) => {
            this.mouseover = false;
            this.updatePreviewImage(-10, -10);
        });
        this.windowChanged();
        this.pds.windowChanged.subscribe((e) => this.windowChanged());
        this.updatePreviewImage(-20, -20);
    }
    mousemove(e) {
        if (e.button === 0) {
            const mouseX = (e.offsetX != null) ? e.offsetX : e.originalEvent.layerX;
            const mouseY = (e.offsetY != null) ? e.offsetY : e.originalEvent.layerY;
            this.drawAtPos(mouseX, mouseY);
            this.updatePreviewImage(mouseX, mouseY);
        }
    }
    mousedown(e) {
        if (e.button === 0) {
            this.paint = true;
            const rect = this.previewCanvas.nativeElement.getBoundingClientRect();
            const mouseX = (e.offsetX != null) ? e.offsetX : e.originalEvent.layerX;
            const mouseY = (e.offsetY != null) ? e.offsetY : e.originalEvent.layerY;
            this.drawAtPos(mouseX, mouseY);
            this.updatePreviewImage(mouseX, mouseY);
        }
    }
    mouseup(e) {
        if (e.button === 0) {
            this.paint = false;
            this.pds.setFlowMap(this.flowmapCanvas.nativeElement);
        }
    }
    blur(r) {
        const c = this.flowmapCanvas.nativeElement;
        const ctx = this.flowmapCtx;
        ctx.filter = 'blur(' + r + 'px)';
        ctx.drawImage(c, 0, 0);
        ctx.filter = 'none';
        this.pds.setFlowMap(this.flowmapCanvas.nativeElement);
        this.updatePreviewImage(-20, -20);
    }
    windowChanged() {
        this.curZoom = this.pds.curZoom;
        this.previewCanvas.nativeElement.style.transform = 'scale(' + this.curZoom + ')';
        this.previewCanvas.nativeElement.style.transformOrigin = 'top left';
    }
    updatePreviewImage(mouseX, mouseY) {
        if (!this.pds.curLayer) {
            return;
        }
        this.previewCtx.globalAlpha = 1;
        this.previewCtx.drawImage(this.flowmapCanvas.nativeElement, 0, 0);
        if (this.pds.curLayer.type === _services_layer__WEBPACK_IMPORTED_MODULE_3__["LayerType"].MorphLayer && this.pds.curLayer.getImage()) {
            this.previewCtx.globalAlpha = 0.2;
            this.previewCtx.drawImage(this.pds.curLayer.getImage(), 0, 0);
        }
        this.previewCtx.globalAlpha = 1;
        if (this.mouseover) {
            this.previewCtx.beginPath();
            this.previewCtx.arc(mouseX, mouseY, this.pds.drawSize, 0, 2 * Math.PI);
            this.previewCtx.strokeStyle = this.pds.curColor;
            this.previewCtx.stroke();
        }
    }
    drawAtPos(mouseX, mouseY) {
        if (this.paint) {
            for (let r = this.pds.drawSize; r > 0; r--) {
                this.flowmapCtx.globalAlpha = (this.pds.drawSize - r) / this.pds.drawSize;
                this.flowmapCtx.beginPath();
                this.flowmapCtx.arc(mouseX, mouseY, r, 0, 2 * Math.PI);
                this.flowmapCtx.fillStyle = this.pds.curColor;
                this.flowmapCtx.fill();
            }
            this.flowmapCtx.globalAlpha = 1;
        }
    }
};
EditorPanelComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewCanvas', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], EditorPanelComponent.prototype, "previewCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('flowmapCanvas', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], EditorPanelComponent.prototype, "flowmapCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorPanelComponent.prototype, "scrollSync", void 0);
EditorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor-panel/editor-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor-panel.component.css */ "./src/app/editor-panel/editor-panel.component.css")).default]
    })
], EditorPanelComponent);



/***/ }),

/***/ "./src/app/layer-panel/layer-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layer-panel/layer-panel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexContainer {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n\n.toolbar {\n  margin-top: 1rem;\n}\n\n.layers {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: auto;\n  padding: 0.2rem;\n  background: rgba(255,255,255, 0.2);\n}\n\n#dialogBack.hidden {\n  display: none;\n}\n\n#dialogBack {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 300px;\n  min-height: 200px;\n  background: rgba(0,0,0,0.2);\n  z-index: 1000;\n  display: grid;\n}\n\n#newLayerDialog {\n  width: 300px;\n  margin-right: auto;\n  padding: 1rem;\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubGF5ZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG59XG5cbiNkaWFsb2dCYWNrLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNkaWFsb2dCYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbiNuZXdMYXllckRpYWxvZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/layer-panel/layer-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layer-panel/layer-panel.component.ts ***!
  \******************************************************/
/*! exports provided: LayerPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerPanelComponent", function() { return LayerPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _services_morphlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/morphlayer */ "./src/app/services/morphlayer.ts");
/* harmony import */ var _services_particlelayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/particlelayer */ "./src/app/services/particlelayer.ts");





let LayerPanelComponent = class LayerPanelComponent {
    constructor(pds) {
        this.pds = pds;
        this.newLayerVisible = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.imageLoader.nativeElement.addEventListener('change', (event) => {
            this.handleImage(event);
        }, false);
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    handleImage(e) {
        const selfRef = this;
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                selfRef.canvas.nativeElement.style.width = '200px';
                selfRef.canvas.nativeElement.width = img.width;
                selfRef.canvas.nativeElement.height = img.height;
                selfRef.ctx.drawImage(img, 0, 0);
                //selfRef.dataService.setImage(img);
                const tcanvas = document.createElement('canvas');
                tcanvas.width = img.width;
                tcanvas.height = img.height;
                const tctx = tcanvas.getContext('2d');
                tctx.fillStyle = '#808080';
                tctx.fillRect(0, 0, tcanvas.width, tcanvas.height);
                //selfRef.dataService.setFlowMap(tcanvas.toDataURL('image/png'));
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    createLayer() {
        const tc = document.createElement('canvas');
        tc.width = this.canvas.nativeElement.width;
        tc.height = this.canvas.nativeElement.height;
        /*tc.width = 1024;
        tc.height = 1024;*/
        const tctx = tc.getContext('2d');
        tctx.drawImage(this.canvas.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height, 0, 0, tc.width, tc.height);
        this.pds.addLayer(new _services_morphlayer__WEBPACK_IMPORTED_MODULE_3__["MorphLayer"](this.layerNameInput.nativeElement.value, document.getElementById('morphType').value, tc));
        this.newLayerVisible = false;
    }
    createParticleLayer() {
        this.pds.addLayer(new _services_particlelayer__WEBPACK_IMPORTED_MODULE_4__["ParticleLayer"](this.layerNameInput.nativeElement.value, 512, 512));
        this.newLayerVisible = false;
    }
    selectLayerType(select) {
        if (select === 'morph') {
            document.getElementById('morphInput').style.display = 'block';
            document.getElementById('particleInput').style.display = 'none';
        }
        else {
            document.getElementById('morphInput').style.display = 'none';
            document.getElementById('particleInput').style.display = 'block';
        }
    }
};
LayerPanelComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('layerNameInput', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], LayerPanelComponent.prototype, "layerNameInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageLoader', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], LayerPanelComponent.prototype, "imageLoader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageCanvas', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], LayerPanelComponent.prototype, "canvas", void 0);
LayerPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layer-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layer-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layer-panel.component.css */ "./src/app/layer-panel/layer-panel.component.css")).default]
    })
], LayerPanelComponent);



/***/ }),

/***/ "./src/app/layer-panel/layer-select/layer-select.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layer-panel/layer-select/layer-select.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".host {\n  border: 1px solid gray;\n  padding: 0.2rem;\n  display: block;\n  cursor: pointer;\n  background-color: white;\n}\n\n.selected{\n  background-color: aliceblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5ZXItcGFuZWwvbGF5ZXItc2VsZWN0L2xheWVyLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xheWVyLXBhbmVsL2xheWVyLXNlbGVjdC9sYXllci1zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlbGVjdGVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/layer-panel/layer-select/layer-select.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layer-panel/layer-select/layer-select.component.ts ***!
  \********************************************************************/
/*! exports provided: LayerSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerSelectComponent", function() { return LayerSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project-data.service */ "./src/app/services/project-data.service.ts");



let LayerSelectComponent = class LayerSelectComponent {
    constructor(pds) {
        this.pds = pds;
    }
    ngOnInit() {
    }
    selectLayer() {
        this.pds.selectLayer(this.layer);
    }
};
LayerSelectComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LayerSelectComponent.prototype, "layer", void 0);
LayerSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layer-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layer-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layer-panel/layer-select/layer-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layer-select.component.css */ "./src/app/layer-panel/layer-select/layer-select.component.css")).default]
    })
], LayerSelectComponent);



/***/ }),

/***/ "./src/app/particle-editor/particle-editor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/particle-editor/particle-editor.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpY2xlLWVkaXRvci9wYXJ0aWNsZS1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/particle-editor/particle-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/particle-editor/particle-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: ParticleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleEditorComponent", function() { return ParticleEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");



let ParticleEditorComponent = class ParticleEditorComponent {
    constructor(pds) {
        this.pds = pds;
    }
    ngOnInit() {
    }
    getParticleLayer() {
        return this.pds.curLayer ? this.pds.curLayer : [];
    }
    updateEmitter(emitter, key, event) {
        emitter[key] = parseFloat(event.target.value);
    }
    updateImage(emitter, key, e) {
        const selfRef = this;
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const tcanvas = document.createElement('canvas');
                tcanvas.width = img.width;
                tcanvas.height = img.height;
                const tctx = tcanvas.getContext('2d');
                tctx.drawImage(img, 0, 0);
                emitter[key] = tcanvas;
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
};
ParticleEditorComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
ParticleEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-particle-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./particle-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/particle-editor/particle-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./particle-editor.component.css */ "./src/app/particle-editor/particle-editor.component.css")).default]
    })
], ParticleEditorComponent);



/***/ }),

/***/ "./src/app/preview-panel/preview-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/preview-panel/preview-panel.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#CanvasFinal {\n  transition: 0.3s ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy1wYW5lbC9wcmV2aWV3LXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3LXBhbmVsL3ByZXZpZXctcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNDYW52YXNGaW5hbCB7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/preview-panel/preview-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/preview-panel/preview-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: PreviewPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPanelComponent", function() { return PreviewPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/app/preview-panel/renderer.ts");




let PreviewPanelComponent = class PreviewPanelComponent {
    constructor(pds) {
        this.pds = pds;
    }
    windowChanged() {
        const curZoom = this.pds.curZoom;
        this.canvas.nativeElement.style.transform = 'scale(' + curZoom + ')';
        this.canvas.nativeElement.style.transformOrigin = 'top left';
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.windowChanged();
        this.pds.windowChanged.subscribe((e) => this.windowChanged());
        this.init();
        this.pds.layerContentChange.subscribe(() => this.init());
        this.pds.layerSelectionChange.subscribe(() => this.init());
    }
    init() {
        if (!this.pds.curLayer) {
            return;
        }
        const image = this.pds.editorImage;
        const canvas = document.getElementById('CanvasFinal');
        canvas.width = this.pds.width;
        canvas.height = this.pds.height;
        canvas.style.width = this.pds.width;
        canvas.style.height = this.pds.height;
        if (this.contextCanvasFinal) {
            this.contextCanvasFinal.running = false;
        }
        const selfRef = this;
        this.contextCanvasFinal = new _renderer__WEBPACK_IMPORTED_MODULE_3__["ThreeContext"]('CanvasFinal', (threeContext) => {
            threeContext.uniforms = {
                flowSpeed: { type: 'f', value: 0.02 },
                cycleTime: { type: 'f', value: 10 },
            };
            // waveMapFrag
            threeContext.initFullScreenCanvas(selfRef.pds.layers);
        }, null);
        this.contextCanvasFinal.render(selfRef.pds.layers);
        this.contextCanvasFinal.renderFrame.subscribe(() => selfRef.pds.renderedFrameEmitter.emit());
    }
};
PreviewPanelComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreviewPanelComponent.prototype, "scrollSync", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CanvasFinal', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], PreviewPanelComponent.prototype, "canvas", void 0);
PreviewPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview-panel/preview-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-panel.component.css */ "./src/app/preview-panel/preview-panel.component.css")).default]
    })
], PreviewPanelComponent);



/***/ }),

/***/ "./src/app/preview-panel/renderer.ts":
/*!*******************************************!*\
  !*** ./src/app/preview-panel/renderer.ts ***!
  \*******************************************/
/*! exports provided: ThreeContext, createFullScreenQuad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeContext", function() { return ThreeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFullScreenQuad", function() { return createFullScreenQuad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-full */ "./node_modules/three-full/builds/Three.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class ThreeContext {
    constructor(canvasName, initFunction, renderFunction) {
        this.running = true;
        this.uniformList = [];
        this.renderFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.time = 0;
        this.canvas = document.getElementById(canvasName);
        this.renderer = new three_full__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ canvas: this.canvas, antialiasing: false, alpha: true });
        this.uniforms = {};
        this.scene = new three_full__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.camera = null;
        this.clock = new three_full__WEBPACK_IMPORTED_MODULE_1__["Clock"](true);
        this.renderFunction = renderFunction;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.size = [this.canvas.width, this.canvas.height];
        this.renderer.setSize(this.size[0], this.size[1]);
        if (initFunction !== 'undefined') {
            initFunction(this);
        }
        else {
            // Use a default camera
            this.camera = new three_full__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](45, 1, 0.1, 1000);
        }
    }
    initFullScreenCanvas(layers) {
        const useVertColors = undefined;
        const vertShaderName = 'passthroughVert';
        const fragShaderName = 'flowMapFrag';
        const halfSize = [this.size[0] / 2, this.size[1] / 2];
        // Setup camera
        this.camera = new three_full__WEBPACK_IMPORTED_MODULE_1__["OrthographicCamera"](-halfSize[0], halfSize[0], halfSize[1], -halfSize[1], -10, 1000);
        this.camera.position.z = 1;
        const defaultUniforms = {
            time: { type: 'f', value: 0.0 },
            timeDelta: { type: 'f', value: 0.0 },
        };
        this.uniforms = extend_object(defaultUniforms, this.uniforms || {});
        this.scene = this.createFullScreenQuadScene(layers);
    }
    updateDefaultUniforms(uniforms) {
        if (uniforms.timeDelta != null) {
            uniforms.timeDelta.value = this.timeDelta;
        }
        if (uniforms.time != null) {
            uniforms.time.value = this.time;
        }
    }
    render(layers) {
        if (!this.camera) {
            return;
        }
        const self = this;
        if (this.running) {
            requestAnimationFrame(() => {
                self.render(layers);
                self.renderFrame.emit();
                this.time += 1 / 60;
            });
        }
        for (const layer of layers) {
            layer.timeStep();
        }
        this.timeDelta = this.time;
        this.updateDefaultUniforms(this.uniforms);
        this.uniformList.forEach((uniform) => {
            this.updateDefaultUniforms(uniform);
        });
        this.renderer.setClearColor(0xff0000, 0);
        this.renderer.clear();
        if (this.renderFunction !== 'undefined' && this.renderFunction != null) {
            this.renderFunction(this);
        }
        this.renderer.render(this.scene, this.camera);
    }
    createFullScreenQuadScene(layers) {
        const scene = new three_full__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.uniformList = [];
        layers.forEach((layer, i) => {
            const tuniforms = layer.addToScene(scene, i);
            this.uniformList.push(tuniforms);
        });
        return scene;
    }
}
function extend_object(destination, source) {
    for (const property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
}
function createMaterial(vertShaderName, fragShaderName, uniforms, useVertColors) {
    const vShader = document.getElementById(vertShaderName);
    if (vShader == null) {
        console.error('Couldn\'t find vert shader: ' + vertShaderName);
    }
    const fShader = document.getElementById(fragShaderName);
    if (fShader == null) {
        console.error('Couldn\'t find frag shader: ' + fragShaderName);
    }
    return new three_full__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]({
        uniforms: uniforms || {},
        vertexShader: vShader.text,
        fragmentShader: fShader.text,
        vertexColors: useVertColors ? three_full__WEBPACK_IMPORTED_MODULE_1__["VertexColors"] : three_full__WEBPACK_IMPORTED_MODULE_1__["NoColors"],
        transparent: true,
    });
}
function createFullScreenQuad(vertShaderName, fragShaderName, uniforms, useVertColors, z) {
    const shaderMaterial = createMaterial(vertShaderName, fragShaderName, uniforms, useVertColors);
    const planeGeo = new three_full__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](2, 2, 1, 1);
    planeGeo.translate(0, 0, -z / 10.0);
    const mesh = new three_full__WEBPACK_IMPORTED_MODULE_1__["Mesh"](planeGeo, shaderMaterial);
    mesh.name = 'FullScreenQuad';
    return mesh;
}
function setVertColors(mesh, color) {
    for (let i = 0; i < mesh.faces.length; i++) {
        const face = mesh.faces[i];
        face.vertexColors = [color, color, color];
    }
}


/***/ }),

/***/ "./src/app/services/layer.ts":
/*!***********************************!*\
  !*** ./src/app/services/layer.ts ***!
  \***********************************/
/*! exports provided: LayerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerType", function() { return LayerType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LayerType;
(function (LayerType) {
    LayerType[LayerType["MorphLayer"] = 1] = "MorphLayer";
    LayerType[LayerType["ParticleLayer"] = 2] = "ParticleLayer";
})(LayerType || (LayerType = {}));


/***/ }),

/***/ "./src/app/services/morphlayer.ts":
/*!****************************************!*\
  !*** ./src/app/services/morphlayer.ts ***!
  \****************************************/
/*! exports provided: MorphLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphLayer", function() { return MorphLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");
/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-full */ "./node_modules/three-full/builds/Three.es.js");
/* harmony import */ var _preview_panel_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preview-panel/renderer */ "./src/app/preview-panel/renderer.ts");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer */ "./src/app/services/layer.ts");





class MorphLayer {
    constructor(name, morphType, inputImage) {
        this.name = name;
        this.morphType = morphType;
        this.type = _layer__WEBPACK_IMPORTED_MODULE_4__["LayerType"].MorphLayer;
        this.type = _layer__WEBPACK_IMPORTED_MODULE_4__["LayerType"].MorphLayer;
        if (!inputImage) {
            // create dummy data
            this.setFlowmap(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createDefaultImage"])(512, 512));
            this.setImage(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createDefaultImage"])(512, 512));
        }
        else {
            this.setFlowmap(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createDefaultImage"])(inputImage.width, inputImage.height));
            this.setImage(inputImage);
        }
    }
    setFlowmap(newFlowmap) {
        this.flowmap = newFlowmap;
        this.flowmapTexture = new three_full__WEBPACK_IMPORTED_MODULE_2__["CanvasTexture"](this.flowmap);
        this.flowmapTexture.flipY = false;
        this.flowmapTexture.magFilter = three_full__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
        this.flowmapTexture.minFilter = three_full__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
    }
    getFlowmap() {
        return this.flowmap;
    }
    getFlowmapTexture() {
        return this.flowmapTexture;
    }
    setImage(newImage) {
        this.image = newImage;
        const tc = document.createElement('canvas');
        /*tc.width = (newFlowmap as any).nativeElement.width;
        tc.height = (newFlowmap as any).nativeElement.height;*/
        tc.width = 1024;
        tc.height = 1024;
        const tctx = tc.getContext('2d');
        tctx.drawImage(newImage, 0, 0, newImage.width, newImage.height, 0, 0, 1024, 1024);
        this.imageTexture = new three_full__WEBPACK_IMPORTED_MODULE_2__["CanvasTexture"](tc);
        // this.imageTexture.magFilter = THREE.NearestFilter;
        // this.imageTexture.minFilter = THREE.NearestFilter;
        this.imageTexture.flipY = false;
    }
    addToScene(scene, index) {
        const tuniforms = {
            texture: { type: 't', value: this.getImageTexture() },
            flowMap: { type: 't', value: this.getFlowmapTexture() },
            flowSpeed: { type: 'f', value: 0.1 },
            cycleTime: { type: 'f', value: 5 },
            time: { type: 'f', value: 0.0 },
            timeDelta: { type: 'f', value: 0.0 },
        };
        const plane = Object(_preview_panel_renderer__WEBPACK_IMPORTED_MODULE_3__["createFullScreenQuad"])('passthroughVert', this.morphType, tuniforms, null, index);
        scene.add(plane);
        return tuniforms;
    }
    getImage() {
        return this.image;
    }
    getImageTexture() {
        return this.imageTexture;
    }
    timeStep() {
    }
    saveState() {
        return {
            type: this.type,
            name: this.name,
            flowMap: this.getFlowmap().toDataURL('image/png'),
            image: this.getImage().toDataURL('image/png'),
        };
    }
    restoreState(state) {
    }
}


/***/ }),

/***/ "./src/app/services/particlelayer.ts":
/*!*******************************************!*\
  !*** ./src/app/services/particlelayer.ts ***!
  \*******************************************/
/*! exports provided: ParticleLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleLayer", function() { return ParticleLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");
/* harmony import */ var three_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-full */ "./node_modules/three-full/builds/Three.es.js");
/* harmony import */ var _preview_panel_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preview-panel/renderer */ "./src/app/preview-panel/renderer.ts");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer */ "./src/app/services/layer.ts");
/* harmony import */ var _particles_particle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./particles/particle */ "./src/app/services/particles/particle.ts");
/* harmony import */ var _particles_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./particles/emitter */ "./src/app/services/particles/emitter.ts");







class ParticleLayer {
    constructor(name, width, height) {
        this.name = name;
        this.type = _layer__WEBPACK_IMPORTED_MODULE_4__["LayerType"].ParticleLayer;
        this.emitters = [new _particles_emitter__WEBPACK_IMPORTED_MODULE_6__["RectangularEmitter"]()];
        this.particles = [];
        this.deadps = [];
        this.particleFactories = [new _particles_particle__WEBPACK_IMPORTED_MODULE_5__["ParticleFactory"]()];
        // create dummy data
        this.setCanvas(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createDefaultImage"])(width, height));
        this.type = _layer__WEBPACK_IMPORTED_MODULE_4__["LayerType"].ParticleLayer;
    }
    setCanvas(newCanvas) {
        this.canvas = newCanvas;
        this.canvasTexture = new three_full__WEBPACK_IMPORTED_MODULE_2__["CanvasTexture"](this.canvas);
        this.canvasTexture.flipY = false;
        this.canvasTexture.magFilter = three_full__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
        this.canvasTexture.minFilter = three_full__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
    }
    getCanvasTexture() {
        return this.canvasTexture;
    }
    addToScene(scene, index) {
        const tuniforms = {
            texture: { type: 't', value: this.getCanvasTexture() },
            time: { type: 'f', value: 0.0 },
            timeDelta: { type: 'f', value: 0.0 },
        };
        const plane = Object(_preview_panel_renderer__WEBPACK_IMPORTED_MODULE_3__["createFullScreenQuad"])('passthroughVert', 'passthroughFrag', tuniforms, null, index);
        scene.add(plane);
        return tuniforms;
    }
    timeStep() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const scaleX = this.canvas.width / 100;
        const scaleY = this.canvas.height / 100;
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.ttl -= 1;
            if (p.ttl === 0) {
                p.dead = true;
                this.deadps.push(p);
            }
        }
        for (const p of this.particles) {
            if (p.ttl >= 0) {
                p.draw(ctx);
            }
        }
        for (const pf of this.particleFactories) {
            pf.scaleX = this.canvas.width / 100;
            pf.scaleY = this.canvas.height / 100;
        }
        for (const emitter of this.emitters) {
            emitter.emit(this.particleFactories[0], this.particles, this.deadps);
        }
        this.canvasTexture.needsUpdate = true;
    }
    restoreState(state) {
    }
    saveState() {
        return {
            type: this.type,
            name: this.name,
            canvas: this.canvas.toDataURL('image/png'),
            emitters: this.emitters.map(e => e.saveState()),
            particleFactories: this.particleFactories.map(pf => pf.saveState())
        };
    }
}


/***/ }),

/***/ "./src/app/services/particles/emitter.ts":
/*!***********************************************!*\
  !*** ./src/app/services/particles/emitter.ts ***!
  \***********************************************/
/*! exports provided: RectangularEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangularEmitter", function() { return RectangularEmitter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _particlesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particlesystem */ "./src/app/services/particles/particlesystem.ts");


class RectangularEmitter {
    constructor(minx = 0, miny = 0, maxx = 100, maxy = 100, mindir = 0, maxdir = 360, minvel = 1, maxvel = 2) {
        this.readableName = 'Rectangular emitter';
        this.fields = [
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('emissionRate', 'Rate of particle emission'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('minx', 'Minimum x-pos (0-100)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('maxx', 'Maximum x-pos (0-100)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('miny', 'Minimum y-pos (0-100)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('maxy', 'Maximum y-pos (0-100)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('mindir', 'Minimum starting angle (0-360)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('maxdir', 'Maximum starting angle (0-360)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('minvel', 'Minimum starting velocity'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('maxvel', 'Maximum starting velocity'),
        ];
        this.minx = Math.min(minx, maxx);
        this.maxx = Math.max(minx, maxx);
        this.miny = Math.min(miny, maxy);
        this.maxy = Math.max(miny, maxy);
        this.mindir = Math.min(mindir, maxdir);
        this.maxdir = Math.max(mindir, maxdir);
        this.minvel = Math.min(minvel, maxvel);
        this.maxvel = Math.max(minvel, maxvel);
        this.emissionRate = 1;
    }
    emit(particleFactory, particles, deadps) {
        const res = [];
        for (let i = this.emissionRate; i > 0; i--) {
            if (i > 1 || Math.random() < i) {
                const angle = this.mindir + Math.random() * (this.maxdir - this.mindir);
                const vel = this.minvel + Math.random() * (this.maxvel - this.minvel);
                const xpos = this.minx + Math.random() * (this.maxx - this.minx);
                const ypos = this.miny + Math.random() * (this.maxy - this.miny);
                const xvel = Math.cos(angle / 180 * Math.PI) * vel;
                const yvel = Math.sin(angle / 180 * Math.PI) * vel;
                particleFactory.create(xpos, ypos, xvel, yvel, particles, deadps);
            }
        }
    }
    saveState() {
        const res = {};
        for (const field of this.fields) {
            res[field.key] = this[field.key];
        }
        return res;
    }
    restoreState(state) {
        for (const key in state) {
            this[key] = state[key];
        }
    }
}


/***/ }),

/***/ "./src/app/services/particles/particle.ts":
/*!************************************************!*\
  !*** ./src/app/services/particles/particle.ts ***!
  \************************************************/
/*! exports provided: Particle, ParticleFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleFactory", function() { return ParticleFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _particlesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particlesystem */ "./src/app/services/particles/particlesystem.ts");


class Particle {
    constructor() {
        this.dead = true;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ttl = 0;
    }
    draw(ctx) {
        ctx.resetTransform();
        ctx.globalAlpha = this.pf.getAlpha(this.ttl);
        ctx.beginPath();
        if (this.pf.image) {
            ctx.translate(this.x, this.y);
            ctx.scale(this.pf.getSize(this.ttl) * this.pf.scaleX / this.pf.image.width, this.pf.getSize(this.ttl) * this.pf.scaleY / this.pf.image.height);
            ctx.drawImage(this.pf.image, -this.pf.image.width / 2, -this.pf.image.width / 2);
        }
        else {
            ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        }
        ctx.stroke();
        ctx.resetTransform();
    }
}
class ParticleFactory {
    constructor() {
        this.alpha1 = 0;
        this.alpha2 = 1;
        this.alpha3 = 0;
        this.acc1 = 0;
        this.acc2 = 0;
        this.acc3 = 0;
        this.size1 = 0;
        this.size2 = 5;
        this.size3 = 0;
        this.ttl = 100;
        this.fields = [
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('alpha1', 'Alpha beginning (0-1)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('alpha2', 'Alpha middle (0-1)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('alpha3', 'Alpha end (0-1)'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('size1', 'Size beginning'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('size2', 'Size middle'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('size3', 'Size end'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('acc1', 'Acceleration beginning'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('acc2', 'Acceleration middle'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('acc3', 'Acceleration end'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["NumberField"]('ttl', 'Frames to live'),
            new _particlesystem__WEBPACK_IMPORTED_MODULE_1__["ImageField"]('image', 'Image ')
        ];
        this.readableName = 'ParticleFactory';
    }
    create(xpos, ypos, xvel, yvel, particles, deadps) {
        let p;
        if (deadps.length > 0) {
            p = deadps.pop();
        }
        else {
            p = new Particle();
            particles.push(p);
        }
        p.x = xpos * this.scaleX;
        p.y = ypos * this.scaleY;
        p.vx = xvel * this.scaleX;
        p.vy = yvel * this.scaleY;
        p.dead = false;
        p.ttl = this.ttl;
        p.pf = this;
    }
    getAlpha(curttl) {
        const p = (this.ttl - curttl) / this.ttl;
        if (p < 0.5) {
            return this.alpha1 * (1 - p * 2) + this.alpha2 * p * 2;
        }
        else {
            return this.alpha2 * (2 - p * 2) + this.alpha3 * (p * 2 - 1);
        }
    }
    getSize(curttl) {
        const p = (this.ttl - curttl) / this.ttl;
        if (p < 0.5) {
            return this.size1 * (1 - p * 2) + this.size2 * p * 2;
        }
        else {
            return this.size2 * (2 - p * 2) + this.size3 * (p * 2 - 1);
        }
    }
    saveState() {
        const res = {};
        for (const field of this.fields) {
            res[field.key] = this[field.key];
        }
        return res;
    }
    restoreState(state) {
        for (const key in state) {
            this[key] = state[key];
        }
    }
}


/***/ }),

/***/ "./src/app/services/particles/particlesystem.ts":
/*!******************************************************!*\
  !*** ./src/app/services/particles/particlesystem.ts ***!
  \******************************************************/
/*! exports provided: NumberField, ImageField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberField", function() { return NumberField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageField", function() { return ImageField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NumberField {
    constructor(key, name) {
        this.key = key;
        this.name = name;
        this.type = 'number';
    }
}
class ImageField {
    constructor(key, name) {
        this.key = key;
        this.name = name;
        this.type = 'image';
    }
}


/***/ }),

/***/ "./src/app/services/project-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/project-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataService", function() { return ProjectDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layer */ "./src/app/services/layer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");




let ProjectDataService = class ProjectDataService {
    constructor() {
        this.layers = [];
        this.curColor = '#808080';
        this.curZoom = 1;
        this.curScrollLeft = 0;
        this.curScrollTop = 0;
        this.drawSize = 20;
        this.width = 512;
        this.height = 512;
        this.windowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layerSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layerContentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blurEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.renderedFrameEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /*this.layers.push(new Layer('Layer ' + this.layers.length));
        this.curLayer = this.layers[0];*/
        this.renderedFrameEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setColor(color) {
        this.curColor = color;
    }
    setZoom(zoom) {
        this.curZoom = zoom;
        this.windowChanged.emit();
    }
    addLayer(layer) {
        this.layers.push(layer);
        if (layer.type === _layer__WEBPACK_IMPORTED_MODULE_2__["LayerType"].MorphLayer) {
            this.width = layer.getImage().width;
            this.height = layer.getImage().height;
        }
        setTimeout(() => this.selectLayer(layer), 100);
        setTimeout(() => this.selectLayer(layer), 200);
        this.saveState();
    }
    selectLayer(layer) {
        this.curLayer = layer;
        if (this.curLayer.type === _layer__WEBPACK_IMPORTED_MODULE_2__["LayerType"].MorphLayer) {
            this.editorImage = this.curLayer.getFlowmap();
        }
        this.layerSelectionChange.emit();
        this.saveState();
    }
    setFlowMap(canvas) {
        if (this.curLayer.type === _layer__WEBPACK_IMPORTED_MODULE_2__["LayerType"].MorphLayer) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["drawCanvasToCanvas"])(canvas, this.curLayer.getFlowmap());
            this.curLayer.setFlowmap(this.curLayer.getFlowmap());
            this.layerContentChange.emit();
        }
        this.saveState();
    }
    blurLayer(radius) {
        this.blurEmitter.emit(radius);
        this.saveState();
    }
    saveState() {
        const layerState = [];
        for (const layer of this.layers) {
            layerState.push(layer.saveState());
        }
        const state = {
            width: this.width,
            height: this.height,
            layers: layerState
        };
        console.log(state);
    }
    deleteCurrentLayer() {
        if (this.curLayer) {
            if (confirm('Are you sure you want to continue deleting this layer?')) {
                for (let i = this.layers.length - 1; i >= 0; i--) {
                    if (this.layers[i] === this.curLayer) {
                        this.layers.splice(i, 1);
                        if (this.layers.length > 0) {
                            this.selectLayer(this.layers[Math.max(0, i - 1)]);
                        }
                        else {
                            this.selectLayer(null);
                        }
                    }
                }
            }
        }
    }
    moveLayerDown() {
        for (let i = this.layers.length - 1; i >= 0; i--) {
            if (this.layers[i] === this.curLayer) {
                if (this.layers.length > 1 && i > 0) {
                    this.layers[i] = this.layers[i - 1];
                    this.layers[i - 1] = this.curLayer;
                    break;
                }
            }
        }
        this.layerContentChange.emit();
    }
    moveLayerUp() {
        for (let i = this.layers.length - 1; i >= 0; i--) {
            if (this.layers[i] === this.curLayer) {
                if (this.layers.length > 1 && i < this.layers.length - 1) {
                    this.layers[i] = this.layers[i + 1];
                    this.layers[i + 1] = this.curLayer;
                    break;
                }
            }
        }
        this.layerContentChange.emit();
    }
};
ProjectDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectDataService);



/***/ }),

/***/ "./src/app/services/utils.ts":
/*!***********************************!*\
  !*** ./src/app/services/utils.ts ***!
  \***********************************/
/*! exports provided: createDefaultImage, drawCanvasToCanvas, imageUrlToCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultImage", function() { return createDefaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCanvasToCanvas", function() { return drawCanvasToCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageUrlToCanvas", function() { return imageUrlToCanvas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function createDefaultImage(width, height) {
    const tcanvas = document.createElement('canvas');
    tcanvas.width = width;
    tcanvas.height = height;
    const tctx = tcanvas.getContext('2d');
    tctx.fillStyle = '#808080';
    tctx.fillRect(0, 0, tcanvas.width, tcanvas.height);
    return tcanvas;
}
function drawCanvasToCanvas(from, to) {
    to.width = from.width;
    to.height = from.height;
    const tctx = to.getContext('2d');
    tctx.fillStyle = '#808080';
    tctx.drawImage(from, 0, 0);
}
function imageUrlToCanvas(url) {
    const img = new Image();
    const tcanvas = document.createElement('canvas');
    img.onload = () => {
        tcanvas.width = img.width;
        tcanvas.height = img.height;
        const tctx = tcanvas.getContext('2d');
        tctx.drawImage(img, 0, 0);
    };
    img.src = url;
    return tcanvas;
}


/***/ }),

/***/ "./src/app/tool-panel/direction-color-picker/direction-color-picker.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/tool-panel/direction-color-picker/direction-color-picker.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2wtcGFuZWwvZGlyZWN0aW9uLWNvbG9yLXBpY2tlci9kaXJlY3Rpb24tY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tool-panel/direction-color-picker/direction-color-picker.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tool-panel/direction-color-picker/direction-color-picker.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DirectionColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionColorPickerComponent", function() { return DirectionColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project-data.service */ "./src/app/services/project-data.service.ts");



let DirectionColorPickerComponent = class DirectionColorPickerComponent {
    constructor(pds) {
        this.pds = pds;
        this.width = 100.0;
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    updateImage() {
        this.flowCanvas.nativeElement.width = this.width;
        this.flowCanvas.nativeElement.height = this.width;
        this.ctx = this.flowCanvas.nativeElement.getContext('2d');
        this.ctx.fillStyle = '#808080';
        this.ctx.fillRect(0, 0, this.flowCanvas.nativeElement.width, this.flowCanvas.nativeElement.height);
        for (let d = 0; d < 360; d++) {
            for (let r = this.width / 2; r >= 0; r--) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.width / 2, this.width / 2);
                this.ctx.lineTo(this.width / 2 - Math.cos(d / Math.PI * 180) * r, this.width / 2 - Math.sin(d / Math.PI * 180) * r);
                let scale = (r) / (this.width / 2) * 128;
                this.ctx.strokeStyle = 'rgb(' + (128 + Math.cos(d / Math.PI * 180) * scale) + "," + (128 + Math.sin(d / Math.PI * 180) * scale) + ',128)';
                this.ctx.stroke();
            }
        }
    }
    ngAfterViewInit() {
        this.flowCanvas.nativeElement.addEventListener('mousemove', (ev) => this.mousemove(ev));
        this.flowCanvas.nativeElement.addEventListener('mousedown', (ev) => this.mousedown(ev));
        this.flowCanvas.nativeElement.addEventListener('mouseup', (ev) => this.mouseup(ev));
        this.updateImage();
    }
    mousemove(event) {
        const rect = this.flowCanvas.nativeElement.getBoundingClientRect();
        const mouseX = event.pageX - rect.left;
        const mouseY = event.pageY - rect.top;
    }
    mousedown(event) {
        const rect = this.flowCanvas.nativeElement.getBoundingClientRect();
        const mouseX = event.pageX - rect.left;
        const mouseY = event.pageY - rect.top;
        let p = this.ctx.getImageData(mouseX, mouseY, 1, 1).data;
        const selCol = 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')';
        this.color.emit(selCol);
        this.pds.setColor(selCol);
    }
    mouseup(event) {
    }
    ngOnInit() {
    }
};
DirectionColorPickerComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], DirectionColorPickerComponent.prototype, "flowCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DirectionColorPickerComponent.prototype, "color", void 0);
DirectionColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direction-color-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./direction-color-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/direction-color-picker/direction-color-picker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./direction-color-picker.component.css */ "./src/app/tool-panel/direction-color-picker/direction-color-picker.component.css")).default]
    })
], DirectionColorPickerComponent);



/***/ }),

/***/ "./src/app/tool-panel/tool-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tool-panel/tool-panel.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dialogBack.hidden {\n  display: none;\n}\n\n#dialogBack {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 300px;\n  min-height: 200px;\n  background: rgba(0,0,0,0.2);\n  z-index: 1000;\n  display: grid;\n}\n\n#newLayerDialog {\n  width: 300px;\n  margin-right: auto;\n  padding: 1rem;\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbC1wYW5lbC90b29sLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC90b29sLXBhbmVsL3Rvb2wtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaWFsb2dCYWNrLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNkaWFsb2dCYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbiNuZXdMYXllckRpYWxvZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tool-panel/tool-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tool-panel/tool-panel.component.ts ***!
  \****************************************************/
/*! exports provided: ToolPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolPanelComponent", function() { return ToolPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project-data.service */ "./src/app/services/project-data.service.ts");



let ToolPanelComponent = class ToolPanelComponent {
    constructor(pds) {
        this.pds = pds;
        this.renderLayerVisible = false;
        this.running = false;
        this.isWorkerLoaded = false;
        this.isSupported = (function () {
            return document.querySelector && window.URL && window.Worker;
        })();
    }
    ngOnInit() {
    }
    zoom(factor) {
        this.pds.setZoom(this.pds.curZoom * factor);
    }
    changePenSize(event) {
        console.log(event);
        this.pds.drawSize = event.target.value;
    }
    blur() {
        const radius = parseInt(prompt('Please enter blur radius', '10'), 10);
        this.pds.blurLayer(radius);
    }
    renderDialog() {
        this.renderLayerVisible = true;
    }
    render() {
        const time = parseInt(document.getElementById('renderTime').value, 10);
        const frames = time * 30;
        const images = [];
        let renderStarted = false;
        const canvas = document.getElementById('CanvasFinal');
        this.pds.renderedFrameEmitter.subscribe(() => {
            if (images.length < frames) {
                const timg = new Image();
                timg.src = canvas.toDataURL();
                images.push(timg);
            }
            else if (!renderStarted) {
                renderStarted = true;
                this.startRender(images);
                console.log(images);
            }
        });
    }
    startRender(images) {
        this.initWorker();
        this.ffmpeg(images);
    }
    initWorker() {
        this.outputElement = document.getElementById('outputElement');
        this.worker = new Worker('assets/worker-asm.js');
        this.worker.onmessage = (event) => {
            const message = event.data;
            if (message.type == 'ready') {
                this.isWorkerLoaded = true;
                this.worker.postMessage({
                    type: 'command',
                    arguments: ['-help']
                });
            }
            else if (message.type === 'stdout') {
                //this.outputElement.innerHTML += message.data + '\n';
            }
            else if (message.type === 'start') {
                //this.outputElement.innerHTML = 'Worker has received command\n';
            }
            else if (message.type === 'done') {
                const buffers = message.data;
                if (buffers.length) {
                    this.outputElement.className = 'closed';
                }
                buffers.forEach((file) => {
                    console.log(this.getDownloadLink(file.data, file.name));
                    this.outputElement.appendChild(this.getDownloadLink(file.data, file.name));
                });
            }
        };
    }
    parseArguments(text) {
        text = text.replace(/\s+/g, ' ');
        let args = [];
        // Allow double quotes to not split args.
        text.split('"').forEach(function (t, i) {
            t = t.trim();
            if ((i % 2) === 1) {
                args.push(t);
            }
            else {
                args = args.concat(t.split(' '));
            }
        });
        return args;
    }
    ffmpeg(frames) {
        const text = '-framerate 30 -i img%03d.jpeg -c:v libx264 -vf fps=25 -pix_fmt yuv420p out.mp4';
        const args = this.parseArguments(text);
        console.log(args);
        const tempFiles = [];
        for (let i = 0; i < frames.length; i++) {
            tempFiles.push({
                name: 'img' + this.lpad(i, 3) + '.jpeg',
                data: this.imagetoUint8(frames[i])
            });
        }
        this.worker.postMessage({
            type: 'command',
            arguments: args,
            files: tempFiles
        });
    }
    lpad(value, padding) {
        const zeroes = new Array(padding + 1).join('0');
        return (zeroes + value).slice(-padding);
    }
    imagetoUint8(img) {
        const cv = document.createElement('canvas');
        cv.width = img.naturalWidth; // or 'width' if you want a special/scaled size
        cv.height = img.naturalHeight; // or 'height' if you want a special/scaled size
        cv.getContext('2d').drawImage(img, 0, 0);
        const dataUrl = cv.toDataURL('image/jpeg');
        return this.dataURLtoUint8(dataUrl);
    }
    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    dataURLtoUint8(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return u8arr;
    }
    getDownloadLink(fileData, fileName) {
        if (fileName.match(/\.jpeg|\.gif|\.jpg|\.png/)) {
            const blob = new Blob([fileData]);
            const src = window.URL.createObjectURL(blob);
            const img = document.createElement('img');
            img.src = src;
            return img;
        }
        else {
            const a = document.createElement('a');
            a.download = fileName;
            const blob = new Blob([fileData]);
            const src = window.URL.createObjectURL(blob);
            a.href = src;
            a.innerHTML = 'Click here to download ' + fileName + '!';
            return a;
        }
    }
    closeDialog(event) {
        this.renderLayerVisible = false;
        event.stopPropagation();
    }
};
ToolPanelComponent.ctorParameters = () => [
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_2__["ProjectDataService"] }
];
ToolPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tool-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tool-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-panel/tool-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tool-panel.component.css */ "./src/app/tool-panel/tool-panel.component.css")).default]
    })
], ToolPanelComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nils/WebstormProjects/sedart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map