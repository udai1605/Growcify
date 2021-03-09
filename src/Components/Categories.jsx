import React,{useEffect} from 'react'
import {connect} from 'react-redux';

import {getCategories} from '../redux/Actions/groceryActions'
const Categories = ({loading,getCategories}) => {

    useEffect(() => {
        getCategories()
    }, [getCategories])

    return (
        <div>
            this is categories page
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.groceryStates.loading,
  });

export default connect(mapStateToProps, {getCategories})(Categories)
