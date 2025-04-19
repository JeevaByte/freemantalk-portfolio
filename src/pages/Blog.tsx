import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";
import { blogPosts, getAllBlogTags } from "@/data/blog";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import BlogFilter from "@/components/blog/BlogFilter";
import BlogSort from "@/components/blog/BlogSort";
import FeaturedBlogPosts from "@/components/blog/FeaturedBlogPosts";
import BlogPlatformIcons from "@/components/blog/BlogPlatformIcons";
import { Github, Linkedin, Mail } from "lucide-react";

const ITEMS_PER_PAGE = 4;

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const allTags = getAllBlogTags();

  const handleFilterChange = (selectedTags: string[], searchTerm: string) => {
    let filtered = blogPosts;
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(sortPosts(filtered, sortOption));
    setCurrentPage(1);
  };

  const sortPosts = (postsToSort: typeof blogPosts, sort: string) => {
    const sorted = [...postsToSort];
    
    switch (sort) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "oldest":
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case "az":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "za":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "readTime":
        return sorted.sort((a, b) => {
          const aTime = parseInt(a.readTime.split(" ")[0]);
          const bTime = parseInt(b.readTime.split(" ")[0]);
          return bTime - aTime;
        });
      default:
        return sorted;
    }
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    setFilteredPosts(sortPosts(filteredPosts, value));
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="section-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              Insights, tutorials, and thoughts on cloud engineering, DevOps, 
              and infrastructure as code.
            </p>
            <BlogPlatformIcons className="mb-8" />
          </div>

          <FeaturedBlogPosts posts={blogPosts} />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <BlogFilter tags={allTags} onFilterChange={handleFilterChange} />
            <BlogSort onSortChange={handleSortChange} currentSort={sortOption} />
          </div>

          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {paginatedPosts.map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination className="my-12">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No blog posts found matching your filters</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or clear filters</p>
            </div>
          )}

          <div className="flex space-x-4">
            <a
              href="https://github.com/JeevaByte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/jeevanantham-balakrishnan-567482109/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://medium.com/@jeevanantham-balakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
