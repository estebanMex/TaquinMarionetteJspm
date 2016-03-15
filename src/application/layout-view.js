// layout-view.js
import Marionette from 'backbone.marionette';

export default Marionette.LayoutView.extend({
  template: "#layout-view-template",

  regions: {
    header: '[data-view="header"]',
    sidebar: '[data-view="sidebar"]',
    content: '[data-view="content"]'
  }
});