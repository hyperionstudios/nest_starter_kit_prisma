'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest_starter_template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' : 'data-target="#xs-controllers-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' :
                                            'id="xs-controllers-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' }>
                                            <li class="link">
                                                <a href="controllers/AccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' : 'data-target="#xs-injectables-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' :
                                        'id="xs-injectables-links-module-AccountModule-f1f685866716fc462a8e0550b3d3da99d3e1cce7113267a37cb4d8008f52c65dc1ce70783fe98085451ba2bf0c61b0ca51e6b078efcf0e62a3a6be61067d26c1"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' : 'data-target="#xs-controllers-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' :
                                            'id="xs-controllers-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' : 'data-target="#xs-injectables-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' :
                                        'id="xs-injectables-links-module-AppModule-d54fc35beb11cede6ee310dad63dd31893f51d72776d02b566a2e9e912ddb8fa1f3556e5f8a93fd3ec9493b307a391381b02e075056bb1c86986820fa091b446"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' : 'data-target="#xs-controllers-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' :
                                            'id="xs-controllers-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' : 'data-target="#xs-injectables-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' :
                                        'id="xs-injectables-links-module-AuthModule-a4fb866b3175a95d597e2a0ed207ad142d98f24b44c470d78f61e856882fd6a77b10998708e693f4617eae66e663fdb8694433ac939e1fd0beafa34176de5994"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-ee6573d0fb4e98b5a3948e564f4cf367e646fa5e22940fec273c961bcfab4a92316e872722412fc1ccc808e00f0ee9cf3372da32cef1cfce170bae80712db881"' : 'data-target="#xs-injectables-links-module-PrismaModule-ee6573d0fb4e98b5a3948e564f4cf367e646fa5e22940fec273c961bcfab4a92316e872722412fc1ccc808e00f0ee9cf3372da32cef1cfce170bae80712db881"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-ee6573d0fb4e98b5a3948e564f4cf367e646fa5e22940fec273c961bcfab4a92316e872722412fc1ccc808e00f0ee9cf3372da32cef1cfce170bae80712db881"' :
                                        'id="xs-injectables-links-module-PrismaModule-ee6573d0fb4e98b5a3948e564f4cf367e646fa5e22940fec273c961bcfab4a92316e872722412fc1ccc808e00f0ee9cf3372da32cef1cfce170bae80712db881"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountController.html" data-type="entity-link" >AccountController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AffectedRows.html" data-type="entity-link" >AffectedRows</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateLogin.html" data-type="entity-link" >AggregateLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateUser.html" data-type="entity-link" >AggregateUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectLoginDto.html" data-type="entity-link" >ConnectLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectLoginDto-1.html" data-type="entity-link" >ConnectLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectUserDto.html" data-type="entity-link" >ConnectUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectUserDto-1.html" data-type="entity-link" >ConnectUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLoginDto.html" data-type="entity-link" >CreateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLoginDto-1.html" data-type="entity-link" >CreateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyLoginArgs.html" data-type="entity-link" >CreateManyLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyUserArgs.html" data-type="entity-link" >CreateManyUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneLoginArgs.html" data-type="entity-link" >CreateOneLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneUserArgs.html" data-type="entity-link" >CreateOneUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto-1.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeFieldUpdateOperationsInput.html" data-type="entity-link" >DateTimeFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeFilter.html" data-type="entity-link" >DateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeWithAggregatesFilter.html" data-type="entity-link" >DateTimeWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyLoginArgs.html" data-type="entity-link" >DeleteManyLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyUserArgs.html" data-type="entity-link" >DeleteManyUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneLoginArgs.html" data-type="entity-link" >DeleteOneLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneUserArgs.html" data-type="entity-link" >DeleteOneUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnumLoginStatusFieldUpdateOperationsInput.html" data-type="entity-link" >EnumLoginStatusFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnumLoginStatusFilter.html" data-type="entity-link" >EnumLoginStatusFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnumLoginStatusWithAggregatesFilter.html" data-type="entity-link" >EnumLoginStatusWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUtil.html" data-type="entity-link" >FileUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstLoginArgs.html" data-type="entity-link" >FindFirstLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstUserArgs.html" data-type="entity-link" >FindFirstUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyLoginArgs.html" data-type="entity-link" >FindManyLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyUserArgs.html" data-type="entity-link" >FindManyUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueLoginArgs.html" data-type="entity-link" >FindUniqueLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueUserArgs.html" data-type="entity-link" >FindUniqueUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login-1.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login-2.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAggregateArgs.html" data-type="entity-link" >LoginAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCountAggregate.html" data-type="entity-link" >LoginCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCountAggregateInput.html" data-type="entity-link" >LoginCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCountOrderByAggregateInput.html" data-type="entity-link" >LoginCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateInput.html" data-type="entity-link" >LoginCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateManyInput.html" data-type="entity-link" >LoginCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateManyUserInput.html" data-type="entity-link" >LoginCreateManyUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateManyUserInputEnvelope.html" data-type="entity-link" >LoginCreateManyUserInputEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateNestedManyWithoutUserInput.html" data-type="entity-link" >LoginCreateNestedManyWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateOrConnectWithoutUserInput.html" data-type="entity-link" >LoginCreateOrConnectWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCreateWithoutUserInput.html" data-type="entity-link" >LoginCreateWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGroupBy.html" data-type="entity-link" >LoginGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGroupByArgs.html" data-type="entity-link" >LoginGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginListRelationFilter.html" data-type="entity-link" >LoginListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMaxAggregate.html" data-type="entity-link" >LoginMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMaxAggregateInput.html" data-type="entity-link" >LoginMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMaxOrderByAggregateInput.html" data-type="entity-link" >LoginMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMinAggregate.html" data-type="entity-link" >LoginMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMinAggregateInput.html" data-type="entity-link" >LoginMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginMinOrderByAggregateInput.html" data-type="entity-link" >LoginMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginOrderByRelationAggregateInput.html" data-type="entity-link" >LoginOrderByRelationAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginOrderByWithAggregationInput.html" data-type="entity-link" >LoginOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginOrderByWithRelationInput.html" data-type="entity-link" >LoginOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginScalarWhereInput.html" data-type="entity-link" >LoginScalarWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginScalarWhereWithAggregatesInput.html" data-type="entity-link" >LoginScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedCreateInput.html" data-type="entity-link" >LoginUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedCreateNestedManyWithoutUserInput.html" data-type="entity-link" >LoginUncheckedCreateNestedManyWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedCreateWithoutUserInput.html" data-type="entity-link" >LoginUncheckedCreateWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedUpdateInput.html" data-type="entity-link" >LoginUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedUpdateManyInput.html" data-type="entity-link" >LoginUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedUpdateManyWithoutLoginsInput.html" data-type="entity-link" >LoginUncheckedUpdateManyWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedUpdateManyWithoutUserInput.html" data-type="entity-link" >LoginUncheckedUpdateManyWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUncheckedUpdateWithoutUserInput.html" data-type="entity-link" >LoginUncheckedUpdateWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateInput.html" data-type="entity-link" >LoginUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateManyMutationInput.html" data-type="entity-link" >LoginUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateManyWithoutUserInput.html" data-type="entity-link" >LoginUpdateManyWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateManyWithWhereWithoutUserInput.html" data-type="entity-link" >LoginUpdateManyWithWhereWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateWithoutUserInput.html" data-type="entity-link" >LoginUpdateWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpdateWithWhereUniqueWithoutUserInput.html" data-type="entity-link" >LoginUpdateWithWhereUniqueWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUpsertWithWhereUniqueWithoutUserInput.html" data-type="entity-link" >LoginUpsertWithWhereUniqueWithoutUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginWhereInput.html" data-type="entity-link" >LoginWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginWhereUniqueInput.html" data-type="entity-link" >LoginWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedDateTimeFilter.html" data-type="entity-link" >NestedDateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedDateTimeWithAggregatesFilter.html" data-type="entity-link" >NestedDateTimeWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedEnumLoginStatusFilter.html" data-type="entity-link" >NestedEnumLoginStatusFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedEnumLoginStatusWithAggregatesFilter.html" data-type="entity-link" >NestedEnumLoginStatusWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedIntFilter.html" data-type="entity-link" >NestedIntFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedIntNullableFilter.html" data-type="entity-link" >NestedIntNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringFilter.html" data-type="entity-link" >NestedStringFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringNullableFilter.html" data-type="entity-link" >NestedStringNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringNullableWithAggregatesFilter.html" data-type="entity-link" >NestedStringNullableWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringWithAggregatesFilter.html" data-type="entity-link" >NestedStringWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NullableStringFieldUpdateOperationsInput.html" data-type="entity-link" >NullableStringFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFieldUpdateOperationsInput.html" data-type="entity-link" >StringFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFilter.html" data-type="entity-link" >StringFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringNullableFilter.html" data-type="entity-link" >StringNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringNullableWithAggregatesFilter.html" data-type="entity-link" >StringNullableWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringWithAggregatesFilter.html" data-type="entity-link" >StringWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLoginDto.html" data-type="entity-link" >UpdateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLoginDto-1.html" data-type="entity-link" >UpdateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyLoginArgs.html" data-type="entity-link" >UpdateManyLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyUserArgs.html" data-type="entity-link" >UpdateManyUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneLoginArgs.html" data-type="entity-link" >UpdateOneLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneUserArgs.html" data-type="entity-link" >UpdateOneUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto-1.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneLoginArgs.html" data-type="entity-link" >UpsertOneLoginArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneUserArgs.html" data-type="entity-link" >UpsertOneUserArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-2.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAggregateArgs.html" data-type="entity-link" >UserAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCount.html" data-type="entity-link" >UserCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCountAggregate.html" data-type="entity-link" >UserCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCountAggregateInput.html" data-type="entity-link" >UserCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCountOrderByAggregateInput.html" data-type="entity-link" >UserCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateInput.html" data-type="entity-link" >UserCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateManyInput.html" data-type="entity-link" >UserCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateNestedOneWithoutLoginsInput.html" data-type="entity-link" >UserCreateNestedOneWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateOrConnectWithoutLoginsInput.html" data-type="entity-link" >UserCreateOrConnectWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateWithoutLoginsInput.html" data-type="entity-link" >UserCreateWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserGroupBy.html" data-type="entity-link" >UserGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserGroupByArgs.html" data-type="entity-link" >UserGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMaxAggregate.html" data-type="entity-link" >UserMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMaxAggregateInput.html" data-type="entity-link" >UserMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMaxOrderByAggregateInput.html" data-type="entity-link" >UserMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMinAggregate.html" data-type="entity-link" >UserMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMinAggregateInput.html" data-type="entity-link" >UserMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMinOrderByAggregateInput.html" data-type="entity-link" >UserMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserOrderByWithAggregationInput.html" data-type="entity-link" >UserOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserOrderByWithRelationInput.html" data-type="entity-link" >UserOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRelationFilter.html" data-type="entity-link" >UserRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserScalarWhereWithAggregatesInput.html" data-type="entity-link" >UserScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUncheckedCreateInput.html" data-type="entity-link" >UserUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUncheckedCreateWithoutLoginsInput.html" data-type="entity-link" >UserUncheckedCreateWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUncheckedUpdateInput.html" data-type="entity-link" >UserUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUncheckedUpdateManyInput.html" data-type="entity-link" >UserUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUncheckedUpdateWithoutLoginsInput.html" data-type="entity-link" >UserUncheckedUpdateWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateInput.html" data-type="entity-link" >UserUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateManyMutationInput.html" data-type="entity-link" >UserUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateOneWithoutLoginsInput.html" data-type="entity-link" >UserUpdateOneWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateWithoutLoginsInput.html" data-type="entity-link" >UserUpdateWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpsertWithoutLoginsInput.html" data-type="entity-link" >UserUpsertWithoutLoginsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWhereInput.html" data-type="entity-link" >UserWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWhereUniqueInput.html" data-type="entity-link" >UserWhereUniqueInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});