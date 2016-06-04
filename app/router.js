import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('songs', function() {
    this.route('song', {
      path: '/:id'
    });
  });
});

export default Router;
