/**
 * @jest-environment jsdom
*/
import{ informationView } from '../src/views/informationView.js';
import{ editPublication } from '../src/views/editPublication.js';

// se mockea firebase porque las vistas utilizan las funciones exportadas
jest.mock('../src/lib/firebase.js');

// view information
describe('Component InformationView', () => {
  document.body.appendChild(informationView()); 
  const sectionInformation = document.querySelector('.publication-information');
  it('Debería mostrar información de la mascota', () => {
    expect( sectionInformation instanceof HTMLElement).toBe(true);
  }); 
});

// edit publication
describe('Component editPublication', () => {
  document.body.appendChild(editPublication()); 
  const formEdit = document.querySelector('.form__edit-publication');
  it('Debería mostrar información de la mascota', () => {
    expect( formEdit instanceof HTMLElement).toBe(true);
  }); 
});
