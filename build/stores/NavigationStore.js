"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx = require("mobx");
const react_navigation_1 = require("react-navigation");
const RootNavigator_1 = require("../navigators/RootNavigator");
const JSONPrettify_1 = require("../utils/JSONPrettify");
// 'import' non-typescript modules
const config = require('../../config');
class NavigationStore {
    constructor() {
        this.navigationState = {
            index: 0,
            routes: [{
                    key: 'Login',
                    routeName: 'Login',
                    params: { title: 'Initialization' }
                }]
        };
        this.dispatch = (navigationAction) => {
            if (__DEV__ && config.NAV_STORE_DISPATCH_LOGGING) {
                if (!!console.groupCollapsed)
                    console.group('STORE DISPATCH ACTION');
                console.log('NavigationStore dispatch navigationAction: ' + JSONPrettify_1.default(navigationAction));
            }
            const previousNavState = this.navigationState /* : undefined */;
            this.navigationState = RootNavigator_1.default
                .router
                .getStateForAction(navigationAction, previousNavState);
            if (__DEV__ && config.NAV_STORE_DISPATCH_LOGGING) {
                // console.log('NavigationStore dispatch previousNavState: ' + JSONPrettify(previousNavState));
                console.log('NavigationStore dispatch newNavState: ' + JSONPrettify_1.default(this.navigationState));
                if (!!console.groupCollapsed)
                    console.groupEnd();
            }
            if (this.navigationState.routes) {
                this.screenProps = [{ key: this.navigationState.routes[this.navigationState.routes.length - 1].key }];
            }
            return !!this.navigationState;
        };
    }
    storeAddNavigationHelpers() {
        const navigationProps /* : NavigationProp<NavigationState, NavigationAction> */ = {
            state: this.navigationState,
            dispatch: this.dispatch
        };
        return react_navigation_1.addNavigationHelpers(navigationProps);
    }
}
__decorate([
    mobx.observable.ref,
    __metadata("design:type", Array)
], NavigationStore.prototype, "screenProps", void 0);
__decorate([
    mobx.observable.ref,
    __metadata("design:type", Object)
], NavigationStore.prototype, "navigationState", void 0);
__decorate([
    mobx.action,
    __metadata("design:type", Object)
], NavigationStore.prototype, "dispatch", void 0);
exports.default = NavigationStore;
