import * as fs from "fs";

export const getFileNames = () => {
  const fileNames = fs.readdirSync("public/blogs");
  return fileNames;
};
