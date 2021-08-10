import "./profile.css"
import Rightbar from "../../Component/rightbar/Rightbar";
import Feed from "../../Component/feed/Feed";
import Sidebar from "../../Component/sidebar/Sidebar";
import Topbar from "../../Component/topbar/Topbar";
export default function profile() {
    return (
        <>
        <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="images/Images/bhj.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="images/Images/c.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Himanshu Khandelwal</h4>
                <span className="profileInfoDesc"><b>Never Stop growing!</b></span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
    )
}
