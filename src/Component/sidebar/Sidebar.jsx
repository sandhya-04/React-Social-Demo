import "./Sidebar.css";
import {RssFeed , Bookmark , HelpOutline, WorkOutline, Event, School,Chat, PlayCircleFilledOutlined} from "@material-ui/icons";
import {Users} from "../../dummydata";
import Friend from "../Friend/friend";
export default function Sidebar() {
    return (
        
         <div className="sidebar">
             <div className="sidebarWrapper">
                 <ul className="sidebarItem">
                     <li className="sidebarListItem">
                        <RssFeed className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Feed</span>
                     </li>
                     <li className="sidebarListItem">
                        <Bookmark className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Bookmark</span>
                     </li>
                     <li className="sidebarListItem">
                        <Chat className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Chat</span>
                     </li>
                     <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Videos</span>
                     </li>
                     <li className="sidebarListItem">
                        <HelpOutline className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Questions</span>
                     </li>
                     <li className="sidebarListItem">
                        <WorkOutline className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Jobs</span>
                     </li>
                     <li className="sidebarListItem">
                        <Event className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Events</span>
                     </li>
                     <li className="sidebarListItem">
                        <School className = "sidebarIcon"/>
                        <span className="sidebarListItemIcons">Feed</span>
                     </li>
                 </ul>

                 <button className="sidebarbutton">show more</button>

                 <hr className="sidebarhr" />
                 <ul className="sidebarfriendList">
                 {Users.map(u=>(
                          <Friend key={u.id} user={u}/>
                      ))}
                     
                 </ul>
             </div>
         </div>
        
    )
}
