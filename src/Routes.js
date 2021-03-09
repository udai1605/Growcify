import {Route, Switch} from 'react-router-dom';
import Categories from './Components/Categories'
const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Categories}/>
        </Switch>
    )
}


export default Routes