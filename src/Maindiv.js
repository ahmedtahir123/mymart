import React from 'react'
import './Maindiv.css'
import imgdiv2 from './one.jpg'
import imgdiv3 from './three.jpg'
import imgdiv1 from './on.jpg'
import { Carousel } from 'antd';







function Maindiv() {
    return (
        <div className="div">
            <div className="Maindiv">
                <div id="newdiv">
                    <div className="div2">
                        <img id="sliderimg" src={imgdiv1}></img>

                        


                    </div>

                    <div className="div3">
                        <img id="sliderimg" src={imgdiv2}></img>


                    </div>
                </div>
                <div className="div1">
                <Carousel autoplay>
                            <div>
                            <img id="sliderimg" src={imgdiv3}></img>
                            </div>
                            <div>
                            <img id="sliderimg" src={imgdiv3}></img>
                            </div>
                            <div>
                            <img id="sliderimg" src={imgdiv3}></img>
                            </div>
                            <div>
                            <img id="sliderimg" src={imgdiv3}></img>
                            </div>
                        </Carousel>

                </div>
            </div>
        </div>
    )

}





export default Maindiv;