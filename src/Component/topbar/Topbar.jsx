import "./Topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <div className="logo">Himanshu Khandelwal</div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search for.." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <div className="topbarLink">Timeliner</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                    <Person/>
                    <div className="topbarIconBadge">1</div>
                    </div>
                    <div className="topbarIconItems">
                    <Chat/>
                    <div className="topbarIconBadge">2</div>
                    </div>
                    <div className="topbarIconItems">
                    <Notifications/>
                    <div className="topbarIconBadge">3</div>
                    </div>
                </div>
                <img src="images/Images/a.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
