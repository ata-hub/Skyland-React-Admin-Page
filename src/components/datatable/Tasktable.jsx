import "./tasktable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { taskColumns, taskRows } from "../../tasktablesource";
import { useEffect, useState } from "react";

const Tasktable = (props) => {
  const [taskList,setTaskList] = useState([]);
  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(taskList.length===0){
      fetch(`http://localhost:8080/api/v1/freelancers/${props.freelancerId}/tasks`).then((response)=>response.json()).then(data =>{
      console.log(data);
      
      setTaskList(data);
    });
    }
    
  },[]);


    const actionColumn = [{field:"action", headerName:"Action", width:200, renderCell:()=>{
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}];
  return (
    <div className="tasktable">
        <DataGrid
        className="dataGrid"
        rows={taskList}
        columns={taskColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Tasktable