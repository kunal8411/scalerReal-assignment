import React from 'react';
import { connect } from 'react-redux';
import './sortItems.styles.css'
import {selectItems} from '../../redux/items/items.selector';
import {FilteredSearch} from '../filtered-search/filtered-search.component'
import {createStructuredSelector} from 'reselect'
class  SortItems extends React.Component{
    constructor(){
        super();
        this.state={
          items:[]
        }
      }
      componentDidMount(){
        const {items}= this.props;
        this.setState({items:items})
      }
      sortByPriceAsc=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.items.sort((a,b)=>{
           return parseInt(a.price)  - parseInt(b.price);
        })

        this.setState({
            items:sortedProductsAsc
        })
      }
       sortByPriceDsc=()=>{

        let sortedProductsDsc;
        sortedProductsDsc= this.state.items.sort((a,b)=>{
           return parseInt(b.price)  - parseInt(a.price);
        })

        this.setState({
            items:sortedProductsDsc
        })
      }
    render(){
        
    return(
            <div>
              <h3>Sort the products based on price</h3>
                <div class="btn-group">
                <button onClick={this.sortByPriceAsc}>ASCENDING</button>
                <button onClick={this.sortByPriceDsc}>DESCENDING</button>
                
                </div>
            <div className='card-list'>
                
               {
                   this.state.items.map(item=>(
                    <FilteredSearch id={item.id} item={item}/>
                   ))
               }
            </div>
            </div>
    )}
}

const mapStateToProps= createStructuredSelector({
    items:selectItems
})

export default connect(mapStateToProps)(SortItems);
