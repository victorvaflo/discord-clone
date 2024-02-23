const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
  const userDeatails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDeatails.id,
  });
};

module.exports = newConnectionHandler;
