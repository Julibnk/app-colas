var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscitorio1 = $('#lblEscritorio1');
var lblEscitorio2 = $('#lblEscritorio2');
var lblEscitorio3 = $('#lblEscritorio3');
var lblEscitorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];
var lblEscritorios = [lblEscitorio1,lblEscitorio2,lblEscitorio3,lblEscitorio4];

socket.on('estadoActual', function(data){

    actualizaHTML(data.ultimos4);

    // $('')
    console.log(data);
})


socket.on('ultimos4', function(data){

    var audio = new Audio('audio/new-ticket.mp3');
    audio.muted = true;
    audio.play();
    audio.muted = false;
    actualizaHTML(data.ultimos4);

})
function actualizaHTML( ultimos4 ){

    for( var i = 0; i <= ultimos4.length - 1; i++){
        lblTickets[i].text('Ticket '+ ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio '+ ultimos4[i].escritorio);
    }


}