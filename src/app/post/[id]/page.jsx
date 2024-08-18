import { postDetailPage } from "@/Api/service";

const PostDetailPage = async ({params}) => {
     const {title, body} = await postDetailPage(params.id)
    return (
        <div>
           <h1> {title} </h1>
           <h1> {body} </h1>
        </div>
    );
};

export default PostDetailPage;