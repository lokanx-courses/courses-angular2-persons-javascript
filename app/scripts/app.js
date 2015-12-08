/* global ng, document, Display */

(function () {
    /*
    var Display = ng.Component({
            selector: 'display',
            templateUrl: 'views/main.html',
            directives: [ng.NgFor, ng.NgIf]
        })
        .Class({
            constructor: function () {
                this.myName = "Alice";
                this.names = ["Aarav", "Martín", "Shannon"];
            }
        });
*/
    var AppComponent = ng.Component({
            selector: 'my-app',
            templateUrl: 'views/app.html',
            directives: [Display]
        })
        .Class({
            constructor: function () {}
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(AppComponent);
    });
})();
