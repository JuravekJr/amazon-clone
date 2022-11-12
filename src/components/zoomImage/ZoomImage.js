import React, { useState, useRef, useEffect } from 'react';
import "./ZoomImage.css"

function ZoomImage({image}) {
    const [showOff, setShowOff] = useState(false)
    const [offsetx, setOffsetx] = useState()
    const [offsety, setOffsety] = useState()
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const refX = useRef(null)
  
    useEffect(() => {
      setHeight(refX.current.clientHeight)
      setWidth(refX.current.clientWidth)
    },[])
    
    const offsetPosition = (e)=>{
      let x = e.nativeEvent.offsetX
      let xRes = Math.floor(x * 100 / width)
      let y = e.nativeEvent.offsetY
      let yRes = Math.floor(y * 100 / height)
      setOffsetx(xRes)
      setOffsety(yRes)
    }
  

  return <div className="image_zoomContainer">
        <div 
          ref={refX}
          onMouseEnter={()=>setShowOff(true)}
          onMouseLeave={()=>setShowOff(false)}
          onMouseMove={e=>{offsetPosition(e)}} 
          style={{backgroundImage:`url(${image})`}} 
          className="image_zoomController"
        >
          <div className="image_zoomControllerVisible"></div>

          <div style={{top:`${offsety-20}%`, left:`${offsetx-20}%`, display:showOff?"block":"none" }} className="image_zoomControllerItem"></div>

        </div>
        <div style={{backgroundImage:`url(${image})`,   backgroundPosition: `${offsetx}% ${offsety}%`, display:showOff?"block":"none" }} className="image_zoomItem">

        </div>
      </div>;
}

export default ZoomImage;
