(function() {
  function Room($firebaseArray) {
    var Room = {};
    // access the firebase database and find the rooms list and save a reference object to ref
    var ref = firebase.database().ref().child("rooms");
    // convert the ref object into an array
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        rooms.$add(room);
    };


    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
