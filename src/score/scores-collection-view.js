import Marionette from 'backbone.marionette';
import TileItemView from './tile-item-view.js';

export default Marionette.CollectionView.extend({
	childView : TileItemView,
	className:"boardGame"
});