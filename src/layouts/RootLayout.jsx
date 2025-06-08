import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      {/* <div className="mt-[100px]">
        <BreadCrumps />
      </div> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
