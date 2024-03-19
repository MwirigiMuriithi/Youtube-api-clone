import './Navbar.css'
import menuicon from "../../assets/menu.png"
import logo from "../../assets/clone-logo.png"
import searchIcon from "../../assets/search.png"
import upload from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import profileIcon from "../../assets/rabbit.jpg"
import { Link } from 'react-router-dom'
const Navbar = ( {setSidebar} ) => {
  return (
    <nav className='flex-div'>
    <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menuicon} alt="" />
        <Link to= '/'><img className='logo' src={logo} alt="" /></Link>
    </div>
    <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder='Search'/>
        <img src={searchIcon} alt="" />
         </div>
      
    </div>
    <div className="nav-right flex-div">
        <img src= {upload} alt="" /><img src={moreIcon} alt="" /><img src={notificationIcon} alt="" />
        <img src={profileIcon} className='user-icon' alt="" />
    </div>
    </nav>
  )
}

export default Navbar