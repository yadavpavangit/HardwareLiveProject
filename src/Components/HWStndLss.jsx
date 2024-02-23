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

function HWStndLssItems(props) {
    return (
        <>

            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={props.image} alt="" />
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="//">{ props.name }</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>{props.discPrice}</h5><h6 className="text-muted ml-2"><del> {props.price} </del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HWStndLssTop;
export { HWStndLssNavbar, HWStndLssItems }