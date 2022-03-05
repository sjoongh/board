export const Router = (() => {
    const route = (path) => {
      history.pushState({ data: "push" }, "", path);
      window.dispatchEvent(new Event("route"));
    };
    return { route };
  })();
  