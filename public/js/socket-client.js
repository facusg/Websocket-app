const lblOnline = document.querySelector("#lblOnline");
const lbloffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

//socket del cliente
const socket = io();

socket.on("connect", () => {
  console.log("Conectado");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("desconectado");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "123abc",
    fecha: new Date().getTime(),
  };

  socket.emit("enviar-mensaje", payload);
});
