import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

class myDevices extends Component {
   constructor(props) {
      super(props);

      this.state = {
            devices: [
               "Macintosh Powerbook 5300cs",
               "Macintosh Quadra 610",
               "Mad Catz Street Fighter IV FightPad",
               "Magellan GPS",
               "Magic Mouse"
            ]

      }
   }

   render() {
      var state = this.state;

      return (
      <section className="container">
         {state.devices.map((deviceName, i) => (
            <DeviceLine
               key = {'device' + i}
               title = {deviceName}
            />
         ))}
      </section>
      )
   }
}

const DeviceLine = function(props) {
   return (
   <ListGroupItem className="clearfix">
     {props.title}

      <div className="pull-right">
            <Button >
              {'Visit Wiki'}
            </Button>
            <Button>
              {'Remove Device'}
            </Button>
        </div>
   </ListGroupItem>
   )
}

export default myDevices
