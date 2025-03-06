// const compareFileSizes = (file1, file2, callback) => {
//   fs.stat(file1, (err1, stats1) => {
//     if (err1) {
//       callback(err1);
//       return;
//     }
//     fs.stat(file2, (err2, stats2) => {
//       if (err2) {
//         callback(err2);
//         return;
//       }
//
//       callback(null, Math.sign(stats1.size - stats2.size));
//     });
//   });
// };
//
// export { compareFileSizes };
