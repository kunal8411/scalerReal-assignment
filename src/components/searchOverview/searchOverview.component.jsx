import React from 'react'; 
import './searchOverview.styles.css';
import {connect} from 'react-redux';
// import {FilteredSearch} from '../filtered-search/filtered-search.component'
import {createStructuredSelector} from 'reselect'
// import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import {selectItems} from '../../redux/items/items.selector';
// import {selectCollections} from '../../redux/shop/shop.selectors';
import DisaplaySearchproducts from '../displaySearchProducts/displaySearchProducts.component'
// import SearchPreview from '../search-preview/search-preview.component'
import {SearchBox} from '../search-box/search-box.component'
// import {FilteredSearch} from '../filtered-search/filtered-search.component'
class SearchOverview extends React.Component{
    constructor(){
        super();
        this.state={
          collections:[],
          searchField:""
        }
      }
      componentDidMount(){
        const {collections}= this.props;
        this.setState({collections:collections})
    
      }
      handleChange= (e)=>{
        this.setState({searchField: e.target.value})
        console.log("hello", this.state.searchField)
        
     }
    render(){
        const { collections ,searchField} = this.state;
        // const filteredProducts=collections.map(cartItem=>(cartItem.filter(collection =>
        //     collection.name.toLowerCase().includes(searchField.toLowerCase())
        // )))
        const filteredProducts = collections.filter(collection =>
            collection.name.toLowerCase().includes(searchField.toLowerCase())
        )
        console.log(filteredProducts)
        return(
            <div className='collection-overview'>
                <h1>ALL PRODUCTS</h1>
        <SearchBox
          placeholder='Search Product'
          handleChange= {this.handleChange}
        />  
            {
                filteredProducts.map(({id, name, price, imageUrl})=>(
                    <DisaplaySearchproducts key={id} name={name} price={price} imageUrl={imageUrl} />
                     ))
            }
              
            </div>  
        )
    }
}


const mapStateToProps= createStructuredSelector({
  collections:selectItems
})


export default connect(mapStateToProps)(SearchOverview);
