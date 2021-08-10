import "./post.css";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../dummydata";
import {useState} from "react";

export default function Post({ post }){
    const [like,setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)

    const likeHandler= () =>{
        setlike(isliked ? like -1 : like +1)
        setisliked(!isliked)
    }
    return (
        <div className= "post">
            <div className="postWrapper">
                <div className="postTop">
                <div className="postLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfile" />
                    <span className="username">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="datetime">{post.date}</span>
                </div>
                    <div className="postTopRight">
                  <MoreVert className="postIcon"/>
                </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="images/Images/like.png" onClick={likeHandler} alt="" className="bottomleft" />
                        <img src="images/Images/love.jpg" onClick={likeHandler} alt="" className="bottomleft" />
                        <span className="postLikeCounter">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{post.comment} comments</span>
                    </div>
                </div>
                </div>

        </div>
    )
}