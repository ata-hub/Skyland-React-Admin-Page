import RankTable from "../datatable/RankTable"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import "./ranking.scss"

const Ranking = () => {
  return (
    <div className="ranking">
      <Sidebar/>
      <div className="rankContainer">
        <Navbar/>
        <div className="top">
          <h1> Ranking Table</h1>
        </div>
        <div className="bottom">
          <RankTable/>
        </div>
        
      </div>
    </div>
  )
}

export default Ranking