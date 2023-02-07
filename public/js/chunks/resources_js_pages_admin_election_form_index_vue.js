"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_election_form_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _step1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue */ "./resources/js/pages/admin/election/form/step1.vue");
/* harmony import */ var _step2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2.vue */ "./resources/js/pages/admin/election/form/step2.vue");
/* harmony import */ var _step3_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3.vue */ "./resources/js/pages/admin/election/form/step3.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Step1: _step1_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Step2: _step2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Step3: _step3_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isShow: false,
      step: 1,
      url: '',
      payload: {
        election: {
          name: '',
          school_year: '',
          description: '',
          date_open: '',
          time_open: '',
          date_close: '',
          time_close: '',
          code: '',
          image: null
        },
        positions: [{
          name: '',
          max_vote: 1,
          candidate: [{
            name: '',
            partylist: '',
            image: null
          }],
          sort: 1
        }]
      }
    };
  },
  mounted: function mounted() {
    if (localStorage.getItem('payload')) {
      this.payload = JSON.parse(localStorage.payload);
      this.url = window.location.origin + '/election/' + this.payload.election.urlkey;
      console.log(JSON.parse(localStorage.payload), 'test'); // console.log(localStorage.payload)
    }

    if (localStorage._show) {
      this.isShow = true;
    }
  },
  methods: {
    cancelEdit: function cancelEdit() {
      var _this = this;

      axios.get("/admin-api/election/get-set/".concat(this.payload.election.id)).then(function (_ref) {
        var data = _ref.data;
        _this.payload = data;
      });
    },
    warning: function warning() {
      var text = 'Are you sure you want to add this data?';

      this._warning(text);
    },
    saveLocal: function saveLocal(step) {
      this.step = step;
      localStorage.setItem('payload', JSON.stringify(this.payload));
    },
    create: function create() {
      var _this2 = this;

      this.warning_data.trigger = false;
      localStorage.setItem('payload', JSON.stringify(this.payload));
      axios.post("/admin-api/election/store-set", this.payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2._newAlert(true, data.type, data.message);
      })["finally"](function () {
        setTimeout(function () {
          localStorage.removeItem('payload');

          _this2.$router.push({
            path: '/admin/election'
          });
        }, 2000);
      });
    },
    copyLink: function copyLink() {
      console.log(this.url);
      var url = this.url;
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      readonly: false,
      updating: false,
      date_open_menu: false,
      time_open_menu: false,
      date_close_menu: false,
      time_close_menu: false,
      feat_img: null
    };
  },
  props: {
    election: {
      type: Object,
      "default": function _default() {}
    }
  },
  created: function created() {
    if (localStorage._show) {
      console.log(localStorage._show);

      if (localStorage._show == "1") {
        this.readonly = true;
        this.updating = true;
      }
    }
  },
  methods: {
    onFileChange: function onFileChange(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var imageFile, temp, imageURL;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageFile = file[0];
                temp = {};

                if (!(file.length > 0)) {
                  _context.next = 11;
                  break;
                }

                if (imageFile.type.match("image.*")) {
                  _context.next = 7;
                  break;
                }

                alert("Please choose an image file");
                _context.next = 11;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _context.next = 10;
                return _this.createImageBase64(imageFile);

              case 10:
                _this.election.image = _context.sent;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    generateCode: function generateCode() {
      var length = 8;
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      var counter = 0;

      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }

      return result;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      readonly: false,
      updating: false
    };
  },
  props: {
    positions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  created: function created() {
    if (localStorage._show) {
      if (localStorage._show == "1") {
        this.readonly = true;
        this.updating = true;
      }
    }
  },
  methods: {
    addSlot: function addSlot() {
      var count = this.positions.length;
      this.positions.push({
        name: '',
        max_vote: 1,
        candidate: [{
          name: '',
          partylist: '',
          image: ''
        }],
        sort: count + 1
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      partylist: [],
      readonly: false,
      updating: false
    };
  },
  props: {
    positions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  created: function created() {
    this.getPartylist();

    if (localStorage._show) {
      if (localStorage._show == "1") {
        this.readonly = true;
        this.updating = true;
      }
    }
  },
  methods: {
    addSlot: function addSlot(i) {
      this.positions[i].candidate.push({
        name: '',
        partylist: '',
        image: ''
      });
    },
    getPartylist: function getPartylist() {
      var _this = this;

      axios.get("/admin-api/partylist").then(function (_ref) {
        var data = _ref.data;
        _this.partylist = data.data;
      });
    },
    triggerInput: function triggerInput(index1, index2) {
      console.log(index1, index2);
      var input = "file_input_".concat(index1).concat(index2);
      this.$refs[input][0].click(); // this.$refs.key[index1][index2].click()
      // this.$refs.key[`'file_input'+index1+index2`][i].click()
    },
    onFileChange: function onFileChange(file, index1, index2) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var imageFile, temp, imageURL;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(file);
                imageFile = file[0];
                temp = {};

                if (!(file.length > 0)) {
                  _context.next = 12;
                  break;
                }

                if (imageFile.type.match("image.*")) {
                  _context.next = 8;
                  break;
                }

                alert("Please choose an image file");
                _context.next = 12;
                break;

              case 8:
                imageURL = URL.createObjectURL(imageFile);
                _context.next = 11;
                return _this2.createImageBase64(imageFile);

              case 11:
                _this2.positions[index1].candidate[index2].image = _context.sent;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pa-2"
  }, [_c("v-card", {
    staticClass: "pa-2",
    attrs: {
      elevation: "2"
    }
  }, [_c("v-card-title", [_vm._v("\n            Election Form\n            "), _c("v-spacer"), _vm._v(" "), !_vm.isShow ? _c("v-btn", {
    attrs: {
      color: "secondary"
    }
  }, [_c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("mdi-backspace")]), _vm._v("\n                Return\n            ")], 1) : _c("span", {
    staticClass: "d-flex align-center"
  }, [_c("span", {
    staticClass: "text-subtitle-1 mr-1"
  }, [_vm._v("Election Url: ")]), _vm._v(" "), _c("v-tooltip", {
    attrs: {
      bottom: "",
      color: "primary"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
            attrs = _ref.attrs;
        return [_c("v-chip", _vm._g(_vm._b({
          attrs: {
            label: "",
            outlined: "",
            color: "success"
          },
          on: {
            click: _vm.copyLink
          }
        }, "v-chip", attrs, false), on), [_vm._v("\n                            " + _vm._s(_vm.url) + "\n                            "), _c("v-icon", {
          staticClass: "ml-2",
          attrs: {
            small: ""
          }
        }, [_vm._v("mdi-content-copy")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Click to copy election url link")])])], 1)], 1), _vm._v(" "), _c("v-card-text", [_c("v-stepper", {
    model: {
      value: _vm.step,
      callback: function callback($$v) {
        _vm.step = $$v;
      },
      expression: "step"
    }
  }, [_c("v-stepper-header", [_c("v-stepper-step", {
    attrs: {
      complete: _vm.step > 1 || _vm.isShow,
      editable: _vm.isShow,
      step: "1"
    }
  }, [_vm._v("\n                    Election Info\n                ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      complete: _vm.step > 2 || _vm.isShow,
      editable: _vm.isShow,
      step: "2"
    }
  }, [_vm._v("\n                    Election Positions\n                ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      complete: _vm.step > 3 || _vm.isShow,
      editable: _vm.isShow,
      step: "3"
    }
  }, [_vm._v("\n                    Election Candidates\n                ")])], 1), _vm._v(" "), _c("v-stepper-items", [_c("v-stepper-content", {
    attrs: {
      step: "1"
    }
  }, [_c("step-1", {
    attrs: {
      election: _vm.payload.election
    },
    on: {
      cancelEdit: _vm.cancelEdit
    }
  }), _vm._v(" "), !_vm.isShow ? _c("div", [_c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.saveLocal(2);
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.isShow ? "Next" : "Continue") + "\n                        ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: "",
      disabled: ""
    }
  }, [_vm._v("\n                        Back\n                        ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "2"
    }
  }, [_c("step-2", {
    attrs: {
      positions: _vm.payload.positions
    },
    on: {
      cancelEdit: _vm.cancelEdit
    }
  }), _vm._v(" "), !_vm.isShow ? _c("div", [_c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.saveLocal(3);
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.isShow ? "Next" : "Continue") + "\n                        ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.step = 1;
      }
    }
  }, [_vm._v("\n                        Back\n                        ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "3"
    }
  }, [_c("step-3", {
    attrs: {
      positions: _vm.payload.positions
    },
    on: {
      cancelEdit: _vm.cancelEdit
    }
  }), _vm._v(" "), !_vm.isShow ? _c("div", [_c("v-btn", {
    attrs: {
      color: "primary",
      disabled: _vm.isShow
    },
    on: {
      click: _vm.warning
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.isShow ? "Next" : "Create Election") + "\n                        ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.step = 2;
      }
    }
  }, [_vm._v("\n                        Back\n                        ")])], 1) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("Warning", {
    attrs: {
      data: _vm.warning_data
    },
    on: {
      close: function close($event) {
        _vm.warning_data.trigger = false;
      },
      confirm: _vm.create
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-card", {
    staticClass: "mb-4",
    attrs: {
      outlined: ""
    }
  }, [_c("v-card-text", [_c("v-row", [_vm.updating ? _c("v-col", {
    attrs: {
      md: "12",
      cols: "12"
    }
  }, [_vm.readonly ? _c("v-btn", {
    attrs: {
      small: "",
      color: "success",
      outlined: ""
    },
    on: {
      click: function click($event) {
        _vm.readonly = false;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-square-edit-outline")]), _vm._v("\n                        Edit\n                    ")], 1) : _c("div", [_c("v-btn", {
    attrs: {
      small: "",
      color: "success"
    },
    on: {
      click: function click($event) {
        _vm.readonly = true;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n                            Save\n                        ")], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-1",
    attrs: {
      small: "",
      color: "error"
    },
    on: {
      click: function click($event) {
        ;
        _vm.readonly = true, _vm.$emit("cancelEdit");
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n                            Cancel\n                        ")], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-row", {
    attrs: {
      wrap: ""
    }
  }, [_c("v-col", {
    attrs: {
      md: "12",
      cols: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: _vm.readonly ? false : true,
      readonly: _vm.readonly,
      label: "Name of the election",
      placeholder: "Ex. SSG Election",
      "hide-details": "auto"
    },
    model: {
      value: _vm.election.name,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "name", $$v);
      },
      expression: "election.name"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "12",
      cols: "12"
    }
  }, [_c("v-textarea", {
    attrs: {
      filled: _vm.readonly ? false : true,
      readonly: _vm.readonly,
      label: "Description (optional)",
      "hide-details": "auto"
    },
    model: {
      value: _vm.election.description,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "description", $$v);
      },
      expression: "election.description"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-menu", {
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      transition: "scale-transition",
      "offset-y": "",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
            attrs = _ref.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          attrs: {
            filled: _vm.readonly ? false : true,
            "prepend-inner-icon": "mdi-calendar",
            label: "Opening Date",
            readonly: "",
            "hide-details": "auto"
          },
          model: {
            value: _vm.election.date_open,
            callback: function callback($$v) {
              _vm.$set(_vm.election, "date_open", $$v);
            },
            expression: "election.date_open"
          }
        }, "v-text-field", !_vm.readonly ? attrs : "", false), !_vm.readonly ? on : ""))];
      }
    }]),
    model: {
      value: _vm.date_open_menu,
      callback: function callback($$v) {
        _vm.date_open_menu = $$v;
      },
      expression: "date_open_menu"
    }
  }, [_vm._v(" "), _c("v-date-picker", {
    attrs: {
      "no-title": "",
      min: _vm.moment().format("YYYY-MM-DD"),
      max: _vm.election.date_close
    },
    on: {
      input: function input($event) {
        _vm.date_open_menu = false;
      }
    },
    model: {
      value: _vm.election.date_open,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "date_open", $$v);
      },
      expression: "election.date_open"
    }
  })], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-menu", {
    ref: "open",
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      "return-value": _vm.election.time_open,
      transition: "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "290px"
    },
    on: {
      "update:returnValue": function updateReturnValue($event) {
        return _vm.$set(_vm.election, "time_open", $event);
      },
      "update:return-value": function updateReturnValue($event) {
        return _vm.$set(_vm.election, "time_open", $event);
      }
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on,
            attrs = _ref2.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          attrs: {
            filled: _vm.readonly ? false : true,
            "prepend-inner-icon": "mdi-clock-outline",
            label: "Opening Time",
            readonly: "",
            "hide-details": "auto"
          },
          model: {
            value: _vm.election.time_open,
            callback: function callback($$v) {
              _vm.$set(_vm.election, "time_open", $$v);
            },
            expression: "election.time_open"
          }
        }, "v-text-field", !_vm.readonly ? attrs : "", false), !_vm.readonly ? on : ""))];
      }
    }]),
    model: {
      value: _vm.time_open_menu,
      callback: function callback($$v) {
        _vm.time_open_menu = $$v;
      },
      expression: "time_open_menu"
    }
  }, [_vm._v(" "), _vm.time_open_menu ? _c("v-time-picker", {
    attrs: {
      "full-width": "",
      "no-title": ""
    },
    on: {
      "click:minute": function clickMinute($event) {
        return _vm.$refs.open.save(_vm.election.time_open);
      }
    },
    model: {
      value: _vm.election.time_open,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "time_open", $$v);
      },
      expression: "election.time_open"
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-menu", {
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      transition: "scale-transition",
      "offset-y": "",
      "min-width": "auto"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref3) {
        var on = _ref3.on,
            attrs = _ref3.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          attrs: {
            filled: _vm.readonly ? false : true,
            "prepend-inner-icon": "mdi-calendar",
            label: "CLosing Date",
            readonly: "",
            "hide-details": "auto"
          },
          model: {
            value: _vm.election.date_close,
            callback: function callback($$v) {
              _vm.$set(_vm.election, "date_close", $$v);
            },
            expression: "election.date_close"
          }
        }, "v-text-field", !_vm.readonly ? attrs : "", false), !_vm.readonly ? on : ""))];
      }
    }]),
    model: {
      value: _vm.date_close_menu,
      callback: function callback($$v) {
        _vm.date_close_menu = $$v;
      },
      expression: "date_close_menu"
    }
  }, [_vm._v(" "), _c("v-date-picker", {
    attrs: {
      "no-title": "",
      min: _vm.election.date_open
    },
    on: {
      input: function input($event) {
        _vm.date_close_menu = false;
      }
    },
    model: {
      value: _vm.election.date_close,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "date_close", $$v);
      },
      expression: "election.date_close"
    }
  })], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-menu", {
    ref: "close",
    attrs: {
      "close-on-content-click": false,
      "nudge-right": 40,
      "return-value": _vm.election.time_close,
      transition: "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "290px"
    },
    on: {
      "update:returnValue": function updateReturnValue($event) {
        return _vm.$set(_vm.election, "time_close", $event);
      },
      "update:return-value": function updateReturnValue($event) {
        return _vm.$set(_vm.election, "time_close", $event);
      }
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref4) {
        var on = _ref4.on,
            attrs = _ref4.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          attrs: {
            filled: _vm.readonly ? false : true,
            "prepend-inner-icon": "mdi-clock-outline",
            label: "Closing Time",
            readonly: "",
            "hide-details": "auto"
          },
          model: {
            value: _vm.election.time_close,
            callback: function callback($$v) {
              _vm.$set(_vm.election, "time_close", $$v);
            },
            expression: "election.time_close"
          }
        }, "v-text-field", !_vm.readonly ? attrs : "", false), !_vm.readonly ? on : ""))];
      }
    }]),
    model: {
      value: _vm.time_close_menu,
      callback: function callback($$v) {
        _vm.time_close_menu = $$v;
      },
      expression: "time_close_menu"
    }
  }, [_vm._v(" "), _vm.time_close_menu ? _c("v-time-picker", {
    attrs: {
      "full-width": "",
      "no-title": ""
    },
    on: {
      "click:minute": function clickMinute($event) {
        return _vm.$refs.close.save(_vm.election.time_close);
      }
    },
    model: {
      value: _vm.election.time_close,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "time_close", $$v);
      },
      expression: "election.time_close"
    }
  }) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-row", {
    attrs: {
      wrap: ""
    }
  }, [_c("v-col", {
    attrs: {
      md: "12",
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "feat-img mx-auto pa-2",
    on: {
      click: function click($event) {
        !_vm.readonly ? _vm.$refs.file_input.click() : false;
      }
    }
  }, [_c("input", {
    ref: "file_input",
    staticClass: "hide",
    attrs: {
      type: "file",
      accept: ".jpeg,.png,.jpg"
    },
    on: {
      change: function change($event) {
        return _vm.onFileChange($event.target.files);
      }
    }
  }), _vm._v(" "), !_vm.election.image ? _c("div", {
    staticClass: "d-flex justify-center align-center flex-column",
    staticStyle: {
      height: "100%"
    }
  }, [_c("v-icon", {
    attrs: {
      size: "60"
    }
  }, [_vm._v("mdi-file-image")]), _vm._v(" "), _c("v-toolbar-title", [_vm._v("\n                                        Feature image or cover photo (landscape)\n                                    ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      elevation: "0"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        !_vm.readonly ? _vm.$refs.file_input.click() : false;
      }
    }
  }, [_vm._v("\n                                        Browse file\n                                    ")])], 1) : _vm._e(), _vm._v(" "), _vm.election.image ? _c("v-img", {
    attrs: {
      alt: "Feature image",
      position: "center center",
      "max-height": "100%",
      "max-width": "100%",
      src: _vm.election.image
    }
  }, [_vm.election.image && !_vm.readonly ? _c("v-btn", {
    staticClass: "ma-n3",
    attrs: {
      small: "",
      absolute: "",
      top: "",
      right: "",
      color: "primary"
    }
  }, [_vm._v("\n                                        Change\n                                    "), _c("v-icon", {
    staticClass: "ml-2"
  }, [_vm._v("mdi-pencil")])], 1) : _vm._e()], 1) : _vm._e()], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: _vm.readonly ? false : true,
      placeholder: "Ex. 2022-2023",
      label: "School year",
      readonly: _vm.readonly,
      "hide-details": "auto"
    },
    model: {
      value: _vm.election.school_year,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "school_year", $$v);
      },
      expression: "election.school_year"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      md: "6",
      cols: "12"
    }
  }, [_c("v-text-field", {
    attrs: {
      filled: _vm.readonly ? false : true,
      placeholder: "Ex. SSG-ELECTION-2022",
      label: "Election Code (no spacing)",
      readonly: _vm.readonly,
      "append-icon": _vm.readonly ? "" : "mdi-reload",
      "hide-details": "auto"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.election.code = _vm.generateCode();
      }
    },
    model: {
      value: _vm.election.code,
      callback: function callback($$v) {
        _vm.$set(_vm.election, "code", $$v);
      },
      expression: "election.code"
    }
  })], 1), _vm._v(" "), !_vm.updating ? _c("v-col", {
    attrs: {
      md: "12",
      cols: "12"
    }
  }, [_c("v-alert", {
    attrs: {
      outlined: "",
      type: "warning",
      color: "brown",
      prominent: "",
      border: "left"
    }
  }, [_vm._v("\n                                Note* Election cannot be edited once it open to the voters.\n                            ")])], 1) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-card", {
    staticClass: "mb-4",
    attrs: {
      outlined: ""
    }
  }, [_c("v-card-text", [_vm.updating ? _c("div", {
    staticClass: "mb-4"
  }, [_vm.readonly ? _c("v-btn", {
    attrs: {
      small: "",
      color: "success",
      outlined: ""
    },
    on: {
      click: function click($event) {
        _vm.readonly = false;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-square-edit-outline")]), _vm._v("\n                    Edit\n                ")], 1) : _c("div", [_c("v-btn", {
    attrs: {
      small: "",
      color: "success"
    },
    on: {
      click: function click($event) {
        _vm.readonly = true;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n                        Save\n                    ")], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-1",
    attrs: {
      small: "",
      color: "error"
    },
    on: {
      click: function click($event) {
        ;
        _vm.readonly = true, _vm.$emit("cancelEdit");
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n                        Cancel\n                    ")], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.positions, function (position, index) {
    return [_c("v-row", {
      key: index
    }, [_c("v-col", {
      attrs: {
        md: "9",
        cols: "12"
      }
    }, [_c("v-text-field", {
      attrs: {
        filled: _vm.readonly ? false : true,
        readonly: _vm.readonly,
        dense: _vm.readonly ? false : true,
        label: "Position name",
        placeholder: "Ex. President",
        "hide-details": "auto"
      },
      model: {
        value: _vm.positions[index].name,
        callback: function callback($$v) {
          _vm.$set(_vm.positions[index], "name", $$v);
        },
        expression: "positions[index].name"
      }
    })], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        md: "3",
        cols: "12"
      }
    }, [_c("v-text-field", {
      attrs: {
        filled: _vm.readonly ? false : true,
        readonly: _vm.readonly,
        min: "1",
        dense: _vm.readonly ? false : true,
        type: "number",
        label: "Maximum votes",
        "hide-details": "auto"
      },
      model: {
        value: _vm.positions[index].max_vote,
        callback: function callback($$v) {
          _vm.$set(_vm.positions[index], "max_vote", $$v);
        },
        expression: "positions[index].max_vote"
      }
    })], 1)], 1)];
  }), _vm._v(" "), !_vm.readonly ? _c("v-row", {
    staticClass: "mb-1"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("v-btn", {
    attrs: {
      outlined: ""
    },
    on: {
      click: _vm.addSlot
    }
  }, [_vm._v("\n                        Add Position\n                        "), _c("v-icon", {
    staticClass: "ml-2"
  }, [_vm._v("mdi-plus")])], 1)], 1)]) : _vm._e()], 2)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.updating ? _c("div", {
    staticClass: "mb-4"
  }, [_vm.readonly ? _c("v-btn", {
    attrs: {
      small: "",
      color: "success",
      outlined: ""
    },
    on: {
      click: function click($event) {
        _vm.readonly = false;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-square-edit-outline")]), _vm._v("\n                    Edit\n                ")], 1) : _c("div", [_c("v-btn", {
    attrs: {
      small: "",
      color: "success"
    },
    on: {
      click: function click($event) {
        _vm.readonly = true;
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-check")]), _vm._v("\n                        Save\n                    ")], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-1",
    attrs: {
      small: "",
      color: "error"
    },
    on: {
      click: function click($event) {
        ;
        _vm.readonly = true, _vm.$emit("cancelEdit");
      }
    }
  }, [_c("v-icon", {
    staticClass: "mr-1",
    attrs: {
      small: ""
    }
  }, [_vm._v("mdi-close")]), _vm._v("\n                        Cancel\n                    ")], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.positions, function (position, index) {
    return [_c("v-card", {
      key: index,
      staticClass: "mb-4",
      attrs: {
        outlined: ""
      }
    }, [_c("v-card-title", [_vm._v('["' + _vm._s(position.name) + '"]')]), _vm._v(" "), _c("v-card-text", [_vm._l(position.candidate, function (rep, i) {
      return [_c("v-row", {
        key: i
      }, [_c("v-col", {
        staticClass: "px-2",
        attrs: {
          md: "1",
          cols: "12"
        }
      }, [_c("v-row", {
        attrs: {
          wrap: ""
        }
      }, [_c("v-col", {
        attrs: {
          md: "12",
          cols: "12"
        }
      }, [_c("div", {
        staticClass: "feat-img mx-auto"
      }, [_c("input", {
        ref: "file_input_".concat(index).concat(i),
        refInFor: true,
        staticClass: "hide",
        attrs: {
          type: "file",
          accept: ".jpeg,.png,.jpg"
        },
        on: {
          change: function change($event) {
            return _vm.onFileChange($event.target.files, index, i);
          }
        }
      }), _vm._v(" "), _c("div", {
        staticStyle: {
          height: "100%"
        },
        on: {
          click: function click($event) {
            !_vm.readonly ? _vm.triggerInput(index, i) : false;
          }
        }
      }, [!_vm.positions[index].candidate[i].image ? _c("div", {
        staticClass: "d-flex justify-center align-center flex-column",
        staticStyle: {
          height: "100%"
        }
      }, [_c("v-icon", [_vm._v("mdi-file-image")]), _vm._v("\n                                                icon/img\n                                            ")], 1) : _vm._e(), _vm._v(" "), _c("v-img", {
        attrs: {
          alt: "icon",
          position: "center center",
          "max-height": "100%",
          "max-width": "100%",
          src: _vm.positions[index].candidate[i].image
        }
      })], 1)])])], 1)], 1), _vm._v(" "), _c("v-col", {
        attrs: {
          md: "11",
          cols: "12"
        }
      }, [_c("v-row", [_c("v-col", {
        attrs: {
          md: "7",
          cols: "12"
        }
      }, [_c("v-text-field", {
        attrs: {
          filled: _vm.readonly ? false : true,
          readonly: _vm.readonly,
          dense: _vm.readonly ? false : true,
          label: "Candidate Name",
          placeholder: "Ex. President",
          "hide-details": "auto"
        },
        model: {
          value: _vm.positions[index].candidate[i].name,
          callback: function callback($$v) {
            _vm.$set(_vm.positions[index].candidate[i], "name", $$v);
          },
          expression: "positions[index].candidate[i].name"
        }
      })], 1), _vm._v(" "), _c("v-col", {
        attrs: {
          md: "5",
          cols: "12"
        }
      }, [_c("v-select", {
        attrs: {
          filled: _vm.readonly ? false : true,
          readonly: _vm.readonly,
          dense: _vm.readonly ? false : true,
          "hide-details": "auto",
          "prepend-inner-icon": !_vm.readonly ? "mdi-plus" : "",
          items: _vm.partylist,
          "item-text": "name",
          "item-value": "id",
          label: "Party Group (optional)"
        },
        on: {
          "click:prepend-inner": function clickPrependInner($event) {
            return _vm.$router.push({
              name: "admin-partylist"
            });
          }
        },
        scopedSlots: _vm._u([{
          key: "item",
          fn: function fn(_ref) {
            var item = _ref.item;
            return [_c("v-avatar", {
              staticStyle: {
                border: "1px solid #ccc"
              },
              attrs: {
                size: "35"
              }
            }, [_c("img", {
              attrs: {
                src: item.images.length > 0 ? _vm.imageSrc(item.images[0]) : "/images/system/noimage.png"
              }
            })]), _vm._v(" "), _c("span", {
              staticClass: "ml-2"
            }, [_vm._v(_vm._s(item.name))])];
          }
        }], null, true),
        model: {
          value: _vm.positions[index].candidate[i].partylist,
          callback: function callback($$v) {
            _vm.$set(_vm.positions[index].candidate[i], "partylist", $$v);
          },
          expression: "positions[index].candidate[i].partylist"
        }
      })], 1)], 1)], 1)], 1)];
    }), _vm._v(" "), !_vm.readonly ? _c("v-row", {
      staticClass: "mb-1"
    }, [_c("div", {
      staticClass: "text-center"
    }, [_c("v-btn", {
      attrs: {
        outlined: ""
      },
      on: {
        click: function click($event) {
          return _vm.addSlot(index);
        }
      }
    }, [_vm._v("\n                            Add " + _vm._s(position.name) + " candidate\n                            "), _c("v-icon", {
      staticClass: "ml-2"
    }, [_vm._v("mdi-plus")])], 1)], 1)]) : _vm._e()], 2)], 1)];
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.feat-img[data-v-7c7f49b7]{\n    width: 100%;\n    /* min-height: ; */\n    border: 2px dashed grey;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.feat-img[data-v-7c9b78b9]{\n    width: 100%;\n    height: 52px;\n    border: 1px dashed grey;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_7c7f49b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_7c7f49b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_7c7f49b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_7c9b78b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_7c9b78b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_7c9b78b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/admin/election/form/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/admin/election/form/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=026e3db8& */ "./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/election/form/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step1.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step1.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue?vue&type=template&id=7c7f49b7&scoped=true& */ "./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true&");
/* harmony import */ var _step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js&");
/* harmony import */ var _step1_vue_vue_type_style_index_0_id_7c7f49b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& */ "./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7c7f49b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/election/form/step1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step2.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step2.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step2.vue?vue&type=template&id=7c8d6138&scoped=true& */ "./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true&");
/* harmony import */ var _step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7c8d6138",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/election/form/step2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step3.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step3.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step3.vue?vue&type=template&id=7c9b78b9&scoped=true& */ "./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true&");
/* harmony import */ var _step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step3.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js&");
/* harmony import */ var _step3_vue_vue_type_style_index_0_id_7c9b78b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& */ "./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7c9b78b9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/election/form/step3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_026e3db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=026e3db8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/index.vue?vue&type=template&id=026e3db8&");


/***/ }),

/***/ "./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_7c7f49b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step1.vue?vue&type=template&id=7c7f49b7&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=template&id=7c7f49b7&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_7c8d6138_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step2.vue?vue&type=template&id=7c8d6138&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step2.vue?vue&type=template&id=7c8d6138&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_7c9b78b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step3.vue?vue&type=template&id=7c9b78b9&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=template&id=7c9b78b9&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_style_index_0_id_7c7f49b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step1.vue?vue&type=style&index=0&id=7c7f49b7&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_style_index_0_id_7c9b78b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/election/form/step3.vue?vue&type=style&index=0&id=7c9b78b9&scoped=true&lang=css&");


/***/ })

}]);