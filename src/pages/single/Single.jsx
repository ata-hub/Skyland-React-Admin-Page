
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import Tasktable from "../../components/datatable/Tasktable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./single.scss"

const Single = () => {
  //fetch task of freelancer, props contain the id value of freelancer
  const params = useParams();
  const [user,setUser] = useState([]);

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(user.length===0){
      fetch(`http://localhost:8080/api/v1/freelancer/${params.userId}`).then((response)=>response.json()).then(data =>{
      console.log(data);
      setUser(data);
    });
    }
    
  },[]);
  
  console.log("freelancer id:", params.userId)
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            alt=""
            className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">{user.name} {user.surname}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{user.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
          <div className="right">
          <Tasktable freelancerId={params.userId}/>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single