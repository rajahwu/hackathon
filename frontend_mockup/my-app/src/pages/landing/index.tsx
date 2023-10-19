import HomePageLayout from "../../layouts/HomePageLayout";
import SiteNavBar from "../../components/navbar";
import SplashPage from "../../components/splash";
import MenuNavBar from "../../components/menu/navbar";

export default function LandingPage() {
    return (
        <HomePageLayout>
            <SiteNavBar />
            <SplashPage />
            <MenuNavBar />
        </HomePageLayout>
    )
} 