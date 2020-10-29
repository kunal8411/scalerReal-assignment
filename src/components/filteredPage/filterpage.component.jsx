import React from 'react'; 

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import SearchPreview from '../search-preview/search-preview.component'

class FilteredPage extends React.Component{
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
            collection.title.toLowerCase().includes(searchField.toLowerCase())
        )
        // console.log(filteredProducts)
        return(
            <div className='collection-overview'>
                <h1>Filter Products by category</h1>
        {/* <SearchBox
          placeholder='Search Product'
          handleChange= {this.handleChange}
        />   */}
        Filter By
        <select onChange={this.handleChange}>
          <option value="">Select Any</option>
          <option value="mobile">Mobiles</option>
          <option value="laptops">Laptops</option>
          <option value="sports">Sports</option>
          <option value="womens">Womens</option>
          <option value="mens">Mens</option>

        </select> 


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


export default connect(mapStateToProps)(FilteredPage);
