const lblOnline = document.querySelector("#lblOnline");
const lbloffline = document.querySelector("#lblOffline");

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
