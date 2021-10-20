# Vidéo

Cette composante permet d'instancier des vidéos youtubes qui nous permets plus de modification au player comme des animations.

<br><br>

# Dépendance

Il n'y a pas de librairie externe.

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, il faut assuer de bien mettre le video ID de la video youtube situé après le v=
Il faut s'assurer de le mettre dans le html. Vous pouvez aussi mettre un poster, l'image que vous voulez pour représenté le thumbnail.
Oublier aussi pas de rajouter data-component="Video" et insérer votre id dans data-video-id="..."
Par exemple: https://www.youtube.com/watch?v=zCMuNRr7SuM&ab_channel=Jean-Fran%C3%A7oisLeblanc
Video ID: zCMuNRr7SuM

````
 <h2 class="section__title">Vidéos sur nos conférences</h2>
                        <div class="grid-2">
                            <div class="video" data-component="Video" data-video-id="skMCZIss0TU">
                                <div class="video__media js-video">
                                    <img class="js-poster" src="assets/images/poster2.jpg" alt="Conference 1" />
                                    <svg class="icon icon--stroke icon--xl">
                                        <use xlink:href="#icon-play"></use>
                                    </svg>
                                </div>
                            </div>
 ```


<br><br>

### **SCSS**

Pour que les styles soient bien appliqués, il faut importer les styles de vidéo dans le main.scss

```
@import 'components/video.scss';

# Variantes

<br>


Les différents variantes doivent être changer par vous. Vous pouvez par exemple faire animer votre bouton play ou modifier se que vous voulez dans votre vidéo en
utilisant la fonction playerVars: { }, Vous pouvez modifier plusieurs paramètre de youtube en utilisant cette fonction

<br><br>

# Animations

Les animations sont crée en par vous même. Par défaut il y a une animation de rotation sur le bouton play lorsque vous hoverez dessus. Vous pouvez faire des scales des translates,etc. Tout cela se fait dans le video.scss

# Classes d'état

Le script au tout début initialise et charge la vidéo et puis ensuite vérifie en tout temps si il y a une autre vidéo qui joue. Si il y a une autre vidéo qui joue, il va faire pause
sur la vidéo qui joue actuellement. Si vous scroller vers le bas ou haut et ne voit plus la vidéo elle va aussi être mis en pause automatiquement. Si vous n'avez pas de poster ou
le script s'est pas bien chargé, elle va se mettre comme une vidéo youtube normal.

Jerry Wang
````
