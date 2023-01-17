import "./styles.css";
import { Header } from "./components/atoms/layout/Header";
import { Footer } from "./components/atoms/layout/Footer";
import { ATable } from "./components/atoms/layout/Table";
import { ConnectedButtons } from "./components/molecules/buttons/ConnectedButtons";

export default function App() {
  return (
    <>
      <Header />
      <ATable />
      <ConnectedButtons  first="Normal" second="Ant" />
      <Footer />
    </>
  );
}
