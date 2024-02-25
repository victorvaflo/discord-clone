const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
  const userDeatails = socket.user;
  console.log(socket.user);

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDeatails.userId,
  });
};

module.exports = newConnectionHandler;
