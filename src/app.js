// src/app.js
import 'style.css!';
import 'bootstrap/dist/css/bootstrap.css!';
// header
import './header/style.css!';
// taquin
import './taquin/style.css!';
// score
import './score/style.css!';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

//Application
import LayoutApp from './application/layout-view';

/** HEADER **/
import Header from './header/layout-view';

/** SCORE **/
import Score from './score/score';

/* TAQUIN */
import Taquin from './taquin/taquin';

let App = new Marionette.Application({
    regions: {
        main: '[data-view="application"]'
    }
});

window.App = App;
// Start history when our application is ready
App.on("start", () => {

    let layoutApp = new LayoutApp();

    App.getRegion('main').show(layoutApp);

    layoutApp.getRegion('header').show(new Header());
    layoutApp.getRegion('score').show(new Score());
    layoutApp.getRegion('content').show(Taquin);

    if (Backbone.history) {
        Backbone.history.start();
    }

});

// START  MY APP
App.start();