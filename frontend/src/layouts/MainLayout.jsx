import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>

            {/* Sidebar fixed on the left */}
            <Sidebar />

            {/* Right content area */}
            <div style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }}>

                {/* Header */}
                <Header />

                {/* Main page content (expanded area) */}
                <main className="main-wrap" >
                    <Outlet />
                </main>

                {/* Footer pinned to bottom */}
                <Footer />

            </div>
        </div>
    );
};

export default MainLayout;
