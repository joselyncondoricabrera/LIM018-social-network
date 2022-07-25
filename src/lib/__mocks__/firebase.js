/* eslint-disable no-unused-vars, no-console */
// mokeamos createUserWithEmailAndPassword que es una promesa resuelta
export const createUserWithEmailAndPassword = (mail, password) => jest.fn(Promise.resolve({
  user: {
    userEmail: mail,
    userPassword: password,
  },
}));

/* export const loginUser = jest.fn((userEmail, userPassword) => Promise.resolve({
  user: {
    userEmail,
    userPassword,
  },
}));
 */
