// @flow

opaque type Server = mixed;

type Connecting = {
  kind: 'connecting',
  whenInitiated: number,
};

type Connected = {
  kind: 'connected',
  lastSuccessfulPing: {
    id: string,
    time: number,
  },
  sessionID: string,
}

type Disconnected = {
  kind: 'disconnected',
  whenDisconnected: number
};

type NetworkConnection<T: Connected | Connecting | Disconnected> = {
  state: T,
  server: Server
};


function connect(): NetworkConnection<Connecting> {
  return {
    state: {
      kind: 'connecting',
      whenInitiated: Date.now(),
    },
    server: 'A Server LOL'
  }
}

// The type system here will guarantee that you can't go from Connecting to Disconnected, for instance
function disconnect(conn: NetworkConnection<Connected>): NetworkConnection<Disconnected> {
  // do something with conn.server to DC
  return {
    server: conn.server,
    state: {
      kind: 'disconnected',
      // Errors now that we forgot to set the rest of the stuff
    }
  }
}
