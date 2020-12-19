const {
    io
} = require('../server');

const {
    TicketControl
} = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('siguienteTicket', (data, callback) => {

        // Llama a la logica de siguiente ticket y manda los datos en el callback al front
        let siguienteTicket = ticketControl.siguiente();
        console.log(siguienteTicket);
        callback(siguienteTicket);

    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        client.broadcast.emit('ultimos4', {ultimos4 : ticketControl.getUltimos4()} );

    })

    


    //Emitir estado actual
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    })


});