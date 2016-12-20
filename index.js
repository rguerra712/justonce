(function(){
    'use strict';
    const moment = require('moment');

    let lastTime;

    exports.run = (action, seconds, actionIfWaiting) => {
        if (!seconds) {
            seconds = 60;
        }
        let secondsDiff = moment().diff(lastTime, 'seconds');
        if (lastTime && secondsDiff < seconds)
        {
            actionIfWaiting();
            return;
        }
        action();
        lastTime = moment();
    };
})();