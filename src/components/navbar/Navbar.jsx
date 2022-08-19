import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  const [userList,setUserList] = useState([]);
  const [count, setCount] = useState();

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(userList.length===0){
      fetch("http://localhost:8080/api/v1/freelancer/unvalidated").then((response)=>response.json()).then(data =>{
      console.log(data);
      setUserList(data);
      
    });
    }
    
  },[]);
  const resetNotification =()=>{
    
  };
  
  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              English
          </div>
          <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick = {()=>dispatch({type:"TOGGLE"})}/>
              
          </div>
          <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
              
          </div>
          <div className="item" onClick={()=>resetNotification()}>
            <HashLink smooth to='/#pendinglist' >  
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter" >{userList.length}</div>
            </HashLink>
          </div>
          <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
          </div>
          <div className="item">
              <ListOutlinedIcon className="icon"/>
              
          </div>
          <div className="item">
              <img
              src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600088/29213190-businessman-silhouette-avatar-profile-picture.jpg?fj=1"
              alt=""
              className="avatar"
              />
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar