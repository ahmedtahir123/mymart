import React from "react";
import "./Footer.css";
import 'antd/dist/antd.css';
import { Input,Button, Icon, Badge } from 'antd';

function Footer() {
  return (
    <div className="Footer">
      <div>
        <span>
          <div id="Hummartdiv">
            <h1>Hummart</h1>
            <Icon type="caret-right"  style={{ color: "white" }}>
            <li style={{ color: "white" }}>1</li></Icon>
            <li style={{ color: "white" }}>1</li>
            <li style={{ color: "white" }}>1</li>
            <li style={{ color: "white" }}>1</li>
            <li style={{ color: "white" }}>1</li>
            <li style={{ color: "white" }}>1</li>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Footer;
