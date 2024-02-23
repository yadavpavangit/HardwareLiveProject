import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTopBar, { HomeBrands, HomeCarousel, HomeCate, HomeFooter, HomeHeader, HomeOffer } from './Components/Home';
import ProductsTopbar, { HWProducts, ProductsBread, ProductsFooter, ProductsHeader } from './Components/Products';
import HWStndLssTop, { HWStndLssItems, HWStndLssNavbar, } from './Components/HWStndLss';
import HoldersTop, { HoldersNavbar, HoldersProducts } from './Components/Holders';
import ProDetailsTopbar, { ProDetailsBreadcrumb, ProDetailsDescrib, ProDetailsFooter, ProDetailsNavabar } from './Components/ProdutsDetails';
import ContactTopbar, { ContactNavbar } from './Components/Contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/holders' element={<Holders />} />
                    <Route path='/stainless' element={<StainlessItems />} />
                    <Route path='/details' element={<ProductDetainls />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>

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

function ProductItems() {
    return (
        <>
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-lg-3 col-md-4">
                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter
                            by price</span></h5>
                        <div class="bg-light p-4 mb-30">
                            <form>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" checked id="price-all" />
                                    <label class="custom-control-label" for="price-all">All Price</label>
                                    <span class="badge border font-weight-normal">1000</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="price-1" />
                                    <label class="custom-control-label" for="price-1">$0 - $100</label>
                                    <span class="badge border font-weight-normal">150</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="price-2" />
                                    <label class="custom-control-label" for="price-2">$100 - $200</label>
                                    <span class="badge border font-weight-normal">295</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="price-3" />
                                    <label class="custom-control-label" for="price-3">$200 - $300</label>
                                    <span class="badge border font-weight-normal">246</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="price-4" />
                                    <label class="custom-control-label" for="price-4">$300 - $400</label>
                                    <span class="badge border font-weight-normal">145</span>
                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" class="custom-control-input" id="price-5" />
                                    <label class="custom-control-label" for="price-5">$400 - $500</label>
                                    <span class="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div>
                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter
                            by color</span></h5>
                        <div class="bg-light p-4 mb-30">
                            <form>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" checked id="color-all" />
                                    <label class="custom-control-label" for="price-all">All Color</label>
                                    <span class="badge border font-weight-normal">1000</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="color-1" />
                                    <label class="custom-control-label" for="color-1">Black</label>
                                    <span class="badge border font-weight-normal">150</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="color-2" />
                                    <label class="custom-control-label" for="color-2">White</label>
                                    <span class="badge border font-weight-normal">295</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="color-3" />
                                    <label class="custom-control-label" for="color-3">Red</label>
                                    <span class="badge border font-weight-normal">246</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="color-4" />
                                    <label class="custom-control-label" for="color-4">Blue</label>
                                    <span class="badge border font-weight-normal">145</span>
                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" class="custom-control-input" id="color-5" />
                                    <label class="custom-control-label" for="color-5">Green</label>
                                    <span class="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div>
                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Filter
                            by size</span></h5>
                        <div class="bg-light p-4 mb-30">
                            <form>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" checked id="size-all" />
                                    <label class="custom-control-label" for="size-all">All Size</label>
                                    <span class="badge border font-weight-normal">1000</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="size-1" />
                                    <label class="custom-control-label" for="size-1">XS</label>
                                    <span class="badge border font-weight-normal">150</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="size-2" />
                                    <label class="custom-control-label" for="size-2">S</label>
                                    <span class="badge border font-weight-normal">295</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="size-3" />
                                    <label class="custom-control-label" for="size-3">M</label>
                                    <span class="badge border font-weight-normal">246</span>
                                </div>
                                <div
                                    class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" class="custom-control-input" id="size-4" />
                                    <label class="custom-control-label" for="size-4">L</label>
                                    <span class="badge border font-weight-normal">145</span>
                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" class="custom-control-input" id="size-5" />
                                    <label class="custom-control-label" for="size-5">XL</label>
                                    <span class="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8">
                        <div class="row pb-3">
                            <div class="col-12 pb-1">
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button class="btn btn-sm btn-light"><i class="fa fa-th-large"></i></button>
                                        <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button>
                                    </div>
                                    <div class="ml-2">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown">Sorting</button>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="/#">Latest</a>
                                                <a class="dropdown-item" href="/#">Popularity</a>
                                                <a class="dropdown-item" href="/#">Best Rating</a>
                                            </div>
                                        </div>
                                        <div class="btn-group ml-2">
                                            <button type="button" class="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown">Showing</button>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="/#">10</a>
                                                <a class="dropdown-item" href="/#">20</a>
                                                <a class="dropdown-item" href="/#">30</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <HWProducts link="/holders" images="img/odbktgp9.jpg" name="Rich handle" realprice="500" prevprice="649" shopLink="https://www.amazon.in/eonic-Multipurpose-Unbreakable-Toothbrush-Accessories/dp/B0C18XDBVY" />
                            <HWProducts link="/holders" images="img/wn4ftxtp.png" name="Rich handle" realprice="500" prevprice="649" shopLink="https://www.amazon.in/eonic-Multipurpose-Unbreakable-Soap-Holder/dp/B0C2TQWB2G" />
                            <HWProducts link="/holders" images="img/37j3fnys.png" name="Rich handle" realprice="500" prevprice="649" shopLink="https://www.amazon.in/eonic-Stainless-Multipurpose-Bathroom-Toothbrush/dp/B0BZP9TM5F" />
                            <HWProducts link="/stainless" images="img/stnlss_tp.jpg" name="Rich handle" realprice="500" prevprice="649" shopLink="https://www.amazon.in/eonic-Stainless-Paper-Holder-Accessories/dp/B0C62CPKQS" />
                            <HWProducts link="/stainless" images="img/stnlss_tp1.jpg" name="Rich handle" realprice="500" prevprice="649" shopLink="https://www.amazon.in/dp/B0C18Y796V" />

                            <div class="col-12">
                                <nav>
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="/#"><span>Previous</span></a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="/#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="/#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="/#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="/#">Next</a></li>
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
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Bearings</span></h2>
                <div className="row px-xl-5">
                    <HWStndLssItems image="img/stnlss_tp1.jpg" name="Toilet Paper Holder" price="₹1799" discPrice="₹785" />
                    <HWStndLssItems image="img/stnlss_tp.jpg" name="Toilet Paper Holder" price="₹1799" discPrice="₹785" />
                </div>
            </div>
        </>
    );
}

function ProductDetainls() {
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
        </>
    )
}


export default App;
