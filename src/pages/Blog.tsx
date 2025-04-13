
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";
import { blogPosts, getAllBlogTags } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allTags = getAllBlogTags();

  useEffect(() => {
    let filtered = blogPosts;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags.includes(selectedTag)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Articles and tutorials on cloud engineering, DevOps, and infrastructure best practices.
              Learn from my experiences and stay updated with the latest in cloud technologies.
            </p>
          </div>
          
          <div className="mb-10 space-y-6">
            {/* Search bar */}
            <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
            
            {/* Tags filter */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge 
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`cursor-pointer ${selectedTag === tag ? "bg-cloud-blue hover:bg-cloud-darkBlue" : ""}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
              
              {selectedTag && (
                <Badge 
                  variant="ghost"
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  Clear filter
                </Badge>
              )}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found matching your search</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
