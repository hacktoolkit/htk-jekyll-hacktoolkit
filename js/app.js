YUI({
    modules: {
        'login-manager': {
            fullpath: 'js/htk/yui/modules/login_manager.js'
        }
    }
}).use(
    'node',
    'event',
    'login-manager',
function (Y) {
    /* -------------------------------------------------- */
    /* YUI "Local" Globals */

    // CSS selectors
    var CSS_CLASS_HIDDEN = 'hidden';

    // Nodes
    var header = Y.one('#header');
    var main = Y.one('#main');

    // App variables
    var _FACEBOOK_INITIALIZED = false;

    /* End YUI "Local" Globals */
    /* -------------------------------------------------- */

    // Custom App Functions

    // App Initializers
    function initEventHandlers() {
    }

    function init() {
    }
    initEventHandlers();
    init();
});
