import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import ViewData from './ViewData';
import ViewDataInfo from './ViewDataInfo';
import Form from './Form';
import Store from './Store';

function AppRoutes() {
  const [Data, setData] = useState([]);

  return (
    <Store.Provider value={{ Data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/ViewData" element={<ViewData />} />
          <Route path="/ViewDataInfo/:ID" element={<ViewDataInfo />} />
          <Route path="/AddData" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default AppRoutes;
