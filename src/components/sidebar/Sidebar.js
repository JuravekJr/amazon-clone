import React, {useState} from'react'
;
import "./Sidebar.css"
import {FiX, FiChevronRight} from 'react-icons/fi'
import {FaRegUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {sidebarFirstData, sidebarSecondData} from '../../static/static'
import {BsGlobe2} from "react-icons/bs"
import language from '../../images/language.png'

function Sidebar({show, setShow}) {
    const [sidebarShow, setSidebarShow] = useState(false)
    const [sidebarDataa, setSidebarData] =useState()

    const filterData =(id)=>{
        setSidebarData(sidebarSecondData[id]);
    }
    return <div >
    <div className={show? "sidebar_container showSidebarCon": "sidebar_container"}>
       <div className="sidebarUser">
           <FaRegUserCircle/>
           <span>Hello , Sign in</span>
       </div>
       <div className={sidebarShow ? "sidebarWrapper leftSide" : "sidebarWrapper"}>
            <div className="sidebar_item">
                <h3>Digital Content & Devices</h3>
                <ul>
                    {sidebarFirstData?.slice(0,3).map((item)=>(
                        <li  onMouseEnter={()=>filterData(item.id)} onClick={()=> setSidebarShow(true)} key={item.id}>
                            <span>{item.name}</span>
                            <span><FiChevronRight/></span>
                        </li>
                    ))}
                </ul>
                <h3>Shop By Department</h3>
                <ul>
                    {sidebarFirstData?.slice(3,7).map((item)=>(
                        <li  onMouseEnter={()=>filterData(item.id)} onClick={()=> setSidebarShow(true)} key={item.id}>
                            <span>{item.name}</span>
                            <span><FiChevronRight/></span>
                        </li>
                    ))}
                </ul>
                <h3>Programs & Features</h3>
                <ul>
                    {sidebarFirstData?.slice(7).map((item)=>(
                        <li  onMouseEnter={()=>filterData(item.id)} onClick={()=> setSidebarShow(true)} key={item.id}>
                            <span>{item.name}</span>
                            <span><FiChevronRight/></span>
                        </li>
                    ))}
                </ul>
                <h3>Help & Settings</h3>
                <p>Your Account</p>
                <p><BsGlobe2/> English</p>
                <p><img src={language} alt="" />United States</p>
                <p>Customer Service</p>
                <Link to="/login">
                <p>Sign In</p>
                </Link>
            </div>
           
            <div className="sidebar_item">
                <h3 className='MainMenu' onClick={()=> setSidebarShow(false)}>Main  Menu</h3>
                <h3>{sidebarDataa?.title}</h3>
                <ul>
                    {
                        sidebarDataa?.items.map((item,inx)=>(
                            <li key={inx}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            
       </div>
      
    </div>


    
    <div onClick={()=>setShow(false)} className={show?"sidebar_shadow show1":"sidebar_shadow close"}>
        <div className="close_sidebarBtn">
            <FiX/>
        </div>
    </div>
    </div>;
}

export default Sidebar;
                                                                                                                                                                                                                                                                                                                                                          

