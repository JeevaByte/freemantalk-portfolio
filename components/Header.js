// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="logo text-2xl font-bold mr-auto">
          <Link href="/">FreeManTalk</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="dark-mode-toggle">
          {/* Dark Mode Toggle Button will go here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
