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
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{ height: "430px" }}>
                                    <img className="position-relative" src="img/crsl.jpeg" alt="" style={{ heigth: "100%", width: "100%", objectFit: "cover;" }} />
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-relative  w-100 h-100" src="img/crsl1.jpeg" alt="" style={{ objectFit: "cover;" }} />
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-relative w-100 h-100" src="img/crsl2.jpeg" alt="" style={{ objectFit: "cover;" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



function HomeFeatPro(props) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <NavLink className="nav-item nav-link" to={props.link}>
                    <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={props.images} alt="" />
                        </div>
                        <div className="text-center py-4">
                            <span className="h6 text-decoration-none text-truncate">{props.name}</span>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>{props.disPrice}</h5><h6 className="text-muted ml-2"><del>{props.realPrice}</del></h6>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    );
}

function HomeAbout() {
    return (
        <>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                    <h4 className="mb-3">About Eonic India</h4>
                    <p className="container" style={{ fontFamily: "sans-serif", fontWeight: "500" }}>"Eonic's Hardware" is your one-stop destination for all things hardware. From tools and fasteners to construction materials and electrical components, our shop offers a comprehensive range of high-quality products to meet your needs. With a focus on customer service and expertise, our knowledgeable staff are always ready to assist you in finding the perfect solution for your project.</p>
                    <p className="container" style={{ fontFamily: "sans-serif", fontWeight: "500" }}>"Hardware Hub" is a specialized shop offering a carefully curated selection of 50+ essential hardware products. Catering to both professional tradespeople and DIY enthusiasts, our shop provides a focused range of tools, fasteners, plumbing supplies, electrical components, and more. With a commitment to quality and convenience, Hardware Hub ensures that each product meets stringent standards, providing reliability and durability for all your projects. Our knowledgeable staff are on hand to offer expert advice and assistance, making Hardware Hub your go-to destination for all your hardware needs.</p>
                </div>
            </div>
        </>
    );
}


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
export { HomeHeader, HomeCarousel, HomeCate, HomeFeatPro, HomeAbout, HomeOffer, HomeBrands, HomeFooter }