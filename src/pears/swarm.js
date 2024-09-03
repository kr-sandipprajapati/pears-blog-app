import Hyperswarm from 'hyperswarm';
// import b4a from 'b4a';
import config from '../config/config.development';
const swarm = new Hyperswarm();
import hic from 'hypercore-id-encoding';
import core from './core';

const discovery = swarm.join(hic.decode(config.topic, 'hex'));
// console.log('🚀 ~ joinDHTRoom ~ discovery:', discovery);
// console.log('swarmRef connections: ', swarm.connections);
await discovery.flushed();
// console.log('swarmRef connections after flushed: ', swarm.connections);

Pear.teardown(() => {
  swarm.destroy();
});

swarm.on('connection', (peer) => {
  peer.on('data', async (state) => {
    console.log('🚀 ~ peer.on ~ state:', state);
    await core.append(Buffer.from(state));
  });
});

export default swarm;
