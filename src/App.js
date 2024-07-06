import React from 'react'
import Nav from './components/Nav';
import './App.css'
import './components/Nav.css'
import img from './assets/juice.jpg'
import Footer from './components/Footer';


function App() {
    return (

        <div className ='App'>
          <Nav/>
          {/* <Footer/> */}
          <div className = 'indexpage' >
            <img src ={img}/>
            <div className = 'text' >
              <h1> Refreshingly Healthy, Delightfully Tasty </h1>
              <h2> From classic orange to exotic blends, our <br /> juices are crafted using the freshest ingredients to ensure <br /> every sip bursts with flavor and nutrients. </h2>

            </div>
            <Footer/>
          </div>
         </div>

    )
}

export default App