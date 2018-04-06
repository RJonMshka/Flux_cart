/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./control-panel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./control-panel.js":
/*!**************************!*\
  !*** ./control-panel.js ***!
  \**************************/
/*! exports provided: EDIT_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_MODAL\", function() { return EDIT_MODAL; });\n/* harmony import */ var _flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flux */ \"./flux/index.js\");\n\n\nconst controlPanelDispatcher = new _flux__WEBPACK_IMPORTED_MODULE_0__[\"Dispatcher\"]();\n\nconst EDIT_MODAL = 'EDIT_MODAL';\n\nconst editModalAction = data => {\n    return {\n        'data': data,\n        'type': EDIT_MODAL\n    };\n};\n\n// Function to Empty Modal when it closes\nvar emptyModal = () => {\n    $('.modal-container').find('#modal-size').html('');\n    $('#modal-quantity option').each(function () {\n        $('.modal-container').find('.modal-color-options').find('form').html('');\n        if ($(this).attr('selected')) $(this).removeAttr('selected');\n    });\n};\n\nclass View {\n    constructor() {\n        this.quantity = 0;\n        this.total = 0;\n    }\n\n    initialize(data) {\n        console.log('initialize is getting called');\n        this.render(data, $('.item-container'));\n        this.calculateDiscount();\n    }\n\n    render(data, $container) {\n        console.log('render is getting called');\n        $container.removeClass('clone-containers');\n        $('.clone-containers').remove();\n        data.productsInCart.forEach((item, index) => {\n            let $tempContainer = $container.clone();\n            $tempContainer.addClass('clone-containers');\n            $tempContainer.find('.item-details').find('h2').html(`${item.p_variation} ${item.p_name}`);\n            $tempContainer.find('.style-number').html(item.p_style);\n            $tempContainer.find('.color-type').html(item.p_selected_color.name);\n            $tempContainer.find('.size-number').html(item.p_selected_size.code.toUpperCase());\n            $tempContainer.find('.price').html(item.p_price * item.p_quantity);\n            $tempContainer.find('.quantity-number').html(item.p_quantity);\n            $tempContainer.find('.quantity-desktop').find('h2').html(item.p_quantity);\n            $tempContainer.find('.price-desktop').find('h2').html(`$${item.p_price * item.p_quantity}`);\n\n            this.incrementQuantity(item.p_quantity);\n\n            $tempContainer.find('.image-info').attr('src', item.p_image);\n\n            this.incrementTotal(item.p_price * item.p_quantity);\n\n            // Attaching Event to Edit Button\n            $tempContainer.find('.edit-button').on('click', function () {\n                $('.modal-container').show();\n                $('.modal-container').find('#modal-item-name').html(`${item.p_variation} ${item.p_name}`);\n                $('.modal-container').find('.modal-price').html(item.p_price);\n                $('.modal-container').find('.image-part').find('img').attr('src', item.p_image);\n                // Adding coloured Radio Buttons\n                item.p_available_options.colors.forEach(function (color) {\n                    let $label = new CreateElements().createLabel().attr('for', color.name);\n                    let $input = new CreateElements().createInput('radio').attr('id', color.name).attr('name', 'colors').addClass('radio-buttons');\n                    $input.css('background-color', color.hexcode);\n                    if (color.name == item.p_selected_color.name) {\n                        $input.attr('checked', true);\n                    }\n                    $label.appendTo($('.modal-container').find('.modal-color-options').find('form'));\n                    $input.appendTo($('.modal-container').find('.modal-color-options').find('form'));\n                });\n                // Appending Colour Options\n                $('<option>Size</option>').appendTo($('.modal-container').find('#modal-size'));\n                item.p_available_options.sizes.forEach(function (size) {\n                    let $option = new CreateElements().createOption();\n                    $option.attr('value', size.code).attr('role', 'listitem');\n                    $option.html(size.name);\n                    if (size.code == item.p_selected_size.code) $option.attr('selected', true);\n                    $option.appendTo($('.modal-container').find('#modal-size'));\n                });\n\n                $('#modal-quantity option').each(function () {\n                    if ($(this).val() == item.p_quantity) $(this).attr('selected', true);\n                });\n                // Attaching Event to EDIT button of Modal\n                $('#modal-button').off('click').on('click', function () {\n                    let selectedHexcode;\n                    let newQuantity = $('.modal-container').find('#modal-quantity').val();\n                    let newSize = $('.modal-container').find('#modal-size').val();\n                    let newSizeName = $('#modal-size option:selected').html();\n                    if (newSize == 'Size') {\n                        alert('please select a size');\n                    } else {\n                        $('.modal-color-options').find('input').each(function () {\n                            if ($(this).is(':checked')) {\n                                // CHECKING IF RADIO BUTTON IS CHECKED\n                                item.p_available_options.colors.forEach(color => {\n                                    if ($(this).attr('id') == color.name) {\n                                        selectedHexcode = color.hexcode;\n                                    }\n                                });\n                                //    UPDATING LOCAL-STORAGE\n                                data.productsInCart[index].p_selected_color.name = $(this).attr('id');\n                                data.productsInCart[index].p_selected_color.hexcode = selectedHexcode;\n                                data.productsInCart[index].p_selected_size.code = newSize;\n                                data.productsInCart[index].p_selected_size.name = newSizeName;\n                                data.productsInCart[index].p_quantity = parseInt(newQuantity);\n\n                                controlPanelDispatcher.dispatch(editModalAction(data));\n\n                                $('.modal-container').hide();\n                                emptyModal();\n                            }\n                        });\n                    }\n                });\n            });\n\n            // MODAL CLOSE BUTTON EVENT\n            $('.modal-container').find('.close-button').on('click', function () {\n                $('.modal-container').hide();\n                emptyModal();\n            });\n\n            // MODAL OUTSIDE CLICK EVENT\n            window.onclick = function (event) {\n                if (event.target == this.document.getElementsByClassName('modal-container')[0]) {\n                    $('.modal-container').hide();\n                    emptyModal();\n                }\n            };\n            // APPENDING EACH ITEM CONTAINER\n            $('.checkout-container').before($tempContainer);\n        });\n        $container.remove();\n    }\n\n    calculateDiscount() {\n        let discount;\n        if (this.total < 50) {\n            $('#shipping-message').html('You have to spend $50 to be eligible for Free Shipping');\n            $('#shipping-cost').html('PAID');\n        }\n\n        if (this.quantity == 3) {\n            discount = this.total * 0.05;\n            $('#code-applied').html('JF05 APPLIED');\n        } else if (this.quantity > 3 && this.quantity <= 6) {\n            discount = this.total * 0.1;\n            $('#code-applied').html('JF10 APPLIED');\n        } else if (this.quantity > 6) {\n            discount = this.total * 0.25;\n            $('#code-applied').html('JF25 APPLIED');\n        }\n        $('#discount').html(discount);\n        $('#total-amount').html(this.total - discount);\n        $('#item-count').html(this.quantity);\n        $('#total-cost-price').html(this.total);\n        this.resetValues();\n    }\n\n    incrementQuantity(newVal) {\n        this.quantity += parseInt(newVal);\n    }\n\n    incrementTotal(newVal) {\n        this.total += parseInt(newVal);\n    }\n\n    resetValues() {\n        this.quantity = 0;\n        this.total = 0;\n    }\n}\n\nclass CreateElements {\n    createLabel() {\n        return $('<label>');\n    }\n    createInput(type) {\n        return $(`<input type = ${type}>`);\n    }\n    createOption() {\n        return $('<option>');\n    }\n}\n\nvar view = new View();\n\nconst cartStore = new _flux__WEBPACK_IMPORTED_MODULE_0__[\"Store\"](controlPanelDispatcher);\n\ncartStore.addListener(state => {\n    console.log('render is performed' + $('.item-container'));\n    view.render(state, $('.item-container').eq(0));\n    view.calculateDiscount();\n});\n\nview.initialize(cartStore.getInitialState());\n\n//# sourceURL=webpack:///./control-panel.js?");

/***/ }),

/***/ "./flux/Dispatcher.js":
/*!****************************!*\
  !*** ./flux/Dispatcher.js ***!
  \****************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dispatcher\", function() { return Dispatcher; });\nclass Dispatcher {\n    constructor() {\n        this.listeners = [];\n    }\n    dispatch(action) {\n        this.listeners.forEach(listener => listener(action));\n    }\n    register(listener) {\n        this.listeners.push(listener);\n    }\n}\n\n//# sourceURL=webpack:///./flux/Dispatcher.js?");

/***/ }),

/***/ "./flux/Store.js":
/*!***********************!*\
  !*** ./flux/Store.js ***!
  \***********************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\nclass Store {\n   constructor(dispatcher) {\n      this.listeners = [];\n      this.state = this.getInitialState();\n      dispatcher.register(this.onDispatch.bind(this));\n   }\n   getInitialState() {\n      return {\n         \"productsInCart\": [{\n            \"p_id\": \"1\",\n            \"p_name\": \"cotton tshirt\",\n            \"p_variation\": \"solid green\",\n            \"p_style\": \"ms13kt1906\",\n            \"p_image\": \"./assets/images/T1.jpg\",\n            \"p_selected_color\": {\n               \"name\": \"red\",\n               \"hexcode\": \"#ED99A8\"\n            },\n            \"p_selected_size\": {\n               \"name\": \"small\",\n               \"code\": \"s\"\n            },\n            \"p_available_options\": {\n               \"colors\": [{\n                  \"name\": \"green\",\n                  \"hexcode\": \"#A3D2A1\"\n               }, {\n                  \"name\": \"yellow\",\n                  \"hexcode\": \"#F9F8E6\"\n               }, {\n                  \"name\": \"red\",\n                  \"hexcode\": \"#ED99A8\"\n               }],\n               \"sizes\": [{\n                  \"name\": \"small\",\n                  \"code\": \"s\"\n               }, {\n                  \"name\": \"medium\",\n                  \"code\": \"m\"\n               }, {\n                  \"name\": \"large\",\n                  \"code\": \"l\"\n               }, {\n                  \"name\": \"extra large\",\n                  \"code\": \"xl\"\n               }]\n            },\n            \"p_quantity\": 1,\n            \"p_originalprice\": 11.0,\n            \"p_price\": 11.0,\n            \"c_currency\": \"$\"\n         }, {\n            \"p_id\": \"2\",\n            \"p_name\": \"print girls tee\",\n            \"p_variation\": \"pink rainbow\",\n            \"p_style\": \"ms13kt1906\",\n            \"p_image\": \"./assets/images/T2.jpg\",\n            \"p_selected_color\": {\n               \"name\": \"pink\",\n               \"hexcode\": \"#F1DDEF\"\n            },\n            \"p_selected_size\": {\n               \"name\": \"small\",\n               \"code\": \"s\"\n            },\n            \"p_available_options\": {\n               \"colors\": [{\n                  \"name\": \"green\",\n                  \"hexcode\": \"#A3D2A1\"\n               }, {\n                  \"name\": \"yellow\",\n                  \"hexcode\": \"#F9F8E6\"\n               }, {\n                  \"name\": \"pink\",\n                  \"hexcode\": \"#F1DDEF\"\n               }],\n               \"sizes\": [{\n                  \"name\": \"small\",\n                  \"code\": \"s\"\n               }, {\n                  \"name\": \"medium\",\n                  \"code\": \"m\"\n               }, {\n                  \"name\": \"large\",\n                  \"code\": \"l\"\n               }, {\n                  \"name\": \"extra large\",\n                  \"code\": \"xl\"\n               }]\n            },\n            \"p_quantity\": 1,\n            \"p_originalprice\": 17.0,\n            \"p_price\": 17.0,\n            \"c_currency\": \"$\"\n         }, {\n            \"p_id\": \"3\",\n            \"p_name\": \"flower pattern shirt\",\n            \"p_variation\": \"blue\",\n            \"p_style\": \"ms13kt1906\",\n            \"p_image\": \"./assets/images/T3.jpg\",\n            \"p_selected_color\": {\n               \"name\": \"blue\",\n               \"hexcode\": \"#1169BD\"\n            },\n            \"p_selected_size\": {\n               \"name\": \"small\",\n               \"code\": \"s\"\n            },\n            \"p_available_options\": {\n               \"colors\": [{\n                  \"name\": \"green\",\n                  \"hexcode\": \"#A3D2A1\"\n               }, {\n                  \"name\": \"blue\",\n                  \"hexcode\": \"#1169BD\"\n               }, {\n                  \"name\": \"red\",\n                  \"hexcode\": \"#ED99A8\"\n               }],\n               \"sizes\": [{\n                  \"name\": \"small\",\n                  \"code\": \"s\"\n               }, {\n                  \"name\": \"medium\",\n                  \"code\": \"m\"\n               }, {\n                  \"name\": \"large\",\n                  \"code\": \"l\"\n               }, {\n                  \"name\": \"extra large\",\n                  \"code\": \"xl\"\n               }]\n            },\n            \"p_quantity\": 1,\n            \"p_originalprice\": 21.0,\n            \"p_price\": 9.0,\n            \"c_currency\": \"$\"\n         }, {\n            \"p_id\": \"4\",\n            \"p_name\": \"check pattern tshirt\",\n            \"p_variation\": \"mens red\",\n            \"p_style\": \"ms13kt1906\",\n            \"p_image\": \"./assets/images/T4.jpg\",\n            \"p_selected_color\": {\n               \"name\": \"red\",\n               \"hexcode\": \"#ED99A8\"\n            },\n            \"p_selected_size\": {\n               \"name\": \"small\",\n               \"code\": \"s\"\n            },\n            \"p_available_options\": {\n               \"colors\": [{\n                  \"name\": \"green\",\n                  \"hexcode\": \"#A3D2A1\"\n               }, {\n                  \"name\": \"yellow\",\n                  \"hexcode\": \"#F9F8E6\"\n               }, {\n                  \"name\": \"red\",\n                  \"hexcode\": \"#ED99A8\"\n               }],\n               \"sizes\": [{\n                  \"name\": \"small\",\n                  \"code\": \"s\"\n               }, {\n                  \"name\": \"medium\",\n                  \"code\": \"m\"\n               }, {\n                  \"name\": \"large\",\n                  \"code\": \"l\"\n               }, {\n                  \"name\": \"extra large\",\n                  \"code\": \"xl\"\n               }]\n            },\n            \"p_quantity\": 1,\n            \"p_originalprice\": 22.0,\n            \"p_price\": 22.0,\n            \"c_currency\": \"$\"\n         }]\n      };\n   }\n   onDispatch(action) {\n      switch (action.type) {\n         case 'EDIT_MODAL':\n            this.state = action.data;\n            this.emitChange();\n            break;\n      }\n   }\n   addListener(listener) {\n      this.listeners.push(listener);\n   }\n   emitChange() {\n      this.listeners.forEach(listener => listener(this.state));\n   }\n\n}\n\n//# sourceURL=webpack:///./flux/Store.js?");

/***/ }),

/***/ "./flux/index.js":
/*!***********************!*\
  !*** ./flux/index.js ***!
  \***********************/
/*! exports provided: Dispatcher, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dispatcher */ \"./flux/Dispatcher.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dispatcher\", function() { return _Dispatcher__WEBPACK_IMPORTED_MODULE_0__[\"Dispatcher\"]; });\n\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ \"./flux/Store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return _Store__WEBPACK_IMPORTED_MODULE_1__[\"Store\"]; });\n\n\n\n\n//# sourceURL=webpack:///./flux/index.js?");

/***/ })

/******/ });