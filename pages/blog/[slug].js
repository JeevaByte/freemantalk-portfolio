import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const BlogPost = () => {
  console.log("Current slug:", slug);
  console.log("Slug value is being captured correctly.");
  const router = useRouter();
  const { slug } = router.query;
  console.log("Current slug:", slug);

  const Content = dynamic(() => import(`../../content/blog/${slug}.mdx`));

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <Content />
    </div>
  );
};

export default BlogPost;
