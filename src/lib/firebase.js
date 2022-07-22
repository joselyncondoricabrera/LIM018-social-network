import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
}
  from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  collectionGroup,
  addDoc,
  getDocs,
  query,
  where,
}
  from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCqyNBMUmtAycnlkwGVANuZa7JyYw2Vtg0',
  authDomain: 'social-network-hugme.firebaseapp.com',
  projectId: 'social-network-hugme',
  storageBucket: 'social-network-hugme.appspot.com',
  messagingSenderId: '98064810188',
  appId: '1:98064810188:web:95af45d902de461c694269',
  measurementId: 'G-4CWFF7HQ9L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

/* Funciones auth (para crear cuenta e iniciar sesión) */

// creando Usuario
const createUser = (mail, password) => createUserWithEmailAndPassword(auth, mail, password);

// sign in user
const signInAuth = (mail, password) => signInWithEmailAndPassword(auth, mail, password);

// sign in with google
const googleAuth = () => signInWithPopup(auth, provider);

// log out user
const logOut = () => signOut(auth);

// verificando si el email es valido
const emailVerification = () => sendEmailVerification(auth.currentUser);

// state user
const userSatate = (state) => onAuthStateChanged(auth, state);

/* Funciones firestore */

// guardando datos del usuario creado en Firestore
const saveUser = async (uid, username, mail) => {
  try {
    // con setDoc establecemos el id de nuestro usuario, en este caso será el id que genera con auth de createUserWithEmailAndPassword
    await setDoc(doc(db, 'users', uid), {
      username,
      email: mail,
    });
  } catch (e) { console.log(e); }
};

// trayendo la data del user
const getUserData = async (uid) => {
  const docRef = doc(db, 'users', uid);
  try {
    // con setDoc establecemos el id de nuestro usuario, en este caso será el id que genera con auth de createUserWithEmailAndPassword
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  } catch (e) { console.log(e); }
};

// crear publicación
const createPublication = async (type, sex, img, name, age, description) => {
  try {
    const user = auth.currentUser.uid;
    const pubCollection = collection(db, 'users', user, 'publications');
    await addDoc(pubCollection, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) { console.log(e); }
};

// subir y descargar imagen
const uploadImg = async (img) => {
  const imgRef = ref(storage, img.name);
  const metadata = {
    contentType: img.type,
  };
  try {
    const uploadTask = await uploadBytes(imgRef, img, metadata);
    console.log(await getDownloadURL(uploadTask.ref));
    return await getDownloadURL(uploadTask.ref);
  } catch (e) { console.log(e); }
};

// listar publicaciones
const showPublications = async () => {
  try {
    const publications = collectionGroup(db, 'publications');
    return await getDocs(publications);
  } catch (e) { console.log(e); }
};

// publicaión tocada
const clickPublication = async (name) => {
  try {
    const publications = query(collectionGroup(db, 'publications'), where('petName', '==', name));
    return await getDocs(publications);
  } catch (e) { console.log(e); }
};

const publicationsOfCurrentUser = async (pub) => {
  try {
    const user = auth.currentUser.uid;
    const publications = query(collection(db, 'users', user, 'publications'), where('petName', '==', pub));
    return await getDocs(publications);
  } catch (e) { console.log(e); }
};

const updatePublication = async (pub, user, type, sex, img, name, age, description) => {
  try {
    const publication = doc(db, 'users', user, 'publications', pub);
    await updateDoc(publication, {
      petType: type,
      petSex: sex,
      petImg: img,
      petName: name,
      petAge: age,
      petDescription: description,
    });
  } catch (e) { console.log(e); }
};

/* const deletePublication =  (name)=>{
  console.log('funcion activo');
  console.log(name);

  onAuthStateChanged( auth, user => {
    if(user){
      const consulta = getDocs(query(collection(db,"users", user.uid , "publications"), where("petName", "==",name )));
      consulta
      .then(
        function(consulta){
            consulta.forEach( publication  => {

          //  console.log(publication.id,"=>",publication.data());
            var ref = doc(db,"users",user.uid,"publications",publication.id);
            deleteDoc(ref)
            .then(()=>{
              alert('se eliminó correctamente el documento');
            })
            .catch((e)=>{
              alert('problemas para eliminar');
            })

          }

          )
        }

      )
      .catch((e)=>{
        alert("no se puede eliminar esta publicación, es de otro usuario");
      }

      );
      }
  })
} */

const deletePublication = async (userUid, idPublication) => {
  try {
    await deleteDoc(doc(db, 'users', userUid, 'publications', idPublication));
  } catch (e) { console.log(e); }
};

export {
  userSatate,
  createUser,
  signInAuth,
  googleAuth,
  logOut,
  emailVerification,
  saveUser,
  getUserData,
  createPublication,
  uploadImg,
  showPublications,
  clickPublication,
  updatePublication,
  deletePublication,
  publicationsOfCurrentUser,
};
