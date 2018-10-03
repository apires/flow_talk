// @flow

declare class RO {};
declare class RW {};

// Some sort of KV store
opaque type Store<+T: RO | RW> = { get(string): string, set(string,string): number };

declare function make(): Store<RW>;

function write(s: Store<RW>, key: string, value: string) {
  s.set(key, value);
};
function read<T: RO | RW>(s: Store<T>, key: string): string{
  return s.get(key);
}

function ro(s: Store<RW>): Store<RO> {
  // Zero Copy, is there a way to make this work w/o any?
  // return ((s: any): Store<RO>);

  // Copy
  return {...s};
};

const store = make();
const roStore = ro(store);

write(store, "foo", "bar");
// write(roStore, "foo", "bar");
