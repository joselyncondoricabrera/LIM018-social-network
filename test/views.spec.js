/* describe('createPublication', () => {
  document.body.appendChild(Home());
  const addButton =  document.querySelector('.header__add-button');
  it('debería ser una función', () => {
    expect(typeof createPublication).toBe('function');
  });
  it('el boton de crear publicación debería existir', () => {
    expect(createButton instanceof HTMLElement).toBe(true);
  });
  // primero el user debe haberle dado click al boton para pasar a crear la publicación
  addButton.click();
  document.body.appendChild(newPublication());
  const formNewPub = document.querySelector('.form__new-publication');
  const question1 = document.querySelector('.question4__petname');
  const question2 = document.querySelector('.question5__petAge');
  const question3 = document.querySelector('.question6__description');
  const petImg = document.querySelector('.question3__img');
  const createButton = document.querySelector('.create-publication');
  it('al dar click al boton, este me redirige a la vista de newPublication', () => {
    expect(formNewPub instanceof HTMLElement).toBe(true);
  });
  it('debería poder crear una publicación', () => {
    const q1 = question1.value = 'lala';
    const q2 = question2.value = 'lala';
    const q3 = question3.value = 'lala';
    const q4 = petImg.files[0]
    createButton.click();
    uploadImg(q4)
    .then((url) => {
      expect(typeof createPublication(q1, q2, q3, url)).toBe('object');
    });
  });
});  */