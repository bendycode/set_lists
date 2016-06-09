import Ember from 'ember';

export function formatDuration(params/*, hash*/) {
  var minutes = Math.floor(params/60);
  var seconds = params%60;

  return minutes + " minutes " + seconds + " seconds";
}

export default Ember.Helper.helper(formatDuration);
