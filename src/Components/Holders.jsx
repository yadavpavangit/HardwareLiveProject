import { NavLink } from "react-router-dom";
import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";

function HoldersTop() {
    return (
        <TopBar />
    );
}

function HoldersNavbar() {
    return (
        <Navbar />
    );
}

function HoldersBread() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <NavLink className="breadcrumb-item text-dark" to='/'>Home</NavLink>
                            <NavLink className="breadcrumb-item text-dark" to='/holders'>Bath Holders</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

function HoldersProducts() {
    const Img = ["img/37j3fnys.png", "img/wn4ftxtp.png", "img/odbktgp9.jpg"]
    const Name = ['Door Handle', "Rich Door Handle", "Noraml Holder"]
    const realPrice = [2999, 4500, 2132]
    const prevPrice = [3110, 4599, 3210]
    const link = ["https://www.amazon.in/eonic-Stainless-Multipurpose-Bathroom-Toothbrush/dp/B0BZP9TM5F/ref=sr_1_7?fbclid=PAAaZu6ksNmyHBoumPeO0CwvW9ZhDR-7hPF5NzJqh8vmXVMsg_h-Y5Hgv0z6E&m=A2R1EG6NKS9QWQ&nsdOptOutParam=true&qid=1706677877&s=merchant-items&sr=1-7", "https://www.amazon.in/eonic-Multipurpose-Unbreakable-Soap-Holder/dp/B0C2TQWB2G/ref=sr_1_5?fbclid=PAAaZu6ksNmyHBoumPeO0CwvW9ZhDR-7hPF5NzJqh8vmXVMsg_h-Y5Hgv0z6E&m=A2R1EG6NKS9QWQ&nsdOptOutParam=true&qid=1706677877&s=merchant-items&sr=1-5&th=1", "https://www.amazon.in/eonic-Multipurpose-Unbreakable-Toothbrush-Accessories/dp/B0C18XDBVY"]
    return (
        <>
            <HoldersBread />
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Bath Holders</span></h2>
                <div className="row px-xl-5">
                    {
                        Img.map((value, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={i}>
                                    <NavLink className="nav-item nav-link" to= {link[i]}>
                                        <div className="product-item bg-light mb-4">
                                            <div className="product-img position-relative overflow-hidden">
                                                <img className="img-fluid w-100" src={value} alt="" />
                                                {/* <div className="product-action">
                                                    <NavLink className="btn btn-outline-dark btn-square" to="//"><i className="fa fa-shopping-cart"></i></NavLink>
                                                    <NavLink className="btn btn-outline-dark btn-square" to="//"><i className="far fa-heart"></i></NavLink>
                                                    <NavLink className="btn btn-outline-dark btn-square" to="//"><i className="fa fa-sync-alt"></i></NavLink>
                                                    <NavLink className="btn btn-outline-dark btn-square" to="//"><i className="fa fa-search"></i></NavLink>
                                                </div> */}
                                            </div>
                                            <div className="text-center py-4">
                                                <NavLink className="h6 text-decoration-none text-truncate" to="">{Name[i]}</NavLink>
                                                <div className="d-flex align-items-center justify-content-center mt-2">
                                                    <h5>{realPrice[i]}</h5><h6 className="text-muted ml-2"><del>{prevPrice[i]}</del></h6>
                                                </div>
                                                {/* <div className="d-flex align-items-center justify-content-center mb-1">
                                                    <small className="fa fa-star text-primary mr-1"></small>
                                                    <small className="fa fa-star text-primary mr-1"></small>
                                                    <small className="fa fa-star text-primary mr-1"></small>
                                                    <small className="fa fa-star text-primary mr-1"></small>
                                                    <small className="fa fa-star text-primary mr-1"></small>
                                                    <small>(99)</small>
                                                </div> */}
                                                <NavLink className="btn btn-outline-danger py-2 px-4 mt-3 animate__animated animate__fadeInUp" to={link[i]}>Amazon</NavLink>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        }
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default HoldersTop;
export { HoldersNavbar, HoldersProducts }