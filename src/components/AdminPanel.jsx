import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

function AdminPanel() {
  return (
    <div className="text-center">
      <h2>Admin Panel</h2>
      <Link to={"/login"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          Login
        </p>
      </Link>
      <Link to={"/createItem"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          Add Items
          <MdAdd />
        </p>
      </Link>
    </div>
  );
}

export default AdminPanel;
