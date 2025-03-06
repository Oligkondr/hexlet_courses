// export default async (path) => {
//   const absolutePath = path.resolve(path);
//   const stat = await fsp.stat(absolutePath);
//
//   if (stat.isFile()) {
//     return [{ filepath: absolutePath, mode: stat.mode }];
//   }
//
//   const files = await fsp.readdir(absolutePath);
//   const fileNames = files
//     .sort((file1, file2) => file1 > file2 ? -1 : 1)
//     .map((file) => path.join(absolutePath, file));
//
//   const stats = await Promise.all(fileNames.map(file => fsp.stat(file)));
//   return _.zipWith(fileNames, stats, (filepath, { mode }) => ({ filepath, mode }));
