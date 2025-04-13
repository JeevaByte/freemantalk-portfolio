
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "multi-region-aws",
    title: "Multi-Region AWS Infrastructure",
    description: "Built a highly available infrastructure spanning multiple AWS regions using Terraform with automatic failover capabilities. Implemented cross-region database replication, global load balancers, and automated disaster recovery procedures.",
    tags: ["AWS", "Terraform", "HA", "Multi-Region", "CloudFormation"],
    githubUrl: "https://github.com/user/multi-region-aws",
    demoUrl: "https://demo.example.com/multi-region",
    featured: true
  },
  {
    id: "kubernetes-monitoring",
    title: "Kubernetes Monitoring Solution",
    description: "Implemented a comprehensive monitoring stack for Kubernetes clusters with Prometheus, Grafana, and custom alerting. Created dashboards for application and infrastructure metrics, automated alerts, and incident response workflows.",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Monitoring", "Docker"],
    githubUrl: "https://github.com/user/kubernetes-monitoring",
    demoUrl: "https://demo.example.com/k8s-monitoring",
    featured: true
  },
  {
    id: "serverless-etl",
    title: "Serverless ETL Pipeline",
    description: "Designed and deployed a serverless data processing pipeline using AWS Lambda, S3, and Glue for cost-effective data transformation. Implemented event-driven architecture for real-time data processing with comprehensive error handling.",
    tags: ["AWS", "Serverless", "ETL", "Lambda", "Data Engineering"],
    githubUrl: "https://github.com/user/serverless-etl",
    featured: true
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code Framework",
    description: "Developed a custom framework for managing infrastructure as code across multiple cloud providers. Standardized deployment practices, created reusable modules, and implemented automated testing for infrastructure code.",
    tags: ["Terraform", "AWS", "Azure", "IaC", "CI/CD"],
    githubUrl: "https://github.com/user/iac-framework",
    featured: false
  },
  {
    id: "container-orchestration",
    title: "Container Orchestration Platform",
    description: "Built a production-ready container orchestration platform using Kubernetes, implementing secure networking, RBAC, and multi-tenant configurations. Established best practices for application deployment and scaling.",
    tags: ["Kubernetes", "Docker", "Helm", "Microservices", "DevOps"],
    githubUrl: "https://github.com/user/container-platform",
    demoUrl: "https://demo.example.com/containers",
    featured: false
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Toolkit",
    description: "Created a suite of tools for automating common DevOps tasks, including CI/CD pipelines, infrastructure provisioning, and security scanning. Reduced deployment time by 60% and improved reliability of releases.",
    tags: ["DevOps", "CI/CD", "Automation", "Jenkins", "Python"],
    githubUrl: "https://github.com/user/devops-toolkit",
    featured: false
  }
];

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  
  projects.forEach(project => {
    project.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  
  return Array.from(tagsSet).sort();
};
