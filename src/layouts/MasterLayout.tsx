import AboutHareengSection from "@/components/AboutHareengSection";
import AppNavbar from "@/components/common/AppNavbar";
import DownloadAppSection from "@/components/DownloadAppSection";
import EarnWithHareeng from "@/components/EarnWithHareeng";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OpportunitiesSlider from "@/components/OpportunitiesSlider";
import SafetySection from "@/components/SafetySection";
import ScooterSection from "@/components/ScooterSection";
import UpdatesSection from "@/components/UpdatesSection";

export default function MasterLayout() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <OpportunitiesSlider />
      <EarnWithHareeng />
      <SafetySection />
      <ScooterSection />
      <AboutHareengSection />
      <DownloadAppSection />
      <UpdatesSection />
      <Footer />
    </>
  );
}
