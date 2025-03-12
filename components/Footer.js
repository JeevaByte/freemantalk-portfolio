const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">&copy; {new Date().getFullYear()} Jeeva Balakrishnan. All rights reserved.</p>
        <p className="text-center">Follow me on 
          <a href="https://twitter.com/yourprofile" className="hover:underline"> Twitter</a> | 
          <a href="https://github.com/yourprofile" className="hover:underline"> GitHub</a> | 
          <a href="https://linkedin.com/in/yourprofile" className="hover:underline"> LinkedIn</a>
        </p>
      </footer>
    );
};

export default Footer;
