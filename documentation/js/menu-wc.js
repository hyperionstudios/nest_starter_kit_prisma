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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' : 'data-target="#xs-controllers-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' :
                                            'id="xs-controllers-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' : 'data-target="#xs-injectables-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' :
                                        'id="xs-injectables-links-module-AppModule-2461fffc5da153c0ac35a9d26bbb4af4a0ed893a09e9b84f9f84853dadd8d24d6f82c45b32240e8337fc28380fa06ed033a50921d74cad69a5a909f9d977a8e1"' }>
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
                                <a href="classes/FileUtil.html" data-type="entity-link" >FileUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
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