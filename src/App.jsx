import { Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Succes from "./pages/Succes";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/orderPizza'>
          <OrderPizza />
        </Route>
        <Route path='/succes'>
          <Succes />
        </Route>
      </Switch>
      <Link to='/'>Home</Link>
      <Link to='/orderPizza'>OrderPizza</Link>
      <Link to='/succes'>Succes</Link>
    </>
  );
}

export default App;
