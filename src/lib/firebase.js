import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";
import { 
  getAuth,
  signOut,
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
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
  onSnapshot,
  query, 
  where,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCqyNBMUmtAycnlkwGVANuZa7JyYw2Vtg0",
    authDomain: "social-network-hugme.firebaseapp.com",
    projectId: "social-network-hugme",
    storageBucket: "social-network-hugme.appspot.com",
    messagingSenderId: "98064810188",
    appId: "1:98064810188:web:95af45d902de461c694269",
    measurementId: "G-4CWFF7HQ9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

//crear publicaión
const createPublicationF = (type, sex, img, name, age, description) => {
  const user = auth.currentUser.uid
  const imgRef = ref(storage, img.name);
  const metadata = {
    contentType: img.type,
  };

  // subir imagen
  const uploadImg = uploadBytes(imgRef, img, metadata);
  uploadImg
  .then(snapshot => getDownloadURL(snapshot.ref))
  .then( url => {
    console.log(url)
    const pubCollection = collection(db, "users", user, "publications");
    addDoc(pubCollection, { 
      petType: type, 
      petSex: sex , 
      petImg: url, 
      petName: name, 
      petAge: age,
      petDescription: description
    }) 
  })
}

// listar publicaciones
const listPublications = (document) => {
  //onAuthStateChanged -> para obtener el usuario con sesión activa  user.uid
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const publications =  collectionGroup(db,"publications");
     getDocs(publications)
      .then(function(publications) {
        publications.forEach(publication => {
          const pub = publication.data()
          document.innerHTML += `
          <div class="card publication-card">
            <img class="card-img" src=${pub.petImg}/>
            <div class="card card-info">
              <p class="card-name">${pub.petName}</p>
            </div>
          </div>
          `
        });
      })
      .catch(function(error) {
         alert('Algo salio mal, intentalo más tarde!')
      });
    }else {
      console.log('no existe')
    }
  });
}

const informatioPub = (pub) => {
  const a = document.querySelector('.publication-information');
  const b = document.querySelector('.pet-name');
  b.innerHTML = `${pub.petName}`
  a.innerHTML = `
      <img src=${pub.petImg}>
      <div class="information-content">
        <h1>Acerca de:</h1>
        <div class="text-caracter-pet">
          <p>Tipo de mascota:</p>
          <p>${pub.petType}</p>
        </div>
        <div class="text-caracter-pet">
          <p>Sexo de la mascota:</p>
          <p>${pub.petSex}</p>
        </div>
        <div class="text-caracter-pet">
          <p>Edad de la mascota en meses:</p>
          <p>${pub.petAge}</p>
        </div>
      </div>
      <p class="description">${pub.petDescription}</p>
  `
}

const updatePublication = (pub, type, sex, img, name, age, description) => {
  onAuthStateChanged(auth, user => {
    if(user){
      const publications = query(collection(db, "users", user.uid, "publications"), where("petName", "==", pub));
      getDocs(publications)
      .then(function(publications){
        publications.forEach((publication) => {
          const imgRef = ref(storage, img.name);
          const metadata = {
             contentType: img.type,
          };
          const uploadImg = uploadBytes(imgRef, img, metadata);
          uploadImg
          .then(snapshot => getDownloadURL(snapshot.ref))
          .then( url => {
            const publicationDoc = doc(db, "users", user.uid, "publications", publication.id);
            updateDoc(publicationDoc, {
              petType: type, 
              petSex: sex , 
              petImg: url, 
              petName: name, 
              petAge: age,
              petDescription: description
            })
          })
        });
        alert('La publicación fue actualizada!')
      })
      .catch(function(error) {
        console.log(error)
        alert('Algo salio mal, intentalo más tarde!')
      });
    }
  })
}

const searchPub = (name) => {
  window.location.hash = '#/information';
  onAuthStateChanged(auth, user => {
    if(user){
      const publications = query(collectionGroup(db,"publications"), where("petName", "==", name));
      console.log(publications);
      getDocs(publications)
      .then(function(publications){
        publications.forEach((doc) => {
          console.log(doc.data());
          informatioPub(doc.data())
        });
      })
      .catch(function(error) {
        console.log(error)
       alert('Algo salio mal, intentalo más tarde!')
      });
    }
  })
}

const deletePublication =  (name)=>{
  console.log('funcion activo');
  console.log(name);
  
  onAuthStateChanged( auth, user => {
    if(user){
      const consulta = getDocs(query(collection(db,"users", user.uid , "publications"), where("petName", "==",name )));
      consulta
      .then(
        function(consulta){
          consulta.forEach( publication  => {
            
            console.log(publication.id,"=>",publication.data());
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
}

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



/* Funciones firestore */

// guardando datos del usuario creado en Firestore
const saveUser = async (uid, username, mail) => {
  try {
    //con setDoc establecemos el id de nuestro usuario, en este caso será el id que genera con auth de createUserWithEmailAndPassword
    await setDoc(doc(db, "users", uid), {
      username: username,
      email: mail,
    });
  } catch(e) { console.log(e) }
}

// trayendo la data del user
const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid)
  try {
    //con setDoc establecemos el id de nuestro usuario, en este caso será el id que genera con auth de createUserWithEmailAndPassword
   const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch(e) { console.log(e) }
}


export {
  createUser,
  signInAuth,
  googleAuth,
  logOut,
  emailVerification,
  saveUser,
  getUserData,
  createPublicationF, 
  listPublications, 
  searchPub, 
  informatioPub, 
  updatePublication,
  deletePublication
};