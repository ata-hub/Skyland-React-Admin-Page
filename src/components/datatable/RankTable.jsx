import "./ranktable.scss"
import { rankColumns } from '../../rankingdatatablesource';
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getRowIdFromRowModel } from "@mui/x-data-grid/hooks/features/rows/gridRowsUtils";

const RankTable = () => {
const [rankList,setRankList] = useState([]);
const [rankListNum,setRankListNum] = useState([]);

  useEffect(()=>{
    console.log("Hey, Im loaded");
    if(rankList.length===0){
      fetch("http://localhost:8080/api/v1/freelancers/ranking").then((response)=>response.json()).then(data =>{
      console.log(data);
      setRankList(data);
    });
    }
    
  },[]);
  const taskColumn = [{field:"action", headerName:"Tasks Completed", width:200, renderCell:(params)=>{
    return (
        <div className="cellAction">
            {params.row.tasks.length}
        </div>
    )
}}];
  return (
    <div className="ranktable">
        <DataGrid
        
        className="dataGrid"
        rows={rankList}
        columns={rankColumns.concat(taskColumn)}
        getRowClassName={(params) => `Rank${params.row.rank}`}
        pageSize={20}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default RankTable