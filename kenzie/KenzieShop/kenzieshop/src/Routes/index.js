import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import products from "../store/modules/products";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home products={products} />
    </Route>

    <Route path="/cart">
      <Cart />
    </Route>
  </Switch>
);

export default Routes;
