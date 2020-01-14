import React from 'react';
import './Product.css';
import m5 from './m5.jpg'
import 'antd/dist/antd.css';
import { Input, Button, Icon, Badge } from 'antd';


function Product() {
    return (
        <div className="p1">
            <div className="p2"><br/>


                <div className="p3">
                    <div className="p4">
                        <div className="p41"><img id="p4img" src={m5}></img></div>
                        <div className="p41"><h1 id="p4h1">I am here</h1></div>
                        <div className="p41"><Icon  type="caret-right" style={{ color: "black",fontSize:"20px",marginTop:"55px",marginLeft:"40px" }} /></div>
                    </div>
                    <div className="p4"></div></div><br/>

                <div className="p3">
                    <div className="p4"></div>
                    <div className="p4"></div></div><br/>

                    <div className="p3">
                    <div className="p4"></div>
                    <div className="p4"></div></div><br/>    
            </div>

        </div>
    )
}

export default Product;