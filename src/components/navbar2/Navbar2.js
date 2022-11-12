import React, {useState, useEffect} from 'react';
import "./Navbar2.css"
import {GoThreeBars} from "react-icons/go"
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import {useStateValue} from "../../context/stateprovider/StateProvider"

function Navbar2(nima) {
    const [sidebarShow, setSidebarShow] = useState(false)
    sidebarShow ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto"

    const [state, action] = useStateValue()


    let lorem = "lorem ipsum"

    useEffect(()=>{
        action({type:"ADD_SUM", sum:lorem })
    },[])



    return (
        <>
          <div className='navbar2'>
            <div onClick={()=> setSidebarShow(true)} className="all">
                <GoThreeBars/>
                <li>All</li>
            </div>
            <div className="collection">
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <Link to="/products">
                <li>Sell</li>
                </Link>
            </div>
        </div>
        <Sidebar show={sidebarShow} setShow={setSidebarShow}/>
        </>
      
    );
}

export default Navbar2;