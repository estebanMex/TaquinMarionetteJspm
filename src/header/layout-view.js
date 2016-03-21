import Marionette from 'backbone.marionette';
import LogoItemView from './logo-item-view';

export default Marionette.LayoutView.extend({
	template: "#layout-header-view-template",

	regions: {
		logo: '[data-view="logo"]',
		nav: '[data-view="nav"]'
	},

	onRender: function(){
		// console.log('render hader layout-view');
		// console.log(new LogoItemView());

		this.getRegion('logo').show(new LogoItemView());

	}


});