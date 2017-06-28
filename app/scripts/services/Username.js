(function() {
  function Username($cookies) {
  var Username = {};


  Username.createUsername = function(username) {
    // pass in a username
    // use the $cookies service to set the cookie to that username
    $cookies.put('currentUser', username);
//     var currentUser = $cookies.get('username');
//     if (!currentUser || currentUser === '') {
//       // Do something to allow users to set their username
//       alert("This username is taken, please select a different username");
//     }else{
//       $cookies.put('currentUser', 'newUser');
//       }
// }
    }

    return Username;
  }

  angular
    .module('blocChat')
    .factory( 'Username', ['$cookies', Username]);
})();
