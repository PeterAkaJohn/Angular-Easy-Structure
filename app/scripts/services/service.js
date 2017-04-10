'use strict';

angular.module('app.service', ['app.core'])
    .service('service', [function() {

        this.test = function() {
            return {}
        };

    }]);
