import HyperCore from 'hypercore';
import path from 'path';

const core = new HyperCore(path.join(Pear.config.storage, "pear-blogs-test-13"));
await core.ready();

export default core;