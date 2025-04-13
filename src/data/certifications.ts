
import { CertificationProps } from "@/components/certifications/CertificationCard";

export const certifications: CertificationProps[] = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: "January 2022",
    expiryDate: "January 2025",
    credentialId: "AWS-ASA-12345",
    description: "Validated expertise in designing distributed systems on AWS. Demonstrated knowledge of how to architect and deploy secure and robust applications on AWS technologies.",
    skills: ["AWS", "Cloud Architecture", "Distributed Systems", "Security", "Cost Optimization"],
    badgeUrl: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    verificationUrl: "https://www.credly.com/badges/example"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    issueDate: "March 2022",
    expiryDate: "March 2024",
    credentialId: "HCTA-98765",
    description: "Demonstrated understanding of infrastructure as code concepts using Terraform. Validated skills in building, changing, and versioning infrastructure safely and efficiently.",
    skills: ["Terraform", "Infrastructure as Code", "DevOps", "Cloud", "Automation"],
    badgeUrl: "https://images.credly.com/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    verificationUrl: "https://www.credly.com/badges/example"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "June 2022",
    credentialId: "CKA-54321",
    description: "Certified in operating production-grade Kubernetes clusters. Demonstrated practical skills in maintaining, securing, and troubleshooting Kubernetes environments.",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native", "System Administration"],
    badgeUrl: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    verificationUrl: "https://www.credly.com/badges/example"
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    issueDate: "September 2022",
    expiryDate: "September 2024",
    credentialId: "GCP-PCA-67890",
    description: "Validated ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions using Google Cloud technologies.",
    skills: ["Google Cloud", "Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
    badgeUrl: "https://images.credly.com/size/340x340/images/ae9a98b9-240b-47b1-9105-acd4f0eb5509/image.png",
    verificationUrl: "https://www.credly.com/badges/example"
  }
];
