import Marionette from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

// models & collections
import TilesCollection from './tiles-collection';
import TileModel from './tile-model';

// views
import TilesCollectionView from './tiles-collection-view';
import TileItemView from './tile-item-view';

let Taquin = {

	init: function() {

		let nums = [];

		_.times(16, (curr) => {
			if (curr) {
				nums.push(curr);
			}
		});

		nums.splice(5, 0, '--');

		let tiles = new TilesCollection();

		_.times(16, (curr) => {
			tiles.add(new TileModel({
				num: nums[curr],
				position: curr
			}));
		});

		let taquin = new TilesCollectionView({
			collection: tiles
		});

		return taquin;
	}

};

export
default Taquin.init();