import React from 'react'
import './Logodiv.css'
import 'antd/dist/antd.css';
import { Input,Button, Icon, Badge } from 'antd';
import myimg from '../src/Mylogo.png'







function Logodiv() {
    return (
        <div className="Logodiv">
            <div>
                <span className="items">
                    <div>
                        <img src={myimg}></img>
                    </div>
                    <div>
                        <span>
                    <Input id="abc"  placeholder="Basic usage" />
                    <Button id="bcd" type="primary">Primary</Button>
                    </span>
                    </div>
                    <div>
                        <h1>Infinity</h1>
                    </div>
                    <div className="cartdiv">
                    <Badge count={0} showZero="true">
                    <Icon className="mycart" type="shopping-cart" />
                    </Badge>
                    </div>
                </span>
            </div>
        </div>
    )

}









export default Logodiv;