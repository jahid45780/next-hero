import { getPost } from "@/Api/service";
import Link from "next/link";

const PostPage = async () => {

    const postData = await getPost()
   

    return (
        <div className=" grid grid-cols-3" >
          {
            postData.slice(0,20).map(({title, body, id})=>
            <div className=" border-2 border-red-800 p-3 " key={id}>
               <h1>  {title} </h1>
               <h1> {body} </h1>
             <Link href={`/post/${id}`}> <button className=" btn bg-fuchsia-500 border-s-2 border-e-4 border-orange-400 p-3 mt-2 rounded-xl" > Post Detail </button> </Link>  
            </div>)
          }
        </div>
    );
};

export default PostPage;