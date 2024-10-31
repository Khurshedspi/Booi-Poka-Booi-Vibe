import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// s1: create component
const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* s2  */}
            <Navbar></Navbar>
            {/* s3  */}
            <Outlet></Outlet>
            {/* s4  */}
            <Footer></Footer>
        </div>
    );
};

export default Root;