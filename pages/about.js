// pages/about.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <h1>About Me</h1>
        <p>
          I am Jeeva Balakrishnan, a Cloud Engineer with over 6 years of experience in cloud infrastructure, DevOps practices, and automation. I am currently pursuing a Master’s in Cloud Computing at the University of Leicester, UK.
        </p>
        <h2>Skills & Expertise</h2>
        <ul>
          <li>AWS</li>
          <li>Terraform</li>
          <li>Next.js</li>
          <li>Python</li>
          <li>CI/CD Pipelines</li>
          <li>DevOps Automation</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>Terraform Associate Certification</li>
        </ul>
        <a href="/resume" className="cta-button">Download Resume</a>
      </section>
      <Footer />
    </>
  );
};

export default About;
