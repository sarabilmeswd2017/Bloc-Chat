(function() {
    function HomeCtrl(Room, Message) {
      this.rooms = Room.all;
      this.messages = null;
      // create room object and pass it to Room.add when the form is submitted, using the input from the form


      this.createRoom = Room.add;

      this.selectRoom = function(roomId) {
        console.log(roomId);
        this.messages = Message.getByRoomId(roomId);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
