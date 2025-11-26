import React, {useState} from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import backlog from './data/backlog.json'

export default function App(){
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  function addToCart(product){
    setCart(prev => {
      const found = prev.find(p => p.id===product.id)
      if(found) return prev.map(p=> p.id===product.id ? {...p, qty: p.qty+1} : p)
      return [...prev, {...product, qty:1}]
    })
  }
  function addToWishlist(product){
    if(!wishlist.find(p=>p.id===product.id)) setWishlist(prev=>[...prev, product])
  }
  return (
    <div className="container">
      <header>
        <h1>Tienda Demo — Joyas</h1>
        <div>
          <strong>Carrito:</strong> {cart.reduce((s,p)=>s+p.qty,0)} items
        </div>
      </header>
      <main>
        <section style={{marginBottom:16}}>
          <ProductList products={backlog.products} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
        </section>
        <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <Cart items={cart} setItems={setCart} />
          <Wishlist items={wishlist} setItems={setWishlist} />
        </section>
      </main>
    </div>
  )
}
