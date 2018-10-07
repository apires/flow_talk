// @flow
import DB from './someDBDriver';
import type {DBDriver} from './someDBDriver.js';

declare export opaque type RO;
declare export opaque type RW;

export opaque type DBConnection<T: RO | RW> = DBDriver;

export function make(): DBConnection<RW>{
  return DB();
}

export function write(s: DBConnection<RW>, key: string, value: string) {
  s.set(key, value);
};

export function read<T: RO | RW>(s: DBConnection<T>, key: string): string{
  return s.get(key);
}

export function ro(s: DBConnection<RW>): DBConnection<RO> {
  return (s: DBDriver)
};
