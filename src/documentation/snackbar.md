# Snackbar

Cette composante permet de faire apparaitre le snackbar lorsqu'il est en haut de la page et la faire disparaitre lorsqu'on scroll

<br><br>

# Dépendance

Il n'y a pas de librairie externe.

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, il faut s'assurer de mettre la classe="snackbar" le data-component="snackbar" data-delay="2000" data-auto-hide="true" data-scroll-limit="0.5"
data-id="1"

Par exemple:

````
  <div
                class="snackbar"
                data-component="snackbar"
                data-delay="2000"
                data-auto-hide="true"
                data-scroll-limit="0.5"
                data-id="1"
            >
                <div class="wrapper">
                    <div class="snackbar__content">
                        <p>Cette page est en train de utiliser vos cookies!</p>
                        <svg class="icon icon--md fermersnackbar">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
            </div>
 ```


<br><br>

### **SCSS**

Pour que les styles soient bien appliqués, il faut importer les styles de snackbar dans le main.scss

```
@import 'components/snackbar.scss';

# Variantes

<br>

Les différents variantes qui peuvent être changer est le temps de délais avant que le snackbar apparait, ainsi que le contenu de votre snackbar tout en bas dans le HTML

<br><br>

# Animations

Les animations sont crée par vous même. Par défaut, il y a un animation de fade in lorsqu'elle apparaît. Vous pouvez faire des scales des translates,etc. Tout cela se fait dans le snackbar.scss ainsi que le snackbar.js

# Classes d'état

Le script au tout début initialise et vérifie l'endroit vous êtes situez. Ensuite, lorsqu'il a bien vérifier que vous êtes au tout début de la page, il affiche le snackbar apès un délais de 2 sec. Lorsque vous voulez fermer le snackbar, il reste storer dans le Cache comme cookies et ne va pas rapparaître.

Jerry Wang
````
