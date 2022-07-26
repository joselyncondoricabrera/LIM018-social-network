/* eslint-disable no-unused-vars, no-console */
// mokeamos createUserWithEmailAndPassword que es una promesa resuelta
export const app = jest.fn();

export const createUserWithEmailAndPassword = jest.fn((mail, password) => Promise.resolve({
  user: {
    userEmail: mail,
    userPassword: password,
  },
}));
