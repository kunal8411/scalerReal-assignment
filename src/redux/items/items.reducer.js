
import ITEMS_DATA from './items.data';
const INITIAL_STATE={
    items:ITEMS_DATA 
} 

const itemsReducer = (state=INITIAL_STATE, action )=>{
    switch(action.type){
        default:
            return state;

    }
}

export default itemsReducer;

