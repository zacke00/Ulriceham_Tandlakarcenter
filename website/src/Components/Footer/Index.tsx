import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer id="Footer-Container">
      <div id="Footer-Inner-Container">
        <ul className="Footer-Links">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="mailto:example@example.com">Email Us</a>
          </li>
        </ul>
      </div>
      <div className="Footer-Copyright">
        <p>&copy; {new Date().getFullYear()} Berglund Web & Design. All rights reserved.</p>
      </div>
    </footer>
  );
};