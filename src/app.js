// src/app.js
import './knacss.css!';
import './style.css!';

import M from 'backbone.marionette';
import Backbone from 'backbone'; // Collection et model
import _ from 'underscore';

let App = new M.Application({
		container: "#application",
		regions :{
			main: ".application"
		}
	});

// Start history when our application is ready
App.on("start", function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});

// MODELS & COLLECTIONS

let TileModel = Backbone.Model.extend({
	num:null,
	position:null
});

let TilesCollection = Backbone.Collection.extend({
	model: TileModel
});

// VIEWS
let TileItemView =  M.ItemView.extend({
	tagName: 'div',
	className: 'tile',
	template: "#tile-item",
	events: {
		'click' : function() {
			console.log('click sur un tile', this.model.toJSON());
		}
	}
});

let TilesCollectionView = M.CollectionView.extend({
	childView : TileItemView,
	className:"boardGame"
});

let tilesCollectionView = new TilesCollectionView({
	collection: new Backbone.Collection()
});

App.on("start", () => {

	let nums = [];

	_.times(16, (curr) => {
		if(curr){
			nums.push(curr);
		}
	});

	nums.splice(5, 0, '--');

	console.log(nums);
	let tiles = new TilesCollection();

	_.times(16, (curr) => {

		tiles.add(new TileModel({num:nums[curr], position:curr}));

	});


	let tilesItemView = new TilesCollectionView({collection:tiles});

	App.getRegion('main').show(tilesItemView);
});

// START  MY APP
App.start();