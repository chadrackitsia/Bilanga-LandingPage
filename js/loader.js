// HIDDEN MENU
function hiddenMenu(){
    document.querySelector('.navbar').classList.add('afficheMenu') ;
}

setTimeout(hiddenMenu, 3000);

// LOADER - DOM JS (Ajout de la class hidden pour le chargement de la page)
function showContent() {
    document.querySelector('.loader-container').classList.add('hidden');
}

setTimeout(showContent, 3000);
