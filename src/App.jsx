import './App.css'
import Header from './components/Header'
import CartModal from './features/cart/CartModal'
import ProductList from './features/productlist/ProductList'
import Filter from './components/Filter'
import { useState } from 'react'

function App() {
  let [isOpenModalCart, setIsOpenModalCart] = useState(false)

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true)
  }

  const handleHideModalCart = () => {
    setIsOpenModalCart(false)
  }
  return (
    <>
      {isOpenModalCart ? <CartModal handleHideModalCart={handleHideModalCart} /> : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="max-w-7xl mx-auto px-4">
        <Filter />
        <ProductList />
      </main>
    </>
  )
}

export default App
