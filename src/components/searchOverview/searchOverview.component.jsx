import React from 'react'; 
import './searchOverview.styles.scss';
import {connect} from 'react-redux';
// import {FilteredSearch} from '../filtered-search/filtered-search.component'
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// import {selectCollections} from '../../redux/shop/shop.selectors'
import SearchPreview from '../search-preview/search-preview.component'
const SearchOverview =({collections})=>(
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <SearchPreview key={id} {...otherCollectionProps} />
                 ))
        }
    </div>  
);

const mapStateToProps= createStructuredSelector({
    collections:selectCollectionsForPreview
})


export default connect(mapStateToProps)(SearchOverview);
