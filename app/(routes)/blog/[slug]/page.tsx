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
    <Card className="md:prose">
      <CardHeader className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">{blog.data.title}</h1>
        <p className="text-sm">{blog.data.date}</p>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default BlogPage;
