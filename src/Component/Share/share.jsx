import "./share.css";
import {PermMedia,Label, Room, EmojiEmotions} from "@material-ui/icons";
export default function share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="images/Images/a.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="what is in your mind..." className="shareText" />
                </div>
                 <hr className="sharehr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareoption">
                        <PermMedia htmlColor="tomato" className="shareIcons"/>
                        <span className="shareOptionText">Photos or Videos</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor="blue" className="shareIcons"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor="green" className="shareIcons"/>
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcons"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                      <div className="shareButton">Share</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
