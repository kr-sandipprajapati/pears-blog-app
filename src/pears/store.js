import Corestore from 'corestore';
import path from 'path';

const store = new Corestore(path.join(Pear.config.storage, "pear-blogs-test-13"));

await store.ready();
export default store;
