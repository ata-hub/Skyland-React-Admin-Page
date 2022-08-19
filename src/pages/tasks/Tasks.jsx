import AllTaskTable from "../../components/datatable/AllTaskTable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./tasks.scss"

const Tasks = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="top">
            <h1>All Tasks In The System</h1>
        </div>
        <div className="bottom">
        <AllTaskTable/>
        </div>
        
      </div>
    </div>
  )
}

export default Tasks