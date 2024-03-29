const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHantlers/newConnectionHandler");
const disconnectHantler = require("./socketHantlers/disconnectHantler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHantler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
};
