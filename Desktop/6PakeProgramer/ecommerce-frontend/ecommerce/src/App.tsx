
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { FaSearch, FaCartPlus} from 'react-icons/fa'
import {lazy, Suspense } from "react"
import Loader from "./component/Loader";



const Home = lazy(()=>import ('./pages/Home'));
const Search = lazy(()=>import ('./pages/Search'));
const Cart = lazy(()=>import ('./pages/Cart'));


function App() {

  return (
     <Router>



          {/* Header */}

      <Suspense fallback={<Loader/>}>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/search" element={<Cart/>}/>

      </Routes>

      </Suspense>
     </Router>

  )
}

export default App
