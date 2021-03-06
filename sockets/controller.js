const sockerController = (socket) => {
  console.log("Cliente connection", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = "123456789";
    callback(id);

    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  sockerController,
};
