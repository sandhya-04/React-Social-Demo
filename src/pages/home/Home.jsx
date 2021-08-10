import Rightbar from "../../Component/rightbar/Rightbar";
import Feed from "../../Component/feed/Feed";
import Sidebar from "../../Component/sidebar/Sidebar";
import Topbar from "../../Component/topbar/Topbar";
import "./Home.css";
export default function Home() {
    return (
        <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed/>
          <Rightbar/>
        </div>
      </>
    )
}


