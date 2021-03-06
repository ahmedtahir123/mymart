import React from "react";
import "antd/dist/antd.css";
import {
  Drawer,
  Input,
  Button,
  Icon,
  Badge,
  Affix,
  AutoComplete,
  message
} from "antd";
import myimg from "../images/Mylogo.png";
import { Link, Redirect } from "react-router-dom";
import "../css/Logodiv.css";
import "../css/LoginHeader.css";
import "../css/Category.css";
import "../css/Header.css";
import "../css/App.css";
import updateCount from "../action/Action";

class Header extends React.Component {
  state = {
    redirect: false,
    inputValue: "",
    myIndex: 0,

    categoryItem: [
      {
        myLink: "MOBILES TABLETS & LAPTOPS",
        myLinkTo: "/mobiles"
      },
      {
        myLink: "ELECTRONIC ACCESSORIESPHARMACY",
        myLinkTo: "/"
      },
      {
        myLink: "NOODLES SAUCES & FROZEN FOODS",
        myLinkTo: "/"
      },
      { myLink: "HOUSEHOLD NEEDSBABY & KIDSMORE", myLinkTo: "/" }
    ]
  };

  updateInput = e => {
    this.state = { inputValue: e.target.value };
  };
  handleClick = () => {
    for (
      let index = 0;
      index < this.props.bodyObject.productImages.length;
      index++
    ) {
      if (
        this.state.inputValue ===
        this.props.bodyObject.productImages[index].text
      ) {
        this.setState({
          myIndex: index,
          redirect: true
        });
        break;
      }
    }
    // location.replace("/mobiles");
  };

  submitted = () => {
    const list = [];
    this.props.updateCartList(list);
    this.props.changeCount(0, 0);
    message.success("Order Dispatch");
  };

  showDrawer = () => {
    {
      this.props.changeStateOfDrawer(true);
    }
  };

  onClose = () => {
    {
      this.props.changeStateOfDrawer(false);
    }
  };

  Header = () => {
    return (
      <div className="Myheader">
        <p>Delivering Only in Karachi1</p>
        <br />
        <hr style={{ color: "green", height: "20px" }} />
      </div>
    );
  };

  LoginHeader = () => {
    return (
      <div style={{ backgroundColor: "#f9f9f9" }} className="MyLoginheader">
        <span>
          <label>090078601</label>
          <Link to="/">
            <label style={{ color: "black" }}>Customer Care</label>
          </Link>
          {/* <label>Login</label> */}
        </span>
      </div>
    );
  };



  Category = () => {
    return (
      <div className="Cat">
        <div className="Category">
          <span className="mylist">
            {this.state.categoryItem.map(item => (
              <Link to={item.myLinkTo}>
                <li>{item.myLink}</li>
              </Link>
            ))}
          </span>
        </div>
      </div>
    );
  };

  LogoDiv = () => {

    let dataSource = [{}];
    this.props.bodyObject.productImages.forEach(element => {
      dataSource.push(element);
    });
    debugger;
    console.log(dataSource);
    return (
      <div className="Logodiv">


        <div>
          <span className="items">
            <div>
              <Link to="/">
                <img src={myimg}></img>
              </Link>
            </div>
            <div>
              <span>
                <datalist id="myOptions">
                  {dataSource.map(item => (
                    <option value={item.text} />
                  ))}
                </datalist>
                <Input
                  style={{ backgroundColor: "#f9f9f9" }}
                  id="abc"
                  placeholder="Basic usage"
                  autoComplete="on"
                  list="myOptions"
                  onChange={this.updateInput}
                />

                <Button onClick={this.handleClick} id="bcd" type="danger">
                  Search
                </Button>
              </span>
            </div>
            <div>
              {/* <h1>Infinity</h1>  */}
              <label id="mylabel">Infinity</label>
            </div>

            <div className="cartdiv">
              <Badge count={this.props.bodyObject.count} showZero="true">
                <Icon
                  onClick={this.showDrawer}
                  className="mycart"
                  type="shopping-cart"
                />
              </Badge>
            </div>
          </span>
        </div>
      </div>
    );
  };

  CartMinus = index => {
    new updateCount().CartMinus(index, this.props);
  };
  Cartadd = index => {
    new updateCount().Cartadd(index, this.props);
  };

  Drawer = () => {
    debugger;
    let mybtn1 = this.state.mybtn;
    return (
      <Drawer
        width={500}
        id="Mydrawer"
        title="My Cart"
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={this.props.bodyObject.visible}
      >
        <div id="drawerdiv">
          <span>
            <label id="l1">SubTotal</label>

            <label id="l2">Rs {this.props.bodyObject.Total}</label>
          </span>
          <br />
          <span>
            <label id="l1">Delievery Charges</label>
            <label id="l2">Free</label>
          </span>
          <br />
          <br />

          <div className="dd1">
            
            {this.props.bodyObject.myCartList.map((items, index) => {
              return (
                <div>
                  <div key={index} id="cartdiv">
                    <div className="p41">
                      <img id="p4img" src={items.img} />
                    </div>
                    <div className="p41">
                      <label>src={items.text}</label>
                    </div>
                    <div className="p41">
                      <label>Rs {items.price * items.counter} </label>
                    </div>
                  </div>

                  <div>
                    <span id="spanbtn">
                      <Button
                        onClick={() => this.CartMinus(index)}
                        shape="circle"
                      >
                        -
                      </Button>
                      <p>{items.counter}</p>
                      <Button
                        onClick={() => this.Cartadd(index)}
                        shape="circle"
                      >
                        +
                      </Button>
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="Drawarbtn">
              <div>
                {/* <Link to={"/Header"}> */}
                <Button
                  onClick={this.submitted}
                  style={{ width: "100%" }}
                  type="danger"
                // disabled={mybtn1}
                >
                  {this.props.bodyObject.myCartList.length === 0
                    ? "Shop Now"
                    : // : (mybtn1=false,"Submit")
                    "Submit"}
                </Button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    );
  };

  render() {

    return (
      <div>
        {this.state.redirect ? <Redirect to={{
          pathname: "/description",
          state:  this.state.myIndex 
        }} /> : false}
        <this.Header />
        <this.LoginHeader />
        <this.LogoDiv />
        <this.Drawer />
        <this.Category />
      </div>
    );
  }
}
export default Header;

// }
