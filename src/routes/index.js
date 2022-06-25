import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "../views/Home"
import RutaDesconocida from "../views/404"
import PokemonDetail from "../views/PokemonDetail"
import ScrollToTop from "../components/ScrollToTop"

export default function Routes(){
    
    return(
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/pokemon/:id">
                    <PokemonDetail />
                </Route>
                <Route>
                    <RutaDesconocida />
                </Route>                
            </Switch>
        </Router>
    );
}