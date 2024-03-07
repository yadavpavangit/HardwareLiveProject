import { NavLink } from "react-router-dom";
import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";

function HWStndLssTop() {
    return (
        <TopBar />
    );
}

function HWStndLssNavbar() {
    return (
        <Navbar />
    );
}

function HWStndLssIBread() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <NavLink className="breadcrumb-item text-dark" to='/'>Home</NavLink>
                            <NavLink className="breadcrumb-item text-dark" to='/stainless'>Paper Holders</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

function HWStndLssItems(props) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <NavLink className="nav-item nav-link" to={props.link}>
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={props.image} alt="" />
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="//">{props.name}</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>{props.discPrice}</h5><h6 className="text-muted ml-2"><del> {props.price} </del></h6>
                            </div>
                            <NavLink className="btn btn-outline-danger py-2 px-4 mt-3 animate__animated animate__fadeInUp" to={props.link}>Amazon</NavLink>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default HWStndLssTop;
export { HWStndLssNavbar, HWStndLssItems, HWStndLssIBread }