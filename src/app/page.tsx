import About from "@/components/about";
import Art from "@/components/art";
import Cocktails from "@/components/cocktails";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import NavBar from "@/components/navbar";


export default function Home() {

  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}
