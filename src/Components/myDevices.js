import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

class myDevices extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      var state = this.state;
      var props = this.props;

      return (
      <section className="container">

      <h3>
         {'My Devices'}
      </h3>

      {props.devices.length !== 0 ?
         props.devices.map((deviceName, i) => (
            <DeviceLine
               key = {'device' + i}
               title = {deviceName}
               removeDevice = {() => {props.removeDevice(deviceName)}}
            />
         ))
      :
         'You do not have any saved devices'
      }

      </section>
      )
   }
}

const DeviceLine = function(props) {
   return (
   <ListGroupItem className="clearfix">
     {props.title}

      <div className="pull-right">
            <Button href = {"https://www.ifixit.com/Device/" + props.title}>
              {'Visit Wiki'}
            </Button>
            <Button onClick = {props.removeDevice}>
              {'Remove Device'}
            </Button>
        </div>
   </ListGroupItem>
   )
}

export default myDevices
