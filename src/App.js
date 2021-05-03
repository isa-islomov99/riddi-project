import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurShirts from './components/ourShirts/OurShirts';
import Shop from './components/shop/Shop';
import ShopItem from './components/shopItem/ShopItem';
<<<<<<< HEAD
import Card from "./components/card/card"
import Checkout from "./pages/checkout/checkout"
import EmptyCard from "./components/empty-card/emptyCard"
import Vaucher from "./pages/vaucher/vaucher"
=======
<<<<<<< HEAD
import ContactUs from './components/contactUsPage/mainContactUs/contactUs';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/ourShirts' component={OurShirts} />
				<Route path='/shop' exact component={Shop} />
				<Route path='/shopItem' exact component={ShopItem} />
				<Route path='/contactUs' exam component={ContactUs} />
			</Switch>
			<Footer />
		</div>
	);
=======
<<<<<<< HEAD
import AboutPage from './components/about/aboutPage';
import HowToSelectCustomShirt from './components/how-to-select-custom-shirt/how-to-select-custom-shirt';
=======
import ContactUs from './components/contactUsPage/mainContactUs/contactUs'
>>>>>>> d39f429bb4affef35a387ae9acba3d663127b51d
>>>>>>> cab5a49ece8b552240990e0ed740c2dec8526ea3

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/ourShirts" component={OurShirts} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shopItem" exact component={ShopItem}/>
<<<<<<< HEAD
        <Route path="/card" exact component={Card}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/emptyCard" exact component={EmptyCard}/>
        <Route path="/vaucher" exact component={Vaucher}/>
=======
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/shopItem" exact component={ShopItem}/>
        <Route path="/selectCustomShirt" exact component={HowToSelectCustomShirt}/>

>>>>>>> cab5a49ece8b552240990e0ed740c2dec8526ea3
      </Switch>
      <Footer />
    </div>
  );
>>>>>>> cdd4b00c30969c5ef098c27f5a2c2719e31151ef
}

export default App;
