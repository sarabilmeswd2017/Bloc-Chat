(function() {
    function HomeCtrl(Room) {
      chatRooms = Room.all
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
