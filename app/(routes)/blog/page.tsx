import Markdown from "markdown-to-jsx";

import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";
import { Card, CardContent } from "@/components/ui/card";

const BlogsPage = () => {
  const blogs = getFileNames();
  const featuredBlogs = blogs
    .map((filename) => getMarkdown(filename))
    .filter((blog) => blog.data.featured === true);
  const featuredBlog = featuredBlogs[0];

  return (
    <section className="prose text-muted-foreground">
      <Card>
        <CardContent>
          <Markdown>{featuredBlog.content}</Markdown>
        </CardContent>
      </Card>
    </section>
  );
};

export default BlogsPage;
