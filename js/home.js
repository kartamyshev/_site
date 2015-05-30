var $ = function (el) {
    return document.querySelector(el);
};

var App = (function(window, document, undefined) {

    window.document.addEventListener('DOMContentLoaded', function() {
        App.go();
    });

    function back() {
        history.back();
    }

    $('.history-back').addEventListener('click', back, false);

    return {
        go: function() {

            var i, j = this.init;
            for (i in j) {
                j.hasOwnProperty(i) && j[i]();
            }
        },
        init: {

        }
    };


})(this, this.document);