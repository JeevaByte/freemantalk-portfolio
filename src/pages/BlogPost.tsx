
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPageContent, getDummyNotionPosts } from "@/services/NotionService";
import { toast } from "@/hooks/use-toast";
import { blogPosts } from "@/data/blog";

// Import just the CSS without the component to avoid render issues
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the post data from our local blog posts
  const post = blogPosts.find(post => post.slug === slug);

  // We're disabling fetching of Notion content for now to avoid browser compatibility issues
  // Instead of the NotionRenderer, we'll show the excerpt and a message
  const { isLoading: contentLoading } = useQuery({
    queryKey: ['notionPage', post?.id],
    queryFn: () => {
      if (!post?.id) {
        throw new Error('No page ID found');
      }
      // This is commented out for now because we're having issues with Notion libraries
      // in the browser environment. In a production app, you would have a backend service
      // to handle this.
      // return getPageContent(post.id);
      return Promise.resolve({});
    },
    enabled: false, // Disable auto-fetching
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (!slug) {
    navigate('/blog');
    return null;
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="section-container text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <article className="section-container">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          {/* Cover image */}
          {post.coverImage && (
            <div className="w-full h-[400px] rounded-xl overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Title and metadata */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="flex items-center gap-1">
                  <Tag size={12} />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {contentLoading ? (
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-6 bg-muted rounded animate-pulse" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                ))}
              </div>
            ) : (
              // Fallback content for preview/development
              <div className="prose max-w-none">
                <p className="text-lg mb-4">{post.excerpt}</p>
                <p className="mb-4">
                  This is a placeholder for the actual Notion content. In a production environment, 
                  the full article content would be displayed here.
                </p>
                <p>
                  To set up full Notion integration, you'll need to:
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                  <li>Create a backend API service to fetch Notion content (to avoid CORS and browser compatibility issues)</li>
                  <li>Create a Notion integration at <a href="https://www.notion.so/my-integrations" className="text-blue-500 underline">Notion Integrations</a></li>
                  <li>Share your Notion database with your integration</li>
                  <li>Set up environment variables for your API keys</li>
                  <li>Connect your backend API to the Notion API</li>
                </ol>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
