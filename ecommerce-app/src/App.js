import './App.css';
 import Header from './component/common/Header';
 import Footer from './component/common/Footer';
 import Slider from './component/home/Slider';
 import NewArrival from './component/home/NewArrival';
 import Featured from './component/home/Featured';
 import HomePage from './component/page/HomePage';
 import ContactPage from './component/page/ContactPage';
 import ProductByCategoryPage from './component/page/ProductByCategoryPage';
 import ForgetPasswordPage from './component/page/ForgetPasswordPage';
 import ShowDate from './component/tam/ShowDate';
import AppRoute from './route/AppRoute';


function App() {
  return (
    <div>
     <AppRoute />
    </div>
  );
}

export default App;
