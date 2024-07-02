import Header from "./src/components/Header/header";
import NewItems from "./src/components/NewItems/NewItems";
import Slider from "./src/components/Slider/Slider";
import Collections from "./src/components/Collections/Collections";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <NewItems />
      <Collections />
    </main>
  );
}
