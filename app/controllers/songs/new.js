import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSong: function(){
      var song = this.store.createRecord('song', {
        title: this.get("title")
      });
      song.save();
    }
  }
});
