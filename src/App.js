import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./Menu"
import DefaultPage from "./components/DefaultPage";
import Header from "./components/Header";

export default function App(){
  // <Header/>
  const [cart,setCart] = useState([])
  function addToCart(id){
    setCart([...cart,id])
  }
  return <div>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage/>}></Route>
        <Route path="/menu" element={<Menu/>}  />
      </Routes>
    </Router>
    {/* <ul>
      {cart.map(item => <li key={item}>{item.title}</li>)}
    </ul> */}
  </div>
}