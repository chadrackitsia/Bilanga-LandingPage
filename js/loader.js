// HIDDEN MENU
function hiddenMenu(){
    document.querySelector('.navbar').classList.add('afficheMenu') ;
}

setTimeout(hiddenMenu, 3000);

// LOADER - DOM JS
function showContent() {
    document.querySelector('.loader-container').classList.add('hidden');
}

setTimeout(showContent, 3000);
