import Marionette from 'backbone.marionette';
import TileItemView from './tile-item-view.js';
import PubSub from '../application/pubsub';
import _ from 'underscore';


export default Marionette.CollectionView.extend({
	childView: TileItemView,
	className: "boardGame",

	initialize: function() {
		this.listenTo(PubSub, 'taquin:click:tile', this.updateTiles);
		this._animInProgress = false;
	},
	childEvents: {
		'click': function(a) {
			console.log(a)
		}
	},

	changeGrid: function() {
		// alert('changer la grille SVP');
		// reset score
		// charger une nouvelle grid
	},

	updateTiles: function(tileClicked) {
		let _self = this;

		if (!this._animInProgress) {
			this.changePositionsTiles(tileClicked, _tileEmpty(this), function() {
				changeValuesTiles(_self, tileClicked);
			});
		}

		/*
		 * HELPERS
		 */
		function changeValuesTiles(_self, tileClicked) {
			let positionEmptyTile = _self.collection.getTileEmpty().get('position');

			if (_self.collection.getTilesAroundEmptyTyle().indexOf(tileClicked.model.get('position')) !== -1) {

				_self.collection.getTileEmpty().set({
					position: tileClicked.model.get('position')
				});

				tileClicked.model.set({
					position: positionEmptyTile
				});
			}
		}

		function _tileEmpty(_self) {
			return _self.children.findByModel(tileClicked.model.collection.getTileEmpty());
		}

	},

	changePositionsTiles: function(tileClicked, tileEmpty, callback) {
		this._animInProgress = true;
		let _self = this;

		tileEmpty.$el.animate({
			top: this._getTilePosition(tileClicked).top + 'px',
			left: this._getTilePosition(tileClicked).left + 'px'
		}, 500);

		tileClicked.$el.animate({
			top: this._getTilePosition(tileEmpty).top + 'px',
			left: this._getTilePosition(tileEmpty).left + 'px'
		}, {
			duration: 500,
			complete: function() {
				callback();
				_self._animInProgress = false;
				PubSub.trigger('change:tile:position', tileClicked);
			}
		}, "easeIn");

	},

	_getTilePosition: function(tile) {
		return tile.$el.position();
	}
});