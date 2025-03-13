import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import CartDetail from './components/main/CartDetail';
import Checkout from './components/main/Checkout';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer
            position="bottom-right" 
            autoClose={3000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;