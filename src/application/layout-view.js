// layout-view.js
import Marionette from 'backbone.marionette';

export default Marionette.LayoutView.extend({
	template: "#layout-view-template",
	className: 'container',

	regions: {
		header: '[data-view="header"]',
		score: '[data-view="score"]',
		content: '[data-view="content"]'
	}

});