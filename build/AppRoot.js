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
const native_1 = require("mobx-react/native"); // Note 'native'
const React = require("react");
const RootNavigator_1 = require("./navigators/RootNavigator");
const NavigationStore_1 = require("./stores/NavigationStore");
const JSONPrettify_1 = require("./utils/JSONPrettify");
// 'import' non-typescript modules
const config = require('../config');
if (__DEV__ && config.MOBX_SPY_LOGGING) {
    mobx.spy((spyReport) => {
        if (spyReport.type) {
            if (!!console.groupCollapsed)
                console.groupCollapsed(`%cMOBX SPY: ${spyReport.type}`, 'color: red; font-weight: 900;');
            console.log('%cMobx Spy Repot: ' + spyReport.type + ': rawSpyData: ' +
                JSONPrettify_1.default(spyReport), 'color: red; font-weight: 900;');
            if (!!console.groupCollapsed)
                console.groupEnd();
        }
    });
}
let AppRoot = class AppRoot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.store = new NavigationStore_1.default();
        if (__DEV__ && config.NAV_STORE_LOGGING) {
            mobx.autorun(() => {
                console.groupCollapsed('NAV STORE');
                console.log('%cAppRoot autorun this.store.navigationState: ' +
                    JSONPrettify_1.default(this.store.navigationState), 'color: darkgreen; font-weight: 900;');
                console.log('%cAppRoot autorun this.store.navigationState.screenProps: ' +
                    JSONPrettify_1.default(this.store.screenProps), 'color: darkgreen; font-weight: 900;');
                if (!!console.groupCollapsed)
                    console.groupEnd();
            });
        }
    }
    render() {
        const navigationProp = this.store.storeAddNavigationHelpers();
        if (__DEV__ && config.TOPLEVEL_RENDER_LOGGING) {
            if (!!console.groupCollapsed)
                console.groupCollapsed('NAV RENDER');
            console.log('%cAppRoot render store' +
                JSONPrettify_1.default(this.store), 'color: blue; font-weight: 900;');
            console.log('%cAppRoot render navigationProp' +
                JSONPrettify_1.default(navigationProp), 'color: blue; font-weight: 900;');
            if (!!console.groupCollapsed)
                console.groupEnd();
        }
        return (<RootNavigator_1.default navigation={navigationProp} screenProps={this.store.screenProps}/>);
    }
};
AppRoot = __decorate([
    native_1.observer,
    __metadata("design:paramtypes", [Object, Object])
], AppRoot);
exports.default = AppRoot;
