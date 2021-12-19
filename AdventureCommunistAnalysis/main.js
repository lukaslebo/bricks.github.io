(self["webpackChunkanalysis_web"] = self["webpackChunkanalysis_web"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _util_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bem */ 6686);
/* harmony import */ var _util_rem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/rem */ 4194);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/analysis.reducer */ 6632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _reducer_analysis_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer/analysis.state */ 354);
/* harmony import */ var _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/researcher.state */ 8044);
/* harmony import */ var _reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/analysis.actions */ 702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! decimal.js */ 8992);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_researcher_analysis_row_researcher_analysis_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/researcher-analysis-row/researcher-analysis-row.component */ 5334);























function AppComponent_div_33_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Trade Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.styles("section-header-tradecost"));
} }
function AppComponent_div_33_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "researcher-analysis-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("updated", function AppComponent_div_33_div_16_Template_researcher_analysis_row_updated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.updateResearcherState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const researcher_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("researcher", researcher_r4)("researcherState", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r3.researcherStateMap$)[researcher_r4.name])("analysis", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx_r3.analysisMap$)[researcher_r4.name]);
} }
function AppComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AppComponent_div_33_div_6_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Available Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Boost");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Boost per 1k science");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AppComponent_div_33_div_16_Template, 4, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section-title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", section_r1, " Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section-header-lvl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", section_r1 === "Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section-header-cards"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section-header-boost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r0.styles("section-header-cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxLayoutGap", ctx_r0.dimensions(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.filterAndSort(ctx_r0.researcherBySection[section_r1], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 17, ctx_r0.analysisMap$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 19, ctx_r0.rank$)))("ngForTrackBy", ctx_r0.trackByResearcherId);
} }
class AppComponent {
    constructor(store, cdRef, route) {
        this.store = store;
        this.cdRef = cdRef;
        this.route = route;
        this.blockName = 'analysis-app';
        this.styles = (0,_util_bem__WEBPACK_IMPORTED_MODULE_0__.BEM)(this.blockName);
        this.dimensions = (0,_util_rem__WEBPACK_IMPORTED_MODULE_1__.REM)();
        this.rankControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, { updateOn: 'blur' });
        this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false);
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.sections = _reducer_analysis_state__WEBPACK_IMPORTED_MODULE_3__.sections;
        this.route.queryParams
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$))
            .subscribe((params) => {
            if (params.r || params.s) {
                this.store.dispatch((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__.loadFromRoute)({
                    rank: params.r,
                    encodedState: params.s
                }));
            }
            else {
                this.store.dispatch((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__.loadCookies)());
            }
        });
        // prettier-ignore
        this.researcherBySection = {
            Potato: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.industry === 'Potato' && r.modifier !== 'Trade'),
            Land: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.industry === 'Land' && r.modifier !== 'Trade'),
            Ore: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.industry === 'Ore' && r.modifier !== 'Trade'),
            Military: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.industry === 'Military' && r.modifier !== 'Trade'),
            Placebo: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.industry === 'Placebo' && r.modifier !== 'Trade'),
            Supreme: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.rarity === 'Supreme' && r.modifier !== 'Trade'),
            Trade: _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_4__.Researchers.allResearchers.filter((r) => r.modifier === 'Trade')
        };
        this.researcherStateMap$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectResearcher));
        this.rank$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCurrentRank));
        this.analysisMap$ = store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAnalysis));
        this.rankControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$))
            .subscribe((rank) => this.store.dispatch((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__.updateRank)({ rank })));
        this.rank$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$))
            .subscribe((rank) => this.rankControl.patchValue(rank, { emitEvent: false }));
        this.sortControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$))
            .subscribe(() => this.cdRef.detectChanges());
    }
    updateResearcherState(props) {
        this.store.dispatch((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__.updateResearcher)(props));
    }
    trackByResearcherId(index, el) {
        return el.name;
    }
    rankUp() {
        var _a;
        const next = ((_a = this.rankControl.value) !== null && _a !== void 0 ? _a : 0) + 1;
        this.rankControl.setValue(next);
    }
    rankDown() {
        var _a;
        const next = Math.max(((_a = this.rankControl.value) !== null && _a !== void 0 ? _a : 0) - 1, 1);
        this.rankControl.setValue(next);
    }
    filterAndSort(researchers, analysisMap, rank) {
        const res = researchers.filter((r) => r.unlockedAtRank <= rank);
        if (!this.sortControl.value)
            return res;
        return res.sort((a, b) => {
            const rA = new decimal_js__WEBPACK_IMPORTED_MODULE_6__.Decimal(analysisMap[a.name].boostPer1kScience);
            const rB = new decimal_js__WEBPACK_IMPORTED_MODULE_6__.Decimal(analysisMap[b.name].boostPer1kScience);
            return rA.comparedTo(rB) * -1;
        });
    }
    copyToClipboard() {
        this.store.dispatch((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_5__.copyToClipboard)());
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["analysis-app"]], decls: 34, vars: 23, consts: [["fxLayout", "column", 3, "fxLayoutGap"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "start baseline", 3, "fxLayoutGap"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "formControl"], ["matSuffix", "", "fxLayout", "row"], [3, "click"], [3, "formControl"], ["mat-button", "", 3, "click"], ["fxLayout", "column", 3, "class", 4, "ngFor", "ngForOf"], ["fxLayout", "row"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "researcher", "researcherState", "analysis", "updated"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Adventure Communists Researcher Analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Enter your rank below and set the levels of your researchers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " If you like you can set the available cards for some of your researchers, so the cost of buying the cards for science can be factored in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " In the section for researchers for comrade trades you can set the cost of your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " comrade trade to get better accuracy. You would set i.e. \"5HH\" or simply \"HH\". This will be used to evaluate how many trades you already got. Otherwise the power in the industry will be used to estimate the number of trades (which is not very accurate). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Except for comrade trades the boost of leveling a researcher is evaluated in log with base 2. So leveling a common is always boost 1 but multiplies your industry power by 2. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Disclaimer: The state of your form below will be saved to your cookies once you start setting values. When you come back to this site you don't have to reapply all your settings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Your Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_25_listener() { return ctx.rankUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "arrow_circle_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_27_listener() { return ctx.rankDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "arrow_circle_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Sort by most valuable Researchers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_31_listener() { return ctx.copyToClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Copy to Clipboard (URL) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AppComponent_div_33_Template, 19, 21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.blockName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxLayoutGap", ctx.dimensions(32));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("scroll-container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("header-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("text", "bold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("rank-section"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxLayoutGap", ctx.dimensions(8));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("rank-field"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.rankControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("sort-checkbox"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.sortControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.styles("copy-button"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _components_researcher_analysis_row_researcher_analysis_row_component__WEBPACK_IMPORTED_MODULE_7__.ResearcherAnalysisRowComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe], styles: [".analysis-app[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #c0d3f1;\n}\n.analysis-app__scroll-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 2rem;\n}\n.analysis-app__description[_ngcontent-%COMP%] {\n  width: 43.75rem;\n}\n.analysis-app__text--bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.analysis-app__header-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.analysis-app__section[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  width: 62.5rem;\n}\n.analysis-app__section-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  width: 16rem;\n}\n.analysis-app__section-header-lvl[_ngcontent-%COMP%] {\n  width: 6.5rem;\n}\n.analysis-app__section-header-tradecost[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.analysis-app__section-header-cards[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.analysis-app__section-header-boost[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.analysis-app__section-header-cost[_ngcontent-%COMP%] {\n  width: 5.5rem;\n}\n.analysis-app__sort-checkbox[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n.analysis-app__rank-section[_ngcontent-%COMP%] {\n  width: 62.5rem;\n}\n.analysis-app__rank-field[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.analysis-app__rank-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 0.5rem 0;\n  border-top-width: 0.25rem;\n}\n.analysis-app__rank-field[_ngcontent-%COMP%]   [matSuffix][_ngcontent-%COMP%] {\n  transform: translateY(0.0625rem);\n}\n.analysis-app__rank-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.analysis-app__copy-button[_ngcontent-%COMP%] {\n  background-color: #0a2bff;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUREO0FBR0M7RUFDQyxjQUFBO0VBRUEsYUFBQTtBQUZGO0FBS0M7RUFDQyxlQUFBO0FBSEY7QUFPRTtFQUNDLGdCQUFBO0FBTEg7QUFTQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVVDO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBUkY7QUFXQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFURjtBQVlDO0VBQ0MsYUFBQTtBQVZGO0FBYUM7RUFDQyxXQUFBO0FBWEY7QUFjQztFQUNDLFdBQUE7QUFaRjtBQWVDO0VBQ0MsV0FBQTtBQWJGO0FBZ0JDO0VBQ0MsYUFBQTtBQWRGO0FBaUJDO0VBQ0MsbUJBQUE7QUFmRjtBQWtCQztFQUNDLGNBQUE7QUFoQkY7QUFtQkM7RUFDQyxXQUFBO0FBakJGO0FBbUJFO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtBQWpCSDtBQW9CRTtFQUNDLGdDQUFBO0FBbEJIO0FBcUJFO0VBQ0MsZUFBQTtBQW5CSDtBQXVCQztFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQXJCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd0aGVtZS9yZW0nO1xyXG5cclxuLmFuYWx5c2lzLWFwcCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2MwZDNmMTtcclxuXHJcblx0Jl9fc2Nyb2xsLWNvbnRhaW5lciB7XHJcblx0XHRvdmVyZmxvdzogYXV0bztcclxuXHJcblx0XHRwYWRkaW5nOiAzMiAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fZGVzY3JpcHRpb24ge1xyXG5cdFx0d2lkdGg6IDcwMCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fdGV4dCB7XHJcblx0XHQmLS1ib2xkIHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlci10aXRsZSB7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Zm9udC1zaXplOiAyNCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fc2VjdGlvbiB7XHJcblx0XHRtYXJnaW4tdG9wOiA0OCAqICRkaW0tMXB4O1xyXG5cdFx0d2lkdGg6IDEwMDAgKiAkZGltLTFweDtcclxuXHR9XHJcblxyXG5cdCZfX3NlY3Rpb24tdGl0bGUge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTYgKiAkZGltLTFweDtcclxuXHRcdHdpZHRoOiAyNTYgKiAkZGltLTFweDtcclxuXHR9XHJcblxyXG5cdCZfX3NlY3Rpb24taGVhZGVyLWx2bCB7XHJcblx0XHR3aWR0aDogMTA0ICogJGRpbS0xcHg7XHJcblx0fVxyXG5cclxuXHQmX19zZWN0aW9uLWhlYWRlci10cmFkZWNvc3Qge1xyXG5cdFx0d2lkdGg6IDExMiAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fc2VjdGlvbi1oZWFkZXItY2FyZHMge1xyXG5cdFx0d2lkdGg6IDEyOCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fc2VjdGlvbi1oZWFkZXItYm9vc3Qge1xyXG5cdFx0d2lkdGg6IDY0ICogJGRpbS0xcHg7XHJcblx0fVxyXG5cclxuXHQmX19zZWN0aW9uLWhlYWRlci1jb3N0IHtcclxuXHRcdHdpZHRoOiA4OCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fc29ydC1jaGVja2JveCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjQgKiAkZGltLTFweDtcclxuXHR9XHJcblxyXG5cdCZfX3Jhbmstc2VjdGlvbiB7XHJcblx0XHR3aWR0aDogMTAwMCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fcmFuay1maWVsZCB7XHJcblx0XHR3aWR0aDogOTYgKiAkZGltLTFweDtcclxuXHJcblx0XHQ6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuXHRcdFx0cGFkZGluZzogOCAqICRkaW0tMXB4IDA7XHJcblx0XHRcdGJvcmRlci10b3Atd2lkdGg6IDQgKiAkZGltLTFweDtcclxuXHRcdH1cclxuXHJcblx0XHRbbWF0U3VmZml4XSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxICogJGRpbS0xcHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1hdC1pY29uIHtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9fY29weS1idXR0b24ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzBhMmJmZjtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 5434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/analysis.reducer */ 6632);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 5811);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _components_researcher_analysis_row_researcher_analysis_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/researcher-analysis-row/researcher-analysis-row.component */ 5334);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _effects_analysis_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/analysis.effect */ 3998);
/* harmony import */ var _service_analysis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/analysis.service */ 8823);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_service_analysis_service__WEBPACK_IMPORTED_MODULE_6__.AnalysisService], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.analysisReducerMap),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsModule.forRoot([_effects_analysis_effect__WEBPACK_IMPORTED_MODULE_5__.AnalysisEffect])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_researcher_analysis_row_researcher_analysis_row_component__WEBPACK_IMPORTED_MODULE_4__.ResearcherAnalysisRowComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsRootModule] }); })();


/***/ }),

/***/ 5334:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/researcher-analysis-row/researcher-analysis-row.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearcherAnalysisRowComponent": () => (/* binding */ ResearcherAnalysisRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _util_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/bem */ 6686);
/* harmony import */ var _util_rem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/rem */ 4194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/analysis.reducer */ 6632);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! decimal.js */ 8992);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/human-readable-numbers */ 2977);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 5434);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);


















function ResearcherAnalysisRowComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_mat_form_field_14_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.tradeCostUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_circle_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_mat_form_field_14_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.tradeCostDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "arrow_circle_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r0.styles("trade-cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r0.formControls.nextTradeCost);
} }
function ResearcherAnalysisRowComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.styles("trade-cost-placeholder"));
} }
class ResearcherAnalysisRowComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.blockName = 'researcher-analysis-row';
        this.styles = (0,_util_bem__WEBPACK_IMPORTED_MODULE_0__.BEM)(this.blockName);
        this.dimensions = (0,_util_rem__WEBPACK_IMPORTED_MODULE_1__.REM)();
        this.iconPath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.iconPath;
        this.researcherState$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.initialResearcherState);
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.formControls = {
            currentLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            availableCards: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            nextTradeCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null)
        };
        this.formGroup = this.formBuilder.group(this.formControls, { updateOn: 'blur' });
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.researcherState$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$))
            .subscribe((researcherState) => this.formGroup.patchValue(researcherState, { emitEvent: false }));
        this.formGroup.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {
            var _a;
            const val = this.formGroup.getRawValue();
            const unit = (_a = this.formControls.nextTradeCost.value) === null || _a === void 0 ? void 0 : _a.match(/(?<num>[0-9]*)(?<unit>[a-z]*)/i).groups.unit;
            if (val.nextTradeCost) {
                val.nextTradeCost = unit.toUpperCase();
            }
            return val;
        }))
            .subscribe((state) => this.updated.emit({
            id: this.researcher.name,
            researcherState: state
        }));
    }
    set researcherState(researcherState) {
        this.researcherState$.next(researcherState);
    }
    get researcherState() {
        return this.researcherState$.getValue();
    }
    lvlUp() {
        let maxLevel;
        switch (this.researcher.rarity) {
            case 'Common':
                maxLevel = 13;
                break;
            case 'Rare':
                maxLevel = 11;
                break;
            case 'Epic':
                maxLevel = 8;
                break;
            case 'Supreme':
                maxLevel = 5;
                break;
        }
        const next = Math.min(this.formControls.currentLevel.value, maxLevel);
        this.formControls.currentLevel.setValue(next);
    }
    lvlDown() {
        const next = Math.max(this.formControls.currentLevel.value - 1, 0);
        this.formControls.currentLevel.setValue(next);
    }
    tradeCostUp() {
        var _a, _b;
        const unit = (_a = this.formControls.nextTradeCost.value) === null || _a === void 0 ? void 0 : _a.match(/(?<num>[0-9]*)(?<unit>[a-z]*)/i).groups.unit;
        const index = _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.unitsMapping.indexOf(unit);
        this.formControls.nextTradeCost.setValue((_b = _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.unitsMapping[index + 1]) !== null && _b !== void 0 ? _b : null);
    }
    tradeCostDown() {
        var _a, _b;
        const unit = (_a = this.formControls.nextTradeCost.value) === null || _a === void 0 ? void 0 : _a.match(/(?<num>[0-9]*)(?<unit>[a-z]*)/i).groups.unit;
        const index = _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.unitsMapping.indexOf(unit);
        this.formControls.nextTradeCost.setValue((_b = _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.unitsMapping[index - 1]) !== null && _b !== void 0 ? _b : null);
    }
    cardsUp() {
        var _a;
        const next = ((_a = this.formControls.availableCards.value) !== null && _a !== void 0 ? _a : 0) + 1;
        this.formControls.availableCards.setValue(next);
    }
    cardsDown() {
        var _a;
        let next = ((_a = this.formControls.availableCards.value) !== null && _a !== void 0 ? _a : 0) - 1;
        if (next < 0) {
            next = null;
        }
        this.formControls.availableCards.setValue(next);
    }
    format(num) {
        return num ? (0,_util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.toHumanReadable)(new decimal_js__WEBPACK_IMPORTED_MODULE_3__.Decimal(num)) : '';
    }
    getCost() {
        var _a, _b, _c, _d;
        const upgradeCost = new decimal_js__WEBPACK_IMPORTED_MODULE_3__.Decimal((_b = (_a = this.analysis) === null || _a === void 0 ? void 0 : _a.upgradeCost) !== null && _b !== void 0 ? _b : 0);
        const upgradeCardCost = new decimal_js__WEBPACK_IMPORTED_MODULE_3__.Decimal((_d = (_c = this.analysis) === null || _c === void 0 ? void 0 : _c.upgradeCardCost) !== null && _d !== void 0 ? _d : 0);
        const nums = upgradeCardCost.gt(0)
            ? [upgradeCost, upgradeCardCost]
            : [upgradeCost];
        return nums.map((n) => (0,_util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_4__.toHumanReadable)(n)).join(' + ');
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
}
ResearcherAnalysisRowComponent.ɵfac = function ResearcherAnalysisRowComponent_Factory(t) { return new (t || ResearcherAnalysisRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
ResearcherAnalysisRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ResearcherAnalysisRowComponent, selectors: [["researcher-analysis-row"]], inputs: { researcher: "researcher", researcherState: "researcherState", analysis: "analysis" }, outputs: { updated: "updated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: { appearance: 'outline', floatLabel: 'auto' }
            }
        ])], decls: 29, vars: 27, consts: [["fxLayout", "row", "fxLayoutAlign", "start baseline", 3, "fxLayoutGap"], [3, "src"], ["matInput", "", "type", "number", 3, "formControl"], ["matSuffix", "", "fxLayout", "row"], [3, "click"], [3, "class", 4, "ngIf"], ["matSuffix", "", "fxLayout", "row", "fxLayoutAlign", "start center"], ["matInput", "", "type", "text", 3, "formControl"]], template: function ResearcherAnalysisRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_Template_mat_icon_click_10_listener() { return ctx.lvlUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "arrow_circle_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_Template_mat_icon_click_12_listener() { return ctx.lvlDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "arrow_circle_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ResearcherAnalysisRowComponent_mat_form_field_14_Template, 7, 3, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ResearcherAnalysisRowComponent_div_15_Template, 1, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_Template_mat_icon_click_19_listener() { return ctx.cardsUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "arrow_circle_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResearcherAnalysisRowComponent_Template_mat_icon_click_21_listener() { return ctx.cardsDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "arrow_circle_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.blockName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fxLayoutGap", ctx.dimensions(8));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.researcher.researcherName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("industry"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.iconPath + ctx.researcher.industry.toLowerCase() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("modifier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.iconPath + ctx.researcher.modifier.toLowerCase() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("current-level"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.formControls.currentLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.researcher.modifier === "Trade" && ctx.researcher.rarity !== "Supreme");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.researcher.modifier === "Trade" && ctx.researcher.rarity === "Supreme");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("available-cards"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.formControls.availableCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("boost"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.format(ctx.analysis == null ? null : ctx.analysis.boost));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.styles("cost"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.getCost(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.format(ctx.analysis == null ? null : ctx.analysis.boostPer1kScience), " ");
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf], styles: [".researcher-analysis-row[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 100%;\n}\n.researcher-analysis-row__name[_ngcontent-%COMP%] {\n  width: 11.5rem;\n}\n.researcher-analysis-row__industry[_ngcontent-%COMP%], .researcher-analysis-row__modifier[_ngcontent-%COMP%] {\n  width: 1.5rem;\n}\n.researcher-analysis-row__current-level[_ngcontent-%COMP%], .researcher-analysis-row__available-cards[_ngcontent-%COMP%], .researcher-analysis-row__trade-cost[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.researcher-analysis-row__current-level[_ngcontent-%COMP%]     .mat-form-field-infix, .researcher-analysis-row__available-cards[_ngcontent-%COMP%]     .mat-form-field-infix, .researcher-analysis-row__trade-cost[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 0.5rem 0;\n  border-top-width: 0.25rem;\n}\n.researcher-analysis-row__current-level[_ngcontent-%COMP%]   [matSuffix][_ngcontent-%COMP%], .researcher-analysis-row__available-cards[_ngcontent-%COMP%]   [matSuffix][_ngcontent-%COMP%], .researcher-analysis-row__trade-cost[_ngcontent-%COMP%]   [matSuffix][_ngcontent-%COMP%] {\n  transform: translateY(0.0625rem);\n}\n.researcher-analysis-row__current-level[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .researcher-analysis-row__available-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .researcher-analysis-row__trade-cost[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.researcher-analysis-row__trade-cost[_ngcontent-%COMP%], .researcher-analysis-row__trade-cost-placeholder[_ngcontent-%COMP%] {\n  width: 6.5rem;\n}\n.researcher-analysis-row__available-cards[_ngcontent-%COMP%] {\n  width: 7.5rem;\n}\n.researcher-analysis-row__boost[_ngcontent-%COMP%] {\n  width: 3.5rem;\n}\n.researcher-analysis-row__cost[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VhcmNoZXItYW5hbHlzaXMtcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFERDtBQUdDO0VBQ0MsY0FBQTtBQURGO0FBSUM7RUFFQyxhQUFBO0FBSEY7QUFNQztFQUdDLFdBQUE7QUFORjtBQVFFO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtBQU5IO0FBU0U7RUFDQyxnQ0FBQTtBQVBIO0FBVUU7RUFDQyxlQUFBO0FBUkg7QUFZQztFQUVDLGFBQUE7QUFYRjtBQWNDO0VBQ0MsYUFBQTtBQVpGO0FBZUM7RUFDQyxhQUFBO0FBYkY7QUFnQkM7RUFDQyxXQUFBO0FBZEYiLCJmaWxlIjoicmVzZWFyY2hlci1hbmFseXNpcy1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd0aGVtZS9yZW0nO1xyXG5cclxuLnJlc2VhcmNoZXItYW5hbHlzaXMtcm93IHtcclxuXHRoZWlnaHQ6IDMyICogJGRpbS0xcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdCZfX25hbWUge1xyXG5cdFx0d2lkdGg6IDE4NCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9faW5kdXN0cnksXHJcblx0Jl9fbW9kaWZpZXIge1xyXG5cdFx0d2lkdGg6IDI0ICogJGRpbS0xcHg7XHJcblx0fVxyXG5cclxuXHQmX19jdXJyZW50LWxldmVsLFxyXG5cdCZfX2F2YWlsYWJsZS1jYXJkcyxcclxuXHQmX190cmFkZS1jb3N0IHtcclxuXHRcdHdpZHRoOiA5NiAqICRkaW0tMXB4O1xyXG5cclxuXHRcdDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG5cdFx0XHRwYWRkaW5nOiA4ICogJGRpbS0xcHggMDtcclxuXHRcdFx0Ym9yZGVyLXRvcC13aWR0aDogNCAqICRkaW0tMXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdFttYXRTdWZmaXhdIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEgKiAkZGltLTFweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWF0LWljb24ge1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX190cmFkZS1jb3N0LFxyXG5cdCZfX3RyYWRlLWNvc3QtcGxhY2Vob2xkZXIge1xyXG5cdFx0d2lkdGg6IDEwNCAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fYXZhaWxhYmxlLWNhcmRzIHtcclxuXHRcdHdpZHRoOiAxMjAgKiAkZGltLTFweDtcclxuXHR9XHJcblxyXG5cdCZfX2Jvb3N0IHtcclxuXHRcdHdpZHRoOiA1NiAqICRkaW0tMXB4O1xyXG5cdH1cclxuXHJcblx0Jl9fY29zdCB7XHJcblx0XHR3aWR0aDogODAgKiAkZGltLTFweDtcclxuXHR9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3998:
/*!********************************************!*\
  !*** ./src/app/effects/analysis.effect.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisEffect": () => (/* binding */ AnalysisEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducer/analysis.actions */ 702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/researcher.state */ 8044);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer/analysis.reducer */ 6632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _util_compression_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/compression-util */ 9249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_analysis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/analysis.service */ 8823);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);















class AnalysisEffect {
    constructor(actions, store, analysisService, cookieService, clipboard, router) {
        this.actions = actions;
        this.store = store;
        this.analysisService = analysisService;
        this.cookieService = cookieService;
        this.clipboard = clipboard;
        this.router = router;
        this.loadCookie$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.loadCookies), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            let researcherStateMap;
            let rank;
            if (this.cookieService.check('GAME_STATE')) {
                const gameState = this.cookieService.get('GAME_STATE');
                researcherStateMap = (0,_util_compression_util__WEBPACK_IMPORTED_MODULE_3__.decompressState)(gameState);
            }
            if (this.cookieService.check('RANK')) {
                rank = JSON.parse(this.cookieService.get('RANK'));
            }
            return (0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.stateLoaded)({ rank, researcherStateMap });
        })));
        this.storeCookie$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.updateResearcher, _reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.updateRank, _reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.stateLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectResearcher)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCurrentRank))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(([_, researcherStateMap, rank]) => {
            const expires = new Date();
            expires.setFullYear(expires.getFullYear() + 3);
            this.cookieService.set('GAME_STATE', (0,_util_compression_util__WEBPACK_IMPORTED_MODULE_3__.compressState)(researcherStateMap), expires, '/', document.domain, false, 'Lax');
            this.cookieService.set('RANK', rank === null || rank === void 0 ? void 0 : rank.toString(), expires, '/', document.domain, false, 'Lax');
        })), {
            dispatch: false
        });
        this.updateAnalysis$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.updateResearcher, _reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.stateLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectResearcher))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([_, researcherStateMap]) => {
            const analysisMap = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.map((r) => ({
                [r.name]: this.analysisService.analyze(r, researcherStateMap)
            }))
                .reduce((acc, next) => (Object.assign(Object.assign({}, acc), next)), {});
            return (0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.updateAnalysisMap)({ analysisMap });
        })));
        this.loadStateFromRoute$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.loadFromRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(({ rank, encodedState }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)((0,_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.stateLoaded)({
            rank,
            researcherStateMap: (0,_util_compression_util__WEBPACK_IMPORTED_MODULE_3__.decompressState)(encodedState)
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.router.navigate(['/']))));
        this.copyToClipboard$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_reducer_analysis_actions__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectCurrentRank)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_reducer_analysis_reducer__WEBPACK_IMPORTED_MODULE_2__.selectResearcher))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(([_, rank, researcherStateMap]) => {
            this.clipboard.copy(window.location.origin +
                window.location.pathname +
                `?r=${rank}&s=${encodeURIComponent((0,_util_compression_util__WEBPACK_IMPORTED_MODULE_3__.compressState)(researcherStateMap))}`);
        })), { dispatch: false });
    }
}
AnalysisEffect.ɵfac = function AnalysisEffect_Factory(t) { return new (t || AnalysisEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_service_analysis_service__WEBPACK_IMPORTED_MODULE_4__.AnalysisService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router)); };
AnalysisEffect.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AnalysisEffect, factory: AnalysisEffect.ɵfac });


/***/ }),

/***/ 702:
/*!*********************************************!*\
  !*** ./src/app/reducer/analysis.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateRank": () => (/* binding */ updateRank),
/* harmony export */   "updateResearcher": () => (/* binding */ updateResearcher),
/* harmony export */   "updateAnalysisMap": () => (/* binding */ updateAnalysisMap),
/* harmony export */   "loadCookies": () => (/* binding */ loadCookies),
/* harmony export */   "loadFromRoute": () => (/* binding */ loadFromRoute),
/* harmony export */   "stateLoaded": () => (/* binding */ stateLoaded),
/* harmony export */   "copyToClipboard": () => (/* binding */ copyToClipboard)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const updateRank = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] updateRank', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateResearcher = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] updateResearcher', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateAnalysisMap = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] updateAnalysisMap', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCookies = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] loadCookies');
const loadFromRoute = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] loadFromRoute', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const stateLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] stateLoaded', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const copyToClipboard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Analysis] copyToClipboard');


/***/ }),

/***/ 6632:
/*!*********************************************!*\
  !*** ./src/app/reducer/analysis.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialResearcherState": () => (/* binding */ initialResearcherState),
/* harmony export */   "analysisReducerMap": () => (/* binding */ analysisReducerMap),
/* harmony export */   "selectCurrentRank": () => (/* binding */ selectCurrentRank),
/* harmony export */   "selectResearcher": () => (/* binding */ selectResearcher),
/* harmony export */   "selectAnalysis": () => (/* binding */ selectAnalysis),
/* harmony export */   "selectCookiesLoaded": () => (/* binding */ selectCookiesLoaded)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _researcher_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./researcher.state */ 8044);
/* harmony import */ var _analysis_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis.actions */ 702);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 3536);




const rankReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(1, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.updateRank, (_, { rank }) => rank), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.stateLoaded, (state, { rank }) => rank !== null && rank !== void 0 ? rank : state));
const initialResearcherState = {
    currentLevel: 0,
    availableCards: null,
    nextTradeCost: null
};
const researcherInitialState = _researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.reduce((acc, r) => (Object.assign(Object.assign({}, acc), { [r.name]: initialResearcherState })), {});
const researcherReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(researcherInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.updateResearcher, (state, { id, researcherState }) => (0,immer__WEBPACK_IMPORTED_MODULE_3__["default"])(state, (draft) => {
    draft[id] = researcherState;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.stateLoaded, (state, { researcherStateMap }) => (Object.assign(Object.assign({}, state), researcherStateMap))));
const analysisInitialState = _researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.reduce((acc, r) => (Object.assign(Object.assign({}, acc), { [r.name]: null })), {});
const analysisReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(analysisInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.updateAnalysisMap, (state, { analysisMap }) => (Object.assign(Object.assign({}, state), analysisMap))));
const cookieReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(false, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_analysis_actions__WEBPACK_IMPORTED_MODULE_1__.stateLoaded, () => true));
const analysisReducerMap = {
    currentRank: rankReducer,
    researcher: researcherReducer,
    analysis: analysisReducer,
    cookiesLoaded: cookieReducer
};
const selectCurrentRank = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('currentRank');
const selectResearcher = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('researcher');
const selectAnalysis = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('analysis');
const selectCookiesLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('cookiesLoaded');


/***/ }),

/***/ 354:
/*!*******************************************!*\
  !*** ./src/app/reducer/analysis.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sections": () => (/* binding */ sections)
/* harmony export */ });
const sections = [
    'Potato',
    'Land',
    'Ore',
    'Military',
    'Placebo',
    'Supreme',
    'Trade'
];


/***/ }),

/***/ 8044:
/*!*********************************************!*\
  !*** ./src/app/reducer/researcher.state.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Researchers": () => (/* binding */ Researchers)
/* harmony export */ });
// @formatter:off
// prettier-ignore
class Researchers {
    static get allResearchers() {
        return Object.values(Researchers);
    }
}
// Potato Commons
Researchers.RingoRinglet = { id: 1, name: 'RingoRinglet', researcherName: 'Ringo Ringlet', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 1 };
Researchers.CommuneOfDoggone = { id: 2, name: 'CommuneOfDoggone', researcherName: 'Commune of Doggone', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 1 };
Researchers.MadMadMarx = { id: 3, name: 'MadMadMarx', researcherName: 'Mad Mad Marx', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 3 };
Researchers.RickyJay = { id: 4, name: 'RickyJay', researcherName: 'Ricky Jay', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 5 };
Researchers.DrQuinnyForeman = { id: 5, name: 'DrQuinnyForeman', researcherName: 'Dr. Quinny Foreman', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 8 };
Researchers.DoggBenson = { id: 6, name: 'DoggBenson', researcherName: 'Dogg Benson', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 15 };
Researchers.ErnieAbeNormal = { id: 7, name: 'ErnieAbeNormal', researcherName: 'Ernie Abe Normal', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 28 };
Researchers.IsaacCulkin = { id: 8, name: 'IsaacCulkin', researcherName: 'Isaac Culkin', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 42 };
Researchers.NatePolly = { id: 9, name: 'NatePolly', researcherName: 'Nate Polly', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 57 };
Researchers.SpudlyDoRight = { id: 10, name: 'SpudlyDoRight', researcherName: 'Spudly Do Right', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 80 };
Researchers.UncleSmurf = { id: 11, name: 'UncleSmurf', researcherName: 'Uncle Smurf', industry: 'Potato', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 103 };
// Land Commons
Researchers.MillyTheMighty = { id: 12, name: 'MillyTheMighty', researcherName: 'Milly the Mighty', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 3 };
Researchers.BigPaulie = { id: 13, name: 'BigPaulie', researcherName: 'Big Paulie', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 4 };
Researchers.DocBrownRoad = { id: 14, name: 'DocBrownRoad', researcherName: 'Doc Brown Road', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 5 };
Researchers.JohnnyT = { id: 15, name: 'JohnnyT', researcherName: 'Johnny T', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 7 };
Researchers.JoviCannonball = { id: 16, name: 'JoviCannonball', researcherName: 'Jovi Cannonball', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 13 };
Researchers.ChuckClampall = { id: 17, name: 'ChuckClampall', researcherName: 'Chuck Clampall', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 23 };
Researchers.SailorBonny = { id: 18, name: 'SailorBonny', researcherName: 'Sailor Bonny', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 36 };
Researchers.GeriSpringerBouvier = { id: 19, name: 'GeriSpringerBouvier', researcherName: 'Geri Springer Bouvier', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 51 };
Researchers.MaverickRyback = { id: 20, name: 'MaverickRyback', researcherName: 'Maverick Ryback', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 68 };
Researchers.JimmyAstroseed = { id: 21, name: 'JimmyAstroseed', researcherName: 'Jimmy Astroseed', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 88 };
Researchers.AlbertMutanstein = { id: 22, name: 'AlbertMutanstein', researcherName: 'Albert Mutanstein', industry: 'Land', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 114 };
// Ore Commons
Researchers.DerekKeeblander = { id: 23, name: 'DerekKeeblander', researcherName: 'Derek Keeblander', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 6 };
Researchers.MorticianMarley = { id: 24, name: 'MorticianMarley', researcherName: 'Mortician Marley', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 7 };
Researchers.BlastOffBuds = { id: 25, name: 'BlastOffBuds', researcherName: 'Blast Off Buds', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 9 };
Researchers.Speluffy = { id: 26, name: 'Speluffy', researcherName: 'Speluffy', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 10 };
Researchers.Pumbob = { id: 27, name: 'Pumbob', researcherName: 'Pumbob', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 21 };
Researchers.LtMcRhodey = { id: 28, name: 'LtMcRhodey', researcherName: 'Lt. McRhodey', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 33 };
Researchers.CaptainDDrumpf = { id: 29, name: 'CaptainDDrumpf', researcherName: 'Captain D. Drumpf', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 48 };
Researchers.DragoactiveMan = { id: 30, name: 'DragoactiveMan', researcherName: 'Dragoactive Man', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 64 };
Researchers.LandyCalrussian = { id: 31, name: 'LandyCalrussian', researcherName: 'Landy Calrussian', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 84 };
Researchers.ComradeBroski = { id: 32, name: 'ComradeBroski', researcherName: 'Comrade Broski', industry: 'Ore', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 108 };
// Military Commons
Researchers.DukeOHazzard = { id: 33, name: 'DukeOHazzard', researcherName: "Duke O'Hazzard", industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 11 };
Researchers.ChuckManhart = { id: 34, name: 'ChuckManhart', researcherName: 'Chuck Manhart', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 12 };
Researchers.BradBones = { id: 35, name: 'BradBones', researcherName: 'Brad Bones', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 14 };
Researchers.Starvin = { id: 36, name: 'Starvin', researcherName: 'Starvin', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 16 };
Researchers.JeanCRico = { id: 37, name: 'JeanCRico', researcherName: 'Jean C. Rico', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 31 };
Researchers.SkeezyMcScott = { id: 38, name: 'SkeezyMcScott', researcherName: 'Skeezy McScott', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 45 };
Researchers.CaptainJSpaddock = { id: 39, name: 'CaptainJSpaddock', researcherName: 'Captain J. Spaddock', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 60 };
Researchers.DominicsAngels = { id: 40, name: 'DominicsAngels', researcherName: 'Dominics Angels', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 76 };
Researchers.MannyOsbomb = { id: 41, name: 'MannyOsbomb', researcherName: 'Manny Osbomb', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 98 };
Researchers.LocutusFreak = { id: 42, name: 'LocutusFreak', researcherName: 'Locutus Freak', industry: 'Military', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 126 };
// Placebo Commons
Researchers.KennieWhooser = { id: 43, name: 'KennieWhooser', researcherName: 'Kennie Whooser', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 18 };
Researchers.Patcheye = { id: 44, name: 'Patcheye', researcherName: 'Patcheye', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 19 };
Researchers.JDMD = { id: 45, name: 'JDMD', researcherName: 'J.D.M.D.', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 20 };
Researchers.HowlinMac = { id: 46, name: 'HowlinMac', researcherName: 'Howlin Mac', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 25 };
Researchers.EleanorLynn = { id: 47, name: 'EleanorLynn', researcherName: 'Eleanor Lynn', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 39 };
Researchers.DoctorMcSizzly = { id: 48, name: 'DoctorMcSizzly', researcherName: 'Doctor McSizzly', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 54 };
Researchers.DoctorHasselberg = { id: 49, name: 'DoctorHasselberg', researcherName: 'Doctor Hasselberg', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 72 };
Researchers.TheKillMeNows = { id: 50, name: 'TheKillMeNows', researcherName: 'The Kill Me Nows', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 93 };
Researchers.ZapMcNicoy = { id: 51, name: 'ZapMcNicoy', researcherName: 'Zap McNicoy', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 120 };
Researchers.TheMonstourage = { id: 52, name: 'TheMonstourage', researcherName: 'The Monstourage', industry: 'Placebo', modifier: 'Speed', rarity: 'Common', unlockedAtRank: 150 };
// Rares
Researchers.Mactuber = { id: 53, name: 'Mactuber', researcherName: 'Mactuber', industry: 'Potato', modifier: 'Power', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.TheConfectioners = { id: 54, name: 'TheConfectioners', researcherName: 'The Confectioners', industry: 'Potato', modifier: 'Chance', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.AssistantToTheMajor = { id: 55, name: 'AssistantToTheMajor', researcherName: "Assistant 'to the' Major", industry: 'Potato', modifier: 'Trade', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.JasonVanDriessen = { id: 56, name: 'JasonVanDriessen', researcherName: 'Jason Van Driessen', industry: 'Land', modifier: 'Power', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.TheGroovers = { id: 57, name: 'TheGroovers', researcherName: 'The Groovers', industry: 'Land', modifier: 'Chance', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.WackoJoker = { id: 58, name: 'WackoJoker', researcherName: 'Wacko Joker', industry: 'Land', modifier: 'Trade', rarity: 'Rare', unlockedAtRank: 3 };
Researchers.RobertScratchesSaki = { id: 59, name: 'RobertScratchesSaki', researcherName: 'Robert Scratches Saki', industry: 'Ore', modifier: 'Power', rarity: 'Rare', unlockedAtRank: 8 };
Researchers.GimliYosemiteSam = { id: 60, name: 'GimliYosemiteSam', researcherName: 'Gimli Yosemite Sam', industry: 'Ore', modifier: 'Chance', rarity: 'Rare', unlockedAtRank: 11 };
Researchers.Salvadorville = { id: 61, name: 'Salvadorville', researcherName: 'Salvadorville', industry: 'Ore', modifier: 'Trade', rarity: 'Rare', unlockedAtRank: 10 };
Researchers.JohnnyORambo = { id: 62, name: 'JohnnyORambo', researcherName: 'Johnny O. Rambo', industry: 'Military', modifier: 'Power', rarity: 'Rare', unlockedAtRank: 12 };
Researchers.DarthWallace = { id: 63, name: 'DarthWallace', researcherName: 'Darth Wallace', industry: 'Military', modifier: 'Chance', rarity: 'Rare', unlockedAtRank: 17 };
Researchers.AdrianXVultor = { id: 64, name: 'AdrianXVultor', researcherName: 'Adrian X. Vultor', industry: 'Military', modifier: 'Trade', rarity: 'Rare', unlockedAtRank: 16 };
Researchers.MerthaJoy = { id: 65, name: 'MerthaJoy', researcherName: 'Mertha Joy', industry: 'Placebo', modifier: 'Power', rarity: 'Rare', unlockedAtRank: 18 };
Researchers.NurseTemple = { id: 66, name: 'NurseTemple', researcherName: 'Nurse Temple', industry: 'Placebo', modifier: 'Chance', rarity: 'Rare', unlockedAtRank: 24 };
Researchers.SirLanceEgon = { id: 67, name: 'SirLanceEgon', researcherName: 'Sir Lance Egon', industry: 'Placebo', modifier: 'Trade', rarity: 'Rare', unlockedAtRank: 20 };
Researchers.Magdonut = { id: 68, name: 'Magdonut', researcherName: 'Magdonut', industry: 'Potato', modifier: 'SinglePower', rarity: 'Rare', unlockedAtRank: 34 };
Researchers.TheShrink = { id: 69, name: 'TheShrink', researcherName: 'The Shrink', industry: 'Land', modifier: 'SinglePower', rarity: 'Rare', unlockedAtRank: 44 };
Researchers.Thollum = { id: 70, name: 'Thollum', researcherName: 'Thollum', industry: 'Ore', modifier: 'SinglePower', rarity: 'Rare', unlockedAtRank: 56 };
Researchers.DingDongUn = { id: 71, name: 'DingDongUn', researcherName: 'Ding Dong Un', industry: 'Military', modifier: 'SinglePower', rarity: 'Rare', unlockedAtRank: 70 };
Researchers.MisaValentine = { id: 72, name: 'MisaValentine', researcherName: 'Misa Valentine', industry: 'Placebo', modifier: 'SinglePower', rarity: 'Rare', unlockedAtRank: 90 };
// Epics
Researchers.Pringlett = { id: 73, name: 'Pringlett', researcherName: 'Pringlett', industry: 'Potato', modifier: 'Discount', rarity: 'Epic', unlockedAtRank: 3 };
Researchers.MonsieurFrites = { id: 74, name: 'MonsieurFrites', researcherName: 'Monsieur Frites', industry: 'Potato', modifier: 'Bonus', rarity: 'Epic', unlockedAtRank: 3 };
Researchers.JarJMusk = { id: 75, name: 'JarJMusk', researcherName: 'Jar J. Musk', industry: 'Land', modifier: 'Discount', rarity: 'Epic', unlockedAtRank: 3 };
Researchers.HeckAxe = { id: 76, name: 'HeckAxe', researcherName: 'Heck Axe', industry: 'Land', modifier: 'Bonus', rarity: 'Epic', unlockedAtRank: 4 };
Researchers.MinecraftThrain = { id: 77, name: 'MinecraftThrain', researcherName: 'Minecraft Thrain', industry: 'Ore', modifier: 'Discount', rarity: 'Epic', unlockedAtRank: 9 };
Researchers.BigBlender = { id: 78, name: 'BigBlender', researcherName: 'Big Blender', industry: 'Ore', modifier: 'Bonus', rarity: 'Epic', unlockedAtRank: 14 };
Researchers.Megacop = { id: 79, name: 'Megacop', researcherName: 'Megacop', industry: 'Military', modifier: 'Discount', rarity: 'Epic', unlockedAtRank: 13 };
Researchers.AnnMunition = { id: 80, name: 'AnnMunition', researcherName: 'Ann Munition', industry: 'Military', modifier: 'Bonus', rarity: 'Epic', unlockedAtRank: 17 };
Researchers.NurseWretched = { id: 81, name: 'NurseWretched', researcherName: 'Nurse Wretched', industry: 'Placebo', modifier: 'Discount', rarity: 'Epic', unlockedAtRank: 19 };
Researchers.HannibalTavius = { id: 82, name: 'HannibalTavius', researcherName: 'Hannibal Tavius', industry: 'Placebo', modifier: 'Bonus', rarity: 'Epic', unlockedAtRank: 22 };
// Supremes
Researchers.EarthWyrmJym = { id: 83, name: 'EarthWyrmJym', researcherName: 'Earth Wyrm Jym', industry: 'All', modifier: 'Trade', rarity: 'Supreme', unlockedAtRank: 3 };
Researchers.RatchemusPrime = { id: 84, name: 'RatchemusPrime', researcherName: 'Ratchemus Prime', industry: 'All', modifier: 'Power', rarity: 'Supreme', unlockedAtRank: 3 };
Researchers.DrShortstack = { id: 85, name: 'DrShortstack', researcherName: 'Dr. Shortstack', industry: 'All', modifier: 'Chance', rarity: 'Supreme', unlockedAtRank: 6 };
Researchers.MegaTron = { id: 86, name: 'MegaTron', researcherName: 'Mega Tron', industry: 'All', modifier: 'Discount', rarity: 'Supreme', unlockedAtRank: 15 };
Researchers.AlfStark = { id: 87, name: 'AlfStark', researcherName: 'Alf Stark', industry: 'All', modifier: 'Bonus', rarity: 'Supreme', unlockedAtRank: 26 };


/***/ }),

/***/ 8823:
/*!*********************************************!*\
  !*** ./src/app/service/analysis.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisService": () => (/* binding */ AnalysisService)
/* harmony export */ });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decimal.js */ 8992);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/researcher.state */ 8044);
/* harmony import */ var _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/human-readable-numbers */ 2977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




const ZERO = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(0);
const ONE = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1);
const TWO = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2);
const FOUR = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(4);
const NINE = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(9);
const _5K = new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(5000);
class AnalysisService {
    analyze(researcher, researcherStateMap) {
        var _a;
        const upgradeCost = AnalysisService.getUpgradeCost(researcher, researcherStateMap);
        const upgradeCardCost = AnalysisService.getUpgradeCardCost(researcher, researcherStateMap);
        const totalUpgradeCost = (_a = upgradeCost === null || upgradeCost === void 0 ? void 0 : upgradeCost.plus(upgradeCardCost)) !== null && _a !== void 0 ? _a : ZERO;
        const canUpgrade = AnalysisService.canUpgrade(researcher, researcherStateMap);
        const boost = canUpgrade
            ? this.getBoost(researcher, researcherStateMap)
            : ZERO;
        const boostPer1kScience = AnalysisService.getBoostPer1kScience(researcher, totalUpgradeCost, boost);
        return {
            boost: boost.toString(),
            boostPer1kScience: boostPer1kScience.toString(),
            canUpgrade,
            upgradeCardCost: upgradeCardCost.toString(),
            upgradeCost: upgradeCost.toString()
        };
    }
    static getBoostPer1kScience(researcher, totalUpgradeCost, boost) {
        if (totalUpgradeCost.equals(0)) {
            return ZERO;
        }
        if (researcher.modifier === 'Trade') {
            return boost.minus(1).div(totalUpgradeCost.div(1000)).plus(1);
        }
        return boost.div(totalUpgradeCost.div(1000));
    }
    getIndustryPower(industry, researcherStateMap) {
        var _a, _b;
        if (industry === 'All')
            return ZERO;
        const researchers = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.filter((r) => r.industry === industry || r.industry === 'All');
        let power = ONE;
        for (let researcher of researchers) {
            const lvl = (_b = (_a = researcherStateMap[researcher.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0;
            if (researcher.modifier === 'Speed') {
                power = power.times(TWO.pow(lvl));
            }
            else if (researcher.modifier === 'Power') {
                power = power.times(TWO.pow(lvl).pow(this.getCommonCountForIndustry(researcher.industry, researcherStateMap)));
            }
            else if (researcher.modifier === 'SinglePower') {
                power = power.times(NINE.times(TWO.pow(Math.max(lvl - 1, 0))));
            }
        }
        const discountFactor = this.getDiscountFactorForIndustry(industry, researcherStateMap);
        const chance = this.getChanceForIndustry(industry, researcherStateMap);
        const bonusMultiplier = this.getBonusMultiplierForIndustry(industry, researcherStateMap);
        power = power.times(ONE.minus(chance).plus(chance.times(bonusMultiplier)));
        power = power.times(discountFactor);
        return power;
    }
    getBoost(researcher, researcherStateMap) {
        var _a, _b;
        switch (researcher.modifier) {
            case 'Speed':
                return ONE;
            case 'Power':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(this.getCommonCountForIndustry(researcher.industry, researcherStateMap));
            case 'Trade':
                return this.getTradeBoost(researcher, researcherStateMap);
            case 'Chance':
                return this.getChanceBoost(researcher, researcherStateMap);
            case 'Discount':
                // Supreme: 5*log2(10), Epic: log2(10)
                return researcher.rarity === 'Supreme'
                    ? new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('16.6096404744')
                    : new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('3.32192809489');
            case 'Bonus':
                return TWO.times(this.getCommonCountForIndustry(researcher.industry, researcherStateMap));
            case 'SinglePower':
                return ((_b = (_a = researcherStateMap[researcher.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0) == 0
                    ? NINE.log(TWO)
                    : ONE;
        }
    }
    getTradeBoost(researcher, researcherStateMap) {
        var _a, _b, _c;
        let supremeTradeLvl = (_c = (_b = researcherStateMap[(_a = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.find((r) => r.rarity === 'Supreme' && r.modifier === 'Trade')) === null || _a === void 0 ? void 0 : _a.name]) === null || _b === void 0 ? void 0 : _b.currentLevel) !== null && _c !== void 0 ? _c : 0;
        const industries = [
            'Potato',
            'Land',
            'Ore',
            'Military',
            'Placebo'
        ];
        const currentTradePower = industries
            .map((industry) => {
            var _a, _b, _c;
            const researcherState = researcherStateMap[(_a = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.find((r) => r.modifier === 'Trade' && r.industry === industry)) === null || _a === void 0 ? void 0 : _a.name];
            const lvl = (_b = researcherState === null || researcherState === void 0 ? void 0 : researcherState.currentLevel) !== null && _b !== void 0 ? _b : 0;
            const industryTradeExponent = this.getIndustryPower(industry, researcherStateMap).log(_5K);
            const tradeCount = (_c = AnalysisService.getTradeCount(researcherState === null || researcherState === void 0 ? void 0 : researcherState.nextTradeCost)) !== null && _c !== void 0 ? _c : industryTradeExponent;
            return TWO.pow(lvl)
                .times(TWO.pow(supremeTradeLvl))
                .times(tradeCount)
                .times(AnalysisService.getIndustryTradeMultiplier(industry));
        })
            .reduce((acc, power) => acc.plus(power), ZERO);
        if (researcher.rarity === 'Supreme')
            supremeTradeLvl++;
        const boostedTradePower = industries
            .map((industry) => {
            var _a, _b, _c;
            const researcherState = researcherStateMap[(_a = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.find((r) => r.modifier === 'Trade' && r.industry === industry)) === null || _a === void 0 ? void 0 : _a.name];
            let lvl = (_b = researcherState === null || researcherState === void 0 ? void 0 : researcherState.currentLevel) !== null && _b !== void 0 ? _b : 0;
            if (researcher.industry === industry)
                lvl++;
            const industryTradeExponent = this.getIndustryPower(industry, researcherStateMap).log(_5K);
            const tradeCount = (_c = AnalysisService.getTradeCount(researcherState === null || researcherState === void 0 ? void 0 : researcherState.nextTradeCost)) !== null && _c !== void 0 ? _c : industryTradeExponent;
            return TWO.pow(lvl)
                .times(TWO.pow(supremeTradeLvl))
                .times(tradeCount)
                .times(AnalysisService.getIndustryTradeMultiplier(industry));
        })
            .reduce((acc, power) => acc.plus(power), ZERO);
        return boostedTradePower.div(currentTradePower);
    }
    getCommonCountForIndustry(industry, researcherStateMap) {
        return _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.filter((r) => (r.industry === industry || industry == 'All') &&
            r.rarity === 'Common')
            .map((r) => { var _a, _b; return (_b = (_a = researcherStateMap[r.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0; })
            .filter((lvl) => lvl > 0).length;
    }
    getChanceBoost(researcher, researcherStateMap) {
        const chance = this.getChanceForIndustry(researcher.industry, researcherStateMap);
        const nextChance = this.getChanceForIndustry(researcher.industry, researcherStateMap, true);
        const multiplier = this.getBonusMultiplierForIndustry(researcher.industry, researcherStateMap);
        const commonCount = this.getCommonCountForIndustry(researcher.industry, researcherStateMap);
        const power = ONE.minus(chance).plus(chance.times(multiplier));
        const nextPower = ONE.minus(chance).plus(nextChance.times(multiplier));
        const boost = nextPower.div(power).pow(commonCount);
        return boost.log(TWO);
    }
    getBonusMultiplierForIndustry(industry, researcherStateMap) {
        return _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.filter((r) => r.modifier == 'Bonus' &&
            (r.industry == industry || r.industry == 'All'))
            .map((r) => { var _a, _b; return (_b = (_a = researcherStateMap[r.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0; })
            .filter((lvl) => lvl > 0)
            .reduce((acc, lvl) => acc.times(FOUR.pow(lvl)), TWO);
    }
    getDiscountFactorForIndustry(industry, researcherStateMap) {
        return _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.filter((r) => r.modifier === 'Discount' &&
            (r.industry === industry || r.industry === 'All'))
            .map((r) => { var _a, _b; return (_b = (_a = researcherStateMap[r.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0; })
            .reduce((acc, lvl) => acc.times(AnalysisService.getDiscountFactorFromLvl(lvl)), ONE);
    }
    static getDiscountFactorFromLvl(lvl) {
        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(10).pow(lvl);
    }
    getChanceForIndustry(industry, researcherStateMap, simulatePlusOneLvl = false) {
        return _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_1__.Researchers.allResearchers.filter((r) => r.modifier === 'Chance' &&
            (r.industry === industry || r.industry === 'All'))
            .map((r) => {
            var _a, _b;
            let lvl = (_b = (_a = researcherStateMap[r.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0;
            if (simulatePlusOneLvl && (r.industry !== 'All' || industry == 'All')) {
                lvl++;
            }
            return AnalysisService.getChanceFromLvl(lvl, r.rarity === 'Supreme');
        })
            .reduce((acc, chance) => acc.plus(chance), new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.01'));
    }
    static getChanceFromLvl(chanceLvl, isSupreme) {
        if (isSupreme) {
            switch (chanceLvl) {
                case 1:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.08');
                case 2:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.13');
                case 3:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.19');
                case 4:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.26');
                case 5:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.34');
                default:
                    return ZERO;
            }
        }
        else {
            switch (chanceLvl) {
                case 1:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.05');
                case 2:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.0725');
                case 3:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.1');
                case 4:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.1325');
                case 5:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.17');
                case 6:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.2125');
                case 7:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.26');
                case 8:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.3125');
                case 9:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.37');
                case 10:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.4325');
                case 11:
                    return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal('0.5');
                default:
                    return ZERO;
            }
        }
    }
    static getUpgradeCost(researcher, researcherStateMap) {
        var _a, _b;
        const lvl = (_b = (_a = researcherStateMap[researcher.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0;
        switch (researcher.rarity) {
            case 'Common':
                switch (lvl) {
                    case 0:
                        return ZERO;
                    case 1:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50);
                    case 2:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100);
                    case 3:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(200);
                    case 4:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(300);
                    case 5:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(400);
                    case 6:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1000);
                    case 7:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2000);
                    case 8:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(4000);
                    case 9:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(8000);
                    case 10:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(20000);
                    case 11:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50000);
                    case 12:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100000);
                    default:
                        return ZERO;
                }
            case 'Rare':
                switch (lvl) {
                    case 0:
                        return ZERO;
                    case 1:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100);
                    case 2:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(200);
                    case 3:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(400);
                    case 4:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1000);
                    case 5:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2000);
                    case 6:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(4000);
                    case 7:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(8000);
                    case 8:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(20000);
                    case 9:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50000);
                    case 10:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100000);
                    default:
                        return ZERO;
                }
            case 'Epic':
                switch (lvl) {
                    case 0:
                        return ZERO;
                    case 1:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(400);
                    case 2:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2000);
                    case 3:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(4000);
                    case 4:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(8000);
                    case 5:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(20000);
                    case 6:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50000);
                    case 7:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100000);
                    default:
                        return ZERO;
                }
            case 'Supreme':
                switch (lvl) {
                    case 0:
                        return ZERO;
                    case 1:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(5000);
                    case 2:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(20000);
                    case 3:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50000);
                    case 4:
                        return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100000);
                    default:
                        return ZERO;
                }
            default:
                return ZERO;
        }
    }
    static getRequiredCardsForUpgrade(researcher, researcherStateMap) {
        var _a, _b;
        const lvl = (_b = (_a = researcherStateMap[researcher.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0;
        if (!this.canUpgrade(researcher, researcherStateMap)) {
            return ZERO;
        }
        switch (lvl) {
            case 0:
                return ONE;
            case 1:
                return TWO;
            case 2:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(5);
            case 3:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(10);
            case 4:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(20);
            case 5:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(50);
            case 6:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100);
            case 7:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(200);
            case 8:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(400);
            case 9:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(800);
            case 10:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1000);
            case 11:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2000);
            case 12:
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(5000);
            default:
                return ZERO;
        }
    }
    static getUpgradeCardCost(researcher, researcherStateMap) {
        const availableCards = researcherStateMap[researcher.name].availableCards;
        if (availableCards != null) {
            const requiredCards = AnalysisService.getRequiredCardsForUpgrade(researcher, researcherStateMap);
            const missingCards = requiredCards.lte(availableCards)
                ? ZERO
                : requiredCards.minus(availableCards);
            return missingCards.times(AnalysisService.getCardCosts(researcher));
        }
        else {
            return ZERO;
        }
    }
    static getCardCosts(researcher) {
        switch (researcher.rarity) {
            case 'Common':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(10);
            case 'Rare':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(100);
            case 'Epic':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1000);
            case 'Supreme':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(40000);
        }
    }
    static canUpgrade(researcher, researcherStateMap) {
        var _a, _b;
        const lvl = (_b = (_a = researcherStateMap[researcher.name]) === null || _a === void 0 ? void 0 : _a.currentLevel) !== null && _b !== void 0 ? _b : 0;
        switch (researcher.rarity) {
            case 'Common':
                return lvl < 13;
            case 'Rare':
                return lvl < 11;
            case 'Epic':
                return lvl < 8;
            case 'Supreme':
                return lvl < 5;
        }
    }
    static getIndustryTradeMultiplier(industry) {
        switch (industry) {
            case 'Potato':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1);
            case 'Land':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(2);
            case 'Ore':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(3);
            case 'Military':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(4);
            case 'Placebo':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(5);
            case 'All':
                return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(1 + 2 + 3 + 4 + 5);
        }
    }
    static getTradeCount(nextTradeCost) {
        if (nextTradeCost === '5000') {
            return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(0);
        }
        const num = nextTradeCost === null || nextTradeCost === void 0 ? void 0 : nextTradeCost.match(/(?<num>[0-9]*)(?<unit>[a-z]*)/i).groups.num;
        const unit = nextTradeCost === null || nextTradeCost === void 0 ? void 0 : nextTradeCost.match(/(?<num>[0-9]*)(?<unit>[a-z]*)/i).groups.unit;
        const index = _util_human_readable_numbers__WEBPACK_IMPORTED_MODULE_2__.unitsMapping.indexOf(unit);
        if ((!num || num === '5') && index > -1) {
            return new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(Math.max(index - 1, 0));
        }
        return null;
    }
}
AnalysisService.ɵfac = function AnalysisService_Factory(t) { return new (t || AnalysisService)(); };
AnalysisService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AnalysisService, factory: AnalysisService.ɵfac });


/***/ }),

/***/ 6686:
/*!*****************************!*\
  !*** ./src/app/util/bem.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEM": () => (/* binding */ BEM)
/* harmony export */ });
/**
 * BEM - Block Element Modifier helper function
 */
function BEM(blockName) {
    return (elementName, ...modifier) => {
        let styleClasses = blockName;
        if (elementName) {
            styleClasses += '__' + elementName;
        }
        if ((modifier === null || modifier === void 0 ? void 0 : modifier.length) > 0) {
            const base = styleClasses;
            styleClasses +=
                ' ' + modifier.map((modifier) => base + '--' + modifier).join(' ');
        }
        return styleClasses;
    };
}


/***/ }),

/***/ 9249:
/*!******************************************!*\
  !*** ./src/app/util/compression-util.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compressState": () => (/* binding */ compressState),
/* harmony export */   "decompressState": () => (/* binding */ decompressState)
/* harmony export */ });
/* harmony import */ var _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducer/researcher.state */ 8044);
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lzutf8 */ 1457);
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lzutf8__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _human_readable_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./human-readable-numbers */ 2977);



// TODO remove v0 encoding after a couple weeks
function compressState(researcherStateMap) {
    return shift(encode_v1(researcherStateMap));
}
function decompressState(compressedState) {
    if (isBase64Encoded(compressedState)) {
        const decompressedString = stringDecompress(compressedState);
        if (matches_v0_encodingPattern(decompressedString)) {
            return decode_v0(decompressedString);
        }
    }
    return decode_v1(unshift(compressedState));
}
function encode_v0(state) {
    const json = JSON.stringify(state);
    let encodedJson = json
        .replace(/,"availableCards":null/g, '-1')
        .replace(/,"availableCards":/g, '-2')
        .replace(/":\{"currentLevel":/g, '-3')
        .replace(/,"nextTradeCost":null/g, '-4')
        .replace(/,"nextTradeCost":"/g, '-5')
        .replace(/"},"/g, '-6')
        .replace(/},"/g, '-7')
        .replace(/\{"/g, '-8')
        .replace(/}}/g, '-9');
    _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.forEach((r, i) => {
        encodedJson = encodedJson.replace(r.name, `_${r.id}`);
    });
    return encodedJson;
}
function isBase64Encoded(input) {
    return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(input);
}
function matches_v0_encodingPattern(input) {
    return /((_[0-9]+)|(-[1-9]))+/.test(input);
}
function decode_v0(encodedJson) {
    let decodedJson = encodedJson
        .replace(/-1/g, ',"availableCards":null')
        .replace(/-2/g, ',"availableCards":')
        .replace(/-3/g, '":{"currentLevel":')
        .replace(/-4/g, ',"nextTradeCost":null')
        .replace(/-5/g, ',"nextTradeCost":"')
        .replace(/-6/g, '"},"')
        .replace(/-7/g, '},"')
        .replace(/-8/g, '{"')
        .replace(/-9/g, '}}');
    _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.forEach((r) => {
        decodedJson = decodedJson.replace(`_${r.id}`, r.name);
    });
    return JSON.parse(decodedJson);
}
function stringCompress(value) {
    return (0,lzutf8__WEBPACK_IMPORTED_MODULE_1__.encodeBase64)((0,lzutf8__WEBPACK_IMPORTED_MODULE_1__.compress)(value));
}
function stringDecompress(value) {
    return (0,lzutf8__WEBPACK_IMPORTED_MODULE_1__.decompress)((0,lzutf8__WEBPACK_IMPORTED_MODULE_1__.decodeBase64)(value));
}
function encode_v1(state) {
    let encodedJson = '';
    Object.keys(state).forEach((name) => {
        let part = '';
        const researcherState = state[name];
        const researcher = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.find((r) => r.name === name);
        part += toBase62(researcher.id).padStart(2, '0');
        part += toBase62(researcherState.currentLevel);
        if (researcher.modifier === 'Trade' && researcher.rarity !== 'Supreme') {
            if (researcherState.nextTradeCost == null) {
                part += '00';
            }
            else {
                part += toBase62(_human_readable_numbers__WEBPACK_IMPORTED_MODULE_2__.unitsMapping.indexOf(researcherState.nextTradeCost) + 1).padStart(2, '0');
            }
        }
        if (researcherState.availableCards != null) {
            part += toBase62(researcherState.availableCards);
        }
        const size = toBase62(part.length + 1);
        encodedJson += size + part;
    });
    return encodedJson;
}
function decode_v1(encodedJson) {
    let remaining = encodedJson;
    const researcherStateMap = {};
    while (remaining.length > 0) {
        const size = toBase10(remaining.substr(0, 1));
        const state = {
            currentLevel: 0,
            availableCards: null,
            nextTradeCost: null
        };
        let part = remaining.substr(1, size - 1);
        remaining = remaining.substr(size);
        const id = toBase10(part.substr(0, 2));
        const researcher = _reducer_researcher_state__WEBPACK_IMPORTED_MODULE_0__.Researchers.allResearchers.find((r) => r.id === id);
        part = part.substr(2);
        const lvl = toBase10(part.substr(0, 1));
        part = part.substr(1);
        state.currentLevel = lvl;
        if (researcher.modifier === 'Trade' && researcher.rarity !== 'Supreme') {
            const tradecost = part.substr(0, 2);
            part = part.substr(2);
            if (tradecost !== '00') {
                state.nextTradeCost = _human_readable_numbers__WEBPACK_IMPORTED_MODULE_2__.unitsMapping[toBase10(tradecost) - 1];
            }
        }
        if (part.length > 0) {
            const availableCards = toBase10(part);
            state.availableCards = availableCards;
        }
        researcherStateMap[researcher.name] = state;
    }
    return researcherStateMap;
}
function toBase10(numString) {
    let power = 1;
    let num = 0;
    for (let i = numString.length - 1; i >= 0; i--) {
        const char = numString.charAt(i);
        if (base62Symbols.indexOf(char) === -1) {
            return -1;
        }
        num += base62Symbols.indexOf(char) * power;
        power = power * 62;
    }
    return num;
}
function toBase62(num) {
    if (num === 0)
        return '0';
    let s = '';
    while (num > 0) {
        s = base62Symbols[num % 62] + s;
        num = Math.floor(num / 62);
    }
    return s;
}
const base62Symbols = createBase62Symbols();
function createBase62Symbols() {
    const chars = [];
    for (let i = 0; i <= 9; i++) {
        chars.push(i.toString());
    }
    for (let i = 97; i <= 122; i++) {
        chars.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 90; i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars;
}
function shift(input) {
    let res = '';
    input.split('').forEach((c, i) => {
        const j = base62Symbols.indexOf(c);
        const delta = 47 * (i + 4) + ((i + 4) % 39);
        res += base62Symbols[(j + delta) % 62];
    });
    return res;
}
function unshift(input) {
    let res = '';
    input.split('').forEach((c, i) => {
        const j = base62Symbols.indexOf(c);
        const delta = 47 * (i + 4) + ((i + 4) % 39);
        let y = (j - delta) % 62;
        if (y === -0) {
            y = 0;
        }
        else if (y < 0) {
            y += 62;
        }
        res += base62Symbols[y];
    });
    return res;
}


/***/ }),

/***/ 2977:
/*!************************************************!*\
  !*** ./src/app/util/human-readable-numbers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHumanReadable": () => (/* binding */ toHumanReadable),
/* harmony export */   "unitsMapping": () => (/* binding */ unitsMapping)
/* harmony export */ });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decimal.js */ 8992);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);

function toHumanReadable(decimal) {
    const powerOfThree = Math.max(Math.floor((decimal.precision(true) - decimal.decimalPlaces() - 1) / 3), 0);
    const num = decimal
        .div(new decimal_js__WEBPACK_IMPORTED_MODULE_0__.Decimal(10).pow(powerOfThree * 3))
        .toDecimalPlaces(3);
    const suffix = unitsMapping[powerOfThree];
    return num.toString() + suffix;
}
const unitsMapping = getUnitsMapping();
function getUnitsMapping() {
    const units = ['', 'K', 'M', 'B', 'T'];
    const abc = [];
    for (let charCode = 65; charCode <= 90; charCode++) {
        abc.push(String.fromCharCode(charCode));
    }
    for (let repeat = 2; repeat <= 4; repeat++) {
        for (let char of abc) {
            units.push(''.padEnd(repeat, char));
        }
    }
    return units;
}


/***/ }),

/***/ 4194:
/*!*****************************!*\
  !*** ./src/app/util/rem.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REM": () => (/* binding */ REM)
/* harmony export */ });
const REM_PX_RATIO = 16;
function REM() {
    return (px) => px / REM_PX_RATIO + 'rem';
}


/***/ }),

/***/ 2340:
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
    production: false,
    iconPath: '/assets/icons/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 2361:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map