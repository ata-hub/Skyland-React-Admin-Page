export const rankColumns = [
    {field:"rank", headerName:"Rank", width: 70, renderCell: (params) => {
        return (<h3>
                 {params.api.getRowIndex(params.row.id) + 1}
                </h3>);
             }},
    { field: 'id', headerName: 'ID',  width: 70,},
    { field: 'name', headerName: 'First name', width: 150 },
    { field: 'surname', headerName: 'Last name', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    

]