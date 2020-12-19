// Comando establecer comunicacion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on("connect", function () {
    console.log("Conectado");

});

socket.on("disconnect", function () {
    console.log("Desconectado");

});

socket.on("estadoActual" , function(data) {
    console.log(data);
    label.text(data.actual);

})


$('button').on('click', function () {

    // Emite el nuevo ticket con un callback que cambia el front
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
            label.text(siguienteTicket);
        })
    })