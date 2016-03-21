import Backbone from 'backbone'; // Collection et model
import TileModel from './tile-model';

export default Backbone.Collection.extend({
	model: TileModel
});