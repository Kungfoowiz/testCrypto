import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hash } from './hash';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hashes = [
      {id: 11, hashName: 'Mr. Nice', hashText: '9YRJVSFL6D'},
      {id: 12, hashName: 'Narco', hashText: 'R7EKGP3YU4'},
      {id: 13, hashName: 'Bombasto', hashText: '6XP84E3AWJ'},
      {id: 14, hashName: 'Celeritas', hashText: 'GNM8RUY6Z4'},
      {id: 15, hashName: 'Magneta', hashText: '75ZWND8R9L'},
      {id: 16, hashName: 'RubberMan', hashText: 'SH4Z86DPLX'},
      {id: 17, hashName: 'Dynama', hashText: '647KCX3WQD'},
      {id: 18, hashName: 'Magma', hashText: 'RX83CYUFQK'},
      {id: 19, hashName: 'Tornado', hashText: 'ZWN6QPURVX'},
    ];
    return {hashes};
  }

  // Overrides the genId method to ensure that a hash always has an id.
  // If the hashes array is empty,
  // the method below returns the initial number (11).
  // if the hashes array is not empty, the method below returns the highest
  // hashes id + 1.
  genId(hashes: Hash[]): number {
    return hashes.length > 0 ? Math.max(...hashes.map(hash => hash.id)) + 1 : 11;
  }
}