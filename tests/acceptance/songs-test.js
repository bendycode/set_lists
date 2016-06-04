import { test } from 'qunit';
import moduleForAcceptance from 'set-lists/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | songs');

test('visiting /songs', function(assert) {
  visit('/songs');

  andThen(function() {
    assert.equal(currentURL(), '/songs');
  });
});
