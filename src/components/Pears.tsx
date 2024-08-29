import React, { useEffect, useRef } from 'react';
import HyperCore from 'hypercore';
import path from 'path';
import CoreStore from 'corestore';
import HyperBee from 'hyperbee';

export default function Pears() {
  console.log('🚀 ~ Pear:', (window as any).Pear);
  const Pear = (window as any).Pear;
  const core = useRef(new CoreStore(path.join(Pear.config.storage, 'storage')));
  useEffect(() => {
    const pearsCallback = async () => {
      const bee = new HyperBee(
        core.current.get({
          name: 'peers',
        }),
        { keyEncoding: 'utf-8', valueEncoding: 'binary' },
      );
      await bee.ready();
      //   const core = new HyperCore(
      //     path.join((window as any).Pear.config.storage, 'storage'),
      //   );
      //   await core.ready();
      console.log('🚀 ~ pearsCallback ~ bee:', bee);
    };
    pearsCallback();
  }, []);
  return <div>Pears Testing</div>;
}
