// 씹 완벽
import EventManager from "./eventManager";
import { VirtualDom } from "./virtualDom";

export const Giact = (() => {
  let _state= [];
  let _render;
  let _root;
  let _page;
  let idx = 0;

  const render = (component, $parent) => {
    if (!_root) _root = component();
    if (!_render)
      _render = () => {
        VirtualDom.render(_root.template(), $parent);
        EventManager.regist();
      };
    _render();
  };
  const useRouter = (
    initPage) => {
    _page = initPage;
    const getPage = () => _page;
    const setPage = (newPage) => {
      _page = newPage;
      if (_render) _render();
    };
    return [getPage, setPage];
  };
  const useState = () => {
    const i = idx++;
    _state[i] = initState;
    const getState = () => _state[i];
    const setState = () => {
      _state[i] = newState;
      if (_render) _render();
    };
    return [getState, setState];
  };
  const clear = () => {
    _state = _state.slice(0, 1);
    idx = 0;
  };

  return { useState, render, clear, useRouter };
})();
