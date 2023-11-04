import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-gray-800 w-64 h-screen fixed left-0 top-0 pt-16 text-white space-y-4">
      <ul className="relative space-y-4 wrap items-center space-x-4">
        <li className="border border-black p-4 bg-blue-500">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/tax-calculator">Tax Calculation</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/pay">Pay</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/update-profile">Update</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
