import React, {useState} from 'react';
import "./Footer.css"
import { Link,useLocation} from'react-router-dom'
import { footerCenterCollection} from '../../static/static'
import { footerBottomCollection } from '../../static/static';
import footerImg from '../../images/logo.png'
import {BsGlobe2, BsChevronContract} from 'react-icons/bs'
import language from '../../images/language.png'

function Footer() {
    const [languageShow, setLanguageShow] = useState(false);
    const location =useLocation()

    if(location.pathname ==="/login"){
        return <></>
    }
    return (
       <>
        <div className='footer'>
       <div className="footerToTop"><h3>Back to top</h3></div>
       <div className="footerCenter">
            {footerCenterCollection?.map((footCol, inx) =>(
              <div key={inx} className="footColDiv">
                    <li >{footCol.name}</li>
                    <p >{footCol.desc}</p>
                    <p >{footCol.desc2}</p>
                    <p >{footCol.desc3}</p>
                    <p >{footCol.desc4}</p>
                    <p >{footCol.desc5}</p>
                    <p >{footCol.desc6}</p>
                    <p >{footCol.desc7}</p>
                    <p >{footCol.desc8}</p>
                    
              </div>
            ))},
           
       </div>
       <div className="footer_setting_wrapper">
       <div className="footerSettings">
        <Link to="/">
        <img src={footerImg} alt="" className='footerImg' />
        </Link>
        <div className="footerSettingBox"> {<BsGlobe2/>} <p>English </p><BsChevronContract/></div>
        <div className="footerSettingBox"><h5>$</h5><p>USD - U.S Dollar</p></div>
        <div className="footerSettingBox"><img src={language} alt="" /><p>United States</p> </div>
        </div>
       </div>
    </div>
            <div className="footerBottom_wrapper">
            <div className="footer_bottom">
                {footerBottomCollection?.map((footBotCol, inx)=>(
                  <div key={inx} className="footBColDiv">
                    <li >{footBotCol.name}</li>
                    <p >{footBotCol.desc}</p>
                    <p >{footBotCol.desc1}</p>
                    <p >{footBotCol.desc2}</p>
                    <p>{footBotCol.desc3}</p>
                  </div>
                ))}
                </div>
            </div>
            <div className="footer_last">
              <p><a href="">Conditions of Use</a> <a href="">Privacy Notice</a> <a href="">Interest-Based Ads</a> © 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
       </>
    );
}

export default Footer;