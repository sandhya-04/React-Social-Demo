import "./online.css"

export default function online({user}) {
    return (
        <div>
            <li className="rightbarFriend">
                          <div className="rightbarProfileImgContainer">
                              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />

                              <span className="rightbarOnline"></span>
                          </div>
                          <span className="rightbarusername">{user.username}</span>
                      </li>
        </div>
    )
}
