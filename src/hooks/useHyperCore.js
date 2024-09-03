// import { useRef, useEffect } from 'react';
// import HyperCore from 'hypercore';
// import path from 'path';

// export default function useHyperCore() {
//   // const core = new HyperCore(path.join(Pear.config.storage, 'blogs-data-new'));
//   const coreRef = useRef(null);
  
//   const coreSetup = async () => {
//     if (coreRef.current === null) {
//       console.log('🚀 ~ coreSetup ~ coreRef.current:', coreRef.current);
//       coreRef.current = new HyperCore(
//         path.join(Pear.config.storage, 'blogs-data-test-7'),
//       );

//       await coreRef.current.ready();
//     }
//   };

//   coreSetup();

//   useEffect(() => {
//     // Optional: Handle any cleanup if necessary
//     return () => {
//       if (coreRef.current) {
//         console.log("🚀 ~ return ~ coreRef.current:", coreRef.current)
//         console.log('Cleaning up HyperCore instance');
//         coreRef.current.close(() => {
//           console.log('HyperCore instance closed');
//           coreRef.current = null;
//         });
//       }
//     };
//   }, []);

//   return coreRef.current;
// }
