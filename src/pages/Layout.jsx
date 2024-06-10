import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const Layout = () => {
  return (
    <div>
      <nav style={{position: "sticky",top:0,zIndex:999}}>
        <Header />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
