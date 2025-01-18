import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

export default function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
