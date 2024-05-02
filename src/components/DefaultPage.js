import { useState,useEffect } from "react";

export default function DefaultPage() {
    const [prod,setProd] = useState([])
    useEffect(function () {
        fetch("https://fakestoreapi.com/products?limit=5")
          .then((res) => res.json())
          .then((data) => setProd(data));
      }, []);
    return <div>
      <ul>
        {prod.map((item) => (
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
}