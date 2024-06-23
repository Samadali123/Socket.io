const io = require("socket.io")();
const socketapi = {
    io: io
};

// emit : send
// on : receive
// io : server
// socket : one user
// broadcast : jo send kre usko chod ke sabko send krne ke liye
// channel: jis pe message send krna ho.

// Add your socket.io logic here!
io.on("connection", function (socket) {
    console.log("A user connected");
    socket.on(`sony`, msg =>{
        socket.broadcast.emit(`max`, msg);
    })
});


// end of socket.io logic
// socket mtlb frontend yah ek user
// io means bht saare user yah poora server
// emit means send 
// on means receive 
// socket.emit se sirf jo message bhegega usi ko wapis ayega server se

// socket.broadcast.emit se jo bhegeag use chod ke sabko jayega message server se using socket.broadcast.emit se 

module.exports = socketapi;