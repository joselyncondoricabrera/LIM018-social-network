import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";
import { 
  getAuth, 
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
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import { validateInput, resetForm} from './index.js'

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

// capturando elementos
const logInButton = document.querySelector('.log-in');
const continueWithGoogle = document.querySelector('.button-authentication');


// iniciar sesión
const saveData = () => {
    const mail = document.querySelector('.login-email').value
    const password = document.querySelector('.login-password').value
    sendDataLogin(validateInput(mail, 'mailR', 'mail', document),
    validateInput(password, 'passwordR', 'password', document))
}

logInButton.addEventListener('click', saveData);

const sendDataLogin = (mail, password) => {
    if( mail && password != false) {
       if(auth.currentUser.emailVerified){
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('inicio de sesión exitoso')
          window.location.hash = '#/home';
          resetForm('form', document)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
          resetForm('form', document)
        });
      } else {
        alert('tu cuenta no está verificada')
      }
    }
}

// autenticación con google
 const googleAuthtenticationButton = () => {
  signInWithPopup(auth, provider) 
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    alert('inicio de sesión exitoso')
   // const docRef = doc(db, "users", user.uid);

    getDoc(docRef)
    .then((doc) => {
      if(doc.exists && doc.data() != undefined){
        console.log('Document data:', doc.data())
        window.location.hash = '#/home';
      } 
      else {
        setDoc(doc(db, "users", user.uid), {
          username: user.displayName,
          email: user.email,
        });
        window.location.hash = '#/home';
      }
    })

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage, email)
  });
}

continueWithGoogle.addEventListener('click', googleAuthtenticationButton );


// función para crear usuario 
const sendDataSignUp = (username, mail, password, document) => {
  if( username && mail && password != false ){
 createUserWithEmailAndPassword(auth, mail, password)
  .then((userCredential) => {
    const user = userCredential.user;
    sendEmailVerification(user)
    setDoc(doc(db, "users", user.uid), {
      username: username,
      email: mail,
      password: password,
    });
    resetForm('form', document)
    console.log('Successfully created new user:', user.emailVerified);
    window.location.hash = ''
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
    resetForm('form', document)
  });
  }
}

//subir img createPublicationF(tipoMascota,SexoMascota,imagenMascota,nombreMascota, descripciónMascota)
const createPublicationF = (type, sex, img, name, description) => {
  console.log(img)
  const user = auth.currentUser.uid
  const imgRef = ref(storage, img.name);
  const metadata = {
    contentType: img.type,
  };

  // Upload the file and metadata
  //const uploadImg = uploadBytesResumable(imgRef, imgName, metadata);
  const uploadImg = uploadBytes(imgRef, img, metadata);
  uploadImg
  .then(snapshot => getDownloadURL(snapshot.ref))
  .then( url => {
    console.log(url)
    const pubCollection = collection(db, "users", user, "publications");
    addDoc(pubCollection, { 
      type: type, 
      sex: sex , 
      img: url, 
      petname: name, 
      petdescription: description
    }) 
  })
}

// listar publicaciones
const listPublications = (document) => {
  //onAuthStateChanged -> para obtener el usuario con sesión activa  user.uid
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const publications =  collection(db, "users", "publications");
      console.log(publications)

      // promesa 
     getDocs(publications)
      .then(function(publications) {

        publications.forEach(publication => {
          console.log(publication.id, '=>', publication.data());
          const pub = publication.data()

          console.log(pub);

          document.innerHTML += `
          <div class=" card publication-card">
            <img class="card" src=${pub.img}/>
            <div class="card card-info">
              <p class="card">${pub.petname}</p>
            </div>
          </div>
          `
        });
      })
      .catch(function(error) {
          console.log("Error getting document:", error);
      });
    }else {
      console.log('no existe')
    }
  });
}

/* const allInformationCard = element.querySelectorAll('.publication-card');
console.log(allInformationCard) */
/* allInformationCard.forEach(e => {
  e.addEventListener('click', console.log('tocaste algo'))
}) */

export {sendDataSignUp, createPublicationF, listPublications };