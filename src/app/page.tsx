import Gradients from "@/components/gradients";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import { featuresOne, featuresTwo } from "@/constants/data";
import { CTASection } from "@/components/CTASection";
import BookCall from "@/components/book-call";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Gradients />
      <Navbar />
      <div className="relative overflow-y-hidden">
        <Hero />
      </div>
      <main className="flex-1">
        <Features
          title="Why Choose Intent?"
          description="Turbocharge your coding All tools on deck."
          features={featuresOne}
        />
        <GetStarted />
        {/* <Features
          title="Improve Productivity"
          description="Use the features of Intent to improve your productivity."
          features={featuresTwo}
        /> */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BookCall />
          <FAQ />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
