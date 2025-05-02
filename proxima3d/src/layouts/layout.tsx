import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
