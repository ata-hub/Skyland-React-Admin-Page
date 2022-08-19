import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const Datatable = () => {
  const [userList,setUserList] = useState([]);

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(userList.length===0){
      fetch("http://localhost:8080/api/v1/freelancer").then((response)=>response.json()).then(data =>{
      console.log(data);
      setUserList(data);
    });
    }
    
  },[]);



  //const [data,setData] = useState(userRows)  
  console.log("userList is:",userList)
  //console.log("data is:",data)
  const handleDelete =(id)=>{
    setUserList(userList.filter(item=>item.id !== id))
  }

  const actionColumn = [{field:"action", headerName:"Action", width:200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={{pathname:`/users/${params.row.id}`,state:{id:params.row.id, name:params.row.name, surname:params.row.surname, email:params.row.email, phone:params.row.phone}}} style={{textDecoration:"none"}}>
                  <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }}];
  return (
    <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" style={{textDecoration:"none"}} className="link">
            Add New
          </Link>
        </div>
        <DataGrid
        className="dataGrid"
        rows={userList}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable