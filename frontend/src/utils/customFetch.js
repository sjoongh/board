const customFetch = (method, cache = "force-cache") => (path, body) => {
  return fetch("http://localhost:3000" + path, {
      method,
      body,
      cache,
      headers: {
          "Content-Type": "application/json",
          "Cache-Control": "max-age=86400",
      },
  });
};
export const updateGetReq = customFetch("GET", "no-cache");
export const getReq = customFetch("GET");
export const postReq = customFetch("POST");
export const putReq = customFetch("PUT");
export const deleteReq = customFetch("DELETE");