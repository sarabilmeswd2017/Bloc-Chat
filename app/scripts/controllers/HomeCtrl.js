(function() {
    function HomeCtrl(Room, Message) {
      this.chatRooms = Room.all;
      // create room object and pass it to Room.add when the form is submitted, using the input from the form
      var room = {};
      this.room = Room.add();

      this.activeRoom = Message.getByRoomId();

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
