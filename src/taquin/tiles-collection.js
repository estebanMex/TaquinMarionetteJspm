import Backbone from 'backbone'; // Collection et model
import TileModel from './tile-model';
import _ from 'underscore';


export default Backbone.Collection.extend({

	model: TileModel,

	initialize: function() {
		window.getCurrentGrid = this.getCurrentGrid.bind(this);
	},

	gameIsResolved: function() {
		let resolved = '1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_--';
		return this.getCurrentGrid() === resolved;
	},

	getCurrentGrid: function() {

		let modelsByPosition = _.sortBy(this.models, model => {
			return model.get('position');
		});

		return _.map(modelsByPosition, curr => {
			return curr.get('num');
		}).join('_');
	},

	getTileEmpty: function() {
		return this.findWhere({
			num: "--"
		});
	},

	getTilesAroundEmptyTyle: function() {
		let _self = this;
		let checkTop = topOrBottom();
		let checkLeft = not([3, 7, 11, 15]);
		let checkRight = not([0, 4, 8, 12]);
		let tilesAround = [];
		let checkBottom = topOrBottom();
		let posEmptyTile = this.getTileEmpty().get('position');
		let posTopToCheck = posEmptyTile - 4;
		let posLeftToCheck = posEmptyTile - 1;
		let posRightToCheck = posEmptyTile + 1;
		let posBottomToCheck = posEmptyTile + 4;

		if (posLeftToCheck === 0 || isValidPosition(posLeftToCheck) && checkLeft(posLeftToCheck)) {
			tilesAround.push(checkLeft(posLeftToCheck));
		}

		if (isValidPosition(posRightToCheck) && checkRight(posRightToCheck)) {
			tilesAround.push(checkRight(posRightToCheck));
		}

		if (posTopToCheck === 0 || isValidPosition(posTopToCheck) && checkTop(posTopToCheck)) {
			tilesAround.push(checkTop(posTopToCheck));
		}

		if (isValidPosition(posBottomToCheck) && checkBottom(posBottomToCheck)) {
			tilesAround.push(checkBottom(posBottomToCheck));
		}

		return tilesAround.sort();

		function isValidPosition(pos) {
			return (pos >= 0 && pos < _self.length) ? true : false;
		}

		/**
		 * Check if position is valide top or bottom
		 * @return {number} position tile
		 */
		function topOrBottom() {
			return positionTile => {
				if (positionTile >= 0 && positionTile < _self.length) {
					return positionTile;
				}
			}
		}

		/**
		 * Function to exclude des vals of array in parameter
		 * @param  {array} vals list of vals to exclude
		 * @return {number}  position tile
		 */
		function not(vals) {

			if (_.isArray(vals)) {
				return positionTile => {
					if (-1 === vals.indexOf(positionTile) && positionTile < _self.length) {
						return positionTile;
					}

				};

			}

		};

	}
});