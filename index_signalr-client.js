const signalR = require('@aspnet/signalr-client');
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
WebSocket = require('websocket').w3cwebsocket;

let connection = new signalR.HubConnection('https://signalr-dev.azurewebsites.net/repoHub');

connection.on('clientOnEntityUpdated', data => {
  console.log('clientOnEntityUpdated', data);
});

connection
  .start()
  .then(() => {
    console.log('Connection started!');
    let testID = 234;
    connection
      .invoke('Subscribe', 'General', 'Message', 'MessageContextId', testID)
      .catch(err => console.error('invoke', err));
  })
  .catch(error => console.error(error));
