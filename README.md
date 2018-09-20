### Version libs
```
    "@aspnet/signalr": "^1.0.3",
    "tslib": "^1.9.3",
    "websocket": "^1.0.28",
    "xmlhttprequest": "^1.8.0"
```


### Run
```
npm i

node index.js
```

### Tested with 
```
signalr core 1.0.0-alpha2-final
net core version 2.0
```

Response
```
Debug: Starting HubConnection.
Debug: Starting connection with transfer format 'Text'.
Trace: (WebSockets transport) Connecting
Information: WebSocket connected to wss://signalr-dev.azurewebsites.net/repoHub
Debug: Sending handshake request.
Trace: (WebSockets transport) sending data. String data of length 32.
Information: Using HubProtocol 'json'.
Connection started!
Trace: (WebSockets transport) sending data. String data of length 108.
Trace: (WebSockets transport) data received. String data of length 44.
Debug: Server handshake complete.
```