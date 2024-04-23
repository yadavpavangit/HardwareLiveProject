import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTopBar, { HomeAbout, HomeBrands, HomeCarousel, HomeCate, HomeFeatPro, HomeFooter, HomeHeader, HomeOffer } from './Components/Home';
import ProductsTopbar, { HWProducts, ProductsBread, ProductsFooter, ProductsHeader } from './Components/Products';
import HWStndLssTop, { HWStndLssIBread, HWStndLssItems, HWStndLssNavbar, } from './Components/HWStndLss';
import HoldersTop, { HoldersNavbar, HoldersProducts } from './Components/Holders';
import ProDetailsTopbar, { ProDetailsBreadcrumb, ProDetailsDescrib, ProDetailsFooter, ProDetailsNavabar } from './Components/ProdutsDetails';
import ContactTopbar, { ContactBread, ContactFormMap, ContactNavbar } from './Components/Contact';
import AboutNavbar, { HWAbout, AboutBread, AboutFooter, AboutIcons, AboutProd, AboutShipping, AboutShippingSummary } from './Components/About';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/holders' element={<Holders />} />
                        <Route path='/stainless' element={<StainlessItems />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/productDetailes' element={<ProductDetailes />} />
                    </Routes>
                </BrowserRouter>
            </Provider>

        </div>
    );
}

function Home() {
    return (
        <>
            <HomeTopBar />
            <HomeHeader />
            <HomeCarousel />
            <HomeCategories />
            <HomeAbout />
            <HomeFeaturesProd />
            <HomeOffer />
            <HomeBrands />
            <HomeFooter />
        </>
    );
}


function HomeCategories() {
    return (
        <>
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    <HomeCate link='/holders' image="img/odbktgp9.jpg" cateName="Bath Holder" numProducts='3 Products' />
                    <HomeCate link='/stainless' image="img/stnlss_tp.jpg" cateName="Toilet Paper Holder" numProducts='2 Products' />

                </div>
            </div>
        </>
    );
}

function HomeFeaturesProd() {
    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    <HomeFeatPro link="/holders" images="img/wn4ftxtp.png" name="handle" disPrice='₹760' realPrice='₹1020' />
                    <HomeFeatPro link="/holders" images="img/37j3fnys.png" name="handle" disPrice='₹860' realPrice='₹950' />
                    <HomeFeatPro link="/stainless" images="img/stnlss_tp.jpg" name="Paper Holder" disPrice='₹980' realPrice='₹1050' />
                </div>
            </div>
        </>
    );
}

function About() {
    return (
        <>
            <AboutNavbar />
            <HWAbout />
            <AboutBread />
            <AboutIcons />
            <AboutShipping />
            <AboutShippingSummary />
            <AboutProd />
            <AboutFooter />
        </>
    );
}

function Products() {
    return (
        <>
            <ProductsTopbar />
            <ProductsHeader />
            <ProductsBread />
            <ProductItems />
            <ProductsFooter />
        </>
    );
}

let productData = [
    {
        id: 1,
        link: "/holders",
        images: "img/odbktgp9.jpg",
        name: "Bath Holder",
        origiPrice: 500,
        dicPrice: 600,
        shopLink: "https://www.amazon.in/eonic-Multipurpose-Unbreakable-Toothbrush-Accessories/dp/B0C18XDBVY",
    },
    {
        id: 2,
        link: "/holders",
        images: "img/wn4ftxtp.png",
        name: "Bath Holder1",
        origiPrice: 500,
        dicPrice: 600,
        shopLink: "https://www.amazon.in/eonic-Multipurpose-Unbreakable-Soap-Holder/dp/B0C2TQWB2G",
    },
    {
        id: 3,
        link: "/holders",
        images: "img/37j3fnys.png",
        name: "Bath Holder2",
        origiPrice: 500,
        dicPrice: 600,
        shopLink: "https://www.amazon.in/eonic-Stainless-Multipurpose-Bathroom-Toothbrush/dp/B0BZP9TM5F",
    },
    {
        id: 4,
        link: "/stainless",
        images: "img/stnlss_tp.jpg",
        name: "Paper Holder",
        origiPrice: 500,
        dicPrice: 600,
        shopLink: "https://www.amazon.in/eonic-Stainless-Paper-Holder-Accessories/dp/B0C62CPKQS",
    },
    {
        id: 5,
        link: "/stainless",
        images: "img/odbktgp9.jpg",
        name: "Paper Holder1",
        origiPrice: 500,
        dicPrice: 600,
        shopLink: "https://www.amazon.in/dp/B0C18Y796V",
    },
]

function ProductItems() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12 col-md-8">
                        <div className="row pb-3">

                            <HWProducts productData={productData} />

                            <div className="col-12">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <NavLink className="page-link" to="/#"><span>Previous</span></NavLink>
                                        </li>
                                        <li className="page-item active"><NavLink className="page-link" to="/#">1</NavLink></li>
                                        <li className="page-item"><NavLink className="page-link" to="/#">2</NavLink></li>
                                        <li className="page-item"><NavLink className="page-link" to="/#">3</NavLink></li>
                                        <li className="page-item"><NavLink className="page-link" to="/#">Next</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Holders() {
    return (
        <>
            <HoldersTop />
            <HoldersNavbar />
            <HoldersProducts />
        </>
    );
}

function StainlessItems() {
    return (
        <>
            <HWStndLssTop />
            <HWStndLssNavbar />
            <HWStndLssProducts />
        </>
    );
}

function HWStndLssProducts() {
    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Paper Holders</span></h2>
                <div className="row px-xl-5">
                    <HWStndLssIBread />
                    <HWStndLssItems link="https://www.amazon.in/dp/B0C18Y796V/" image="img/stnlss_tp1.jpg" name="Toilet Paper Holder" price="₹1799" discPrice="₹785" />
                    <HWStndLssItems link="https://www.amazon.in/eonic-Stainless-Paper-Holder-Accessories/dp/B0C62CPKQS/" image="img/stnlss_tp.jpg" name="Toilet Paper Holder" price="₹1799" discPrice="₹785" />
                </div>
            </div>
        </>
    );
}

function ProductDetailes() {
    return (
        <>
            <ProDetailsTopbar />
            <ProDetailsNavabar />
            <ProDetailsBreadcrumb />
            <ProDetailsDescrib />
            <ProDetailsFooter />
        </>
    );
}

function Contact() {
    return (
        <>
            <ContactTopbar />
            <ContactNavbar />
            <ContactBread />
            <ContactFormMap />
        </>
    )
}


export default App;
