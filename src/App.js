import './App.css';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurShirts from './components/ourShirts/OurShirts'
import Shop from './components/shop/Shop';
import ShopItem from './components/shopItem/ShopItem';
import Card from "./components/card/card"
import Checkout from "./pages/checkout/checkout"
import EmptyCard from "./components/empty-card/emptyCard"
import Vaucher from "./pages/vaucher/vaucher"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/ourShirts" component={OurShirts} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shopItem" exact component={ShopItem}/>
        <Route path="/card" exact component={Card}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/emptyCard" exact component={EmptyCard}/>
        <Route path="/vaucher" exact component={Vaucher}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;