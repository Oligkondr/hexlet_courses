// export const getDirectorySize = (dir, callback) => {
//   fs.readdir(dir, (err1, fileNames) => {
//     if (err1) {
//       callback(err1);
//       return;
//     }
//     const fullFileNames = fileNames.map((fileName) => path.join(dir, fileName));
//
//     async.map(fullFileNames, fs.stat, (err2, stats) => {
//       if (err2) {
//         callback(err2);
//         return;
//       }
//
//       const files = stats.filter((item) => item.isFile());
//
//       const fileSize = _.sumBy(files, 'size');
//
//       callback(null, fileSize);
//     });
//   });
// };
