# Modal

Cette composante permet d'ouvrir un template afin que lorsqu'on click sur un objet, sa nous montre plus de détail sans changer de site.

# Comment l'utiliser

Il faut en premier appliquer **data-component="Modal"** sur la section que vous voulez que sa devient un modal.

Par exemple: <div class="card-news" data-component="Modal"></div>

Ensuite il faut aussi crée un data-modal-id="tpl-modal" afin de savoir que le code sache quoi mettre comme nom.

Par exemple: <div class="card-news" data-component="Modal" data-modal-id="tpl-modal">

# HTML

Dans le HTML il faut crée un template auquel vous aurez toutes les composantes suivante.

<template id="tpl-modal-tool">
            <div class="modal">
                <div class="modal__scrim"></div>
                <div class="modal__box">
                    <div class="modal__content">
                        <h2>{{title}}</h2>
                        <img src="./assets/images/{{legume}}" alt="" />
                    </div>
                    <button class="modal__close js-close"></button>
                </div>
            </div>
        </template>

Le {{title}} va être remplacé par le data-modal-title="" que nous mettons.

Par exemple : <div
                    class="swiper-slide swiper-slide-quaternary"
                    data-component="Modal"
                    data-modal-id="tpl-modal-tool"
                    data-modal-title="Une belle laitue"
                    data-modal-image="lettuce.png"
                 >

Nous pouvons aussi changer le lien de l'image.

Cette librairie est une création de Jerry Wang.
