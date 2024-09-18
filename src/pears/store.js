/* eslint-disable no-undef */
import Corestore from 'corestore';
import path from 'path';

export const mainStore = new Corestore(
  path.join(Pear.config.storage, 'store-pears-blogs-main-5'),
  {
    primaryKey: Buffer.alloc(32).fill("main") 
  }
);

// export const writerStore = new Corestore(
//   path.join(Pear.config.storage, 'store-pears-blogs-writer-5'),
//   {
//     primaryKey: Buffer.alloc(32).fill("writer") 
//   }
// );

await mainStore.ready();

// await writerStore.ready();
