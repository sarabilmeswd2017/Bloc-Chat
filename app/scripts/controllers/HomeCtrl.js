(function() {
    function HomeCtrl($scope, Rooms) {
       this.chatRooms = Rooms.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Rooms', HomeCtrl]);
})();
