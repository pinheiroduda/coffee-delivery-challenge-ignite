import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";

export function Router() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Order />} path='/order' />
    </Routes>
  )
}