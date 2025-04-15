import { BlogPostProps } from "@/components/blog/BlogPost";

export const blogPosts: BlogPostProps[] = [
  {
    id: "1",
    title: "Building Resilient Multi-Region AWS Architectures",
    excerpt: "Learn how to design and implement highly available systems that can withstand regional outages with minimal disruption to your users.",
    date: "April 10, 2023",
    author: "Cloud Engineer",
    readTime: "8 min read",
    tags: ["AWS", "High Availability", "Architecture", "Disaster Recovery"],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    slug: "building-resilient-multi-region-aws-architectures"
  },
  {
    id: "2",
    title: "Kubernetes Cost Optimization Strategies",
    excerpt: "Discover practical techniques for reducing your Kubernetes bill while maintaining performance and reliability.",
    date: "March 15, 2023",
    author: "Cloud Engineer",
    readTime: "10 min read",
    tags: ["Kubernetes", "Cost Optimization", "DevOps", "Cloud"],
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d9453c6f5b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    slug: "kubernetes-cost-optimization-strategies"
  },
  {
    id: "3",
    title: "Implementing GitOps with ArgoCD and Kubernetes",
    excerpt: "A step-by-step guide to setting up a GitOps workflow using ArgoCD for continuous deployment to your Kubernetes clusters.",
    date: "February 22, 2023",
    author: "Cloud Engineer",
    readTime: "12 min read",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "CI/CD", "DevOps"],
    coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    slug: "implementing-gitops-with-argocd-and-kubernetes"
  },
  {
    id: "4",
    title: "Terraform Best Practices for Enterprise Environments",
    excerpt: "Learn how to structure your Terraform code for large-scale enterprise deployments with a focus on maintainability and governance.",
    date: "January 18, 2023",
    author: "Cloud Engineer",
    readTime: "15 min read",
    tags: ["Terraform", "IaC", "Enterprise", "DevOps", "Best Practices"],
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    slug: "terraform-best-practices-for-enterprise-environments"
  }
];

export const getAllBlogTags = (): string[] => {
  const tagsSet = new Set<string>();
  
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  
  return Array.from(tagsSet).sort();
};
