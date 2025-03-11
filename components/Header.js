// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">FreeManTalk</Link>
        </div>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="dark-mode-toggle">
          {/* Dark Mode Toggle Button will go here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
