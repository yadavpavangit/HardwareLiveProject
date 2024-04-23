import { NavLink } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Header";
import TopBar from "../Common/TopBar";
import { useDispatch } from "react-redux";
import { addToProductDetailes } from "../store/productSlice";

function ProductsTopbar() {
  return <TopBar />;
}
function ProductsHeader() {
  return <Navbar />;
}

function ProductsBread() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <NavLink className="breadcrumb-item text-dark" to="/">
                Home
              </NavLink>
              <NavLink className="breadcrumb-item text-dark" to="/products">
                Products
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function HWProducts({ productData }) {

    const dispatch = useDispatch()

  const showPro = (product) => {
    dispatch(addToProductDetailes(product))
  };
  return (
    <>
      {productData.map((items) => {
        return (
          <>
            <div className="col-lg-3 col-md-6 col-sm-6 pb-1" key={items.id}>
              <div className="product-item bg-light mb-4">
                <NavLink className="nav-item nav-link" to={items.link}>
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={items.images} alt="" />
                  </div>
                  <div className="text-center py-4">
                    <NavLink className="h6 text-decoration-none text-truncate" to="/#">
                      {items.name}
                    </NavLink>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{items.OrigiProce}</h5>
                      <h6 className="text-muted ml-2">
                        <del>{items.discPrice}</del>
                      </h6>
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
                </NavLink>
                <button
                  className="btn btn-outline-danger px-4 mb-3 animate__animated animate__fadeInUp"
                  onClick={() => showPro(items)}
                >                  
                  Product detailes
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

function ProductsFooter() {
  return <Footer />;
}

export default ProductsTopbar;
export { ProductsHeader, ProductsBread, HWProducts, ProductsFooter };
