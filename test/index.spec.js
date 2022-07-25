/* eslint-disable no-trailing-spaces, no-unused-vars, no-console, brace-style */
// importamos la funcion que vamos a testear
// import { createUserWithEmailAndPassword } from '../src/lib/__mocks__/firebase.js';
import { createUser } from '../src/lib/firebase.js';

// jest.mock('../src/lib/__mocks__/config.js');
jest.mock('../src/lib/config.js');
jest.mock('../src/lib/firebase.js');

/* describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('debería crear un usuario y contrasña', () => createUser('user@mail.com', 'contraseña')
    .then((data) => { 
      expect(data.user.userEmail).toBe('user@mail.com');
      expect(data.user.userPassword).toBe('contraseña'); }));
}); */
/* describe('loginUser', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('debería dejar pasar al usuario', () => loginUser('user@mail.com', 'contraseña')
    .then((data) => {
      expect(data.user.userEmail).toBe('user@mail.com');
      expect(data.user.userPassword).toBe('contraseña'); }));
}); */

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser()).toBe('function');
  });
});
