System.register(['angular2/core', 'ng2-bootstrap/components/alert', 'ag-grid-ng2/main', 'angular2-modal', './modal/custom-modal.component', 'ag-grid-enterprise/main'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, alert_1, main_1, angular2_modal_1, custom_modal_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (custom_modal_component_1_1) {
                custom_modal_component_1 = custom_modal_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(el, modal, injector) {
                    this.el = el;
                    this.modal = modal;
                    this.injector = injector;
                    this.columnDefs = [
                        { headerName: "Make", field: "make" },
                        { headerName: "Model", field: "model" }
                    ];
                    this.rowData = [];
                    this.gridOptions = { rowHeight: 100 };
                    this.title = "Init...";
                    this.title = el.nativeElement.getAttribute('title');
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.openDialog = function (type) {
                    var _this = this;
                    //context
                    var resolvedProviders = core_1.Injector.resolve([
                        core_1.provide(angular2_modal_1.ICustomModal, { useValue: new angular2_modal_1.YesNoModalContent('Simple Large modal', 'Press ESC or click OK / outside area to close.', false) })
                    ]);
                    var dialog = this.modal.open(angular2_modal_1.YesNoModal, resolvedProviders, new angular2_modal_1.ModalConfig("lg", true, 27));
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            _this.lastModalResult = result;
                        }, function () { return _this.lastModalResult = 'Rejected!'; });
                    });
                };
                AppComponent.prototype.openCustomModal = function () {
                    var _this = this;
                    //context
                    var resolvedProviders = core_1.Injector.resolve([core_1.provide(angular2_modal_1.ICustomModal, { useValue: new custom_modal_component_1.CustomModalComponentData() })]);
                    var dialog = this.modal.open(custom_modal_component_1.CustomModalComponent, resolvedProviders, new angular2_modal_1.ModalConfig('lg', true, 27));
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            _this.lastModalResult = result;
                        }, function () { return _this.lastModalResult = 'Rejected!'; });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        //templateUrl: './app/app.component.html',
                        selector: 'my-app',
                        directives: [alert_1.Alert, main_1.AgGridNg2],
                        providers: [angular2_modal_1.Modal],
                        styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/ag-grid/dist/styles/ag-grid.css', 'node_modules/ag-grid/dist/styles/theme-fresh.css'],
                        styles: ["\n    "],
                        template: "\n      <paper-toolbar>\n        <span class=\"title\">{{title}}</span>\n        <paper-icon-button icon=\"add\">+</paper-icon-button>\n      </paper-toolbar>\n      <div>\n      <ag-grid-ng2 class=\"ag-fresh\"\n        style=\"height: 300px;\"\n        [gridOptions]=\"gridOptions\"\n        [columnDefs]=\"columnDefs\"\n        [rowData] = \"rowData\">\n      </ag-grid-ng2>\n      </div>\n      <alert dismissOnTimeout=\"3000\">This alert will dismiss in 3s</alert>\n      <paper-button raised (click)=\"openDialog('large')\">\n        <iron-icon icon=\"add-box\"></iron-icon>\n        Click\n      </paper-button>\n      <paper-button raised (click)=\"openCustomModal()\">\n        <iron-icon icon=\"add-box\"></iron-icon>\n        Click to Open Custom GUI\n      </paper-button>\n      <div *ngIf=\"lastModalResult\">\n        {{lastModalResult}}\n      </div>\n    ",
                        encapsulation: core_1.ViewEncapsulation.Native
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, angular2_modal_1.Modal, core_1.Injector])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map