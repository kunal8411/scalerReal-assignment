import React from 'react';
import './filtered-search.styles.css'
export  const FilteredSearch = ({item})=>{
    console.log("item in filtered search componenent", item)
        
    return(
  <div className='product'>
  <div className="card" >
        
      <img src={item.imageUrl} alt=""/>
  
  <div className="content">
      <h3>
          {item.price}
      </h3>
      <span>${item.price}</span>
      <p>{item.name}</p>
      
      <button >Add to cart</button>
  </div>
</div>
</div>
)}
   
