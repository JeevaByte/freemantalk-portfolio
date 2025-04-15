
import { BlogPostProps } from "./BlogPost";

interface FeaturedBlogPostsProps {
  posts: BlogPostProps[];
}

const FeaturedBlogPosts = ({ posts }: FeaturedBlogPostsProps) => {
  // Filter to get just a few posts for the featured section
  const featuredPosts = posts.slice(0, 2);
  
  if (featuredPosts.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <article key={post.id} className="relative overflow-hidden rounded-xl group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <img 
              src={post.coverImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"} 
              alt={post.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-white/80 line-clamp-2">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;
