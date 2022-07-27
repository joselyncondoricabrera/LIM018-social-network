/* eslint-disable no-trailing-spaces, no-unused-vars,
 no-console, brace-style, space-infix-ops */
import { createUser } from '../src/lib/firebase.js';

jest.mock('../src/lib/config.js');
jest.mock('../src/lib/firebase.js');

// const config = require('../src/lib/config.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    // config.initializeApp = jest.fn();
    expect(typeof createUser).toBe('function');
  });
});
