(function () {
    angular
        .module('app')
        .controller('EducationController', Education);

    Education.$inject = [
            '$state',
            '$log'
        ];

    function Education($state, $log) {
        var vm = this;

        vm.educationHeader = "My USC Profile";
        vm.uscBlurbOne = "I am proud to say that I attend the Univiserty of Southern California, one of the top private universities in the world, where I study Computer Science Computer Engineering."

        vm.uscBlurbTwo = "It is my third year as a Trojan and my time here has been amazing!";
    }
})();
