/* eslint-disable no-unused-vars, no-console, no-trailing-spaces, prefer-promise-reject-errors */

export const auth = jest.fn();

// mokeamos createUserWithEmailAndPassword que es una promesa resuelta
export const createUser = jest.fn();

export const user = jest.fn();

export const db = jest.fn();

export const collectionGroup = jest.fn((_db_, _collection_) => _collection_);

export const getDocs = jest.fn((collectionGroup) => Promise.resolve({
  [collectionGroup]: {
    pub: {}
  }
}));

export const collection = jest.fn((_db_, _collection_, _user_, _subCollection_) => _subCollection_ );

export const addDoc = (name, age, description) => jest.fn((collection) => Promise.resolve({
  [collection]: {
    petName: name,
    petAge: age,
    petDescription: description,
  }
}));

export const uploadImg = (img) => jest.fn()

export const doc = jest.fn((_db_, _users_, _userUid_, _publications_, _idPublication_)=> _idPublication_);
export const deleteDoc = jest.fn((doc) => Promise.resolve());
console.log(deleteDoc);
console.log(doc);

   /* const deletePublication = async (userUid, idPublication) => {
        try {
          await deleteDoc(doc(db, 'users', userUid, 'publications', idPublication));
        } catch (e) { console.log(e); }
      };*/

/* const uploadImg = async (img) => {
  const imgRef = ref(storage, img.name);
  const metadata = {
    contentType: img.type,
  };
  try {
    const uploadTask = await uploadBytes(imgRef, img, metadata);
    // console.log(await getDownloadURL(uploadTask.ref));
    return await getDownloadURL(uploadTask.ref);
  } catch (e) {
    return e;
    // console.log(e);
  }
}; */

/* const createPublication = async (type, sex, img, name, age, description) => {
  try {
    const user = auth.currentUser.uid;
    const pubCollection = collection(db, 'users', user, 'publications');
    return await addDoc(pubCollection, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) {
    console.log(e);
    return e;
  }
}; */

export const signInAuth = () => Promise.resolve({
  user: {
    emailVerified:  true,
  }
})