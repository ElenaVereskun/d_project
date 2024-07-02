import Header from "./src/components/Header/header";
import NewItems from "./src/components/NewItems/NewItems";
import Popular from "./src/components/Popular/Popular";

export default function Home() {
  return (
    <main>
      <Header />
      <NewItems />
      <Popular />
    </main>
  );
}
