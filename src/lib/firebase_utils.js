import { db, getDocs, collectionGroup } from './firebase.js'

// listar publicaciones
const showPublications = async () => {
    try {
      const publications = collectionGroup(db, 'publications');
      return await getDocs(publications);
    } catch (e) {
      return e;
      // console.log(e);
    }
};

export {
    showPublications,
}