import React from 'react'
import useStyles from "./CategoryStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
const SingleCard = ({cate,index}) => {
    const classes = useStyles();
    return (
        <>
             <Grid item className={classes.card} xs={3}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={
                      cate.photos.length > 0
                        ? cate.photos[0]
                        : "resized-categories/20d3cb97-3baf-4f76-9254-dbef8dcaaafa.png"
                    }
                    title="Contemplative Reptile"
                  /> */}
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="170"
                          image={
                            cate.photos.length > 0
                              ? `https://picsum.photos/200/300?random=${index}`
                              : "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw"
                          }
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {cate.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {cate.isActive
                              ? "Stock Available"
                              : "Stock Not Available"}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link
                          to={`/products/${cate._id}`}
                          size="small"
                          color="primary"
                          className={classes.link}
                        >
                          See All Products of this Category
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
        </>
    )
}

export default SingleCard
