/* eslint-disable react/prop-types */

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
