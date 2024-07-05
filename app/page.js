import { NewItemsTitle, Slider } from "./src/components/NewItems/NewItems";
import SliderMain from "./src/components/SliderMain/SliderMain";
import Collections from "./src/components/Collections/Collections";
import MenuNavBar from "./src/components/Menu/MenuNavBar/MenuNavBar";
import Header from "./src/components/Header/Header";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <SliderMain />
      <NewItemsTitle />
      <Slider />
      <Collections />
      <div className="main__nav">
        <MenuNavBar />
      </div>
    </main>
  );
}
