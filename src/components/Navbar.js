import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">HOME</Link>
    <Link to="/profile">PROFILE</Link>
    <Link to="/my_application">MY APPLICATION</Link>
    <Link to="/tech">TECH TASK</Link>
  </nav>
);

export default Navbar;
