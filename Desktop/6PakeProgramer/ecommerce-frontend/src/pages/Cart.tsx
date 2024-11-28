import { useState , useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";

const cartItems=[
  {
  productId:"ahhkna",
  photo:"https://m.media-amazon.com/images/I/71bEYFvV5lL._AC_UY327_FMwebp_QL65_.jpg",
  name:"Camera",
  price:59,
  quantity:4,
  stock:10,
  },
];
const subtotal=4000;
const tax=Math.round(subtotal*0.18);
const shipingCharge=400;
const discount=400;
const total=subtotal+tax+shipingCharge;

const Cart = () => {
  const [couponCode,setCouponCode]=useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);


  useEffect(() => {
    const timeOutId = setTimeout( ()=> {
      if (Math.random()>0.5) {
        setIsValidCouponCode(true)
      }else{setIsValidCouponCode(false)}
    }, 1000)
  
    return () => {
     clearTimeout(timeOutId);
     setIsValidCouponCode(false);
    }
  }, [couponCode])
  

  return (
    <div className="cart">

      <main>
          {
            cartItems.map((i,idx)=> (<CartItem key={idx} cartItems={i} />))
          }
      </main>

      <aside>
        <p>Subtotal:${subtotal}</p>
        <p>Shiping Charge:${shipingCharge}</p>
        <p>Tax:${tax}</p>
        <p>Discount:<em> - ${discount}</em></p>
        <p>Total:${total}</p>
        <input 
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e)=>setCouponCode(e.target.value)}
         />

        {
          couponCode && (isValidCouponCode ?
             (<span className="green">${discount} off using the <code>{couponCode}</code></span>)
             :
             (<span className="red"> Invalid Coupon <VscError/></span>)
        )}

      </aside>

    </div>
  )
}

export default Cart