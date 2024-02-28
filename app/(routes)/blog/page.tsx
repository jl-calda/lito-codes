import Markdown from "markdown-to-jsx";

import { getFileNames } from "@/lib/blogs/blogs";
import { getMarkdown } from "@/lib/blogs/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { CardBanner } from "@/components/card-banner";
import { CardTitle } from "@/components/card-title";
import { UnderConstruction } from "@/components/under-construction";

const BlogsPage = () => {
  const blogs = getFileNames();
  const featuredBlogs = blogs
    .map((filename) => getMarkdown(filename))
    .filter((blog) => blog.data.featured === true);
  const featuredBlog = featuredBlogs[0];

  return (
    <section className="prose text-muted-foreground">
      <Card className="relative">
        {/* <CardTitle
          title={featuredBlog.data.title}
          subtitle={featuredBlog.data.date}
        /> */}
        <CardContent>
          <UnderConstruction />
          {/* <Markdown>{featuredBlog.content}</Markdown> */}
        </CardContent>
        {/* <CardBanner text="Featured blog" /> */}
      </Card>
    </section>
  );
};

export default BlogsPage;
