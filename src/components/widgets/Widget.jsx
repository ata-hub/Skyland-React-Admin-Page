import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
const Widget = ( {type} ) => {
  let data;
  const amount=100;
  const diff=20;
  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)"}}/>,
      };
      break;
      case "tasks":
      data={
        title:"TASKS",
        isMoney:false,
        link: "View all tasks",
        icon: <AssignmentOutlinedIcon className="icon" style={{color:"white", backgroundColor:"rgba(0,0,255,0.6)"}}/>,
      };
      break;
      case "salary":
      data={
        title:"SALARY",
        isMoney:false,
        link: "See all user salaries",
        icon: <LocalAtmIcon className="icon" style={{color:"black", backgroundColor:"rgba(17, 140, 79, 1)"}}/>,
      };
      break;
      case "ranking":
      data={
        title:"RANKING",
        isMoney:false,
        link: "View the freelancer rankings",
        icon: <LeaderboardOutlinedIcon className="icon" style={{color:"darkblue", backgroundColor:"rgba(246,190,0,1)"}}/>,
      };
      break;
      default:
        break;
  }
  
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon/>
          {diff} %
        </div>
          {data.icon}
      </div>
    </div>
  )
}

export default Widget