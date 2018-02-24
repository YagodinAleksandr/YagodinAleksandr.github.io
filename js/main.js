'use strict';

let DOM = {
    greetings : document.getElementById('greetings'),
    btnLanguageSelector : document.getElementById('language-selector')
};

let defaultUserConfig = {
    language : 'us'
};

let languageButtonMarker = (event) => {
    DOM.btnLanguageSelector.children[0].classList.remove('language-checked');
    DOM.btnLanguageSelector.children[2].classList.remove('language-checked');
    DOM.btnLanguageSelector.children[4].classList.remove('language-checked');
    
    console.log(event);
    // for (let i = 0; i > event.)
    event.target.classList.add('language-checked');
};

let languageSwitcher = (event) => {
    services.setLanguage(event.target.id);
};

let initConfig = () => {
    if (localStorage.language == '') {
        services.setLanguage(localSorage.language);
    }
    else services.setLocalStorageConfig(defaultUserConfig.language);
         services.setLanguage(defaultUserConfig.language);
};

let initListeners = () => {
    DOM.btnLanguageSelector.addEventListener('click', languageSwitcher);
    DOM.btnLanguageSelector.addEventListener('click', languageButtonMarker);
};

function init() {
    initConfig();
    initListeners();
};

init();
