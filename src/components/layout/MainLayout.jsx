import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

function MainLayout(){
    return(
        <>
        
            <HeaderLayout/>
        
        <main>
            <Outlet/>
        </main>
        
            <FooterLayout/>
        
        </>
    )
}
export default MainLayout;