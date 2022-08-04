import { addDoc, collection } from '../src/lib/firebase.js';
import { showPublications, createPublication, updatePublication } from '../src/lib/firebase_utils.js';

jest.mock('../src/lib/firebase.js');

// test para la función de mostrar publicaciones
describe('showPublications', () => {
  it('debería ser una función', async () => {
    await expect(typeof showPublications).toBe('function');
  });
  it('Deberían mostrarse las publicaciones', () => {
    const result =  { publications: { docs: [{}] } } ;
    showPublications()
    .then((publications) => {
      expect(typeof publications).toBe('object');
      expect(publications).toEqual(result);
    })
  });
});

// test para la función de crear publicaciones
describe('createPublication', () => {
  it('debería ser una función', async () => {
    await expect(typeof createPublication).toBe('function');
  });
  it('debería devolver un objeto', async () => {
    await expect(typeof createPublication('perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')).toBe('object');
  });
  it('Debería crear una publicación', () => {
    const result =  {
      publications: {
        petType: 'perro',
        petSex: 'macho',
        petImg: 'cc',        
        petName: 'lucas',
        petAge: '12 meses',
        petDescription: 'muy lindo',
      }
    } ;
    const user = jest.fn();
    createPublication(user,'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
    .then(async () => {
      const prueba = await addDoc(collection.mock.results[0].value,'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
      expect(prueba).toEqual(result)
    })
  });
});

/* // test para la función de editar publicaciones
describe('updatePublication', () => {
  it('debería ser una función', async () => {
    await expect(typeof updatePublication).toBe('function');
  });
  it('debería devolver un objeto', async () => {
    const user = jest.fn();
    console.log(await updatePublication('publication', user , 'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo'))
    /* updatePublication('publication', user , 'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
    .then((publication) => {
      console.log(publication)
    })
    //console.log(updatePublication('publication', user , 'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo'))
    await expect(typeof updatePublication('publication', user , 'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')).toBe('object');
  });
}); */