import ProductList from "../features/Product-list/ProductList"
import Navbar from "../features/navbar/Navbar"

function Home() {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home