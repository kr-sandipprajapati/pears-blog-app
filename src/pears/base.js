import Autobase from 'autobase';
import { mainStore } from './store';

function open(store) {
  return store.get({
    name: 'blogs-data',
  });
}

async function apply(nodes, view, base) {
  for (const node of nodes) {
    if (node.value.add) {
      await base.addWriter(Buffer.from(node.value.add, 'hex'));
      continue;
    }
    await view.append(node.value);
  }
}

export const mainBase = new Autobase(mainStore, {
  open,
  apply,
});

await mainBase.ready();

// export const writerBase = new Autobase(writerStore, mainBase.key, {
//   open,
//   apply,
// });

// await writerBase.ready().catch((err) => console.log('writer error: ', err));

// eslint-disable-next-line no-undef
Pear.teardown(async () => {
  // await writerBase.close();
  await mainBase.close();
});
