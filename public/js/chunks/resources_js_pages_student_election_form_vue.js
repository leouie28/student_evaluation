"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_student_election_form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1);
    return {
      confirmation: false,
      valid: true,
      errMsg: '',
      submitting: false,
      elect: {},
      time: null
    };
  },
  mounted: function mounted() {
    this.getElection();
  },
  methods: {
    getElection: function getElection() {
      var _this = this;

      if (localStorage._passcode) {
        var key = this.$route.params.key;
        axios.get("/student-api/election-api/".concat(key, "/election-set")).then(function (_ref) {
          var data = _ref.data;

          if (data != 'error') {
            data.positions.forEach(function (elem) {
              if (elem.max_vote > 1) {
                elem.vote = [];
              } else {
                elem.vote = '';
              }

              var close = new Date(data.closing);
              var now = new Date();
              _this.time = close - now;
            });
            _this.elect = data;
            if (data.code != localStorage._passcode) _this.valid = false;
          } else {
            _this.valid = false;
            _this.errMsg = 'Election key not found...';
          }
        });
      } else {
        this.valid = false;
        this.errMsg = 'Your passcode is not valid for this election.';
      }
    },
    resetPayload: function resetPayload() {
      this.elect.positions.forEach(function (elem) {
        if (elem.max_vote > 1) {
          elem.vote = [];
        } else {
          elem.vote = '';
        }
      });
    },
    submit: function submit() {
      this.confirmation = false;
      this.submitting = true;
      axios.post("/student-api/vote-api", this.elect).then(function (_ref2) {
        var data = _ref2.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.valid ? _c("div", [_c("v-card", {
    "class": _vm.elect.image == "/images/system/noimage.png" ? "mb-2 cus-border-top" : "mb-2"
  }, [_c("v-img", {
    attrs: {
      height: "150",
      src: _vm.elect.image
    }
  }), _vm._v(" "), _c("v-card-title", [_vm._v(_vm._s(_vm.elect.name))]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-0"
  }), _vm._v(" "), _c("v-card-text", [_vm._v("\n            " + _vm._s(_vm.elect.description) + "\n            "), _c("div", {
    staticClass: "d-flex justify-end"
  }, [_vm.time > 0 ? _c("countdown", {
    attrs: {
      time: _vm.time,
      interval: 1000
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_c("span", {
          staticClass: "text--primary"
        }, [_vm._v("Close in：" + _vm._s(props.days) + "d : " + _vm._s(props.hours) + "h : " + _vm._s(props.minutes) + "m : " + _vm._s(props.seconds) + "s")])];
      }
    }], null, false, 154161753)
  }) : _c("span", {
    staticClass: "error--text"
  }, [_vm._v("Election Closed")])], 1)])], 1), _vm._v(" "), _vm._l(_vm.elect.positions, function (pos, i) {
    return [_c("v-card", {
      key: pos.id,
      staticClass: "mb-2"
    }, [_c("v-card-text", [_c("v-toolbar-title", [_vm._v(_vm._s(pos.name) + " "), pos.max_vote > 1 ? _c("span", {
      staticClass: "text-subtitle-2 grey--text"
    }, [_vm._v("( Vote " + _vm._s(pos.max_vote) + " )")]) : _vm._e()]), _vm._v(" "), pos.max_vote <= 1 ? _c("v-radio-group", {
      model: {
        value: _vm.elect.positions[i].vote,
        callback: function callback($$v) {
          _vm.$set(_vm.elect.positions[i], "vote", $$v);
        },
        expression: "elect.positions[i].vote"
      }
    }, _vm._l(pos.candidate, function (c) {
      return _c("v-radio", {
        key: c.id,
        attrs: {
          label: c.name,
          value: c.id
        }
      });
    }), 1) : _c("div", {
      staticClass: "my-3"
    }, _vm._l(pos.candidate, function (c) {
      return _c("v-checkbox", {
        key: c.id,
        staticClass: "mt-2",
        attrs: {
          label: c.name,
          value: c.id,
          "hide-details": ""
        },
        model: {
          value: _vm.elect.positions[i].vote,
          callback: function callback($$v) {
            _vm.$set(_vm.elect.positions[i], "vote", $$v);
          },
          expression: "elect.positions[i].vote"
        }
      });
    }), 1)], 1)], 1)];
  }), _vm._v(" "), _c("v-card", {
    staticClass: "mb-3"
  }, [_c("v-card-text", {
    staticClass: "text-center error--text"
  }, [_vm._v("\n            Invalid\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("v-btn", {
    attrs: {
      color: "secondary",
      disabled: _vm.submitting,
      outlined: ""
    },
    on: {
      click: _vm.resetPayload
    }
  }, [_vm._v("Reset Form")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: _vm.submitting
    },
    on: {
      click: function click($event) {
        _vm.confirmation = true;
      }
    }
  }, [_vm._v("Submit my vote")])], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      persistent: "",
      "max-width": "600"
    },
    model: {
      value: _vm.confirmation,
      callback: function callback($$v) {
        _vm.confirmation = $$v;
      },
      expression: "confirmation"
    }
  }, [_c("v-card", [_c("v-card-title", [_vm._v("\n                Warning\n            ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_vm._v("\n                Are you sure you want to submit your vote?\n            ")]), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.confirmation = false;
      }
    }
  }, [_vm._v("\n                    Cancel\n                ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n                    Confirm & submit\n                ")])], 1)], 1)], 1)], 2) : _c("div", {
    staticClass: "empty-container text-center"
  }, [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "60%",
      alt: "Empty",
      src: "/images/system/empty.svg"
    }
  }), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-h2 font-weight-medium w-100"
  }, [_vm._v("\n        Oops\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm._v("\n        " + _vm._s(_vm.errMsg) + "\n    ")])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/student/election/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/student/election/form.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3e169b8d& */ "./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/pages/student/election/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/student/election/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/student/election/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/student/election/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3e169b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=3e169b8d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/election/form.vue?vue&type=template&id=3e169b8d&");


/***/ })

}]);