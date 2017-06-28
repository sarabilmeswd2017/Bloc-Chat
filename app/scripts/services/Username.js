(function() {
  function Username($cookies) {
  var Username = {};


  Username.createUsername = function(username) {
    // pass in a username
    // use the $cookies service to set the cookie to that username
    $cookies.put('currentUser', username);
    }

    
    return Username;
  }

  angular
    .module('blocChat')
    .factory( 'Username', ['$cookies', Username]);
})();
