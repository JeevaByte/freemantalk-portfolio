# Cloud Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing cloud engineering expertise and projects. This portfolio is designed specifically for cloud engineers to highlight their skills in cloud computing, infrastructure as code, and DevOps practices.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn-ui and Tailwind CSS
- **Responsive Design**: Works seamlessly on all devices
- **Dynamic Content**: Blog integration with Medium and LinkedIn
- **Contact Form**: Easy way for visitors to reach out
- **Project Showcase**: Highlight your cloud engineering projects
- **Resume Download**: Professional resume access
- **Social Integration**: Connect with visitors through various platforms
- **Cloud Skills Display**: Showcase your cloud certifications and expertise
- **Project Timeline**: Visual representation of your cloud journey
- **Multi-Cloud Experience**: Highlight experience across different cloud providers

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - For server-side rendering and API routes
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS
- **UI Components**: [shadcn-ui](https://ui.shadcn.com/) - For beautiful, accessible components
- **Authentication**: [Supabase Auth](https://supabase.com/auth) - For secure user authentication
- **Database**: [Supabase](https://supabase.com/) - For backend data storage
- **Deployment**: [Vercel](https://vercel.com/) - For seamless deployment
- **Infrastructure**: [Terraform](https://www.terraform.io/) - For infrastructure as code
- **Containerization**: [Docker](https://www.docker.com/) - For container management
- **CI/CD**: GitHub Actions - For automated deployments

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- Git
- Docker (optional, for containerization)
- Terraform (optional, for infrastructure management)
- AWS CLI (optional, for AWS services)
- Azure CLI (optional, for Azure services)
- Google Cloud SDK (optional, for GCP services)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/JeevaByte/freemantalk-portfolio.git
   cd freemantalk-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Optional: Cloud Provider Credentials
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AZURE_CLIENT_ID=your_azure_client_id
   AZURE_CLIENT_SECRET=your_azure_client_secret
   GOOGLE_CLOUD_PROJECT=your_gcp_project_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000` to see your portfolio

## 📁 Project Structure

```
freemantalk-portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── about/     # About page components
│   │   ├── contact/   # Contact form components
│   │   ├── projects/  # Project showcase components
│   │   └── shared/    # Shared components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── public/            # Static assets
│   ├── images/        # Image assets
│   └── resume/        # Resume files
├── supabase/          # Database migrations
└── terraform/         # Infrastructure as code
```

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up the required tables using the migrations in `supabase/migrations`
3. Update environment variables with your Supabase credentials
4. Configure Row Level Security (RLS) policies

### Cloud Provider Setup
1. **AWS Setup**
   - Create an IAM user with appropriate permissions
   - Configure AWS CLI with your credentials
   - Set up required AWS services (S3, CloudFront, etc.)

2. **Azure Setup**
   - Create a service principal
   - Configure Azure CLI
   - Set up required Azure services

3. **GCP Setup**
   - Create a service account
   - Configure Google Cloud SDK
   - Set up required GCP services

### Customization
- Update `src/pages/About.tsx` with your cloud engineering experience
- Modify `src/pages/Contact.tsx` with your contact details
- Add your cloud projects to the Projects page
- Update certifications and skills in the About section
- Customize the color scheme in `tailwind.config.js`

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Configure build settings
5. Deploy!

### Infrastructure Deployment
1. **Using Terraform**
   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

2. **Using Cloud Provider CLI**
   - AWS: `aws cloudformation deploy`
   - Azure: `az deployment group create`
   - GCP: `gcloud deployment-manager deployments create`

### Custom Domain
1. Go to your domain provider
2. Add a CNAME record pointing to your Vercel deployment
3. Configure the domain in Vercel dashboard
4. Set up SSL certificates

## 📝 Blog Integration

The portfolio includes integration with Medium and LinkedIn for blog posts:
1. Set up your Medium RSS feed
2. Configure LinkedIn API access
3. Update the blog component with your credentials
4. Add your cloud engineering articles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn-ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Supabase](https://supabase.com/) for the backend services
- [AWS](https://aws.amazon.com/) for cloud infrastructure
- [Azure](https://azure.microsoft.com/) for cloud services
- [Google Cloud](https://cloud.google.com/) for cloud platform

## 📞 Contact

Jeevanantham Balakrishnan - Cloud Engineer
- GitHub: [@JeevaByte](https://github.com/JeevaByte)
- Twitter: [@jeevanantham_b](https://twitter.com/jeevanantham_b)
- LinkedIn: [Jeevanantham Balakrishnan](https://www.linkedin.com/in/jeevanantham-balakrishnan-567482109/)
- Email: jeeva.b1997@gmail.com

Project Link: [https://github.com/JeevaByte/freemantalk-portfolio](https://github.com/JeevaByte/freemantalk-portfolio)
