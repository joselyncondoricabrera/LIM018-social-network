//import {signUp} from "./signUp.js"
import { signUp } from '../views/signUp.js'
import { Home } from '../views/home.js';
import { newPublication } from '../views/newPublication.js';
import { informationView } from '../views/informationView.js';
import { editPublication } from '../views/editPublication.js';

const components = {
    signup: signUp,
    home: Home,
    publication: newPublication,
    information: informationView,
    edit: editPublication,
}

export {components};