import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">
          Doctor Directory
        </h1>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;