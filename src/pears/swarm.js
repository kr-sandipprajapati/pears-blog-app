import Hyperswarm from 'hyperswarm';
// import b4a from 'b4a';
// import config from '../config/config.development';
const swarm = new Hyperswarm();
// import hic from 'hypercore-id-encoding';
// import store from './store';
import base from './base';

const discovery = swarm.join(base.discoveryKey);
console.log("🚀 ~ base.discoveryKey:", base.discoveryKey)
await discovery.flushed();

Pear.teardown(() => {
  swarm.destroy();
});

export default swarm;
