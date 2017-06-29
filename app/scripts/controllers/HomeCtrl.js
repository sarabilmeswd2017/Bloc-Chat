(function() {
    function HomeCtrl(Room, Message, Username) {
      this.rooms = Room.all;
      this.messages = null;



      this.createRoom = Room.add;

      this.selectRoom = function(roomId) {

        this.messages = Message.getByRoomId(roomId);
      }

      this.addUsername = Username.createUsername;

      this.addMessage = Message.send; 

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'Username', HomeCtrl]);
})();
