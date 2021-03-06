import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product'
import Navbar from './components/Navbar/Navbar';
import ProductSlider from './components/ProductSlider/ProductSlider';
import Footer from './components/Footer/Footer';

function App() {
  const shopPage = [
    {
      product: "Fancy Product",
      price: "$40.00 - $80.00",
      options: "View options"
    },
    {
        product: "Special Item",
        price: "$18.00",
        options: "Add to cart"
    },
     {
        product: "Sale Item",
        price: "$25.00",
        options: "Add to cart"
    },
     {
        product: "Popular Item",
        price: "$40.00",
        options: "Add to cart"
    },
     {
        product: "Sale Item",
        price: "$20.00",
        options: "Add to cart"
    },
     {
        product: "Fancy Product",
        price: "$120.00 - $280.00",
        options: "View options"
    },
     {
        product: "Special Item",
        price: "$18.00",
        options: "Add to cart"
    },
     {
        product: "Popular Item",
        price: "$40.00",
        options: "Add to cart"
    },
]

  return (
    <div className='app'>
      <Navbar/>
      <ProductSlider/>
      <div className="container">
      {shopPage.map((shopPage) => <Product shopPage={shopPage}/>)}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
