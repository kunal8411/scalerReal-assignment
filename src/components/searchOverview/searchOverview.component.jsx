import React from 'react'; 
import './searchOverview.styles.scss';
import {connect} from 'react-redux';
// import {FilteredSearch} from '../filtered-search/filtered-search.component'
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// import {selectCollections} from '../../redux/shop/shop.selectors'
import SearchPreview from '../search-preview/search-preview.component'
import {SearchBox} from '../search-box/search-box.component'
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
        
     }
    render(){
        const { collections ,searchField} = this.state;
        // const filteredProducts=collections.map(cartItem=>(cartItem.filter(collection =>
        //     collection.name.toLowerCase().includes(searchField.toLowerCase())
        // )))
        const filteredProducts = collections.filter(collection =>
            collection.title.toLowerCase().includes(searchField.toLowerCase())
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
                filteredProducts.map(({id, ...otherCollectionProps})=>(
                    <SearchPreview key={id} {...otherCollectionProps} />
                     ))
            }
              
            </div>  
        )
    }
}


const mapStateToProps= createStructuredSelector({
    collections:selectCollectionsForPreview
})


export default connect(mapStateToProps)(SearchOverview);
