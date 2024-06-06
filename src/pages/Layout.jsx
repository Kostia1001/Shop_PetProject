import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
const Layout = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
