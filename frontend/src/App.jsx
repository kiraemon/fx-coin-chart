import React from "react";

import { Header } from "./components/Header";
import { SidebarMenu } from "./components/SidebarMenu";
import { MainChartCanvas } from "./components/MainChartCanvas";
import { Footer } from "./components/Footer";

// CSS
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <SidebarMenu />
        <MainChartCanvas />
        <Footer />
      </div>
    </div>
  );
};

export default App;
