import React from 'react';
import {Route} from 'react-router-dom';


import SearchOverview from '../../components/searchOverview/searchOverview.component'
const  SearchPage = ({match}) => ( 
       <div className='shop-page'>
            <Route exact path={`${match.path}`} component={SearchOverview} /> 
            
        </div>
        )
      
    




export default SearchPage;
