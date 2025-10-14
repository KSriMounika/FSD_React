import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Store from "./Store";
function pages() {
  const [Count ,setCount] = useState(0)
  return (
    <>
    <Store.Provider value={{Count,setCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}
export default pages;