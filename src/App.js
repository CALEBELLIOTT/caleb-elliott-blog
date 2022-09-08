import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { Header } from "./components/header/Header";
import { api } from "./services/AxiosService"


function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
