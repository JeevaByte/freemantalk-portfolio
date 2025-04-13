
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";
import { blogPosts, getAllBlogTags } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
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
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <BookOpen className="text-cloud-blue h-8 w-8" />
              <h1 className="text-4xl font-bold">Blog</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mt-4">
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
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  Clear filter
                </Badge>
              )}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)} 
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                    
                    {pageNumbers.map(number => (
                      <PaginationItem key={number}>
                        <PaginationLink
                          isActive={currentPage === number}
                          onClick={() => handlePageChange(number)}
                          className="cursor-pointer"
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)} 
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
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
