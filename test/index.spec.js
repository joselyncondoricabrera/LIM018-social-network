/* eslint-disable no-trailing-spaces, no-unused-vars,
 no-console, brace-style, space-infix-ops, jest/valid-expect, arrow-body-style */
import { showPublications } from '../src/lib/firebase_utils.js';
import { createUser } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('showPublications', () => {
  it('debería ser una función', () => {
    expect(typeof showPublications).toBe('function');
  });
});
