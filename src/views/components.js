import { signIn } from '../views/signIn.js'
import { signUp } from '../views/signUp.js'
import { Home } from '../views/home.js';
import { newPublication } from '../views/newPublication.js';
import { informationView } from '../views/informationView.js';
import { editPublication } from '../views/editPublication.js';

const components = {
    login: signIn,
    signup: signUp,
    home: Home,
    publication: newPublication,
    information: informationView,
    edit: editPublication,
}

export {components};