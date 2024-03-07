import { NavLink } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";

function ProductsTopbar() {
    return (
        <TopBar />
    );
}
function ProductsHeader() {
    return (
        <Navbar />
    );
}

function ProductsBread() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <NavLink className="breadcrumb-item text-dark" to='/'>Home</NavLink>
                            <a className="breadcrumb-item text-dark" href="/products">Products</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

function HWProducts({ productData }) {
    return (
        <>
            {
                productData.map((items, i) => {
                    return (
                        <>
                            <div class="col-lg-3 col-md-6 col-sm-6 pb-1" key={i}>
                                <div class="product-item bg-light mb-4">
                                    <NavLink className="nav-item nav-link" to={items.link}>
                                        <div class="product-img position-relative overflow-hidden">
                                            <img class="img-fluid w-100" src={items.images} alt="" />
                                        </div>
                                        <div class="text-center py-4">
                                            <a class="h6 text-decoration-none text-truncate" href="/#">{items.name}</a>
                                            <div class="d-flex align-items-center justify-content-center mt-2">
                                                <h5>{items.OrigiProce}</h5>
                                                <h6 class="text-muted ml-2"><del>{items.discPrice}</del></h6>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-center mb-1">
                                                <small class="fa fa-star text-primary mr-1"></small>
                                                <small class="fa fa-star text-primary mr-1"></small>
                                                <small class="fa fa-star text-primary mr-1"></small>
                                                <small class="fa fa-star text-primary mr-1"></small>
                                                <small class="fa fa-star text-primary mr-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <a class="btn btn-outline-danger px-4 mb-3 animate__animated animate__fadeInUp" href={items.shopLink}>Shop Now</a>



                                </div>
                            </div>
                        </>
                    );
                })
            }
        </>
    );
}

function ProductsFooter() {
    return (
        <Footer />
    );
}

export default ProductsTopbar
export { ProductsHeader, ProductsBread, HWProducts, ProductsFooter }