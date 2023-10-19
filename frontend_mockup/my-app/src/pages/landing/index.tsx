import HomePageLayout from "../../layouts/HomePageLayout";
import NavBar from "../../components/navbar";
import SplashPage from "../../components/splash";

export default function LandingPage() {
    return (
     <HomePageLayout>
        <NavBar />
        <SplashPage />
     </HomePageLayout> 
    )
} 