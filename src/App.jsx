import { Outlet } from "react-router-dom";
import Footer from './components/footer/footer_copy.jsx'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";

export default function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className="wrapper bg-gray-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
