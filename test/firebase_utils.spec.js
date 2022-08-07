
import { addDoc, collection, doc, updateDoc } from '../src/lib/firebase.js';
import { showPublications, createPublication, updatePublication, deletePublication } from '../src/lib/firebase_utils.js';


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

// test para la función de crear publicaciones
describe('createPublication', () => {
  it('debería ser una función', async () => {
    await expect(typeof createPublication).toBe('function');
  });
  it('debería devolver un objeto', async () => {
    await expect(typeof createPublication('user','perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')).toBe('object');
  });
  it('Debería crear una publicación', () => {
    const result =  {
      publications: {
        publication: {
          petType: 'perro',
          petSex: 'macho',
          petName: 'lucas',
          petAge: '12 meses',
          petDescription: 'muy lindo',
          petImg: 'cc',
        }
      }
    } ;
    createPublication('user','perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
    .then(async () => {
      const prueba = await addDoc(collection.mock.results[0].value,'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
      expect(prueba).toEqual(result)
    })
  });
});

// test para la función de editar publicaciones
describe('updatePublication', () => {
  it('debería ser una función', async () => {
    await expect(typeof updatePublication).toBe('function');
  });
  it('debería devolver un objeto', async () => {
    await expect(typeof updatePublication('publication', 'user', 'perro', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')).toBe('object');
  });
  it('Debería actualizar una publicación', () => {
    const result = {
      publication: {
        petType: 'gato',
        petSex: 'macho',
        petName: 'lucas',
        petAge: '12 meses',
        petDescription: 'muy lindo',
        petImg: 'cc',
      }
    }
    updatePublication('publication', 'user', 'gato', 'macho', 'cc', 'lucas', '12 meses', 'muy lindo')
    .then(async () => {
      const prueba = await updateDoc(doc.mock.results[0].value, 'gato', 'macho', 'lucas', '12 meses', 'muy lindo', 'cc')
      expect(prueba).toEqual(result)
    })
  });
  it('Debería fallar al actualizar una publicación', async () => {
    const result = 'promise failed';
    expect(await updatePublication()).toEqual(result);
  });
});

// test para la función de eliminar publicaciones
describe('deletePublication', () => {
  it('Deberia ser una función', () => {
    expect(typeof deletePublication).toBe('function');
  });
  it('Deberia eliminar el documento', async () => {
    const result = undefined;
    expect(typeof deletePublication('user01','pub01')).toBe('object');
    expect(await deletePublication('user01','pub01')).toEqual(result);
  });
  it('Deberia fallar al eliminar el documento', async () =>{
    const result = 'promise failed';
    expect(await deletePublication()).toEqual(result);
   });
});