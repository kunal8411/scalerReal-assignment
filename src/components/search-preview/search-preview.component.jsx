import React from 'react';

import './search-preview.styles.scss';
// import CollectionItem from '../collectionn-item/collectionn-item.component'
import {FilteredSearch} from '../filtered-search/filtered-search.component'
const SearchPreview =({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .map((item)=>(
                <FilteredSearch key={item.id} item={item} />  
                ))
            }
        </div>

    </div>
)

export default SearchPreview;