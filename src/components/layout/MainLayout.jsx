import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

function MainLayout(){
    return(
        <>
        <header>
            <HeaderLayout/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <FooterLayout/>
        </footer>
        </>
    )
}
export default MainLayout;