import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) =>
    setCart((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product]
    );

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductList
        category={category}
        setCategory={setCategory}
        addToCart={addToCart}
      />
      <Cart cart={cart} />
    </div>
  );
}