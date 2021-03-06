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

    Message.send = function(newMessage, currentRoom, currentUser, sentAt) {
      var date = new Date();
      var message = {
        content: newMessage,
        roomId: currentRoom,
        username: currentUser,
        sentAt: date
      };

      console.log(message);

      messages.$add(message);

    };



    return Message;


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
