// @flow

import Server from "./networkServer";

// Make invalid states unrepresentable

type tConnecting = {
  kind: 'connecting',
  whenInitiated: number,
};

type tConnected = {
  kind: 'connected',
  lastSuccessfulPing: {
    id: string,
    time: number,
  },
  sessionID: string,
}

type tDisconnected = {
  kind: 'disconnected',
  whenDisconnected: number
};

type tNetworkConnection<T: tConnected | tConnecting | tDisconnected> = {
  state: T,
  server: typeof Server
};


function connect(): tNetworkConnection<tConnecting> {
  return {
    state: {
      kind: 'connecting',
      whenInitiated: Date.now(),
    },
    server: 'A Server LOL'
  }
}

// The type system here will guarantee that you can't go from tConnecting to tDisconnected, for instance
function disconnect(conn: tNetworkConnection<tConnected>): tNetworkConnection<tDisconnected> {
  // do something with conn.server to DC
  return {
    server: conn.server,
    state: {
      kind: 'disconnected',
      // Errors now that we forgot to set the rest of the stuff
      // whenDisconnected: Date.now(),
    }
  }
}
