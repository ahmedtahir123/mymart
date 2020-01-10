import React from 'react'
import './Maindiv.css'
import imgdiv2 from './one.jpg'
import imgdiv3 from './three.jpg'
import imgdiv1 from './on.jpg'







function Maindiv() {
    return (
        <div className="div">
        <div className="Maindiv">
           <div id="newdiv">
            <div className="div2">
                <img src={imgdiv1}></img>
            
            </div>
            
            <div className="div3">
            <img src={imgdiv2}></img>
                
            
            </div>
            </div>
            <div className="div1">
            <img src={imgdiv3}></img>
            
            </div>
        </div>
        </div>
    )

}





export default Maindiv;