
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { BlogPostProps } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blog";

// This is for the unofficial API (for page content)
// Initialize without any authentication - only works with public pages
const notionContentApi = new NotionAPI();

export type NotionPost = BlogPostProps & {
  notionPageId?: string;
};

// Since we can't use the official Notion API in the browser easily due to CORS,
// we'll use this function to get blog posts for now.
// In a production app, you would use a backend API endpoint to handle this.
export const getPublishedBlogPosts = async (): Promise<NotionPost[]> => {
  // In a real app, you would make an API call to your backend
  // that would use the Notion API to fetch posts
  console.log("Using dummy data instead of Notion API");
  
  // Return our local blog posts as a fallback
  return getDummyNotionPosts();
};

export const getPageContent = async (pageId: string): Promise<ExtendedRecordMap> => {
  try {
    // This uses the unofficial API which can work client-side for public pages
    return await notionContentApi.getPage(pageId);
  } catch (error) {
    console.error('Error fetching Notion page content:', error);
    throw error;
  }
};

// Fallback to use for development/preview
export const getDummyNotionPosts = (): NotionPost[] => {
  // We'll reuse our actual blog posts data as dummy Notion posts
  return blogPosts.map(post => ({
    ...post,
    notionPageId: post.id, // Just use the post ID as a fake Notion ID
  }));
};
