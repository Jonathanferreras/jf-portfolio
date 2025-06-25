export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/career" className="hover:underline">Career</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
        <li><a href="https://github.com/Jonathanferreras" className="hover:underline">Github</a></li>
        <li><a href="https://www.linkedin.com/in/jonathan-ferreras" className="hover:underline">Linkedin</a></li>
      </ul>
    </nav>
  );
}