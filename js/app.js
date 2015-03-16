if (PARSE_APPLICATION_ID && PARSE_JS_KEY) {
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JS_KEY);
}

/*
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}, {
  success: function(object) {
  $(".success").show();
  },
  error: function(model, error) {
  $(".error").show();
  }
  });
*/

YUI().use(
    'node',
    'event',
function (Y) {
    /* -------------------------------------------------- */
    /* YUI "Local" Globals */

    // CSS selectors
    var CSS_CLASS_HIDDEN = 'hidden';

    var CSS_ID_LOGIN_BUTTON = 'login_button';
    var CSS_ID_LOGOUT_BUTTON = 'logout_button';

    // Nodes
    var header = Y.one('#header');
    var main = Y.one('#main');
    var loginButton = Y.one('#' + CSS_ID_LOGIN_BUTTON);
    var logoutButton = Y.one('#' + CSS_ID_LOGOUT_BUTTON);

    // App variables
    var _FACEBOOK_INITIALIZED = false;

    /* End YUI "Local" Globals */
    /* -------------------------------------------------- */

    // Custom App Functions

    function doFacebookLogin() {
        Y.log('doFacebookLogin()');
        Parse.FacebookUtils.logIn('email', {
            success: function(user) {
                if (!user.existed()) {
                    Y.log('User signed up and logged in through Facebook!');
                } else {
                    Y.log('User logged in through Facebook!');
                }
                syncLoginButtons();
            },
            error: function(user, error) {
                Y.log('User cancelled the Facebook login or did not fully authorize.');
            }
        });
    }

    function doLogout() {
        Y.log('doLogout()');
        Parse.User.logOut();
    }

    function syncLoginButtons() {
        var user = Parse.User.current();
        if (user != null) {

            loginButton.hide();
            logoutButton.show();
        } else {
            logoutButton.hide();
            loginButton.show();
        }
        loginButton.removeClass(CSS_CLASS_HIDDEN);
        logoutButton.removeClass(CSS_CLASS_HIDDEN);
    }

    function handleLoginClicked(e) {
        doFacebookLogin();
    }

    function handleLogoutClicked(e) {
        doLogout();
        syncLoginButtons();
    }

    // App Initializers
    function initEventHandlers() {
        Y.delegate('click', handleLoginClicked, '#header', '#' + CSS_ID_LOGIN_BUTTON);
        Y.delegate('click', handleLogoutClicked, '#header', '#' + CSS_ID_LOGOUT_BUTTON);
    }

    function init() {
        syncLoginButtons();
    }
    initEventHandlers();
    init();
});
