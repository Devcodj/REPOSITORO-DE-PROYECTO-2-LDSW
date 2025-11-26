import React from 'react'
export default function ProductList({products=[], onAddToCart, onAddToWishlist}){
  return (
    <div>
      <h2>Productos</h2>
      <div className="grid">
        {products.map(p=>(
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.category} — {p.material}</p>
            <p><strong>${p.price}</strong></p>
            <div style={{display:'flex', gap:8}}>
              <button onClick={()=>onAddToCart(p)}>Añadir al carrito</button>
              <button onClick={()=>onAddToWishlist(p)}>Guardar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
