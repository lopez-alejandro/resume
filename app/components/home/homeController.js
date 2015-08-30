(function () {
    angular
        .module('app')
        .controller('HomeController', Home);

    Home.$inject = ['$state', '$log'];

    function Home($state, $log) {
        // bind the view model
        var vm = this;

        vm.name = "Alejandro Lopez";
        vm.smallBioOne = "Hi, I am a third year student studying Computer Science Computer Engineering at the USC Viterbi School of Engineering. My passions include programming, smartphone tech, and finding good places to eat."
        vm.smallBioTwo = "I spend my freetime learning new programming languages and frameworks. Recently, my interest in web development has grown with my discovery of AngularJs and NodeJS.";
        vm.smallBioThree = "Feel free to contact me, I look forward to hearing from you.";
    }
})();
