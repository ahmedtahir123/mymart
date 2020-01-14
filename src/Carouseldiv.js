import React from 'react';

// import './Mobilediv.css';
import './Carouseldiv.css';


import { Carousel } from 'antd';

function Carousely(props) {
    return (

            <Carousel autoplay>
                <div>
                    <img  className={props.className} src={props.img}></img><div/>
                    <div><img  className={props.className} src={props.img}></img></div>
                    <img  className={props.className} src={props.img}></img>


                </div>
            </Carousel>




    )
}
export default Carousely;