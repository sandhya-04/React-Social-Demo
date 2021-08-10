import "./friend.css";

export default function Friend({user}) {
    return (
        <div>
             <li className="sidebarfriend">
                         <img src={user.profilePicture} alt="" className="sidebarimg" />
                         <span className="sidebarfriendName">{user.username}</span>
                     </li>
        </div>
    )
}
