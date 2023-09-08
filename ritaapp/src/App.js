
import './App.css';
import Header from './Header';
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Mycart from './Mycart';
import Footer from './Footer';
import React, { useState } from 'react'
import TodoList from './Todoreducer';

function App() {
  const [cart,setCart]=useState([]);  
  return (
    <div className="App">
      <Header cart={cart}/>
      <Routes>
        <Route path='/' element={<Products cart={cart}  setCart={setCart}/>} />
        <Route path='/purchaseitems' element={<Mycart cart={cart}  setCart={setCart}/>} />
      </Routes>
      <br />
      <br />
      <br />
      <Footer />
      {/* <TodoList/> */}
    </div>
  );
}

export default App;


















  // const onAdd = (product) => {
  //   const exist = additem.find((x) => x.id === product.id);
  //   if (exist) {
  //     setAdditem(
  //       additem.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setAdditem([...additem, { ...product, qty: 1 }]);
  //   }
  // };