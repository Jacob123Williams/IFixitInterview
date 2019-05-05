import React, { Component } from 'react';
import MyDevices from './Components/myDevices'
import FindDevices from './Components/FindDevices'
import { Navbar, Nav, NavItem, Button  } from 'react-bootstrap';
import './App.css';

class App extends Component {

   constructor(props) {
      super(props);


      this.state = {
         devices: [],
         myDevice : true
      }
   }

   componentWillMount() {
      localStorage.getItem('devices') && this.setState({
         devices: JSON.parse(localStorage.getItem('devices'))
      });
   }

   removeDevice = (deviceName) => {
      var devices = this.state.devices;

      devices.splice(devices.indexOf(deviceName), 1 );

      this.setState({devices});

      localStorage.setItem('devices', JSON.stringify(devices));
   }

   inArray = (array, comparer) => {
       for(var i=0; i < array.length; i++) {
           if(comparer === array[i])
            return true;
       }
       return false;
   }


   addDevice = (deviceName) => {
      var devices = this.state.devices;

      if (deviceName.substring(deviceName.length-7, deviceName.length===' Repair')) {
           deviceName = deviceName.substring(0, deviceName.length-7);
       }

      if (!this.inArray(devices, deviceName)) {
        devices.push(deviceName);
      }

      //devices.push(deviceName);

      this.setState({devices});


      localStorage.setItem('devices', JSON.stringify(devices));

   }

   toggleDevices = () => {
      var myDevice = !this.state.myDevice;

      this.setState({myDevice});
   }

   /*<Navbar>
        <Nav>
             <NavItem>My Devices</NavItem>

             <NavItem>Find Devices</NavItem>

        </Nav>
    </Navbar>*/

  render() {
    var state = this.state;

    return (
      <div className="App">

         {state.myDevice ?
           <MyDevices devices = {state.devices}
           removeDevice = {this.removeDevice}  className="clearfix"/>
        :
          <FindDevices addDevice = {this.addDevice} className="clearfix"/>}



         <Button  onClick={this.toggleDevices}>
           {state.myDevice ?
             'Add Devices'
          :
            'My Devices'}
         </Button>
      </div>
    );
  }
}

export default App;
