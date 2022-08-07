/**
 * @jest-environment jsdom
*/

import { showPublications, createPublication, deletePublication, createUser,saveUser  } from '../src/lib/firebase_utils.js';
import { } from '../src/lib/firebase.js';
import { Home } from '../src/views/home.js';
import { newPublication } from '../src/views/newPublication.js';



jest.mock('../src/lib/firebase.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Debería crear cuenta correo: correo@gmail.com y  password: 1234',async ()=>{
    console.log(createUser('correo@gmail.com','1234'));
    expect(typeof createUser('correo@gmail.com','1234')).toBe('object');
    expect( await createUser('correo@gmail.com','1234')).toEqual({email:'correo@gmail.com',password:'1234'});
  });
});

describe('saveUser',()=>{
  it('debería ser una función',() =>{
    expect(typeof saveUser).toBe('function');
  });
  it('deberia guardar cuenta en firestore',() =>{
    expect()
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