import {Route, Switch} from 'react-router-dom';
import Landing from './Components/LandingPage/Landing'
import Categories from './Components/CategoryPage/CategoryPage'
import CateProducts from './Components/ProductPage/CateProducts'
const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path='/categories' component={Categories}/>
            <Route exact path='/products/:id' component={CateProducts}/>
        </Switch>
    )
}


export default Routes