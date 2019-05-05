import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import * as api from '../api';

class myDevices extends Component {
   constructor(props) {
      super(props);

      this.state = {
            searchString: "",
            devices: [],
            offset: 0

      }
   }

   componentWillMount = () => {
      var allDevices = []

      for (var i = 0; i < 4; i++)
         api.getWikiByName(i * 10000).then(devices =>{

            allDevices = allDevices.concat(devices);
            this.setState({
               devices: allDevices

            })
            console.log("list");
         })
   }

   handleChange = () => {

     this.setState({
       searchString: this.refs.search.value
     });
   }


   render() {
      var state = this.state;
      var props = this.props;

      var devices = state.devices;
      var search = state.searchString.trim().toLowerCase();

      if (search.length > 0) {
       devices = devices.filter(function(device) {
         return device.toLowerCase().match(search);
       });
      }

      return (
      <section className="container">

      <h3>
         {'Find Devices'}
      </h3>

      <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
            {devices.map((deviceName, i) => (

                   <DeviceLine
                      key = {'device' + i}
                      title = {deviceName}
                      addDevice = {() => {props.addDevice(deviceName)}}
                   />
             ))}
        </div>

      </section>
      )
   }
}

const DeviceLine = function(props) {
   return (
   <ListGroupItem className="clearfix">
     {props.title}

      <div className="pull-right">
            <Button onClick = {props.addDevice}>
              {'Add Device'}
            </Button>
        </div>
   </ListGroupItem>
   )
}

export default myDevices
