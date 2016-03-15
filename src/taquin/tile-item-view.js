import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({
	tagName: 'div',
	className: 'tile',
	template: "#tile-item",
	events: {
		'click' : function() {
			console.log('click sur un tile', this.model.toJSON());
		}
	}
});