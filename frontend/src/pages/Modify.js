import PostInputContainer from "../components/PostInputContainer";
import { div } from "../core/h";
import { Giact } from "../core/giact";
import Button from "../components/Button";
import { getRefreshPost, putPost } from "../api/post";
import { Router } from "../core/router";
import "../../public/css/write.scss";
function Modify({ params }) {
    const [writer, setWriter] = Giact.useState("");
    const [title, setTitle] = Giact.useState("");
    const [content, setContent] = Giact.useState("");
    const checkAllInput = () => {
        return !(!writer() || !title() || !content());
    };
    const handleChangeWriter = (e) => {
        setWriter(e.target.value);
    };
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };
    const handleClickSubmit = async () => {
        if (!checkAllInput())
            return alert("모든 정보를 입력해주세요");
        putPost({
            id: parseInt(params[0]),
            writer: writer(),
            title: title(),
            content: content(),
        });
        Router.route("/");
    };
    (async () => {
        const data = await getRefreshPost({ id: parseInt(params[0]) });
        if (data.length === 0) {
            alert("존재하지 않는 게시글입니다.");
            Router.route("/");
            return;
        }
        setWriter(data[0].writer);
        setTitle(data[0].title);
        setContent(data[0].content);
    })();
    const postInputContainer = PostInputContainer().template;
    const button = Button().template;
    return {
        template: () => div({ class: "page center-box" }, [
            postInputContainer({
                writer: handleChangeWriter,
                title: handleChangeTitle,
                content: handleChangeContent,
            }, writer(), title(), content()),
            button({
                name: "수정",
                className: "modify-btn",
                onClick: handleClickSubmit,
            }),
        ]),
    };
}
export default Modify;