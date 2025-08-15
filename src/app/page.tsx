import { main } from "motion/react-client";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black/[0.96] antialiased bg-grid-white/[0.02] w-full">
      {/* antialiased ye front smoothey karta hai  */}
        <HeroSection/>
        <FeaturedCourses/>
        <TestimonialCards/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
        
    </main>
  );
}
