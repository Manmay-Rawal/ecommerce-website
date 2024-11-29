import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"



const Home = () => {

  const addToCartHandler =()=>{};
  return (
    <div className="home">
      
      <section></section>

      <h1>Latest Product
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>


        <ProductCard 
        productId="addddd" 
        name="camera" 
        price={49} 
        stock={5}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/I/61xl4inLS5L._AC_UY327_FMwebp_QL65_.jpg"
        />
      </main>
    </div> 
  )
}

export default Home