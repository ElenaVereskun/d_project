import Header from "./src/components/Header/Header";
import NewItems from "./src/components/NewItems/NewItems";
import SliderMain from "./src/components/SliderMain/SliderMain";
import Collections from "./src/components/Collections/Collections";

export default function Home() {
  return (
    <main>
      <Header />
      <SliderMain />
      <NewItems />
      <Collections />
    </main>
  );
}
