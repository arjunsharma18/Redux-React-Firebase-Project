
import Homepage from './pages/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ProductInfo from './pages/ProductInfo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage />}></Route>
          <Route path='/login' exact element={<LoginPage />}></Route>
          <Route path='/register' exact element={<RegisterPage />}></Route>
          <Route path='/productinfo' exact element={<ProductInfo />}></Route>
          <Route path='/cart' exact element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
