import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return(
        <>
        <Sidebar>
            <Outlet/>
        </Sidebar>
        </>
    );
}

export default Layout;
