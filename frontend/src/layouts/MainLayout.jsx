import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>

      <div className="layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Right section */}
        <div className="content-area">
          <Header />

          <main className="main-wrap">
            <Outlet />
          </main>

        </div>

      </div>


      <Footer />

    </>

  );
};

export default MainLayout;
