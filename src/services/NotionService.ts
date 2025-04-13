
import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';

// This is for the official Notion API (for database queries)
const notionClient = new Client({
  auth: process.env.NOTION_API_KEY || '',
});

// This is for the unofficial API (for page content)
const notionContentApi = new NotionAPI();

const NOTION_BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID || '';

export type NotionPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  notionPageId: string;
};

export const getPublishedBlogPosts = async (): Promise<NotionPost[]> => {
  try {
    const response = await notionClient.databases.query({
      database_id: NOTION_BLOG_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts = response.results.map((page: any) => {
      // Extract values from Notion properties
      const properties = page.properties;
      
      return {
        id: page.id,
        title: properties.Title.title[0]?.plain_text || 'Untitled',
        slug: properties.Slug.rich_text[0]?.plain_text || page.id,
        excerpt: properties.Excerpt.rich_text[0]?.plain_text || '',
        date: properties.Date.date?.start || '',
        author: properties.Author.select?.name || 'Anonymous',
        readTime: properties.ReadTime.rich_text[0]?.plain_text || '5 min read',
        tags: properties.Tags.multi_select.map((tag: any) => tag.name) || [],
        coverImage: properties.CoverImage.url || '',
        notionPageId: page.id,
      };
    });

    return posts;
  } catch (error) {
    console.error('Error fetching Notion blog posts:', error);
    return [];
  }
};

export const getPageContent = async (pageId: string): Promise<ExtendedRecordMap> => {
  try {
    return await notionContentApi.getPage(pageId);
  } catch (error) {
    console.error('Error fetching Notion page content:', error);
    throw error;
  }
};

// Fallback to use for development/preview
export const getDummyNotionPosts = (): NotionPost[] => {
  return [
    {
      id: '1',
      title: 'Building Resilient Multi-Region AWS Architectures',
      excerpt: 'Learn how to design and implement highly available systems that can withstand regional outages with minimal disruption to your users.',
      date: '2023-04-10',
      author: 'Cloud Engineer',
      readTime: '8 min read',
      tags: ['AWS', 'High Availability', 'Architecture', 'Disaster Recovery'],
      coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      notionPageId: '1234567890',
      slug: 'building-resilient-multi-region-aws-architectures',
    },
    // Add more dummy data as needed
  ];
};
