// @flow

type NetworkConnectionState = 'connecting' | 'connected' | 'disconnected';
opaque type Server = mixed;

type NetworkConnection = {
  state: NetworkConnectionState,
  server: Server,
  lastSuccessfulPingTime: ?number,
  lastSuccessfulPingID: ?string,
  sessionID: ?string,
  whenInitiated: ?number,
  whenDisconnected: ?number,
}

// What's the problem here ?
// There are implicit invariants that are not reflected in the code.
// e.g. whenDisconnected makes no sense when state is not 'disconnected' !
//
// All state-dependent properties have to be nullable because they don't exist
// in all different connection states

function connect(): NetworkConnection {
  return {
    state: 'connecting',
    server: '???',
    lastSuccessfulPingID: null,
    lastSuccessfulPingTime: null,
    sessionID: null,
    whenInitiated: Date.now(),
    whenDisconnected: null,
  }
}

function disconnect(conn: NetworkConnection): NetworkConnection {
  return {
    ...conn,
    state: 'disconnected', // It's easy to forget that you didn't set whenDisconnected
  }
}
