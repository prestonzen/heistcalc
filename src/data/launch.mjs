// Rockstar Support confirms midnight local time. The homepage uses U.S. Eastern,
// not the visitor's timezone; regional unlocks are explained in the linked guide.
export const releaseAt = Date.parse('2026-11-19T00:00:00-05:00');
export const bannerEndsAt = Date.parse('2026-12-19T00:00:00-05:00');
export function launchState(now = Date.now()) {
  return now >= bannerEndsAt ? 'expired' : now >= releaseAt ? 'released' : 'countdown';
}
export function remaining(now = Date.now()) {
  const seconds = Math.max(0, Math.ceil((releaseAt - now) / 1000));
  return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
}
