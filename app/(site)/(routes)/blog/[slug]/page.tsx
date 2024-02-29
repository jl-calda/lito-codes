import { CardTitle } from "@/components/card-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getMarkdown } from "@/lib/blogs/markdown";
import Markdown from "markdown-to-jsx";

interface BlogPageParams {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params: { slug } }: BlogPageParams) => {
  const blog = getMarkdown(`${slug}.md`);

  return (
    <Card className="md:prose relative">
      <CardTitle
        title={blog.data.title}
        subtitle={blog.data.date}
      />
      <CardContent>
        <Markdown>{blog.content}</Markdown>
      </CardContent>
    </Card>
  );
};

export default BlogPage;
