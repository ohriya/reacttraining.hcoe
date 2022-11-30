import { useLoaderData } from "react-router-dom";
import {list} from "../post";
import moment from "moment";
export async function fetch() {
    const posts = await list();
    if(!posts){
        return[];
    }
    return posts.map(function(post){
        return{
            ...post,
            created_at: moment(post.created_at).format("MMM Do YYYY")
        };
    });
}
export default function Home() {
    const posts = useLoaderData();
    return (
        <>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {
                 posts.map(function (post)
                {
                    return(  
                <li className="post">
                    <a href="/posts/abusing-chromium-headless-as-a-test-runner/index.html">
                        <date>{posts.created_at}</date>
                        <span>Abusing chromium headless as a test runner</span>
                    </a>
                </li>
                )})}
            </ul>
        </>
    )
}
