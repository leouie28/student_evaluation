"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_landing_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      rule: [function (v) {
        return !!v || 'This field is required';
      }],
      payload: {
        user_id: '',
        password: ''
      },
      message: ''
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      if (!this.payload.user_id || !this.payload.password) {
        alert('Please fillup the importan fields');
      } else {
        axios.post('/web/login', this.payload).then(function (_ref) {
          var data = _ref.data;

          if (data.user) {
            if (data.role == 'admin') {
              _this.$router.push({
                path: '/admin/status'
              });
            } else if (data.role == 'student') {
              if (_this.$route.name == 'student-election') {
                location.reload();
              }

              _this.$router.push({
                path: '/home'
              });
            }
          } else {
            _this.message = data.message;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "d-flex justify-center px-10 align-center",
    staticStyle: {
      height: "100vh"
    }
  }, [_c("v-card", {
    staticClass: "mx-auto px-5 py-4",
    attrs: {
      tile: "",
      elevation: "4",
      "max-width": "400"
    }
  }, [_c("v-card-text", [_c("div", {
    staticClass: "text-center mb-8"
  }, [_c("v-avatar", {
    staticClass: "mx-auto",
    attrs: {
      size: "170"
    }
  }, [_c("v-img", {
    attrs: {
      alt: "School Logo",
      src: "/images/system/logo.png"
    }
  })], 1), _vm._v(" "), _c("h4", {
    staticClass: "mt-3 cyan--text"
  }, [_vm._v("Student Evaluation")])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      "hide-details": "auto",
      dense: "",
      rules: _vm.rule,
      color: "cyan",
      placeholder: "User Id",
      required: "",
      "prepend-inner-icon": "mdi-account"
    },
    model: {
      value: _vm.payload.user_id,
      callback: function callback($$v) {
        _vm.$set(_vm.payload, "user_id", $$v);
      },
      expression: "payload.user_id"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      "hide-details": "auto",
      dense: "",
      rules: _vm.rule,
      required: "",
      color: "cyan",
      placeholder: "Password",
      type: "password",
      "prepend-inner-icon": "mdi-lock"
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.login.apply(null, arguments);
      }
    },
    model: {
      value: _vm.payload.password,
      callback: function callback($$v) {
        _vm.$set(_vm.payload, "password", $$v);
      },
      expression: "payload.password"
    }
  })], 1), _vm._v(" "), _vm.message ? _c("div", {
    staticClass: "error--text text-capitalize text-center"
  }, [_vm._v("\n                    " + _vm._s(_vm.message) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "12"
    }
  }, [_c("v-btn", {
    attrs: {
      tile: "",
      block: "",
      large: "",
      dark: "",
      color: "cyan"
    },
    on: {
      click: _vm.login
    }
  }, [_vm._v("\n                        Login\n                    ")])], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/landing/login.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/landing/login.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=2cf50a58& */ "./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/pages/landing/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/landing/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/landing/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/landing/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_2cf50a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=2cf50a58& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/landing/login.vue?vue&type=template&id=2cf50a58&");


/***/ })

}]);