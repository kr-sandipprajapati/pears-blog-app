/* eslint-disable no-undef */
import Hyperswarm from 'hyperswarm';
import {
  mainBase
} from './base';

const swarm = new Hyperswarm();

const discovery = swarm.join(mainBase.bootstrap,  { server: true, client: true });
discovery.flushed();

Pear.teardown(() => {
  swarm.destroy();
});

export default swarm;
