import './App.css';
import Header from './Components/Header'
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Works from './Components/Works';
import About from './Components/About';
import Product from './Components/Product';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App row">

      <Header />
      <Main />
      <Works />
      <About />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
