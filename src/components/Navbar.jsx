import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <h1>#CarRental</h1>
        <ul>
          <li>
            <a href="#" className="abt">
                <Link to="About">About</Link></a>
          </li>
          <li>
            <Link to="Vans">
            <a href="#" className="van"> Vans</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
