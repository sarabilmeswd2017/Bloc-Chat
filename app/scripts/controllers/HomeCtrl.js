(function() {
    function HomeCtrl(Room) {
      this.chatRooms = Room.all;
      // create room object and pass it to Room.add when the form is submitted, using the input from the form
      var room = {};
      this.room = Room.add();


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
