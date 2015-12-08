/* global ng, document, angular */

(function () {

    var Display = ng.Component({
            selector: 'display',
            templateUrl: 'views/main.html',
            directives: [ng.NgFor, ng.NgIf],
            providers: [Display]
        })
        .Class({
            constructor: function () {
                this.myName = "Alice";
                this.names = ["Aarav", "Martín", "Shannon"];
            }
        });

    ng.provide("Display", Display);
    /*
            function DisplayComponent(friends) {
                this.myName = "Alice";
                this.names = friends.names;
            }
            DisplayComponent.annotations = [
                new ng.ComponentMetadata({
                    selector: "display"

                }),
                new ng.ViewMetadata({
                    templateUrl: "views/main.html",
                    directives: [ng.NgFor, ng.NgIf]
                })
        ];

    function FriendsService() {
        this.names = ["Aarav", "Martín", "Shannon"];
    }
*/

})();
