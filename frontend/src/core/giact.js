exports.__esModule = true;
exports.Giact = void 0;
var eventManager_1 = require("./eventManager");
var virtualDom_1 = require("./virtualDom");
exports.Giact = (function () {
    var _state = [];
    var _render;
    var _root;
    var _page;
    var idx = 0;
    var render = function (component, $parent) {
        if (!_root)
            _root = component();
        if (!_render)
            _render = function () {
                virtualDom_1.VirtualDom.render(_root.template(), $parent);
                eventManager_1["default"].regist();
            };
        _render();
    };
    var useRouter = function (initPage) {
        _page = initPage;
        var getPage = function () { return _page; };
        var setPage = function (newPage) {
            _page = newPage;
            if (_render)
                _render();
        };
        return [getPage, setPage];
    };
    var useState = function (initState) {
        var i = idx++;
        _state[i] = initState;
        var getState = function () { return _state[i]; };
        var setState = function (newState) {
            _state[i] = newState;
            if (_render)
                _render();
        };
        return [getState, setState];
    };
    var clear = function () {
        _state = _state.slice(0, 1);
        idx = 0;
    };
    return { useState: useState, render: render, clear: clear, useRouter: useRouter };
})();
