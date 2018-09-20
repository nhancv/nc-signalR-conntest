const signalR = require('@aspnet/signalr');
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
WebSocket = require('websocket').w3cwebsocket;
//https://docs.microsoft.com/en-us/aspnet/core/signalr/configuration?view=aspnetcore-2.1
let connection = new signalR.HubConnectionBuilder()
  .withUrl('https://signalr-dev.azurewebsites.net/repoHub', {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets, //skipNegotiation only work with websocket
    // transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling
    
  })
  .configureLogging(signalR.LogLevel.Trace)
  .build();

connection.on('OnEntityUpdated', data => {
  console.log('OnEntityUpdated', data);
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
