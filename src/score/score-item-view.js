import Marionette from 'backbone.marionette';
import ScoreModel from './score-model';
import PubSub from '../application/pubsub';

export default Marionette.ItemView.extend({
    tagName: 'div',
    className: 'score',
    template: "#score-view-template",
    model: ScoreModel,

    initialize: function() {
        let _self = this;
        this.model = new ScoreModel();
        this.model.on('change', this.render);

        this.listenTo(PubSub, 'change:tile:position', function(tileClicked) {
            this.onUpdateClick();
            if (tileClicked.model.collection.gameIsResolved()) {
                alert('vous avez resolu le jeu en ' + this.model.get('nbClick') + ' mouvements');
            }

        });
    },

    onUpdateClick: function() {
        this.model.set('nbClick', this.model.get('nbClick') + 1);
    },

    checkGameIsResolved: function() {

    }

});