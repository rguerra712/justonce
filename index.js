(function(){
    'use strict';
    const moment = require('moment');

    let lastTime;

    exports.run = (action, secondsBetweenWaiting, actionIfWaiting) => {
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