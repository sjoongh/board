import { Post, PostGet, PostModify, PostWrite } from "../types/post";
import { createQueryString } from "../utils/createQueryString";
import { getReq, postReq, putReq, updateGetReq } from "../utils/customFetch";

export const getPost = async PostGet => {
    return await (await getReq(`/post${createQueryString(condition)}`)).json();
}
export const getRefreshPost = async PostGet => {
    return await (
        await updateGetReq(`/post${createQueryString(condition)}`))
        .json();
}
export const setPost = async PostGet => {
    return await (await getReq("/post", JSON.stringify(newPost))).json();
}
export const putPost = async PostGet => {
    return await (await getReq("/post", JSON.stringify(newPost))).json();
}