// aqui exportaras las funciones que necesites

/* export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
}; */

const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
}

function validateForm(username, mail, password) {
  //utilizaremos expresiones regulares para validar ciertos ampos de la data
  //console.log(typeof mail)
   /*  if(regex.email.test(mail)){
      console.log('correcto')
    }else{
      console.log('incorrecto')
    } */

}

function saveData () {
  const username = document.querySelector('.username').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
  //console.log(username, email, password)
  //validateForm(username, email, password) 
}

export { saveData };