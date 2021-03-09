import {GET_CATEGORIES,NO_CATEGORIES,GET_PRODUCTS_BY_CATEGORIES,NO_PRODUCTS_BY_CATEGORIES} from '../Types';
import Axios from 'axios';

export const getCategories=()=> async (dispatch)=>{
    try{
        const {data} = await Axios.get('https://api.growcify.com/dev/category/list');
        dispatch({
            type:GET_CATEGORIES,
            payload:data,
        })
    }catch(e){
        dispatch({
            type:NO_CATEGORIES,
        })
    }
}

export const getProductsByCategory=(categoryId)=> async(dispatch)=>{
    try{
        const {data}= await Axios.get(`https://api.growcify.com/dev/product/list/${categoryId}`);
        dispatch({
            type:GET_PRODUCTS_BY_CATEGORIES,
            payload:data,
        })
    }catch(e){
        dispatch({
            type:NO_PRODUCTS_BY_CATEGORIES,
        })
    }
}