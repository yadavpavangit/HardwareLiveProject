import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavLink className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" to="#navbar-vertical" style={{ height: "65px", padding: "0 30px" }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </NavLink>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: "999" }}>
                            <div className="navbar-nav w-100">
                                {/* <div className="nav-item dropdown dropright">
                                    <NavLink to="//" className="nav-NavLink dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></NavLink>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <NavLink to="//" className="dropdown-item">Men's Dresses</NavLink>
                                        <NavLink to="//" className="dropdown-item">Women's Dresses</NavLink>
                                        <NavLink to="//" className="dropdown-item">Baby's Dresses</NavLink>
                                    </div>
                                </div> */}
                                <NavLink to="/holders" className="nav-item nav-link">Bathroom Holrder</NavLink>
                                <NavLink to="/stainless" className="nav-item nav-link">Toilet Paper Holders</NavLink>
                                {/* <NavLink to="//" className="nav-item nav-link">Swimwear</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Sleepwear</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Sportswear</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Jumpsuits</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Blazers</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Jackets</NavLink>
                                <NavLink to="//" className="nav-item nav-link">Shoes</NavLink> */}
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <NavLink className="text-decoration-none d-block d-lg-none" to="/" activeclassname="active">
                                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </NavLink>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink className="nav-item nav-link" to='/' activeclassname="active">Home</NavLink>
                                    <NavLink className="nav-item nav-link" to='/about'>About Us</NavLink>
                                    <NavLink className="nav-item nav-link" to='/products' activeclassname="active">Products</NavLink>
                                    {/* <NavLink className="nav-item nav-link" to="/details">Products Detail</NavLink> */}
                                    
                                    <NavLink className="nav-item nav-link" to='/contact'>Contact</NavLink>
                                </div>

                            </div>
                            <div className="col-lg-4 col-6 text-left">
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for products" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;