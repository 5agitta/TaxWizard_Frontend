import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-gray-800 w-64 h-screen fixed left-0 top-0 pt-16 text-white space-y-4">
      <ul className="relative space-y-4 wrap items-center space-x-4">
        <li className="border border-black p-4 bg-blue-500">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Tax Calculation</Link>
        </li>
        <li>
          <Link to="#">Report</Link>
        </li>
        <li>
          <Link to="#">History</Link>
        </li>
        <li>
          <Link to="#">Return</Link>
        </li>
        <li>
          <Link to="#">FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
