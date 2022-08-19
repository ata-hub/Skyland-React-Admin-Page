import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const List = () => {
  const [userList,setUserList] = useState([]);

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(userList.length===0){
      fetch("http://localhost:8080/api/v1/freelancer/unvalidated").then((response)=>response.json()).then(data =>{
      console.log(data);
      setUserList(data);
    });
    }
    
  },[]);
  const handleAccept =(id)=>{
    //Put request set freelancer with id given validated=true
    fetch(`http://localhost:8080/api/v1/freelancer/${id}/validation`,
    {method:"PUT",headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(id)}).then((response)=>response.json()).then(data =>{
      console.log(data);
      
    });
    //to delete from list
    setUserList(userList.filter(item=>item.id !== id))
  }
  const handleDecline =(id)=>{
    //Delete that freelancer
    fetch(`http://localhost:8080/api/v1/freelancer/${id}`,
    {method:"DELETE"}).then((response)=>response.json()).then(data =>{
      console.log(data);
      
    });
    //to delete from list
    setUserList(userList.filter(item=>item.id !== id))
  }
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Profile</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Surname</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="tableCell">{user.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" className="image" />
                  
                </div>
              </TableCell>
              <TableCell className="tableCell">{user.name}</TableCell>
              <TableCell className="tableCell">{user.surname}</TableCell>
              <TableCell className="tableCell">{user.email}</TableCell>
              <TableCell className="tableCell">{user.phone}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${user.validated}`}>{user.validated ? "Approved" : "Pending"}</span>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellAction">
                    <div className="viewButton" onClick={()=>handleAccept(user.id)}>Accept</div>
                    <div className="deleteButton" onClick={()=>handleDecline(user.id)}>Decline</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;