"use client";

import { useView } from "../context/ViewContext";
import Home from "./Home";
import Journal from "./Journal";
import Characters from "./Characters";
import WorldInfo from "./WorldInfo";
import Map from "./Map";

export default function PageView() {
  const { currentView } = useView();

  return (
    <>
      {currentView === "Home" && <Home />}
      {currentView === "Journal" && <Journal />}
      {currentView === "Characters" && <Characters />}
      {currentView === "World Info" && <WorldInfo />}
      {currentView === "Map" && <Map />}
    </>
  );
}
