function loadsc(scriptSrc, callback) {
    if (typeof callback === "function") setTimeout(callback, 0);
}

loadsc('https://www.googletagmanager.com/gtag/js?id=G-8SK3BC00X8', function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-8SK3BC00X8');
});

if(window.location.href.indexOf("amazonaws") != -1 || window.location.href.indexOf("paper") != -1) {
    loadsc('https://api.gamemonetize.com/sdk_preload.js', function() {
        window.gamemonetizeSDK = { loaded: true };
    });
}

if(window.location.href.indexOf("thumb_wars") != -1) {
    loadsc('https://api.gamemonetize.com/sdk_preload_games.js', function() {
        window.gamemonetizeGamesSDK = { loaded: true };
    });
}
