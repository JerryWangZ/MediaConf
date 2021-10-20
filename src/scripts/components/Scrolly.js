export default class Scrolly {
  constructor(element) {
    //Méthode constructor
    this.element = element;
    this.options = {
      rootMargin: '0px 0px 0px 0px',
    };
    this.init();
  }

  init() {
    //Méthode initialisation
    this.observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );
    //Chercher dans index toute les data composante scrolly
    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.observer.observe(item);
    }
  }
  //Méthode qui active les animations et les fait jouer seulement une fois
  watch(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
