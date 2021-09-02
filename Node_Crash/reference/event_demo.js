const EventEmitter = require("events");

class MyEmitter extends EventEmitter { }

const myEmmiter = new MyEmitter();

myEmmiter.on("Event",() => console.log("Event Fired!"));

myEmmiter.emit("Event");