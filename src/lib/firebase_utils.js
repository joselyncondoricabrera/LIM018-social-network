import { 
  db,
  getDocs,
  collectionGroup,
  collection,
  addDoc,
  doc, 
  updateDoc,
} from './firebase.js'

// listar publicaciones
const showPublications = async () => {
    const publications = collectionGroup(db, 'publications');
    return await getDocs(publications);
};

// crear publicaciones
const createPublication = async (user, type, sex, img, name, age, description) => {
  try {
    const pubCollection = collection(db, 'users', user, 'publications');
    return await addDoc(pubCollection, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (error) {
    return error;
  }
};

// actualizar publicaciones
const updatePublication = async (pub, user, type, sex, img, name, age, description) => {
  const publication = doc(db, 'users', user, 'publications', pub);
  return await updateDoc(publication, {
    petType: type,
    petSex: sex,
    petImg: img,
    petName: name,
    petAge: age,
    petDescription: description,
  });
};

export {
    showPublications,
    createPublication,
    updatePublication,
}