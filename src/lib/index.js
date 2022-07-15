//aqui exportaras las funciones que necesites
const regex = {
  'userR': /^[a-zA-Z0-9\_\-]{4,16}$/, //letras (mayus, minus), numeros, guion y guion bajo - de 4 a 16 caracteres
  'mailR':  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // letras (mayus, minus), guion bajo antes de numeros, cadena de texto que precede al arroba y
  //al punto, después del punto cadena de caracteres
  'passwordR': /^.{4,12}$/, // caulquier tipo de caracter - de 4 a 12 caracteres
}

const validateInput = (input, type, campo, document) => {
  if(regex[`${type}`].test(input)){
      document.querySelector(`.incorrect-${campo}`).style.display = 'none'
      document.querySelector(`.correct-${campo}`).style.display = 'flex'
      return input
    } else {
      document.querySelector(`.incorrect-${campo}`).style.display = 'flex'
      document.querySelector(`.correct-${campo}`).style.display = 'none'
      return false
    }
}

const resetForm = (classname, element) => {
  element.querySelector(`.${classname}`).reset();
  const span = element.querySelectorAll('.form-alert'); 
    span.forEach(function(e) {
      e.innerHTML='';
    });
}

const selectedOption = (arr) => {
  for(let option of arr){
    if(option.checked){
      return option.value;
      }
  }
}

export {validateInput, resetForm, selectedOption}