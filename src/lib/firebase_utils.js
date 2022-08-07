import { 
  db,
  auth,
  doc,
  getDocs,
  collection,
  collectionGroup,
  addDoc,
  deleteDoc,
  createUserWithEmailAndPassword,
 } from './firebase.js'

  const createUser = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

  const saveUser = async (uid, username, mail) => {
    try {
      // con setDoc establecemos el id de nuestro usuario,
      // en este caso será el id que genera con auth de createUserWithEmailAndPassword
      return await setDoc(doc(db, 'users', uid), {
        username,
        email: mail,
      });
    } catch (e) {
      return e;
      // console.log(e);
    }
  };

// listar publicaciones
const showPublications = async () => {
    try {
      const publications = collectionGroup(db, 'publications');
      return await getDocs(publications);
    } catch (error) {
      return error; 
    }
};

const createPublication = async (type, sex, img, name, age, description) => {
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
};


const deletePublication = async (userUid, idPublication) => {
  try {
    // hace referencia a un documento
    const pubRef = doc(db, 'users', userUid, 'publications', idPublication)
    await deleteDoc(pubRef);
  } catch (e) { console.log(e); }
};

export {
    createUser,
    showPublications,
    createPublication,
    deletePublication,
    saveUser,
}