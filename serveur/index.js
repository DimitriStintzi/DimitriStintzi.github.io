const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8080}, ()=>{
    console.log("server started");
});

// Dictionnaire pour stocker temporairement les noms d'utilisateur
const connectedUsers = {};

wss.on("connection", ws => {
    console.log("New client connected");

    // Gestion de la réception du nom d'utilisateur
    ws.on("message", function incoming(username){
        console.log(username + " connected");
        
        // Ajouter l'utilisateur au dictionnaire
        connectedUsers[ws] = username;

        // Diffuser le message à tous les clients, y compris Unity
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(username + " joined the chat");
            }
        });
    });

    ws.on("close",() =>{
        console.log("Client disconnected");

        // Supprimer l'utilisateur du dictionnaire lorsqu'il se déconnecte
        delete connectedUsers[ws];
    });
});
