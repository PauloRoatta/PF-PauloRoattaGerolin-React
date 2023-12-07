import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "../Contexts/CartContext";

import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Contacto } from "./components/Contacto";

import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

function App() {
  return ( 
  <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Productos" />}
        />
        <Route
          path="/contacto"
          element={<Contacto />}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Productos" />}
        />
        <Route
          path="/items/:id"
          element={<ItemDetailContainer />}
        />
         <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App
