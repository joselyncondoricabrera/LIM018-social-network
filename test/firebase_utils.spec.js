/**
 * @jest-environment jsdom
*/

import { showPublications, createPublication, deletePublication } from '../src/lib/firebase_utils.js';
import { createUser } from '../src/lib/firebase.js';
import { Home } from '../src/views/home.js';
import { newPublication } from '../src/views/newPublication.js';



jest.mock('../src/lib/firebase.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

/*describe('showPublications', () => {
  document.body.appendChild(Home());
  const sectionPubs = document.querySelector('.home-publications');
  const pub = document.querySelector('.publication-card');
  it('debería ser una función', () => {
    expect(typeof showPublications).toBe('function');
  });
  it('Deberían mostrarse la sección de publicaciones', () => {
    expect(sectionPubs instanceof HTMLElement).toBe(true);
  });
  it('Deberían mostrarse las publicaciones', () => {
    showPublications()
    .then((publications) => {
      expect(pub instanceof HTMLElement).toBe(false);
      expect(publications[0]).toBe('object');
    })
  });
});*/


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