// funciones mock para la función deletePublication
export const doc = jest.fn((_db_, _users_, _userUid_, _publications_, _idPublication_)=> _idPublication_);
export const deleteDoc = jest.fn((doc) => Promise.resolve());
