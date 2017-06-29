(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
      var filteredRef = ref.orderByChild('roomId').equalTo(roomId);
      return  $firebaseArray(filteredRef);

    };

    Message.send = function(newMessage) {
            // Send method logic
            Message.add = function(newMessage) {
                messages.$add(newMessage);
            }
console.log(newMessage);
        };

    return Message;


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
