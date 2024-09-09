import Autobase from 'autobase';
import config from '../config/config.development';
// import core from './core';
import store from './store';
import hie from 'hypercore-id-encoding';
console.log('🚀 ~ core:', store);

// use apply to handle to updates
// async function apply(nodes, view, base) {
//   for (const { value } of nodes) {
//     if (value.addWriter) {
//       await base.addWriter(value.addWriter, { isIndexer: true });
//       continue;
//     }

//     await view.append(value);
//   }
// }

// function open(store) {
//   return store.get('view');
// }

const base = new Autobase(store, config.topic, {
  open: (store) => {
    console.log("🚀 ~ store:", store)
    return store.get('view');
  },

  apply: async (nodes, view, base) => {
    console.log("🚀 ~ apply: ~ nodes, view, base:", nodes, view, base)
    for (const { value } of nodes) {
      if (value.addWriter) {
        await base.addWriter(value.addWriter, true);
        continue;
      }

      await view.append(value);
    }
  }
});

await base.ready();
console.log('🚀 ~ base:', base.view);

export default base;
