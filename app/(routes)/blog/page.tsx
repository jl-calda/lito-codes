import Markdown from "markdown-to-jsx";

import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";

const BlogPage = () => {
  const blogs = getFileNames();
  const featuredBlogs = blogs
    .map((filename) => getMarkdown(filename))
    .filter((blog) => blog.data.featured === true);
  const featuredBlog = featuredBlogs[0];

  return (
    <section className="prose text-muted-foreground">
      <Markdown>{featuredBlog.content}</Markdown>
    </section>
  );
};

export default BlogPage;
