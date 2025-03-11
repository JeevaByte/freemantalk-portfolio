import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to my blog! Here are my latest posts:</p>
      <ul>
        <li>
          <Link href="/blog/sample-post">Sample Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}
