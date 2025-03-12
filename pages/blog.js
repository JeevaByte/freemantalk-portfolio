import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <>
      <Header />
      <section className="blog">
      <h1 style={{ color: '#333' }}>My Blog</h1>
      <p style={{ fontSize: '1.2em' }}>Welcome to my blog! Here are my latest posts:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <a href="/blog/first-post" style={{ textDecoration: 'none', color: '#0070f3' }}>First Post</a>
        </li>
        <li style={{ margin: '10px 0' }}>
          <a href="/blog/devops-best-practices" style={{ textDecoration: 'none', color: '#0070f3' }}>DevOps Best Practices</a>
        </li>
        <li style={{ margin: '10px 0' }}>
          <a href="/blog/aws-vs-azure" style={{ textDecoration: 'none', color: '#0070f3' }}>AWS vs Azure</a>
        </li>
      </ul>

      </section>
      <Footer />
    </>
  );
};

export default Blog;
