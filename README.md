### SignalR connection testing

### Run
```
npm i

# Test with `@aspnet/signalr`
node index_signalr.js

# Test with `@aspnet/signalr-client`
node index_signalr-client.js
```

### Tested with 
```
signalr core 1.0.0-alpha2-final
net core version 2.0
```
---------

*Test with `@aspnet/signalr`*

Libs
```
  "dependencies": {
    "@aspnet/signalr": "^1.0.3",
    "tslib": "^1.9.3",
    "websocket": "^1.0.28",
    "xmlhttprequest": "^1.8.0"
  }
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

*Test with `@aspnet/signalr-client`*

Libs
```
"dependencies": {
    "@aspnet/signalr-client": "1.0.0-alpha2-final",
    "websocket": "^1.0.28",
    "xmlhttprequest": "^1.8.0"
  }
```

Response
```
Information: WebSocket connected to wss://signalr-dev.azurewebsites.net/repoHub?id=dae29294-f2c1-40a4-bf51-7fdbb3b8ba04
Information: Using HubProtocol 'json'.
Connection started!
```

## Install @aspnet/signalr-client with React Native
In React Native, we don't need install `websocket` and `xmlhttprequest`. Install `@aspnet/signalr-client` by command
```
npm install @aspnet/signalr-client@1.0.0-alpha2-final --save
```
You will get error "Can't find variable Buffer" if config `signalr-client` like `index_signalr-client.js`. You update follow example below:
```

import { HubConnection } from '@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final.min.js';

    let connection = new HubConnection('https://itw-mss-signalr-dev.azurewebsites.net/repositoryHub');

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
```

