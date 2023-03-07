import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
