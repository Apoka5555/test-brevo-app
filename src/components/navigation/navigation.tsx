import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
