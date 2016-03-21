import Marionette from 'backbone.marionette';
import PubSub from '../application/pubsub';

export default Marionette.ItemView.extend({
    tagName: 'div',
    className: function(){
        return this.model.get('num') === '--' ? 'tile empty' : 'tile'
    },
    attributes: function() {
        return {
            'data-position': 'tile_' + this.model.get('position'),
            style: 'top:' + this.model.get('pos').x + 'px; left:' + this.model.get('pos').y + 'px;'
        }
    },

    template: "#tile-item",

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        'click': 'triggerEvents'
    },

    triggerEvents: function() {
        let positionsTilesAround = this.model.collection.getTilesAroundEmptyTyle();
        let positionTileCliked = this.model.get('position');

        // only click in tiles around of tileEmpty
        if (positionsTilesAround.indexOf(positionTileCliked) !== -1) {
            PubSub.trigger('click:tile', this);
        }

    }

});