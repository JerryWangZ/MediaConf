/** Composante Video de TimTools */
export default class Video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.videoContainer = this.element.querySelector('.js-video'); //Chercher le conteneur de video
    this.poster = this.element.querySelector('.js-poster'); //Chercher le poster
    this.videoId = this.element.dataset.videoId; //Prendre le video ID
    this.autoplay = this.poster ? 1 : 0; //Si on a un poster image on retourne 1 sinon 0
    this.playerReady = false; //Par défaut notre vidéo est pas prêt
    this.controls = this.element.dataset.controls;

    Video.instances.push(this); //Pousser dans le tableau correspond a tout dans le script.

    //Demarrer le chargement du script
    if (this.videoId) {
      Video.loadScript(); //Charger la vidéo
    } else {
      console.error('Vous devez spécifier un id');
    }
  }

  //Charger le script Static pour que sa soit le seul
  static loadScript() {
    //Si notre script n'est pas en train de charger
    if (!Video.scriptIsLoading) {
      Video.scriptIsLoading = true; //Charger le script

      const script = document.createElement('script'); //Crée la balise script
      script.src = 'https://www.youtube.com/iframe_api'; //Changer sa propriété src pour celui du youtube
      document.body.appendChild(script); //Injecter la balise script dans le body
    }
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.initPlayer = this.initPlayer.bind(this); //Crée une copie virtuelle

    //Si on a pas de poster on va garder la vidéo youtube au lieu du poster.
    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer);
    } else {
      this.initPlayer();
    }
  }

  //Méthode appeler une fois lorsqu'on click sur play
  initPlayer(event) {
    if (event) {
      this.element.removeEventListener('click', this.initPlayer); //Enlever la fonction après le click
    }
    this.player = new YT.Player(this.videoContainer, {
      height: '100%', // La vidéo prend toujours tout l'espace disponible
      width: '100%', // La vidéo prend toujours tout l'espace disponible
      videoId: this.videoId,
      playerVars: { rel: 0, autoplay: this.autoplay, controls: this.controls }, //Customise youtube Vidéo en lieu avec la vidéo qui joue, Sa joue automatiquement,
      events: {
        onReady: () => {
          //Le js de youtube lorsqu'elle est chargé, elle va joué une fois
          this.playerReady = true; //Le player est prêt
          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px', //String qui constitue nos 4 coordonées par rapport au viewport
          });
          observer.observe(this.element); //Observer la vidéo
        },
        onStateChange: (event) => {
          //Comme une fonction pour savoir l'état actuel
          if (event.data == YT.PlayerState.PLAYING) {
            //Voir si la vidéo est en train de jouer
            //pause tous les vidéos SAUF celui qui joue
            Video.pauseAll(this); //Ce qu'on a stocké dans l'instance
          } else if (event.data == YT.PlayerState.ENDED) {
            //Si la vidéo youtube fini
            this.player.seekTo(0); //Mettre la vidéo a 0
            this.player.pauseVideo(); //Pause la vidéo
          }
        },
      },
    });
  }

  //1 seul élément
  watch(entries) {
    if (this.playerReady && !entries[0].isIntersecting) {
      //Si le player est prêt et si l'entries n'intersecte pas

      this.player.pauseVideo(); //Arrêter la vidéo
    }
  }

  //Méthode static pour passer les instances.
  static initAll() {
    document.documentElement.classList.add('is-video-ready'); //Ajouter la class is-video-ready lorsque la vidéo est loader

    //Boucle pour passer toutes les instances.
    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      instance.init();
    }
  }
  //L'instance qu'on passe dans la boucle est-ce que c'est la même qui joue. Oui fait rien. Non fait pause.
  static pauseAll(currentInstance) {
    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      if (instance.playerReady && instance !== currentInstance) {
        // le player existe sur l'instance et si l'instance dans la boucle est différente de celui qui joue.
        instance.player.pauseVideo(); //Pause
      }
    }
  }
}

Video.instances = []; //Variable static Tableau
window.onYouTubeIframeAPIReady = Video.initAll; //Boucler à travers notre tableau d'instance
