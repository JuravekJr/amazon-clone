import React, { useState } from "react";
import "./Navbar.css";
import Navbar2 from "../navbar2/Navbar2"
import logo from "../../images/logo.png";
import { Link, useLocation} from "react-router-dom";
import { BiMap, BiCaretDown } from "react-icons/bi";
import { navbarOptions } from "../../static/static";
import {countrySelect} from '../../static/static';
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import language from "../../images/language.png";
import SignBox from "../sign-in-box/SignBox";
import LanguageBox from "../languageBox/LanguageBox";
import shop from "../../images/shop.svg"

function Navbar({str2}) {
  const location = useLocation()
  const [inputFocus, setInputFocus] = useState(false);
  const [signShow, setSignShow] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [languageShow, setLanguageShow] = useState(false);
  const [locationShow, setLocationShow] =useState(false)
  locationShow ?  document.body.style.overflow ="hidden": document.body.style.overflow = "auto"

  if(location.pathname === "/user/login" || location.pathname === "/products"){
    return <></>
  }
  return (
    <>
      <div className="navbar">
       
        <div className="navbar_wrapper">
          <div className="navbar_logo nav_border">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div onClick={()=>{
            setLocationShow(true)
            setShowShadow(true)
          }} className="navbar_deliver nav_border">
            <BiMap />
            <div>
              <p>Deliver to</p>
              <h3>Uzbekistan</h3>
            </div>
          </div>
          <div
            className={
              inputFocus ? "navbar_search goldBorder" : "navbar_search"
            }
          >
            <select className="navbar_select">
              {navbarOptions?.map((item) => (
                <option key={item.id} value="">
                  {item.name}
                </option>
              ))}
            </select>
            <input
              onBlur={() => {
                setInputFocus(false);
                setShowShadow(false);
                // setLanguageShow(false)
              }}
              onFocus={() => {
                setInputFocus(true);
                setShowShadow(true);
                // setLanguageShow(true)
              }}
              type="search"
              className="navbar_searchInput"
            />
            <button className="navbar_search_btn">{<BsSearch />}</button>
          </div>
          <div onMouseLeave={()=>{
            setLanguageShow(false)
            setShowShadow(false)
          }}
          onMouseEnter={()=>{
            setLanguageShow(true)
            setShowShadow(true)
          }}
           className="navbar_language nav_border">
            <img src={language} alt="" />
            {<BiCaretDown />}
            {languageShow ? <LanguageBox/> : <></>}
          </div>
          <div
            onMouseLeave={() =>{ 
            setSignShow(false)
            setShowShadow(false)         
          }
            }
            onMouseEnter={() => {
                setSignShow(true)
                setShowShadow(true)
            }}
            onClick={()=>{
              setSignShow(false)
              setShowShadow(false)
            }}
            className="navbar_login nav_border"
          >
            <Link to="/user">
            <p>Hello, Sign in</p>
            <h5>Account & Lists {<BiCaretDown />}</h5>
            </Link>
           
            {signShow ? <SignBox /> : <></>}
          </div>
         <Link to="/user">
         <div className="navbar_return nav_border">
            <p>Returns</p>
            <h5>& Orders</h5>
          </div>
         </Link>
            <Link to="/carts">
            <div className="navbar_cart nav_border">
            <img src={shop} alt="" />
            <h5>Cart</h5>
          </div>
            </Link>
        </div>
      </div>
      <div onClick={()=> {
        setShowShadow(false)
        setLocationShow(false)
      }}
      style={locationShow ? {zIndex:14} : {zIndex:10}}
        className={showShadow ? "navbar_shadow show" : "navbar_shadow close"}
      ></div>
      <div className={locationShow?"nav_locationModal locationShow" : "nav_locationModal"}>
       <div className="delevierTop">
         <h4>Choose your location</h4>
       </div>
       <p>Delivery options and delivery speeds may vary for different locations</p>
       <button className="addLocationBtn">Sign in to see your addresses </button>
       <span>or enter a US zip code</span>
       <div className="applyBar">
         <input autoFocus type="text" />
         <button className="applyBtn">Apply</button>
       </div>
       <span>or</span>
       <select className="applySelect" name="" id="">
         {countrySelect?.map((countries)=>(
           <option key={countries.id} value="">{countries.name}</option>
         ))}
       </select>
       <button className="addLocationDoneBtn">Done</button>
      </div>
      <Navbar2 str3={str2}/>
    </>
  );
}

export default Navbar;
