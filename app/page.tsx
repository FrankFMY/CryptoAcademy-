import Header from "./components/Header";
import Hero from "./components/Hero";
import Program from "./components/Program";
import Speakers from "./components/Speakers";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Program />
        <Speakers />
        <Pricing />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
