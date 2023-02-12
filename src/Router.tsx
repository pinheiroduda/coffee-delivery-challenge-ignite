import { Route, Routes } from "react-router-dom";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";

export function Router() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Order />} path='/order' />
      <Route element={<ConfirmedOrder />} path='/confirmed-order' />
    </Routes>
  )
}