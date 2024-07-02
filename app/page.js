import Header from "./src/components/Header/header";
import NewItems from "./src/components/NewItems/NewItems";
import Popular from "./src/components/Popular/Popular";
import Slider from "./src/components/Slider/Slider";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <NewItems />
      <Popular />
    </main>
  );
}
