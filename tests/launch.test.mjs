import test from 'node:test';
import assert from 'node:assert/strict';
import { releaseAt, bannerEndsAt, launchState, remaining } from '../src/data/launch.mjs';
test('U.S. Eastern launch boundary, independent of visitor timezone', () => {
  assert.equal(new Date(releaseAt).toISOString(), '2026-11-19T05:00:00.000Z');
  assert.equal(launchState(releaseAt - 1), 'countdown');
  assert.equal(launchState(releaseAt), 'released');
  assert.deepEqual(remaining(releaseAt - 1000), [0, 0, 0, 1]);
  assert.deepEqual(remaining(releaseAt + 1000), [0, 0, 0, 0]);
});
test('banner expires after one calendar month', () => {
  assert.equal(new Date(bannerEndsAt).toISOString(), '2026-12-19T05:00:00.000Z');
  assert.equal(launchState(bannerEndsAt - 1), 'released');
  assert.equal(launchState(bannerEndsAt), 'expired');
});
