import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTopBar, { HomeCarousel, HomeCategories, HomeHeader } from './Components/Home';
import ShopTopbar, {ShopHeader} from './Components/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

function Home() {
  return(
    <>
      <HomeTopBar />
      <HomeHeader />
      <HomeCarousel />
      {/* <HomeFeatures /> */}
      <HomeCategories />
    </>
  );
}

function Shop() {
  return(
    <>
      <ShopTopbar />
      <ShopHeader />
    </>
  );
}

export default App;
