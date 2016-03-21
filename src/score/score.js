import Marionette from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

import ScoreItemView from './score-item-view';

let Score = {

	init: function() {
		console.log('score init');

		return ScoreItemView;
	}

};

export default Score.init();