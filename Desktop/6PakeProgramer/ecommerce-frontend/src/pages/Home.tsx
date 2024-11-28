import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Home = () => {

  const addToCartHandler=()=>{};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product

        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>

        <ProductCard
        productId="abcdfg"
        name="Camera"
        price={59}
        stock={3} 
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/I/71bEYFvV5lL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </main>
    </div>
  )
}

export default Home