import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import "./App.css";

const PAGES = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  certificates: Certificates,
  contact: Contact,
};

function App() {
  const [activePage, setActivePage] = useState("about");
  const ActivePage = PAGES[activePage];

  return (
    <main>
      <div className="container app-layout">
        <Sidebar />

        <div className="main-content">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <ActivePage />
        </div>
      </div>
    </main>
  );
}

export default App;
