import React from 'react'
export default function Cart({items=[], setItems}){
  function inc(id){ setItems(prev=> prev.map(i=> i.id===id? {...i, qty: i.qty+1} : i)) }
  function dec(id){ setItems(prev=> prev.map(i=> i.id===id? {...i, qty: Math.max(1,i.qty-1)} : i)) }
  function remove(id){ setItems(prev=> prev.filter(i=> i.id!==id)) }
  const total = items.reduce((s,i)=> s + i.qty * i.price,0)
  return (
    <div className="card">
      <h3>Carrito</h3>
      {items.length===0? <p>Carrito vacío.</p> : items.map(i=>(
        <div key={i.id} style={{marginBottom:8}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>{i.name} x{i.qty}</div>
            <div>
              <button onClick={()=>inc(i.id)}>+</button>
              <button onClick={()=>dec(i.id)}>-</button>
              <button onClick={()=>remove(i.id)}>Quitar</button>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div><strong>Total: ${total.toFixed(2)}</strong></div>
    </div>
  )
}
