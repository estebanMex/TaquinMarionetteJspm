import Marionette from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

import HeaderLayoutView from './layout-view';

let Header = {

	init: function() {
		console.log('Header init');

		return HeaderLayoutView;
	}

};

export default Header.init();