import { NewItemsTitle, Slider } from "./src/components/NewItems/NewItems";
import SliderMain from "./src/components/SliderMain/SliderMain";
import Collections from "./src/components/Collections/Collections";
import MenuNavBar from "./src/components/Menu/MenuNavBar/MenuNavBar";
import HeaderTop from "./src/components/HeaderTop/HeaderTop";

export default function Home() {
  return (
    <main className="main">
      <HeaderTop />
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
