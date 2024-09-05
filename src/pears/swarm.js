import Hyperswarm from 'hyperswarm';
// import b4a from 'b4a';
import config from '../config/config.development';
const swarm = new Hyperswarm();
import hic from 'hypercore-id-encoding';

const discovery = swarm.join(hic.decode(config.topic, 'hex'));
await discovery.flushed()

Pear.teardown(() => {
  swarm.destroy();
});

export default swarm;
