// import logo from './logo.svg';
import './App.css';
import Header from './components/pages/header';
import CounterPage from './components/pages/counterpage';
import ProductsPage from './components/pages/ProductsPage';
import SideNavigation from './components/pages/App';

import AppContainer from './components/pages/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <AppContainer>
        <Routes>
          <Route path="/" element={<>This is Home Page</>} />
          <Route path="/allProduct" element={<ProductsPage />} />
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
