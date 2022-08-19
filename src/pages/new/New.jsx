import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" className="addImg"/>
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="john"/>
              </div>
              <div className="formInput">
                <label>Surname</label>
                <input type="text" placeholder="doe"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com"/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="05xx xxx xx xx"/>
              </div>
              <button>Send</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New