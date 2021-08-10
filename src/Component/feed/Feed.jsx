import Share from "../Share/share";
import Post from "../Post/post";
import "./Feed.css";
import {Posts} from "../../dummydata";
export default function Feed() {
    return (
            <div className="feed">
                <div className="feedWrapper">
                    <Share/>
                    {Posts.map((p)=>(
                         <Post key={p.id} post={p}/>
                    ))}
                </div>
            </div>
    )
}
