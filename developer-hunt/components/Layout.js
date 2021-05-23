import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="m-20">
                {children}
            </div>

            {/* <Footer /> */}
        </div>
    )
}
export default Layout