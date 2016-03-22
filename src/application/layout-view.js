// layout-view.js
import Marionette from 'backbone.marionette';
import PubSub from '../application/pubsub';

export default Marionette.LayoutView.extend({
	template: "#layout-view-template",
	className: 'container',

	events: {
		'click [data-action="change-grid"]': function() {
			PubSub.trigger('taquin:change:grid',this);

		}
	},

	regions: {
		header: '[data-view="header"]',
		score: '[data-view="score"]',
		content: '[data-view="content"]'
	}

});