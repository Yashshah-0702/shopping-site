import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button id={item.id} 
            // onClick={() => addToCart(item)}
            >  Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
