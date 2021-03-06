"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var stepone_component_1 = require("./stepone/stepone.component");
var steptwo_component_1 = require("./steptwo/steptwo.component");
var messages_component_1 = require("./messages/messages.component");
var app_routing_module_1 = require(".//app-routing.module");
var wizardstepone_component_1 = require("./wizardstepone/wizardstepone.component");
var wizardsteptwo_component_1 = require("./wizardsteptwo/wizardsteptwo.component");
var wizardstepthree_component_1 = require("./wizardstepthree/wizardstepthree.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                stepone_component_1.SteponeComponent,
                steptwo_component_1.SteptwoComponent,
                messages_component_1.MessagesComponent,
                wizardstepone_component_1.WizardsteponeComponent,
                wizardsteptwo_component_1.WizardsteptwoComponent,
                wizardstepthree_component_1.WizardstepthreeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map