import About from "../components/About";
import ClientsEvolve from "../components/ClientsEvolve";
import Consultation from "../components/Consultation";
import Inquiry from "../components/Inquiry";
import InstagramWidget from "../components/InstagramWidget";
// import Menu from "../components/Menu";
import Plans from "../components/Plans";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <main className="bg-body">
      {/* <Menu /> */}
      <Plans />
      <Consultation />
      <ClientsEvolve />
      <Reviews />
      <About />
      <Inquiry />
      <InstagramWidget />
    </main>
  );
}
