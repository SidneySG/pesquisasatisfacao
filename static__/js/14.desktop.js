(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/lib/settings.js":
/*!*****************************!*\
  !*** ./src/lib/settings.js ***!
  \*****************************/
/*! exports provided: baseUrl, requestHeaders, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseUrl\", function() { return baseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestHeaders\", function() { return requestHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction getBaseUrl() {\n  if (window.location.origin.includes('localhost')) {\n    return 'http://localhost:8000/api';\n  }\n\n  return window.location.origin;\n}\n\nvar baseUrl = getBaseUrl(); //export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwNjkxMTU3LCJleHAiOjE2MDMyODMxNTd9.uCLVNanypym2GLpGHhVUAVtwkG6R8saZWPPCHOyqOgk';\n\nvar requestHeaders = {\n  headers: {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json',\n    'Access-Control-Allow-Origin': '*' //Authorization: `Bearer ${token}`,\n\n  }\n};\nfunction request() {\n  return {\n    getOrganisationUnits: function getOrganisationUnits() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnits\"), requestHeaders);\n    },\n    getFieldsBySeccionId: function getFieldsBySeccionId(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/fieldsBysectionID?section_id=\").concat(id), requestHeaders);\n    },\n    getFormByID: function getFormByID(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/forms?id=\").concat(id), requestHeaders);\n    },\n    getForms: function getForms() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/forms\"), requestHeaders);\n    },\n    postQuickForm: function postQuickForm(values) {\n      console.log(values);\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/quickForm\"), values, requestHeaders);\n    },\n    postForm: function postForm(data) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/forms\"), data, requestHeaders);\n    },\n    getFormByOrgUnit: function getFormByOrgUnit(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/forms?attribute_set.org_units.id=\").concat(id), requestHeaders);\n    },\n    getFormSectionsByFormID: function getFormSectionsByFormID(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/sectionsByFormID?form_id=\").concat(id), requestHeaders);\n    },\n    getEntityByID: function getEntityByID(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/entities/\").concat(id), requestHeaders);\n    },\n    getEntities: function getEntities(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/entities\"), requestHeaders);\n    },\n    getEntityDependencies: function getEntityDependencies(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/entities-depemdencies/\").concat(id), requestHeaders);\n    },\n    getSectionsByIDs: function getSectionsByIDs(ids) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/sections?\").concat(ids.map(function (id) {\n        return \"id_in=\".concat(id);\n      }).join('&')), requestHeaders);\n    },\n    getOrganisationUnitsProximity: function getOrganisationUnitsProximity(lat, lng) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnitsProximity?lat=\").concat(lat, \"&lng=\").concat(lng), requestHeaders);\n    },\n    getOrganisationUnitsByIDs: function getOrganisationUnitsByIDs(ids) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnits?orgUnitType=Institui\\xE7\\xE3o&\").concat(ids.map(function (id) {\n        return \"id_in=\".concat(id);\n      }).join('&')), requestHeaders);\n    },\n    getOrganisationUnitByID: function getOrganisationUnitByID(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnits?id=\").concat(id), requestHeaders);\n    },\n    postOrganisationUnits: function postOrganisationUnits(data) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/orgUnits\"), data, requestHeaders);\n    },\n    getOrganisationUnitTypes: function getOrganisationUnitTypes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnitTypes\"), requestHeaders);\n    },\n    getOrganisationUnitLevels: function getOrganisationUnitLevels() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/orgUnitLevels\"), requestHeaders);\n    },\n    getValueTypes: function getValueTypes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/types\"), requestHeaders);\n    },\n    getCategoryCombos: function getCategoryCombos() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-combos\"), requestHeaders);\n    },\n    getCategoryCombosByFilter: function getCategoryCombosByFilter(q) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-combos?\").concat(q), requestHeaders);\n    },\n    getCategoryComboCategories: function getCategoryComboCategories() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-combo-categories\"), requestHeaders);\n    },\n    getOptionSets: function getOptionSets() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/optionSets\"), requestHeaders);\n    },\n    getOptions: function getOptions() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/options\"), requestHeaders);\n    },\n    postOptions: function postOptions(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/options\"), values, requestHeaders);\n    },\n    getSections: function getSections() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/sections\"), requestHeaders);\n    },\n    postSection: function postSection(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/sections\"), values, requestHeaders);\n    },\n    postStage: function postStage(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/stages\"), values, requestHeaders);\n    },\n    postAttributeValueSet: function postAttributeValueSet(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/valueSets\"), values, requestHeaders);\n    },\n    getEntityValueSetsByEntityID: function getEntityValueSetsByEntityID(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/entityValueSets?entity__id=\").concat(id), requestHeaders);\n    },\n    postEntityValueSet: function postEntityValueSet(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/entityValueSets\"), values, requestHeaders);\n    },\n    getAttributeValueSets: function getAttributeValueSets(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributeValueSets?attributeSet__id=\").concat(id), requestHeaders);\n    },\n    getAttributeValueSet: function getAttributeValueSet(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attribute-value-sets/\").concat(id), requestHeaders);\n    },\n    getStages: function getStages() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/stages\"), requestHeaders);\n    },\n    getStage: function getStage(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/stages/\").concat(id), requestHeaders);\n    },\n    getCategories: function getCategories() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/categories\"), requestHeaders);\n    },\n    getCategoryOptions: function getCategoryOptions() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-options\"), requestHeaders);\n    },\n    postAttributeSets: function postAttributeSets(data) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/attribute-sets\"), data, requestHeaders);\n    },\n    getAttributeSet: function getAttributeSet() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributeSets\"), requestHeaders);\n    },\n    getAttributeSetById: function getAttributeSetById(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributeSets/\").concat(id), requestHeaders);\n    },\n    getAttributeSetByOrgUnit: function getAttributeSetByOrgUnit(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributeSets?orgUnits__id=\").concat(id), requestHeaders);\n    },\n    getAttributeSetDependencies: function getAttributeSetDependencies(id) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributeSetDepemdencies/\").concat(id), requestHeaders);\n    },\n    postAttributes: function postAttributes(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/attributes\"), values, requestHeaders);\n    },\n    getAttributes: function getAttributes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/attributes\"), requestHeaders);\n    },\n    getDataDimensionTypes: function getDataDimensionTypes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/data-dimension-types\"), requestHeaders);\n    },\n    getTypes: function getTypes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/types\"), requestHeaders);\n    },\n    getControls: function getControls() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/controls\"), requestHeaders);\n    },\n    getPeriodTypes: function getPeriodTypes() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/period-types\"), requestHeaders);\n    },\n    getValidationRules: function getValidationRules() {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/validationRules\"), requestHeaders);\n    },\n    postValidationRules: function postValidationRules(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/validationRules\"), values, requestHeaders);\n    },\n    postCategoryCombos: function postCategoryCombos(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/category-combos\"), values, requestHeaders);\n    },\n    postCategory: function postCategory(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/categories\"), values, requestHeaders);\n    },\n    postCategoryOptions: function postCategoryOptions(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/category-options\"), values, requestHeaders);\n    },\n    postOptionSets: function postOptionSets(values) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(baseUrl, \"/option-sets\"), values, requestHeaders);\n    },\n    getCategoryCombosIN: function getCategoryCombosIN(idsIn) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-combos?\").concat(idsIn), requestHeaders);\n    },\n    getOptionSetsIN: function getOptionSetsIN(idsIn) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/option-sets?\").concat(idsIn), requestHeaders);\n    },\n    getCategoriesIN: function getCategoriesIN(idsIn) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/categories?\").concat(idsIn), requestHeaders);\n    },\n    getCategoryComboCategoriesIN: function getCategoryComboCategoriesIN(idsIn) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseUrl, \"/category-combo-categories?\").concat(idsIn), requestHeaders);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/lib/settings.js?");

/***/ }),

/***/ "./src/pages/RegistrarInstituicao.mobile.js":
/*!**************************************************!*\
  !*** ./src/pages/RegistrarInstituicao.mobile.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegistrarInstituicao; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ \"./node_modules/@material-ui/lab/esm/index.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/settings */ \"./src/lib/settings.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar mapStyles = {\n  height: \"450px\",\n  width: \"100%\"\n};\nvar options = {\n  fillColor: \"#2196F3\",\n  strokeColor: \"#2196F3\",\n  fillOpacity: 0.5,\n  strokeOpacity: 1,\n  strokeWeight: 2,\n  clickable: false,\n  draggable: false,\n  editable: false,\n  geodesic: false,\n  zIndex: 1\n};\nvar regiaoPaiOptions = {\n  strokeColor: \"#2196F3\",\n  fillOpacity: 0.5,\n  strokeOpacity: 1,\n  strokeWeight: 2,\n  clickable: false,\n  draggable: false,\n  editable: false,\n  geodesic: false,\n  zIndex: 1\n};\nvar drawerOptions = {\n  drawingControl: true,\n  drawingControlOptions: {\n    drawingModes: [\"polygon\"]\n  },\n  polygonOptions: {\n    fillColor: \"#2196F3\",\n    strokeColor: \"#2196F3\",\n    fillOpacity: 0.5,\n    strokeWeight: 2,\n    clickable: true,\n    editable: true,\n    draggable: true,\n    zIndex: 1\n  }\n};\nvar defaultCenter = {\n  //lat: 41.3851, lng: 2.1734\n  lat: -25.953724,\n  lng: 32.588711\n};\nvar center = {\n  lat: 24.886,\n  lng: -70.268\n};\nvar geoJsonFile = null;\nvar googleGeoJson = [];\nvar areasGeograficas = [];\nvar zoom = 13;\nvar areaData = {};\nvar initialValues = {};\nvar orgUnits = [];\nvar orgUnitLevels = [];\nvar organisationUnitTypes = [];\nvar images = {};\n\nfunction handleLoadImage(e, key) {\n  var files = e.target.files;\n  var reader = new FileReader();\n  reader.readAsDataURL(files[0]);\n\n  reader.onloadend = function () {\n    images[key] = reader.result;\n  };\n}\n\nfunction RegistrarInstituicao() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),\n      map = _useState2[0],\n      setMap = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),\n      mapReady = _useState4[0],\n      setMapReady = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),\n      niveis = _useState6[0],\n      setNiveis = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),\n      polygnCordinates = _useState8[0],\n      setPolygnCordinates = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),\n      regiaoPaiCordinates = _useState10[0],\n      setRegiaoPaiCordinates = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),\n      selectedAreaGeografica = _useState12[0],\n      setSelectedAreaGeografica = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),\n      isLoading = _useState14[0],\n      setIsLoading = _useState14[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({\n    drawingMode: \"polygon\"\n  }),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    function init() {\n      return _init.apply(this, arguments);\n    }\n\n    function _init() {\n      _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var _yield$Promise$all, _yield$Promise$all2, requestOrgUnits, requestOrgUnitsLevels, requestOrganisationUnitTypes;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsLoading(true);\n                _context.next = 3;\n                return Promise.all([Object(_lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"request\"])().getOrganisationUnits(), Object(_lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"request\"])().getOrganisationUnitLevels(), Object(_lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"request\"])().getOrganisationUnitTypes()]);\n\n              case 3:\n                _yield$Promise$all = _context.sent;\n                _yield$Promise$all2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_yield$Promise$all, 3);\n                requestOrgUnits = _yield$Promise$all2[0];\n                requestOrgUnitsLevels = _yield$Promise$all2[1];\n                requestOrganisationUnitTypes = _yield$Promise$all2[2];\n                orgUnits = requestOrgUnits.data;\n                orgUnitLevels = requestOrgUnitsLevels.data;\n                organisationUnitTypes = requestOrganisationUnitTypes.data;\n                setIsLoading(false);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _init.apply(this, arguments);\n    }\n\n    init();\n  }, []);\n\n  function loadGeoJson(e) {\n    setMapReady(false);\n    geoJsonFile = e.target.files[0];\n    var reader = new FileReader();\n    geoJsonFile = reader.readAsText(geoJsonFile);\n\n    reader.onload = function () {\n      var result = JSON.parse(reader.result);\n      var lats = [];\n      var lngs = [];\n      googleGeoJson = result.features[0].geometry.coordinates[0][0].map(function (x) {\n        lats.push(x[1]);\n        lngs.push(x[0]);\n        return {\n          lng: x[0],\n          lat: x[1]\n        };\n      });\n      var cx = (Math.min.apply(Math, lats) + Math.max.apply(Math, lats)) / 2;\n      var cy = (Math.min.apply(Math, lngs) + Math.max.apply(Math, lngs)) / 2;\n      defaultCenter = {\n        lat: cx,\n        lng: cy\n      };\n      areaData.coordenadas = googleGeoJson;\n      setPolygnCordinates(googleGeoJson);\n      setMapReady(true);\n    };\n  }\n\n  var onLoad = function onLoad(polygon) {//console.log(\"polygon: \", polygon);\n  };\n\n  var noDraw = function noDraw() {\n    setState(function set(prevState) {\n      return Object.assign({}, prevState, {\n        drawingMode: \"maker\"\n      });\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__[\"Formik\"], {\n    initialValues: initialValues,\n    onSubmit: function onSubmit(values, _ref) {\n      var setSubmitting = _ref.setSubmitting;\n\n      //setShowSnackbar(true);\n      function save(_x) {\n        return _save.apply(this, arguments);\n      }\n\n      function _save() {\n        _save = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(v) {\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  Object.keys(images).forEach(function (k) {\n                    v[k] = images[k];\n                  });\n                  _context2.next = 3;\n                  return Promise.resolve(Object(_lib_settings__WEBPACK_IMPORTED_MODULE_10__[\"request\"])().postOrganisationUnits(JSON.stringify(v)));\n\n                case 3:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n        return _save.apply(this, arguments);\n      }\n\n      save(values);\n      setTimeout(function () {\n        setSubmitting(false);\n      }, 500);\n    }\n  }, function (props) {\n    var values = props.values,\n        touched = props.touched,\n        errors = props.errors,\n        dirty = props.dirty,\n        isSubmitting = props.isSubmitting,\n        handleChange = props.handleChange,\n        handleBlur = props.handleBlur,\n        handleSubmit = props.handleSubmit,\n        handleReset = props.handleReset,\n        setFieldValue = props.setFieldValue;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      container: true,\n      spacing: 2\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n      variant: \"h6\"\n    }, \"Facility Registration Form\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n      value: values.name,\n      error: errors.name && touched.name,\n      helperText: errors.name,\n      name: \"name\",\n      id: \"name\",\n      margin: \"dense\",\n      onChange: handleChange,\n      onBlur: handleBlur,\n      variant: \"outlined\",\n      label: \"Name (*)\",\n      fullWidth: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n      value: values.shortName,\n      error: errors.shortName && touched.shortName,\n      helperText: errors.shortName,\n      name: \"shortName\",\n      id: \"shortName\",\n      margin: \"dense\",\n      onChange: handleChange,\n      onBlur: handleBlur,\n      variant: \"outlined\",\n      label: \"ShortName (*)\",\n      fullWidth: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n      value: values.displayName,\n      error: errors.displayName && touched.displayName,\n      helperText: errors.displayName,\n      name: \"displayName\",\n      id: \"displayName\",\n      margin: \"dense\",\n      onChange: handleChange,\n      onBlur: handleBlur,\n      variant: \"outlined\",\n      label: \"DisplayName (*)\",\n      fullWidth: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n      label: \"Type\",\n      fullWidth: true,\n      select: true,\n      helperText: errors.orgUnitType && touched.orgUnitType,\n      name: \"orgUnitType\",\n      id: \"orgUnitType\",\n      variant: \"outlined\",\n      margin: \"dense\",\n      onChange: handleChange,\n      onBlur: handleBlur\n    }, organisationUnitTypes.map(function (l) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"MenuItem\"], {\n        key: l,\n        value: l\n      }, l);\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__[\"Autocomplete\"], {\n      onChange: function onChange(e, v) {\n        setFieldValue('parent', v);\n      },\n      fullWidth: true,\n      id: \"parent\",\n      size: \"small\",\n      getOptionLabel: function getOptionLabel(option) {\n        return option.displayName;\n      },\n      options: orgUnits,\n      style: {\n        minWidth: 200\n      },\n      renderInput: function renderInput(params) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n          variant: \"outlined\",\n          margin: \"dense\",\n          fullWidth: true\n        }, params, {\n          label: \"Parent (*)\"\n        }));\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n      onChange: function onChange(e) {\n        return handleLoadImage(e, 'logo');\n      },\n      accept: \"image/*\",\n      style: {\n        display: 'none'\n      },\n      id: \"logo-file\",\n      multiple: true,\n      type: \"file\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"label\", {\n      htmlFor: \"logo-file\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      disableElevation: true,\n      component: \"span\"\n    }, \"Upload Logo\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n      onChange: function onChange(e) {\n        return handleLoadImage(e, 'bgImage');\n      },\n      accept: \"image/*\",\n      style: {\n        display: 'none'\n      },\n      id: \"bg-file\",\n      multiple: true,\n      type: \"file\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"label\", {\n      htmlFor: \"bg-file\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      disableElevation: true,\n      component: \"span\"\n    }, \"Upload Background Image\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], {\n      label: \"Description\",\n      variant: \"outlined\",\n      margin: \"dense\",\n      multiline: true,\n      fullWidth: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 6\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n      variant: \"button\",\n      color: \"initial\"\n    }, \"Area geogr\\xE1fica\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 6,\n      style: {\n        textAlign: 'right'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"label\", {\n      htmlFor: \"upload-photo\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n      onChange: loadGeoJson,\n      style: {\n        display: 'none'\n      },\n      id: \"upload-photo\",\n      name: \"upload-photo\",\n      type: \"file\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      disabled: true,\n      color: \"primary\",\n      variant: \"contained\",\n      disableElevation: true,\n      component: \"span\"\n    }, \"Carregar\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Paper\"], {\n      variant: \"outlined\",\n      style: {\n        minHeight: '450px'\n      }\n    }, mapReady ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__[\"LoadScript\"], {\n      libraries: [\"drawing\", \"places\"] //googleMapsApiKey='AIzaSyCkSLY0dJ1OTSqDsuaojBCAMxUsF3Ihrr8'\n      ,\n      id: \"script-loader\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__[\"GoogleMap\"], {\n      id: \"example-map\",\n      mapContainerStyle: mapStyles,\n      draggable: true,\n      zoom: zoom,\n      center: defaultCenter\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__[\"Polygon\"], {\n      onLoad: onLoad,\n      paths: polygnCordinates,\n      options: options\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__[\"Polygon\"], {\n      onLoad: onLoad,\n      paths: regiaoPaiCordinates,\n      options: regiaoPaiOptions\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__[\"DrawingManager\"], {\n      drawingMode: \"polygon\",\n      options: {\n        drawingControl: true,\n        drawingControlOptions: {\n          drawingModes: [\"polygon\"]\n        },\n        polygonOptions: {\n          fillColor: \"#2196F3\",\n          strokeColor: \"#2196F3\",\n          fillOpacity: 0.5,\n          strokeWeight: 2,\n          clickable: true,\n          editable: true,\n          draggable: true,\n          zIndex: 1\n        }\n      },\n      onPolygonComplete: function onPolygonComplete(poly) {\n        /*const polyArray = poly.getPath().getArray();\r\n        let paths = [];\r\n        polyArray.forEach(function(path) {\r\n          paths.push({ latitude: path.lat(), longitude: path.lng() });\r\n        });\r\n        console.log(\"onPolygonComplete\", polyArray);*/\n        var cords = poly.getPath().getArray().map(function (x) {\n          return {\n            lat: x.lat(),\n            lng: x.lng()\n          };\n        });\n        setFieldValue('coordinates', cords);\n        noDraw();\n      }\n      /*onOverlayComplete={poly => {\r\n        const polyArray = poly.getPath().getArray();\r\n        let paths = [];\r\n        polyArray.forEach(function(path) {\r\n          paths.push({ latitude: path.lat(), longitude: path.lng() });\r\n        });\r\n        console.log(\"onOverlayComplete\", polyArray);\r\n      }}*/\n\n    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      style: {\n        textAlign: 'center',\n        marginTop: '220px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n      item: true,\n      sm: 12,\n      style: {\n        textAlign: 'right'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      color: \"primary\",\n      disableElevation: true,\n      type: \"submit\",\n      variant: \"contained\"\n    }, \"Save\"))));\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/RegistrarInstituicao.mobile.js?");

/***/ })

}]);