import Cache from '../utils/Cache';

/** Composante snackbar de TimTools */
export default class snackbar {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */

  //Récupération des différents paramètres du snackbar
  constructor(element) {
    this.element = element;
    this.boutonfermer = element.querySelector('.fermersnackbar'); //L'image SVG
    this.ecouteurscroll; //Récupérer l'évenement scroll
    this.timeout = this.element.dataset.delay; //Délais avant l'apparition du snackbar
    this.element.style.display = 'none'; //Le cacher au début
    this.autoHide = this.element.dataset.autoHide; //Pour choisir si tu veux autohide avec le html
    setTimeout(this.init.bind(this), this.timeout); //Délais avant l'apparition du snackbar
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    //Vérification des cookies
    if (Cache.get(this.element.dataset.id, 'estFerme')) {
      if (
        //Vérifier si la valeur est à true
        Cache.get(this.element.dataset.id, 'estFerme').substring(
          Cache.get(this.element.dataset.id, 'estFerme').search(':') + 1,
          Cache.get(this.element.dataset.id, 'estFerme').length - 1
        ) == 'true'
      ) {
        this.element.style.display = 'none'; //On le cache si l'utilisateur à fait X
      } else {
        this.element.style.display = 'block'; //On l'affiche dans la page
        this.element.classList.add('snackbaranimate'); //Animation de fade in
        //Vérifier si on fait disparaître lorsqu'il est trop bas
        if (this.autoHide == 'true') {
          this.ecouteurscroll = this.onScroll.bind(this); //Récupérer l'évenement scroll
          window.addEventListener('scroll', this.ecouteurscroll); //Un evenement qui regarde le scroll
        }
        //Gerer la fermeture snackbar
        if (this.boutonfermer) {
          this.boutonfermer.addEventListener('click', this.fermersnackbar.bind(this)); //Fermer le snackbar lorsqu'on click sur le X
        }
      }
    }
  }
  //Gerer le display du snackbar en fonction de la position de la page
  onScroll() {
    if (window.pageYOffset == 0) {
      this.element.style.display = 'block'; //Si la page est en haut le snackbar est affiché
    } else {
      if ((this.element.style.display = 'block')) {
        this.element.style.display = 'none'; //Sinon il est caché
      }
    }
  }

  //Fermer le snackbar lorsqu'on pèse sur le X
  fermersnackbar() {
    this.element.style.display = 'none'; //Ne plus afficher le snackbar
    window.removeEventListener('scroll', this.ecouteurscroll); //Empêché le scroll de reafficher le snackbar
    Cache.set(this.element.dataset.id, '{estFerme:true}', true); // Défini le cookie pour empêché la réapparition du snackbar
  }
}
