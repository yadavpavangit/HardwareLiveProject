import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";

function HomeTopBar() {
    return (
        <TopBar />
    );
}

function HomeHeader() {
    return (
        <Navbar />
    );
}

function HomeCarousel() {
    return (
        <>
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: "cover" }} alt="" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="//">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: "cover" }} alt="" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="//">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{ objectFit: "cover" }} alt="" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="//">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="//" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="//" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// function HomeFeatures() {
//     return (
//         <>
//             <div className="container-fluid pt-5">
//                 <div className="row px-xl-5 pb-3">
//                     <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
//                         <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
//                             <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
//                             <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
//                         <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
//                             <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
//                             <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
//                         <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
//                             <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
//                             <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
//                         <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
//                             <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
//                             <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

function HomeCategories() {
    return(
        <>
            <div class="container-fluid pt-5">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Categories</span></h2>
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-4.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-4.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-2.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-1.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-4.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="//">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="img/cat-3.jpg" alt="" />
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
        </>
    );
}

export default HomeTopBar;
export { HomeHeader, HomeCarousel, HomeCategories }