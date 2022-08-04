import { components } from '../views/components.js';

  const doc = document.querySelector('body');
// aquí recibimos la ruta
export default function changeView(route) {
  switch (route) {
    case '': { 
      doc.innerHTML = '';
      return doc.appendChild(components.login()); }
    case '#/signup': { 
      doc.innerHTML = '';
      return doc.appendChild(components.signup()); }
    case '#/home': { 
      doc.innerHTML = '';
      return doc.appendChild(components.home()); }
    case '#/newPublication': { 
      doc.innerHTML = '';
      return doc.appendChild(components.publication()); }
    case '#/information': { 
      doc.innerHTML = '';
      return doc.appendChild(components.information()); }
    case '#/edit': { 
      doc.innerHTML = '';
      return doc.appendChild(components.edit()); }
    default: { 
      doc.innerHTML = '';
      return doc.appendChild(components.login()); }
  }
}
