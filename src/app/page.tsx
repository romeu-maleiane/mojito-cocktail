import About from "@/components/about";
import Cocktails from "@/components/cocktails";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";


export default function Home() {

  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
