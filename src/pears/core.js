import RAM from 'random-access-memory';
import HyperCore from 'hypercore';

const core = new HyperCore((filename) => new RAM());
await core.ready();

export default core;