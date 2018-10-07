// @flow
export type DBDriver = { get(string): string, set(string,string): number };

declare var DBDriverFactory: () => DBDriver;
export default DBDriverFactory;
