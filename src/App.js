import React from 'react'
import './App.css'
import Header from './Header'
import LoginHeader from './LoginHeader'
import Logodiv from './Logodiv'
import Category from './Category'
import Maindiv from './Maindiv'
import Footer from './Footer'
import Mobilediv from './Mobilediv'





class App extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <LoginHeader/>
      <Logodiv/>
      <Category/>
      <Maindiv/>
      <Mobilediv/>
      <Footer/>
      </div>
    )
      
    
  }
}









export default App;