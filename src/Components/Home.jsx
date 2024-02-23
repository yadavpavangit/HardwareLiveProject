import { NavLink } from "react-router-dom";
import Footer from "../Common/Footer";
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
            <div class="container-fluid mb-3">
                <div class="row px-xl-5">
                    <div class="col-lg-8">
                        <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item position-relative active" style={{ height: "430px" }}>
                                    <img class="position-relative" src="img/crsl.jpeg" alt="" style={{ heigth: "100%", width: "100%", objectFit: "cover;" }} />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{ maxWidth: "700px;" }}>
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Gears</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img class="position-relative  w-100 h-100" src="img/crsl1.jpeg" alt="" style={{ objectFit: "cover;" }} />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{ maxWidth: "700px;" }}>
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">manufacturing</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img class="position-relative w-100 h-100" src="img/crsl2.jpeg" alt="" style={{ objectFit: "cover;" }} />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{ maxWidth: "700px;" }}>
                                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="product-offer mb-30" style={{ height: "200px" }}>
                            <img class=" position-relative w-100 h-100 img-fluid" src="img/offer.jpg" alt="offer" />
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Special Offer</h3>
                                <NavLink to='https://www.amazon.in/eonic-Stainless-Accessories-Toothbrush-Dispenser/dp/B0CC1S8VR7' className="btn btn-primary">Shop Now</NavLink>
                            </div>
                        </div>
                        <div class="product-offer mb-30" style={{ height: "200px" }}>
                            <img class=" position-relative w-100 h-100 img-fluid" src="img/offer1.jpg" alt="" />
                            <div class="offer-text">
                                <h6 class="text-white text-uppercase">Save 20%</h6>
                                <h3 class="text-white mb-3">Special Offer</h3>
                                <NavLink to='https://www.amazon.in/eonic-Stainless-Towel-Bathroom-Accessories/dp/B0C3764XKK/' className="btn btn-primary">Shop Now</NavLink>
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


// function HomeHWitems(props) {
//     return(
//         <>
//             <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
//                       <NavLink className="text-decoration-none" to={props.link}>
//                           <div className="product-item bg-light mb-4">
//                               <div className="product-img position-relative overflow-hidden">
//                                   <img className="img-fluid w-100" src={props.Img} alt="" />
//                                   <div className="product-action">
//                                       <a className="btn btn-outline-dark btn-square" href="//"><i className="fa fa-shopping-cart"></i></a>
//                                       <a className="btn btn-outline-dark btn-square" href="//"><i className="far fa-heart"></i></a>
//                                       <a className="btn btn-outline-dark btn-square" href="//"><i className="fa fa-sync-alt"></i></a>
//                                       <a className="btn btn-outline-dark btn-square" href="//"><i className="fa fa-search"></i></a>
//                                   </div>
//                               </div>
//                               <div className="text-center py-4">
//                                   <a className="h6 text-decoration-none text-truncate" href="//">{props.name}</a>
//                                   <div className="d-flex align-items-center justify-content-center mt-2">
//                                       <h5>{props.brandName}</h5>
//                                       {/* <h6 className="text-muted ml-2"><del>{props.prevPrice}</del></h6> */}
//                                   </div>
//                                   {/* <div className="d-flex align-items-center justify-content-center mb-1">
//                                       <small className="fa fa-star text-primary mr-1"></small>
//                                       <small className="fa fa-star text-primary mr-1"></small>
//                                       <small className="fa fa-star text-primary mr-1"></small>
//                                       <small className="fa fa-star text-primary mr-1"></small>
//                                       <small className="fa fa-star text-primary mr-1"></small>
//                                       <small>(99)</small>
//                                   </div> */}
//                               </div>
//                           </div>
//                       </NavLink>
//                   </div>
//         </>
//     );
// }

function HomeCate(props) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <NavLink className="text-decoration-none" to={props.link}>
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                            <img className="img-fluid" src={props.image} alt="" />
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>{props.cateName}</h6>
                            <small className="text-body">{props.numProducts}</small>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    );
}


function HomeOffer() {
    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className=" position-relative img-fluid" src="img/offer.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <NavLink to='https://www.amazon.in/eonic-Stainless-Accessories-Toothbrush-Dispenser/dp/B0CC1S8VR7' className="btn btn-primary">Shop Now</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className=" position-relative img-fluid" src="img/offer1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <NavLink to='https://www.amazon.in/eonic-Stainless-Towel-Bathroom-Accessories/dp/B0C3764XKK/' className="btn btn-primary">Shop Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function HomeBrands() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="bg-light p-4">
                                <img src="img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function HomeFooter() {
    return (
        <Footer />
    );
}

export default HomeTopBar;
export { HomeHeader, HomeCarousel, HomeCate, HomeOffer, HomeBrands, HomeFooter }