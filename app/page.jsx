import About from "../components/About";
import ClientsEvolve from "../components/ClientsEvolve";
import Consultation from "../components/Consultation";
import Hero from "../components/Hero";
import Inquiry from "../components/Inquiry";
import InstagramWidget from "../components/InstagramWidget";
import Menu from "../components/Menu";
import Plans from "../components/Plans";
// import Reviews from "../components/Reviews";
import Training from "../components/Training";

export default function Home() {
  return (
    <main className="bg-body">
      <Menu />
      <Hero />
      <Training />
      <Plans />
      <Consultation />
      <ClientsEvolve />
      {/* <Reviews /> */}
      <About />
      <Inquiry />
      <InstagramWidget />
    </main>
  );
}
