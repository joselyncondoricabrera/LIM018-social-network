import { showPublications, createPublication, deletePublication } from '../src/lib/firebase_utils.js';

jest.mock('../src/lib/firebase.js');

describe('deletePublication',()=>{
  it('Deberia ser una función', ()=>{
    expect(typeof deletePublication).toBe('function');
  });
  it('Deberia eliminar el documento', async ()=>{
   // console.log( await deletePublication('user01','pub01'));
    const result = undefined;
    expect(typeof deletePublication('user01','pub01')).toBe('object');
    expect(await deletePublication('user01','pub01')).toEqual(result);
  });

});
