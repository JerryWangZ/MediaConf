export default class Header {
  constructor(element) {
    this.element = element; //Prend le data dans le html
    this.scrollPosition = 0; //Prend la position du scroll
    this.lastScrollPosition = 0; //Prend la derniere position du scroll
    this.html = document.documentElement;
    this.scrollLimit = this.element.dataset.scrollLimit; //Pour scrolllimite avec le html
    this.autoHide = this.element.dataset.autoHide; //Pour choisir si tu veux autohide avec le html
    this.init();
    this.initNavMobile(); //Pour initier le nav mobile
  }

  init() {
    console.log('voice mon header');

    if (this.autoHide == 'true') {
      window.addEventListener('scroll', this.onScroll.bind(this)); //Un evenement qui regarde le scroll
    }
  }

  //Detecter l'hauteur du scroll
  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirectionState();
  }
  //Mettre le header hidden et l'enlever si sa dépasse un certain point
  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if (this.scrollPosition > scrollHeight * this.scrollLimit) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }
  //Voir si on scroll up ou on scroll down pour comparé les positions du scroll.
  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }
  //Initier la version Nav mobile
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
  }
  //Ajouter la class nav-is-active
  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
