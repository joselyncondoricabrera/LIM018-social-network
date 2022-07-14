function home (){
    const home = `
    <button class="account" type="button">Cfb</button>
    `
    const element = document.querySelector('body');
    element.innerHTML = home;

    return element;

}
export { home };