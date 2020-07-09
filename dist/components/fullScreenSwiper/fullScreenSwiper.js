(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/fullScreenSwiper/fullScreenSwiper"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.1.5@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./fullScreenSwiper.less */ "./src/components/fullScreenSwiper/fullScreenSwiper.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullScreenSwiper = (_temp2 = _class = function (_BaseComponent) {
  _inherits(FullScreenSwiper, _BaseComponent);

  function FullScreenSwiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FullScreenSwiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FullScreenSwiper.__proto__ || Object.getPrototypeOf(FullScreenSwiper)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray1040", "loopArray1041", "imgs", "ind"], _this.changeImg = function (index) {
      //点击轮播点，可以切换轮播图
      if (index != _this.state.ind) {
        _this.setState({
          ind: index
        });
      }
    }, _this.touchMove = function (e) {
      console.log(e);
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FullScreenSwiper, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(FullScreenSwiper.prototype.__proto__ || Object.getPrototypeOf(FullScreenSwiper.prototype), "_constructor", this).call(this, props);
      this.state = {
        imgs: [{ src: __webpack_require__(/*! ../../assets/img/wyj.jpg */ "./src/assets/img/wyj.jpg"), id: 1 }, { src: __webpack_require__(/*! ../../assets/img/wyj2.jpg */ "./src/assets/img/wyj2.jpg"), id: 2 }, { src: __webpack_require__(/*! ../../assets/img/wyj3.jpg */ "./src/assets/img/wyj3.jpg"), id: 3 }],
        ind: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          imgs = _state.imgs,
          ind = _state.ind;
      //首屏轮播

      //滑动按钮

      var loopArray1040 = imgs.map(function (el, index) {
        el = {
          $original: (0, _taroWeapp.internal_get_original)(el)
        };

        var _$indexKey = "cdazz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.touchMove;
        };

        var $loopState__temp2 = (0, _taroWeapp.internal_inline_style)({
          left: 100 * index + "vh"
        });
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $original: el.$original
        };
      });
      var loopArray1041 = imgs.map(function (el, index) {
        el = {
          $original: (0, _taroWeapp.internal_get_original)(el)
        };

        var _$indexKey2 = "cdbzz" + index;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return _this2.changeImg(index);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: el.$original
        };
      });
      Object.assign(this.__state, {
        loopArray1040: loopArray1040,
        loopArray1041: loopArray1041
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }]);

  return FullScreenSwiper;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "components/fullScreenSwiper/fullScreenSwiper", _temp2);
exports.default = FullScreenSwiper;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.1.5@@tarojs/taro-weapp/index.js").default.createComponent(FullScreenSwiper));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/pjj/Documents/task/diet/src!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/pjj/Documents/task/diet/src!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/fullScreenSwiper/fullScreenSwiper.wxml";

/***/ }),

/***/ "./src/assets/img/wyj.jpg":
/*!********************************!*\
  !*** ./src/assets/img/wyj.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/wyj.jpg";

/***/ }),

/***/ "./src/assets/img/wyj2.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/wyj2.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/wyj2.jpg";

/***/ }),

/***/ "./src/assets/img/wyj3.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/wyj3.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/wyj3.jpg";

/***/ }),

/***/ "./src/components/fullScreenSwiper/fullScreenSwiper.jsx":
/*!**************************************************************!*\
  !*** ./src/components/fullScreenSwiper/fullScreenSwiper.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************!*\
  !*** ./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************!*\
  !*** ./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_pjj_Documents_task_diet_src_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/pjj/Documents/task/diet/src!../../../node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/pjj/Documents/task/diet/src!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.1.5@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/fullScreenSwiper/fullScreenSwiper.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_pjj_Documents_task_diet_src_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_pjj_Documents_task_diet_src_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_pjj_Documents_task_diet_src_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_pjj_Documents_task_diet_src_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_1_5_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_fullScreenSwiper_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/fullScreenSwiper/fullScreenSwiper.less":
/*!***************************************************************!*\
  !*** ./src/components/fullScreenSwiper/fullScreenSwiper.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/fullScreenSwiper/fullScreenSwiper.jsx","runtime","taro","vendors"]]]);