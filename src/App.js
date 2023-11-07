// import logo from './logo.svg';
import './App.css';
import Header from './components/pages/header';
import CounterPage from './components/pages/counterpage';
import ProductsPage from './components/pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsPage/>
    </div>
  );
}

export default App;
