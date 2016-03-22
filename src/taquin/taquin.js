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

		let nums = getNums(16);
		let pos = getPositionsTiles();

		// ajout de la piece vide
		nums.splice(7, 0, '--');

		let taquin = new TilesCollectionView({
			collection: generateCollection(TilesCollection, TileModel, {
				nums: nums,
				pos: pos,
				size: 16
			})
		});

		return taquin;

		// HELPERS

		function generateCollection(collection, model, options) {
			let tiles = new collection();

			_.times(options.size, (curr) => {
				tiles.add(new model({
					num: options.nums[curr],
					position: curr,
					pos: options.pos[curr]
				}));
			});

			return tiles;
		}


		function getNums(nb) {
			let output = [];
			for (let i = 1; i <= nb; i++) {
				output.push(i);
			}
			return output;
		}

		function getPositionsTiles() {
			let x = [5, 106, 207, 309];
			let y = x;
			let pos = [];
			x.forEach(function(currx) {
				y.forEach(function(curry) {
					pos.push({
						x: currx,
						y: curry
					});
				})
			})
			return pos;
		}

	}

};

export
default Taquin.init();