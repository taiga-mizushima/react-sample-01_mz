import "./styles.css";
import { Header } from "./components/atoms/layout/Header";
import { Footer } from "./components/atoms/layout/Footer";
import { ATable } from "./components/atoms/layout/Table";

export default function App() {
  return (
    <>
      <Header />
      <ATable />
      <Footer />
    </>
  );
}
