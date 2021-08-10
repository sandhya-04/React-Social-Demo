import "./Rightbar.css";
import {Users} from "../../dummydata";
import Online from "../Online/online";
export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
             <div className="birthdayContainer">
                        <img src="images/Images/box.png" alt="" className="birthdayImg" />
                        <span className="birthdayText"><b>Sandhya</b> and 3 others <b>have a birthday</b></span>
                    </div>

                    <img src="images/Images/ad.jpg" alt="" className="rightAd" />

                  <h4 className="RightbarTitle">Online Friends</h4>
                  <ul className="rightbarFreindList">
                      {Users.map(u=>(
                          <Online key={u.id} user={u}/>
                      ))}
                  </ul>
            </>
        )
    }

    const ProfileRightBar = () =>{
        return (
                        <>
                            <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Alwar</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="images/Images/a.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nitisha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="images/Images/b.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Prince Mittal</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="images/Images/c.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sandhya Singh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="images/Images/a.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sahithi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="images/Images/e.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rishi Gurjar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="images/Images/e.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Indraneel</span>
          </div>
        </div>

                        </>
        )
    }
    return (
            <div className="rightbar">
                <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightbar />}
                </div>
            </div>
    )
}
