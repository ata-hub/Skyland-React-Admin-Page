import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">SkylandAdmin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <AccountBoxOutlinedIcon className="icon"/>
                        <span>Freelancers</span>
                    </li>
                </Link>
                <Link to="/tasks" style={{textDecoration:"none"}}>
                    <li>
                        <AssignmentOutlinedIcon className="icon"/>
                        <span>Tasks</span>
                    </li>
                </Link>
                <p className="title">USEFUL</p>
                <li>
                    <NotificationsActiveOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            
        </div>
    </div>
  )
}

export default Sidebar