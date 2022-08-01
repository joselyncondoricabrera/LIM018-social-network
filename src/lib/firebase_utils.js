import { 
  db,
  getDocs,
  collection,
  collectionGroup,
  addDoc, } from './firebase.js'

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

export {
    showPublications,
    createPublication,
}