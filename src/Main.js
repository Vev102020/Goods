import React from "react";
import cn from 'classnames'
import close from "./icon/close.svg";
let Goods = require('./Goods.json');

export default function Main(props) {
  const MoneyFormat = '₽';

  let indexRel = React.useRef('');
  let [CartList, setCartList] = React.useState([]);


  let [bLink, setbLink] = React.useState(Goods[0].bigUrl);
  let [goodsName, setgoodsname] = React.useState(Goods[0].name);
  let [price, setprics] = React.useState(Goods[0].price);
  let [linksIndex, setlinksIndex] = React.useState(0);
  function СhangeBigImg(i, p, n, index) {
    // Замена картинки
    setbLink(i);
    // Замена цены
    setprics(p);
    // Название товара
    setgoodsname(n);
    // Номер в массиве
    setlinksIndex(index);
    
  }
  
	function handleChange(event) {
    // Замена картинки
    setbLink(Goods[event.target.value].bigUrl);
    // Замена цены
    setprics(Goods[event.target.value].price);
    // Название товара
    setgoodsname(Goods[event.target.value].name);
    // Номер в массиве
    setlinksIndex(parseInt(event.target.value));
	}

  function AddCart() {
    setCartList([...CartList,  {name: Goods[linksIndex].name, price: Goods[linksIndex].price, bigUrl: Goods[linksIndex].bigUrl, id: Goods[linksIndex].id}])
    
  }

  let SumCarPrice = 0
  let sum=0;
  for(var i=0;i<CartList.length;i++){
    sum = sum + parseInt(CartList[i].price);
    SumCarPrice = sum;
  }

  indexRel.current = linksIndex;

  function removeCartList(id)
  {
    setCartList([...CartList].filter((n) => {
      return n.id != id;
    }))
  }

  return (
    <div className="main">
      <div className="left">
        <div className="big_img">
          <img src={bLink} />
        </div>
      </div>
      <div className="right">
        <span className="title">{goodsName}</span>
        <span className="price">
          <span className="num">{price} {MoneyFormat}</span>
        </span>
        <span>Цвет:</span>
        <div className="buttuns_modif">
          {Goods.map((item, index) => (
            <button
              className={cn('button_modif', {'active':indexRel.current===index})}
              onClick={() => СhangeBigImg(item.bigUrl, item.price, item.name, index)}
              key={index} value={index}
            >
              <img src={item.src} />
            </button>
          ))}
        </div>
        <span>Список цвета:</span>
        <select id="colorSelect" value={indexRel.current} onChange={handleChange}>
          {Goods.map((item, index) => (
            <option key={index} value={index}>{item.color}</option>
          ))}
        </select>
        <button className="button _addCart" onClick={AddCart} >В корзину</button>

      </div>
      <div id="cart" className={cn("cart_menu", { active: props.OpenCart })}>
      <span className="cart_title">Корзина</span>
      <span className="closeCart" onClick={()=>{
        props.setOpenCart(false);
      }}><img src={close}/></span>
      <div className="cart_container">
        {CartList.map((item) => (
              <div className="cart_block" key={item.id} onClick={()=> removeCartList(item.id)}>
                <img className="cart_img" src={item.bigUrl}/>
                <div className="cart_infoGoods">
                  <span className="cart_name">{item.name}</span>
                  <span className="cart_price">{item.price} {MoneyFormat}</span>
                </div> 
              </div>
            ))}
      </div>
      <span className="CartNoProducts" style={{display: SumCarPrice === 0 ? 'flex' : 'none' }} >Корзина пуста</span>
      <span className="SUM_price"><span>Итого:</span> <span>{SumCarPrice} {MoneyFormat}</span></span>
      <button className="button _del" style={{display: SumCarPrice === 0 ? 'none' : 'flex' }}   onClick={()=>{setCartList([])}}>Очистить корзину</button>
      <button className="button _orderCart" style={{display: SumCarPrice === 0 ? 'none' : 'flex' }}   onClick={()=>{}}>Оформить заказ</button>
      </div>
    </div>
  );
}
