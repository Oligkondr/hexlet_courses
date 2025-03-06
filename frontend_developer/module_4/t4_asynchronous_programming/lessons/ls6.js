// export const move = (oldFile, newFile, callback) => {
//   fs.readFile(oldFile, 'utf-8', (err1, data) => {
//     if (err1) {
//       callback(err1);
//       return;
//     }
//
//     fs.writeFile(newFile, data, (err2) => {
//       if (err2) {
//         callback(err2);
//         return;
//       }
//       fs.unlink(oldFile, callback);
//     });
//   });
// };
