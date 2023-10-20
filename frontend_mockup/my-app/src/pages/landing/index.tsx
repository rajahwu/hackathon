import HomePageLayout from "../../layouts/HomePageLayout";
import SiteNavBar from "../../components/navbar";
import SplashPage from "../../components/splash";
import MenuNavBar from "../../components/menu/navbar";

import MenuItemCard from "../../components/menu/itemcard";

export default function LandingPage() {
    return (
        <HomePageLayout>
            <SiteNavBar />
            <SplashPage />
            <MenuNavBar />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </HomePageLayout>
    )
} 