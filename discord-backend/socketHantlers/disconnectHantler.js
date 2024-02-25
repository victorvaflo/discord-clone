const serverStore = require("../serverStore");

const disconnectHantler = (socket) => {
  serverStore.removeConnectedUser(socket.id);
};
module.exports = disconnectHantler;
