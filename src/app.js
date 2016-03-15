// src/app.js
import './style.css!';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

//Application
import LayoutApp from './application/layout-view';

/**
 * TAQUIN
 */
import Taquin from './taquin/taquin';

let App = new Marionette.Application({
    regions: {
        main: '[data-view="application"]'
    }
});

// Start history when our application is ready
App.on("start", () => {

    let layoutApp = new LayoutApp();

    App.getRegion('main').show(layoutApp);

    layoutApp.getRegion('content').show(Taquin);

    if (Backbone.history) {
        Backbone.history.start();
    }

});

// START  MY APP
App.start();