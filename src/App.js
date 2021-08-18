import "./App.css";
import Nav from "./Nav";
import Main from './Main'
import React from "react";
import cn from 'classnames'

function App() {
  let [OpenCart, setOpenCart] = React.useState(false);
  

  function OpenCartF() {
    setOpenCart(!OpenCart);
  }  

  return (
    <div className="body">
      <div className={cn("overlay", { active: OpenCart })} onClick={OpenCartF}></div>
        <div className="container">
        <section>
          <div className="header">
            <div className="logo">
              <a href="">LOGO</a>
            </div>
            <Nav />
            <span className={cn("cartLink", { active: OpenCart })}  onClick={OpenCartF}>Корзина</span>
          </div>
          <Main setOpenCart={setOpenCart} OpenCart={OpenCart}/>
          </section> 
        </div>
    </div>
  );
}

export default App;
