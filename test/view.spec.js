/**
 * @jest-environment jsdom
*/
import{ informationView } from '../src/views/informationView.js';

// por qué se tiene que mockear este módulo si no requiere de estos ?
jest.mock('../src/lib/firebase.js');

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
    });*/

  
    // view information
    describe('Component InformationView', ()=>{
      document.body.appendChild(informationView()); 
      const sectionInformation = document.querySelector('.publication-information');
      it('Debería mostrar información de la mascota',()=>{
        expect( sectionInformation instanceof HTMLElement).toBe(true);
      }); 
    });
    