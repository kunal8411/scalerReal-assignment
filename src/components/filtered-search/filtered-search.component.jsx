import React from 'react';
import './filtered-search.styles.css'
export  const FilteredSearch = ({item, addItem})=>(
    <div className="card-container">
        
      <img
      src={`${item.imageUrl}?set=set2&size=180x180`}
      alt="monster"
        />
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        
    </div>
)
   
