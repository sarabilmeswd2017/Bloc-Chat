(function() {
    function HomeCtrl(Room, Message, Username) {
      this.rooms = Room.all;
      this.messages = null;
      // need a way to keep track of the selected room
      this.storedCurrentRoom = null;
      this.storedCurrentUser = Username.getCurrentUser;
      this.storedSentAt = null;


      this.createRoom = Room.add;

      this.selectRoom = function(roomId) {
        this.storedCurrentRoom = roomId;
        this.messages = Message.getByRoomId(roomId);
      }

      this.addUsername = Username.createUsername;

      this.addMessage = Message.send;


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'Username', HomeCtrl]);
})();
