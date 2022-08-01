/**
 * @jest-environment jsdom
*/

import { showPublications, createPublication } from '../src/lib/firebase_utils.js';
import { createUser } from '../src/lib/firebase.js';
import { Home } from '../src/views/home.js';
import { newPublication } from '../src/views/newPublication.js';


jest.mock('../src/lib/firebase.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('showPublications', () => {
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
      expect(pub instanceof HTMLElement).toBe(true);
      expect(publications[0]).toBe('object');
    })
  });
});

describe('createPublication', () => {
  document.body.appendChild(Home());
  const addButton =  document.querySelector('.header__add-button');
  it('debería ser una función', () => {
    expect(typeof createPublication).toBe('function');
  });
  it('el boton de crear publicación debería existir', () => {
    expect(createButton instanceof HTMLElement).toBe(true);
  });
  // primero el user debe haberle dado click al boton para pasar a crear la publicación
  addButton.click();
  document.body.appendChild(newPublication());
  const formNewPub = document.querySelector('.form__new-publication');
  const question1 = document.querySelector('.question4__petname');
  const question2 = document.querySelector('.question5__petAge');
  const question3 = document.querySelector('.question6__description');
  const createButton = document.querySelector('.create-publication'); 
  it('al dar click al boton, este me redirige a la vista de newPublication', () => {
    expect(formNewPub instanceof HTMLElement).toBe(true);
  });
 /*  it('debería poder crear una publicación', () => {
    const q1 = question1.value = 'lala';
    const q2 = question2.value = 'lala';
    const q3 = question3.value = 'lala';
    createButton.click();
    expect(typeof createPublication(q1, q2, q3)).toBe('object');
  }); */
});