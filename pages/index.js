import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', padding: '20px' }}>
      <div className="flex">
        <div className="flex-1 p-5">
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p className="mb-4">Here are my latest projects and blog posts:</p>
          <nav>
            <ul className="flex justify-end list-none p-0">
              <li className="mx-2">
                <Link href="/projects" className="text-blue-500">View Projects</Link>
              </li>
              <li className="mx-2">
                <Link href="/blog" className="text-blue-500">Read Blog Posts</Link>
              </li>
              <li className="mx-2">
                <Link href="/about" className="text-blue-500">About Me</Link>
              </li>
              <li className="mx-2">
                <Link href="/register" className="text-blue-500">Register</Link>
              </li>
              <li className="mx-2">
                <Link href="/login" className="text-blue-500">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-48 p-5">
          {/* Placeholder for logo */}
          <div className="h-24 bg-gray-200 mb-4">
            Logo
          </div>
        </div>
      </div>

        </div>
        <div style={{ flex: '0 0 200px', padding: '20px' }}>
          {/* Placeholder for logo */}
          <div style={{ height: '100px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
            Logo
          </div>
        </div>
      </div>
    </div>
  );
}
