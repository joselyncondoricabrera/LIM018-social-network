
// funciones mock para la función showPublications

export const db = jest.fn();

export const collectionGroup = jest.fn((_db_, _collection_) => _collection_);

export const getDocs = jest.fn((collectionGroup) => Promise.resolve({
  [collectionGroup]: {
    docs: [
      {}
    ],
  }
}));

// funciones mock para la función createPublication
// la notación _variable_ significa que en realidad no lo va tomar 
export const collection = jest.fn((_db_, _users_, _user_ , _publications_) => _publications_);

export const addDoc = jest.fn((collection, type, sex, img, name, age, description) => new Promise(function(resolve, reject) {
  if(!type || !sex || !img || !name || !age || !description) {
    reject(new Error('fail'));
  }
  resolve({
    [collection]: {
      publication: {
        petType: type,
        petSex: sex,
        petName: name,
        petAge: age,
        petDescription: description,
        petImg: img,
      }
    }
  });
}));


// funciones mock para la función updatePublication

export const doc = jest.fn((_db_, _users_, _user_, _publications_, _publication_) =>  _publication_);


export const updateDoc = jest.fn((doc, type, sex, name, age, description, img) => new Promise(function(resolve, reject) {
  if(!doc) {
    reject('promise failed');
  }
  resolve({
    [doc]: {
      petType: type,
      petSex: sex,
      petName: name,
      petAge: age,
      petDescription: description,
      petImg: img,
    }
  })
}));

// funciones mock para la función deletePublication
//export const docD = jest.fn((_db_, _users_, _userUid_, _publications_, _idPublication_) => _idPublication_);
export const deleteDoc = jest.fn((doc) => new Promise(function(resolve, reject) {
  if(!doc) {
    reject('promise failed');
  }
  resolve()
}));
