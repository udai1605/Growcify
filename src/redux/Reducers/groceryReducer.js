import {GET_CATEGORIES,NO_CATEGORIES,GET_PRODUCTS_BY_CATEGORIES,NO_PRODUCTS_BY_CATEGORIES} from '../Types';
const INITIAL_STATE={
    loading: true,
    categories: [],
    productByCategories:[],
};

const groceryReducer=(state=INITIAL_STATE,actions)=>{
    const {type, payload} = actions;
    
    switch (type) {
        case GET_CATEGORIES:
            return{
                ...state,
                categories:payload,
                loading:false,
            };
        case NO_CATEGORIES:
            return{
                ...state,
                loading:false,
            }
        case GET_PRODUCTS_BY_CATEGORIES:
            return{
                ...state,
                productByCategories:payload,
                loading:false,
            }
        case NO_PRODUCTS_BY_CATEGORIES:
            return{
                ...state,
                loading:false,
            }
        default:
            return state;
    }
}

export default groceryReducer;