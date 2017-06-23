(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      // create room object and pass it to Room.add when the form is submitted, using the input from the form

      this.createRoom = Room.add;

    /*  this.activeRoom = Message.getByRoomId();*/

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
