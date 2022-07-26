import { signIn } from './signIn.js';
import { signUp } from './signUp.js';
import { Home } from './home.js';
import { newPublication } from './newPublication.js';
import { informationView } from './informationView.js';
import { editPublication } from './editPublication.js';

const components = {
  login: signIn,
  signup: signUp,
  home: Home,
  publication: newPublication,
  information: informationView,
  edit: editPublication,
};

export { components };
