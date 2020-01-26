import React, { Component } from "react";
import "antd/dist/antd.css";
import imgdiv2 from "../images/one.jpg"
import imgdiv3 from "../images/three.jpg"
import imgdiv1 from "../images/on.jpg";
import { Carousel } from "antd";
import "../css/Maindiv.css";

class Slider extends Component{
    state={
        list1: [imgdiv3, imgdiv3, imgdiv3, imgdiv3]
    }

    render(){
        return(
            <this.Slider/>
        )
    }

    Slider = () => {
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
                  {this.state.list1.map(items => {
                    return (
                      <div>
                        <img id="sliderimg" src={items}></img>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        );
      };
    
}
export default Slider;


