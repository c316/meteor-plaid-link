Meteor.startup(function(){

    Session.set('plaidLinkLoaded', false);


    //Functions to run after the script tag has loaded
    var plaidLinkLoadCallback = function () {
        Session.set('plaidLinkLoaded', true);
    };

    //If the script doesn't load
    var plaidLinkErrorCallback = function (error) {
        if (typeof console != undefined) {
            console.log(error);
        }
    };

    //Generate a script tag
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.plaid.com/link/stable/link-initialize.js';
    script.onload = plaidLinkLoadCallback;
    script.onerror = plaidLinkErrorCallback;

    //Load the script tag
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
});