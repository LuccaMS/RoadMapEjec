const EventEmmiter = require("events");
const uuid = require("uuid");

class Logger extends EventEmmiter{
    log(msg)
    {
        this.emit("Message", {id: uuid.v4(), msg:msg});
    }
}
module.exports = Logger;