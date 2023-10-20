import RootLayout from "../../layouts/RootLayout";
import SiteNavBar from "../../components/navbar";
import SplashPage from "../../components/splash";
import MenuNavBar from "../../components/menu/navbar";

import { Outlet } from "react-router-dom";

export default function LandingPage() {
    return (
        <RootLayout>
            <SiteNavBar />
            <SplashPage />
            <MenuNavBar />
            <Outlet />
        </RootLayout>
    )
} 