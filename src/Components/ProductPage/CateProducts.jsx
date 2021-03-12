import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsByCategory } from "../../redux/Actions/groceryActions";
import useStyles from "./CateProductStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import SingleCard from '../CategoryPage/SingleCard'
const CateProducts = ({ loading, getProductsByCategory, products,categories }) => {
  const { id } = useParams();
  const classes = useStyles();
  const [noprod, setNoProd] = useState(false);
  console.log(noprod)
  useEffect(() => {
    getProductsByCategory(id);
  
  }, [getProductsByCategory, id]);

  useEffect(()=>{
    products.length <= 0 && setNoProd(true);
  },[products])
  return (
    <>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <Grid container spacing={4}>
              {products.map((prod, index) => (
                <Grid item className={classes.card} xs={3}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="170"
                        image={
                          prod.photos.length > 0
                            ? `https://picsum.photos/200/300?random=${index}`
                            : "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw"
                        }
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {prod.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Category -->{"  "}
                          {prod.category.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {prod.isActive
                            ? "Stock Available"
                            : "Stock Not Available"}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                  <Link to={`/products/${cate._id}`} size="small" color="primary" >
                    See All Products
                  </Link>
                </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
              <div>
            <Alert className={classes.Alert} variant="filled" severity="error">
              There Are No Products In This Categories
            </Alert>
            {noprod&&
            <>
            <Typography variant="h3" className={classes.explore}>Explore Other Categories</Typography>
            <Grid container spacing={4}> 
            {
                categories.map((cate,index)=>(
                    <SingleCard cate={cate} index={index}/>
                ))
            }
            </Grid>
            </>
            }
            </div>
          )}
        </>

      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.groceryStates.loading,
  products: state.groceryStates.productByCategories,
  categories: state.groceryStates.categories,
});
export default connect(mapStateToProps, { getProductsByCategory })(
  CateProducts
);
