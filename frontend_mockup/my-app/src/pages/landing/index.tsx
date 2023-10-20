import HomePageLayout from "../../layouts/HomePageLayout";
import SiteNavBar from "../../components/navbar";
import SplashPage from "../../components/splash";
import MenuNavBar from "../../components/menu/navbar";

import { Outlet } from "react-router-dom";

export default function LandingPage() {
    return (
        <HomePageLayout>
            <SiteNavBar />
            <SplashPage />
            <MenuNavBar />
            <Outlet />
        </HomePageLayout>
    )
} 