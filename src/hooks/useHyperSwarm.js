// import { useRef } from 'react';
// import swarm from '../pears/swarm';

// export default function useHyperSwarm() {
//   const swarmRef = useRef(null);

//   if (swarmRef.current === null) {
//     swarmRef.current = swarm;
//     //   const joinDHTRoom = async () => {
//     //     const discovery = swarmRef.current.join(b4a.from(config.topic, 'hex'));
//     //     console.log('🚀 ~ joinDHTRoom ~ discovery:', discovery);
//     //     console.log('swarmRef connections: ', swarmRef.current.connections);
//     //     await discovery.flushed();
//     //     console.log(
//     //       'swarmRef connections after flushed: ',
//     //       swarmRef.current.connections,
//     //     );
//     //   };

//     //   joinDHTRoom();
//     // }
//   }
//   Pear.teardown(async () => {
//     if (swarmRef.current) {
//       await swarmRef.current.destroy();
//       swarmRef.current = null;
//     }
//   });

//   return swarmRef.current;
// }

import Hyperswarm from 'hyperswarm';
import { useRef } from 'react';
import config from '../config/config.development';
import hie from 'hypercore-id-encoding';
import core from '../pears/core';

const useHyperSwarm = () => {
  const swarmRef = useRef(null);

  if (swarmRef.current === null) {
    swarmRef.current = new Hyperswarm();

    const joinDHTRoom = async () => {
      const discovery = swarmRef.current.join(hie.decode(config.topic));
      console.log("🚀 ~ joinDHTRoom ~ hie.decode(config.topic):", hie.decode(config.topic))
      await discovery.flushed();
    };

    joinDHTRoom();
  }

  swarmRef.current.on('connection', (peer) => {
    peer.on('data', async (state) => {
      console.log('🚀 ~ peer.on ~ state:', state);
      await core.append(Buffer.from(state));
    });
  });

  Pear.teardown(async () => {
    if (swarmRef.current) {
      await swarmRef.current.destroy();
      swarmRef.current = null;
    }
  });

  return swarmRef.current;
};

export default useHyperSwarm;
