import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Common/Footer/Footer";


const Layout = () => {
    return ( 
        <>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
        </>
     );
}
 
export default Layout;