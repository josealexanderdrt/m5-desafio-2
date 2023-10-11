import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar p-3">
      <Link to="/" class="text-decoration-none text-dark"  > Home </Link> | <Link to="/favoritos" class="text-dark text-decoration-none" > Favoritos </Link>
    </nav>
  );
};
export default Navbar;
