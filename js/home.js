var _ = {
    $: function (el) {
        return document.querySelector(el);
    },
    $$: function (el) {
        return document.querySelectorAll(el);
    },
    type: function (_of) {
        return Object.prototype.toString.call(_of).replace(/^\[object (.+)]$/, '$1').toLowerCase();
    }
};


var App = (function($, window, document, undefined) {

    window.document.addEventListener('DOMContentLoaded', function() {
        App.go();
    });

    function goBack() {
        window.history.back();
    }

    _.$('.history-minus-1').addEventListener('click', goBack, false);


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
})(_.$$, this, this.document);