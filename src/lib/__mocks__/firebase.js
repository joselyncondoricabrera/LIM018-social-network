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
/* export const auth = jest.fn({
  currentUser: {
    uid: '001'
  }
});
console.log(auth) */

// la notación _variable_ significa que en realidad no lo va tomar 
export const collection = jest.fn((_db_, _collection_, _user_, publications) => publications );

export const addDoc = jest.fn((collection, type, sex, img, name, age, description) => new Promise(function(resolve, reject) {
  if(!type || !sex || !img || !name || !age || !description) {
    reject(new Error('fail'));
  }
  resolve({
    [collection]: {
      petType: type,
      petSex: sex,
      petName: name,
      petAge: age,
      petDescription: description,
      petImg: img,
    }
  });
}));














// funciones mock para la función updatePublication

export const doc = jest.fn((_db_, _users_, _user_, _publications_, pub) => pub);

export const updateDoc = (type, sex, img, name, age, description) => jest.fn((doc) => Promise.resolve({
  [doc]: {
    petType: type,
    petSex: sex,
    petName: name,
    petAge: age,
    petDescription: description,
    petImg: img,
  }
}));
/* const updatePublication = async (pub, user, type, sex, img, name, age, description) => {
  try {
    const publication = doc(db, 'users', user, 'publications', pub);
    return await updateDoc(publication, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) {
    return e;
    // console.log(e);
  }
}; */
