import { useState } from "react"
import ProductCard from "../components/ProductCard";

const Search = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);


  const addToCartHandler = () =>{};

  const isPervPage = page > 1;
  const isNextPage = page < 4;


  return (
    <div className="ProductSearchPage">

      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low To High)</option>
            <option value="dsc">Price (High To Low)</option>
          </select>
        </div>


        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
          type="range"
          min={100}
          max={10000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>


      <main>
        <h1>Products</h1>
        <input 
        type="text" 
        placeholder="Search by name..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
         />


         <div className="searchProductList">
          <ProductCard
          productId="addddd" 
          name="camera" 
          price={49} 
          stock={5}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/61xl4inLS5L._AC_UY327_FMwebp_QL65_.jpg"
          />
         </div>

         <article>
          <button disabled={!isPervPage}
           onClick={()=>setPage((perv)=>perv - 1)}>Perv</button>
          <span>
            {page} of {4}
          </span>
          <button disabled={!isNextPage} onClick={()=>setPage((perv)=>perv + 1)}>Next</button>
         </article>
      </main>
    </div>
  )
}

export default Search