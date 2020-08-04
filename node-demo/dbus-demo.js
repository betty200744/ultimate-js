/**
 * Created by betty on 10/17/18.
 */
"use strict";

const http = require('http');
const dbus = require('dbus-native');
const sBus = dbus.systemBus();

const systemBus = dbus.systemBus();
const btService = systemBus.getService(`org.bluez`);

btService.getInterface(`/org/bluez/hci0’,’org.bluez.Adapter1`,function(err,Intf){
  Intf.StartDiscovery();

});


const server = http.createServer((request,response)=>{
  btService.getInterface('/', 'org.freedesktop.DBus.ObjectManager', function(err,device_intf){
  device_intf.on('InterfacesAdded', function(devname){
    console.log(devname);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(`New Device Path : ${devname}`);
    response.end();
  });
});
});

server.listen(8080);

console.log('Server started');