import { NavLink } from "react-router-dom";
import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";
import Footer from "../Common/Footer";
import { useState } from "react";

function ProDetailsTopbar() {
    return (
        <TopBar />
    );
}

function ProDetailsNavabar() {
    return (
        <Navbar />
    );
}

function ProDetailsBreadcrumb() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <NavLink className="breadcrumb-item text-dark" to="/">Home</NavLink>
                            <NavLink className="breadcrumb-item text-dark" href="/produncts">Products</NavLink>
                            <span className="breadcrumb-item active">Products Detail</span>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

function ProDetailsDescrib() {
    return (
        <>

            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div class="col-lg-5 mb-30">
                        <div id="product-carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner bg-light">
                                <div class="carousel-item active">
                                    <img className="w-100 h-100" src="img/odbktgp9.jpg" alt="" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i class="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i class="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>
                    <ProDetailsCol2 />

                </div>
                <ProDetailsDescrib1 />
            </div>
        </>
    );
}

function ProDetailsCol2() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        setQuantity(Math.max(1, quantity + value));
    };
    return (
        <>
            <div className="col-lg-7 h-auto mb-30 text-align-center">
                <div className="h-100 bg-light p-30">
                    <h3 className="text-left">Product Name Goes Here</h3>
                    <p className="mb-4 text-left">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold text-left mb-4">$150.00</h3>


                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus" onClick={() => handleQuantityChange(-1)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" value={quantity} />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus" onClick={() => handleQuantityChange(1)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <a class="btn btn-outline-danger py-2 px-4 mt-5 animate__animated animate__fadeInUp" href="https://www.amazon.in/eonic-Stainless-Multipurpose-Bathroom-Toothbrush/dp/B0BZP9TM5F">Shop Now</a>
                </div>
            </div>

        </>
    );
}

function ProDetailsDescrib1() {
    return (
        <>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="bg-light p-30">
                        <div className="nav nav-tabs mb-4">
                            <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                            <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">1 review for "Product Name"</h4>
                                        <div className="media mb-4">
                                            <img src="img/user.jpg" alt="images" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label for="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function ProDetailsFooter() {
    return (
        <Footer />
    );
}

export default ProDetailsTopbar;
export { ProDetailsNavabar, ProDetailsBreadcrumb, ProDetailsDescrib, ProDetailsFooter }