System.register(['angular2/core', 'ng2-bootstrap/components/alert', 'angular2-modal', './modal/custom-modal.component'], function(exports_1, context_1) {
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
    var core_1, alert_1, angular2_modal_1, custom_modal_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (custom_modal_component_1_1) {
                custom_modal_component_1 = custom_modal_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(el, modal, injector) {
                    this.el = el;
                    this.modal = modal;
                    this.injector = injector;
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
                        directives: [alert_1.Alert],
                        inputs: ['title'],
                        providers: [angular2_modal_1.Modal],
                        template: "\n      <h2>{{title}}</h2>\n      <alert dismissOnTimeout=\"300000\">This alert will dismiss in 3s</alert>\n      <button (click)=\"openDialog('large')\">Click</button>\n      <div *ngIf=\"lastModalResult\">\n        {{lastModalResult}}\n      </div>\n      <button (click)=\"openCustomModal()\">Click to Open Custom GUI</button>\n    "
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