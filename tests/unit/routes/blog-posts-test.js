import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | BlogPosts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blog-posts');
    assert.ok(route);
  });
});
