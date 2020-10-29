import React from 'react';

import './search-preview.styles.css';
// import CollectionItem from '../collectionn-item/collectionn-item.component'
import {FilteredSearch} from '../filtered-search/filtered-search.component'
const SearchPreview =(props)=>{
    // console.log("items",props.items)
    return(
     
    <div className='cardlist'>
        
        <div className='card-list'>
            {
                props.items
                .map((item)=>(
                    <FilteredSearch key={item.id} item={item} />
                  
                ))
            }
        </div>

    </div>
)}

export default SearchPreview;