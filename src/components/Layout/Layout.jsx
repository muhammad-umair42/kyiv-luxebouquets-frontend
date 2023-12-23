/* eslint-disable react/prop-types */

import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div id="App" style={{ transition: "all 0.5s ease-in-out" }}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
