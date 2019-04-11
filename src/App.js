import React, { Component } from 'react';
import MyDevices from './Components/myDevices'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

class App extends Component {

   componentDidMount() {


   }


  render() {

    return (
      <div className="App">

         <Navbar>
              <Nav>
                   <NavItem>My Devices</NavItem>

                   <NavItem>Find Devices</NavItem>

              </Nav>
          </Navbar>



         <MyDevices  className="clearfix"/>
      </div>
    );
  }
}

export default App;
