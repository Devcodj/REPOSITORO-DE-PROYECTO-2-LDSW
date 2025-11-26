import React from 'react'
export default function Wishlist({items=[], setItems}){
  function remove(id){ setItems(prev=> prev.filter(i=> i.id!==id)) }
  return (
    <div className="card">
      <h3>Lista de deseos</h3>
      {items.length===0? <p>Sin artículos guardados.</p> : items.map(i=>(
        <div key={i.id} style={{display:'flex', justifyContent:'space-between', marginBottom:8}}>
          <div>{i.name}</div>
          <div><button onClick={()=>remove(i.id)}>Eliminar</button></div>
        </div>
      ))}
    </div>
  )
}
