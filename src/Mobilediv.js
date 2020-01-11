import React from 'react';
import './Mobilediv.css';
import m1 from './m1.jpg'
import m2 from './m2.jpg'
import m3 from './m3.jpg'
import m4 from './m4.jpg'
import m5 from './m5.jpg'




function Mobilediv() {
    return (
        <div className="parentdiv1">
            <div className="parentdiv">
                <div id="nd">
                    <h1 className="mob">Mobile Phone</h1>
                    <hr id="myline" />
                </div>

                <div className="Mobilediv">
                    <div className="one"><img className="mobileimg" src={m1}></img></div>
                    <div className="one"><img className="mobileimg" src={m2}></img></div>
                    <div className="one"><img className="mobileimg" src={m3}></img></div>
                    <div className="one"><img className="mobileimg" src={m4}></img></div>

                </div>
                <div id="nd"> 
                    <h1 className="mob">Mobile Phone</h1>
                    <hr id="myline" />
                </div>

                <div className="Mobilediv">
                    <div className="one"><img className="mobileimg" src={m5}></img></div>
                    <div className="one"><img className="mobileimg" src={m1}></img></div>
                    <div className="one"><img className="mobileimg" src={m2}></img></div>
                    <div className="one"><img className="mobileimg" src={m3}></img></div>

                </div>






            </div>
        </div >
    )
}


export default Mobilediv;