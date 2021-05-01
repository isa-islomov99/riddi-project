import './App.css';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurShirts from './components/ourShirts/OurShirts'
import Shop from './components/shop/Shop';
import ShopItem from './components/shopItem/ShopItem';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/ourShirts" component={OurShirts} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shopItem" exact component={ShopItem}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;