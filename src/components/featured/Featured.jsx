import "./featured.scss"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
const Featured = () => {
  const [taskList,setUserList] = useState([]);

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(taskList.length===0){
      fetch("http://localhost:8080/api/v1/tasks").then((response)=>response.json()).then(data =>{
      console.log(data);
      setUserList(data);
    });
    }
    
  },[]);
  const countDoneTasks=()=>
{
  let count=0;
  for(let i = 0; i < taskList.length; i++){
      console.log("element is:",taskList[i]);
      if(taskList[i].type=="done"){
        count++;
      }
  }
  return count;
}
const doneCount=countDoneTasks();
const value= (doneCount / taskList.length) * 100 ; 
  return (
    <div className="featured">
        <div className="top">
            <h1>Total task progress</h1>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={doneCount==0 ? 0:value} text={doneCount==0 ? "0%":`${Math.floor(value)}%`} strokeWidth={5}/>
            </div>
            <p className="title">Percentage of tasks completed</p>
        </div>
    </div>
  )
}

export default Featured