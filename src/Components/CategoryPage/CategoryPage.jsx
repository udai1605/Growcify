import { getCategories } from "../../redux/Actions/groceryActions";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./CategoryStyles";
import Grid from "@material-ui/core/Grid";
import SingleCard from './SingleCard'
const CategoryPage = ({ loading, getCategories, categories }) => {
  const classes = useStyles();
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Grid container spacing={4}>
            {categories.length > 0 ? (
              <>
                {categories.map((cate, index) => (
                 <SingleCard cate={cate} index={index}/>
                ))}
              </>
            ) : (
              <div>hello</div>
            )}
          </Grid>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.groceryStates.loading,
  categories: state.groceryStates.categories,
});

export default connect(mapStateToProps, { getCategories })(CategoryPage);
