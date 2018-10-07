// @flow
import {make, write, ro} from './dbConnection';

import type {DBConnection} from './dbConnection';

const store = make();
const roStore = ro(store);

function writeFooBar<T>(store){
  write(store, "foo", "bar");
}

writeFooBar(store);
writeFooBar(roStore);
