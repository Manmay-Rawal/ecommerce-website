import { useState , useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const cartItems=[

  {
    productid:"njkhkhsad",
    photo:"https://m.media-amazon.com/images/I/61xl4inLS5L._AC_UY327_FMwebp_QL65_.jpg",
    name:"Camera",
    price:49,
    quantity:4,
    stock:10,
  },
];
const subtotal =39;
const tax =Math.round(subtotal * 0.18);
const shipingCharge = 3;
const discount=4;
const total = subtotal + tax +shipingCharge;



const Cart = () => {

const [couponCode , setCouponCode]= useState<string>("")
const [isValidcouponCode , setisValidcouponCode]= useState<boolean>(false)

useEffect(() => {
  const timeOutId = setTimeout(()=>{
if(Math.random()>0.5) setisValidcouponCode(true)
  else setisValidcouponCode(false)
  },1000);

  return () => {
    clearTimeout(timeOutId)
    setisValidcouponCode(false)
  }
}, [couponCode])


  return (
    <div className="cart">
      <main>
        {
            cartItems.length>0? cartItems.map((i,idx)=>( 
              <CartItem key={idx} cartItem={i} />
              ))
              :
              (<h1>No Items Added</h1>)
        }
      </main>
      <aside>
            <p>Subtotal: ${subtotal}</p>
            <p>Shiping Charges: ${shipingCharge}</p>
            <p>Tax: ${tax}</p>
            <p>
              Discount - <em className="red">
                ${discount}
              </em>
            </p>
            <p>
              <b>Total :${total}</b>
            </p>
            <input type="text" 
            placeholder="Coupon Code..."
            value={couponCode}
            onChange={(e)=>setCouponCode(e.target.value)}
             />



             {
              couponCode && (
                isValidcouponCode ? 
                (<span className="green">${discount} off using the  <code>{couponCode}</code></span>) 
                : (<span className="red">Invlaid Code <VscError/></span>)
              )
             }


             {
              cartItems.length>0 && <Link to="/shipping">Checkout</Link>
             }
      </aside>
    </div>
  )
}

export default Cart