import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Link to="/users" style={{textDecoration:"none"}} className="link">
            <Widget type="user" className="widget"/>
          </Link>
          <Link to="/tasks" style={{textDecoration:"none"}} className="link">
            <Widget type="tasks" className="widget"/>
          </Link>
          <Link to="/users" style={{textDecoration:"none"}} className="link">
            <Widget type="salary" className="widget"/>
          </Link>
          <Link to="/users/ranking" style={{textDecoration:"none"}} className="link">
            <Widget type="ranking" className="widget"/>
          </Link>
          </div>
          <div className="charts">
          <Featured/>
          <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Pending Freelancer Requests</div>
            <div id="pendinglist"><Table/></div>
          </div>
        </div>
    </div>
  )
}

export default Home