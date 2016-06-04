import Ember from 'ember';

export default Ember.Controller.extend({
  songs: function(){
    return this.get('model');
  }.property()
});
