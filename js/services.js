var services = (function(){

    

    function setLocalStorageConfig (value) {
        localStorage.value = value;
    };


    function setLanguage (language) {
        switch (language) {
            case 'us':
                setGreetingsTemplate(content.us);
                break;
            case 'ua':
                setGreetingsTemplate(content.ua);
                break;
            case 'ru':
                setGreetingsTemplate(content.ru);
                break;
            default:
                setGreetingsTemplate(content.us);
        };

    };

    return {
        setLocalStorageConfig : setLocalStorageConfig,
        setLanguage : setLanguage
};

})();
