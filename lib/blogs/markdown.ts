import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getMarkdown = (slug: string) => {
  const content = fs.readFileSync(
    path.join(process.cwd(), `public/blogs/${slug}`),
    "utf8"
  );

  const matterResult = matter(content);
  return matterResult;
};
