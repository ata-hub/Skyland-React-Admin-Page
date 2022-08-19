import "./alltasktable.scss"
import React, { useEffect, useState } from 'react'
import { taskColumns} from "../../tasktablesource";
import { DataGrid } from '@mui/x-data-grid';

const AllTaskTable = () => {
    const [taskList,setTaskList] = useState([]);
    useEffect(()=>{
        console.log("Hey, Im loaded");
        if(taskList.length===0){
        fetch("http://localhost:8080/api/v1/tasks").then((response)=>response.json()).then(data =>{
        console.log(data);
        
        setTaskList(data);
        });
        }
    
  },[]);
  return (
    <div className="tasktable">
        <DataGrid
        className="dataGrid"
        rows={taskList}
        columns={taskColumns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default AllTaskTable